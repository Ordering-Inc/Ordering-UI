import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'

import { Select } from '../../../styles/Select/FirstSelect'
import { Option, DateContainer, PlaceholderTitle } from './styles'

export const DateTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate
  } = props

  const [, t] = useLanguage()
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const dateTypes = [
    { value: 'default', content: <PlaceholderTitle>{t('SELECT_DATE', 'Select date')}</PlaceholderTitle> },
    { value: 'today', content: <Option>{t('TODAY', 'Today')}</Option> },
    { value: 'yesterday', content: <Option>{t('YESTERDAY', 'Yesterday')}</Option> },
    { value: 'last7', content: <Option>{t('LAST_7_DAYS', 'Last 7 dyas')}</Option> },
    { value: 'last30', content: <Option>{t('LAST_30_DAYS', 'Last 30 days')}</Option> },
    {
      value: 'term',
      content: (
        <Option isDateOption>
          <DateContainer>
            <span>{t('FROM', 'From')}</span>
            <DatePicker
              selected={startDate}
              placeholderText='mm/dd/yyyy'
              className='startDate'
              isClearable
              onChange={date => _handleChangeFromDate(date)}
            />
          </DateContainer>
          <DateContainer>
            <span>{t('TO', 'To')}</span>
            <DatePicker
              selected={endDate}
              minDate={new Date(startDate)}
              placeholderText='mm/dd/yyyy'
              className='endDate'
              onChange={date => _handleChangeEndDate(date)}
            />
          </DateContainer>
        </Option>
      )
    }
  ]

  const changeDateType = (dateType) => {
    handleChangeDateType(dateType)
  }

  const _handleChangeFromDate = (date) => {
    setStartDate(date)
    if (date !== null) {
      handleChangeFromDate(dayjs(date).format('YYYY-MM-DD'))
    } else {
      handleChangeFromDate(null)
    }
  }

  const _handleChangeEndDate = (date) => {
    setEndDate(date)
    if (date !== null) {
      handleChangeEndDate(dayjs(date).format('YYYY-MM-DD'))
    } else {
      handleChangeEndDate(null)
    }
  }
  useEffect(() => {
    if (filterValues.dateType !== 'term') return

    if (filterValues.deliveryFromDatetime !== null) {
      setStartDate(new Date(filterValues.deliveryFromDatetime))
    }
    if (filterValues.deliveryEndDatetime !== null) {
      setEndDate(new Date(filterValues.deliveryEndDatetime))
    }
  }, [filterValues])

  return (
    <Select
      defaultValue={filterValues.dateType || 'default'}
      options={dateTypes}
      onChange={(dateType) => changeDateType(dateType)}
      className='date-filter-container'
    />
  )
}
