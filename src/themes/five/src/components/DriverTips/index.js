import React, { useEffect, useRef, useState } from 'react'
import { DriverTips as DriverTipsController, useUtils, useLanguage, useConfig } from 'ordering-components'

import {
  DriverTipContainer,
  TipCard,
  FormDriverTip,
  WrapperInput,
  DriverTipMessage,
  WrapperTips,
  DriverCustomContainer,
  WrapperContainer
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Button as ButtonPF } from '../../styles/Buttons/theme/pfchangs'

const DriverTipsUI = (props) => {
  const {
    driverTip,
    driverTipsOptions,
    cart,
    isDriverTipUseCustom,
    handlerChangeOption,
    pfchangs
  } = props
  const [{ parsePrice }] = useUtils()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [value, setvalue] = useState('')
  const isFixedPriceType = parseInt(configs?.driver_tip_type?.value, 10) === 1
  let timeout = null
  let previousSearch

  const el = useRef()
  const handleChangeDriverTip = (e) => {
    const tip = Number(e?.target?.value)
    if ((isNaN(tip) || tip < 0)) return
    setvalue(e?.target?.value)
  }

  const placeholderCurrency = (configs?.currency_position?.value || 'left') === 'left'
    ? `${configs?.format_number_currency?.value}0`
    : `0${configs?.format_number_currency?.value}`

  const onChangeCustomValue = e => {
    if (previousSearch !== e?.target?.value) {
      clearTimeout(timeout)
      timeout = setTimeout(function () {
        handlerChangeOption(e.target?.value || 0)
        if (el.current) {
          el.current.value = e.target?.value
        }
      }, 750)
    }
    previousSearch = e.target?.value
  }

  const handleClickCustomButton = (value) => {
    el.current.value = previousSearch = value
    handlerChangeOption(value)
  }

  useEffect(() => {
    if (el?.current) {
      el.current.onkeyup = onChangeCustomValue
      el.current.value = cart?.driver_tip || ''
      previousSearch = cart?.driver_tip
    }
  }, [el.current])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <DriverTipContainer id='driver-tip-container'>
        <>
          {isDriverTipUseCustom ? (
            <FormDriverTip>
              <WrapperInput>
                <Input
                  name='drivertip'
                  type='text'
                  value={value}
                  placeholder={placeholderCurrency}
                  onChange={handleChangeDriverTip}
                />
                <Button
                  color='primary'
                  disabled={parseFloat(value || 0) < 0 || parseFloat(value || 0) === driverTip || value === ''}
                  onClick={() => {
                    handlerChangeOption(value)
                    setvalue('')
                    if (el?.current?.value) {
                      el.current.value = ''
                    }
                  }}
                >
                  {t('APPLY_TIP', 'Apply Tip')}
                </Button>
              </WrapperInput>
              {parseFloat(driverTip || 0) > 0 && (
                <DriverTipMessage>
                  {t('CURRENT_DRIVER_TIP_AMOUNT', 'Current driver tip amount')}{!isFixedPriceType && ` (${driverTip}%)`}: {isFixedPriceType ? parsePrice(driverTip) : parsePrice(cart?.driver_tip)}
                </DriverTipMessage>
              )}
            </FormDriverTip>
          ) : (
            <WrapperContainer pfchangs={pfchangs}>
              <WrapperTips pfchangs={pfchangs}>
                {driverTipsOptions.map((option, i) => (
                  <TipCard
                    key={i}
                    className={`${option === driverTip ? 'active' : ''}`}
                    onClick={() => {
                      handlerChangeOption(option)
                      if (el?.current) {
                        previousSearch = ''
                        el.current.value = ''
                      }
                    }}
                    pfchangs={pfchangs}
                  >
                    {`${isFixedPriceType ? parsePrice(option) : `${option}%`}`}
                  </TipCard>
                ))}
              </WrapperTips>
              {pfchangs && (
                <DriverCustomContainer>
                  <ButtonPF color={el?.current?.value ? 'primary' : ''} onClick={() => !previousSearch && handleClickCustomButton(5.01)}>
                    {t('CUSTOM', 'Custom')}
                  </ButtonPF>
                  <Input
                    name='drivertip'
                    type='text'
                    defaultValue=''
                    placeholder={configs.format_number_currency?.value || '$'}
                    ref={(ref) => {
                      el.current = ref
                    }}
                  />
                </DriverCustomContainer>
              )}
            </WrapperContainer>
          )}
        </>
        {/* {isDriverTipUseCustom && !driverTipsOptions.includes(driverTip) && driverTip > 0 && (
          <DriverTipMessage>
          {t('CUSTOM_DRIVER_TIP_AMOUNT', 'The driver\'s current tip comes from a custom option')}
          </DriverTipMessage>
        )} */}
      </DriverTipContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
