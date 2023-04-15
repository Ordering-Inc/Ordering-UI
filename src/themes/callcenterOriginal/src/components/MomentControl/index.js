import React, { useState, useEffect } from 'react'
import moment from 'moment'
import {
  MomentOption,
  useLanguage,
  useUtils,
  useConfig,
  useOrder
} from 'ordering-components'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { ArrowRight } from 'react-bootstrap-icons'
import {
  Title,
  CheckBoxWrapper,
  DateTimeWrapper,
  DateWrapper,
  TimeListWrapper,
  TimeListHeader,
  TimeListContent,
  CheckedIcon,
  ButtonWrapper
} from './styles'
import CgRadioCheck from '@meronex/icons/cg/CgRadioCheck'
import { Button } from '../../styles/Buttons'

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
    onClose
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [value, onChange] = useState(new Date())
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())
  const [isASP, setIsASP] = useState(false)
  const [timeLists, setTimeLists] = useState(null)
  const [timeFormat, setTimeFormat] = useState('')

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

  const handleChangeTimeFormat = () => {
    if (configs?.format_time?.value !== '12') return
    setTimeFormat(prev => prev === 'AM' ? 'PM' : 'AM')
  }

  useEffect(() => {
    if (configs?.format_time?.value === '12') setTimeFormat('AM')
    else setTimeFormat('')
  }, [configs?.format_time?.value])

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
            configs?.format_time?.value === '12' ? (
              hour.startTime.includes('12')
                ? `${hour.startTime}PM`
                : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
            ) : (
              parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
            )
          )
        }
      })
      setTimeLists(_timeLists)
    }
  }, [hoursList])

  useEffect(() => {
    handleCheckBoxChange(isAsap)
  }, [isAsap])

  return (
    <div id='moment_control'>
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
        {isASP ? <CheckedIcon /> : <CgRadioCheck />}
        <span>{t('CHECKOUT_ASAP', 'ASAP')} ({moment(new Date()).format('LLLL')} - {t('DELIVERY_TIME', 'delivery time')})</span>
      </CheckBoxWrapper>
      <CheckBoxWrapper
        highlight={!isASP}
        onClick={() => handleCheckBoxChange(null)}
      >
        {isASP ? <CgRadioCheck /> : <CheckedIcon />}
        <span>{t('SCHEDULE_FOR_LATER', 'Schedule for later')}</span>
      </CheckBoxWrapper>
      {
        !isASP && (
          <DateTimeWrapper>
            <DateWrapper>
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
            </DateWrapper>
            <TimeListWrapper>
              <div>
                <TimeListHeader>
                  <MdKeyboardArrowLeft onClick={handleChangeTimeFormat} />
                  <span>{timeFormat === '' ? t('TIME', 'Time') : timeFormat}</span>
                  <MdKeyboardArrowRight onClick={handleChangeTimeFormat} />
                </TimeListHeader>
                <TimeListContent>
                  {timeLists && timeLists.filter(item => item.content.includes(timeFormat)).map((time, i) => (
                    <Button
                      key={i}
                      color={timeSelected === time.value ? 'primaryContrast' : 'gray'}
                      onClick={() => !orderState.loading && handleChangeTime(time.value)}
                    >
                      {time.content}
                    </Button>
                  ))}
                </TimeListContent>
              </div>
            </TimeListWrapper>
          </DateTimeWrapper>
        )
      }

      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => onClose()}
        >
          <span>{t('CONTINUE', 'Continue')}</span>
          <ArrowRight />
        </Button>
      </ButtonWrapper>
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
