import React, { useState } from 'react'
import {
  useLanguage,
  useUtils,
  useCustomer,
  useConfig,
  MultiBusinessesCheckout as MultiBusinessesCheckoutController
} from 'ordering-components'

import { ArrowLeft } from 'react-bootstrap-icons'
import { Cart } from '../Cart'
import { UserDetails } from '../UserDetails'
import { AddressDetails } from '../AddressDetails'

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
  CheckOutDivider,
  PaymentMethodContainer
} from './styles'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const MultiBusinessesCheckoutUI = (props) => {
  const {
    isCustomerMode,
    openCarts,
    totalCartsPrice,
    paymethodsAndWallets
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [customerState] = useCustomer()

  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)

  return (
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

          <CheckOutDivider />

          <PaymentMethodContainer>
            <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
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
      </WrapperRightContainer>
    </Container>
  )
}

export const MultiBusinessesCheckout = (props) => {
  const multiBusinessesCheckoutProps = {
    ...props,
    UIComponent: MultiBusinessesCheckoutUI
  }
  return <MultiBusinessesCheckoutController {...multiBusinessesCheckoutProps} />
}
