import React from 'react'
import { DriverTips as DriverTipsController } from 'ordering-components'

import {
  DriverTipContainer,
  TipCard
} from './styles'

const DriverTipsUI = (props) => {
  const {
    driverTipsOptions,
    optionSelected,
    handlerChangeOption
  } = props

  return (
    <DriverTipContainer>
      {driverTipsOptions?.length > 0 && driverTipsOptions.map((option, i) => (
        <TipCard
          key={i}
          className={`${option === optionSelected ? 'active' : ''}`}
          onClick={() => handlerChangeOption(option)}
        >
          {option}%
        </TipCard>
      ))}
    </DriverTipContainer>
  )
}

export const DriverTips = (props) => {
  const driverTipsProps = {
    ...props,
    UIComponent: DriverTipsUI
  }

  return <DriverTipsController {...driverTipsProps} />
}
