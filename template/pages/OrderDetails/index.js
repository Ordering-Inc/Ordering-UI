import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderDetails } from '../../../src/themes/five/src/components/OrderDetails'
import { OrderDetails as OrderDetailsOld } from '../../../src/components/OrderDetails'
import { useTheme } from 'styled-components'

export const OrderDetailsPage = (props) => {
  const history = useHistory()
  const { orderId } = useParams()
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null
  const theme = useTheme()
  const OrderDetailsComponent =
    theme?.layouts?.confirmation?.components?.layout?.type === 'old'
      ? OrderDetailsOld
      : OrderDetails

  const orderDetailsProps = {
    ...props,
    orderId,
    hashKey,
    urlToShare: (hashKey) => hashKey ? `${window.location.origin}/orders/${orderId}?hash=${hashKey}` : null,
    handleOrderRedirect: () => {
      history.push('/profile/orders')
    },
    handleBusinessRedirect: (slug) => {
      history.push(`/store/${slug}`)
    }
  }
  return (
    <>
      <HelmetTags page='order_details' helmetTitle={`Order #${orderId}`} />
      <OrderDetailsComponent {...orderDetailsProps} />
    </>
  )
}
