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
    { value: 1, content: t('DELIVERY', 'Delivery'), icon: 'delivery' },
    { value: 2, content: t('PICKUP', 'Pickup'), icon: 'pickup' },
    { value: 3, content: t('EAT_IN', 'Eat in'), icon: 'eatin' },
    { value: 4, content: t('CURBSIDE', 'Curbside'), icon: 'curbside' },
    { value: 5, content: t('DRIVE_THRU', 'Drive thru'), icon: 'drivethru' }
  ]
  return (
    <Select
      withIcons
      options={orderTypes}
      defaultValue={orderState.options?.type || 1}
      onChange={(orderType) => handleChangeOrderType(orderType)}
    />
  )
}

export const OrderTypeSelectorHeader = (props) => {
  return <OrderTypeControl {...props} UIComponent={OrderTypeSelectorHeaderUI} />
}
