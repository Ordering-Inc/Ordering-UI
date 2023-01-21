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
  ClosedBusinessMsg,
  CheckIcon
} from './styles'
import CgRadioCheck from '@meronex/icons/cg/CgRadioCheck'
import { Button } from '../../styles/Buttons'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { getTimes as getTimesUtils } from '../../../../../utils'

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
    onClose,
    isAppoint,
    cateringPreorder,
    isCart,
    preorderLeadTime,
    business,
    getActualSchedule,
    preorderMaximumDays,
    preorderMinimumDays
  } = props

  const [{ configs }] = useConfig()
  const is12hours = configs?.general_hour_format?.value?.includes('hh:mm')
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
    const dateParts = curdate?.split?.('-')
    const dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const times = getTimesUtils(dateSeleted, schedule, is12hours)
    return times
  }

  const setLocalMoment = () => {
    moment.updateLocale('custom', {
      months: [
        t('MONTH1', 'January'),
        t('MONTH2', 'February'),
        t('MONTH3', 'March'),
        t('MONTH4', 'April'),
        t('MONTH5', 'May'),
        t('MONTH6', 'June'),
        t('MONTH7', 'July'),
        t('MONTH8', 'August'),
        t('MONTH9', 'September'),
        t('MONTH10', 'October'),
        t('MONTH11', 'November'),
        t('MONTH12', 'December')
      ],
      monthsShort: [
        t('MONTHSHORT1', 'Jan'),
        t('MONTHSHORT2', 'Feb'),
        t('MONTHSHORT3', 'Mar'),
        t('MONTHSHORT4', 'Apr'),
        t('MONTHSHORT5', 'May'),
        t('MONTHSHORT6', 'Jun'),
        t('MONTHSHORT7', 'Jul'),
        t('MONTHSHORT8', 'Aug'),
        t('MONTHSHORT9', 'Sep'),
        t('MONTHSHORT10', 'Oct'),
        t('MONTHSHORT11', 'Nov'),
        t('MONTHSHORT12', 'Dec')
      ],
      weekdays: [
        t('DAY7', 'Sunday'),
        t('DAY1', 'Monday'),
        t('DAY2', 'Tuesday'),
        t('DAY3', 'Wednesday'),
        t('DAY4', 'Thursday'),
        t('DAY5', 'Friday'),
        t('DAY6', 'Saturday')
      ],
      weekdaysShort: [
        t('DAYSHORT7', 'Sun'),
        t('DAYSHORT1', 'Mon'),
        t('DAYSHORT2', 'Tue'),
        t('DAYSHORT3', 'Wed'),
        t('DAYSHORT4', 'Thu'),
        t('DAYSHORT5', 'Fri'),
        t('DAYSHORT6', 'Sat')
      ],
      weekdaysMin: [
        t('DAYMIN7', 'Su'),
        t('DAYMIN1', 'Mo'),
        t('DAYMIN2', 'Tu'),
        t('DAYMIN3', 'We'),
        t('DAYMIN4', 'Th'),
        t('DAYMIN5', 'Fr'),
        t('DAYMIN6', 'Sa')
      ],
      meridiem: function (hours) {
        return hours < 12 ? t('AM', 'AM') : t('PM', 'PM')
      }
    })
  }

  useEffect(() => {
    let _timeLists = []
    if (!scheduleList) {
      const schedule = business && getActualSchedule()
      if (!schedule && cateringPreorder && business) {
        setIsEnabled(false)
        return
      }
      _timeLists = hoursList
        .filter(hour => (!business || schedule?.lapses?.some(lapse =>
          moment(dateSelected + ` ${hour.startTime}`) >= moment(dateSelected + ` ${lapse.open.hour}:${lapse.open.minute}`).add(preorderLeadTime, 'minutes') && moment(dateSelected + ` ${hour.endTime}`) <= moment(dateSelected + ` ${lapse.close.hour}:${lapse.close.minute}`))) &&
          moment(dateSelected + ` ${hour.startTime}`) < moment(dateSelected + ` ${hour.endTime}`) &&
          (moment().add(preorderLeadTime, 'minutes') < moment(dateSelected + ` ${hour.startTime}`) || !cateringPreorder))
        .map(hour => {
          return {
            value: hour.startTime,
            text: is12hours ? (
              hour.startTime.includes('12')
                ? `${hour.startTime}PM`
                : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
            ) : (
              parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
            ),
            endText: is12hours ? (
              hour.endTime.includes('12')
                ? `${hour.endTime}PM`
                : parseTime(moment(hour.endTime, 'HH:mm'), { outputFormat: 'hh:mma' })
            ) : (
              parseTime(moment(hour.endTime, 'HH:mm'), { outputFormat: 'HH:mm' })
            )
          }
        })
      setIsEnabled(true)
    } else {
      _timeLists = getTimes(dateSelected, scheduleList)
    }
    setTimeList(_timeLists)
  }, [dateSelected, hoursList, scheduleList, cateringPreorder])

  useEffect(() => {
    handleCheckBoxChange(isAsap && ((preorderMinimumDays === 0 && preorderLeadTime === 0) || !cateringPreorder))
  }, [isAsap])

  useEffect(() => {
    if (!pathname.includes('store') || isCart) {
      setScheduleList(null)
      return
    }

    const schedules = JSON.parse(window.localStorage.getItem('business_schedule'))
    setScheduleList(schedules)
  }, [pathname])

  useEffect(() => {
    setLocalMoment()
  }, [])

  return (
    <div id='moment_control'>
      {!isAppoint && (
        <>
          {!isCart && (
            <Title>{t('WHEN_DO_WE_DELIVERY', 'When do we delivery?')}</Title>
          )}
          {((preorderMinimumDays === 0 && preorderLeadTime === 0) || !cateringPreorder) && (
            <CheckBoxWrapper
              highlight={isAsap && isASP}
              onClick={() => handleCheckBoxChange(true)}
              isLoading={orderState?.loading}
            >
              {isASP ? <CheckedIcon /> : <CgRadioCheck />}
              <span>{t('CHECKOUT_ASAP', 'ASAP')} ({moment(new Date()).format('LLLL')} - {t('DELIVERY_TIME', 'delivery time')})</span>
            </CheckBoxWrapper>
          )}
          <CheckBoxWrapper
            highlight={!isASP}
            onClick={() => handleCheckBoxChange(null)}
          >
            {isASP ? <CgRadioCheck /> : <CheckedIcon />}
            <span>{t('SCHEDULE_FOR_LATER', 'Schedule for later')}</span>
          </CheckBoxWrapper>
        </>
      )}
      {
        (!isASP || isAppoint) && (
          !props.isCustomLayout ? (
            <OrderTimeWrapper>
              {!isAppoint && !isCart && <p>{t('ORDER_TIME', 'Order time')}</p>}
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
                      datesList.slice((cateringPreorder && preorderMinimumDays) || 0, Number(cateringPreorder ? preorderMaximumDays : configs?.max_days_preorder?.value ?? 6, 10)).map(date => {
                        const dateParts = date.split('-')
                        const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                        const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2)
                        const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                        return (
                          <SwiperSlide key={dayNumber}>
                            <Day selected={dateSelected === date} onClick={() => handleChangeDate(date)}>
                              <DayName isAppoint={isAppoint}>{dayName}</DayName>
                              <DayNumber isAppoint={isAppoint}>{dayNumber}</DayNumber>
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
                        isAppoint={isAppoint}
                        cateringPreorder={cateringPreorder}
                      >
                        <span>
                          {cateringPreorder && (
                            <CheckIcon>
                              {timeSelected === time.value ? <CheckedIcon cateringPreorder={cateringPreorder} /> : <CgRadioCheck />}
                            </CheckIcon>
                          )}
                          <p>
                            {time.text} {cateringPreorder && `- ${time.endText}`}
                          </p>
                        </span>
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
      {!isAppoint && !isCart && (
        <ButtonWrapper>
          <Button
            color='primary'
            onClick={() => onClose()}
          >
            <span>{t('CONTINUE', 'Continue')}</span>
            <ArrowRight />
          </Button>
        </ButtonWrapper>
      )}
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
