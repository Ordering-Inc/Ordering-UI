import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useApi, useOrder } from 'ordering-components'

/**
 * Component to manage payment option paypal behavior without UI component
 */
export const PaymentOptionPaypal = (props) => {
  const {
    token,
    body,
    clientId,
    btnStyle,
    UIComponent,
    onButtonReady
  } = props

  const [ordering] = useApi()
  const [, { confirmCart, placeCart }] = useOrder()
  const [isSdkReady, setIsSdkReady] = useState(false)

  /**
   * Method to create script for paypal sdk
   */
  const addPaypalSdk = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true
    script.onload = () => {
      setIsSdkReady(true)
    }
    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.')
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    console.log('inside effect')
    if (window?.paypal) {
      setIsSdkReady(true)
      return
    }
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk()
    } else if (window !== undefined && window.paypal !== undefined && onButtonReady) {
      onButtonReady()
    }
  }, [])

  const createOrder = async (data, actions) => {
    const params = {
      paymethod_id: body.paymethod_id,
      amount: body.amount,
      delivery_zone_id: body.delivery_zone_id
    }

    const result = await placeCart(body.cartUuid, params)
    if (result?.error) {
      // setErrors(result?.result)
      console.log(result?.result)
      return
    }
    console.log('createOrder', result)
    return result
    // const url = `${ordering.root}/carts/${body.cartUuid}/place`
    // return fetch(url, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   },
    //   body: JSON.stringify(params)
    // }).then(function (res) {
    //   return res.json()
    // }).then(function (res) {
    //   console.log('createOrder', res)
    //   if (res.error) {
    //     console.log(res.result)
    //     return null
    //   } else {
    //     return res.result.pay_reference
    //   }
    // })
  }

  const onApprove = async (data, actions) => {
    const result = await confirmCart(body.cartUuid)
    if (result?.error) {
      // setErrors(result?.result)
      console.log(result?.result)
      return
    }
    console.log('onApprove', result)
    return result

    // const url = `${ordering.root}/carts/${body.cartUuid}/confirm`
    // return fetch(url, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   }
    // }).then(function (res) {
    //   return res.json()
    // }).then(function (res) {
    //   console.log('onApprove', res)
    //   return res
    // })
  }

  const onError = async (data) => {
    const result = await confirmCart(body.cartUuid)
    if (result?.error) {
      // setErrors(result?.result)
      console.log(result?.result)
      return
    }
    console.log('onError', result)
    return result
    // console.log('onError', data)
    // return data
  }

  const onCancel = async (data) => {
    const result = await confirmCart(body.cartUuid)
    if (result?.error) {
      // setErrors(result?.result)
      console.log(result?.result)
      return
    }
    console.log('onApprove', result)
    return result
    // console.log('onCancel', data)
    // return data
  }

  /**
   * Assign paypal button to an instance of react dom
   */
  const Button = window?.paypal?.Buttons?.driver('react', {
    React,
    ReactDOM
  })

  return (
    UIComponent && (
      <UIComponent
        {...props}
        isSdkReady={isSdkReady}
        PaypalButton={Button}
        paypalButtonProps={{
          createOrder,
          onApprove,
          onError,
          onCancel,
          style: btnStyle
        }}
      />
    )
  )
}
