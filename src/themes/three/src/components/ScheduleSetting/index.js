import React, { useEffect, useState } from 'react'
import { MomentOption, useUtils, useOrder, useConfig, useLanguage } from 'ordering-components'
import { MomentContent } from '../MomentContent'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import { Modal } from '../../../../../components/Modal'
import {
  Moment,
  MomentContentWrapper,
  Header,
  Title,
  Container
} from './styles'

const ScheduleSettingUI = (props) => {
  const {
    title,
    isRadioButtonStyle,
    deliveryTime,
    handleAsap
  } = props
  const [{ parseDate }] = useUtils()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const [timeAsapSelected, setTimeAsapSelected] = useState(true)
  const [scheduleSelected, setScheduleSelected] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleTimeSelect = (type) => {
    if (type === 'asap') {
      handleAsap()
      if (scheduleSelected && !timeAsapSelected) {
        setScheduleSelected(false)
      }
      setTimeAsapSelected(true)
    }
    if (type === 'schedule') {
      setModalOpen(true)
      if (timeAsapSelected && !scheduleSelected) {
        setTimeAsapSelected(false)
      }
      setScheduleSelected(true)
    }
  }

  useEffect(() => {
    if (orderStatus.options?.moment) {
      setTimeAsapSelected(false)
      setScheduleSelected(true)
    } else {
      setTimeAsapSelected(true)
      setScheduleSelected(false)
    }
  }, [orderStatus.options?.moment])
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <Container>
        <Header>
          <Title>{title}</Title>
          {deliveryTime && (
            <Title>
              {deliveryTime}
            </Title>
          )}
        </Header>
        <Moment
          active={timeAsapSelected}
          onClick={() => handleTimeSelect('asap')}
          isRadioButtonStyle={isRadioButtonStyle}
        >
          {isRadioButtonStyle && (
            <>
              {timeAsapSelected ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
            </>
          )}
          {t('RIGHT_NOW', 'Right now')}
        </Moment>
        <Moment
          active={scheduleSelected}
          isRadioButtonStyle={isRadioButtonStyle}
          onClick={() => handleTimeSelect('schedule')}
        >
          {isRadioButtonStyle && (
            <>
              {scheduleSelected ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
            </>
          )}
          {orderStatus.options?.moment
            ? parseDate(orderStatus.options?.moment, { outputFormat: configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
            : t('SCHEDULE', 'Schedule')}
        </Moment>

        <Modal
          width='50%'
          open={modalOpen}
          closeOnBackdrop
          onClose={() => setModalOpen(false)}
          padding='0'
        >
          <MomentContentWrapper>
            <MomentContent
              onClose={() => setModalOpen(false)}
            />
          </MomentContentWrapper>
        </Modal>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}

export const ScheduleSetting = (props) => {
  const [{ configs }] = useConfig()
  const limitDays = configs?.max_days_preorder?.value
  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const momentProps = {
    ...props,
    maxDate: currentDate,
    UIComponent: ScheduleSettingUI
  }
  return <MomentOption {...momentProps} />
}
