import React, { useEffect, useState } from 'react'
import {
  useUtils,
  useLanguage,
  MomentOption,
  useConfig,
  useOrder
} from 'ordering-components'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import { useTheme } from 'styled-components'
import { Select } from '../../styles/Select'
import { Button } from '../../styles/Buttons'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import BsCaretLeftFill from '@meronex/icons/bs/BsCaretLeftFill'
import {
  BusinessPreorderContainer,
  LogoWrapper,
  BusinessLogo,
  PreorderTypeWrapper,
  SelectWrapper,
  OrderTimeWrapper,
  Title,
  ButtonWrapper,
  TimeListWrapper,
  DateWrapper,
  TypeContent,
  TimeItem,
  Layer,
  MonthYearLayer,
  DaysSwiper,
  Day,
  DayName,
  DayNumber,
  ClosedBusinessMsg
} from './styles'
import { BusinessMenuList } from '../BusinessMenuList'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

const BusinessPreorderUI = (props) => {
  const {
    business,
    handleClick,
    datesList,
    dateSelected,
    timeSelected,
    handleChangeDate,
    handleChangeTime,
    showButton,
    isAsap,
    handleAsap
  } = props

  const { pathname } = useLocation()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()

  const [type, setType] = useState('business_hours')
  const [menu, setMenu] = useState(null)
  const [timeList, setTimeList] = useState([])
  const [isEnabled, setIsEnabled] = useState(false)

  const is12Hours = configs?.dates_moment_format?.value?.includes('hh:mm')

  const preOrderType = [
    { value: 'business_menu', content: <TypeContent>{t('BUSINESS_MENU', 'Business menu')}</TypeContent> },
    { value: 'business_hours', content: <TypeContent>{t('BUSINESS_HOURS', 'Business hours')}</TypeContent> }
  ]

  const goToBusinessPage = () => {
    handleClick && handleClick(business)
  }

  const validateSelectedDate = (curdate, menu) => {
    const day = moment(curdate).format('d')
    setIsEnabled(menu.schedule[day].enabled || false)
  }

  const getTimes = (curdate, menu) => {
    validateSelectedDate(curdate, menu)
    const date = new Date()
    const dateParts = curdate.split('-')
    const dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    var times = []
    for (var k = 0; k < menu.schedule[dateSeleted.getDay()].lapses.length; k++) {
      var open = {
        hour: menu.schedule[dateSeleted.getDay()].lapses[k].open.hour,
        minute: menu.schedule[dateSeleted.getDay()].lapses[k].open.minute
      }
      var close = {
        hour: menu.schedule[dateSeleted.getDay()].lapses[k].close.hour,
        minute: menu.schedule[dateSeleted.getDay()].lapses[k].close.minute
      }
      for (var i = open.hour; i <= close.hour; i++) {
        if (date.getDate() !== dateSeleted.getDate() || i >= date.getHours()) {
          let hour = ''
          let meridian = ''
          if (!is12Hours) hour = i < 10 ? '0' + i : i
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
    const selectedMenu = menu ? (menu?.use_business_schedule ? business : menu) : business
    const _times = getTimes(dateSelected, selectedMenu)
    setTimeList(_times)
  }, [dateSelected, menu])

  useEffect(() => {
    if (type === 'business_hours') setMenu(null)
  }, [type])

  useEffect(() => {
    if (pathname.includes('store')) return
    handleAsap && handleAsap()
  }, [])

  return (
    <BusinessPreorderContainer>
      <Title>{t('PREORDER', 'Preorder')}</Title>
      <LogoWrapper>
        <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
        <p>{business.name}</p>
      </LogoWrapper>
      <PreorderTypeWrapper>
        <p>{t('PREORDER_TYPE', 'Preorder type')}</p>
        <SelectWrapper>
          <Select
            defaultValue={type}
            options={preOrderType}
            placeholder={t('SELECT_A_TYPE', 'Select a type')}
            onChange={(value) => setType(value)}
          />
        </SelectWrapper>
      </PreorderTypeWrapper>
      {type === 'business_menu' && (
        <BusinessMenuList
          businessId={business.id}
          setMenu={setMenu}
        />
      )}
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
      {showButton && (
        <ButtonWrapper>
          <Button
            color='primary'
            onClick={goToBusinessPage}
            disabled={isAsap || !(dateSelected && timeSelected)}
          >
            {t('GO_TO_MENU', 'Go to menu')}
            <BsArrowRight />
          </Button>
        </ButtonWrapper>
      )}
      {orderState?.loading && (
        <Layer>
          {(window.location.pathname !== '/search' || orderState?.options?.address?.location) && (
            <SpinnerLoader
              style={{
                top: windowSize.width <= 768 ? '50%' : '40%',
                position: windowSize.width <= 768 ? 'absolute' : 'sticky',
                height: 'auto'
              }}
            />
          )}
        </Layer>
      )}
    </BusinessPreorderContainer>
  )
}

export const BusinessPreorder = (props) => {
  const [{ configs }] = useConfig()

  const limitDays = parseInt(configs?.max_days_preorder?.value, 10)

  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)

  const businessPreorderProps = {
    ...props,
    UIComponent: BusinessPreorderUI,
    maxDate: currentDate
  }
  return <MomentOption {...businessPreorderProps} />
}
