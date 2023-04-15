import React, { useState } from 'react'
import moment from 'moment'
import { MomentOption, useLanguage, useUtils, useConfig, useOrder } from 'ordering-components'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import {
  Days,
  Day,
  DayName,
  DayNumber,
  ContentDay,
  Hours,
  Hour,
  Title,
  MiddleLine,
  CheckOutPageSelectTimePicker,
  SubTitle,
  PreorderPicker,
  OptionItem,
  CheckBoxItem,
  AsapLabel
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Select } from '../../styles/Select'

const MomentControlUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
    handleChangeDate,
    handleChangeTime,
    isCheckout
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const [orderState] = useOrder()

  const DateOption = datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10)).map((date, i) => {
    const dateParts = date.split('-')
    const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const dayString = (_date.toDateString())
    return {
      value: date,
      content: (
        <OptionItem key={i} selected={dateSelected === date}>
          {dayString}
        </OptionItem>
      )
    }
  })
  const TimeOption = hoursList.map((hour, i) => {
    return {
      value: hour.startTime,
      content: (
        <OptionItem
          key={i}
          selected={timeSelected === hour.startTime}
          isLoading={orderState?.loading}
        >
          {configs?.format_time?.value === '12' ? (
            hour.startTime.includes('12')
              ? `${hour.startTime}PM`
              : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
          ) : (
            parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
          )}
        </OptionItem>
      )
    }
  })
  const Dateplaceholder = <OptionItem>{t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}</OptionItem>
  const Timeplaceholder = <OptionItem>{t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')}</OptionItem>

  const [showTimeOption, setShowTimeOption] = useState(false)

  const handleCheckbox = () => {
    console.log('checkbox click')
    if (showTimeOption) {
      handleAsap()
      setShowTimeOption(false)
    } else {
      setShowTimeOption(true)
    }
  }

  return (
    <div id='moment_control'>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {!isCheckout ? (
        <>
          <Title>{t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}</Title>
          <Days name='days'>
            {
              datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10)).map(date => {
                const dateParts = date.split('-')
                const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 3).toUpperCase()
                const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                return (
                  <Day key={dayNumber} selected={dateSelected === date} onClick={() => handleChangeDate(date)}>
                    <ContentDay className='content-day'>
                      <DayName>{dayName}</DayName>
                      <DayNumber>{dayNumber}</DayNumber>
                    </ContentDay>
                  </Day>
                )
              })
            }
            <MiddleLine />
          </Days>
          <Title>{t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')}</Title>
          <Hours name='hours'>
            <Hour
              selected={isAsap}
              onClick={() => !orderState.loading && handleAsap()}
              isLoading={orderState?.loading}
            >
              {windowSize.width > 410 ? (
                t('ASAP', 'As soon as possible')
              ) : (
                t('ASAP_ABBREVIATION', 'ASAP')
              )}
            </Hour>
            {
              hoursList.map((hour, i) => (
                <Hour
                  key={i}
                  selected={timeSelected === hour.startTime}
                  onClick={() => !orderState.loading && handleChangeTime(hour.startTime)}
                  isLoading={orderState?.loading}
                >
                  {configs?.format_time?.value === '12' ? (
                    hour.startTime.includes('12')
                      ? `${hour.startTime}PM`
                      : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
                  ) : (
                    parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
                  )}
                </Hour>
              ))
            }
          </Hours>
        </>
      ) : (
        <>
          <CheckOutPageSelectTimePicker>
            <CheckBoxItem className='asap-select'>
              <span>
                {(isAsap && !showTimeOption) ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank disabled />
                )}
              </span>
              <AsapLabel
                onClick={handleCheckbox}
              >
                {windowSize.width > 410 ? (
                  t('ASAP', 'As soon as possible')
                ) : (
                  t('ASAP_ABBREVIATION', 'ASAP')
                )}
              </AsapLabel>
            </CheckBoxItem>
            {showTimeOption && (
              <>
                <SubTitle>
                  {t('PREORDER', 'Preorder')}
                </SubTitle>
                <PreorderPicker>
                  <Select
                    placeholder={Dateplaceholder}
                    options={DateOption}
                    onChange={(date) => handleChangeDate(date)}
                    isFullWidth
                    defaultValue={dateSelected}
                  />
                  <Select
                    placeholder={Timeplaceholder}
                    options={TimeOption}
                    isFullWidth
                    onChange={(time) => handleChangeTime(time)}
                    defaultValue={timeSelected}
                  />
                </PreorderPicker>
              </>
            )}
          </CheckOutPageSelectTimePicker>
        </>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

export const MomentControl = (props) => {
  const momentProps = {
    ...props,
    UIComponent: MomentControlUI
  }
  return <MomentOption {...momentProps} />
}
