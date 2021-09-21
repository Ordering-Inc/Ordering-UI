import React from 'react'
import { PaymentOptionPaypal as PaymentPaypalController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'

import { Container } from './styles'
import { useConfig } from 'ordering-components'
const PaymentOptionPaypalUI = (props) => {
  const {
    isSdkReady,
    PaypalButton,
    noAuthMessage,
    paypalButtonProps
  } = props

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <Container>
        {noAuthMessage ? (
          <p>{noAuthMessage}</p>
        ) : (
          isSdkReady ? (
            PaypalButton && <PaypalButton {...paypalButtonProps} />
          ) : (
            <div>
              <Skeleton count={3} height={55} />
            </div>
          )
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

export const PaymentOptionPaypal = (props) => {
  const [{ configs }] = useConfig()
  const paymentPaypalProps = {
    ...props,
    UIComponent: PaymentOptionPaypalUI,
    currency: configs?.stripe_currency?.value
  }
  return (
    <PaymentPaypalController {...paymentPaypalProps} />
  )
}
