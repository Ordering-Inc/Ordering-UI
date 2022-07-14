import React from 'react'
import { MyOrders as MyOrdersController } from '../../../src/themes/five/src/components/MyOrders'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MyOrders = (props) => {
  const [events] = useEvent()
  const ordersProps = {
    ...props,
    onRedirectPage: (data) => events.emit('go_to_page', data),
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        return window.location.pathname.includes('/store/')
          ? events.emit('go_to_page', { page: 'business', params: { store: slug }, replace: true })
          : events.emit('go_to_page', { page: 'business_slug', params: { store: slug }, replace: true })
      }
      return window.location.pathname.includes('/store/')
        ? events.emit('go_to_page', {
          page: 'business',
          params: { store: slug },
          search: `?category=${category}&product=${product}`,
          replace: true
        })
        : events.emit('go_to_page', {
          page: 'business_slug',
          params: { store: slug },
          search: `?category=${category}&product=${product}`,
          replace: true
        })
    },
    isAsCustomer: true
  }
  return (
    <>
      <HelmetTags page='orders' />
      <MyOrdersController {...ordersProps} />
    </>
  )
}
