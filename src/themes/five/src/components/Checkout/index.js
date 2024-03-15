import React, { useEffect, useMemo, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Modal } from '../Modal'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useConfig,
  useCustomer,
  useEvent
} from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'
import { useHistory } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import {
  Container,
  WrapperLeftContainer,
  UserDetailsContainer,
  BusinessDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton,
  WarningMessage,
  CartsList,
  WarningText,
  WrapperUserDetails,
  WrapperRightContainer,
  WrapperLeftContent,
  CheckOutDivider,
  DriverTipDivider,
  DeliveryOptionsContainer,
  WalletPaymentOptionContainer,
  CartHeader,
  SelectSpotContainer,
  WrapperActionsInput,
  MobileWrapperPlaceOrderButton,
  OrderContextUIWrapper,
  HeaderContent,
  AuthButtonList,
  Flag,
  SectionTitleContainer,
  SpinnerContainer
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

import { NotFoundSource } from '../NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { PaymentOptionWallet } from '../PaymentOptionWallet'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { CartContent } from '../CartContent'
import { Select } from '../../styles/Select'
import { PlaceSpot } from '../PlaceSpot'
import { OrderContextUI } from '../OrderContextUI'
import { SignUpForm } from '../SignUpForm'
import { LoginForm } from '../LoginForm'
import { OrderDetail } from './OrderDetail'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { OrderTypesSelectorNew } from '../OrderTypesSelectorNew'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const CheckoutUI = (props) => {
  const {
    cart,
    errors,
    placing,
    cartState,
    useKioskApp,
    loyaltyPlansState,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder,
    handleOrderRedirect,
    isCustomerMode,
    isResetPaymethod,
    setIsResetPaymethod,
    handleChangeDeliveryOption,
    instructionsOptions,
    deliveryOptionSelected,
    handleStoreRedirect,
    onPlaceOrderClick,
    setPlaceSpotNumber,
    placeSpotNumber,
    checkoutFieldsState,
    alseaCheckPriceError,
    isLoadingCheckprice
  } = props

  const theme = useTheme()
  const [ordering] = useApi()
  const [{ options, loading }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user, loading: userLoading }, { login }] = useSession()
  const [{ configs }] = useConfig()
  const [customerState] = useCustomer()
  const [events] = useEvent()

  const history = useHistory()
  const windowSize = useWindowSize()

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [behalfName, setBehalfName] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [requiredFields, setRequiredFields] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [openModal, setOpenModal] = useState({ login: false, signup: false, isGuest: false })
  const [allowedGuest, setAllowedGuest] = useState(false)
  const [cardList, setCardList] = useState([])
  const [paymethodClicked, setPaymethodClicked] = useState(null)
  const [productLoading, setProductLoading] = useState(false)

  const shouldActivateOrderDetailModal = ordering?.project?.includes('alsea')
  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')]
  const cardsMethods = ['stripe', 'credomatic']
  const stripePaymethods = ['stripe', 'stripe_connect', 'stripe_redirect']
  const businessConfigs = businessDetails?.business?.configs ?? []
  const isTableNumberEnabled = configs?.table_numer_enabled?.value
  const isWalletCashEnabled = businessConfigs.find(config => config.key === 'wallet_cash_enabled')?.value === '1'
  const isWalletCreditPointsEnabled = businessConfigs.find(config => config.key === 'wallet_credit_point_enabled')?.value === '1'
  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' &&
    (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp && !isCustomerMode
  const isMultiDriverTips = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments']
  const hexTest = /[0-9A-Fa-f]{6}/g
  const primaryColor = theme?.colors?.primary?.split?.('#')?.[1]
  const placeSpotTypes = [3, 4, 5]
  const placeSpotsEnabled = placeSpotTypes.includes(options?.type) && !useKioskApp
  const isGiftCardCart = !cart?.business_id
  const checkoutFields = useMemo(() => checkoutFieldsState?.fields?.filter(field => field.order_type_id === options?.type), [checkoutFieldsState, options])
  const guestCheckoutDriveTip = useMemo(() => checkoutFields?.find(field => field.order_type_id === 1 && field?.validation_field?.code === 'driver_tip'), [JSON.stringify(checkoutFields), options])
  const guestCheckoutComment = useMemo(() => checkoutFields?.find(field => field.order_type_id === options?.type && field?.validation_field?.code === 'comments'), [JSON.stringify(checkoutFields), options])
  const guestCheckoutCoupon = useMemo(() => checkoutFields?.find(field => field.order_type_id === options?.type && field?.validation_field?.code === 'coupon'), [JSON.stringify(checkoutFields), options])
  const guestCheckoutZipcode = useMemo(() => checkoutFields?.find(field => field.order_type_id === options?.type && field?.validation_field?.code === 'zipcode'), [JSON.stringify(checkoutFields), options])

  // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)
  const validateCommentsCartField = (guestCheckoutComment?.enabled && (user?.guest_id ? guestCheckoutComment?.required_with_guest : guestCheckoutComment?.required)) && (cart?.comment === null || cart?.comment?.trim().length === 0)
  const validateDriverTipField = options.type === 1 && (guestCheckoutDriveTip?.enabled && (user?.guest_id ? guestCheckoutDriveTip?.required_with_guest : guestCheckoutDriveTip?.required)) && (Number(cart?.driver_tip) <= 0)
  const validateCouponField = (guestCheckoutCoupon?.enabled && (user?.guest_id ? guestCheckoutCoupon?.required_with_guest : guestCheckoutCoupon?.required)) && !cart?.offers?.some(offer => offer?.type === 2)
  const validateZipcodeCard = (guestCheckoutZipcode?.enabled && (user?.guest_id ? guestCheckoutZipcode?.required_with_guest : guestCheckoutZipcode?.required)) && paymethodSelected?.gateway === 'stripe' && paymethodSelected?.data?.card && !paymethodSelected?.data?.card?.zipcode

  const isDisablePlaceOrderButton = !cart?.valid ||
    (!paymethodSelected && cart?.balance > 0) ||
    (cardsMethods.includes(paymethodSelected?.gateway) && cardList?.cards?.length === 0) ||
    placing ||
    errorCash ||
    loading ||
    (isTableNumberEnabled === '1' && (options?.type === 3 && !(cartState?.cart?.spot_number || cart?.spot_number || placeSpotNumber))) ||
    !cart?.valid_maximum ||
    (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ||
    // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
    validateCommentsCartField ||
    validateDriverTipField ||
    validateCouponField ||
    validateZipcodeCard ||
    !!alseaCheckPriceError ||
    isLoadingCheckprice

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const deliveryOptions = instructionsOptions?.result && Array.isArray(instructionsOptions?.result) && instructionsOptions?.result?.filter(option => option?.enabled)?.map(option => {
    return {
      value: option?.id, content: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name), showOnSelected: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name)
    }
  })

  const hideBusinessAddress = theme?.checkout?.components?.business?.components?.address?.hidden
  const hideBusinessDetails = theme?.checkout?.components?.business?.hidden
  const hideBusinessMap = theme?.checkout?.components?.map?.hidden
  const hideCustomerDetails = theme?.checkout?.components?.customer?.hidden
  const driverTipsField = !cartState.loading && cart && cart?.business_id && options.type === 1 && cart?.status !== 2 && (guestCheckoutDriveTip?.enabled) && driverTipsOptions.length > 0 && !useKioskApp

  const creditPointPlan = loyaltyPlansState?.result?.find(loyal => loyal.type === 'credit_point')
  const creditPointPlanOnBusiness = creditPointPlan?.businesses?.find(b => b.business_id === cart?.business_id && b.accumulates)

  const handlePlaceOrder = () => {
    if (placing) return
    if (stripePaymethods.includes(paymethodSelected?.gateway) && user?.guest_id) {
      setOpenModal({ ...openModal, signup: true, isGuest: true })
      return
    }

    if ((!userErrors.length && !requiredFields?.length) || (requiredFields?.length === 1 && isCustomerMode && requiredFields?.includes('email'))) {
      const body = {}
      if (behalfName) {
        body.on_behalf_of = behalfName
      }
      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body)
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
    const body = {}
    if (behalfName) {
      body.on_behalf_of = behalfName
    }
    handlerClickPlaceOrder && handlerClickPlaceOrder(null, body)
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
      .filter((field) => (field?.order_type_id === options?.type) && field?.enabled && field?.required_with_guest &&
        !notFields.includes(field?.validation_field?.code) &&
        field?.validation_field?.code !== 'email' &&
        userSelected && !userSelected[field?.validation_field?.code])
    const requiredFieldsCode = _requiredFields.map((item) => item?.validation_field?.code)
    const guestCheckoutCellPhone = checkoutFieldsState?.fields?.find((field) => field.order_type_id === options?.type && field?.validation_field?.code === 'mobile_phone')
    const guestCheckoutEmail = checkoutFieldsState?.fields?.find((field) => field.order_type_id === options?.type && field?.validation_field?.code === 'email')
    if (
      userSelected &&
      !userSelected?.guest_cellphone &&
      ((guestCheckoutCellPhone?.enabled &&
        guestCheckoutCellPhone?.required_with_guest) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      requiredFieldsCode.push('cellphone')
    }
    if (
      userSelected &&
      !userSelected?.guest_email &&
      guestCheckoutEmail?.enabled &&
      guestCheckoutEmail?.required_with_guest
    ) {
      requiredFieldsCode.push('email')
    }
    setRequiredFields(requiredFieldsCode)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const userSelected = isCustomerMode ? customerState.user : user
    const _requiredFields = []
    Object.values(checkoutFieldsState?.fields).map(field => {
      if (options?.type === field?.order_type_id &&
        field?.enabled &&
        field?.required &&
        !notFields.includes(field?.validation_field?.code)
      ) {
        if (userSelected && !userSelected[field?.validation_field?.code]) {
          _requiredFields.push(field?.validation_field?.code)
        }
      }
    })
    const mobilePhoneField = Object.values(checkoutFieldsState?.fields)?.find(field => field?.order_type_id === options?.type && field?.validation_field?.code === 'mobile_phone')
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
        if (parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10) && !phoneNumber?.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  const handleSuccessSignup = async (user) => {
    await login({
      user,
      token: user?.session?.access_token
    })
    if (openModal?.isGuest && requiredFields?.length === 0) {
      handlePlaceOrderAsGuest()
    }
    setOpenModal({ ...openModal, signup: false, isGuest: false })
  }

  const handleSuccessLogin = (user) => {
    if (user) setOpenModal({ ...openModal, login: false })
  }

  const handleScrollTo = () => {
    if (!((!paymethodSelected && cart?.balance > 0) && cart?.status !== 2)) return
    const scrollElement = document.querySelector('.paymentsContainer')
    window.scrollTo(0, scrollElement.offsetTop - 20)
  }

  useEffect(() => {
    if (checkoutFieldsState?.loading || customerState.loading || userLoading) return
    if (user?.guest_id) {
      checkGuestValidationFields()
    } else {
      checkValidationFields()
    }
  }, [checkoutFieldsState, user, customerState, options?.type])

  useEffect(() => {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  useEffect(() => {
    if (isResetPaymethod) {
      handlePaymethodChange(null)
      setIsResetPaymethod(true)
      // changePaymethod(cart?.business_id, null, null)
    }
  }, [isResetPaymethod])

  useEffect(() => {
    if (cart?.products?.length || !userLoading) return
    if (cart?.business_id !== null) {
      handleStoreRedirect(cart?.business?.slug)
    } else {
      events.emit('go_to_page', { page: 'wallets' })
    }
  }, [JSON.stringify(cart?.products)])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <WrapperLeftContainer>
        <WrapperLeftContent>
          <HeaderContent>
            <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
            {windowSize?.width < 576 && (
              <OrderContextUIWrapper>
                <OrderContextUI isCheckOut />
              </OrderContextUIWrapper>
            )}
          </HeaderContent>
          {!cartState.loading && cart?.status === 2 && (
            <WarningMessage>
              <VscWarning />
              <h1>
                {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
              </h1>
            </WarningMessage>
          )}
          <h2 className='checkout-title'>{t('CHECKOUT', 'Checkout')}</h2>

          {!useKioskApp ? (
            <>
              {cart?.business_id && !hideBusinessMap && (
                <>
                  {(businessDetails?.loading || cartState.loading) ? (
                    <div style={{ width: '100%', marginBottom: '20px' }}>
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      <Skeleton height={150} />
                    </div>
                  ) : (
                    <AddressDetails
                      location={cart?.business?.location}
                      businessLogo={businessDetails?.business?.logo || theme.images?.dummies?.businessLogo}
                      isCartPending={cart?.status === 2}
                      businessId={cart?.business_id}
                      apiKey={configs?.google_maps_api_key?.value}
                      mapConfigs={mapConfigs}
                      isCustomerMode={isCustomerMode}
                      cart={cart}
                      primaryColor={hexTest.test(primaryColor || '') ? `0x${primaryColor}` : 'red'}
                    />
                  )}
                </>
              )}
              {!hideCustomerDetails && (
                <UserDetailsContainer>
                  <WrapperUserDetails>
                    {cartState.loading || (isCustomerMode && !customerState?.user?.id) ? (
                      <div>
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      </div>
                    ) : (
                      (user?.guest_id && !allowedGuest) ? (
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
                          cartStatus={cart?.status}
                          businessId={cart?.business_id}
                          useDefualtSessionManager
                          useSessionUser={!isCustomerMode}
                          isCustomerMode={isCustomerMode}
                          userData={isCustomerMode && customerState.user}
                          userId={isCustomerMode && customerState?.user?.id}
                          isOrderTypeValidationField
                          requiredFields={requiredFields}
                          checkoutFields={checkoutFields}
                          isSuccess={isSuccess}
                          isCheckout
                        />
                      )
                    )}
                  </WrapperUserDetails>
                </UserDetailsContainer>
              )}
              {cart?.business_id && !hideBusinessDetails && (
                <BusinessDetailsContainer>
                  {(businessDetails?.loading || cartState.loading) && !businessDetails?.error && (
                    <div>
                      <div>
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      </div>
                    </div>
                  )}
                  {!cartState.loading && businessDetails?.business && Object.values(businessDetails?.business)?.length > 0 && (
                    <div>
                      <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
                      <div>
                        {!hideBusinessAddress && (
                          <p>{businessDetails?.business?.address}</p>
                        )}
                        <p>{businessDetails?.business?.name}</p>
                        <p>{businessDetails?.business?.email}</p>
                        <p>{businessDetails?.business?.cellphone}</p>
                        {businessDetails?.business?.address_notes && <p>{businessDetails?.business?.address_notes}</p>}
                      </div>
                    </div>
                  )}
                  {businessDetails?.error && businessDetails?.error?.length > 0 && (
                    <div>
                      <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
                      <NotFoundSource
                        content={businessDetails?.error[0]?.message || businessDetails?.error[0]}
                      />
                    </div>
                  )}
                </BusinessDetailsContainer>
              )}
              <CheckOutDivider />
            </>
          ) : (
            <WrapperActionsInput>
              <h1>
                {t('WHATS_YOUR_NAME', "What's your name?")}
              </h1>
              <Input
                placeholder={t('WRITE_YOUR_NAME', 'Write your name')}
                autoComplete='off'
                onChange={(e) => setBehalfName(e?.target?.value)}
              />
            </WrapperActionsInput>
          )}

          {cartState.loading && (
            <div>
              <div>
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={55} style={{ marginBottom: '10px' }} />
              </div>
            </div>
          )}

          {!useKioskApp && cart?.business_id && (
            <>
              {!cartState.loading && deliveryOptionSelected !== undefined && options?.type === 1 && (
                <DeliveryOptionsContainer>
                  <h2>{t('DELIVERY_DETAILS', 'Delivery Details')}</h2>
                  <Select
                    defaultValue={deliveryOptionSelected}
                    options={deliveryOptions}
                    onChange={(val) => handleChangeDeliveryOption(val)}
                  />
                </DeliveryOptionsContainer>
              )}
              <CheckOutDivider />
            </>
          )}

          {!cartState.loading && cart && (
            <PaymentMethodContainer className='paymentsContainer'>
              <SectionTitleContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                <Flag>{t('REQUIRED', 'Required')}</Flag>
              </SectionTitleContainer>
              {!cartState.loading && cart?.status === 4 && (
                <WarningMessage style={{ marginTop: 20 }}>
                  <VscWarning />
                  <h1>
                    {t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')}
                  </h1>
                </WarningMessage>
              )}
              <PaymentOptions
                cart={cart}
                useKioskApp={useKioskApp}
                isDisabled={cart?.status === 2}
                businessId={!isGiftCardCart ? businessDetails?.business?.id : -1}
                isLoading={!isGiftCardCart ? businessDetails.loading : false}
                paymethods={businessDetails?.business?.paymethods}
                onPaymentChange={handlePaymethodChange}
                errorCash={errorCash}
                setErrorCash={setErrorCash}
                handleOrderRedirect={handleOrderRedirect}
                isCustomerMode={isCustomerMode}
                paySelected={paymethodSelected}
                handlePlaceOrder={handlePlaceOrder}
                onPlaceOrderClick={onPlaceOrderClick}
                setCardList={setCardList}
                requiredFields={requiredFields}
                openUserModal={setIsOpen}
                paymethodClicked={paymethodClicked}
                setPaymethodClicked={setPaymethodClicked}
              />
            </PaymentMethodContainer>
          )}

          {isWalletEnabled && !businessDetails?.loading && (
            <WalletPaymentOptionContainer>
              <PaymentOptionWallet
                cart={cart}
                loyaltyPlansState={loyaltyPlansState}
                businessConfigs={businessDetails?.business?.configs}
              />
            </WalletPaymentOptionContainer>
          )}
        </WrapperLeftContent>
      </WrapperLeftContainer>
      <WrapperRightContainer>
        <OrderTypesSelectorNew />
        {
          !!(!isMultiDriverTips && driverTipsField) &&
          <>
            <DriverTipContainer>
              <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
              <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
              <DriverTips
                businessId={cart?.business_id}
                driverTipsOptions={driverTipsOptions}
                isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                  ? cart?.driver_tip
                  : cart?.driver_tip_rate}
                cart={cart}
                useOrderContext
              />
            </DriverTipContainer>
            <DriverTipDivider />
          </>
        }
        {!cartState.loading && placeSpotsEnabled && cart?.business_id && (
          <SelectSpotContainer>
            <PlaceSpot
              isCustomerMode={isCustomerMode}
              isCheckout
              isInputMode
              isHomeStyle
              cart={cart}
              spotNumberDefault={cartState?.cart?.spot_number ?? cart?.spot_number}
              vehicleDefault={cart?.vehicle}
              setPlaceSpotNumber={setPlaceSpotNumber}
            />
          </SelectSpotContainer>
        )}
        {!cartState.loading && cart && (
          <CartContainer>
            <CartHeader>
              <h1>{t('MOBILE_FRONT_YOUR_ORDER', 'Your order')}</h1>
              {cart?.business?.slug && (
                <span onClick={() => cart?.business?.slug && handleStoreRedirect && handleStoreRedirect(cart?.business?.slug)}>{t('ADD_PRODUCTS', 'Add products')}</span>
              )}
            </CartHeader>
            <Cart
              isCartPending={cart?.status === 2}
              cart={cart}
              useKioskApp={useKioskApp}
              isCheckout
              isProducts={cart?.products?.length || 0}
              viewString='checkout'
              businessConfigs={businessConfigs}
              loyaltyRewardRate={
                creditPointPlanOnBusiness?.accumulation_rate ??
                (!!creditPointPlanOnBusiness && creditPointPlan?.accumulation_rate) ?? 0
              }
              hideCommentsByValidationCheckout={!guestCheckoutComment?.enabled}
              hideCouponByValidationCheckout={!guestCheckoutCoupon?.enabled}
              productLoading={productLoading}
              setProductLoading={setProductLoading}
            />
            {isLoadingCheckprice && (
              <SpinnerContainer>
                <SpinnerLoader />
              </SpinnerContainer>
            )}
          </CartContainer>
        )}
        {
          !!(isMultiDriverTips && driverTipsField) &&
          (
            <DriverTipContainer>
              <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
              <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
              <DriverTips
                businessId={cart?.business_id}
                driverTipsOptions={driverTipsOptions}
                isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                  ? cart?.driver_tip
                  : cart?.driver_tip_rate}
                cart={cart}
                useOrderContext
              />
            </DriverTipContainer>
          )
        }

        {windowSize.width >= 576 && !cartState.loading && cart && cart?.status !== 2 && (
          <WrapperPlaceOrderButton>
            <Button
              color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100))) ? 'secundary' : 'primary'}
              disabled={isDisablePlaceOrderButton}
              onClick={() => shouldActivateOrderDetailModal
                ? setOpenModal({ ...openModal, orderDetail: true })
                : handlePlaceOrder()}
            >
              {!cart?.valid_maximum ? (
                `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
              ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
                `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
              ) : placing ? t('PLACING_ORDER', 'Placing order') : t('PLACE_ORDER', 'Place Order')}
            </Button>
          </WrapperPlaceOrderButton>
        )}

        {!cart?.valid_address && cart?.status !== 2 && (
          <WarningText>
            {t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')}
          </WarningText>
        )}

        {(!paymethodSelected && cart?.balance > 0) && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')}
          </WarningText>
        )}

        {!cart?.valid_products && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')}
          </WarningText>
        )}

        {isTableNumberEnabled === '1' && (options?.type === 3 && !(cart?.spot_number || placeSpotNumber)) && (
          <WarningText>
            {t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')}
          </WarningText>
        )}

        {validateDriverTipField && !isGiftCardCart &&
          (
            <WarningText>
              {t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')}
            </WarningText>
          )}
        {validateCouponField &&
          (
            <WarningText>
              {t('WARNING_INVALID_COUPON_FIELD', 'Coupon is required.')}
            </WarningText>
          )}
        {validateCommentsCartField && (
          <WarningText>
            {t('WARNING_INVALID_CART_COMMENTS', 'Cart comments is required.')}
          </WarningText>
        )}

        {validateZipcodeCard && (
          <WarningText>
            {t('WARNING_CARD_ZIPCODE_REQUIRED', 'Your card selected has not zipcode')}
          </WarningText>
        )}

        {!!alseaCheckPriceError && (
          <WarningText>
            {alseaCheckPriceError}
          </WarningText>
        )}

        {isLoadingCheckprice && (
          <WarningText>
            {t('RECALCULATING_TOTAL_PRICE', 'Recalculating total price')}
          </WarningText>
        )}
        {cart?.valid_preorder !== undefined && !cart?.valid_preorder && (
          <WarningText>
            {t('INVALID_CART_MOMENT', 'Selected schedule time is invalid, please select a schedule into the business schedule interval.')}
          </WarningText>
        )}
      </WrapperRightContainer>
      {windowSize.width < 576 && !cartState.loading && cart && cart?.status !== 2 && (
        <MobileWrapperPlaceOrderButton>
          <span>{parsePrice(cart?.total)}</span>
          <Button
            color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100))) ? 'secundary' : 'primary'}
            disabled={isDisablePlaceOrderButton}
            onClick={() => isDisablePlaceOrderButton
              ? handleScrollTo('.paymentsContainer')
              : shouldActivateOrderDetailModal
                ? setOpenModal({ ...openModal, orderDetail: true })
                : handlePlaceOrder()}
          >
            {!cart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
            ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
            ) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
          </Button>
        </MobileWrapperPlaceOrderButton>
      )}
      <Alert
        title={t('CUSTOMER_DETAILS', 'Customer Details')}
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
          cartStatus={cart?.status}
          businessId={cart?.business_id}
          useDefualtSessionManager
          useSessionUser={!isCustomerMode}
          isCustomerMode={isCustomerMode}
          userData={isCustomerMode && customerState.user}
          userId={isCustomerMode && customerState?.user?.id}
          requiredFields={requiredFields}
          setIsSuccess={setIsSuccess}
          isCheckout
          isCheckoutPlace
          isEdit
          isModal
          handlePlaceOrderAsGuest={handlePlaceOrderAsGuest}
          isOrderTypeValidationField
          checkoutFields={checkoutFields}
          isAllowGuest={paymethodSelected?.gateway === 'cash' || paymethodSelected?.gateway === 'card_delivery'}
          onClose={() => {
            setIsOpen(false)
            if (paymethodClicked) {
              setPaymethodClicked({
                ...paymethodClicked,
                confirmed: true
              })
            } else {
              handlePlaceOrder()
            }
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
      <Modal
        open={openModal.orderDetail}
        width='760px'
        padding='30px'
        onClose={() => setOpenModal({ ...openModal, orderDetail: false })}
        title={(orderTypeList[options?.type - 1]) || t('DELIVERY', 'Delivery')}
        titleStyle={{
          color: theme?.colors?.primary,
          fontSize: 30
        }}
      >
        <OrderDetail
          item={cart}
          placingOrder={placing}
          orderType={options?.type}
          customerAddress={options?.address?.address}
          onClick={handlePlaceOrder}
        />
      </Modal>
    </Container>
  )
}

