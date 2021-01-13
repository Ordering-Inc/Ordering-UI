import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { OrderList, useLanguage } from 'ordering-components'

import { ActiveOrders } from '../ActiveOrders'
import { PreviousOrders } from '../PreviousOrders'

import { useTheme } from 'styled-components'

import {
  OptionTitle,
  ImageNotFound,
  OrdersContainer,
  SkeletonOrder,
  SkeletonCard,
  SkeletonMap,
  SkeletonContent,
  SkeletonText,
  SkeletonInformation,
  SkeletonReorder,
  SkeletonButton
} from './styles'

const OrdersOptionUI = (props) => {
  const {
    orderList,
    pagination,
    activeOrders,
    onOrderClick,
    loadMoreOrders
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { loading, error, orders } = orderList

  const [ordersSorted, setOrdersSorted] = useState([])

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', 'Pending') },
      { key: 1, value: t('COMPLETED', 'Completed') },
      { key: 2, value: t('REJECTED', 'Rejected') },
      { key: 3, value: t('DRIVER_IN_BUSINESS', 'Driver in business') },
      { key: 4, value: t('PREPARATION_COMPLETED', 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', 'Rejected by Driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  useEffect(() => {
    const ordersSorted = orders.sort((a, b) => {
      if (activeOrders) {
        return new Date(b.created_at) - new Date(a.created_at)
      }
      return new Date(a.created_at) - new Date(b.created_at)
    })
    setOrdersSorted(ordersSorted)
  }, [orders])

  return (
    <>
      <OptionTitle>
        <h1>
          {activeOrders
            ? t('ACTIVE_ORDERS', 'Active Orders')
            : t('PREVIOUS_ORDERS', 'Previous Orders')}
        </h1>
      </OptionTitle>
      {!loading && ordersSorted.length === 0 && (
        <ImageNotFound>
          <img
            src={activeOrders ? theme.images?.general?.emptyActiveOrders : theme.images?.general?.emptyPastOrders}
            alt={`empty-${activeOrders ? 'active' : 'past'}-orders`}
            width='300px'
            height='300px'
          />
        </ImageNotFound>
      )}

      {loading && (
        <OrdersContainer activeOrders={activeOrders} isSkeleton>
          {activeOrders ? (
            <SkeletonOrder activeOrders={activeOrders}>
              {[...Array(3)].map((item, i) => (
                <SkeletonCard key={i}>
                  <SkeletonMap>
                    <Skeleton />
                  </SkeletonMap>
                  <SkeletonContent activeOrders={activeOrders}>
                    <div>
                      <Skeleton width={70} height={70} />
                    </div>
                    <SkeletonText>
                      <Skeleton width={100} />
                      <Skeleton width={80} />
                      <Skeleton width={120} />
                    </SkeletonText>
                  </SkeletonContent>
                  <SkeletonButton>
                    <Skeleton />
                  </SkeletonButton>
                </SkeletonCard>
              ))}
            </SkeletonOrder>
          ) : (
            [...Array(3)].map((item, i) => (
              <SkeletonOrder key={i}>
                <SkeletonContent>
                  <SkeletonInformation>
                    <div>
                      <Skeleton width={70} height={70} />
                    </div>
                    <SkeletonText>
                      <Skeleton width={100} />
                      <Skeleton width={120} />
                      <Skeleton width={80} />
                    </SkeletonText>
                  </SkeletonInformation>
                  <SkeletonReorder>
                    <Skeleton />
                    <Skeleton />
                  </SkeletonReorder>
                </SkeletonContent>
              </SkeletonOrder>
            ))
          )}
        </OrdersContainer>
      )}

      {!loading && !error && orders.length > 0 && (
        activeOrders ? (
          <ActiveOrders
            orders={ordersSorted}
            pagination={pagination}
            onOrderClick={onOrderClick}
            loadMoreOrders={loadMoreOrders}
            getOrderStatus={getOrderStatus}
          />
        ) : (
          <PreviousOrders
            orders={ordersSorted}
            pagination={pagination}
            onOrderClick={onOrderClick}
            loadMoreOrders={loadMoreOrders}
            getOrderStatus={getOrderStatus}
          />
        )
      )}
    </>
  )
}

export const OrdersOption = (props) => {
  const orderListProps = {
    ...props,
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders ? [0, 3, 4, 7, 8, 9] : [1, 2, 5, 6, 10, 11, 12],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  }

  return (
    <OrderList {...orderListProps} />
  )
}
