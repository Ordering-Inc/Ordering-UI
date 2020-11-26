import React from 'react'
import { OrderTypeControl, useLanguage, useSession } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import { Option } from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    handleChangeOrderType,
    typeSelected
  } = props

  const [, t] = useLanguage()

  const orderTypes = [
    { value: 1, content: <Option><MdcTruckDeliveryOutline />{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option><FaTruckPickup />{t('PICKUP', 'Pickup')}</Option> },
    { value: 3, content: <Option><AiFillShop />{t('EAT_IN', 'Eat in')}</Option> },
    { value: 4, content: <Option><GiFoodTruck />{t('CURBSIDE', 'Curbside')}</Option> },
    { value: 5, content: <Option><FaCarSide />{t('DRIVE_THRU', 'Drive thru')}</Option> }
  ]

  return (
    <Select
      options={orderTypes}
      defaultValue={typeSelected}
      onChange={(orderType) => handleChangeOrderType(orderType)}
    />
  )
}

export const OrderTypeSelectorHeader = (props) => {
  const [{ auth }] = useSession()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorHeaderUI,
    defaultValue: !auth
      ? JSON.parse(window.localStorage.getItem('options'))?.type
      : null
  }

  return <OrderTypeControl {...orderTypeProps} />
}
