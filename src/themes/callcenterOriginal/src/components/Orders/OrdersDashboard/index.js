import React from 'react'
import { OrdersDashboardList } from '../OrdersDashboardList'
import {
  OrdersManageContainer
} from './styles'

export const OrdersDashboard = (props) => {
  return (
    <OrdersManageContainer>
      <OrdersDashboardList
        {...props}
        orderListView='table'
      />
    </OrdersManageContainer>
  )
}
