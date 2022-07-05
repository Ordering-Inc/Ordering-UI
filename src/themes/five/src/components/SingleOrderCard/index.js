import React from 'react'
import { useLanguage, useUtils, useConfig, SingleOrderCard as SingleOrderCardController } from 'ordering-components'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { getGoogleMapImage } from '../../../../../utils'
import BsDot from '@meronex/icons/bs/BsDot'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  Content,
  Price,
  BusinessLogoWrapper,
  ButtonWrapper,
  Logo,
  TitleContainer,
  Map,
  FavoriteWrapper
} from './styles'

import {
  BusinessInformation
} from '../OrdersOption/styles'

const SingleOrderCardUI = (props) => {
  const {
    order,
    getOrderStatus,
    isBusinessesPage,
    handleReorder,
    customArray,
    onRedirectPage,
    pastOrders,
    isCustomerMode,
    deleteFavoriteOrder,
    addFavoriteOrder,
    isSkeleton
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()

  const handleClickCard = (e, uuid) => {
    if (e.target.closest('.favorite')) return

    if (customArray) {
      onRedirectPage({ page: 'checkout', params: { cartUuid: uuid } })
    } else {
      onRedirectPage({ page: 'order_detail', params: { orderId: uuid } })
    }
  }

  const handleChangeFavorite = (order) => {
    if (order?.favorite) deleteFavoriteOrder(order.id)
    else addFavoriteOrder(order.id)
  }

  const businessLogo = theme?.layouts?.orders?.components?.business_logo
  const date = theme?.layouts?.orders?.components?.date
  const map = theme?.layouts?.orders?.components?.map

  const isHideBusinessLogo = businessLogo?.hidden
  const isHideDate = date?.hidden
  const isHideMap = map?.hidden

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container
        id='order-card'
        isBusinessesPage={isBusinessesPage}
        isCustomerMode={isCustomerMode}
        onClick={(e) => handleClickCard(e, order?.uuid)}
      >
        {(configs?.google_maps_api_key?.value || isBusinessesPage) && !isHideMap && (
          <>
            {isSkeleton ? (
              <Skeleton height={80} />
            ) : (
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
          </>
        )}
        <Content isCustomerMode={isCustomerMode}>
          {isSkeleton ? (
            <Skeleton width={60} height={60} />
          ) : (
            <>
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
            </>
          )}

          <BusinessInformation activeOrders>
            {isCustomerMode ? (
              <TitleContainer>
                <h2>{isSkeleton ? <Skeleton width={120} /> : order.business?.name}</h2>
                <Price isBusinessesPage={isBusinessesPage} isCustomerMode={isCustomerMode}>
                  <h2>
                    {isSkeleton ? <Skeleton width={50} /> : parsePrice(order?.summary?.total || order?.total)}
                  </h2>
                </Price>
              </TitleContainer>
            ) : (
              <h2>{isSkeleton ? <Skeleton width={120} /> : order.business?.name}</h2>
            )}
            {
              isSkeleton ? (
                <div className='orders-detail'>
                  <Skeleton width={150} />
                </div>
              ) : (
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
              )
            }
            <p className='order-status'>{isSkeleton ? <Skeleton width={80} /> : getOrderStatus(order.status)?.value}</p>
          </BusinessInformation>
          {!isCustomerMode && (
            <Price isBusinessesPage={isBusinessesPage}>
              {
                !pastOrders && (
                  <h2>
                    {isSkeleton ? <Skeleton width={50} /> : parsePrice(order?.summary?.total || order?.total)}
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
          <FavoriteWrapper onClick={() => handleChangeFavorite(order)} className='favorite'>
            {isSkeleton ? <Skeleton width={20} height={20} /> : (
              <>
                {order?.favorite ? <Like /> : <DisLike />}
              </>
            )}
          </FavoriteWrapper>
        </Content>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const SingleOrderCard = (props) => {
  const singleOrderCardProps = {
    ...props,
    UIComponent: SingleOrderCardUI
  }
  return <SingleOrderCardController {...singleOrderCardProps} />
}
