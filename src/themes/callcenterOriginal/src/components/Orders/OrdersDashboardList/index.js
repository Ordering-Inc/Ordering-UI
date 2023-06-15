import React from 'react'
import { DashboardOrdersList as OrdersListController } from 'ordering-components'
import { OrdersListing } from '../OrdersListing'

export const OrdersDashboardList = (props) => {
  const {
    selectedSubOrderStatus,
    isMessagesView,
    orderByOption
  } = props

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrdersListing,
    useDefualtSessionManager: true,
    orderBy: isMessagesView ? orderByOption : 'id',
    orderDirection: isMessagesView
      ? orderByOption === 'id' ? 'desc' : 'asc'
      : 'desc',
    asDashboard: true,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    isSearchByBusinessName: true,
    isSearchByDriverName: true,
    driverId: props.driverId
  }

  return (
    <>
      {isMessagesView ? (
        <OrdersListController
          isMessagesView
          {...OrdersCommonControlProps}
          orderStatus={selectedSubOrderStatus?.all}
        />
      ) : (
        <>
          <OrdersListController
            groupStatus='pending'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.pending}
          />

          <OrdersListController
            groupStatus='inProgress'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.inProgress}
          />

          <OrdersListController
            groupStatus='completed'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.completed}
          />

          <OrdersListController
            groupStatus='cancelled'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.cancelled}
          />
        </>
      )}
    </>
  )
}
