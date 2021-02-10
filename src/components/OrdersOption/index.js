import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { OrderList, useLanguage, useOrder } from 'ordering-components'

import { HorizontalOrdersLayout } from '../HorizontalOrdersLayout'
import { VerticalOrdersLayout } from '../VerticalOrdersLayout'
import { NotFoundSource } from '../NotFoundSource'

import { useTheme } from 'styled-components'

import {
  OptionTitle,
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
    horizontal,
    activeOrders,
    orderList,
    pagination,
    isBusinessesPage,
    loadMoreOrders,
    titleContent,
    customArray,
    onRedirectPage
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [, { reorder }] = useOrder()
  const { loading, error, orders: values } = orderList

  const imageFails = activeOrders
    ? theme.images?.general?.emptyActiveOrders
    : theme.images?.general?.emptyPastOrders

  const orders = customArray || values

  const [ordersSorted, setOrdersSorted] = useState([])

  const [reorderLoading, setReorderLoading] = useState(false)

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: result.uuid } })
      }
    } catch (err) {
      setReorderLoading(false)
    }
  }

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
      {(orders.length > 0 || !isBusinessesPage) && (
        <>
          <OptionTitle isBusinessesPage={isBusinessesPage}>
            <h1>
              {titleContent ? titleContent : activeOrders
                ? t('ACTIVE_ORDERS', 'Active Orders')
                : t('PREVIOUS_ORDERS', 'Previous Orders')}
            </h1>
          </OptionTitle>
          {!loading && ordersSorted.length === 0 && (
            <NotFoundSource
              image={imageFails}
              content={t('NO_RESULTS_FOUND', 'Sorry, no results found')}
              conditioned
            />
          )}
        </>
      )}

      {loading && (
        <OrdersContainer
          isSkeleton 
          activeOrders={horizontal}
          isBusinessesPage={isBusinessesPage}
        >
          {horizontal ? (
            <SkeletonOrder activeOrders={horizontal} isBusinessesPage={isBusinessesPage}>
              {[...Array(3)].map((item, i) => (
                <SkeletonCard key={i}>
                  <SkeletonMap>
                    <Skeleton />
                  </SkeletonMap>
                  <SkeletonContent activeOrders={horizontal}>
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
        horizontal ? (
          <HorizontalOrdersLayout
            orders={ordersSorted}
            pagination={pagination}
            onRedirectPage={onRedirectPage}
            loadMoreOrders={loadMoreOrders}
            isBusinessesPage={isBusinessesPage}
            reorderLoading={reorderLoading}
            customArray={customArray}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
          />
        ) : (
          <VerticalOrdersLayout
            reorderLoading={reorderLoading}
            orders={ordersSorted}
            pagination={pagination}
            loadMoreOrders={loadMoreOrders}
            onRedirectPage={onRedirectPage}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
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
