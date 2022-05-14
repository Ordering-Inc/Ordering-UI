import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { OrderList, useLanguage, useOrder } from 'ordering-components'

import { HorizontalOrdersLayout } from '../HorizontalOrdersLayout'
import { VerticalOrdersLayout } from '../../../../../components/VerticalOrdersLayout'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { useTheme } from 'styled-components'

import {
  OptionTitle,
  OrdersContainer,
  SkeletonOrder,
  SkeletonCard,
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
    onRedirectPage,
    businessesIds,
    orderStatus,
    isCustomLayout,
    isBusinessesLoading,
    pastOrders,
    preOrders,
    selectItem,
    setIsEmptyPast,
    setIsEmptyActive,
    setIsEmptyPreorder,
    isCustomerMode
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [, { reorder }] = useOrder()
  const { loading, error, orders: values } = orderList

  const imageFails = activeOrders
    ? theme.images?.general?.emptyActiveOrders
    : theme.images?.general?.emptyPastOrders

  const orders = customArray || values || []
  const isShowTitles = businessesIds
    ? orders && orders.length > 0 && !orders.map(order => businessesIds && businessesIds.includes(order.business_id)).every(i => !i)
    : orders.length > 0

  const [reorderLoading, setReorderLoading] = useState(false)
  const [loadingOrders, setLoadingOrders] = useState(true)

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: result.uuid } })
        return
      }
      setReorderLoading(false)
    } catch (err) {
      setReorderLoading(false)
    }
  }

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending') },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed') },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected') },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business') },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver') },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder') },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready') },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer') },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer') },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer') },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business') },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer') },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business') },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business') },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver') },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  useEffect(() => {
    let timeout
    if (isCustomLayout) {
      timeout = setTimeout(() => {
        setLoadingOrders(false)
      }, 2000)
    }
    return () => {
      typeof timeout === 'number' && clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (loading) return

    if (orders.length === 0) {
      activeOrders && setIsEmptyActive && setIsEmptyActive(true)
      pastOrders && setIsEmptyPast && setIsEmptyPast(true)
      preOrders && setIsEmptyPreorder && setIsEmptyPreorder(true)
    }
  }, [orders, activeOrders, pastOrders, preOrders])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(isCustomLayout ? ((isShowTitles || !isBusinessesPage) && !loadingOrders && !loading && !isBusinessesLoading) : (isShowTitles || !isBusinessesPage)) && (
        <>
          {orders.length > 0 && (
            <OptionTitle isBusinessesPage={isBusinessesPage}>
              <h1>
                {titleContent || (activeOrders
                  ? t('ACTIVE', 'Active')
                  : (pastOrders ? t('PAST', 'Past') : t('UPCOMING', 'Upcoming')))}
              </h1>
            </OptionTitle>
          )}
          {!loading && orders.length === 0 && selectItem !== 'all' && (
            <NotFoundSource
              image={imageFails}
              content={t('NO_RESULTS_FOUND', 'Sorry, no results found')}
              conditioned
            />
          )}
        </>
      )}

      {(isCustomLayout ? (loadingOrders || loading || isBusinessesLoading) : loading) && (
        <OrdersContainer
          isSkeleton
          activeOrders={horizontal}
          isBusinessesPage={isBusinessesPage}
        >
          {horizontal ? (
            <SkeletonOrder activeOrders={horizontal} isBusinessesPage={isBusinessesPage}>
              {[...Array(3)].map((item, i) => (
                <SkeletonCard key={i}>
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

      {(isCustomLayout ? !loadingOrders && !loading && !error && orders.length > 0 && !isBusinessesLoading : !loading && !error && orders.length > 0) && (
        horizontal ? (
          <>
            <HorizontalOrdersLayout
              businessesIds={businessesIds}
              orders={orders.filter(order => orderStatus.includes(order.status))}
              pagination={pagination}
              onRedirectPage={onRedirectPage}
              loadMoreOrders={loadMoreOrders}
              isBusinessesPage={isBusinessesPage}
              reorderLoading={reorderLoading}
              customArray={customArray}
              getOrderStatus={getOrderStatus}
              handleReorder={handleReorder}
              activeOrders={activeOrders}
              pastOrders={pastOrders}
              isCustomerMode={isCustomerMode}
            />
          </>
        ) : (
          <VerticalOrdersLayout
            reorderLoading={reorderLoading}
            orders={orders.filter(order => orderStatus.includes(order.status))}
            pagination={pagination}
            loadMoreOrders={loadMoreOrders}
            onRedirectPage={onRedirectPage}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
          />
        )
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const OrdersOption = (props) => {
  const orderListProps = {
    ...props,
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders
      ? [0, 3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23]
      : (props.pastOrders ? [1, 2, 5, 6, 10, 11, 12, 15, 16, 17] : [13]),
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
