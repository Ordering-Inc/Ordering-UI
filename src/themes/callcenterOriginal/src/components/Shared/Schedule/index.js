import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useConfig,
  Schedule as ScheduleController
} from 'ordering-components'
import {
  Trash,
  PlusSquare,
  PlusCircleFill,
  DashCircleFill
} from 'react-bootstrap-icons'
import { Alert, Confirm } from '../Confirm'
import { ScheduleCopyTimes } from '../ScheduleCopyTimes'
import { SecondSelect as DefaultSelect, Checkbox } from '../../../styles'

import {
  ScheduleContainer,
  TimeScheduleItemContainer,
  Option,
  SplitLine,
  IconWrapper,
  SelectWrapper,
  AddScheduleIconWrapper,
  TrashIconWrapper
} from './styles'

const ScheduleUI = (props) => {
  const {
    scheduleState,
    isConflict,
    setIsConflict,
    isTimeChangeError,
    addScheduleTime,
    openAddSchedule,
    setIsTimeChangeError,
    handleEnabledSchedule,
    handleChangeScheduleTime,
    handleDeleteSchedule,
    handleOpenAddSchedule,
    handleChangeAddScheduleTime,
    handleAddSchedule,
    selectedCopyDays,
    cleanSelectedCopyDays,
    handleSelectCopyTimes,
    handleApplyScheduleCopyTimes
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const is12Hours = configs.format_time?.value === '12'

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [scheduleOptions, setScheduleOptions] = useState([])
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tue'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thu'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]

  const closeAlert = () => {
    setIsConflict(false)
    setIsTimeChangeError(false)
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDelete = (daysOfWeekIndex, index) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('SCHEDULE', 'Schedule')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSchedule(daysOfWeekIndex, index)
      }
    })
  }

  useEffect(() => {
    if (!isTimeChangeError) return
    setAlertState({
      open: true,
      content: [t('END_TIME_LATER', 'Choose an end time later than the start time.')]
    })
  }, [isTimeChangeError])

  useEffect(() => {
    if (!isConflict) return
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    })
  }, [isConflict])

  useEffect(() => {
    const _scheduleOptions = []
    for (let hour = 0; hour < 24; hour++) {
      let hh = ''
      let meridian = ''
      if (!is12Hours) hh = hour < 10 ? `0${hour}` : hour
      else {
        if (hour === 0) {
          hh = '12'
          meridian = ' ' + t('AM', 'AM')
        } else if (hour > 0 && hour < 12) {
          hh = (hour < 10 ? '0' + hour : hour)
          meridian = ' ' + t('AM', 'AM')
        } else if (hour === 12) {
          hh = '12'
          meridian = ' ' + t('PM', 'PM')
        } else {
          hh = ((hour - 12 < 10) ? '0' + (hour - 12) : (hour - 12))
          meridian = ' ' + t('PM', 'PM')
        }
      }
      for (let min = 0; min < 4; min++) {
        _scheduleOptions.push({
          value: hour + ':' + min * 15,
          content: (
            <Option>
              {is12Hours ? (
                <>
                  {hh}:{min === 0 ? '00' : min * 15} {meridian}
                </>
              ) : (
                <>
                  {hh} : {min === 0 ? '00' : min * 15}
                </>
              )}
            </Option>
          )
        })
      }
    }
    _scheduleOptions.push({
      value: '23:59',
      content: (
        <Option>{is12Hours ? '11:59 PM' : '23 : 59'}</Option>
      )
    })
    setScheduleOptions(_scheduleOptions)
  }, [])

  return (
    <>
      <ScheduleContainer>
        {scheduleState.map((schedule, daysOfWeekIndex) => (
          <TimeScheduleItemContainer
            key={daysOfWeekIndex}
          >
            <div>
              <Checkbox
                checked={schedule?.enabled}
                onChange={e => handleEnabledSchedule(daysOfWeekIndex, e.target.checked)}
              />
              <h4>{daysOfWeek[daysOfWeekIndex]}</h4>
            </div>
            {schedule?.enabled ? (
              <div>
                {schedule?.lapses.map((lapse, index) => (
                  <div
                    key={index}
                  >
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          lapse?.open?.hour === 23 && lapse?.open?.minute === 59
                            ? `${lapse?.open?.hour}:${lapse?.open?.minute}`
                            : `${lapse?.open?.hour}:${parseInt(lapse?.open?.minute / 15) * 15}`
                        }
                        onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, true)}
                        optionInnerMaxHeight='300px'
                      />
                    </SelectWrapper>
                    <SplitLine />
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          lapse?.close?.hour === 23 && lapse?.close?.minute === 59
                            ? `${lapse?.close?.hour}:${lapse?.close?.minute}`
                            : `${lapse?.close?.hour}:${parseInt(lapse?.close?.minute / 15) * 15}`
                        }
                        onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, false)}
                        optionInnerMaxHeight='300px'
                      />
                    </SelectWrapper>
                    <TrashIconWrapper
                      isHide={schedule?.lapses.length <= 1}
                    >
                      <Trash
                        onClick={() => onClickDelete(daysOfWeekIndex, index)}
                      />
                    </TrashIconWrapper>
                  </div>
                ))}
                {openAddSchedule[daysOfWeekIndex] && (
                  <div>
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          addScheduleTime?.open?.hour === 23 && addScheduleTime?.open?.minute === 59
                            ? `${addScheduleTime?.open?.hour}:${addScheduleTime?.open?.minute}`
                            : `${addScheduleTime?.open?.hour}:${parseInt(addScheduleTime?.open?.minute / 15) * 15}`
                        }
                        optionInnerMaxHeight='300px'
                        onChange={val => handleChangeAddScheduleTime(val, true)}
                      />
                    </SelectWrapper>
                    <SplitLine />
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          addScheduleTime?.close?.hour === 23 && addScheduleTime?.close?.minute === 59
                            ? `${addScheduleTime?.close?.hour}:${addScheduleTime?.close?.minute}`
                            : `${addScheduleTime?.close?.hour}:${parseInt(addScheduleTime?.close?.minute / 15) * 15}`
                        }
                        optionInnerMaxHeight='300px'
                        onChange={val => handleChangeAddScheduleTime(val, false)}
                      />
                    </SelectWrapper>
                    <AddScheduleIconWrapper>
                      <PlusCircleFill
                        onClick={() => handleAddSchedule(daysOfWeekIndex)}
                      />
                      <DashCircleFill
                        onClick={() => handleOpenAddSchedule(null)}
                      />
                    </AddScheduleIconWrapper>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p>{t('UNAVAILABLE', 'Unavailable')}</p>
              </div>
            )}
            <div>
              <IconWrapper
                isHide={!schedule?.enabled}
              >
                <PlusSquare
                  onClick={() => handleOpenAddSchedule(daysOfWeekIndex)}
                />
              </IconWrapper>
              <ScheduleCopyTimes
                disabled={!schedule?.enabled}
                cleanSelectedCopyDays={cleanSelectedCopyDays}
                open={isOpenCopytimes === daysOfWeekIndex}
                daysOfWeekIndex={daysOfWeekIndex}
                onClick={setIsOpenCopytimes}
                onClose={() => setIsOpenCopytimes(null)}
                selectedCopyDays={selectedCopyDays}
                handleSelectDays={(value) => handleSelectCopyTimes(value)}
                handleApplyScheduleCopyTimes={handleApplyScheduleCopyTimes}
              />
            </div>
          </TimeScheduleItemContainer>
        ))}
      </ScheduleContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const Schedule = (props) => {
  const scheduleProps = {
    ...props,
    UIComponent: ScheduleUI
  }
  return (
    <ScheduleController {...scheduleProps} />
  )
}
