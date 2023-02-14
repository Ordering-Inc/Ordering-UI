import React from 'react'
import { useLanguage, useOrder, OrderTypeControl } from 'ordering-components'
import { useTheme } from 'styled-components'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import {
  OrderTypeSelectorContainer,
  OrderTypeListItemContainer,
  OrderTypeTitle,
  OrderTypeDescription,
  OrderStartWrapper,
  OrderTypeListTitle,
  OrderTypeOverlay
} from './styles'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    handleChangeOrderType,
    orderTypes,
    onClose,
    configTypes
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const theme = useTheme()
  const handleClickOrderType = (orderType) => {
    onClose && onClose()
    handleChangeOrderType && handleChangeOrderType(orderType)
  }

  const orderTypeImage = (type) => theme?.order_types?.components?.[type]?.components?.image
  const orderTypeTitle = (type) => theme?.order_types?.components?.[type]?.components?.title
  const orderTypeDescription = (type) => theme?.order_types?.components?.[type]?.components?.description
  const orderTypeCallAction = (type) => theme?.order_types?.components?.[type]?.components?.call_to_action

  return (
    <div className='order-type' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrderTypeSelectorContainer>
        <OrderTypeListTitle>{t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')}</OrderTypeListTitle>
        {
          orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value)) : orderTypes).map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={orderTypeImage(item?.text?.replace(' ', '_')?.toLowerCase()) || item?.image}
              onClick={() => handleClickOrderType(item.value)}
              active={orderStatus?.options?.type === item?.value}
            >
              <OrderTypeTitle>{orderTypeTitle(item?.text?.replace(' ', '_')?.toLowerCase()) || item.text}</OrderTypeTitle>
              <OrderTypeDescription>{orderTypeDescription(item?.text?.replace(' ', '_')?.toLowerCase()) || item.description}</OrderTypeDescription>
              <OrderStartWrapper>
                <span>{orderTypeCallAction(item?.text?.replace(' ', '_')?.toLowerCase()) || t('START_MY_ORDER', 'start my order')}</span>
                <BsArrowRight />
              </OrderStartWrapper>
              <OrderTypeOverlay />
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
        description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description'),
        image: theme.images?.deliveryTypes?.delivery
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
        image: theme.images?.deliveryTypes?.pickUp
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
        image: theme.images?.deliveryTypes?.eatIn
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
        image: theme.images?.deliveryTypes?.curbside
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
        image: theme.images?.deliveryTypes?.driveThru
      },
      {
        value: 7,
        text: t('CATERING_DELIVERY', 'Catering Delivery'),
        description: t('ORDERTYPE_DESCRIPTION_CATERING_DELIVERY', 'Catering Delivery description'),
        image: theme.images?.deliveryTypes?.cateringDelivery
      },
      {
        value: 8,
        text: t('CATERING_PICKUP', 'Catering Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_CATERING_PICKUP', 'Catering Pickup description'),
        image: theme.images?.deliveryTypes?.cateringPickup
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
