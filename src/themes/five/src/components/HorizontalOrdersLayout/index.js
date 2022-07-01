import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import {
  Content,
  Price,
  Card,
  BusinessLogoWrapper,
  ButtonWrapper,
  Logo,
  TitleContainer,
  Map,
  FavoriteWrapper
} from './styles'
import {
  OrdersContainer,
  BusinessInformation
} from '../OrdersOption/styles'

import { useTheme } from 'styled-components'
import { AutoScroll } from '../AutoScroll'
import { Tabs } from '../../styles/Tabs'
import { Button } from '../../styles/Buttons'
import BsDot from '@meronex/icons/bs/BsDot'
import { getGoogleMapImage } from '../../../../../utils'

export const HorizontalOrdersLayout = (props) => {
  const {
    pagination,
    loadMoreOrders,
    getOrderStatus,
    isBusinessesPage,
    handleReorder,
    customArray,
    onRedirectPage,
    businessesIds,
    activeOrders,
    pastOrders,
    isCustomerMode
  } = props

  const orders = customArray || props.orders

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()

  const ordersToShow = businessesIds
    ? orders.filter(order => businessesIds?.includes(order?.business_id))
    : orders

  const handleClickCard = (e, uuid) => {
    if (e.target.closest('.favorite')) return

    if (customArray) {
      onRedirectPage({ page: 'checkout', params: { cartUuid: uuid } })
    } else {
      onRedirectPage({ page: 'order_detail', params: { orderId: uuid } })
    }
  }

  const handleChangeFavorite = () => {
    console.log('favorite')
  }

  const businessLogo = theme?.layouts?.orders?.components?.business_logo
  const date = theme?.layouts?.orders?.components?.date
  const map = theme?.layouts?.orders?.components?.map

  const isHideBusinessLogo = businessLogo?.hidden
  const isHideDate = date?.hidden
  const isHideMap = map?.hidden

  const Orders = () => {
    return (
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        {orders.length > 0 && ordersToShow.map(order => (
          <Card
            key={order.id || order.uuid}
            id='order-card'
            isBusinessesPage={isBusinessesPage}
            isCustomerMode={isCustomerMode}
            onClick={(e) => handleClickCard(e, order?.uuid)}
          >
            {(configs?.google_maps_api_key?.value || isBusinessesPage) && !isHideMap && (
              <Map isBusinessesPage={isBusinessesPage}>
                <img
                  src={
                    isBusinessesPage
                      ? (order?.business?.header || order?.business?.logo || theme.images?.dummies?.businessLogo)
                      : getGoogleMapImage(order?.business?.location, configs?.google_maps_api_key?.value)
                  }
                  alt={isBusinessesPage ? 'business_header' : 'google-maps-img'}
                  height={isBusinessesPage ? '200px' : '100px'}
                  width='400px'
                />
              </Map>
            )}
            <Content isCustomerMode={isCustomerMode}>
              {!isCustomerMode && !isHideBusinessLogo && (
                <BusinessLogoWrapper bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_400,c_limit')} />
              )}
              {isCustomerMode && !isHideBusinessLogo && (
                <>
                  {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
                    <Logo>
                      <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='75px' height='75px' />
                    </Logo>
                  )}
                </>
              )}
              <BusinessInformation activeOrders>
                {isCustomerMode ? (
                  <TitleContainer>
                    <h2>{order.business?.name}</h2>
                    <Price isBusinessesPage={isBusinessesPage} isCustomerMode={isCustomerMode}>
                      <h2>
                        {parsePrice(order?.summary?.total || order?.total)}
                      </h2>
                    </Price>
                  </TitleContainer>
                ) : (
                  <h2>{order.business?.name}</h2>
                )}
                <div className='orders-detail'>
                  {order?.id && (
                    <>
                      <BsDot />
                      <p name='order_number'>{t('ORDER_NUM', 'Order No.')} {order.id}</p>
                    </>
                  )}
                  {!isHideDate && (
                    <p>{order?.delivery_datetime_utc
                      ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'MM/DD/YY hh:mm A' })
                      : parseDate(order?.delivery_datetime, { utc: false })}
                    </p>
                  )}
                </div>
                <p className='order-status'>{getOrderStatus(order.status)?.value}</p>
              </BusinessInformation>
              {!isCustomerMode && (
                <Price isBusinessesPage={isBusinessesPage}>
                  {
                    !pastOrders && (
                      <h2>
                        {parsePrice(order?.summary?.total || order?.total)}
                      </h2>
                    )
                  }
                </Price>
              )}
              {pastOrders && !isCustomerMode && (
                <ButtonWrapper>
                  <Button
                    outline
                    color='primary'
                    onClick={(e) => handleClickCard(e, order.uuid)}
                  >
                    {t('REVIEW', 'Review')}
                  </Button>
                  {order.cart && (
                    <Button color='primary' className='reorder' outline onClick={() => handleReorder(order.id)}>
                      {t('REORDER', 'Reorder')}
                    </Button>
                  )}
                </ButtonWrapper>
              )}
              <FavoriteWrapper onClick={handleChangeFavorite} className='favorite'>
                {order?.favorite ? <Like /> : <DisLike />}
              </FavoriteWrapper>
            </Content>
          </Card>
        ))}
        {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
          <Card
            flex
            nobg
            isBusinessesPage={isBusinessesPage}
            isCustomerMode={isCustomerMode}
          >
            <Button
              className='load-orders'
              color='primary'
              outline
              onClick={loadMoreOrders}
            >
              {t('LOAD_MORE_ORDERS', 'Load more orders')}
            </Button>
          </Card>
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

  return (
    <OrdersContainer
      id='orders-container'
      activeOrders
      ordersLength={orders?.length <= 1}
      isBusinessesPage={isBusinessesPage}
    >
      {!isBusinessesPage ? (
        <Tabs>
          <AutoScroll scrollId={activeOrders ? 'activeOrders' : (pastOrders ? 'pastOrders' : 'prevOrders')}>
            <Orders />
          </AutoScroll>
        </Tabs>
      ) : <Orders />}
    </OrdersContainer>
  )
}
