import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useValidationFields,
  useConfig,
  useCustomer
} from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'
import { OrderTypeSelectorContent } from '../OrderTypeSelectorContent'
import { MomentContent } from '../MomentContent'
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
  BusinessDetailsInfo,
  BusinessName,
  OrderDetailsContainer
} from './styles'

import { Button } from '../../styles/Buttons'

import { NotFoundSource } from '../NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { CartContent } from '../CartContent'
import { Select } from '../../styles/Select'
import { Modal } from '../Modal'

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
    orderTypes,
    handleStoreRedirect
  } = props

  const theme = useTheme()
  const [validationFields] = useValidationFields()
  // const [{ options, loading }, { changePaymethod }] = useOrder()
  const [{ options, loading }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()
  const [{ user }] = useSession()
  const [{ configs, loading: loadingConfigs }] = useConfig()
  const [customerState] = useCustomer()

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const deliveryOptions = instructionsOptions?.result && instructionsOptions?.result?.filter(option => option?.enabled)?.map(option => {
    return {
      value: option?.id, content: t(option?.name.toUpperCase().replace(/\s/g, '_')), showOnSelected: option?.name
    }
  })

  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

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
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']
    const userSelected = isCustomerMode ? customerState.user : user

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.enabled && field?.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field?.code]) {
          errors.push(t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `The field ${field?.name} is required`))
        }
      }
    })

    if (
      userSelected &&
      !userSelected?.cellphone &&
      validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required
    ) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'))
    }

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
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <WrapperLeftContainer>
          <WrapperLeftContent>
            {!cartState.loading && cart?.status === 2 && (
              <WarningMessage>
                <VscWarning />
                <h1>
                  {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
                </h1>
              </WarningMessage>
            )}
            <h2 className='checkout-title'>{t('CHECK_OUT', 'Checkout')}</h2>
            {props.beforeElementsSectionOne?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionOne?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionOne && (
              (businessDetails?.loading || cartState.loading) ? (
                <div style={{ width: '100%', marginBottom: '20px' }}>
                  <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  <Skeleton height={150} />
                </div>
              ) : (
                <AddressDetails
                  location={businessDetails?.business?.location}
                  businessLogo={businessDetails?.business?.logo || theme.images?.dummies?.businessLogo}
                  isCartPending={cart?.status === 2}
                  businessId={cart?.business_id}
                  apiKey={configs?.google_maps_api_key?.value}
                  mapConfigs={mapConfigs}
                  isCustomerMode={isCustomerMode}
                />
              )
            )}

            {props.beforeElementsSectionTwo?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionTwo?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionTwo && (
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
                      isCheckout
                    />
                  )}
                </WrapperUserDetails>
              </UserDetailsContainer>
            )}

            {props.beforeElementsSectionThree?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionThree?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionThree && (
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
                    <BusinessDetailsInfo>
                      <img src={businessDetails?.business?.logo} />
                      <div>
                        <BusinessName>{businessDetails?.business?.name}</BusinessName>
                        <p>{businessDetails?.business?.address}</p>
                        <p>{businessDetails?.business?.email}</p>
                        <p>{businessDetails?.business?.cellphone}</p>
                      </div>
                    </BusinessDetailsInfo>
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
            {props.beforeElementsSectionEight?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionEight?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {cartState.loading && (
              <div>
                <div>
                  <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  <Skeleton height={55} style={{ marginBottom: '10px' }} />
                </div>
              </div>
            )}
            {!props.isHideSectionEight && !cartState.loading && deliveryOptionSelected !== undefined && options?.type === 1 && (
              <DeliveryOptionsContainer>
                <h1>{t('DELIVERY_DETAILS', 'Delivery Details')}</h1>
                <Select
                  defaultValue={deliveryOptionSelected}
                  options={deliveryOptions}
                  onChange={(val) => handleChangeDeliveryOption(val)}
                />
              </DeliveryOptionsContainer>
            )}
            <CheckOutDivider />
            {props.beforeElementsSectionFive?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionFive?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionFive && !cartState.loading && cart && (
              <PaymentMethodContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
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
                />
              </PaymentMethodContainer>
            )}
          </WrapperLeftContent>
        </WrapperLeftContainer>
        <WrapperRightContainer>
          {props.beforeElementsSectionFour?.map((BeforeElement, i) => (
            <React.Fragment key={i}>
              {BeforeElement}
            </React.Fragment>))}
          {props.beforeComponentsSectionFour?.map((BeforeComponent, i) => (
            <BeforeComponent key={i} {...props} />))}
          {!props.isHideSectionNine && !cartState.loading && cart && cart?.status !== 2 && (
            <OrderDetailsContainer>
              <h1>{t('ORDER_DETAILS', 'Order details')}</h1>
              {orderTypes && orderTypes?.length > 1 && configTypes?.length > 0 && (
                <div>
                  <p>{orderTypes.find(type => type?.value === options.type)?.text}</p>
                  <span onClick={() => setModalSelected('ordertype')}>{t('CHANGE', 'Change')}</span>
                </div>
              )}
              <div>
                <p>
                  {options?.moment
                    ? parseDate(options?.moment, { outputFormat: configs?.dates_moment_format?.value })
                    : t('ASAP_ABBREVIATION', 'ASAP')}
                </p>
                <span onClick={() => setModalSelected('moment')}>{t('CHANGE', 'Change')}</span>
              </div>
            </OrderDetailsContainer>
          )}
          {!props.isHideSectionFour &&
            !cartState.loading &&
            cart &&
            cart?.business_id &&
            options.type === 1 &&
            cart?.status !== 2 &&
            validationFields?.fields?.checkout?.driver_tip?.enabled &&
            driverTipsOptions.length > 0 &&
            (
              <>
                <DriverTipContainer>
                  <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                  <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
                  <DriverTips
                    businessId={cart?.business_id}
                    driverTipsOptions={driverTipsOptions}
                    isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1 || !!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                    isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                    driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1 || !!parseInt(configs?.driver_tip_use_custom?.value, 10)
                      ? cart?.driver_tip
                      : cart?.driver_tip_rate}
                    useOrderContext
                  />
                </DriverTipContainer>
                <DriverTipDivider />
              </>
            )}
          {props.beforeElementsSectionSix?.map((BeforeElement, i) => (
            <React.Fragment key={i}>
              {BeforeElement}
            </React.Fragment>))}
          {props.beforeComponentsSectionSix?.map((BeforeComponent, i) => (
            <BeforeComponent key={i} {...props} />))}

          {!props.isHideSectionSix && !cartState.loading && cart && (
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

          {props.beforeElementsSectionSeven?.map((BeforeElement, i) => (
            <React.Fragment key={i}>
              {BeforeElement}
            </React.Fragment>))}
          {props.beforeComponentsSectionSeven?.map((BeforeComponent, i) => (
            <BeforeComponent key={i} {...props} />))}

          {!props.isHideSectionSeven && !cartState.loading && cart && cart?.status !== 2 && (
            <WrapperPlaceOrderButton>
              <Button
                color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100))) ? 'secundary' : 'primary'}
                disabled={!cart?.valid || !paymethodSelected || placing || errorCash || !cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || loading}
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
          open={!!modalSelected}
          onClose={() => setModalSelected(null)}
          width='700px'
        >
          {modalSelected === 'ordertype' && (
            <OrderTypeSelectorContent
              onClose={() => setModalSelected(null)}
              configTypes={loadingConfigs && configTypes?.length > 0 ? configTypes : null}
              defaultValue={!(loadingConfigs && configTypes?.length > 0) && 1}
            />
          )}
          {modalSelected === 'moment' && (
            <MomentContent
              onClose={() => setModalSelected(null)}
            />
          )}
        </Modal>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
    businessId: cartState.cart?.business_id,
    isResetPaymethod,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru')
      }
    ],
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
