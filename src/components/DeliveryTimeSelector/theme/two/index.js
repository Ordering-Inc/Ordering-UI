import React, { useEffect, useState } from 'react'
import { MomentOption, useLanguage, useConfig, useOrder, useUtils } from 'ordering-components'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import BsDot from '@meronex/icons/bs/BsDot'
import { Modal } from '../../../Modal/theme/two'
import { MomentContent } from '../../../MomentContent/theme/two'
import {
  WrapTimeSelect,
  Selector,
  WrapMomentContainer
} from './styles'

const DeliveryTimeSelectorUI = (props) => {
  const {
    handleAsap
  } = props
  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
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
      <WrapTimeSelect>
        <Selector onClick={() => handleTimeSelect('asap')}>
          {timeAsapSelected ? (
            <MdRadioButtonChecked />
          ) : (
            <MdRadioButtonUnchecked />
          )}
          <span>{t('ASAP', 'ASAP')}</span>
          <BsDot />
          <span>44 - 55</span>
          <span>{t('MINS', 'mins')}</span>
        </Selector>
        <Selector onClick={() => handleTimeSelect('schedule')}>
          {scheduleSelected ? (
            <MdRadioButtonChecked />
          ) : (
            <MdRadioButtonUnchecked />
          )}
          <span>
            {orderStatus.options?.moment
              ? parseDate(orderStatus.options?.moment, { outputFormat: configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
              : t('SCHEDULE_FOR_LATER', 'Schedule for later')}
          </span>
        </Selector>
      </WrapTimeSelect>
      <Modal
        width='70%'
        open={modalOpen}
        closeOnBackdrop
        onClose={() => setModalOpen(false)}
        padding='0'
      >
        <WrapMomentContainer>
          <MomentContent />
        </WrapMomentContainer>
      </Modal>
    </>
  )
}

export const DeliveryTimeSelector = (props) => {
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
    UIComponent: DeliveryTimeSelectorUI
  }
  return <MomentOption {...momentProps} />
}
