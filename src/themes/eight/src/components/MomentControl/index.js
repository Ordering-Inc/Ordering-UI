import React, { useState, useEffect } from 'react'
import moment from 'moment'
import {
  MomentOption,
  useLanguage,
  useUtils,
  useConfig,
  useOrder
} from 'ordering-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Select } from '../../styles/Select'

import {
  MomentControlContainer,
  Title,
  Option,
  DatePickerWrapper,
  CheckBoxWrapper,
  HourListWrapper,
  DatePickerInput
} from './styles'
import CgRadioCheck from '@meronex/icons/cg/CgRadioCheck'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import BiTimeFive from '@meronex/icons/bi/BiTimeFive'

const MomentControlUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
    handleChangeDate,
    handleChangeTime
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [value, onChange] = useState(new Date())
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())
  const [isASP, setIsASP] = useState(isAsap)
  const [timeLists, setTimeLists] = useState(null)

  const onDateChange = (value) => {
    onChange(value)
    if (handleChangeDate) {
      const date = (value.getDate() < 10 ? '0' : '') + value.getDate()
      const month = ((value.getMonth() + 1) < 10 ? '0' : '') + (value.getMonth() + 1)
      const year = value.getFullYear()
      const fullDate = `${year}-${month}-${date}`
      handleChangeDate(fullDate)
    }
  }

  const handleCheckBoxChange = (index) => {
    if (index) {
      !orderState.loading && handleAsap()
      setIsASP(true)
    } else setIsASP(false)
  }

  const getDateValue = (date) => {
    const dateFormat = new Date(date)
    return dateFormat.getMonth() + '/' + dateFormat.getDate() + '/' + dateFormat.getFullYear()
  }

  useEffect(() => {
    if (datesList?.length > 0) {
      const _datesList = datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10))
      const minDateParts = _datesList[0].split('-')
      const maxDateParts = _datesList[_datesList.length - 1].split('-')
      const _minDate = new Date(minDateParts[0], minDateParts[1] - 1, minDateParts[2])
      const _maxDate = new Date(maxDateParts[0], maxDateParts[1] - 1, maxDateParts[2])
      setMinDate(_minDate)
      setMaxDate(_maxDate)
    }
  }, [datesList])

  useEffect(() => {
    if (dateSelected) {
      const dateParts = dateSelected.split('-')
      const _dateSelected = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      onChange(_dateSelected)
    }
  }, [dateSelected])

  useEffect(() => {
    if (hoursList) {
      const _timeLists = hoursList.map(hour => {
        return {
          value: hour.startTime,
          content: (
            <Option>
              <BiTimeFive />
              <span>
                {configs?.format_time?.value === '12' ? (
                  hour.startTime.includes('12')
                    ? `${hour.startTime}PM`
                    : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
                ) : (
                  parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
                )}
              </span>
            </Option>
          )
        }
      })
      setTimeLists(_timeLists)
    }
  }, [hoursList])

  return (
    <MomentControlContainer id='moment_control'>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Title>{t('WHEN_DO_WE_DELIVERY', 'When do we delivery?')}</Title>
      <CheckBoxWrapper
        highlight={isAsap && isASP}
        onClick={() => handleCheckBoxChange(true)}
        isLoading={orderState?.loading}
      >
        {isASP ? <RiRadioButtonFill /> : <CgRadioCheck />}
        <span>{t('CHECKOUT_ASAP', 'ASAP')} ({moment(new Date()).format('LLLL')} - {t('DELIVERY_TIME', 'delivery time')})</span>
      </CheckBoxWrapper>
      <CheckBoxWrapper
        highlight={!isASP}
        onClick={() => handleCheckBoxChange(null)}
      >
        {isASP ? <CgRadioCheck /> : <RiRadioButtonFill />}
        <span>{t('SCHEDULE_FOR_LATER', 'Schedule for later')}</span>
      </CheckBoxWrapper>
      {
        !isASP && (
          <>
            <DatePickerWrapper>
              <DatePickerInput>
                {getDateValue(value)}
              </DatePickerInput>
              <DatePicker
                selected={value}
                onChange={(date) => onDateChange(date)}
                minDate={minDate}
                maxDate={maxDate}
                monthsShown={2}
                inline
              />
            </DatePickerWrapper>
            <HourListWrapper
              isLoading={orderState?.loading}
            >
              <Select
                options={timeLists}
                defaultValue={timeSelected}
                onChange={(startTime) => !orderState.loading && handleChangeTime(startTime)}
                placeholder={t('SELECT_TIME', 'Select a time')}
              />
            </HourListWrapper>
          </>
        )
      }
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </MomentControlContainer>
  )
}

export const MomentControl = (props) => {
  const momentProps = {
    ...props,
    UIComponent: MomentControlUI
  }
  return <MomentOption {...momentProps} />
}
