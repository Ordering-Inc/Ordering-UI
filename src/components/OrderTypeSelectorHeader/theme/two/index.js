import React from 'react'
import { useLocation } from 'react-router-dom'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'

import { OrderTypeControl, useLanguage } from 'ordering-components'
import {
  Option,
  OrderTypeWrapper
} from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    toggle,
    radioStyle,
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes
  } = props
  const location = useLocation()
  const isDeliveryAndPickup = location.pathname === '/search' || location.pathname === '/pickup'
  const options = orderTypes.filter(type => configTypes?.includes(type.value))

  return (
    typeSelected !== undefined && (
      <OrderTypeWrapper
        radioStyle={radioStyle}
        toggle={toggle}
        isDeliveryAndPickup={isDeliveryAndPickup}
      >
        {options.map(type => (
          <Option
            key={type.value}
            selected={type.value === defaultValue || type.value === typeSelected}
            onClick={() => handleChangeOrderType(type.value)}
            toggle={toggle}
            radioStyle={radioStyle}
          >
            {radioStyle && (
              <>
                {type.value === typeSelected ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
              </>
            )}
            {type.content}
          </Option>
        ))}
      </OrderTypeWrapper>
    )
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
        content: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        content: t('PICKUP', 'Pickup')
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
