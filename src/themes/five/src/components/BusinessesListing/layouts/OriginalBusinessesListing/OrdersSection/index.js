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
  return (
    <>
      {onRedirectPage && (
        <>
          <OrdersOption
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
          />
          <OrdersOption
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
          />
          <OrdersOption
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
          />
        </>
      )}
    </>
  )
}
