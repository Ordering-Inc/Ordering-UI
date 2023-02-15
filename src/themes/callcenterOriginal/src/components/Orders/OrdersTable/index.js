import React, { useEffect, useState } from 'react'
import moment from 'moment'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'

import {
  OrdersContainer,
  Table,
  OrderTbody,
  OrderNumberContainer,
  CheckBox,
  WrapperImage,
  BusinessInfo,
  CustomerInfo,
  DriversInfo,
  OrderType,
  WrapOrderStatusSelector,
  WrapperPagination,
  StatusInfo,
  LogisticStatusDot,
  PriorityDot,
  Timestatus,
  Timer,
  OrdersCountWrapper,
  DragTh
} from './styles'

export const OrdersTable = (props) => {
  const {
    isSelectedOrders,
    orderList,
    pagination,
    selectedOrderIds,
    orderDetailId,
    getPageOrders,
    handleSelectedOrderIds,
    handleOpenOrderDetail,
    setSelectedOrderIds,
    currentTourStep,
    isTourOpen,
    handleOpenTour,
    setIsTourOpen,
    slaSettingTime,
    groupStatus,
    allowColumns,
    setAllowColumns,
    handleDrop
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage, getTimeAgo, parsePrice }] = useUtils()
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [, setCurrentTime] = useState()
  const [dragOverd, setDragOverd] = useState('')
  const handleChangePage = (page) => {
    getPageOrders(pagination.pageSize, page)
  }
  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageOrders(pageSize, expectedPage)
  }
  const [configState] = useConfig()

  const optionsDefault = [
    {
      value: 'status',
      content: t('STATUS', 'Status')
    },
    {
      value: 'orderNumber',
      content: t('INVOICE_ORDER_NO', 'Order No.')
    },
    {
      value: 'dateTime',
      content: t('DATE_TIME', 'Date and time')
    },
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'customer',
      content: t('CUSTOMER', 'Customer')
    },
    {
      value: 'driver',
      content: t('DRIVER', 'Driver')
    },
    {
      value: 'advanced',
      content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
    },
    {
      value: 'timer',
      content: t('SLA_TIMER', 'SLA’s timer')
    },
    {
      value: 'total',
      content: t('EXPORT_TOTAL', 'Total')
    }
  ]

  const getDelayMinutes = (order) => {
    // targetMin = delivery_datetime  + eta_time - now()
    const offset = 300
    const cdtToutc = moment(order?.delivery_datetime).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    const _delivery = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc)
      : parseDate(cdtToutc)
    const _eta = order?.eta_time
    const diffTimeAsSeconds = moment(_delivery).add(_eta, 'minutes').diff(moment().utc(), 'seconds')
    return Math.ceil(diffTimeAsSeconds / 60)
  }

  const displayDelayedTime = (order) => {
    let tagetedMin = getDelayMinutes(order)
    // get day, hour and minutes
    const sign = tagetedMin >= 0 ? '' : '- '
    tagetedMin = Math.abs(tagetedMin)
    let day = Math.floor(tagetedMin / 1440)
    const restMinOfTargetedMin = tagetedMin - 1440 * day
    let restHours = Math.floor(restMinOfTargetedMin / 60)
    let restMins = restMinOfTargetedMin - 60 * restHours
    // make standard time format
    day = day === 0 ? '' : day + 'day  '
    restHours = restHours < 10 ? '0' + restHours : restHours
    restMins = restMins < 10 ? '0' + restMins : restMins

    const finalTaget = sign + day + restHours + ':' + restMins
    return finalTaget
  }

  const getStatusClassName = (minutes) => {
    if (isNaN(Number(minutes))) return 'in_time'
    const delayTime = configState?.configs?.order_deadlines_delayed_time?.value
    return minutes > 0 ? 'in_time' : Math.abs(minutes) <= delayTime ? 'at_risk' : 'delayed'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, slaSettingTime)

    return () => clearInterval(interval)
  }, [])

  const getLogisticTag = (status) => {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In progress')
      case 2:
        return t('IN_QUEUE', 'In queue')
      case 3:
        return t('EXPIRED', 'Expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getPriorityTag = (priority) => {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low')
      case 0:
        return t('NORMAL', 'Normal')
      case 1:
        return t('HIGH', 'High')
      case 2:
        return t('URGENT', 'Urgent')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending') },
      { key: 1, value: t('COMPLETED_BY_ADMIN', theme?.defaultLanguages?.COMPLETED || 'Completed by admin') },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected') },
      { key: 3, value: t('ORDER_STATUS_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver arrived to business') },
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
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver') },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', 'Driver on way') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const handleChangeAllowColumns = (type) => {
    const _column = allowColumns[type]
    setAllowColumns({
      ...allowColumns,
      [type]: { ..._column, visable: !_column?.visable }
    })
  }

  const handleClickOrder = (order, e) => {
    const inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'))
    if (inValid) return
    handleOpenOrderDetail(order)
  }

  const handleSelecteAllOrder = () => {
    const orderIds = orderList.orders?.reduce((ids, order) => [...ids, order.id], [])
    if (!isAllChecked) {
      setSelectedOrderIds([...selectedOrderIds, ...orderIds])
    } else {
      const orderIdsToDeleteSet = new Set(orderIds)
      const updatedSelectedOrderIds = selectedOrderIds.filter((name) => {
        return !orderIdsToDeleteSet.has(name)
      })
      setSelectedOrderIds(updatedSelectedOrderIds)
    }
  }
  /**
   * Method to handle drag start
   */
  const handleDragStart = (event, columnName) => {
    event.dataTransfer.setData('transferColumnName', columnName)
    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = allowColumns[columnName]?.title
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }
  /**
   * Method to handle drag over
   */
  const handleDragOver = (event, columnName) => {
    event.preventDefault()
    setDragOverd(columnName)
  }

  /**
   * Method to handle drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    setDragOverd('')
  }

  useEffect(() => {
    if (orderList.loading) return
    const orderIds = orderList.orders?.reduce((ids, order) => [...ids, order.id], [])
    const _isAllChecked = orderIds.every(elem => selectedOrderIds.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [orderList.orders, selectedOrderIds])

  const handleChangeKeyboard = (evt) => {
    if (evt.code === 'Escape') setIsTourOpen && setIsTourOpen(false)
    if (evt.keyCode === 37 && currentTourStep === 1) handleOpenTour()
    if (evt.keyCode === 37 && currentTourStep === 4) handleOpenOrderDetail(orderList?.orders[0], true)
    if (evt.keyCode === 39 && currentTourStep === 0) handleOpenOrderDetail(orderList?.orders[0])
  }

  useEffect(() => {
    if (!isTourOpen) return
    document.addEventListener('keydown', handleChangeKeyboard)
    return () => document.removeEventListener('keydown', handleChangeKeyboard)
  }, [isTourOpen, currentTourStep])

  return (
    <>
      <OrdersContainer
        id='orderTable'
        isSelectedOrders={isSelectedOrders}
        noScroll={isTourOpen && currentTourStep === 0}
      >
        <Table
          className='orders_table'
          noFixedHeader={!orderList.loading && orderList.orders?.length <= 5}
        >
          {!isSelectedOrders && (
            <thead>
              <tr>
                {allowColumns && Object.keys(allowColumns).filter(col => allowColumns[col]?.visable && allowColumns[col]?.order !== 0)
                  .sort((col1, col2) => allowColumns[col1]?.order - allowColumns[col2]?.order)
                  .map((column, i, array) => {
                    if (column === 'slaBar') {
                      return
                    }
                    if (column === 'orderNumber') {
                      return (
                        <th
                          className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'orderNo small' : 'orderNo'}
                          key={`noDragTh-${i}`}
                          colSpan={allowColumns?.slaBar?.visable ? 2 : 1}
                        >
                          <CheckBox
                            isChecked={!orderList.loading && isAllChecked}
                            onClick={() => handleSelecteAllOrder()}
                            className='orderCheckBox'
                          >
                            {(!orderList.loading && isAllChecked) ? (
                              <RiCheckboxFill />
                            ) : (
                              <RiCheckboxBlankLine />
                            )}
                          </CheckBox>
                          {t('ORDER', 'Order')}
                        </th>
                      )
                    }
                    if (column === 'total' || (column !== 'total' && column === [...array].pop())) {
                      return (
                        <React.Fragment key={i}>
                          {(column !== 'total' && column === [...array].pop()) && (
                            <DragTh
                              key={`dragTh-${i}`}
                              onDragOver={e => handleDragOver?.(e, column)}
                              onDrop={e => handleDrop(e, column)}
                              onDragEnd={e => handleDragEnd(e)}
                              colSpan={allowColumns[column]?.colSpan ?? 1}
                              className={allowColumns[column]?.className}
                              selectedDragOver={column === dragOverd}
                            >
                              <div draggable onDragStart={e => handleDragStart?.(e, column)}>
                                <img
                                  src={theme.images.icons?.sixDots}
                                  alt='six dots'
                                />
                                <span>{allowColumns[column]?.title}</span>
                              </div>
                            </DragTh>
                          )}
                          <th className='orderPrice' key={`noDragTh-${i}`}>
                            <ColumnAllowSettingPopover
                              allowColumns={allowColumns}
                              optionsDefault={optionsDefault}
                              handleChangeAllowColumns={handleChangeAllowColumns}
                              isOrder
                            />
                          </th>
                        </React.Fragment>
                      )
                    }
                    return (column !== 'timer' || (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress'))) && (
                      <DragTh
                        key={`dragTh-${i}`}
                        onDragOver={e => handleDragOver?.(e, column)}
                        onDrop={e => handleDrop(e, column)}
                        onDragEnd={e => handleDragEnd(e)}
                        colSpan={allowColumns[column]?.colSpan ?? 1}
                        className={allowColumns[column]?.className}
                        selectedDragOver={column === dragOverd}
                      >
                        <div draggable onDragStart={e => handleDragStart?.(e, column)}>
                          <img
                            src={theme.images.icons?.sixDots}
                            alt='six dots'
                          />
                          <span>{allowColumns[column]?.title}</span>
                        </div>
                      </DragTh>)
                  })}
              </tr>
            </thead>
          )}
          {(orderList.loading || !allowColumns) ? (
            [...Array(10).keys()].map(i => (
              <OrderTbody key={i}>
                <tr>
                  {allowColumns?.slaBar?.visable && (
                    <td>
                      <Timestatus />
                    </td>
                  )}
                  <td
                    className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'orderNo small' : 'orderNo'}
                  >
                    <OrderNumberContainer>
                      <CheckBox>
                        <Skeleton width={25} height={25} style={{ margin: '10px' }} />
                      </CheckBox>
                      <div className='info'>
                        {allowColumns?.orderNumber?.visable && (
                          <p><Skeleton width={100} /></p>
                        )}
                        {allowColumns?.dateTime?.visable && (
                          <Skeleton width={120} />
                        )}
                      </div>
                    </OrderNumberContainer>
                  </td>
                  {allowColumns?.status?.visable && !isSelectedOrders && (
                    <td className='statusInfo'>
                      <StatusInfo>
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                        </div>
                      </StatusInfo>
                    </td>
                  )}
                  {allowColumns?.business?.visable && (
                    <td className='businessInfo'>
                      <BusinessInfo>
                        <Skeleton width={45} height={45} />
                        <div className='info'>
                          <p className='bold'><Skeleton width={80} /></p>
                          <p><Skeleton width={100} /></p>
                        </div>
                      </BusinessInfo>
                    </td>
                  )}
                  {allowColumns?.customer?.visable && (
                    <td className='customerInfo'>
                      <CustomerInfo>
                        <Skeleton width={45} height={45} />
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                          <p><Skeleton width={100} /></p>
                        </div>
                      </CustomerInfo>
                    </td>
                  )}
                  {allowColumns?.driver?.visable && !isSelectedOrders && (
                    <td className='driverInfo'>
                      <DriversInfo className='d-flex align-items-center'>
                        <Skeleton width={45} height={45} />
                        <Skeleton width={100} style={{ margin: '10px' }} />
                      </DriversInfo>
                    </td>
                  )}
                  {allowColumns?.deliveryType?.visable && !isSelectedOrders && (
                    <td className='orderType'>
                      <OrderType>
                        <Skeleton width={35} height={35} />
                      </OrderType>
                    </td>
                  )}
                  {allowColumns?.status?.visable && !isSelectedOrders && (
                    <td className='orderStatusTitle'>
                      <WrapOrderStatusSelector>
                        <Skeleton width={100} height={30} />
                      </WrapOrderStatusSelector>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='logistic'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='attempts'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='priority'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {!isSelectedOrders && (
                    <td className='orderPrice'>
                      <div className='info'>
                        {allowColumns?.total?.visable && (
                          <p className='bold'><Skeleton width={60} /></p>
                        )}
                        <p>
                          <Skeleton width={100} />
                        </p>
                      </div>
                    </td>
                  )}
                </tr>
              </OrderTbody>
            ))
          ) : (
            orderList.orders.map((order, i) => (
              <OrderTbody
                key={i}
                className={parseInt(orderDetailId) === order.id ? 'active' : ''}
                onClick={(e) => handleClickOrder(order, e)}
                data-tour={i === 0 ? 'tour_start' : ''}
              >
                <tr>
                  {Object.keys(allowColumns).filter(col => allowColumns[col]?.visable)
                    .sort((col1, col2) => allowColumns[col1]?.order - allowColumns[col2]?.order)
                    .map((column, index) => {
                      if (column === 'slaBar') {
                        return (
                          <td key={`slaBar${i}-${index}`}>
                            <Timestatus
                              timeState={getStatusClassName(getDelayMinutes(order))}
                            />
                          </td>
                        )
                      }
                      if (column === 'orderNumber') {
                        return (
                          <td
                            className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'small' : ''}
                            key={`orderNumber${i}-${index}`}
                          >
                            <OrderNumberContainer>
                              {!isSelectedOrders && (
                                <CheckBox
                                  isChecked={selectedOrderIds.includes(order?.id)}
                                  onClick={() => handleSelectedOrderIds(order.id)}
                                  className='orderCheckBox'
                                >
                                  {selectedOrderIds.includes(order?.id) ? (
                                    <RiCheckboxFill />
                                  ) : (
                                    <RiCheckboxBlankLine />
                                  )}
                                </CheckBox>
                              )}
                              <div className='info'>
                                {allowColumns?.orderNumber?.visable && (
                                  <p className='bold'>{t('INVOICE_ORDER_NO', 'Order No.')} {order?.id}</p>
                                )}
                                {allowColumns?.dateTime?.visable && (
                                  <p className='date'>
                                    {parseDate(order?.delivery_datetime, { utc: false })}
                                  </p>
                                )}
                              </div>
                            </OrderNumberContainer>
                          </td>
                        )
                      }
                      if (column === 'status' && !isSelectedOrders) {
                        return (
                          <td className='statusInfo' key={`statusInfo${i}-${index}`}>
                            <StatusInfo>
                              <p className='bold'>{getOrderStatus(order.status)?.value}</p>
                            </StatusInfo>
                          </td>
                        )
                      }
                      if (column === 'business') {
                        return (
                          <td className='businessInfo' key={`businessInfo${i}-${index}`}>
                            <BusinessInfo>
                              <WrapperImage>
                                <img src={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} loading='lazy' alt='' />
                              </WrapperImage>
                              <div className='info'>
                                <p className='bold'>{order?.business?.name}</p>
                                <p>{order?.business?.city?.name}</p>
                              </div>
                            </BusinessInfo>
                          </td>
                        )
                      }
                      if (column === 'customer') {
                        return (
                          <td className='customerInfo' key={`customerInfo${i}-${index}`}>
                            <CustomerInfo>
                              <WrapperImage>
                                {order?.customer?.photo ? (
                                  <img src={optimizeImage(order?.customer?.photo, 'h_50,c_limit')} loading='lazy' alt='' />
                                ) : (
                                  <FaUserAlt />
                                )}
                                <OrdersCountWrapper isNew={order?.customer?.orders_count === 0}>
                                  {order?.customer?.orders_count || t('NEW', 'New')}
                                </OrdersCountWrapper>
                              </WrapperImage>
                              <div className='info'>
                                <p className='bold'>{order?.customer?.name}</p>
                                <p>{order?.customer?.cellphone}</p>
                              </div>
                            </CustomerInfo>
                          </td>
                        )
                      }
                      if (column === 'driver' && !isSelectedOrders) {
                        return (
                          <td key={`driver${i}-${index}`}>
                            {order?.delivery_type === 1 && (
                              <CustomerInfo>
                                <WrapperImage>
                                  {order?.driver?.photo ? (
                                    <img src={optimizeImage(order?.driver?.photo, 'h_50,c_limit')} loading='lazy' alt='' />
                                  ) : (
                                    <FaUserAlt />
                                  )}
                                </WrapperImage>
                                <div className='info'>
                                  {order?.driver ? (
                                    <>
                                      <p className='bold'>{order?.driver?.name}</p>
                                      <p>{order?.driver?.cellphone}</p>
                                    </>
                                  ) : (
                                    <p className='bold'>{t('NO_DRIVER', 'No Driver')}</p>
                                  )}
                                </div>
                              </CustomerInfo>
                            )}
                          </td>
                        )
                      }
                      if (column === 'advanced' && !isSelectedOrders) {
                        return (
                          <React.Fragment key={`advanced${i}-${index}`}>
                            <td className='logistic'>
                              <div className='info'>
                                <p className='bold'>{t('LOGISTIC', 'Logistic')}</p>
                                <p>
                                  {getLogisticTag(order?.logistic_status)}
                                  <LogisticStatusDot
                                    status={order?.logistic_status}
                                  />
                                </p>
                              </div>
                            </td>
                            <td className='attempts'>
                              <div className='info'>
                                <p className='bold'>{t('ATTEMPTS', 'Attempts')}</p>
                                <p>{order?.logistic_attemps}</p>
                              </div>
                            </td>
                            <td className='priority'>
                              <div className='info'>
                                <p className='bold'>{t('PRIORITY', 'Priority')}</p>
                                <p>
                                  {getPriorityTag(order?.priority)}
                                  <PriorityDot priority={order?.priority} />
                                </p>
                              </div>
                            </td>
                          </React.Fragment>
                        )
                      }
                      if (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) {
                        return (
                          <td className='timer' key={`timer${i}-${index}`}>
                            <Timer>
                              <p className='bold'>{t('TIMER', 'Timer')}</p>
                              <p className={getStatusClassName(getDelayMinutes(order))}>{displayDelayedTime(order)}</p>
                            </Timer>
                          </td>
                        )
                      }
                      if (column === 'total') {
                        return (
                          <td className='orderPrice' key={`total${i}-${index}`}>
                            <div className='info'>
                              {allowColumns?.total?.visable && (
                                <p className='bold'>{parsePrice(order?.summary?.total, { currency: order?.currency })}</p>
                              )}
                              {!(order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12) && (
                                <p>
                                  {
                                    order?.delivery_datetime_utc
                                      ? getTimeAgo(order?.delivery_datetime_utc)
                                      : getTimeAgo(order?.delivery_datetime, { utc: false })
                                  }
                                </p>
                              )}
                            </div>
                          </td>
                        )
                      }
                    })}
                </tr>
              </OrderTbody>
            ))
          )}
        </Table>
      </OrdersContainer>

      {pagination && (
        <WrapperPagination>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
            handleChangePage={handleChangePage}
            defaultPageSize={pagination.pageSize}
            handleChangePageSize={handleChangePageSize}
          />
        </WrapperPagination>
      )}
    </>
  )
}
