import React, { useState } from 'react'
import { DriverTips as DriverTipsController, useUtils, useLanguage, useConfig } from 'ordering-components'
import { Button, Input } from '../../../../styles'

import {
  DriverTipContainer,
  TipCard,
  FormDriverTip,
  WrapperInput,
  DriverTipMessage,
  WrapperTips
} from './styles'

const DriverTipsUI = (props) => {
  const {
    isMulti,
    driverTip,
    driverTipsOptions,
    cart,
    carts,
    isDriverTipUseCustom,
    handlerChangeOption
  } = props
  const [{ parsePrice }] = useUtils()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [customTip, setCustomTip] = useState((isDriverTipUseCustom && !driverTipsOptions.includes(driverTip)) ?? false)
  const [value, setvalue] = useState('')
  const isFixedPriceType = parseInt(configs?.driver_tip_type?.value, 10) === 1
  const currentTip = customTip ? parseFloat(driverTip || 0) > 0 : (!customTip && !driverTipsOptions.includes(driverTip) && parseFloat(driverTip || 0)) > 0

  const handleChangeDriverTip = (e) => {
    const tip = Number(e?.target?.value)
    if ((isNaN(tip) || tip < 0)) return
    setvalue(e?.target?.value)
  }

  const placeholderCurrency = !isFixedPriceType ? '0%' : (configs?.currency_position?.value || 'left') === 'left'
    ? `${configs?.format_number_currency?.value}0`
    : `0${configs?.format_number_currency?.value}`

  const multiCartTipsAmmout = carts?.reduce((total, cart) => {
    return total + parseFloat(cart?.driver_tip || 0)
  }, 0)

  return (
    <DriverTipContainer id='driver-tip-container'>
      <h3>{t('DRIVER_TIPS', 'Driver Tips')}</h3>
      <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
      <WrapperTips>
        {driverTipsOptions.map((option, i) => (
          <TipCard
            key={i}
            className={`${(option === driverTip && !customTip) ? 'active' : ''}`}
            onClick={() => {
              handlerChangeOption(option)
              setCustomTip(false)
            }}
          >
            {`${isFixedPriceType ? parsePrice(option) : `${option}%`}`}
          </TipCard>
        ))}
        {isDriverTipUseCustom && (
          <TipCard
            className={`${customTip ? 'active' : ''}`}
            onClick={() => setCustomTip(true)}
          >
            {t('CUSTOM_TIP', 'Custom')}
          </TipCard>
        )}
        <FormDriverTip>
          {customTip &&
            <WrapperInput>
              <Input
                name='drivertip'
                type='text'
                value={value}
                placeholder={placeholderCurrency}
                onChange={handleChangeDriverTip}
              />
              <Button
                borderRadius='8px'
                color='primary'
                disabled={parseFloat(value || 0) < 0 || parseFloat(value || 0) === driverTip || value === ''}
                onClick={() => {
                  handlerChangeOption(value)
                  setvalue('')
                }}
              >
                {t('APPLY_TIP', 'Apply Tip')}
              </Button>
            </WrapperInput>}
        </FormDriverTip>
        {currentTip && (
          <DriverTipMessage>
            {t('CURRENT_DRIVER_TIP_AMOUNT', 'Current driver tip amount')}{!isFixedPriceType &&
              ` (${driverTip}%)`}: {parsePrice(isMulti ? multiCartTipsAmmout : isFixedPriceType ? driverTip : cart?.driver_tip)}
          </DriverTipMessage>
        )}
      </WrapperTips>
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
