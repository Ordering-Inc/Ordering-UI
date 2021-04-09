import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../../../../../components/Modal'
import { ReviewOrder } from '../ReviewOrder'
import { Ticket } from '../Ticket'
import {
  OrdersContainer,
  SingleCard,
  OrderPastContent,
  BusinessInformation,
  WrapperBusinessTitle,
  Reorder,
  WrappButton,
  BusinessHeader,
  ProductsContainer,
  ViewOrderButton,
  ReceiptWrapper
} from './styles'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onRedirectPage,
    loadMoreOrders,
    getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID
  } = props

  const [, t] = useLanguage()
  const [{ parseDate, optimizeImage }] = useUtils()
  const [isReviewed, setIsReviewed] = useState(false)
  const [orderSelected, setOrderSelected] = useState(null)
  const [openModal, setOpenModal] = useState({})
  const handleOpenReview = (order) => {
    setOrderSelected(order)
    handleOpenModal('review')
  }

  const handleOpenTicket = (order) => {
    setOrderSelected(order)
    handleOpenModal('ticket')
  }

  const handleCloseModal = (type) => {
    setOpenModal({
      ...openModal,
      [type]: false
    })
    setOrderSelected(null)
  }

  const handleOpenModal = (type) => {
    setOpenModal({
      ...openModal,
      [type]: true
    })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card'>
            <OrderPastContent>
              {order.business?.header && (
                <BusinessHeader bgimage={optimizeImage(order.business?.header, 'h_400,c_limit')} isClosed={!order.business?.open}>
                  {!order.business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
                </BusinessHeader>
              )}
              <BusinessInformation>
                <WrapperBusinessTitle>
                  <h2>{order.business?.name}</h2>
                </WrapperBusinessTitle>
                <ReceiptWrapper>
                  <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                  <a
                    onClick={() => handleOpenTicket(order)}
                  >
                    {t('SEE_RECEIPT', 'See Receipt')}
                  </a>
                </ReceiptWrapper>
                <ProductsContainer>
                  {order.products.map(product => (
                    <ProductItemAccordion
                      isOrdersView
                      disableContentView
                      key={product.id}
                      product={product}
                    />
                  ))}
                </ProductsContainer>
                <ViewOrderButton
                  name='view_order'
                  onClick={() => onRedirectPage({ page: 'order_detail', params: { orderId: order.uuid } })}
                >
                  {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}
                </ViewOrderButton>
              </BusinessInformation>
            </OrderPastContent>
            <Reorder>
              <p>{getOrderStatus(order.status)?.value}</p>
              {(
                parseInt(order?.status) === 1 ||
                parseInt(order?.status) === 2 ||
                parseInt(order?.status) === 5 ||
                parseInt(order?.status) === 6 ||
                parseInt(order?.status) === 10 ||
                parseInt(order?.status) === 11 ||
                parseInt(order?.status) === 12
              ) && !order.review && !isReviewed && (
                <Button
                  rectangle
                  color='secundary'
                  onClick={() => handleOpenReview(order)}
                >
                  {t('REVIEW_ORDER', 'Review your Order')}
                </Button>
              )}
              <Button
                rectangle
                color='primary'
                onClick={() => handleReorder(order.id)}
                disabled={reorderLoading}
              >
                {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
              </Button>
            </Reorder>
          </SingleCard>
        ))}
      </OrdersContainer>
      {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
        <WrappButton>
          <Button
            outline
            rectangle
            color='primary'
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </Button>
        </WrappButton>
      )}
      {openModal.review && (
        <Modal
          open={openModal.review}
          onClose={() => handleCloseModal('review')}
          title={orderSelected ? `${t('WRITE_A_REVIEW', 'Write a Review')} #${orderSelected?.id}` : t('LOADING', 'Loading...')}
        >
          <ReviewOrder order={orderSelected} closeReviewOrder={() => handleCloseModal('review')} setIsReviewed={setIsReviewed} />
        </Modal>
      )}
      {openModal.ticket && (
        <Modal
          padding='0'
          open={openModal.ticket}
          onClose={() => handleCloseModal('ticket')}
        >
          <Ticket
            order={orderSelected}
          />
        </Modal>
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
