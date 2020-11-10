import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { Checkout as CheckoutController, useOrder, useSession, useApi, useLanguage, useUtils } from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'

import {
  Container,
  WrappContainer,
  UserDetailsContainer,
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
  WarningText
} from './styles'

import { Button } from '../../styles/Buttons'

import { NotFoundSource } from '../NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'

import { DriverTipsOptions } from '../../utils'

const CheckoutUI = (props) => {
  const {
    cartState,
    cart,
    placing,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder
  } = props

  const [{ options }] = useOrder()
  const [, t] = useLanguage()
  const [errorCash, setErrorCash] = useState(true)

  const mapConfigs = {
    mapZoom: 17,
    mapSize: {
      width: 640,
      height: 190
    }
  }

  return (
    <Container>
      <WrappContainer>
        {cart?.status === 2 && (
          <WarningMessage>
            <VscWarning />
            <h1>
              {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
            </h1>
          </WarningMessage>
        )}
        {cart?.status === 4 && (
          <WarningMessage>
            <VscWarning />
            <h1>
              {t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')}
            </h1>
          </WarningMessage>
        )}

        {cartState.loading ? (
          <div style={{ width: '100%', marginBottom: '20px' }}>
            <Skeleton height={35} style={{ marginBottom: '10px' }} />
            <Skeleton height={150} />
          </div>
        ) : (
          <AddressDetails
            businessId={cart?.business_id}
            apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
            mapConfigs={mapConfigs}
          />
        )}

        <UserDetailsContainer>
          <div className='user'>
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
                cartStatus={cart?.status}
                businessId={cart?.business_id}
                useValidationFields
                useDefualtSessionManager
                useSessionUser
              />
            )}
          </div>
          {(businessDetails?.loading || cartState.loading) && (
            <div className='business'>
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
            <div className='business'>
              <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
              <div>
                <p>{businessDetails?.business?.name}</p>
                <p>{businessDetails?.business?.email}</p>
                <p>{businessDetails?.business?.cellphone}</p>
                <p>{businessDetails?.business?.address}</p>
              </div>
            </div>
          )}
          {businessDetails?.error && businessDetails?.error?.length > 0 && (
            <div className='business'>
              <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
              {businessDetails?.error.map((e, i) => (
                <p key={i}>{t('ERROR', 'ERROR')}: [{e}]</p>
              ))}
            </div>
          )}
        </UserDetailsContainer>

        {!cartState.loading && cart && cart?.status !== 2 && (
          <PaymentMethodContainer>
            <h1>{t('PAYMENT_METHOD', 'Payment Method')}</h1>
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

        {!cartState.loading && cart && options.type === 1 && cart?.status !== 2 && (
          <DriverTipContainer>
            <h1>{t('DRIVER_TIP', 'Driver Tip')}</h1>
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
              cart={cart}
              isProducts={cart?.products?.length || 0}
            />
          </CartContainer>
        )}

        {!cartState.loading && cart && cart?.status !== 2 && (
          <WrapperPlaceOrderButton>
            <Button
              color='primary'
              disabled={!cart?.valid || !paymethodSelected || placing || errorCash}
              onClick={() => handlerClickPlaceOrder()}
            >
              {placing ? t('PLACING', 'Placing...') : t('PLACE_ORDER', 'Place Order')}
            </Button>
          </WrapperPlaceOrderButton>
        )}

        {!cart?.valid_address && (
          <WarningText>
            {t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')}
          </WarningText>
        )}

        {!paymethodSelected && (
          <WarningText>
            {t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')}
          </WarningText>
        )}

        {/* {error && error?.length > 0 && (
          error.map((e, i) => (
            <p key={i}>{t('ERROR', 'ERROR')}: [{e}]</p>
          ))
        )} */}
      </WrappContainer>

    </Container>
  )
}

export const Checkout = (props) => {
  const {
    query,
    cartUuid,
    handleOrderRedirect,
    handleCheckoutRedirect,
    handleSearchRedirect,
    handleCheckoutListRedirect
  } = props

  const [orderState] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)

  const cartsWithProducts = Object.values(orderState.carts).filter(cart => cart.products.length)

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

  const getOrder = async (cartId) => {
    try {
      setCartState({ ...cartState, loading: true })
      const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { result } = await response.json()

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2 && result.paymethod_data.gateway === 'stripe_redirect' && query.get('payment_intent')) {
        try {
          await orderState.confirmCart(cartUuid)
          handleOrderRedirect(result.order.uuid)
        } catch (error) {
          console.log(error)
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
                  color='primary'
                  onClick={() => handleOpenUpsellingPage(cart)}
                  disabled={currentCart?.uuid === cart?.uuid || openUpselling}
                >
                  {(currentCart?.uuid === cart?.uuid && canOpenUpselling) ^ currentCart?.uuid === cart?.uuid ? t('LOADING', 'Loading...') : t('PAY_CART', 'Pay order')}
                </Button>
              </CartItemActions>
            </CartItem>
          ))}
        </CartsList>
      )}

      {cartUuid && cartState.error && cartState.error?.length > 0 && (
        <NotFoundSource
          content={t('ERROR_CART', 'Sorry, the selected cart was not found.')}
          btnTitle={t('CHECKOUT_REDIRECT', 'Go to Checkout list')}
          onClickButton={handleCheckoutListRedirect}
        />
      )}

      {cartState.loading && (
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
    </>
  )
}
