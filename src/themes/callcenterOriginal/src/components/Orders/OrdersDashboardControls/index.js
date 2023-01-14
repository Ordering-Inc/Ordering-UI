import React from 'react'
import { useSession } from 'ordering-components'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { OrdersExportCSV } from '../OrdersExportCSV'
import { OrderDelete } from '../OrderDelete'
import {
  OrderDashboardControlsContainer,
  InnerContnet,
  WrapOrderStatusTypeSelector
} from './styles'

export const OrdersDashboardControls = (props) => {
  const {
    selectedOrderNumber,
    filterValues,
    handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus
  } = props

  const [{ user }] = useSession()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <OrdersExportCSV filterValues={filterValues} />
          {selectedOrderNumber > 0 && (
            <>
              {user?.level !== 5 && (
                <OrderDelete
                  handleDeleteMultiOrders={handleDeleteMultiOrders}
                />
              )}
              <WrapOrderStatusTypeSelector>
                <OrderStatusTypeSelector
                  orderControl
                  isFirstSelect
                  noPadding
                  mutiOrdersChange
                  noSelected
                  defaultValue='default'
                  type='primary'
                  handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                />
              </WrapOrderStatusTypeSelector>
            </>
          )}
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
