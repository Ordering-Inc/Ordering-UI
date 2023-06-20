import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useSession, OrdersManage as OrdersManageController } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { Alert } from '../../Shared'
import { DriversManager } from './DriversManager'
import { DriversLocation } from '../DriversLocation'

import {
  MainContentContainer,
  TopContent,
  DriversContainer,
  OrdersContainer,
  WrapperDriversLocation,
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapItemView,
  WrapperIndicator,
  OrderSubFilterControls,
  OrderStatusSubFilterWrapper
} from './styles'
import { OrdersDashboard } from '../OrdersDashboard'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
import { OrderNotification } from '../OrderNotification'
import { WizardOrders } from '../WizardOrders'

const OrdersManagerUI = (props) => {
  const {
    isSelectedOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    selectedOrderIds,
    onOrderRedirect,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus,
    handleCustomOrderDetail,
    setSelectedOrderIds,
    numberOfOrdersByStatus,
    allowColumns,
    setAllowColumns
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)
  const [filterModalOpen, setFilterModalOpen] = useState(false)

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(0)
  const [isTourFlag, setIsTourFlag] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [timeStatus, setTimeStatus] = useState(null)
  const [slaSettingTime, setSlaSettingTime] = useState(60000)
  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)

  const [mapsData, setMapsData] = useState({
    driversIsOnline: true,
    onlineDrivers: [],
    offlineDrivers: [],
    selectedDriver: null
  })

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    setDetailsOrder(null)
    setOrderDetailId(null)
    if (!isSelectedOrders) {
      onOrderRedirect()
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(false)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleOpenOrderDetail = (order, isKeydown = false) => {
    if (isTourOpen && currentTourStep === 4 && !isKeydown) {
      setIsTourOpen(false)
      return
    }
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
    if (!isSelectedOrders) {
      onOrderRedirect(order.id)
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true)
    }
    if (isTourOpen && currentTourStep === 4) {
      setIsTourFlag(true)
    }
    if (isTourOpen && currentTourStep === 0) {
      setTimeout(() => {
        setCurrentTourStep(1)
      }, 1)
    }
  }

  const handleOpenTour = () => {
    const tourElement = document.querySelector('[data-tour="tour_start"]')
    if (!tourElement) {
      setAlertState({
        open: true,
        content: t('ONE_ORDER_IS_REQUIRED', 'One order is required')
      })
      return
    }

    const orderElement = document.getElementById('orderTable')
    if (orderElement) orderElement.scrollTo(0, 0)
    setCurrentTourStep(0)
    setIsTourOpen(true)
    handleBackRedirect()
  }

  useEffect(() => {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedOrderIds.length)
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete])

  useEffect(() => {
    if (selectedOrderIds.length === 0) {
      setTimeout(() => {
        setTotalSelectedOrder(0)
      }, 500)
    }
  }, [selectedOrderIds])

  useEffect(() => {
    if (isSelectedOrders) return
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      if (user?.level === 5) {
        handleBackRedirect()
      } else {
        setOrderDetailId(id)
        setIsOpenOrderDetail(true)
      }
    }
  }, [user])

  useEffect(() => {
    if (isTourOpen) return
    setIsTourFlag(false)
  }, [isTourOpen])

  return (
    <>
      <OrdersListContainer
        isSelectedOrders={isSelectedOrders}
      >
        <OrdersContentHeader
          isDisableTitle={isSelectedOrders}
          isDisableControl={isSelectedOrders}
          title={t('ORDER_MANAGER', 'Orders manager')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          citiesList={citiesList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleOpenTour={() => handleOpenTour()}
          filterModalOpen={filterModalOpen}
          setFilterModalOpen={setFilterModalOpen}
          setTimeStatus={setTimeStatus}
          setSlaSettingTime={setSlaSettingTime}
        />

        <MainContentContainer>
          <TopContent>
            <DriversContainer>
              <DriversManager
                setMapsData={setMapsData}
              />
            </DriversContainer>
            <OrdersContainer>
              <OrderStatusFilterBar
                selectedOrderStatus={ordersStatusGroup}
                changeOrderStatus={handleOrdersStatusGroupFilter}
                numberOfOrdersByStatus={numberOfOrdersByStatus}
              />
              <OrderSubFilterControls isColumn={selectedOrderIds?.length}>
                <OrderStatusSubFilterWrapper isColumn={selectedOrderIds?.length}>
                  <OrderStatusSubFilter
                    ordersStatusGroup={ordersStatusGroup}
                    selectedSubOrderStatus={selectedSubOrderStatus}
                    handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
                  />
                </OrderStatusSubFilterWrapper>
                {!isSelectedOrders && (
                  <OrdersDashboardControls
                    selectedOrderNumber={selectedOrderIds?.length}
                    filterValues={filterValues}
                    handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                    handleDeleteMultiOrders={handleDeleteMultiOrders}
                  />
                )}
              </OrderSubFilterControls>
              <OrdersContent>
                <OrdersInnerContent className='order-content'>
                  <WrapItemView>
                    <OrdersDashboard
                      hidePhoto
                      isSelectedOrders={isSelectedOrders}
                      driverId={props.driverId}
                      customerId={props.customerId}
                      businessId={props.businessId}
                      searchValue={searchValue}
                      filterValues={filterValues}
                      selectedOrderIds={selectedOrderIds}
                      deletedOrderId={deletedOrderId}
                      driversList={driversList}
                      ordersStatusGroup={ordersStatusGroup}
                      selectedSubOrderStatus={selectedSubOrderStatus}
                      handleSelectedOrderIds={handleSelectedOrderIds}
                      orderDetailId={orderDetailId}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                      setSelectedOrderIds={setSelectedOrderIds}
                      currentTourStep={currentTourStep}
                      handleOpenTour={handleOpenTour}
                      isTourOpen={isTourOpen}
                      setIsTourOpen={setIsTourOpen}
                      setFilterModalOpen={setFilterModalOpen}
                      timeStatus={timeStatus}
                      slaSettingTime={slaSettingTime}
                      allowColumns={allowColumns}
                      setAllowColumns={setAllowColumns}
                    />
                  </WrapItemView>
                </OrdersInnerContent>
              </OrdersContent>
            </OrdersContainer>
          </TopContent>
          <WrapperDriversLocation>
            <DriversLocation
              driversIsOnline={mapsData.driversIsOnline}
              selectedDriver={mapsData.selectedDriver}
              onlineDrivers={mapsData.onlineDrivers}
              offlineDrivers={mapsData.offlineDrivers}
            />
          </WrapperDriversLocation>
        </MainContentContainer>
      </OrdersListContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          isSelectedOrders={isSelectedOrders}
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          isTourOpen={isTourOpen}
          onClose={() => handleBackRedirect()}
          setCurrentTourStep={setCurrentTourStep}
          currentTourStep={currentTourStep}
          isTourFlag={isTourFlag}
          setIsTourFlag={setIsTourFlag}
          setIsTourOpen={setIsTourOpen}
          drivers={driversList.drivers}
        />
      )}

      <OrderNotification customerId={props.customerId} />

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}

      <WizardOrders
        isTourOpen={isTourOpen}
        setIsTourOpen={setIsTourOpen}
        currentStep={currentTourStep}
        detailsOrder={detailsOrder}
      />
      <Alert
        title={t('ORDERS_MANAGER', 'Orders manager')}
        content={alertState.content}
        open={alertState.open}
        onClose={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('ORDERS_MANAGER', 'Orders manager')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const AllInOne = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
