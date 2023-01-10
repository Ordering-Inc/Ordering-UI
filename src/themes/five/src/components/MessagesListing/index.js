import React, { useState, useEffect } from 'react'
import { Button } from '../../styles/Buttons'
import { useLanguage, useUtils, useEvent, OrderList as OrderListController, OrderDetails as OrderDetailsController } from 'ordering-components'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { getOrderStatus } from '../../../../../utils'

import {
  MessagesListingContainer,
  OrderListItems,
  ListHeader,
  OrdersOrderByOptionContainer,
  InnerTabsContainer,
  Title,
  OrderListContainer,
  OrdersListContainer,
  OrderCard,
  MessageContainer,
  OrderHeader,
  ViewDetails,
  CardContent,
  BusinessInfo,
  WrapperImage,
  UnreadMessageCounter,
  Image,
  LoadMoreButtonWrap,
  DriverInfo,
  OptionContent,
  DriverNameContainer,
  DriverName,
  DriverText,
  NotFoundSourceWrapper
} from './styles'
import { Messages } from '../Messages'

const OrdersListingUI = (props) => {
  const {
    orderList,
    selectedOrderCard,
    handleOrderCardClick,
    handleOpenOrderDetail,
    handleUpdateDriverLocation,
    pagination,
    loadMoreOrders,
    small,
    setOrderListStatus
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parseDate, optimizeImage }] = useUtils()

  const handleOrderClick = (e, order) => {
    const isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector')
    if (isInvalid) return
    handleOrderCardClick(order)
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    if (orderList.loading || !selectedOrderCard) return
    const updatedOrder = orderList?.orders.find(order => order.id === selectedOrderCard?.id)
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder)
    }
  }, [orderList?.orders])

  useEffect(() => {
    if (orderList.loading || selectedOrderCard) return
    if (orderList?.orders.length > 0) {
      handleOrderCardClick(orderList.orders[0])
    }
  }, [orderList, selectedOrderCard])

  useEffect(() => {
    setOrderListStatus(orderList)
  }, [orderList])

  return (
    <OrdersListContainer className='testmark'>
      {orderList.loading ? (
        [...Array(10).keys()].map(i => (
          <OrderCard key={i}>
            <OrderHeader>
              <Skeleton width={100} height={30} />
              <div>
                <Skeleton width={150} />
                <ViewDetails>
                  <Skeleton width={100} />
                </ViewDetails>
              </div>
            </OrderHeader>
            <CardContent>
              <BusinessInfo>
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <div className='info'>
                  <p><Skeleton width={100} /></p>
                  <p><Skeleton width={100} /></p>
                </div>
              </BusinessInfo>
              <BusinessInfo>
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <div className='info'>
                  <p><Skeleton width={100} /></p>
                  <p><Skeleton width={100} /></p>
                </div>
              </BusinessInfo>
            </CardContent>
          </OrderCard>
        ))
      ) : (
        <>
          {orderList.orders?.map(order => (
            <OrderCard
              key={order.id}
              active={selectedOrderCard?.id === order.id}
              onClick={(e) => handleOrderClick(e, order)}
            >
              <OrderHeader>
                <h2>{t('INVOICE_ORDER_NO', 'Order No.')} {order?.id}</h2>
                <p>{getOrderStatus(order.status)?.value}</p>
                <div>
                  <p>
                    {order?.delivery_datetime_utc
                      ? parseDate(order?.delivery_datetime_utc)
                      : parseDate(order?.delivery_datetime, { utc: false })}
                  </p>
                  <ViewDetails
                    className='view-details'
                    onClick={() => handleOpenOrderDetail(order)}
                  >
                    {t('VIEW_DETAILS', 'View details')}
                  </ViewDetails>
                </div>
              </OrderHeader>
              {order?.unread_count > 0 && (
                <UnreadMessageCounter>
                  {order?.unread_count}
                </UnreadMessageCounter>
              )}
              <CardContent>
                <BusinessInfo>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                  </WrapperImage>
                  <div className='info'>
                    <p className='bold'>{order?.business?.name}</p>
                    <p>{order?.business?.city?.name}</p>
                  </div>
                </BusinessInfo>
                {order?.delivery_type === 1 && (
                  <DriverInfo>
                    <WrapperImage>
                      {(order?.driver && order?.driver?.photo) ? (
                        <Image bgimage={optimizeImage(order?.driver?.photo, 'h_50,c_limit')} />
                      ) : (
                        <FaUserAlt />
                      )}
                    </WrapperImage>
                    {order?.driver ? (
                      <OptionContent>
                        <DriverNameContainer small={small}>
                          <DriverName small={small}>{order?.driver.name} {order?.driver.lastname}</DriverName>
                          <DriverText small={small}>{t('DRIVER', 'Driver')}</DriverText>
                        </DriverNameContainer>
                      </OptionContent>
                    ) : (
                      <OptionContent>
                        <DriverName small={small}>
                          {t('NO_DRIVER', 'No Driver')}
                        </DriverName>
                      </OptionContent>
                    )}
                  </DriverInfo>
                )}
              </CardContent>
            </OrderCard>
          ))}
          {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
            <LoadMoreButtonWrap>
              <Button
                className='load-orders'
                bgtransparent
                color='primary'
                onClick={loadMoreOrders}
              >
                {t('LOAD_MORE_ORDERS', 'Load more orders')}
              </Button>
            </LoadMoreButtonWrap>
          )}
        </>
      )}
      {!orderList?.loading && orderList?.orders.length === 0 && (
        <NotFoundSourceWrapper>
          <NotFoundSource
            content={t('NO_RESULTS_FOUND', 'Sorry, no results found')}
            btnTitle={t('GO_HOME', 'Go to home')}
            onClickButton={() => handleGoToPage({ page: 'home' })}
          />
        </NotFoundSourceWrapper>
      )}
    </OrdersListContainer>
  )
}

