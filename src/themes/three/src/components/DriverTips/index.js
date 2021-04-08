import React from 'react'
import { DriverTips as DriverTipsController, useLanguage } from 'ordering-components'

import {
  DriverTipContainer,
  WrapDriverTip,
  TipCard
} from './styles'

const DriverTipsUI = (props) => {
  const {
    driverTipsOptions,
    optionSelected,
    handlerChangeOption
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <DriverTipContainer id='driver-tip-container'>
        <p>
          {t('DRIVER_TIP_THANKS', 'Delivery drivers are extremely important to the community at this time. Add more as a thank you.')}
        </p>
        <WrapDriverTip>
          {driverTipsOptions?.length > 0 && driverTipsOptions.map((option, i) => (
            <TipCard
              key={i}
              className={`${option === optionSelected ? 'active' : ''}`}
              onClick={() => handlerChangeOption(option)}
            >
              {option}%
            </TipCard>
          ))}
        </WrapDriverTip>
      </DriverTipContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}

export const DriverTips = (props) => {
  const driverTipsProps = {
    ...props,
    UIComponent: DriverTipsUI
  }

  return <DriverTipsController {...driverTipsProps} />
}
