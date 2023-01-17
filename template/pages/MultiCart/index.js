import React from 'react'
import { MultiCart as MultiCartController } from '../../../src/themes/five/src/components/MultiCart'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'
import { useParams } from 'react-router-dom'

export const MultiCart = (props) => {
  const [events] = useEvent()
  const { cartUuid, cartGroup } = useParams()
  const multiCheckoutProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data),
    handleOnRedirectMultiCheckout: (cartUuid) => {
      events.emit('go_to_page', { page: 'multi_checkout', params: { cartUuid }, replace: true })
    },
    handleOnRedirectCheckout: (cartUuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid }, replace: true })
    },
    cartUuid,
    cartGroup
  }
  return (
    <>
      <HelmetTags page='multi_cart' />
      <MultiCartController {...multiCheckoutProps} />
    </>
  )
}

export default MultiCart
