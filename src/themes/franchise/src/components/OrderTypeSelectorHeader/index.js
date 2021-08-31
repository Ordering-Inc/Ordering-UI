import React, { useRef } from 'react'
import { useOrder, useLanguage, useConfig } from 'ordering-components'
import {
  HeaderItem
} from './styles'

export const OrderTypeSelectorHeader = (props) => {
  const {
    orderTypeList
  } = props

  const [{ configs }] = useConfig()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const referenceElement = useRef()

  return (
    <div className='order-type'>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderItem
        ref={referenceElement}
        onClick={configs?.max_days_preorder?.value === -1 || configs?.max_days_preorder?.value === 0 ? null : props.onClick}
        isHome={props.isHome}
      >
        {(orderTypeList && orderTypeList[orderStatus?.options.type - 1]) || t('DELIVERY', 'Delivery')}
      </HeaderItem>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}
