import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { useLanguage, useSession } from 'ordering-components'
export const PaymentOptionSquare = (props) => {
  const { UIComponent, handlePaymethodDataChange, cartTotal } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [isSquareReady, setIsSquareReady] = useState(false)
  const [methodSelected, setMethodSelected] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMethod, setIsLoadingMethod] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [payments, setPayments] = useState(null)
  const [paymentRequest, setPaymentRequest] = useState({})
  const [digitalWalletPaymethod, setDigitalWalletPaymethod] = useState('')
  const paymentMethods = [
    { name: t('CARD_PAYMENTS', 'Card payments'), value: 'card_payments' },
    { name: t('ACH_BANK_TRANSFER', 'ACH Back transfer'), value: 'ach_bank_transfer' },
    { name: t('DIGITAL_WALLETS', 'Digital Wallets'), value: 'digital_wallets' },
    { name: t('GIFT_CARDS', 'Gift Cards'), value: 'gift_cards' }
  ]

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js'
    script.async = true
    script.onload = () => {
      setIsLoading(false)
      setIsSquareReady(true)
      initPaymentObject()
    }
    script.onerror = () => {
      setIsLoading(false)
      throw new Error('Square could not be loaded.')
    }

    document.body.appendChild(script)

    return () => {
      script.onload = null
      const cardButton = document.getElementById('card-button')
      cardButton && cardButton.removeEventListener('click')
      const achButton = document.getElementById('ach-button')
      achButton && achButton.removeEventListener('click')
    }
  }, [])

  const initPaymentObject = async () => {
    const payments = window.Square.payments(
      'sandbox-sq0idb-rMLAce87hOfpGvokZCygEw',
      'L1NGAY5M6KJRX'
    )
    setPayments(payments)
  }

  const initCardPayments = async () => {
    setIsLoadingMethod(true)
    const card = await payments.card()
    await card.attach('#card-container')
    setIsLoadingMethod(false)

    const eventHandler = async (e) => {
      e.preventDefault()

      try {
        const result = await card.tokenize()
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`)
          handlePaymethodDataChange({ token: result.token })
        }
        if (result.status === 'INVALID') {
          setAlertState({
            open: true,
            content: result.errors.map(() => `ValidationError: ${result.errors[0].field}: ${result.errors[0].message}`)
          })
        }
      } catch (e) {
        setAlertState({
          open: true,
          content: e.message
        })
      }
    }
    const cardButton = document.getElementById('card-button')
    cardButton.addEventListener('click', eventHandler)
  }

  const initACHBankTransfer = async () => {
    setIsLoadingMethod(true)
    const ach = await payments.ach()
    setIsLoadingMethod(false)

    const eventHandler = async (e) => {
      e.preventDefault()
      try {
        const result = await ach.tokenize({
          accountHolderName: user?.name
        })
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`)
          handlePaymethodDataChange({ token: result.token })
        }
      } catch (e) {
        setAlertState({
          open: true,
          content: e.message
        })
      }
    }
    const achButton = document.getElementById('ach-button')
    achButton.addEventListener('click', eventHandler)
  }

  const initGiftCard = async () => {
    setIsLoadingMethod(true)
    const giftCard = await payments.giftCard()
    await giftCard.attach('#gift-card-container')
    setIsLoadingMethod(false)
    async function eventHandler (e) {
      e.preventDefault()
      try {
        const result = await giftCard.tokenize()
        console.log(result)
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`)
          handlePaymethodDataChange({ token: result.token })
        }
      } catch (e) {
        setAlertState({
          open: true,
          content: e.message
        })
      }
    }
    const giftCardButton = document.getElementById('gift-card-button')
    giftCardButton.addEventListener('click', eventHandler)
  }

  const initDigitalWallets = async () => {
    // setIsLoadingMethod(true)
    const paymentRequest = payments.paymentRequest({
      countryCode: 'US',
      currencyCode: 'USD',
      total: {
        amount: cartTotal.toString(),
        label: t('TOTAL', 'Total')
      }
    })
    console.log(paymentRequest)
    setPaymentRequest(paymentRequest)
  }

  const applePay = async () => {
    const applePay = await payments.applePay(paymentRequest)
    console.log(applePay)
    setIsLoadingMethod(false)
    const eventHandler = async (e) => {
      e.preventDefault()
      try {
        const result = await applePay.tokenize()
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`)
          handlePaymethodDataChange({ token: result.token })
        }
      } catch (e) {
        setAlertState({
          open: true,
          content: e.message
        })
      }
    }
    const applePayButtonTarget = document.getElementById('apple-pay-button')
    applePayButtonTarget.addEventListener('click', eventHandler)
  }

  const googlePay = async () => {
    const googlePay = await payments.googlePay(paymentRequest)
    console.log(googlePay)
    await googlePay.attach('#google-pay-button')

    setIsLoadingMethod(false)
    const eventHandler = async (e) => {
      e.preventDefault()
      try {
        const result = await googlePay.tokenize()
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`)
          handlePaymethodDataChange({ token: result.token })
        }
      } catch (e) {
        setAlertState({
          open: true,
          content: e.message
        })
      }
    }
    const googlePayButtonTarget = document.getElementById('google-pay-button')
    googlePayButtonTarget.addEventListener('click', eventHandler)
  }

  const handleChangeMethodSelected = (method) => {
    setDigitalWalletPaymethod(null)
    setMethodSelected(method)
    method === 'card_payments'
      ? initCardPayments()
      : method === 'ach_bank_transfer'
        ? initACHBankTransfer()
        : method === 'digital_wallets'
          ? initDigitalWallets()
          : initGiftCard()
  }

  useEffect(() => {
    if (methodSelected !== 'digital_wallets') return
    if (digitalWalletPaymethod === 'apple_pay') applePay()
    if (digitalWalletPaymethod === 'google_pay') googlePay()
  }, [digitalWalletPaymethod])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isSquareReady={isSquareReady}
          isLoading={isLoading}
          isLoadingMethod={isLoadingMethod}
          paymentMethods={paymentMethods}
          methodSelected={methodSelected}
          alertState={alertState}
          digitalWalletPaymethod={digitalWalletPaymethod}
          initCardPayments={initCardPayments}
          setDigitalWalletPaymethod={setDigitalWalletPaymethod}
          handleChangeMethodSelected={handleChangeMethodSelected}
          setAlertState={setAlertState}
          applePay={applePay}
        />
      )}
    </>
  )
}

PaymentOptionSquare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: propTypes.elementType
}

PaymentOptionSquare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
