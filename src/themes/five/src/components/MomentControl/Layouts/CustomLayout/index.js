import React, { useState, useEffect } from 'react'
import { useConfig, useLanguage } from 'ordering-components'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import moment from 'moment'

import {
  LayoutContainer,
  CalendarWrapper,
  TimeListWrapper,
  TimeItem,
  ClosedBusinessMsg
} from './styles'

export const CustomLayout = (props) => {
  const {
    datesList,
    handleChangeDate,

    isEnabled,
    timeList,
    timeSelected,
    handleChangeTime
  } = props

  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const [value, onChange] = useState(new Date())
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())

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

  const formatMonthYear = (date) => {
    return moment(date).format('MMMM')
  }

  const formatShortWeekday = (date) => {
    return moment(date).format('dd')
  }

  const formatDay = (date) => {
    const minMon = moment(minDate).format('MM')
    const maxMon = moment(maxDate).format('MM')
    const currMon = moment(date).format('MM')
    return ((minMon === currMon) || (maxMon === currMon)) ? moment(date).format('D') : ''
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

  return (
    <LayoutContainer>
      <CalendarWrapper>
        <Calendar
          onChange={(val) => onDateChange(val)}
          value={value}
          next2Label=''
          prev2Label=''
          prevLabel={<MdKeyboardArrowLeft />}
          nextLabel={<MdKeyboardArrowRight />}
          minDate={minDate}
          maxDate={maxDate}
          formatMonthYear={(locale, date) => formatMonthYear(date)}
          formatShortWeekday={(locale, date) => formatShortWeekday(date)}
          formatDay={(locale, date) => formatDay(date)}
          calendarType='US'
        />
      </CalendarWrapper>
      <TimeListWrapper>
        {(isEnabled && timeList?.length > 0) ? (
          <>
            {timeList.map((time, i) => (
              <TimeItem
                key={i}
                active={timeSelected === time.value}
                onClick={() => handleChangeTime(time.value)}
              >
                <span>{time.text}</span>
              </TimeItem>
            ))}
          </>
        ) : (
          <ClosedBusinessMsg>{t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')}</ClosedBusinessMsg>
        )}
      </TimeListWrapper>
    </LayoutContainer>
  )
}
