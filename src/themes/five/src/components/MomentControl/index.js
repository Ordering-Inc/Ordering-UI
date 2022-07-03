import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import {
  MomentOption,
  useLanguage,
  useUtils,
  useConfig,
  useOrder
} from 'ordering-components'
import 'react-datepicker/dist/react-datepicker.css'
import BsCaretLeftFill from '@meronex/icons/bs/BsCaretLeftFill'
import { ArrowRight } from 'react-bootstrap-icons'
import { CustomLayout } from './Layouts/CustomLayout'
import {
  Title,
  CheckBoxWrapper,
  DateWrapper,
  TimeListWrapper,
  CheckedIcon,
  ButtonWrapper,
  OrderTimeWrapper,
  MonthYearLayer,
  DaysSwiper,
  Day,
  DayName,
  DayNumber,
  TimeItem,
  ClosedBusinessMsg
} from './styles'
import CgRadioCheck from '@meronex/icons/cg/CgRadioCheck'
import { Button } from '../../styles/Buttons'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

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
  const is12hours = configs?.dates_moment_format?.value?.includes('hh:mm')
  const [{ parseTime }] = useUtils()
  const { pathname } = useLocation()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [isASP, setIsASP] = useState(false)
  const [timeList, setTimeList] = useState([])
  const [scheduleList, setScheduleList] = useState(null)
  const [isEnabled, setIsEnabled] = useState(true)

  const handleCheckBoxChange = (index) => {
    if (index) {
      !orderState.loading && handleAsap()
      setIsASP(true)
    } else setIsASP(false)
  }

  const validateSelectedDate = (curdate, schedule) => {
    const day = moment(curdate).format('d')
    setIsEnabled(schedule[day].enabled)
  }

  const getTimes = (curdate, schedule) => {
    validateSelectedDate(curdate, schedule)
    const date = new Date()
    const dateParts = curdate.split('-')
    const dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    var times = []
    for (var k = 0; k < schedule[dateSeleted.getDay()].lapses.length; k++) {
      var open = {
        hour: schedule[dateSeleted.getDay()].lapses[k].open.hour,
        minute: schedule[dateSeleted.getDay()].lapses[k].open.minute
      }
      var close = {
        hour: schedule[dateSeleted.getDay()].lapses[k].close.hour,
        minute: schedule[dateSeleted.getDay()].lapses[k].close.minute
      }
      for (var i = open.hour; i <= close.hour; i++) {
        if (date.getDate() !== dateSeleted.getDate() || i >= date.getHours()) {
          let hour = ''
          let meridian = ''
          if (!is12hours) hour = i < 10 ? '0' + i : i
          else {
            if (i === 0) {
              hour = '12'
              meridian = ' ' + t('AM', 'AM')
            } else if (i > 0 && i < 12) {
              hour = (i < 10 ? '0' + i : i)
              meridian = ' ' + t('AM', 'AM')
            } else if (i === 12) {
              hour = '12'
              meridian = ' ' + t('PM', 'PM')
            } else {
              hour = ((i - 12 < 10) ? '0' + (i - 12) : (i - 12))
              meridian = ' ' + t('PM', 'PM')
            }
          }
          for (let j = (i === open.hour ? open.minute : 0); j <= (i === close.hour ? close.minute : 59); j += 15) {
            if (i !== date.getHours() || j >= date.getMinutes() || date.getDate() !== dateSeleted.getDate()) {
              times.push({
                text: hour + ':' + (j < 10 ? '0' + j : j) + meridian,
                value: (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j)
              })
            }
          }
        }
      }
    }
    return times
  }

  useEffect(() => {
    let _timeLists = []
    if (!scheduleList) {
      _timeLists = hoursList.map(hour => {
        return {
          value: hour.startTime,
          text: is12hours ? (
            hour.startTime.includes('12')
              ? `${hour.startTime}PM`
              : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
          ) : (
            parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
          )
        }
      })
      setIsEnabled(true)
    } else {
      _timeLists = getTimes(dateSelected, scheduleList)
    }
    setTimeList(_timeLists)
  }, [dateSelected, hoursList, scheduleList])

  useEffect(() => {
    handleCheckBoxChange(isAsap)
  }, [isAsap])

  useEffect(() => {
    if (!pathname.includes('store')) {
      setScheduleList(null)
      return
    }

    const schedules = JSON.parse(window.localStorage.getItem('business_schedule'))
    setScheduleList(schedules)
  }, [pathname])

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
          !props.isCustomLayout ? (
            <OrderTimeWrapper>
              <p>{t('ORDER_TIME', 'Order time')}</p>
              <DateWrapper>
                <MonthYearLayer>
                  <span>{moment(dateSelected).format('MMMM, yyyy')}</span>
                </MonthYearLayer>
                <DaysSwiper left={<BsCaretLeftFill />}>
                  <Swiper
                    spaceBetween={0}
                    navigation
                    breakpoints={{
                      0: {
                        slidesPerView: 4,
                        spaceBetween: 0
                      },
                      400: {
                        slidesPerView: 5,
                        spaceBetween: 0
                      },
                      550: {
                        slidesPerView: 6,
                        spaceBetween: 0
                      },
                      769: {
                        slidesPerView: configs?.max_days_preorder?.value < 7 ? configs?.max_days_preorder?.value : 7,
                        spaceBetween: 0
                      }
                    }}
                    freeMode
                    watchSlidesProgress
                    className='swiper-datelist'
                    preventClicksPropagation={false}
                  >
                    {
                      datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10)).map(date => {
                        const dateParts = date.split('-')
                        const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                        const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2)
                        const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                        return (
                          <SwiperSlide key={dayNumber}>
                            <Day selected={dateSelected === date} onClick={() => handleChangeDate(date)}>
                              <DayName>{dayName}</DayName>
                              <DayNumber>{dayNumber}</DayNumber>
                            </Day>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </DaysSwiper>
              </DateWrapper>
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
            </OrderTimeWrapper>
          ) : (
            <CustomLayout
              handleChangeDate={handleChangeDate}
              datesList={datesList}
              hoursList={hoursList}
              isEnabled={isEnabled}
              timeList={timeList}
              timeSelected={timeSelected}
              handleChangeTime={handleChangeTime}
            />
          )
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
