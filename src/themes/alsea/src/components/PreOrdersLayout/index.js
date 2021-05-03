import React from 'react'
import Skeleton from 'react-loading-skeleton'
import MdcClockTimeThree from '@meronex/icons/mdc/MdcClockTimeThree'
import { useUtils, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'
import {
  OrderContainer,
  Card,
  CardContent,
  CardBottom,
  Logo,
  OrderContent,
  BusinessInformation,
  ActionContent,
  LoadMoreButtonWrap,
  ReviewContainer,
  DeliveryTime
} from './styles'

export const PreOrdersLayout = (props) => {
  const {
    isSkeleton,
    businessesIds,
    pagination,
    loadMoreOrders,
    isBusinessesPage,
    customArray,
    handleOrderDetails
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()
  const orders = customArray || props.orders
  const ordersToShow = businessesIds
    ? orders.filter(order => businessesIds?.includes(order?.business_id))
    : orders
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrderContainer>
        {isSkeleton ? (
          <>
            {[...Array(10)].map((item, i) => (
              <Card key={i}>
                <CardContent>
                  <OrderContent>
                    <Skeleton width={75} height={75} />
                    <BusinessInformation>
                      <Skeleton width={80} height={25} />
                      <Skeleton width={100} />
                      <Skeleton width={100} />
                    </BusinessInformation>
                  </OrderContent>
                  <ActionContent>
                    <Skeleton width={100} height={25} />
                    <Skeleton width={100} height={30} />
                  </ActionContent>
                </CardContent>
                <CardBottom>
                  <ReviewContainer>
                    <Skeleton width={60} />
                  </ReviewContainer>
                  <Skeleton width={100} height={30} />
                </CardBottom>
              </Card>
            ))}
          </>
        ) : (
          <>
            {orders.length > 0 && ordersToShow.map(order => (
              <Card
                key={order.id || order.uuid}
              >
                <CardContent>
                  <OrderContent>
                    {(order.business?.logo || theme.images?.dummies?.businessLogo) && !isBusinessesPage && (
                      <Logo>
                        <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='75px' height='75px' />
                      </Logo>
                    )}
                    <BusinessInformation>
                      <h2>{order.business?.name}</h2>
                      <p name='order_number'>{t('ORDER_NUMBER', 'Order No.')} {order.id}</p>
                      <p>{order?.customer?.address}</p>
                    </BusinessInformation>
                  </OrderContent>
                  <ActionContent>
                    <p>{parsePrice(order?.summary?.total || 0)}</p>
                    <span
                      onClick={() => handleOrderDetails(order.uuid)}
                    >
                      {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}
                    </span>
                  </ActionContent>
                </CardContent>
                <CardBottom>
                  <DeliveryTime>
                    <MdcClockTimeThree />
                    <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                  </DeliveryTime>
                </CardBottom>
              </Card>
            ))}
            {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
              <LoadMoreButtonWrap>
                <Button
                  className='load-orders'
                  color='primary'
                  outline
                  onClick={loadMoreOrders}
                >
                  {t('LOAD_MORE_ORDERS', 'Load more orders')}
                </Button>
              </LoadMoreButtonWrap>
            )}
          </>
        )}

      </OrderContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
