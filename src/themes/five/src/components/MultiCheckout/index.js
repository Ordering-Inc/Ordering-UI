import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useUtils,
  useCustomer,
  useConfig,
  useSession,
  useValidationFields,
  MultiCheckout as MultiCheckoutController
} from 'ordering-components'

import parsePhoneNumber from 'libphonenumber-js'
import { NotFoundSource } from '../NotFoundSource'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressDetails } from '../AddressDetails'
import { MultiCartsPaymethodsAndWallets } from '../MultiCartsPaymethodsAndWallets'

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
  WarningText
} from './styles'

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
    totalCartsPrice,
    handleGroupPlaceOrder,
    paymethodSelected,
    handleSelectPaymethod,
    handleSelectWallet,
    handlePaymethodDataChange
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [customerState] = useCustomer()
  const [validationFields] = useValidationFields()
  const [{ user }] = useSession()

  const [userErrors, setUserErrors] = useState([])
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const maximumCarts = 5
  const isDisablePlaceOrderButton = !(paymethodSelected?.paymethod_id || paymethodSelected?.wallet_id) || openCarts.length > maximumCarts

  const handlePlaceOrder = () => {
    if (!userErrors.length) {
      handleGroupPlaceOrder && handleGroupPlaceOrder()
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
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
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

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user, customerState])

  return (
    <>
      {openCarts.length === 0 ? (
        <NotFoundSource
          content={t('CARTS_NOT_FOUND', 'You don’t have carts available')}
        />
      ) : (
        <Container>
          <WrapperLeftContainer>
            <WrapperLeftContent>
              <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
              <h2 className='checkout-title'>{t('CHECK_OUT', 'Checkout')}</h2>

              <AddressDetails
                isMultiCheckout
                openCarts={openCarts}
                apiKey={configs?.google_maps_api_key?.value}
                mapConfigs={mapConfigs}
                isCustomerMode={isCustomerMode}
              />

              <UserDetailsContainer>
                <WrapperUserDetails>
                  <UserDetails
                    isUserDetailsEdit={isUserDetailsEdit}
                    useValidationFields
                    useDefualtSessionManager
                    useSessionUser={!isCustomerMode}
                    isCustomerMode={isCustomerMode}
                    userData={isCustomerMode && customerState.user}
                    userId={isCustomerMode && customerState?.user?.id}
                    isCheckout
                  />
                </WrapperUserDetails>
              </UserDetailsContainer>

              <PaymentMethodContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                <MultiCartsPaymethodsAndWallets
                  openCarts={openCarts}
                  paymethodSelected={paymethodSelected}
                  handleSelectPaymethod={handleSelectPaymethod}
                  handleSelectWallet={handleSelectWallet}
                  handlePaymethodDataChange={handlePaymethodDataChange}
                />
              </PaymentMethodContainer>

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
                    isCartPending={cart?.status === 2}
                    cart={cart}
                    isMultiCheckout
                    isProducts={cart?.products?.length || 0}
                  />
                  <DriverTipDivider />
                </React.Fragment>
              ))}
              {openCarts.length > 0 && (
                <MultiCartPriceContainer>
                  <div>
                    <h4>{t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')}</h4>
                    <h4>{parsePrice(totalCartsPrice)}</h4>
                  </div>
                  <p>
                    {t('MULTI_CHECKOUT_DESCRIPTION', 'You will receive a receipt for each business. The payment is not combined between multiple stores. Each payment is processed by the store')}
                  </p>
                </MultiCartPriceContainer>
              )}
            </CartContainer>

            <WrapperPlaceOrderButton>
              <Button
                color='primary'
                disabled={isDisablePlaceOrderButton || placing}
                onClick={handlePlaceOrder}
              >
                {placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
              </Button>
            </WrapperPlaceOrderButton>
            {openCarts.length > maximumCarts && (
              <WarningText>
                {t('WARNING_MAXIMUM_CARTS', 'You can only pay for a maximum of 5 carts, please discard one or more to continue.')}
              </WarningText>
            )}
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
