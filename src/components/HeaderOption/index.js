import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import IosBasket from '@meronex/icons/ios/IosBasket'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import FaRegClock from '@meronex/icons/fa/FaRegClock'

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
    >
      {variant === 'cart' && (
        <span>
          <IosBasket />
          {totalCarts > 0 && <p>{totalCarts}</p>}
        </span>
      )}
      {variant === 'address' && (
        <>
          <FaMapMarkerAlt />
          {addressState || t('SELECT_AN_ADDRESS', 'Select an address')}
        </>
      )}
      {variant === 'moment' && (
        <>
          <FaRegClock />
          {momentState
            ? parseDate(momentState, { outputFormat: 'MM/DD hh:mma' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </>
      )}
    </Container>
  )
}
