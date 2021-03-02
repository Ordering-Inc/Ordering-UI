import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {
  Container,
  WrapCalendar,
  WrapTimeSelect,
  Option,
  TimeSelectContent
} from './styles'
import { Select } from '../../../../styles/Select/theme/two'
import { Button } from '../../../../styles/Buttons/theme/two'

export const DeliveryDateContent = (props) => {
  const {
    timeSelected,
    dateSelected,
    handleChangeDate,
    handleChangeTime
  } = props
  const [, t] = useLanguage()
  const [dateValue, onDateValueChange] = useState(new Date(dateSelected))
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [AP, setAP] = useState(0)
  const hoursOptions = [
    { value: 0, content: <Option>00</Option> },
    { value: 1, content: <Option>01</Option> },
    { value: 2, content: <Option>02</Option> },
    { value: 3, content: <Option>03</Option> },
    { value: 4, content: <Option>04</Option> },
    { value: 5, content: <Option>05</Option> },
    { value: 6, content: <Option>06</Option> },
    { value: 7, content: <Option>07</Option> },
    { value: 8, content: <Option>08</Option> },
    { value: 9, content: <Option>09</Option> },
    { value: 10, content: <Option>10</Option> },
    { value: 11, content: <Option>11</Option> }
  ]
  const minsOptions = [
    { value: 0, content: <Option>00</Option> },
    { value: 15, content: <Option>15</Option> },
    { value: 30, content: <Option>30</Option> },
    { value: 45, content: <Option>45</Option> }
  ]

  const morningAfterOptions = [
    { value: 0, content: <Option>{t('AM', 'AM')}</Option> },
    { value: 1, content: <Option>{t('PM', 'PM')}</Option> }
  ]

  useEffect(() => {
    if (timeSelected === null) return
    const _hour = parseInt(timeSelected.split(':')[0])
    const _min = parseInt(timeSelected.split(':')[1])
    setHour(_hour < 12 ? _hour : _hour - 12)
    setMinute(_min)
  }, [timeSelected])

  const handleSaveDate = () => {
    const deliveryTime = AP === 0 ? `${hour}:${minute}` : `${hour + 12}:${minute}`
    handleChangeTime(deliveryTime)
  }

  useEffect(() => {
    const deliveryDate = dateValue.toLocaleDateString().split('/')
    handleChangeDate(`${deliveryDate[2]}-${deliveryDate[0]}-${deliveryDate[1]}`)
  }, [dateValue])
  return (
    <Container>
      <WrapCalendar>
        <Calendar
          onChange={onDateValueChange}
          minDate={new Date()}
          value={dateValue}
          calendarType='US'
        />
      </WrapCalendar>

      <WrapTimeSelect>
        <p>{t('DELIVERY_TIME', 'Delivery Time')}</p>
        <TimeSelectContent>
          <Select
            defaultValue={hour}
            options={hoursOptions}
            onChange={(hour) => setHour(hour)}
          />
          <span>:</span>
          <Select
            defaultValue={minute}
            options={minsOptions}
            onChange={(min) => setMinute(min)}
          />
          <Select
            defaultValue={AP}
            options={morningAfterOptions}
            onChange={(ap) => setAP(ap)}
          />
        </TimeSelectContent>
      </WrapTimeSelect>
      <Button color='primary' borderRounded onClick={() => handleSaveDate()}>
        {t('SAVE_DATE', 'Save Date')}
      </Button>
    </Container>
  )
}
