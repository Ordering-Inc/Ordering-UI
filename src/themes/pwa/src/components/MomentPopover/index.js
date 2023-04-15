import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage, useUtils, useConfig } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow } from './styles'
import { MomentContent } from '../MomentContent'
import FaRegClock from '@meronex/icons/fa/FaRegClock'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'

export const MomentPopover = (props) => {
  const { open, isBanner } = props
  const [{ configs }] = useConfig()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const bannerProperProperty = {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 15]
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false // default is true
        }
      }
    ]
  }

  const normalProperProperty = {
    placement: 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  }

  let popper = usePopper(
    referenceElement.current,
    popperElement.current,
    normalProperProperty
  )

  if (isBanner) {
    popper = usePopper(
      referenceElement.current,
      popperElement.current,
      bannerProperProperty
    )
  }

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    if (orderStatus.loading) return
    // forceUpdate && forceUpdate()
  }, [open, orderStatus])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: `${isBanner ? '80vw' : '450px'} `, maxHeight: '70vh', overflowY: 'auto', transform: `${isBanner ? 'translateX(-5vw)' : ''}` }

  return (
    <div className='moment-popover' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderItem
        ref={referenceElement}
        onClick={configs?.max_days_preorder?.value === -1 || configs?.max_days_preorder?.value === 0 ? null : props.onClick}
        isHome={props.isHome}
        isBanner={isBanner}
      >
        <FaRegClock />
        {orderStatus.options?.moment
          ? parseDate(orderStatus.options?.moment, { outputFormat: configs?.dates_moment_format?.value })
          : t('ASAP_ABBREVIATION', 'ASAP')}
        {isBanner && <BsChevronDown />}
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <MomentContent />
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}
