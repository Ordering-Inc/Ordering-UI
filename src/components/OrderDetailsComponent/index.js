import React from 'react'

export const OrderDetails = (props) => {
  const {
    token,
    order,
    UIComponent
  } = props

  const formatPrice = price => `$ ${price.toFixed(2)}`

  const sendMessage = async (spot) => {
    try {
      await fetch(`https://apiv4.ordering.co/v400/en/demo/orders/${order?.id}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: order?.id,
          type: 2
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formatPrice={formatPrice}
          handlerSubmit={handlerSubmitSpotNumber}
        />
      )}
    </>
  )
}
