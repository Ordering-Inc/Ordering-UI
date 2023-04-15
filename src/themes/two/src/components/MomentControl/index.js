import React, { useState } from 'react'
import moment from 'moment'
import { MomentOption, useLanguage, useUtils, useConfig, useOrder } from 'ordering-components'

import { Days, Day, DayName, DayNumber, ContentDay, Hours, Hour, Title, MomentContainer } from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { Modal } from '../Modal'
import FaRegClock from '@meronex/icons/fa/FaRegClock'

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
    isModalBehavior
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime, parseDate }] = useUtils()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const [orderState] = useOrder()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const Content = () => {
    return (
      <>
        <Title>{t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')}</Title>
        <Days name='days'>
          {
            datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10)).map(date => {
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
        </Days>
        <Title>{t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')}</Title>
        <Hours name='hours'>
          <Hour
            selected={isAsap}
            onClick={() => !orderState.loading && handleAsap()}
            isLoading={orderState?.loading}
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
                onClick={() => !orderState.loading && handleChangeTime(hour.startTime)}
                isLoading={orderState?.loading}
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
      </>
    )
  }
  return (
    <div id='moment_control'>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {isModalBehavior && (
        <MomentContainer onClick={() => setModalIsOpen(true)}>
          <FaRegClock id='icon' />
          {orderState?.options?.moment
            ? parseDate(orderState?.options?.moment, { outputFormat: configs?.dates_moment_format?.value })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </MomentContainer>
      )}
      {isModalBehavior ? (
          <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
          >
            <Content />
          </Modal>
        ) : (
          <Content />
        )
      }
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
  const [{ configs }] = useConfig()
  const limitDays = parseInt(configs?.max_days_preorder?.value, 10)
  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const dateProps = {
    maxDate: currentDate
  }

  const momentProps = {
    ...props,
    ...dateProps,
    UIComponent: MomentControlUI
  }
  return <MomentOption {...momentProps} />
}
