import React from 'react'
import { PaymentOptionPaypal as PaymentPaypalController } from 'ordering-components'

import { Container } from './styles'

const PaymentOptionPaypalUI = (props) => {
  const {
    isSdkReady,
    PaypalButton,
    noAuthMessage,
    paypalButtonProps
  } = props

  return (
    <Container>
      {noAuthMessage ? (
        <p>{noAuthMessage}</p>
      ) : (
        isSdkReady ? (
          PaypalButton && <PaypalButton {...paypalButtonProps} />
        ) : (
          <div>Loading...</div>
        )
      )}
    </Container>
  )
}

export const PaymentOptionPaypal = (props) => {
  const paymentPaypalProps = {
    ...props,
    UIComponent: PaymentOptionPaypalUI
  }
  return (
    <PaymentPaypalController {...paymentPaypalProps} />
  )
}
