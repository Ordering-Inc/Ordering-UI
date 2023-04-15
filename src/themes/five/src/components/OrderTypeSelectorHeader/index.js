import React, { useRef } from 'react'
import { useOrder, useLanguage, useConfig } from 'ordering-components'
import {
  HeaderItem
} from './styles'

export const OrderTypeSelectorHeader = (props) => {
  const { orderTypeList, isFullClick } = props

  const [{ configs }] = useConfig()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const referenceElement = useRef()

  return (
    <div
      className='order-type'
      style={{
        ...props.containerStyle,
        ...(isFullClick && { width: '100%', padding: 0 })
      }}
      onClick={isFullClick && props.onClick}
    >
      <HeaderItem
        ref={referenceElement}
        onClick={configs?.max_days_preorder?.value === -1 || configs?.max_days_preorder?.value === 0 || isFullClick
          ? null
          : props.onClick}
        isHome={props.isHome}
      >
        {(orderTypeList && orderTypeList[orderStatus?.options.type - 1]) || t('DELIVERY', 'Delivery')}
      </HeaderItem>
    </div>
  )
}
