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
  FavoriteWrapper
} from '../styles'

const SingleOrderCardUI = (props) => {
  const {
    order,
    getOrderStatus,
    handleReorder,
    reorderLoading,
    orderID,
    handleFavoriteOrder,
    setOrderSelected
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const handleChangeFavorite = (order) => {
    handleFavoriteOrder && handleFavoriteOrder(!order?.favorite)
  }

  return (
    <SingleCard key={order.id} id='order-card'>
      <OrderPastContent>
        {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
          <PastLogo>
            <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
          </PastLogo>
        )}
        <BusinessInformation>
          <WrapperBusinessTitle>
            <h2>{order.business?.name}</h2>
            <FavoriteWrapper onClick={() => handleChangeFavorite(order)} className='favorite'>
              {order?.favorite ? <Like /> : <DisLike />}
            </FavoriteWrapper>
          </WrapperBusinessTitle>
          <OrderInfo>
            {order?.id && (
              <>
                <p name='order_number'>{t('ORDER_NUM', 'Order No.')} {order.id}</p>
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
