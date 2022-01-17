import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import RiShoppingBagFill from '@meronex/icons/ri/RiShoppingBagFill'
import HiClock from '@meronex/icons/hi/HiClock'
import HiLocationMarker from '@meronex/icons/hi/HiLocationMarker'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

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
  useCustomer,
  useEvent
} from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'
import { Modal } from '../../../../../components/Modal'
import { CouponControl } from '../CouponControl'
import { TaxInformation } from '../TaxInformation'

import {
  Container,
  WrappContainer,
  LeftContainer,
  RightContainer,
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
  PaymentMethodHeader,
  RightInnerContainer,
  CheckoutConfirmInfo,
  ConfirmInfoItem,
  OrderBill,
  CouponAddButton,
  CouponContainer,
  Exclamation,
  Spinner,
  CommentContainer
} from './styles'

import { Button } from '../../styles/Buttons'

import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { PaymentOptions } from '../PaymentOptions'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { CartContent } from '../CartContent'
import { verifyDecimals } from '../../../../../utils'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { TextArea } from '../../styles/Inputs'

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
    handleChangeComment,
    commentState
  } = props

  const theme = useTheme()
  const [validationFields] = useValidationFields()
  const [{ options }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate, parseNumber }] = useUtils()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()
  const [customerState] = useCustomer()
  const [events] = useEvent()
  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(false)
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, data: null })

  const [modalOpen, setModalOpen] = useState({})

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

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

  const handleModal = (type) => {
    setModalOpen({
      ...modalOpen,
      [type]: !modalOpen[type]
    })
  }

  const handleStoreRedirect = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
  }

  const getIncludedTaxes = () => {
    if (cart?.taxes === null) {
      return cart.business.tax_type === 1 ? cart?.tax : 0
    } else {
      return cart?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
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
    }
  }, [isResetPaymethod])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <WrappContainer>
          <LeftContainer>
            {!cartState.loading && cart?.status === 2 && (
              <WarningMessage>
                <VscWarning />
                <h1>
                  {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
                </h1>
              </WarningMessage>
            )}
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
            )}

            {props.beforeElementsSectionFour?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionFour?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionFive && !cartState.loading && cart && (
              <PaymentMethodContainer>
                <PaymentMethodHeader>
                  <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                </PaymentMethodHeader>
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
                />
              </PaymentMethodContainer>
            )}

            {props.beforeElementsSectionFive?.map((BeforeElement, i) => (
              <React.Fragment key={i}>
                {BeforeElement}
              </React.Fragment>))}
            {props.beforeComponentsSectionFive?.map((BeforeComponent, i) => (
              <BeforeComponent key={i} {...props} />))}

            {!props.isHideSectionFour &&
              !cartState.loading &&
              cart &&
              cart?.business_id &&
              options.type === 1 &&
              cart?.status !== 2 &&
              validationFields?.fields?.checkout?.driver_tip?.enabled &&
              driverTipsOptions.length > 0 &&
              (
                <DriverTipContainer>
                  <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
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
          </LeftContainer>
          <RightContainer>
            <RightInnerContainer>
              {props.beforeElementsSectionSeven?.map((BeforeElement, i) => (
                <React.Fragment key={i}>
                  {BeforeElement}
                </React.Fragment>))}
              {props.beforeComponentsSectionSeven?.map((BeforeComponent, i) => (
                <BeforeComponent key={i} {...props} />))}

              <CheckoutConfirmInfo>
                <ConfirmInfoItem
                  link
                  onClick={() => handleStoreRedirect(cart?.business?.slug)}
                >
                  <RiShoppingBagFill />
                  <span>
                    {!businessDetails?.business?.name ? <Skeleton width={100} /> : businessDetails?.business?.name}
                  </span>
                </ConfirmInfoItem>
                <ConfirmInfoItem>
                  <HiClock />
                  {options?.moment
                    ? parseDate(options?.moment, { outputFormat: configs?.dates_moment_format?.value })
                    : t('ASAP_ABBREVIATION', 'ASAP')}
                </ConfirmInfoItem>
                <ConfirmInfoItem>
                  <HiLocationMarker />
                  {options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
                </ConfirmInfoItem>
              </CheckoutConfirmInfo>

              {cart?.valid_products && (
                <OrderBill>
                  <table>
                    <tbody>
                      <tr>
                        <td>{t('SUBTOTAL', 'Subtotal')}</td>
                        <td>{parsePrice(cart?.subtotal + getIncludedTaxes())}</td>
                      </tr>
                      {cart?.discount > 0 && cart?.total >= 0 && (
                        <tr>
                          {cart?.discount_type === 1 ? (
                            <td>
                              {t('DISCOUNT', 'Discount')}
                              <span>{`(${verifyDecimals(cart?.discount_rate, parsePrice)}%)`}</span>
                            </td>
                          ) : (
                            <td>{t('DISCOUNT', 'Discount')}</td>
                          )}
                          <td>- {parsePrice(cart?.discount || 0)}</td>
                        </tr>
                      )}
                      {
                        cart.taxes?.length > 0 && cart.taxes.filter(tax => tax.type === 2 && tax?.rate !== 0).map(tax => (
                          <tr key={tax.id}>
                            <td>
                              {tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                              <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                              <Exclamation onClick={() => setOpenTaxModal({ open: true, data: tax })}>
                                <BsInfoCircle size='20' color={theme.colors.primary} />
                              </Exclamation>
                            </td>
                            <td>{parsePrice(tax?.summary?.tax || 0)}</td>
                          </tr>
                        ))
                      }
                      {
                        cart?.fees?.length > 0 && cart?.fees?.filter(fee => !(fee.fixed === 0 && fee.percentage === 0))?.map(fee => (
                          <tr key={fee.id}>
                            <td>
                              {fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                              ({parsePrice(fee?.fixed)} + {fee.percentage}%)
                              <Exclamation onClick={() => setOpenTaxModal({ open: true, data: fee })}>
                                <BsInfoCircle size='20' color={theme.colors.primary} />
                              </Exclamation>
                            </td>
                            <td>{parsePrice(fee?.summary?.fixed + fee?.summary?.percentage || 0)}</td>
                          </tr>
                        ))
                      }
                      {cart?.driver_tip > 0 && (
                        <tr>
                          <td>
                            {t('DRIVER_TIP', 'Driver tip')}
                            {cart?.driver_tip_rate > 0 &&
                              parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                              !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                              (
                                <span>{`(${verifyDecimals(cart?.driver_tip_rate, parseNumber)}%)`}</span>
                              )}
                          </td>
                          <td>{parsePrice(cart?.driver_tip)}</td>
                        </tr>
                      )}
                      {options?.type === 1 && cart?.delivery_price > 0 && (
                        <tr>
                          <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                          <td>{parsePrice(cart?.delivery_price)}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <table className='total'>
                    <tbody>
                      <tr>
                        <td>{t('TOTAL', 'Total')}</td>
                        <td>{cart?.total >= 1 && parsePrice(cart?.total)}</td>
                      </tr>
                    </tbody>
                  </table>
                  {cart?.status !== 2 && !cartState?.loading && (
                    <table className='comments'>
                      <tbody>
                        <tr>
                          <td>{t('COMMENTS', 'Comments')}</td>
                        </tr>
                        <tr>
                          <CommentContainer>
                            <TextArea
                              defaultValue={cart?.comment}
                              placeholder={t('SPECIAL_COMMENTS', 'Special Comments')}
                              onChange={(e) => handleChangeComment(e.target.value)}
                            />
                            {commentState?.loading && (
                              <Spinner>
                                <SpinnerLoader
                                  style={{ height: 100 }}
                                />
                              </Spinner>
                            )}
                          </CommentContainer>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </OrderBill>
              )}

              {!props.isHideSectionSeven && !cartState.loading && cart && cart?.status !== 2 && (
                <WrapperPlaceOrderButton>
                  <Button
                    rectangle
                    color={(!cart?.valid_maximum || !cart?.valid_minimum) ? 'primary' : 'secundary'}
                    disabled={!cart?.valid || !paymethodSelected || placing || errorCash || !cart?.valid_maximum || !cart?.valid_minimum}
                    onClick={() => handlePlaceOrder()}
                  >
                    {!cart?.valid_maximum ? (
                      `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                    ) : !cart?.valid_minimum ? (
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

              {isCouponEnabled && cart?.status !== 2 && (
                <CouponAddButton>
                  <span onClick={() => handleModal('coupon')}>
                    {t('ADD_PROMO_CODE', 'Add promo code')}
                  </span>
                </CouponAddButton>
              )}
            </RightInnerContainer>
          </RightContainer>
        </WrappContainer>
        <Modal
          open={modalOpen?.coupon}
          onClose={() => handleModal('coupon')}
          width='500px'
        >
          <CouponContainer>
            <h2>{t('QUESTION_COUPON', 'Do you have a promo code?')}</h2>
            <CouponControl
              businessId={cart?.business_id}
              price={cart?.total}
            />
          </CouponContainer>
        </Modal>
        <Modal
          width='70%'
          open={openTaxModal.open}
          padding='20px'
          closeOnBackdrop
          title={`${openTaxModal.data?.name ||
            t('INHERIT_FROM_BUSINESS', 'Inherit from business')} (${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`}) `}
          onClose={() => setOpenTaxModal({ open: false, tax: null })}
          modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
        >
          <TaxInformation data={openTaxModal.data} products={cart?.products} />
        </Modal>
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

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isResetPaymethod, setIsResetPaymethod] = useState(false)

  const cartsWithProducts = orderState?.carts && (Object.values(orderState?.carts)?.filter(cart => cart?.products?.length) || null)

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
              content: [confirmCartRes.error.message]
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
          <WrappContainer>
            <LeftContainer isSkeleton>
              <Skeleton height={35} style={{ marginBottom: '10px' }} />
              <Skeleton height={150} style={{ marginBottom: '10px' }} />
              <Skeleton height={35} style={{ marginBottom: '10px' }} />
              <Skeleton height={100} style={{ marginBottom: '10px' }} />
              <Skeleton height={35} style={{ marginBottom: '10px' }} />
              <Skeleton height={100} style={{ marginBottom: '10px' }} />
              <Skeleton height={35} count={6} style={{ marginBottom: '10px' }} />
            </LeftContainer>
            <RightContainer>
              <RightInnerContainer>
                <CheckoutConfirmInfo>
                  <ConfirmInfoItem>
                    <Skeleton width={100} style={{ marginBottom: '10px' }} />
                  </ConfirmInfoItem>
                  <ConfirmInfoItem>
                    <Skeleton width={100} style={{ marginBottom: '10px' }} />
                  </ConfirmInfoItem>
                  <ConfirmInfoItem>
                    <Skeleton width={100} style={{ marginBottom: '10px' }} />
                  </ConfirmInfoItem>
                </CheckoutConfirmInfo>
                <Skeleton height={200} style={{ marginBottom: '10px' }} />
                <Skeleton height={50} style={{ marginBottom: '10px' }} />
              </RightInnerContainer>
            </RightContainer>
          </WrappContainer>
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
