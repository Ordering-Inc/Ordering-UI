import React from 'react'
import { MomentOption, useLanguage } from 'ordering-components'

import { Days, Day, DayName, DayNumber, ContentDay, Hours, Hour, Title, MiddleLine } from './styles'
import { useWindowSize } from '../../hooks/useWindowSize'

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

  const [, t] = useLanguage()
  const windowSize = useWindowSize()

  return (
    <>
      <Title>{t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}</Title>
      <Days>
        {
          datesList.slice(0, 6).map(date => {
            const dateParts = date.split('-')
            const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
            const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 3).toUpperCase()
            const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
            return (
              <Day key={dayNumber} selected={dateSelected === date} onClick={() => handleChangeDate(date)}>
                <ContentDay>
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
      <Hours>
        <Hour
          selected={isAsap}
          onClick={() => handleAsap()}
        >
          {windowSize.width > 410 ? (
            t('ASAP', 'As soon as possible')
          ) : (
            t('ASAP_ABBREVIATION', 'ASAP')
          )}
        </Hour>
        {
          hoursList.map((hour, i) => (
            <Hour
              key={i}
              selected={timeSelected === hour.startTime}
              onClick={() => handleChangeTime(hour.startTime)}
            >
              {hour.startTime}
            </Hour>
          ))
        }
      </Hours>
    </>
  )
}

export const MomentControl = (props) => {
  const momentProps = {
    ...props,
    UIComponent: MomentControlUI
  }
  return <MomentOption {...momentProps} />
}
