import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage, useConfig } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow } from './styles'
import { MomentControl } from '../MomentControl'
import { FaRegClock } from 'react-icons/fa'

export const MomentPopover = (props) => {
  const { open } = props
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [, { parseDate }] = useConfig()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
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
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    if (orderStatus.loading) return
    forceUpdate && forceUpdate()
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

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  const currentDate = new Date()
  currentDate.setTime(currentDate.getTime() + (6 * 24 * 60 * 60 * 1000))
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const momentProps = {
    maxDate: currentDate
  }

  return (
    <div className='moment-popover' style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}>
        <FaRegClock /> {orderStatus.options?.moment ? parseDate(orderStatus.options?.moment, { outputFormat: 'MM/DD hh:mma' }) : t('ASAP_ABBREVIATION', 'ASAP')}
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <MomentControl {...momentProps} />
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
