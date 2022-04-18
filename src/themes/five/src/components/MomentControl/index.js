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
import BsCaretLeftFill from '@meronex/icons/bs/BsCaretLeftFill'
import { ArrowRight } from 'react-bootstrap-icons'
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
  TimeItem
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
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [isASP, setIsASP] = useState(false)
  const [timeList, setTimeList] = useState([])

  const handleCheckBoxChange = (index) => {
    if (index) {
      !orderState.loading && handleAsap()
      setIsASP(true)
    } else setIsASP(false)
  }

  useEffect(() => {
    const _timeLists = hoursList.map(hour => {
      return {
        value: hour.startTime,
        text: configs?.format_time?.value === '12' ? (
          hour.startTime.includes('12')
            ? `${hour.startTime}PM`
            : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
        ) : (
          parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
        )
      }
    })
    setTimeList(_timeLists)
  }, [dateSelected, hoursList])

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
              {timeList.map((time, i) => (
                <TimeItem
                  key={i}
                  active={timeSelected === time.value}
                  onClick={() => handleChangeTime(time.value)}
                >
                  <span>{time.text}</span>
                </TimeItem>
              ))}
            </TimeListWrapper>
          </OrderTimeWrapper>
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
