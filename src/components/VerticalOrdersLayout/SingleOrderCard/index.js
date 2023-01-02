import React from 'react'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import BsDot from '@meronex/icons/bs/BsDot'
import { BusinessInformation } from '../../OrdersOption/styles'
import { useLanguage, useUtils, SingleOrderCard as SingleOrderCardController } from 'ordering-components'
import { Button } from '../../../styles/Buttons'
import { useTheme } from 'styled-components'

import {
  SingleCard,
  OrderPastContent,
  PastLogo,
  WrapperBusinessTitle,
  Reorder,
  OrderInfo,
  FavoriteWrapper,
  MultiLogosContainer
} from '../styles'

const SingleOrderCardUI = (props) => {
  const {
    order,
    getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID,
    handleFavoriteOrder,
    setOrderSelected,
    onRedirectPage,
    customArray
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const handleChangeFavorite = (order) => {
    handleFavoriteOrder && handleFavoriteOrder(!order?.favorite)
  }

  const handleClickCard = (e, order) => {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return
    onRedirectPage(customArray ?
      { page: 'checkout', params: { cartUuid: order.uuid } } :
      order?.cart_group_id ?
        { page: 'multi_orders', params: { orderId: order.cart_group_id } } :
        { page: 'order_detail', params: { orderId: order.uuid } }
    )
  }

  return (
    <SingleCard key={order.id} id='order-card' onClick={(e) => handleClickCard(e, order)}>
      <OrderPastContent>
        {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
          <>
            {order?.business?.length > 1 ? (
              <MultiLogosContainer>
                {order?.business?.map((business, i) => (
                  <React.Fragment key={business?.id}>
                    {i > 1 ? (
                      <p>
                        + {order?.business?.length - 2}
                      </p>
                    ) : (
                      <PastLogo isMulti>
                        <img src={business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
                      </PastLogo>
                    )}
                  </React.Fragment>
                ))}
              </MultiLogosContainer>
            ) : (
              <PastLogo>
                <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
              </PastLogo>
            )}
          </>
        )}
        <BusinessInformation>
          <WrapperBusinessTitle>
            <h2>{order?.business?.length > 1 ? `${t('GROUP_ORDER', 'Group Order')} ${t('No', 'No')}. ${order?.cart_group_id}` : order.business?.name}</h2>
            {!order?.business?.length && (
              <FavoriteWrapper onClick={() => handleChangeFavorite(order)} className='favorite'>
                {order?.favorite ? <Like /> : <DisLike />}
              </FavoriteWrapper>
            )}
          </WrapperBusinessTitle>
          <OrderInfo>
            {order?.id && (
              <>
                <p name='order_number'>{order?.business?.length > 1 ? `${order?.business?.length} ${t('ORDERS', 'orders')}` : `${t('ORDER_NUM', 'Order No.')} ${order.id}`}</p>
                <BsDot className='dot' />
              </>
            )}
            <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
          </OrderInfo>
          <p className='status'>{getOrderStatus(order.status)?.value}</p>
        </BusinessInformation>
      </OrderPastContent>
      <Reorder>
        <Button
          outline
          disabled={!!order?.review}
          color='primary'
          className='review'
          onClick={() => setOrderSelected(order)}
        >
          {!!order?.review ? t('REVIEWED', 'Reviewed') : t('REVIEW', 'Review')}
        </Button>
        <Button color='primary' className='reorder' outline onClick={() => handleReorder(order.id)}>
          {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
        </Button>
      </Reorder>
    </SingleCard>
  )
}

export const SingleOrderCard = (props) => {
  const singleOrderCardProps = {
    ...props,
    UIComponent: SingleOrderCardUI
  }
  return <SingleOrderCardController {...singleOrderCardProps} />
}
