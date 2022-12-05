import React from 'react'
import { useLanguage } from 'ordering-components'
import { DragScroll } from '../../Shared'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'

import {
  OrderStatusFilterContainer,
  Tab
} from './styles'

export const OrderStatusFilterBar = (props) => {
  const {
    selectedOrderStatus,
    changeOrderStatus,
    numberOfOrdersByStatus
  } = props

  const changeSelectedOrderStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    changeOrderStatus(orderStatus)
  }

  const [, t] = useLanguage()
  return (
    <>
      <OrderStatusFilterContainer className='order_status_filter'>
        <DragScroll>
          <Tab
            active={selectedOrderStatus === 'pending'}
            onClick={() => changeSelectedOrderStatus('pending')}
          >
            {t('PENDING', 'pending')}
            <span>(
              {numberOfOrdersByStatus?.result ? (
                numberOfOrdersByStatus?.result?.pending ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
              )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'inProgress'}
            onClick={() => changeSelectedOrderStatus('inProgress')}
          >
            {t('IN_PROGRESS', 'in progress')}
            <span>(
              {numberOfOrdersByStatus?.result ? (
                numberOfOrdersByStatus?.result?.inProgress ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
            )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'completed'}
            onClick={() => changeSelectedOrderStatus('completed')}
          >
            {t('COMPLETED', 'completed')}
            <span>(
              {numberOfOrdersByStatus?.result ? (
                numberOfOrdersByStatus?.result?.completed ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
            )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'cancelled'}
            onClick={() => changeSelectedOrderStatus('cancelled')}
          >
            {t('CANCELLED', 'cancelled')}
            <span>(
              {numberOfOrdersByStatus?.result ? (
                numberOfOrdersByStatus?.result?.cancelled ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
              )
            </span>
          </Tab>
        </DragScroll>
      </OrderStatusFilterContainer>
    </>
  )
}
