import React, { useEffect, useState } from 'react'
import { useLanguage, OrderTypeControl, useOrder } from 'ordering-components'
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
} from '../../styles'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    title,
    handleChangeOrderType,
    orderTypes,
    onClose,
    configTypes,
    typeSelected
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const [isLoading, setIsLoading] = useState(false)

  const handleClickOrderType = (orderType) => {
    setIsLoading(true)
    handleChangeOrderType && handleChangeOrderType(orderType)
  }

  useEffect(() => {
    if (orderStatus?.loading) return
    if (typeSelected === orderStatus?.options?.type && isLoading) {
      onClose && onClose()
    }
  }, [orderStatus, isLoading])

  return (
    <div className='order-type' style={{ overflow: 'hidden' }}>
      <OrderTypeSelectorContainer>
        <OrderTypeListTitle>
          {title ?? t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')}
        </OrderTypeListTitle>
        {
          orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value)) : orderTypes).map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={item?.image}
              onClick={() => handleClickOrderType(item.value)}
              active={typeSelected === item?.value}
            >
              <OrderTypeTitle>{item.text}</OrderTypeTitle>
              <OrderTypeDescription>{item.description}</OrderTypeDescription>
              <OrderStartWrapper>
                <span>{t('START_MY_ORDER', 'start my order')}</span>
                <BsArrowRight />
              </OrderStartWrapper>
              <OrderTypeOverlay />
            </OrderTypeListItemContainer>
          ))
        }
      </OrderTypeSelectorContainer>
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
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
