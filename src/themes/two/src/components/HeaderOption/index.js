import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import FaShoppingCart from '@meronex/icons/fa/FaShoppingCart'

import {
  Container
} from './styles'

export const HeaderOption = (props) => {
  const {
    variant,
    addressState,
    momentState,
    totalCarts
  } = props

  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  return (
    <Container
      variant={variant}
      onClick={() => props.onClick(variant)}
      isHome={props.isHome}
    >
      {variant === 'cart' && (
        <span>
          <FaShoppingCart id='icon' />
          {totalCarts > 0 && <p>{totalCarts}</p>}
        </span>
      )}
      {variant === 'moment' && (
        <>
          {momentState
            ? parseDate(momentState, { outputFormat: 'MM/DD hh:mma' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </>
      )}
      {variant === 'address' && (
        <>
          {addressState || t('SELECT_AN_ADDRESS', 'Select an address')}
        </>
      )}
    </Container>
  )
}
