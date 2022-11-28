import React from 'react'
import { useUtils, useLanguage, useConfig, useOrder, useOrderingTheme } from 'ordering-components'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'

import {
  Container,
  DeliveryType
} from './styles'

export const HeaderOption = (props) => {
  const {
    variant,
    addressState,
    momentState,
    totalCarts,
    orderTypeList
  } = props

  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
  const [{ theme: orderingTheme }] = useOrderingTheme()
  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const isChew = orderingTheme?.theme?.header?.components?.layout?.type === 'Chew'

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {
        props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))
      }
      <Container
        variant={variant}
        isChew={isChew}
        onClick={() => props.onClick(variant)}
        isHome={props.isHome}
      >
        {variant === 'cart' && (
          <span>
            <AiOutlineShoppingCart id='icon' />
            {totalCarts > 0 && <span>{totalCarts}</span>}
          </span>
        )}
        {variant === 'address' && (
          <>
            <FaMapMarkerAlt id='icon' />
            {addressState || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
          </>
        )}
        {variant === 'moment' && (
          <>
            {momentState
              ? parseDate(momentState, { outputFormat: configs?.dates_moment_format?.value })
              : t('ASAP_ABBREVIATION', 'ASAP')}
          </>
        )}
        {
          variant === 'delivery' && (
            <DeliveryType isChew={isChew}>
              {(orderTypeList && orderTypeList[orderStatus?.options.type - 1]) || t('DELIVERY', 'Delivery')}
            </DeliveryType>
          )
        }
      </Container>
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}