export const IdOrderList = (props) => {
  const orderListProps = {
    ...props,
    UIComponent: OrdersListingUI,
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc'
  }

  return <OrderListController {...orderListProps} />
}

export const NewestOrderList = (props) => {
  const orderListProps = {
    ...props,
    UIComponent: OrdersListingUI,
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    profileMessages: true,
    orderBy: 'last_direct_message_at',
    orderDirection: 'asc'
  }

  return <OrderListController {...orderListProps} />
}

const OrderDetailsUI = (props) => {
  const {
    messages,
    setMessages,
    readMessages
  } = props
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const { order } = props.order
  const handleOpenMessages = (data) => {
    setOpenMessages(data)
    readMessages()
  }
  const handleChangeOpenMessages = (data) => {
    handleOpenMessages(data)
  }

  useEffect(() => {
    handleOpenMessages({ driver: false, business: true })
  }, [])

  return (
    <Messages
      orderId={order?.id}
      order={order}
      business={openMessages.business}
      driver={openMessages.driver}
      messages={messages}
      setMessages={setMessages}
      readMessages={readMessages}
      onMessages={setOpenMessages}
      onClose={() => setOpenMessages({ driver: false, business: false })}
      profileMessages
      handleChangeOpenMessages={handleChangeOpenMessages}
    />
  )
}

export const MessageControler = (props) => {
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  }
  return <OrderDetailsController {...orderDetailsProps} />
}

export const MessagesListing = (props) => {
  const { onRedirectPage } = props
  const [orderByOption, setOrderByOption] = useState('last_direct_message_at')
  const [, t] = useLanguage()
  const [selectedOrder, setSelectedOrder] = useState(null)
  const theme = useTheme()

  const [orderListStatus, setOrderListStatus] = useState({
    error: null,
    loading: true,
    orders: []
  })

  const imageFails = theme.images?.general?.emptyPastOrders

  const handleOpenOrderDetail = (order) => {
    onRedirectPage({ page: 'order_detail', params: { orderId: order?.uuid } })
  }

  const handleOrderCardClick = (order) => {
    setSelectedOrder({ ...order })
  }

  return (
    <MessagesListingContainer>
      <OrderListItems>
        <ListHeader>
          <Title>
            {t('ORDER', 'Order')}
          </Title>
          <OrdersOrderByOptionContainer>
            <InnerTabsContainer>
              <Button
                color={orderByOption === 'last_direct_message_at' ? 'primary' : 'secundaryDark'}
                onClick={() => setOrderByOption('last_direct_message_at')}
              >
                {t('NEWEST', 'Newest')}
              </Button>
              <Button
                color={orderByOption === 'id' ? 'primary' : 'secundaryDark'}
                onClick={() => setOrderByOption('id')}
              >
                {t('ORDER_NUMBER', 'Order number')}
              </Button>
            </InnerTabsContainer>
          </OrdersOrderByOptionContainer>
        </ListHeader>
        <OrderListContainer>
          {orderByOption === 'id' && (
            <IdOrderList
              {...props}
              handleOrderCardClick={handleOrderCardClick}
              selectedOrderCard={selectedOrder}
              handleOpenOrderDetail={handleOpenOrderDetail}
              setOrderListStatus={setOrderListStatus}
            />
          )}
          {orderByOption === 'last_direct_message_at' && (
            <NewestOrderList
              {...props}
              handleOrderCardClick={handleOrderCardClick}
              selectedOrderCard={selectedOrder}
              handleOpenOrderDetail={handleOpenOrderDetail}
              setOrderListStatus={setOrderListStatus}
            />
          )}
        </OrderListContainer>
      </OrderListItems>
      <MessageContainer>
        {selectedOrder && (
          <MessageControler
            order={selectedOrder}
            orderListStatus={orderListStatus}
          />
        )}
        {(!selectedOrder && !orderListStatus?.loading && orderListStatus?.orders.length === 0) && (
          <NotFoundSourceWrapper>
            <NotFoundSource
              image={imageFails}
            />
          </NotFoundSourceWrapper>
        )}
      </MessageContainer>
    </MessagesListingContainer>
  )
}
