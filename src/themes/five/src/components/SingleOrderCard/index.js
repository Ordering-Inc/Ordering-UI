import React, { useState } from 'react'
import { useLanguage, useUtils, useConfig, useOrder, useOrderingTheme, SingleOrderCard as SingleOrderCardController } from 'ordering-components'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { ReviewOrder } from '../ReviewOrder'
import { ReviewProduct } from '../ReviewProduct'
import { ReviewDriver } from '../ReviewDriver'

import { useTheme } from 'styled-components'
import { getGoogleMapImage } from '../../../../../utils'
import BsDot from '@meronex/icons/bs/BsDot'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { Confirm } from '../Confirm'
import {
  Container,
  Content,
  Price,
  BusinessLogoWrapper,
  ButtonWrapper,
  Logo,
  TitleContainer,
  Map,
  FavoriteWrapper,
  ReviewWrapper,
  WowPointsWrapper
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
    handleFavoriteOrder,
    isSkeleton,
    isFavorite,
    handleRemoveCart,
    cartState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ carts }] = useOrder()
  const [{ parsePrice, parseDate, optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()
  const [orderingTheme] = useOrderingTheme()
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)

  const handleClickCard = (e, uuid) => {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return

    if (customArray) {
      onRedirectPage({ page: 'checkout', params: { cartUuid: uuid } })
    } else {
      onRedirectPage({ page: 'order_detail', params: { orderId: uuid } })
    }
  }

  const closeReviewOrder = () => {
    if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else handleCloseReivew()
  }

  const closeReviewProduct = () => {
    if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else {
      setIsDriverReviewed(true)
      handleCloseReivew()
    }
  }
  const handleOpenReview = () => {
    if (!order?.review && !isOrderReviewed) setReviewStatus({ order: true, product: false, driver: false })
    else if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true })
    else {
      setIsReviewOpen(false)
      return
    }
    setIsReviewOpen(true)
  }

  const handleCloseReivew = () => {
    setReviewStatus({ order: false, product: false, driver: false })
    setIsReviewOpen(false)
  }

  const handleClickReview = (order) => {
    handleOpenReview && handleOpenReview()
  }

  const handleChangeFavorite = (order) => {
    handleFavoriteOrder && handleFavoriteOrder(!order?.favorite)
  }

  const handleClickReorder = (order) => {
    if (carts[`businessId:${order?.business_id}`] && carts[`businessId:${order?.business_id}`]?.products?.length > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: async () => {
          handleRemoveCart()
          setConfirm({ ...confirm, open: false })
        }
      })
    } else {
      handleReorder(order.id)
    }
  }

  const handleOriginalReorder = () => {
    setConfirm({ ...confirm, open: false })
    handleReorder(order.id)
  }

  const showBusinessLogo = !orderingTheme?.theme?.orders?.components?.business_logo?.hidden
  const showDate = !orderingTheme?.theme?.orders?.components?.date?.hidden
  const showMap = !orderingTheme?.theme?.orders?.components?.map?.hidden

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
        {(configs?.google_maps_api_key?.value || isBusinessesPage) && showMap && (
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
              {!isCustomerMode && showBusinessLogo && (
                <BusinessLogoWrapper bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_400,c_limit')} />
              )}
              {isCustomerMode && showBusinessLogo && (
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
                  {showDate && (
                    <>
                      <BsDot />
                      <p>{order?.delivery_datetime_utc
                        ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'MM/DD/YY hh:mm A' })
                        : parseDate(order?.delivery_datetime, { utc: false })}
                      </p>
                    </>

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
              {!isOrderReviewed && !isFavorite && (!order?.review || (order.driver && !order?.user_review)) && (
                <Button
                  outline
                  color='primary'
                  className='review'
                  onClick={() => handleClickReview(order)}
                >
                  {t('REVIEW', 'Review')}
                </Button>
              )}
              {order.cart && (
                <Button color='primary' className='reorder' outline onClick={() => handleClickReorder(order)}>
                  {cartState?.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
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
          {order?.wow_points && (
            <WowPointsWrapper>
              <p className='order-wowpoints'>{isSkeleton ? <Skeleton width={80} /> : `+${order?.wow_points || 0} ${t('PTS', 'pts')}`}</p>
            </WowPointsWrapper>
          )}
        </Content>
      </Container>
      {isReviewOpen && (
        <Modal
          open={isReviewOpen}
          onClose={handleCloseReivew}
          title={order
            ? (reviewStatus?.order
              ? t('REVIEW_ORDER', 'Review order')
              : (reviewStatus?.product
                ? t('REVIEW_PRODUCT', 'Review Product')
                : t('REVIEW_DRIVER', 'Review Driver')))
            : t('LOADING', 'Loading...')}
        >
          <ReviewWrapper>
            {
              reviewStatus?.order
                ? <ReviewOrder order={order} closeReviewOrder={closeReviewOrder} setIsReviewed={setIsOrderReviewed} />
                : (reviewStatus?.product
                  ? <ReviewProduct order={order} closeReviewProduct={closeReviewProduct} setIsProductReviewed={setIsProductReviewed} />
                  : <ReviewDriver order={order} closeReviewDriver={handleCloseReivew} setIsDriverReviewed={setIsDriverReviewed} />)
            }
          </ReviewWrapper>

        </Modal>
      )}
      <Confirm
        title={t('ORDER', 'Order')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => handleOriginalReorder()}
        onCancel={() => handleOriginalReorder()}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