export const Checkout = (props) => {
  const {
    errors,
    clearErrors,
    // query,
    cartUuid,
    handleOrderRedirect,
    handleCheckoutRedirect,
    handleSearchRedirect,
    handleCheckoutListRedirect,
    businessSlug
  } = props

  const [orderState, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isResetPaymethod, setIsResetPaymethod] = useState(false)

  const cartsWithProducts = orderState?.carts && (Object.values(orderState?.carts)?.filter(cart => cart?.products && cart?.products?.length) || null)
  const carts = businessSlug
    ? cartsWithProducts.filter((cart) => cart?.business?.slug === businessSlug || businessSlug === cart?.business_id)
    : cartsWithProducts
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    clearErrors && clearErrors()
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCurrentCart(null)
    setCanOpenUpselling(false)
    handleCheckoutRedirect(currentCart.uuid)
  }

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts)?.filter(cart => cart?.business_id === currentCart?.business_id))
    }
  }, [orderState.loading])

  useEffect(() => {
    if (currentCart?.products) {
      setOpenUpselling(true)
    }
  }, [currentCart])

  useEffect(() => {
    if (errors?.length) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  const getOrder = async (cartId) => {
    try {
      let result = {}
      const cart = carts.find(cart => cart.uuid === cartId)
      const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
      if (cart && !userCustomer) {
        result = { ...cart }
      } else {
        setCartState({ ...cartState, loading: true })
        const url = userCustomer
          ? `${ordering.root}/carts/${cartId}?user_id=${userCustomer?.id}`
          : `${ordering.root}/carts/${cartId}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId
          }
        })
        const content = await response.json()
        result = content.result
      }

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2) {
        let credomaticData = null
        if (result?.paymethod_data?.gateway === 'credomatic') {
          const urlParams = new URLSearchParams(window.location.search)
          const paramsObj = Object.fromEntries(urlParams.entries())
          credomaticData = {
            credomatic: {
              ...paramsObj
            }
          }
        }
        try {
          const confirmCartRes = await confirmCart(cartUuid, credomaticData)
          if (confirmCartRes.error) {
            setAlertState({
              open: true,
              content: typeof confirmCartRes.result === 'string'
                ? [confirmCartRes.result]
                : confirmCartRes.result
            })
            setIsResetPaymethod(true)
          }
          if (confirmCartRes.result.order?.uuid) {
            handleOrderRedirect(confirmCartRes.result.order.uuid)
          }
          setCartState({
            ...cartState,
            loading: false,
            cart: result
          })
        } catch (error) {
          setAlertState({
            open: true,
            content: [error.message]
          })
        }
      } else {
        let cart = Array.isArray(result) ? null : result
        const spotNumberFromStorage = window.localStorage.getItem('table_number')
        if (spotNumberFromStorage) {
          const spotNumber = JSON.parse(spotNumberFromStorage)?.tableNumber
          const slug = JSON.parse(spotNumberFromStorage)?.slug
          if (cart?.business?.slug === slug) {
            cart = {
              ...cart,
              spot_number: parseInt(spotNumber, 10)
            }
          }
        }
        setCartState({
          ...cartState,
          loading: false,
          cart,
          error: cart ? null : result
        })
      }
    } catch (e) {
      setCartState({
        ...cartState,
        loading: false,
        error: [e.toString()]
      })
    }
  }

  useEffect(() => {
    if (token && cartUuid) {
      getOrder(cartUuid)
    } else {
      setCartState({ ...cartState, loading: false })
    }
  }, [token, cartUuid])

  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    cartState,
    uuid: cartUuid,
    isResetPaymethod,
    setIsResetPaymethod
  }

  return (
    <>
      {!cartUuid && orderState.carts && carts && carts?.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && carts && carts?.length > 0 && (
        <CartsList>
          <CartContent
            carts={carts}
            isOrderStateCarts={!!orderState.carts}
            isForceOpenCart
          />
        </CartsList>
      )}

      {cartUuid && cartState.error && cartState.error?.length > 0 && (
        <NotFoundSource
          content={t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.')}
          btnTitle={t('CHECKOUT_REDIRECT', 'Go to Checkout list')}
          onClickButton={handleCheckoutListRedirect}
        />
      )}

      {cartState.loading && !(window.location.pathname === '/checkout') && (
        <Container>
          <WrapperLeftContainer>
            <Skeleton height={30} />
            <Skeleton height={100} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
            <Skeleton height={60} />
            <Skeleton height={80} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
          </WrapperRightContainer>
        </Container>
      )}

      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <CheckoutController {...checkoutProps} />}

      {currentCart?.products && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          cartProducts={currentCart?.products}
          business={currentCart?.business}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}

      <Alert
        title={t('CHECKOUT ', 'Checkout')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
