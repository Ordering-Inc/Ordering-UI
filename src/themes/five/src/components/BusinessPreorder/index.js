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
import { getTimes } from '../../../../../utils'

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
    handleAsap,
    isProfessional,
    isDisabled,
    maxDays
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
  const isPreOrderSetting = configs?.preorder_status_enabled?.value === '1'
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

  const getTimeList = (curdate, menu) => {
    validateSelectedDate(curdate, menu)
    const dateParts = curdate.split('-')
    const dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const times = getTimes(dateSeleted, menu?.schedule, is12Hours)
    return times
  }

  useEffect(() => {
    const selectedMenu = menu ? (menu?.use_business_schedule ? business : menu) : business
    const _times = getTimeList(dateSelected, selectedMenu)
    setTimeList(_times)
  }, [dateSelected, menu, business])

  useEffect(() => {
    if (type === 'business_hours') setMenu(null)
  }, [type])

  useEffect(() => {
    if (pathname.includes('store') || isProfessional) return
    handleAsap && handleAsap()
  }, [])

  return (
    <BusinessPreorderContainer>
      {!isProfessional && <Title>{t('PREORDER', 'Preorder')}</Title>}
      {!isProfessional && (
        <LogoWrapper>
          <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
          <p>{business.name}</p>
        </LogoWrapper>
      )}
      {!isProfessional && isPreOrderSetting && (
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
      )}
      {!isProfessional && (type === 'business_menu') && (
        <BusinessMenuList
          businessId={business.id}
          setMenu={setMenu}
        />
      )}
      {(isPreOrderSetting || isProfessional) && (
        <OrderTimeWrapper>
          {!isProfessional && <p>{t('ORDER_TIME', 'Order time')}</p>}
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
                  datesList.slice(0, Number(maxDays || configs?.max_days_preorder?.value || 6, 10)).map((date, i) => {
                    const dateParts = date.split('-')
                    const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                    const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2)
                    const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                    return (
                      <SwiperSlide key={i}>
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
                    isDisabled={isDisabled}
                  >
                    <span>{time.text}</span>
                  </TimeItem>
                ))}
              </>
            ) : (
              <ClosedBusinessMsg>
                {!isProfessional
                  ? t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')
                  : t('PROFESSIONAL_NOT_AVAILABLE', 'Professional is not available at the moment')}
              </ClosedBusinessMsg>
            )}
          </TimeListWrapper>
        </OrderTimeWrapper>
      )}
      {!isPreOrderSetting && !isProfessional && (
        <ClosedBusinessMsg>{t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')}</ClosedBusinessMsg>
      )}
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
        <Layer nobg={!!isProfessional}>
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
  const { maxDays } = props
  const [{ configs }] = useConfig()

  const limitDays = maxDays ?? parseInt(configs?.max_days_preorder?.value, 10)

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
