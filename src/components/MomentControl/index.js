import React from 'react'

import { MomentOption } from 'ordering-components'
import { useLanguage } from 'ordering-components/_modules/contexts/LanguageContext'
import { Days, Day, DayName, DayNumber, ContentDay, Hours, Hour } from './styles'

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
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <h2>{t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}</h2>
      <Days>
        {
          datesList.slice(0, 6).map(date => {
            const _date = new Date(date)
            const dayName = t('DAY' + _date.getDay()).substring(0, 3).toUpperCase()
            const dayNumber = (_date.getDate() + 1 < 10 ? '0' : '') + (_date.getDate() + 1)
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
      </Days>
      <h2>{t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')}</h2>
      <Hours>
        <Hour selected={isAsap} onClick={() => handleAsap()}>{t('ASAP', 'As soon as posible')}</Hour>
        {/* <Hour>{t('SCHEDULE_FOR_LATER', 'Schedule for later')}</Hour> */}
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

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
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
