import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Select } from '../../styles/Select'
import { MomentOption, useLanguage, useUtils, useConfig, useOrder } from 'ordering-components'
import { Alert } from '../../../../../components/Confirm'
import {
  Days, Hours, Title, ButtonGroup
} from './styles'
import { Button } from '../../styles/Buttons'

const MomentControlUI = (props) => {
  const {
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
  const [dateListOptions, setDateListOptions] = useState([])
  const [hoursListOptions, setHoursListOptions] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleDeliveryNow = () => {
    handleAsap()
    onClose && onClose()
  }

  const handleSchedule = () => {
    if (timeSelected) {
      onClose && onClose()
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_A_TIME', 'Please select a time')
      })
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    const _dateListOptions = datesList.slice(0, 6).map(date => {
      const dateParts = date.split('-')
      const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7))
      const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
      return {
        value: date,
        content: (
          <span>{dayName} {dayNumber}</span>
        )
      }
    })
    setDateListOptions(_dateListOptions)

    const _hoursListOptions = hoursList.map((hour, i) => {
      return {
        value: hour.startTime,
        content: (
          configs?.format_time?.value === '12' ? (
            hour.startTime.includes('12')
              ? `${hour.startTime}PM`
              : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
          ) : (
            parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
          )
        )
      }
    })
    setHoursListOptions(_hoursListOptions)
  }, [datesList])

  return (
    <>
      <div id='moment_control'>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />
        ))}
        <Title>{t('CHOOSE_A_HOUR', 'Choose a hour')}</Title>
        <Days name='days'>
          <Select
            options={dateListOptions}
            defaultValue={dateSelected}
            onChange={(date) => handleChangeDate(date)}
          />
        </Days>
        <Hours name='hours'>
          <Select
            options={hoursListOptions}
            defaultValue={timeSelected}
            placeholder={t('SELECT_A_TIME', 'select a time')}
            onChange={(hour) => handleChangeTime(hour)}
          />
        </Hours>
        <ButtonGroup>
          <Button
            color='primary'
            type='button'
            disabled={orderState.loading}
            onClick={() => handleSchedule()}
          >
            {t('SCHEDULE', 'Schedule')}
          </Button>
          <Button
            color='secundary'
            type='button'
            disabled={orderState.loading}
            onClick={() => handleDeliveryNow()}
          >
            {t('DELIVERY_NOW', 'Delivery Now')}
          </Button>
        </ButtonGroup>
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />
        ))}
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))}
      </div>
      <Alert
        title={t('TIME', 'Time')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
