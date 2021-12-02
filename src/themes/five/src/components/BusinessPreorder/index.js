import React, { useEffect, useState } from 'react'
import {
  useUtils,
  useLanguage,
  MomentOption,
  useConfig
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { Select } from '../../styles/Select'
import { Button } from '../../styles/Buttons'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
// import DatePicker from 'react-horizontal-datepicker'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
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
  TimeItem
} from './styles'
import { BusinessMenuList } from '../BusinessMenuList'
import DatePicker from 'react-horizontal-datepicker'

const BusinessPreorderUI = (props) => {
  const {
    business,
    handleClick,
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
    handleChangeDate,
    handleChangeTime
  } = props

  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const [selectDate, setSelectedDate] = useState(new Date())
  const [type, setType] = useState('business_menu')
  const [menu, setMenu] = useState(null)
  const [timeList, setTimeList] = useState([])

  const selectedDay = (val) => {
    setSelectedDate(val)
    if (handleChangeDate) {
      const date = (val.getDate() < 10 ? '0' : '') + val.getDate()
      const month = ((val.getMonth() + 1) < 10 ? '0' : '') + (val.getMonth() + 1)
      const year = val.getFullYear()
      const fullDate = `${year}-${month}-${date}`
      handleChangeDate(fullDate)
    }
  }

  const preOrderType = [
    { value: 'business_menu', content: <TypeContent>{t('BUSINESS_MENU', 'Business menu')}</TypeContent> },
    { value: 'business_hours', content: <TypeContent>{t('BUSINESS_HOURS', 'Business hours')}</TypeContent> }
  ]

  const goToBusinessPage = () => {
    handleClick && handleClick(business)
  }

  const getTimes = (curdate, menu) => {
    // var date = new Date().toLocaleString('en-US', { timeZone: gBusiness.getData().timezone })
    const date = new Date()
    var dateSeleted = new Date(curdate)
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
          if (configs.time_format.value === '24') hour = i < 10 ? '0' + i : i
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

  const handleTimeChange = (time) => {
    handleChangeTime(time)
  }

  useEffect(() => {
    if (!menu) return
    const _times = getTimes(selectDate, menu)
    setTimeList(_times)
  }, [selectDate])

  useEffect(() => {
    if (document.querySelector('.Datepicker--button-prev')) document.querySelector('.Datepicker--button-prev').innerHTML = '◄'
    if (document.querySelector('.Datepicker--button-next')) document.querySelector('.Datepicker--button-next').innerHTML = '►'
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
          <DatePicker
            getSelectedDay={selectedDay}
            shouldScroll={windowSize < 576}
            selectDate={selectDate}
            endDate={5}
          />
        </DateWrapper>

        <TimeListWrapper>
          {timeList.map((time, i) => (
            <TimeItem
              key={i}
              active={timeSelected === time.value}
              onClick={() => handleTimeChange(time.value)}
            >
              <span>{time.value}</span>
            </TimeItem>
          ))}
        </TimeListWrapper>
      </OrderTimeWrapper>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={goToBusinessPage}
        >
          {t('GO_TO_MENU', 'Go to menu')}
          <BsArrowRight />
        </Button>
      </ButtonWrapper>
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
