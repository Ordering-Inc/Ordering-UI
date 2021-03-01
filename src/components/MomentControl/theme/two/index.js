import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { MomentOption, useLanguage, useUtils, useConfig } from 'ordering-components'
import BsPencil from '@meronex/icons/bs/BsPencil'
import SuBackward from '@meronex/icons/su/SuBackward'
import { DeliveryDateContent } from '../../../DeliveryDateContent'
import {
  Days,
  Day,
  DayName,
  DayNumber,
  ContentDay,
  Hours,
  Hour,
  Title,
  MiddleLine,
  WrapToggle,
  Tab,
  Header
} from './styles'

const MomentControlUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
    handleChangeDate,
    handleChangeTime
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const [isAsapSelected, setIsAsapSelected] = useState(isAsap)
  const [isSchedule, setIsSchedule] = useState(false)
  const [editDeliveryDateModalOpen, setEditDeliveryDateModalOpen] = useState(false)

  const handleSelectAsap = () => {
    handleAsap()
    setIsSchedule(false)
    setIsAsapSelected(true)
  }
  const handleIsSchedule = () => {
    setIsAsapSelected(false)
    setIsSchedule(true)
  }

  useEffect(() => {
    setIsAsapSelected(isAsap)
    setIsSchedule(!isAsap)
  }, [isAsap])

  return (
    <div id='moment_control'>
      <Header>
        <Title>
          {t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}
        </Title>
        <span onClick={() => setEditDeliveryDateModalOpen(!editDeliveryDateModalOpen)}>
          {editDeliveryDateModalOpen ? <SuBackward /> : <BsPencil />}
        </span>
      </Header>
      {!editDeliveryDateModalOpen ? (
        <>
          <Days name='days'>
            {
              datesList.slice(0, 6).map(date => {
                const dateParts = date.split('-')
                const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 3).toUpperCase()
                const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                return (
                  <Day key={dayNumber} selected={dateSelected === date} onClick={() => handleChangeDate(date)}>
                    <ContentDay className='content-day'>
                      <DayName>{dayName}</DayName>
                      <DayNumber>{dayNumber}</DayNumber>
                    </ContentDay>
                  </Day>
                )
              })
            }
            <MiddleLine />
          </Days>
          <Title>{t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')}</Title>
          <WrapToggle>
            <Tab selected={isAsapSelected} onClick={() => handleSelectAsap()}>
              {t('ASAP', 'As soon as possible')}
            </Tab>
            <Tab selected={isSchedule} onClick={() => handleIsSchedule()}>
              {t('SCHEDULE_FOR_LATER', 'Schedule for later')}
            </Tab>
          </WrapToggle>
          {isSchedule && (
            <Hours name='hours'>
              {
                hoursList.map((hour, i) => (
                  <Hour
                    key={i}
                    selected={timeSelected === hour.startTime}
                    onClick={() => handleChangeTime(hour.startTime)}
                  >
                    {configs?.format_time?.value === '12' ? (
                      hour.startTime.includes('12')
                        ? `${hour.startTime}PM`
                        : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
                    ) : (
                      parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
                    )}
                  </Hour>
                ))
              }
            </Hours>
          )}
        </>
      ) : (
        <DeliveryDateContent
          dateSelected={dateSelected}
          timeSelected={timeSelected}
          handleChangeDate={handleChangeDate}
          handleChangeTime={handleChangeTime}
        />
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
