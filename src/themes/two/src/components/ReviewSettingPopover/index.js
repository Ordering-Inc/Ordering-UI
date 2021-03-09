import React, { useEffect, useRef } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillStar from '@meronex/icons/ai/AiFillStar'
import BiChevronDown from '@meronex/icons/bi/BiChevronDown'
import { ReviewSettingContent } from '../ReviewSettingContent'
import { Button } from '../../styles/Buttons'
import {
  HeaderItem,
  PopoverBody,
  WrapButtonText,
  Border
} from './styles'

export const ReviewSettingPopover = (props) => {
  const {
    open,
    reviewQuality,
    handleReviewSettingValue
  } = props
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()

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

  return (
    <div className='review-setting-popover'>
      <HeaderItem
        ref={referenceElement}
      >
        <Button
          color='secondary'
        >
          <WrapButtonText>
            <span>{t('OVER', 'OVER')}</span>
            <span>{reviewQuality}</span>
            <span><AiFillStar /></span>
            <Border>|</Border>
            <span><BiChevronDown onClick={props.onClick} /></span>
          </WrapButtonText>
        </Button>
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          <ReviewSettingContent
            handleReviewSettingValue={handleReviewSettingValue}
            onClose={props.onClose}
          />
        </PopoverBody>
      )}
    </div>
  )
}
