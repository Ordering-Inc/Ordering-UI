import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { useOrderingTheme } from 'ordering-components'
import { OrderDetails } from '../../../src/themes/five/src/components/OrderDetails'
import { OrderDetails as OrderDetailsKiosk } from '../../../src/themes/five/src/components/OrderDetails/layouts/Kiosk'
import { OrderDetails as OrderDetailsOld } from '../../../src/components/OrderDetails'
import settings from '../../config'

export const OrderDetailsPage = (props) => {
  const history = useHistory()
  const { orderId } = useParams()
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null
  const [orderingTheme] = useOrderingTheme()
  const useKioskApp = settings?.use_kiosk
  const OrderDetailsComponent = useKioskApp ? OrderDetailsKiosk
    : orderingTheme?.theme?.confirmation?.components?.layout?.type === 'old'
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
