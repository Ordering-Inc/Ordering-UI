import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import { Option, OrderTypeWrapper } from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    handleChangeOrderType,
    typeSelected
  } = props

  const [, t] = useLanguage()

  const orderTypes = [
    { value: 1, content: <Option><MdcTruckDeliveryOutline />{t('DELIVERY', 'Delivery')}</Option>, showOnSelected: <Option><MdcTruckDeliveryOutline /><p>{t('DELIVERY', 'Delivery')}</p></Option> },
    { value: 2, content: <Option><FaTruckPickup />{t('PICKUP', 'Pickup')}</Option>, showOnSelected: <Option><FaTruckPickup /><p>{t('PICKUP', 'Pickup')}</p></Option> },
    { value: 3, content: <Option><AiFillShop />{t('EAT_IN', 'Eat in')}</Option>, showOnSelected: <Option><AiFillShop /><p>{t('EAT_IN', 'Eat in')}</p></Option> },
    { value: 4, content: <Option><GiFoodTruck />{t('CURBSIDE', 'Curbside')}</Option>, showOnSelected: <Option><GiFoodTruck /><p>{t('CURBSIDE', 'Curbside')}</p></Option> },
    { value: 5, content: <Option><FaCarSide />{t('DRIVE_THRU', 'Drive thru')}</Option>, showOnSelected: <Option><FaCarSide /><p>{t('DRIVE_THRU', 'Drive thru')}</p></Option> }
  ]

  return (
    <OrderTypeWrapper>
      <Select
        options={orderTypes}
        defaultValue={typeSelected}
        onChange={(orderType) => handleChangeOrderType(orderType)}
      />
    </OrderTypeWrapper>
  )
}

export const OrderTypeSelectorHeader = (props) => {
  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorHeaderUI
  }

  return <OrderTypeControl {...orderTypeProps} />
}
