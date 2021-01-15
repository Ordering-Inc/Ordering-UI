import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useConfig,
  useValidationFields
} from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'

import {
  Container,
  WrappContainer,
  UserDetailsContainer,
  BusinessDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton,
  WarningMessage,
  CartsList,
  CartItem,
  CartItemWrapper,
  LogoWrapper,
  CartItemLogo,
  CartItemInfo,
  CartItemActions,
  WarningText,
  WrapperUserDetails
} from './styles'

import { Button } from '../../styles/Buttons'

import { NotFoundSource } from '../NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'

import { DriverTipsOptions } from '../../utils'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const CheckoutUI = (props) => {
  const {
    errors,
    cartState,
    cart,
    placing,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder
  } = props

  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()
  const [{ options }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user }] = useSession()
  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(false)

  const handlePlaceOrder = () => {
    if (!userErrors.length) {
      handlerClickPlaceOrder && handlerClickPlaceOrder()
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
    const notFields = ['coupon', 'driver_tip', 'mobile_phone']

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.required && !notFields.includes(field.code)) {
        if (!user[field?.code]) {
          errors.push(t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `The field ${field?.name} is required`))
        }
      }
    })

    if (!user?.cellphone && validationFields?.fields?.checkout?.cellphone?.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'))
    }

    if (user?.cellphone) {
      if (user?.country_phone_code) {
        let phone = null
        phone = `+${user?.country_phone_code}${user?.cellphone}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user])

  useEffect(() => {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  return (
    <Container>
      <WrappContainer>
        {!cartState.loading && cart?.status === 2 && (
          <WarningMessage>
            <VscWarning />
            <h1>
              {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
            </h1>
          </WarningMessage>
        )}
        {!cartState.loading && cart?.status === 4 && (
          <WarningMessage>
            <VscWarning />
            <h1>
              {t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')}
            </h1>
          </WarningMessage>
        )}

        {(businessDetails?.loading || cartState.loading) ? (
          <div style={{ width: '100%', marginBottom: '20px' }}>
            <Skeleton height={35} style={{ marginBottom: '10px' }} />
            <Skeleton height={150} />
          </div>
        ) : (
          <AddressDetails
            location={businessDetails?.business?.location}
            businessLogo={businessDetails?.business?.logo}
            isCartPending={cart?.status === 2}
            businessId={cart?.business_id}
            apiKey={configs?.google_maps_api_key?.value}
            mapConfigs={mapConfigs}
          />
        )}

        <UserDetailsContainer>
          <WrapperUserDetails>
            {cartState.loading ? (
              <div>
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
                useSessionUser
                isCheckout
              />
            )}
          </WrapperUserDetails>
        </UserDetailsContainer>

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
          {!cartState.loading && businessDetails?.business && Object.values(businessDetails?.business).length > 0 && (
            <div>
              <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
              <div>
                <p><strong>{t('NAME', 'Name')}:</strong> {businessDetails?.business?.name}</p>
                <p><strong>{t('EMAIL', 'Email')}:</strong> {businessDetails?.business?.email}</p>
                <p><strong>{t('CELLPHONE', 'Cellphone')}:</strong> {businessDetails?.business?.cellphone}</p>
                <p><strong>{t('ADDRESS', 'Address')}:</strong> {businessDetails?.business?.address}</p>
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

        {!cartState.loading && cart && cart?.status !== 2 && (
          <PaymentMethodContainer>
            <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
            {businessDetails.business && (
              <PaymentOptions
                businessId={cart?.business_id}
                paymethods={businessDetails?.business?.paymethods}
                onPaymentChange={handlePaymethodChange}
                setErrorCash={setErrorCash}
              />
            )}
          </PaymentMethodContainer>
        )}

        {!cartState.loading &&
          cart &&
          options.type === 1 &&
          cart?.status !== 2 &&
          validationFields?.fields?.checkout?.driver_tip?.enabled &&
        (
          <DriverTipContainer>
            <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
            <DriverTips
              businessId={cart?.business_id}
              driverTipsOptions={DriverTipsOptions}
              useOrderContext
            />
          </DriverTipContainer>
        )}

        {!cartState.loading && cart && (
          <CartContainer>
            <h1>{t('YOUR_ORDER', 'Your Order')}</h1>
            <Cart
              isCartPending={cart?.status === 2}
              cart={cart}
              isCheckout
              isProducts={cart?.products?.length || 0}
            />
          </CartContainer>
        )}

        {!cartState.loading && cart && cart?.status !== 2 && (
          <WrapperPlaceOrderButton>
            <Button
              color={cart?.subtotal < cart?.minimum ? 'secundary' : 'primary'}
              disabled={!cart?.valid || !paymethodSelected || placing || errorCash || cart?.subtotal < cart?.minimum}
              onClick={() => handlePlaceOrder()}
            >
              {cart?.subtotal >= cart?.minimum ? (
                placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')
              ) : (
                `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
              )}
            </Button>
          </WrapperPlaceOrderButton>
        )}

        {!cart?.valid_address && cart?.status !== 2 && (
          <WarningText>
            {t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')}
          </WarningText>
        )}

        {!paymethodSelected && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')}
          </WarningText>
        )}

        {!cart?.valid_products && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')}
          </WarningText>
        )}

      </WrappContainer>
      <Alert
        title={t('CUSTOMER_DETAILS', 'Customer Details')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const Checkout = (props) => {
  const {
    errors,
    clearErrors,
    query,
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
  const [{ parsePrice }] = useUtils()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const cartsWithProducts = Object.values(orderState.carts).filter(cart => cart.products.length)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    clearErrors && clearErrors()
  }

  const handleOpenUpsellingPage = (cart) => {
    setCurrentCart(cart)
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCurrentCart(null)
    setCanOpenUpselling(false)
    handleCheckoutRedirect(currentCart.uuid)
  }

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts).filter(cart => cart.business_id === currentCart?.business_id))
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
      const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { result } = await response.json()

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2 && result.paymethod_data?.gateway === 'stripe_redirect' && query.get('payment_intent')) {
        try {
          const { error } = await confirmCart(cartUuid)
          if (error) {
            setAlertState({
              open: true,
              content: [error.message]
            })
          }
          handleOrderRedirect(result.order.uuid)
        } catch (error) {
          setAlertState({
            open: true,
            content: [error.message]
          })
        }
      } else {
        const cart = Array.isArray(result) ? null : result
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
    businessId: cartState.cart?.business_id
  }

  return (
    <>
      {!cartUuid && orderState.carts && cartsWithProducts.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && cartsWithProducts.length > 0 && (
        <CartsList>
          {cartsWithProducts.map(cart => (
            <CartItem
              key={cart.uuid}
            >
              <CartItemWrapper>
                <LogoWrapper>
                  <CartItemLogo bgimage={cart?.business?.logo} />
                </LogoWrapper>
                <CartItemInfo>
                  <h1>{cart?.business?.name}</h1>
                  <p>{parsePrice(cart?.total)}</p>
                </CartItemInfo>
              </CartItemWrapper>
              <CartItemActions>
                <Button
                  color={cart?.subtotal < cart?.minimum ? 'secundary' : 'primary'}
                  onClick={() => handleOpenUpsellingPage(cart)}
                  disabled={currentCart?.uuid === cart?.uuid || openUpselling || cart?.subtotal < cart?.minimum}
                >
                  {cart?.subtotal >= cart?.minimum ? (
                    (currentCart?.uuid === cart?.uuid && canOpenUpselling) ^ currentCart?.uuid === cart?.uuid
                      ? t('LOADING', 'Loading...')
                      : t('VIEW_ORDER', 'View order')
                  ) : (
                    `${t('MINIMUN_PURCHASE', 'Minimum')} ${parsePrice(cart?.minimum)}`
                  )}
                </Button>
              </CartItemActions>
            </CartItem>
          ))}
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
        <div style={{ width: '80%', margin: 'auto auto 20px' }}>
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={150} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} count={6} style={{ marginBottom: '10px' }} />
        </div>
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
