import React, { useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import {
  MultiCheckout as MultiCheckoutController,
  useLanguage,
  useUtils,
  useCustomer,
  useConfig,
  useSession,
  useValidationFields,
  useOrder,
  useToast,
  ToastType
} from 'ordering-components'

import parsePhoneNumber from 'libphonenumber-js'
import { NotFoundSource } from '../NotFoundSource'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { LoginForm } from '../LoginForm'
import { UserDetails } from '../UserDetails'
import { AddressDetails } from '../AddressDetails'
import { MultiCartsPaymethodsAndWallets } from '../MultiCartsPaymethodsAndWallets'
import { CouponControl } from '../../../../../components/CouponControl'

import {
  Container,
  WrapperLeftContainer,
  WrapperLeftContent,
  WrapperRightContainer,
  UserDetailsContainer,
  WrapperUserDetails,
  CartContainer,
  CartHeader,
  DriverTipDivider,
  MultiCartPriceContainer,
  PaymentMethodContainer,
  WrapperPlaceOrderButton,
  WarningText,
  DriverTipContainer,
  CouponContainer,
  AuthButtonList
} from './styles'
import { DriverTips } from '../DriverTips'
import { useTheme } from 'styled-components'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const MultiCheckoutUI = (props) => {
  const {
    placing,
    isCustomerMode,
    openCarts,
    loyaltyPlansState,
    handleGroupPlaceOrder,
    paymethodSelected,
    handleSelectPaymethod,
    handleSelectWallet,
    handlePaymethodDataChange,
    onRedirectPage,
    cartGroup,
    cartUuid,
    totalCartsFee,
    walletState,
    handleSearchRedirect,
    checkoutFieldsState
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [customerState] = useCustomer()
  const [validationFields] = useValidationFields()
  const [{ user, loading: userLoading }, { login }] = useSession()
  const [orderState] = useOrder()
  const history = useHistory()
  const [, { showToast }] = useToast()
  const theme = useTheme()
  const [cardList, setCardList] = useState([])
  const [userErrors, setUserErrors] = useState([])
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [requiredFields, setRequiredFields] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [allowedGuest, setAllowedGuest] = useState(false)
  const [openModal, setOpenModal] = useState({ login: false, signup: false, isGuest: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [productLoading, setProductLoading] = useState(false)

  const walletCarts = (Object.values(orderState?.carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum && cart?.wallets) || null) || []
  const isDisablePlaceOrderButton = cartGroup?.loading ||
    (!(paymethodSelected?.paymethod_id || paymethodSelected?.wallet_id) && cartGroup?.result?.balance > 0) ||
    (paymethodSelected?.paymethod?.gateway === 'stripe' && !paymethodSelected?.paymethod_data) ||
    (paymethodSelected?.gateway === 'stripe' && cardList?.cards?.length === 0) ||
    walletCarts.length > 0

  const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments']
  const isMultiDriverTips = configs?.checkout_multi_business_enabled?.value === '1'
  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []
  const totalFeeEnabled = configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []
  const allowDriverTipPickup = configs?.driver_tip_allowed_at_pickup?.value === '1' && orderState?.options?.type === 2

  const totalCartsPrice = cartGroup?.result?.balance
  const methodsPay = ['global_google_pay', 'global_apple_pay']
  const stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect']
  const creditPointPlan = loyaltyPlansState?.result?.find((loyal) => loyal.type === 'credit_point')
  const businessIds = openCarts.map((cart) => cart.business_id)
  const loyalBusinessIds = creditPointPlan?.businesses?.filter((b) => b.accumulates).map((item) => item.business_id) ?? []
  const creditPointPlanOnBusiness = businessIds.every((bid) => loyalBusinessIds.includes(bid)) && creditPointPlan
  const creditPointGeneralPlan = loyaltyPlansState?.result?.find((loyal) => loyal.type === 'credit_point')
  const loyalBusinessAvailable = creditPointGeneralPlan?.businesses?.filter((b) => b.accumulates) ?? []
  const isWalletEnabled = (configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' &&
    (configs?.wallet_cash_enabled?.value === '1' ||
      configs?.wallet_credit_point_enabled?.value === '1'))
  const checkoutFields = useMemo(() => checkoutFieldsState?.fields?.filter(field => field.order_type_id === orderState?.options?.type), [checkoutFieldsState, orderState?.options])

  const hexTest = /[0-9A-Fa-f]{6}/g
  const primaryColor = theme?.colors?.primary?.split?.('#')?.[1]
  const accumulationRateBusiness = (businessId) => {
    const value = loyalBusinessAvailable?.find((loyal) => loyal.business_id === businessId)?.accumulation_rate ?? 0
    return value || (creditPointGeneralPlan?.accumulation_rate ?? 0)
  }

  const getIncludedTaxes = (cart) => {
    if (cart?.taxes === null || !cart?.taxes) {
      return cart?.business?.tax_type === 1 ? cart?.tax : 0
    } else {
      return cart?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const clearAmount = (value) => parseFloat((Math.trunc(value * 100) / 100).toFixed(configs.format_number_decimal_length?.value ?? 2))
  const loyaltyRewardValue = openCarts.reduce((sum, cart) => sum + clearAmount((cart?.subtotal + getIncludedTaxes(cart)) * accumulationRateBusiness(cart?.business_id)), 0)

  const handlePlaceOrder = () => {
    if (stripePaymethods.includes(paymethodSelected?.gateway) && user?.guest_id) {
      setOpenModal({ ...openModal, signup: true, isGuest: true })
      return
    }

    if ((!userErrors.length && !requiredFields?.length) || (requiredFields?.length === 1 && isCustomerMode && requiredFields?.includes('email'))) {
      handleGroupPlaceOrder && handleGroupPlaceOrder()
      return
    }
    if (requiredFields?.length) {
      setIsOpen(true)
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
    setIsUserDetailsEdit(true)
  }

  const handlePlaceOrderAsGuest = () => {
    setIsOpen(false)
    handleGroupPlaceOrder && handleGroupPlaceOrder()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setIsUserDetailsEdit(false)
  }

  const checkGuestValidationFields = () => {
    const userSelected = isCustomerMode ? customerState.user : user
    const _requiredFields = checkoutFieldsState?.fields
      .filter((field) => (field?.order_type_id === orderState?.options?.type) && field?.enabled && field?.required_with_guest &&
        !notFields.includes(field?.validation_field?.code) &&
        userSelected && !userSelected[field?.validation_field?.code])
    const requiredFieldsCode = _requiredFields.map((item) => item?.validation_field?.code)
    const guestCheckoutCellPhone = checkoutFieldsState?.fields?.find((field) => field.order_type_id === orderState?.options?.type && field?.validation_field?.code === 'mobile_phone')
    if (
      userSelected &&
      !userSelected?.cellphone &&
      ((guestCheckoutCellPhone?.enabled &&
        guestCheckoutCellPhone?.required_with_guest) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      requiredFieldsCode.push('cellphone')
    }
    setRequiredFields(requiredFieldsCode)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const userSelected = isCustomerMode ? customerState.user : user
    const _requiredFields = []
    Object.values(checkoutFieldsState?.fields).map(field => {
      if (orderState.options?.type === field?.order_type_id &&
        field?.enabled &&
        field?.required &&
        !notFields.includes(field?.validation_field?.code)
      ) {
        if (userSelected && !userSelected[field?.validation_field?.code]) {
          _requiredFields.push(field?.validation_field?.code)
        }
      }
    })
    const mobilePhoneField = Object.values(checkoutFieldsState?.fields)?.find(field => field?.order_type_id === orderState?.options?.type && field?.validation_field?.code === 'mobile_phone')
    if (
      userSelected &&
      !userSelected?.cellphone &&
      ((mobilePhoneField?.enabled &&
        mobilePhoneField?.required) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      _requiredFields.push('cellphone')
    }
    setRequiredFields(_requiredFields)
    if (userSelected && userSelected?.cellphone) {
      if (userSelected?.country_phone_code) {
        let phone = null
        phone = `+${userSelected?.country_phone_code}${userSelected?.cellphone.replace(`+${userSelected?.country_phone_code}`, '')}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber?.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
    openModal?.isGuest && handlePlaceOrderAsGuest()
    setOpenModal({ ...openModal, signup: false, isGuest: false })
  }

  const handleSuccessLogin = (user) => {
    if (user) setOpenModal({ ...openModal, login: false })
  }

  useEffect(() => {
    if (checkoutFieldsState?.loading || customerState.loading || userLoading) return
    if (user?.guest_id) {
      checkGuestValidationFields()
    } else {
      checkValidationFields()
    }
  }, [checkoutFieldsState, user, customerState, orderState?.options?.type])

  useEffect(() => {
    if (openCarts.length || cartGroup.loading) {
      if (openCarts.length === 1) {
        onRedirectPage && onRedirectPage({
          page: 'checkout',
          params: {
            cartUuid: openCarts[0].uuid
          }
        })
      }
      return
    }
    onRedirectPage && onRedirectPage({ page: 'search' })
  }, [openCarts, cartGroup])

  useEffect(() => {
    if (walletState.error) {
      showToast(ToastType.Error, t(walletState.error, walletState.error?.[0]?.replace(/_/g, ' ')))
    }
  }, [walletState.error])

  useEffect(() => {
    if (methodsPay.includes(paymethodSelected?.paymethod?.gateway) && typeof paymethodSelected?.paymethod_data === 'string') {
      const hasSource = JSON.parse(paymethodSelected?.paymethod_data)?.source_id
      if (hasSource) {
        handlePlaceOrder()
      }
    }
  }, [paymethodSelected])

  return (
    <>
      {((!cartGroup?.loading && openCarts.length === 0) || !cartUuid) ? (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      ) : (
        <Container>
          <WrapperLeftContainer>
            <WrapperLeftContent>
              <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
              <h2 className='checkout-title'>{t('CHECKOUT', 'Checkout')}</h2>

              <AddressDetails
                isMultiCheckout
                openCarts={openCarts}
                apiKey={configs?.google_maps_api_key?.value}
                mapConfigs={mapConfigs}
                isCustomerMode={isCustomerMode}
                primaryColor={hexTest.test(primaryColor || '') ? `0x${primaryColor}` : 'red'}
              />

              <UserDetailsContainer>
                <WrapperUserDetails>
                  {(user?.guest_id && !allowedGuest) ? (
                    <AuthButtonList>
                      <h2>{t('CUSTOMER_DETAILS', 'Customer details')}</h2>
                      <Button color='primary' onClick={() => setOpenModal({ ...openModal, signup: true })}>
                        {t('SIGN_UP', 'Sign up')}
                      </Button>
                      <Button color='primary' outline onClick={() => setOpenModal({ ...openModal, login: true })}>
                        {t('LOGIN', 'Login')}
                      </Button>
                      <Button color='black' outline onClick={() => setAllowedGuest(true)}>
                        {t('CONTINUE_AS_GUEST', 'Continue as guest')}
                      </Button>
                    </AuthButtonList>
                  ) : (
                    <UserDetails
                      isUserDetailsEdit={isUserDetailsEdit}
                      useDefualtSessionManager
                      useSessionUser={!isCustomerMode}
                      isCustomerMode={isCustomerMode}
                      userData={isCustomerMode && customerState.user}
                      userId={isCustomerMode && customerState?.user?.id}
                      isCheckout
                      isSuccess={isSuccess}
                      isOrderTypeValidationField
                      requiredFields={requiredFields}
                      checkoutFields={checkoutFields}
                    />
                  )}
                </WrapperUserDetails>
              </UserDetailsContainer>

              <PaymentMethodContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                <MultiCartsPaymethodsAndWallets
                  userId={props.userId}
                  openCarts={openCarts}
                  balance={cartGroup?.result?.balance}
                  walletsPaymethod={cartGroup?.result?.wallets}
                  paymethodSelected={paymethodSelected}
                  handleSelectPaymethod={handleSelectPaymethod}
                  handleSelectWallet={handleSelectWallet}
                  handlePaymethodDataChange={handlePaymethodDataChange}
                  cartUuid={cartUuid}
                  isCustomerMode={isCustomerMode}
                  cartGroup={cartGroup}
                  setCardList={setCardList}
                  handlePlaceOrder={handlePlaceOrder}
                />
              </PaymentMethodContainer>

              {
                validationFields?.fields?.checkout?.coupon?.enabled &&
                openCarts.every(cart => cart.business_id && cart.status !== 2) &&
                configs?.multi_business_checkout_coupon_input_style?.value === 'group' && (
                  <DriverTipContainer>
                    <h1>{t('DISCOUNT_COUPON', 'Discount coupon')}</h1>
                    <CouponContainer>
                      <CouponControl
                        carts={openCarts}
                        businessIds={openCarts.map(cart => cart.business_id)}
                        price={openCarts.reduce((total, cart) => total + cart.total, 0)}
                      />
                    </CouponContainer>
                  </DriverTipContainer>
                )
              }

              {
                isMultiDriverTips &&
                (orderState?.options?.type === 1 || allowDriverTipPickup) &&
                validationFields?.fields?.checkout?.driver_tip?.enabled &&
                openCarts.every(cart => cart.business_id && cart.status !== 2) &&
                driverTipsOptions.length > 0 &&
                (
                  <DriverTipContainer>
                    <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                    <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
                    <DriverTips
                      isMulti
                      carts={openCarts}
                      businessIds={openCarts.map(cart => cart.business_id)}
                      driverTipsOptions={driverTipsOptions}
                      isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                      isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                      driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                        ? openCarts?.reduce((sum, cart) => sum + cart?.driver_tip, 0)
                        : openCarts[0]?.driver_tip_rate}
                      useOrderContext
                    />
                  </DriverTipContainer>
                )
              }
            </WrapperLeftContent>
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <CartContainer>
              <CartHeader>
                <h1>{t('MOBILE_FRONT_YOUR_ORDER', 'Your order')}</h1>
              </CartHeader>
              {openCarts.map(cart => (
                <React.Fragment key={cart.uuid}>
                  <Cart
                    cart={cart}
                    isMultiCheckout
                    isCartPending={cart?.status === 2}
                    hideCouponInput={configs?.multi_business_checkout_coupon_input_style?.value === 'group'}
                    isProducts={cart?.products?.length || 0}
                    hideDeliveryFee={configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1'}
                    hideDriverTip={configs?.multi_business_checkout_show_combined_driver_tip?.value === '1'}
                    businessConfigs={cart?.business?.configs}
                    productLoading={productLoading}
                    setProductLoading={setProductLoading}
                  />
                  <DriverTipDivider />
                </React.Fragment>
              ))}
              {walletCarts.length > 0 && (
                <WarningText>
                  {t('WARNING_PARTIAL_WALLET_CARTS', 'Important: One or more carts can`t be completed due a partial payment with cash/points wallet and requires to be paid individually')}
                </WarningText>
              )}
              {openCarts.length > 0 && (
                <MultiCartPriceContainer totalFeeEnabled={totalFeeEnabled}>
                  {!!totalCartsFee &&
                    configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1' &&
                    (
                      <span>
                        <p>{t('TOTAL_DELIVERY_FEE', 'Total delivery fee')}</p>
                        <p>{parsePrice(totalCartsFee)}</p>
                      </span>
                    )}
                  {openCarts.reduce((sum, cart) => sum + cart?.driver_tip, 0) > 0 &&
                    configs?.multi_business_checkout_show_combined_driver_tip?.value === '1' &&
                    (
                      <span>
                        <p>{t('DRIVER_TIP', 'Driver tip')}</p>
                        <p>{parsePrice(openCarts.reduce((sum, cart) => sum + cart?.driver_tip, 0))}</p>
                      </span>
                    )}
                  <div>
                    <h4>{t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')}</h4>
                    <h4>{parsePrice(totalCartsPrice)}</h4>
                  </div>
                  {isWalletEnabled && !!loyaltyRewardValue && isFinite(loyaltyRewardValue) && (
                    <span>
                      <p>&nbsp;</p>
                      <p>{t('REWARD_LOYALTY_POINT', 'Reward :amount: on loyalty points').replace(':amount:', loyaltyRewardValue)}</p>
                    </span>
                  )}
                  <p>
                    {t('MULTI_CHECKOUT_DESCRIPTION', 'You will receive a receipt for each business. The payment is not combined between multiple stores. Each payment is processed by the store')}
                  </p>
                </MultiCartPriceContainer>
              )}
            </CartContainer>

            <WrapperPlaceOrderButton>
              <Button
                color='primary'
                disabled={isDisablePlaceOrderButton || placing || cartGroup?.loading}
                onClick={handlePlaceOrder}
              >
                {placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
              </Button>
            </WrapperPlaceOrderButton>
          </WrapperRightContainer>

          <Alert
            title={t('CHECKOUT ', 'Checkout')}
            content={alertState.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={alertState.open}
            onClose={() => closeAlert()}
            onAccept={() => closeAlert()}
            closeOnBackdrop={false}
          />
          <Modal
            open={isOpen}
            width='760px'
            padding='30px'
            onClose={() => setIsOpen(false)}
          >
            <UserDetails
              isUserDetailsEdit={isUserDetailsEdit}
              useDefualtSessionManager
              useSessionUser={!isCustomerMode}
              isCustomerMode={isCustomerMode}
              userData={isCustomerMode && customerState.user}
              userId={isCustomerMode && customerState?.user?.id}
              requiredFields={requiredFields}
              isOrderTypeValidationField
              checkoutFields={checkoutFields}
              isCheckoutPlace
              setIsSuccess={setIsSuccess}
              isCheckout
              isEdit
              isModal
              handlePlaceOrderAsGuest={handlePlaceOrderAsGuest}
              isAllowGuest={paymethodSelected?.gateway === 'cash' || paymethodSelected?.gateway === 'card_delivery'}
              onClose={() => {
                setIsOpen(false)
                handlePlaceOrder()
              }}
            />
          </Modal>
          <Modal
            open={openModal.signup}
            width='760px'
            padding='30px'
            onClose={() => setOpenModal({ ...openModal, signup: false, isGuest: false })}
          >
            <SignUpForm
              useLoginByCellphone
              useChekoutFileds
              handleSuccessSignup={handleSuccessSignup}
              isPopup
              isGuest
            />
          </Modal>
          <Modal
            open={openModal.login}
            width='760px'
            padding='30px'
            onClose={() => setOpenModal({ ...openModal, login: false })}
          >
            <LoginForm
              handleSuccessLogin={handleSuccessLogin}
              isPopup
              isGuest
            />
          </Modal>
        </Container>
      )}
    </>
  )
}

export const MultiCheckout = (props) => {
  const multiCheckoutProps = {
    ...props,
    UIComponent: MultiCheckoutUI
  }
  return <MultiCheckoutController {...multiCheckoutProps} />
}
