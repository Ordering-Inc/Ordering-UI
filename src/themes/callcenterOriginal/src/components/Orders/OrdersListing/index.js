import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { OrdersTable } from '../OrdersTable'
import { OrdersCards } from '../OrdersCards'
import { Button } from '../../../styles'

import {
  WrapperNoneOrders,
  WrapperOrderListContent,
  InnerNoneOrdersContainer
} from './styles'

export const OrdersListing = (props) => {
  const {
    isSelectedOrders,
    orderList,
    selectedOrderIds,
    orderListView,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    pagination,
    handleOpenOrderDetail,
    handleOpenMessage,
    handleOrderCardClick,
    handleUpdateDriverLocation,
    messageOrder,
    selectedOrderCard,
    messageListView,
    messageType,
    loadMoreOrders,
    getPageOrders,
    ordersStatusGroup,
    groupStatus,
    orderDetailId,
    filterValues,
    setFilterModalOpen,

    isMessagesView,
    setSelectedOrderIds,
    handleOpenTour,
    currentTourStep,
    isTourOpen,
    setIsTourOpen,
    slaSettingTime,

    allowColumns,
    setAllowColumns,
    handleDrop
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [filterApplied, setFilterApplied] = useState(false)

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0 || messageOrder) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, messageListView])

  useEffect(() => {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return
    if (orderList?.orders.length > 0) {
      handleOrderCardClick(orderList.orders[0])
    }
  }, [isMessagesView, orderList, selectedOrderCard])

  useEffect(() => {
    let _filterApplied = false
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false
    } else {
      _filterApplied = filterValues?.groupTypes?.length || filterValues?.businessIds?.length > 0 || filterValues?.cityIds?.length > 0 ||
        filterValues?.deliveryEndDatetime !== null || filterValues?.deliveryFromDatetime !== null || filterValues?.deliveryTypes?.length > 0 ||
        filterValues?.driverIds?.length > 0 || filterValues?.paymethodIds?.length > 0 || filterValues?.statuses?.length > 0
    }
    setFilterApplied(_filterApplied)
  }, [filterValues])

  return (
    <>
      {((ordersStatusGroup === groupStatus) || isMessagesView) && (
        <>
          {!orderList.loading && pagination?.total === 0 ? (
            <WrapperNoneOrders>
              <InnerNoneOrdersContainer small={orderListView === 'small'}>
                <img src={theme?.images?.dummies?.noOrders} alt='none' />
                {filterApplied ? (
                  <>
                    <p>{t('NOT_FOUND_FILTERED_ORDERS', 'No orders with the current filters applied.')}</p>
                    <Button
                      outline
                      borderRadius='8px'
                      color='primary'
                      onClick={() => setFilterModalOpen(true)}
                    >
                      {t('FILTERS', 'Filters')}
                    </Button>
                  </>
                ) : (
                  <p>{t('MOBILE_NO_ORDERS', 'No Orders yet.')}</p>
                )}
              </InnerNoneOrdersContainer>
            </WrapperNoneOrders>
          ) : (
            <WrapperOrderListContent
              maxHeight={orderListView !== 'table'}
            >
              {orderListView === 'table' ? (
                <OrdersTable
                  setSelectedOrderIds={setSelectedOrderIds}
                  isSelectedOrders={isSelectedOrders}
                  orderList={orderList}
                  pagination={pagination}
                  selectedOrderIds={selectedOrderIds}
                  orderDetailId={orderDetailId}
                  loadMoreOrders={loadMoreOrders}
                  getPageOrders={getPageOrders}
                  handleUpdateOrderStatus={handleUpdateOrderStatus}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  currentTourStep={currentTourStep}
                  isTourOpen={isTourOpen}
                  handleOpenTour={handleOpenTour}
                  setIsTourOpen={setIsTourOpen}
                  slaSettingTime={slaSettingTime}
                  groupStatus={groupStatus}
                  allowColumns={allowColumns}
                  setAllowColumns={setAllowColumns}
                  handleDrop={handleDrop}
                />
              ) : (
                <OrdersCards
                  isMessagesView={isMessagesView}

                  orderList={orderList}
                  pagination={pagination}
                  selectedOrderIds={selectedOrderIds}
                  loadMoreOrders={loadMoreOrders}
                  getPageOrders={getPageOrders}
                  handleUpdateOrderStatus={handleUpdateOrderStatus}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  selectedOrderCard={selectedOrderCard}
                  handleOrderCardClick={handleOrderCardClick}
                  handleUpdateDriverLocation={handleUpdateDriverLocation}
                  slaSettingTime={slaSettingTime}
                />
              )}
            </WrapperOrderListContent>
          )}
        </>
      )}
    </>
  )
}
