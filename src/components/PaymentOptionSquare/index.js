import React from 'react'
import { PaymentOptionSquare as PaymentOptionSquareController } from './test'
import { Tabs, Tab } from '../../styles/Tabs'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { useLanguage } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { Container } from './styles'
const PaymentOptionSquareUI = (props) => {
  const {
    paymentMethods,
    methodSelected,
    handleChangeMethodSelected,
    digitalWalletPaymethod,
    setDigitalWalletPaymethod,
    isLoading,
    isLoadingMethod,
    alertState,
    setAlertState
  } = props

  const [, t] = useLanguage()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {isLoading && (
        [...Array(3).keys()].map(i => (
          <div key={i}>
            <Skeleton height={50} />
          </div>
        ))
      )}
      {!isLoading && (
        <>
          <Tabs>
            {paymentMethods.map(method => (
              <Tab key={method?.value} disabled={methodSelected === method?.value} active={methodSelected === method?.value} onClick={() => handleChangeMethodSelected(method?.value)}>
                {method?.name}
              </Tab>
            ))}
          </Tabs>
          {isLoadingMethod && methodSelected && (
            [...Array(3).keys()].map(i => (
              <div key={i}>
                <Skeleton height={50} />
              </div>
            ))
          )}
          <Container>
            {methodSelected === 'card_payments' && (
              <>
                <div id='card-container' />
                {!isLoadingMethod && (
                  <Button color='primary' id='card-button' type='button'>{t('ACCEPT', 'Accept')}</Button>
                )}
              </>
            )}
            {methodSelected === 'ach_bank_transfer' && !isLoadingMethod && (
              <Button color='primary' id='ach-button' type='button'>{t('PAY_WITH_BANK_ACCOUNT', 'Pay with Bank Account')}</Button>
            )}
            {methodSelected === 'digital_wallets' && (
              <>
                <Tabs>
                  <Tab active={digitalWalletPaymethod === 'apple_pay'} onClick={() => setDigitalWalletPaymethod('apple_pay')}>
                    {t('APPLE_PAY', 'Apple pay')}
                  </Tab>
                  <Tab active={digitalWalletPaymethod === 'google_pay'} onClick={() => setDigitalWalletPaymethod('google_pay')}>
                    {t('GOOGLE_PAY', 'Google pay')}
                  </Tab>
                </Tabs>
                {!isLoadingMethod && digitalWalletPaymethod === 'apple_pay' && (
                  <button id='apple-pay-button' />
                )}
                {digitalWalletPaymethod === 'google_pay' && (
                  <div id='google-pay-button' />
                )}
              </>
            )}
            {methodSelected === 'gift_cards' && (
              <form>
                <div id='gift-card-container' />
                <button id='gift-card-button' type='button'>{t('PAY_WITH_GIFT_CARD', 'Pay with Gift Card')}</button>
              </form>
            )}
          </Container>
        </>
      )}
      <Alert
        title={t('SQUARE_ERROR', 'Square Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const PaymentOptionSquare = (props) => {
  const paymentPaypalProps = {
    ...props,
    UIComponent: PaymentOptionSquareUI
  }
  return (
    <PaymentOptionSquareController {...paymentPaypalProps} />
  )
}
