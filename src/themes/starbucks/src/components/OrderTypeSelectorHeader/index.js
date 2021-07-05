import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import {
  Option,
  OrderTypeWrapper,
  SelectedOption,
  ContentOption,
  OrderTypeBoxGroup,
  OrderItem,
  OrderItemWraper,
  ItemContent,
  OrderType,
  OrderDescription
} from './styles'
const OrderTypeSelectorHeaderUI = (props) => {
  const {
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes,
    orderTypeStyle
  } = props
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]

  return (
    <OrderTypeWrapper>
      {
        orderTypeStyle
          ? (
            <OrderTypeBoxGroup>
              {
                orderTypes && orderTypes.map((orderType) => {
                  return (
                    <OrderItem key={orderType.value}>
                      <OrderItemWraper>
                        {orderType.itemcontent}
                        {orderType.itemdescription}
                      </OrderItemWraper>
                    </OrderItem>
                  )
                })
              }
            </OrderTypeBoxGroup>)
          : (
            <Select
              options={
                configTypes
                  ? orderTypes.filter(type => configTypes?.includes(type.value))
                  : orderTypes
              }
              defaultValue={defaultType || defaultValue || typeSelected}
              onChange={(orderType) => handleChangeOrderType(orderType)}
            />)
      }
    </OrderTypeWrapper>
  )
}
export const OrderTypeSelectorHeader = (props) => {
  const [, t] = useLanguage()
  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: <Option><MdcTruckDeliveryOutline /><ContentOption>{t('DELIVERY', 'Delivery')}</ContentOption></Option>,
        showOnSelected: <Option><MdcTruckDeliveryOutline /><SelectedOption>{t('DELIVERY', 'Delivery')}</SelectedOption></Option>,
        itemcontent: <OrderType><MdcTruckDeliveryOutline /><ItemContent>{t('DELIVERY', 'Delivery')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.')}</OrderDescription>
      },
      {
        value: 2,
        content: <Option><FaTruckPickup /><ContentOption>{t('PICKUP', 'Pickup')}</ContentOption></Option>,
        showOnSelected: <Option><FaTruckPickup /><SelectedOption>{t('PICKUP', 'Pickup')}</SelectedOption></Option>,
        itemcontent: <OrderType><FaTruckPickup /><ItemContent>{t('PICKUP', 'Pickup')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.')}</OrderDescription>
      },
      {
        value: 3,
        content: <Option><AiFillShop /><ContentOption>{t('EAT_IN', 'Eat in')}</ContentOption></Option>,
        showOnSelected: <Option><AiFillShop /><SelectedOption>{t('EAT_IN', 'Eat in')}</SelectedOption></Option>,
        itemcontent: <OrderType><AiFillShop /><ItemContent>{t('EAT_IN', 'Eat in')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.')}</OrderDescription>
      },
      {
        value: 4,
        content: <Option><GiFoodTruck /><ContentOption>{t('CURBSIDE', 'Curbside')}</ContentOption></Option>,
        showOnSelected: <Option><GiFoodTruck /><SelectedOption>{t('CURBSIDE', 'Curbside')}</SelectedOption></Option>,
        itemcontent: <OrderType><FaCarSide /><ItemContent>{t('DRIVE_THRU', 'Drive thru')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.')}</OrderDescription>
      },
      {
        value: 5,
        content: <Option><FaCarSide /><ContentOption>{t('DRIVE_THRU', 'Drive thru')}</ContentOption></Option>,
        showOnSelected: <Option><FaCarSide /><SelectedOption>{t('DRIVE_THRU', 'Drive thru')}</SelectedOption></Option>,
        itemcontent: <OrderType><GiFoodTruck /><ItemContent>{t('CURBSIDE', 'Curbside')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.')}</OrderDescription>
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}
