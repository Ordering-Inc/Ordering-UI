import React from 'react'
import { useLanguage } from 'ordering-components'
import IosBasket from '@meronex/icons/ios/IosBasket'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'

import {
  Container
} from './styles'

export const HeaderOption = (props) => {
  const {
    variant,
    addressState,
    totalCarts
  } = props

  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <Container
        variant={variant}
        onClick={() => props.onClick(variant)}
        isHome={props.isHome}
      >
        {variant === 'cart' && (
          <span>
            <IosBasket id='icon' />
            {totalCarts > 0 && <p>{totalCarts}</p>}
          </span>
        )}
        {variant === 'address' && (
          <>
            <FaMapMarkerAlt id='icon' />
            {addressState || t('SELECT_AN_ADDRESS', 'Select an address')}
          </>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}
