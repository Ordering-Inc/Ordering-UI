import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    orderState,
    handleChangeOrderType
  } = props

  const [, t] = useLanguage()

  const orderTypes = [
    { value: 1, content: t('DELIVERY', 'Delivery') },
    { value: 2, content: t('PICKUP', 'Pickup') },
    { value: 3, content: t('EAT_IN', 'Eat in') },
    { value: 4, content: t('CURBSIDE', 'Curbside') },
    { value: 5, content: t('DRIVE_THRU', 'Drive thru') }
  ]
  return (
    <Select options={orderTypes} defaultValue={orderState.options?.type || 1} onChange={(orderType) => handleChangeOrderType(orderType)} />
  )
}

export const OrderTypeSelectorHeader = (props) => {
  return <OrderTypeControl {...props} UIComponent={OrderTypeSelectorHeaderUI} />
}
