import React, { useEffect, useState } from 'react'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useValidationFields,
  useUtils,
  useConfig,
  useCustomer
} from 'ordering-components'
import parsePhoneNumber from 'libphonenumber-js'
import VscWarning from '@meronex/icons/vsc/VscWarning'

import { PaymentOptions } from '../PaymentOptions'
import { PaymentOptionWallet } from '../PaymentOptionWallet'
import { DriverTips } from '../DriverTips'
import { CartBill } from '../CartBill'

import { Alert, NotFoundSource } from '../../../Shared'
import { Button } from '../../../../styles'

import {
  Conatiner,
  WarningMessage,
  PaymentMethodContainer,
  SectionTitleContainer,
  Flag,
  WarningText,
  WrapperPlaceOrderButton
} from './styles'

const CheckoutUI = (props) => {
  const {
    cart,
    errors,
    placing,
    cartState,
    loyaltyPlansState,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder,
    handleOrderRedirect,
    isCustomerMode,
    isResetPaymethod,
    setIsResetPaymethod,
    onPlaceOrderClick,
    placeSpotNumber
  } = props

  const [validationFields] = useValidationFields()
  const [{ options, loading }] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()
  const [customerState] = useCustomer()

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [requiredFields, setRequiredFields] = useState([])
  const [cardList, setCardList] = useState([])
  const [paymethodClicked, setPaymethodClicked] = useState(null)
  const cardsMethods = ['stripe', 'credomatic']
  const businessConfigs = businessDetails?.business?.configs ?? []
  const isTableNumberEnabled = configs?.table_numer_enabled?.value
  const isWalletCashEnabled = businessConfigs.find(config => config.key === 'wallet_cash_enabled')?.value === '1'
  const isWalletCreditPointsEnabled = businessConfigs.find(config => config.key === 'wallet_credit_point_enabled')?.value === '1'
  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' &&
    (isWalletCashEnabled || isWalletCreditPointsEnabled) && !isCustomerMode

  const isGiftCardCart = !cart?.business_id

  const validateCommentsCartField = validationFields?.fields?.checkout?.comments?.enabled && validationFields?.fields?.checkout?.comments?.required && (cart?.comment === null || cart?.comment?.trim().length === 0)

  const validateZipcodeCard =
    validationFields?.fields?.card?.zipcode?.enabled && validationFields?.fields?.card?.zipcode?.required && paymethodSelected?.gateway === 'stripe' && paymethodSelected?.data?.card && !paymethodSelected?.data?.card?.zipcode

  const isDisablePlaceOrderButton = !cart?.valid ||
    (!paymethodSelected && cart?.balance > 0) ||
    (cardsMethods.includes(paymethodSelected?.gateway) && cardList?.cards?.length === 0) ||
    placing ||
    errorCash ||
    loading ||
    (isTableNumberEnabled === '1' && (options?.type === 3 && !(cartState?.cart?.spot_number || cart?.spot_number || placeSpotNumber))) ||
    !cart?.valid_maximum ||
    (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ||
    (options.type === 1 &&
      validationFields?.fields?.checkout?.driver_tip?.enabled &&
      validationFields?.fields?.checkout?.driver_tip?.required &&
      (Number(cart?.driver_tip) <= 0)) ||
    (validateCommentsCartField) ||
    validateZipcodeCard

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const driverTipsField = !cartState.loading && cart && cart?.business_id && options.type === 1 && cart?.status !== 2 && validationFields?.fields?.checkout?.driver_tip?.enabled && driverTipsOptions.length > 0

  const handlePlaceOrder = () => {
    if (!userErrors.length && (!requiredFields?.length ||
      ((paymethodSelected?.gateway === 'cash' || paymethodSelected?.gateway === 'card_delivery')))) {
      const body = {}
      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body)
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments']
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
    }
  }, [isResetPaymethod])

  return (
    <Conatiner>
      {!cartState.loading && cart?.status === 2 && (
        <WarningMessage>
          <VscWarning />
          <h1>
            {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
          </h1>
        </WarningMessage>
      )}

      {!cartState.loading && cart && (
        <PaymentMethodContainer className='paymentsContainer'>
          <SectionTitleContainer>
            <h3>{t('PAYMENT_METHODS', 'Payment Methods')}</h3>
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
            paymethodClicked={paymethodClicked}
            setPaymethodClicked={setPaymethodClicked}
          />
        </PaymentMethodContainer>
      )}

      {isWalletEnabled && !businessDetails?.loading && (
        <PaymentOptionWallet
          cart={cart}
          loyaltyPlansState={loyaltyPlansState}
          businessConfigs={businessDetails?.business?.configs}
        />
      )}

      {driverTipsField && (
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
      )}
      {!cartState.loading && cart && <CartBill cart={cart} />}

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

      {isTableNumberEnabled === '1' && (options?.type === 3 && !(cart?.spot_number || placeSpotNumber)) && (
        <WarningText>
          {t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')}
        </WarningText>
      )}

      {options.type === 1 &&
        validationFields?.fields?.checkout?.driver_tip?.enabled &&
        validationFields?.fields?.checkout?.driver_tip?.required &&
        (Number(cart?.driver_tip) <= 0) &&
        (
          <WarningText>
            {t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')}
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
      {cart?.valid_preorder !== undefined && !cart?.valid_preorder && (
        <WarningText>
          {t('INVALID_CART_MOMENT', 'Selected schedule time is invalid, please select a schedule into the business schedule interval.')}
        </WarningText>
      )}

      <Alert
        title={t('CUSTOMER_DETAILS', 'Customer Details')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Conatiner>
  )
}

export const Checkout = (props) => {
  const {
    errors,
    clearErrors,
    cartUuid,
    handleOrderRedirect,
    handleSearchRedirect,
    handleCheckoutListRedirect,
    businessSlug
  } = props

  const [orderState, { confirmCart }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

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

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts)?.filter(cart => cart?.business_id === currentCart?.business_id))
    }
  }, [orderState.loading])

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
        result = JSON.parse(JSON.stringify(cart))
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
        let _cart = Array.isArray(result) ? null : JSON.parse(JSON.stringify(result))
        const spotNumberFromStorage = window.localStorage.getItem('table_number')
        if (spotNumberFromStorage) {
          const spotNumber = JSON.parse(spotNumberFromStorage)?.tableNumber
          const slug = JSON.parse(spotNumberFromStorage)?.slug
          if (_cart?.business?.slug === slug) {
            _cart = {
              ..._cart,
              spot_number: parseInt(spotNumber, 10)
            }
          }
        }
        setCartState({
          loading: false,
          cart: _cart,
          error: _cart ? null : result
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

      {cartUuid && cartState.error && cartState.error?.length > 0 && (
        <NotFoundSource
          content={t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.')}
          btnTitle={t('CHECKOUT_REDIRECT', 'Go to Checkout list')}
          onClickButton={handleCheckoutListRedirect}
        />
      )}

      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <CheckoutController {...checkoutProps} />}

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
