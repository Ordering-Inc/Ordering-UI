import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import {
  SingleCard,
  PastLogo,
  WrapperBusinessTitle,
  WrappButton,
  OrderDate,
  OrderState,
  OrderPrice,
  Floting
} from './styles'

import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'
import { Modal } from '../Modal'
import { ReviewOrder } from '../ReviewOrder'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onRedirectPage,
    loadMoreOrders,
    getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID,
    activeOrders
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()
  const [openReview, setOpenReview] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState()
  const [reviewedIds, setReviewedIds] = useState([])

  const handleOpenReview = (order) => {
    setSelectedOrder(order)
    setOpenReview(true)
  }

  const handleIsReviewed = (id) => {
    setReviewedIds([...reviewedIds, id])
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>)
      )}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />)
      )}
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card'>
            {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
              <PastLogo>
                <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
              </PastLogo>
            )}
            <BusinessInformation onClick={() => onRedirectPage({ page: 'order_detail', params: { orderId: order.uuid } })}>
              <WrapperBusinessTitle>
                <h2>{order.business?.name}</h2>
              </WrapperBusinessTitle>
              <OrderDate>
                <p>
                  {t('ORDER_No', 'Order No.')}{order?.id}
                  {' ◦ '}
                  {order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}
                </p>
              </OrderDate>
              <OrderState>
                {getOrderStatus(order.status)?.value}
              </OrderState>
            </BusinessInformation>
            <Floting>
              {activeOrders ? (
                <OrderPrice>
                  {parsePrice(order?.summary?.total || order?.total)}
                </OrderPrice>
              ) : (
                <>
                  <Button
                    onClick={() => handleReorder(order.id)}
                    disabled={reorderLoading}
                  >
                    {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
                  </Button>
                  {(!order?.review && !reviewedIds.includes(order.id)) && (
                    <Button
                      className='review'
                      onClick={() => handleOpenReview(order)}
                    >
                      {t('REVIEW', 'Review')}
                    </Button>
                  )}
                </>
              )}
            </Floting>
          </SingleCard>
        ))}
      </OrdersContainer>
      {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
        <WrappButton>
          <Button
            outline
            color='primary'
            bgtransparent
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </Button>
        </WrappButton>
      )}

      {openReview && (
        <Modal
          open={openReview}
          onClose={() => setOpenReview(false)}
        >
          <ReviewOrder order={selectedOrder} closeReviewOrder={() => setOpenReview(false)} handleIsReviewed={handleIsReviewed} />
        </Modal>
      )}

      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />)
      )}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>)
      )}
    </>
  )
}
