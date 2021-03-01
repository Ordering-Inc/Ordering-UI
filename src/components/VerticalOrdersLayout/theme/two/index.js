import React from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import BsDot from '@meronex/icons/bs/BsDot'
import { Button } from '../../../../styles/Buttons'
import { ProductItemAccordion } from '../../../ProductItemAccordion'

import {
  SingleCard,
  OrderPastContent,
  // PastLogo,
  WrapperBusinessTitle,
  Reorder,
  WrappButton,
  WrapProducts
} from './styles'

import { OrdersContainer, BusinessInformation } from '../../../OrdersOption/styles'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    onOrderClick,
    loadMoreOrders,
    // getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()

  return (
    <>
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card'>
            <OrderPastContent>
              <BusinessInformation>
                <WrapperBusinessTitle>
                  <h2>{order.business?.name}</h2>
                </WrapperBusinessTitle>
                <p>
                  <span>{t('DELIVERD', 'Delivered')}: </span>
                  <span>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</span>
                  <BsDot />
                  <span>{parsePrice(order?.total)}</span>
                </p>
                <p>
                  {t('PRODUCTS_SELECTED', 'Products selected')}
                </p>
                <WrapProducts>
                  {order.products.map(product => (
                    <ProductItemAccordion
                      key={product.id}
                      product={product}
                    />
                  ))}
                </WrapProducts>
              </BusinessInformation>
            </OrderPastContent>
            <Reorder>
              <Button
                color='primary'
                onClick={() => handleReorder(order.id)}
                disabled={reorderLoading}
              >
                {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
              </Button>
              <Button
                color='secondary'
                onClick={() => onOrderClick({ page: 'order_detail', params: { orderId: order.uuid } })}
              >
                {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}
              </Button>
            </Reorder>
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
    </>
  )
}
