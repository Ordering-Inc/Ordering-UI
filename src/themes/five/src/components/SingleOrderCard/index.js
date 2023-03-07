import React, { useState } from 'react'
import { useLanguage, useUtils, useConfig, useOrder, SingleOrderCard as SingleOrderCardController } from 'ordering-components'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { ReviewOrder } from '../ReviewOrder'
import { ReviewProduct } from '../ReviewProduct'
import { ReviewDriver } from '../ReviewDriver'

import { useTheme } from 'styled-components'
import { getGoogleMapImage, getOrderStatus } from '../../../../../utils'
import BsDot from '@meronex/icons/bs/BsDot'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { Confirm } from '../Confirm'
import { OrderEta } from '../OrderDetails/OrderEta'
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
  MultiLogosContainer
} from './styles'

import {
  BusinessInformation
} from '../OrdersOption/styles'

const SingleOrderCardUI = (props) => {
  const {
    order,
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
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)

  const handleClickCard = (e, order) => {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return

    if (customArray) {
      onRedirectPage({ page: 'checkout', params: { cartUuid: order.uuid } })
    } else {
      order?.cart_group_id
        ? onRedirectPage({ page: 'multi_orders', params: { orderId: order.cart_group_id } })
        : onRedirectPage({ page: 'order_detail', params: { orderId: order.uuid } })
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

  const hideBusinessLogo = theme?.orders?.components?.business_logo?.hidden
  const hideDate = theme?.orders?.components?.date?.hidden
  const hideBusinessName = theme?.orders?.components?.business_name?.hidden
  const hideOrderNumber = theme?.orders?.components?.order_number?.hidden
  const hideReviewOrderButton = theme?.orders?.components?.review_order_button?.hidden
  const hideReorderButton = theme?.orders?.components?.reorder_button?.hidden
  const hideFavorite = theme?.orders?.components?.favorite?.hidden
  const hideOrderStatus = theme?.orders?.components?.order_status?.hidden

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
        w={screen.width - (screen.width < 411 ? -60 : 60)}
        isBusinessesPage={isBusinessesPage}
        isCustomerMode={isCustomerMode}
        onClick={(e) => handleClickCard(e, order)}
      >
        <Content isCustomerMode={isCustomerMode}>
          {isSkeleton ? (
            <Skeleton width={60} height={60} />
          ) : (
            <>
              {!isCustomerMode && !hideBusinessLogo && (
                <>
                  {order?.business?.length > 1 ? (
                    <MultiLogosContainer>
                      {order?.business?.map((business, i) => i < 2 && (
                        <BusinessLogoWrapper
                          key={business?.id}
                          bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_400,c_limit')}
                          isMulti
                        />
                      ))}
                      {order?.business?.length > 1 && (order?.business?.length - 2) > 0 && (
                        <p>
                          + {order?.business?.length - 2}
                        </p>
                      )}
                    </MultiLogosContainer>
                  ) : (
                    <BusinessLogoWrapper bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_400,c_limit')} />
                  )}
                </>
              )}
              {isCustomerMode && !hideBusinessLogo && (
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

          <BusinessInformation activeOrders isMultiCart={order?.business?.length > 1}>
            {!hideBusinessName && (
              <>
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
                  <h2>{isSkeleton ? <Skeleton width={120} /> : order?.business?.length > 1 ? `${t('GROUP_ORDER', 'Group Order')} ${t('No', 'No')}. ${order?.cart_group_id}` : order.business?.name}</h2>
                )}
              </>
            )}
            {
              isSkeleton ? (
                <div className='orders-detail'>
                  <Skeleton width={150} />
                </div>
              ) : (
                <div className='orders-detail'>
                  {order?.id && !hideOrderNumber && (
                    <>
                      <BsDot />
                      <p name='order_number'>{order?.business?.length > 1 ? `${order?.business?.length} ${t('ORDERS', 'orders')}` : `${t('ORDER_NUM', 'Order No.')} ${order.id}`}</p>
                    </>
                  )}
                  {!hideDate && (
                    <>
                      <BsDot />
                      <p>
                        {
                          pastOrders
                            ? order?.delivery_datetime_utc
                              ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'MM/DD/YY hh:mm A' })
                              : parseDate(order?.delivery_datetime, { utc: false })
                            : <OrderEta order={order} />
                        }
                      </p>
                    </>

                  )}
                </div>
              )
            }
            {!hideOrderStatus && (
              <p className='order-status'>{isSkeleton ? <Skeleton width={80} /> : getOrderStatus(order.status)?.value}</p>
            )}
          </BusinessInformation>
          {!isCustomerMode && (
            <Price isBusinessesPage={isBusinessesPage}>
              {
                !pastOrders && (
                  <h2>
                    {isSkeleton ? <Skeleton width={50} /> : parsePrice(order?.business?.length > 1 ? order?.total : order?.summary?.total || order?.total)}
                  </h2>
                )
              }
            </Price>
          )}
          {pastOrders && !isCustomerMode && (
            <ButtonWrapper>
              {!isOrderReviewed && !isFavorite && (!order?.review || (order.driver && !order?.user_review)) && !hideReviewOrderButton && (
                <Button
                  outline
                  color='primary'
                  className='review'
                  onClick={() => handleClickReview(order)}
                >
                  {t('REVIEW', 'Review')}
                </Button>
              )}
              {order.cart && typeof order?.id === 'number' && !hideReorderButton && (
                <Button color='primary' className='reorder' outline onClick={() => handleClickReorder(order)}>
                  {cartState?.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
                </Button>
              )}
            </ButtonWrapper>
          )}
          {!order?.business?.length && !hideFavorite && (
            <FavoriteWrapper onClick={() => handleChangeFavorite(order)} className='favorite'>
              {isSkeleton ? <Skeleton width={20} height={20} /> : (
                <>
                  {order?.favorite ? <Like /> : <DisLike />}
                </>
              )}
            </FavoriteWrapper>
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
