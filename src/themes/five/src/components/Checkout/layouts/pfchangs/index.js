import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Modal } from '../../../Modal'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useValidationFields,
  useConfig,
  useCustomer,
  useEvent
} from 'ordering-components'
import { UpsellingPage } from '../../../UpsellingPage'
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
  HandoffContainer,
  HandoffHeader,
  HandoffContent,
  DriverCustomContainer,
  BusinessDetails,
  ItemHeader,
  GoBackContainer,
  TipsSkeleton
} from './styles'

import { Button } from '../../../../styles/Buttons'
import { Input } from '../../../../styles/Inputs'

import { NotFoundSource } from '../../../NotFoundSource'

import { AddressDetails } from '../../../AddressDetails'
import { UserDetails } from '../../../UserDetails/layouts/pfchangs'
import { PaymentOptions } from '../../../PaymentOptions'
import { PaymentOptionWallet } from '../../../PaymentOptionWallet'
import { DriverTips } from '../../../DriverTips'
import { Cart } from '../../../Cart/layouts/pfchangs'
import { Alert } from '../../../Confirm'
import { CartContent } from '../../../CartContent'
import { Select } from '../../../../styles/Select'
import { PlaceSpot } from '../../../PlaceSpot'
import { AddressForm } from '../../../AddressForm/layouts/pfchangs'

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
    onPlaceOrderClick
  } = props

  const theme = useTheme()
  const [validationFields] = useValidationFields()
  // const [{ options, loading }, { changePaymethod }] = useOrder()
  const [{ options, loading }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()
  const [customerState] = useCustomer()
  const [events] = useEvent()
  const history = useHistory()

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [behalfName, setBehalfName] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [requiredFields, setRequiredFields] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasWallets, setHasWallets] = useState(true)

  const businessConfigs = businessDetails?.business?.configs ?? []
  const isWalletCashEnabled = businessConfigs.find(config => config.key === 'wallet_cash_enabled')?.value === '1'
  const isWalletCreditPointsEnabled = businessConfigs.find(config => config.key === 'wallet_credit_point_enabled')?.value === '1'
  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp

  const placeSpotTypes = [3, 4, 5]
  const placeSpotsEnabled = placeSpotTypes.includes(options?.type) && !useKioskApp
  // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)

  const isDisablePlaceOrderButton = !cart?.valid ||
    (!paymethodSelected && cart?.balance > 0) ||
    placing ||
    errorCash ||
    loading ||
    !cart?.valid_maximum ||
    (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ||
    // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
    (options.type === 1 &&
      validationFields?.fields?.checkout?.driver_tip?.enabled &&
      validationFields?.fields?.checkout?.driver_tip?.required &&
      (Number(cart?.driver_tip) <= 0))

  const tipsDefault = [0, 18, 20, 22]
  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || tipsDefault
    : configs?.driver_tip_options?.value || tipsDefault

  const deliveryOptions = instructionsOptions?.result && instructionsOptions?.result?.filter(option => option?.enabled)?.map(option => {
    return {
      value: option?.id, content: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name), showOnSelected: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name)
    }
  })

  const handlePlaceOrder = () => {
    if (!userErrors.length && !requiredFields?.length) {
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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setIsUserDetailsEdit(false)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']
    const userSelected = isCustomerMode ? customerState.user : user
    const _requiredFields = []

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.enabled && field?.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field?.code]) {
          _requiredFields.push(field?.code)
        }
      }
    })

    if (
      userSelected &&
      !userSelected?.cellphone &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      _requiredFields.push('cellphone')
    }
    setRequiredFields(_requiredFields)

    if (userSelected && userSelected?.cellphone) {
      if (userSelected?.country_phone_code) {
        let phone = null
        phone = `+${userSelected?.country_phone_code}${userSelected?.cellphone}`
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

  const handleGoToStore = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
  }

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user, customerState])

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
    if (cart?.products?.length) return
    handleStoreRedirect(cart?.business?.slug)
  }, [cart?.products])

  return (
    <Container isLoading={cartState.loading}>
      <WrapperLeftContainer>
        <GoBackContainer>
          <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
        </GoBackContainer>
        <WrapperLeftContent>
          {!cartState.loading && cart?.status === 2 && (
            <WarningMessage>
              <VscWarning />
              <h1>
                {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
              </h1>
            </WarningMessage>
          )}
          <>
            <UserDetailsContainer>
              <WrapperUserDetails>
                {cartState.loading || (isCustomerMode && !customerState?.user?.id) ? (
                  <div style={{ marginTop: '50px' }}>
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  </div>
                ) : (
                  <UserDetails
                    isUserDetailsEdit={isUserDetailsEdit}
                    cartStatus={cart?.status}
                    businessId={cart?.business_id}
                    useValidationFields
                    useDefualtSessionManager
                    useSessionUser={!isCustomerMode}
                    isCustomerMode={isCustomerMode}
                    userData={isCustomerMode && customerState.user}
                    userId={isCustomerMode && customerState?.user?.id}
                    isSuccess={isSuccess}
                    isCheckout
                  />
                )}
              </WrapperUserDetails>
            </UserDetailsContainer>
            {!cartState?.loading ? (
              <HandoffContainer>
                <ItemHeader>
                  <h1>{t('HANDOFF_DETAILS', 'Handoff Details')}</h1>
                </ItemHeader>
                <HandoffContent>
                  <h1>{t('YOUR_ADDRESS', 'Your Address')}</h1>
                  <AddressForm
                    useValidationFileds
                    address={options?.address || {}}
                  />
                </HandoffContent>
              </HandoffContainer>
            ) : (
              <div>
                <Skeleton height={30} style={{ margin: '10px 0px' }} />
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={30} style={{ marginBottom: '10px' }} />
                <Skeleton height={30} style={{ marginBottom: '10px' }} />
                <Skeleton height={55} style={{ marginBottom: '10px' }} />
              </div>
            )}

          </>

          {
            !cartState.loading &&
            cart &&
            cart?.business_id &&
            options.type === 1 &&
            cart?.status !== 2 &&
            driverTipsOptions.length > 0 &&
            (
              <>
                <DriverTipContainer>
                  <ItemHeader>
                    <h1>{t('ADD_TIP', 'Add Tip')}</h1>
                  </ItemHeader>
                  <DriverTips
                    businessId={cart?.business_id}
                    driverTipsOptions={driverTipsOptions}
                    isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                    driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                      ? cart?.driver_tip
                      : cart?.driver_tip_rate}
                    cart={cart}
                    useOrderContext
                    pfchangs
                  />
                </DriverTipContainer>
              </>
            )
          }

          {!cartState.loading && cart && (
            <PaymentMethodContainer>
              <ItemHeader>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
              </ItemHeader>
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
                businessId={businessDetails?.business?.id}
                isLoading={businessDetails.loading}
                paymethods={businessDetails?.business?.paymethods}
                onPaymentChange={handlePaymethodChange}
                errorCash={errorCash}
                setErrorCash={setErrorCash}
                handleOrderRedirect={handleOrderRedirect}
                isCustomerMode={isCustomerMode}
                paySelected={paymethodSelected}
                handlePlaceOrder={handlePlaceOrder}
                onPlaceOrderClick={onPlaceOrderClick}
              />
            </PaymentMethodContainer>
          )}
          {isWalletEnabled && !businessDetails?.loading && hasWallets && (
            <WalletPaymentOptionContainer>
              <PaymentOptionWallet
                cart={cart}
                businessConfigs={businessDetails?.business?.configs}
                setHasWallets={setHasWallets}
              />
            </WalletPaymentOptionContainer>
          )}
        </WrapperLeftContent>
      </WrapperLeftContainer>
      <WrapperRightContainer>
        {(businessDetails?.loading || cartState.loading) && !businessDetails?.error && (
          <div>
            <div>
              <Skeleton height={35} style={{ marginBottom: '10px' }} />
              <Skeleton height={35} style={{ marginBottom: '10px' }} />
            </div>
          </div>
        )}
        {!cartState.loading && businessDetails?.business && Object.values(businessDetails?.business)?.length > 0 && (
          <BusinessDetails>
            <img src={businessDetails?.business?.header} />
            <div>
              <h2>{businessDetails?.business?.name}</h2>
              <span onClick={() => cart?.business?.slug && handleGoToStore(cart?.business?.slug)}>{('GO_TO_BUSINESS', 'Go to business')}</span>
            </div>
          </BusinessDetails>
        )}
        {!cartState.loading && cart && (
          <CartContainer>
            <Cart
              isCartPending={cart?.status === 2}
              cart={cart}
              useKioskApp={useKioskApp}
              isCheckout
              isProducts={cart?.products?.length || 0}
            />
          </CartContainer>
        )}

        {!cartState.loading && cart && cart?.status !== 2 && (
          <WrapperPlaceOrderButton>
            <Button
              color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100))) ? 'secundary' : 'primary'}
              disabled={isDisablePlaceOrderButton}
              onClick={() => handlePlaceOrder()}
            >
              {!cart?.valid_maximum ? (
                `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
              ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
                `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
              ) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
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

        {/* {placeSpotTypes.includes(options?.type) && !cart?.place && hasBusinessPlaces && (
          <WarningText>
            {t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')}
          </WarningText>
        )} */}

        {options.type === 1 &&
          validationFields?.fields?.checkout?.driver_tip?.enabled &&
          validationFields?.fields?.checkout?.driver_tip?.required &&
          (Number(cart?.driver_tip) <= 0) && (
            <WarningText>
              {t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')}
            </WarningText>
          )}
      </WrapperRightContainer>
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
          useValidationFields
          useDefualtSessionManager
          useSessionUser={!isCustomerMode}
          isCustomerMode={isCustomerMode}
          userData={isCustomerMode && customerState.user}
          userId={isCustomerMode && customerState?.user?.id}
          requiredFields={requiredFields}
          setIsSuccess={setIsSuccess}
          isCheckout
          isEdit
          isModal
          onClose={() => setIsOpen(false)}
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
    handleCheckoutListRedirect
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
      setCartState({ ...cartState, loading: true })
      const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
      const url = userCustomer
        ? `${ordering.root}/carts/${cartId}?user_id=${userCustomer?.id}`
        : `${ordering.root}/carts/${cartId}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result } = await response.json()

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2) {
        try {
          const confirmCartRes = await confirmCart(cartUuid)
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
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length > 0 && (
        <CartsList>
          <CartContent
            carts={cartsWithProducts}
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
          <WrapperLeftContainer style={{ marginTop: '70px' }}>
            <Skeleton height={30} />
            <Skeleton height={100} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <TipsSkeleton>
              <Skeleton height={55} width={65} style={{ marginBottom: '10px' }} />
              <Skeleton height={55} width={65} style={{ marginBottom: '10px' }} />
              <Skeleton height={55} width={65} style={{ marginBottom: '10px' }} />
              <Skeleton height={55} width={65} style={{ marginBottom: '10px' }} />
            </TipsSkeleton>
            <Skeleton height={50} style={{ marginTop: '45px', marginBottom: '10px' }} />
            <Skeleton height={35} style={{ marginBottom: '10px' }} />
            <Skeleton height={35} style={{ marginBottom: '10px' }} />
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <Skeleton height={200} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
            <Skeleton height={60} />
            <Skeleton height={80} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
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
