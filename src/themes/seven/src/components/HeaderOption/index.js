import React from 'react'
import { useUtils, useLanguage, useConfig } from 'ordering-components'
import BiCart from '@meronex/icons/bi/BiCart'
import FaRegClock from '@meronex/icons/fa/FaRegClock'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'

import {
  Container,
  AddressInput,
  DeliverytimeInput
} from './styles'

export const HeaderOption = (props) => {
  const {
    variant,
    addressState,
    momentState,
    totalCarts
  } = props

  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container
        variant={variant}
        onClick={() => props.onClick(variant)}
        isHome={props.isHome}
      >
        {variant === 'cart' && (
          <span>
            <BiCart id='icon' />
            {totalCarts > 0 && <p>{totalCarts}</p>}
          </span>
        )}
        {variant === 'address' && (
          <AddressInput>
            <HiOutlineLocationMarker id='icon' />
            <span>
              {addressState || t('SELECT_AN_ADDRESS', 'Select an address')}
            </span>
          </AddressInput>
        )}
        {variant === 'moment' && (
          <DeliverytimeInput>
            <FaRegClock id='icon' />
            <span>
              {momentState
                ? parseDate(momentState, { outputFormat: configs?.dates_moment_format?.value })
                : t('ASAP_ABBREVIATION', 'ASAP')}
            </span>
          </DeliverytimeInput>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
