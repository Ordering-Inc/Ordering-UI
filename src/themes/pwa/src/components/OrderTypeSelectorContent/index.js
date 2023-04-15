import React from 'react'
import { useLanguage, OrderTypeControl, useOrder } from 'ordering-components'
import { useTheme } from 'styled-components'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import {
  OrderTypeSelectorContainer,
  OrderTypeListItemContainer,
  OrderTypeTitle,
  OrderTypeDescription,
  OrderStartWrapper,
  OrderTypeListTitle
} from './styles'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    handleChangeOrderType,
    orderTypes,
    onClose
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()

  const handleClickOrderType = (orderType) => {
    onClose && onClose()
    handleChangeOrderType && handleChangeOrderType(orderType)
  }

  return (
    <div className='order-type' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrderTypeSelectorContainer>
        <OrderTypeListTitle>{t('SELECT_YOUR_DELIVERY_TYPE', 'Select your delivery type')}</OrderTypeListTitle>
        {
          orderTypes && orderTypes.map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={item?.image}
              onClick={() => handleClickOrderType(item.value)}
              active={orderStatus?.options?.type === item?.value}
            >
              <OrderTypeTitle>{item.text}</OrderTypeTitle>
              <OrderTypeDescription>{item.description}</OrderTypeDescription>
              <OrderStartWrapper>
                <span>{t('START_MY_ORDER', 'start my order')}</span>
                <BsArrowRight />
              </OrderStartWrapper>
            </OrderTypeListItemContainer>
          ))
        }
      </OrderTypeSelectorContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

export const OrderTypeSelectorContent = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorContentUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.delivery
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.pickUp
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.eatIn
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.curbside
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.driveThru
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
