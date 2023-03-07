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
    const params = {
      [customArray ? 'cartUuid' : 'orderId']: customArray ? order.uuid : order?.cart_group_id ?? order.uuid
    }
    const page = customArray ? 'checkout' : order?.cart_group_id ? 'multi_orders' : 'order_detail'
    onRedirectPage({ page, params })
  }

  const hideBusinessLogo = theme?.orders?.components?.business_logo?.hidden
  const hideDate = theme?.orders?.components?.date?.hidden
  const hideBusinessName = theme?.orders?.components?.business_name?.hidden
  const hideOrderNumber = theme?.orders?.components?.order_number?.hidden
  const hideReviewOrderButton = theme?.orders?.components?.review_order_button?.hidden
  const hideReorderButton = theme?.orders?.components?.reorder_button?.hidden
  const hideOrderStatus = theme?.orders?.components?.order_status?.hidden

  return (
    <SingleCard key={order.id} id='order-card' onClick={(e) => handleClickCard(e, order)}>
      <OrderPastContent>
        {!hideBusinessLogo && (order.business?.logo || theme.images?.dummies?.businessLogo) && (
          <>
            {order?.business?.length > 1 ? (
              <MultiLogosContainer>
                {order?.business?.map((business, i) => i < 2 && (
                  <PastLogo
                    key={business?.id}
                    isMulti
                  >
                    <img src={business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
                  </PastLogo>
                ))}
                {order?.business?.length > 1 && (order?.business?.length - 2) > 0 && (
                  <p>
                    + {order?.business?.length - 2}
                  </p>
                )}
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
            {!hideBusinessName && (
              <h2>{order?.business?.length > 1 ? `${t('GROUP_ORDER', 'Group Order')} ${t('No', 'No')}. ${order?.cart_group_id}` : order.business?.name}</h2>
            )}
            {!order?.business?.length && (
              <FavoriteWrapper onClick={() => handleChangeFavorite(order)} className='favorite'>
                {order?.favorite ? <Like /> : <DisLike />}
              </FavoriteWrapper>
            )}
          </WrapperBusinessTitle>
          <OrderInfo>
            {!hideOrderNumber && order?.id && (
              <>
                <p name='order_number'>{order?.business?.length > 1 ? `${order?.business?.length} ${t('ORDERS', 'orders')}` : `${t('ORDER_NUM', 'Order No.')} ${order.id}`}</p>
                <BsDot className='dot' />
              </>
            )}
            {!hideDate && (
              <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
            )}
          </OrderInfo>
          {!hideOrderStatus && (
            <p className='status'>{getOrderStatus(order.status)?.value}</p>
          )}
        </BusinessInformation>
      </OrderPastContent>
      <Reorder>
        {!hideReviewOrderButton && (
          <Button
            outline
            disabled={!!order?.review}
            color='primary'
            className='review'
            onClick={() => setOrderSelected(order)}
          >
            {!!order?.review ? t('REVIEWED', 'Reviewed') : t('REVIEW', 'Review')}
          </Button>
        )}
        {!hideReorderButton && order?.id === 'number' && (
          <Button color='primary' className='reorder' outline onClick={() => handleReorder(order.id)}>
            {orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}
          </Button>
        )}
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
