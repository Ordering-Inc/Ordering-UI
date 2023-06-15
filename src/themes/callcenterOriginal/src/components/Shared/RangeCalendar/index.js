import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components'
import moment from 'moment'
import { DateRange, Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Calendar4 } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import { Container, CalendarWrapper } from './styles'
import * as locales from 'react-date-range/dist/locale'
import { getLocale } from '../../../../../../utils'

export const RangeCalendar = (props) => {
  const {
    handleChangeDate,
    defaultValue,
    isLeft,
    isSingleDate,
    withTime,
    minDate
  } = props

  const [state, t] = useLanguage()
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [date, setDate] = useState(null)
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const calendarRef = useRef()

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  const handleOpenCalendar = (evt) => {
    evt.preventDefault()
    setIsShowCalendar(true)
  }

  const handleChangeSingleDate = (dateTime) => {
    const dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    handleChangeDate && handleChangeDate(moment(dateTime).format(dateFormat))

    setDate(dateTime)
  }

  const handleChangeDates = (item) => {
    if (item.selection?.startDate && item.selection?.endDate) {
      const dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
      handleChangeDate(moment(item.selection.startDate).format(dateFormat), moment(item.selection.endDate).format(dateFormat))
    }

    setDateRange([item.selection])
  }

  const rangeFormat = (date1, date2) => {
    let formattedDate = `${moment(date1).format('YYYY-MM-DD')}~${moment(date2).format('YYYY-MM-DD')}`
    if (moment(date1).format('YYYY') === moment(date2).format('YYYY')) {
      if (moment(date1).format('MM') === moment(date2).format('MM')) formattedDate = `${moment(date1).format('DD')} - ${moment(date2).format('DD')} ${moment(date2).format('MMM')}, ${moment(date1).format('YYYY')}`
      else formattedDate = `${moment(date1).format('MM-DD')} ~ ${moment(date2).format('MM-DD')}, ${moment(date1).format('YYYY')}`
    }
    return formattedDate
  }

  const dateFormat = (dateTime) => {
    return `${moment(dateTime).format('DD')} ${moment(dateTime).format('MMM')}, ${moment(dateTime).format('YYYY')}`
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (isSingleDate && defaultValue) {
      setDate(new Date(defaultValue))
      return
    }

    if (defaultValue && defaultValue?.from !== '' && defaultValue?.to !== '') {
      setDateRange([
        {
          startDate: new Date(defaultValue?.from),
          endDate: new Date(defaultValue?.to),
          key: 'selection'
        }
      ])
    }
  }, [defaultValue])

  return (
    <Container>
      <Button
        onClick={handleOpenCalendar}
        borderRadius='8px'
        color='secundary'
        className='ordering-calendar-btn'
      >
        <Calendar4 />
        {!isSingleDate && (dateRange[0].startDate ? rangeFormat(dateRange[0].startDate, dateRange[0].endDate) : t('SELECT_DATE_RANGE', 'Select Date Range'))}
        {isSingleDate && (date ? dateFormat(date) : t('SELECT_DATE', 'Select a Date'))}
      </Button>
      {
        isShowCalendar && (
          <CalendarWrapper ref={calendarRef} isLeft={isLeft}>
            {isSingleDate ? (
              <Calendar
                locale={getLocale(state?.language?.code, locales)}
                date={date}
                onChange={(date) => handleChangeSingleDate(date)}
                minDate={minDate || new Date('1922-01-01')}
              />
            ) : (
              <DateRange
                editableDateInputs
                locale={getLocale(state?.language?.code, locales)}
                onChange={item => handleChangeDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={minDate || new Date('1922-01-01')}
                startDatePlaceholder={t('EARLY', 'Early')}
                endDatePlaceholder={t('CONTINUOUS', 'Continuous')}
              />
            )}
          </CalendarWrapper>
        )
      }
    </Container>
  )
}
