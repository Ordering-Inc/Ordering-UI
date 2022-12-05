import React, { useRef, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { useLanguage } from 'ordering-components'
import MdcContentCopy from '@meronex/icons/mdc/MdcContentCopy'
import { Button } from '../../../styles'

import {
  HeaderItem,
  PopoverBody,
  Title,
  PopoverList,
  CopyItem
} from './styles'

export const ScheduleCopyTimes = (props) => {
  const {
    disabled,
    open,
    daysOfWeekIndex,
    selectedCopyDays,
    handleSelectDays,
    cleanSelectedCopyDays,
    handleApplyScheduleCopyTimes
  } = props
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()

  const daysOptions = [
    { value: 0, content: t('DAY7', 'Sunday') },
    { value: 1, content: t('DAY1', 'Monday') },
    { value: 2, content: t('DAY2', 'Tuesday') },
    { value: 3, content: t('DAY3', 'Wednesday') },
    { value: 4, content: t('DAY4', 'Thursday') },
    { value: 5, content: t('DAY5', 'Friday') },
    { value: 6, content: t('DAY6', 'Saturday') }
  ]

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    cleanSelectedCopyDays()
  }, [open])

  return (
    <div style={{ position: 'relative' }}>
      <HeaderItem
        ref={referenceElement}
        disabled={disabled}
        onClick={() => props.onClick(daysOfWeekIndex)}
      >
        <MdcContentCopy />
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          <Title>{t('COPY_TIMES_TO', 'Copy times to')}</Title>
          <PopoverList>
            {daysOptions.map(option => (
              <React.Fragment key={option.value}>
                <CopyItem
                  disabled={option.value === daysOfWeekIndex}
                  isChecked={selectedCopyDays.includes(option.value)}
                  onClick={() => handleSelectDays(option.value)}
                >
                  {(option.value === daysOfWeekIndex || selectedCopyDays.includes(option.value)) ? (
                    <RiCheckboxFill />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                  <span>
                    {option.content}
                  </span>
                </CopyItem>
              </React.Fragment>
            ))}
          </PopoverList>
          <Button
            color='primary'
            onClick={() => {
              handleApplyScheduleCopyTimes(daysOfWeekIndex)
              props.onClose && props.onClose()
            }}
          >
            {t('APPLY', 'Apply')}
          </Button>
        </PopoverBody>
      )}
    </div>
  )
}
