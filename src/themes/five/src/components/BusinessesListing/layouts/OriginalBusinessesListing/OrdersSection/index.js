import React from 'react'
import { OrdersOption } from '../../../../OrdersOption'
import { useLanguage, useOrder } from 'ordering-components'
export const OrdersSection = (props) => {
  const {
    titleContent,
    onRedirectPage,
    businessesIds,
    getCustomArray,
    businessesList,
    isCustomerMode,
    userCustomer
  } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()

  const propsToFetchBusiness = ['name', 'logo', 'slug', 'id']
  const propsToFetch = ['cart', 'business', 'status', 'id', 'uuid', 'cart_group_id', 'business_id', 'delivery_datetime', 'delivery_datetime_utc', 'total', 'summary']

  const handleRedirectToCheckout = (uuid) => {
    onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: uuid } })
  }

  return (
    <>
      {onRedirectPage && (
        <>
          <OrdersOption
            propsToFetch={propsToFetch}
            propsToFetchBusiness={propsToFetchBusiness}
            horizontal
            isBusinessesPage
            onRedirectPage={onRedirectPage}
            titleContent={t('CARTS', 'Carts')}
            businessesIds={businessesIds}
            customArray={
              getCustomArray(orderState.carts)?.filter(cart => cart.products.length > 0)
            }
            isCustomLayout
            isBusinessesLoading={businessesList.loading}
            isCustomerMode={isCustomerMode}
            franchiseId={props.franchiseId}
            handleRedirectToCheckout={handleRedirectToCheckout}
          />
          <OrdersOption
            propsToFetch={propsToFetch}
            propsToFetchBusiness={propsToFetchBusiness}
            activeOrders
            horizontal
            asDashboard
            isBusinessesPage
            titleContent={t('ACTIVE_ORDERS', 'Active orders')}
            businessesIds={businessesIds}
            onRedirectPage={onRedirectPage}
            userCustomerId={userCustomer?.id}
            isCustomLayout
            isBusinessesLoading={businessesList.loading}
            isCustomerMode={isCustomerMode}
            franchiseId={props.franchiseId}
            handleRedirectToCheckout={handleRedirectToCheckout}
          />
          <OrdersOption
            propsToFetch={propsToFetch}
            propsToFetchBusiness={propsToFetchBusiness}
            pastOrders
            horizontal
            asDashboard
            isBusinessesPage
            businessesIds={businessesIds}
            onRedirectPage={onRedirectPage}
            userCustomerId={userCustomer?.id}
            isCustomLayout
            titleContent={titleContent}
            isBusinessesLoading={businessesList.loading}
            isCustomerMode={isCustomerMode}
            franchiseId={props.franchiseId}
            handleRedirectToCheckout={handleRedirectToCheckout}
          />
        </>
      )}
    </>
  )
}
