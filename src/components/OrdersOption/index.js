import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { OrderList, useLanguage, useEvent } from 'ordering-components'

import { ActiveOrders } from '../ActiveOrders'
import { PreviousOrders } from '../PreviousOrders'

import emptyActiveOrders from '../../../template/assets/empty-active-orders.svg'
import emptyPastOrders from '../../../template/assets/empty-past-orders.svg'

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
  const { loading, error, orders } = orderList

  const [ordersSorted, setOrdersSorted] = useState([])

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
            src={activeOrders ? emptyActiveOrders : emptyPastOrders}
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
          />
        ) : (
          <PreviousOrders
            orders={ordersSorted}
            pagination={pagination}
            onOrderClick={onOrderClick}
            loadMoreOrders={loadMoreOrders}
          />
        )
      )}
    </>
  )
}

export const OrdersOption = (props) => {
  const [events] = useEvent()

  const orderListProps = {
    ...props,
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders ? [0, 3, 4, 7, 8, 9] : [1, 2, 5, 6, 10, 11, 12],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    },
    onOrderClick: (data) => events.emit('go_to_page', data)
  }

  return (
    <OrderList {...orderListProps} />
  )
}
