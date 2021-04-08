import React, { useRef, useEffect } from 'react'
import {
  useEvent,
  useOrder,
  useUtils,
  useConfig,
  useLanguage
} from 'ordering-components'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow
} from './styles'

import { DeliveryDetailsContent } from '../DeliveryDetailsContent'

export const DeliveryDetailsPopover = (props) => {
  const {
    open,
    auth,
    addressState
  } = props
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const testElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom',
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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  const handleMapDragging = (value) => (testElement.current = { isMapDragging: value })
  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') ||
      !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal && !testElement.current?.isMapDragging) {
      props.onClose && props.onClose()
    }
    handleMapDragging(false)
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
    forceUpdate && forceUpdate()
  }, [open, orderState])

  useEffect(() => {
    events.on('map_is_dragging', handleMapDragging)
    return () => events.off('map_is_dragging', handleMapDragging)
  }, [])

  return (
    <div className='delivery-details-popover' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <HeaderItem ref={referenceElement} onClick={props.onClick}>
        <p>
          {orderState.options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
        </p>
        <span> - </span>
        <p>
          {orderState.options?.moment
            ? parseDate(orderState.options?.moment, { outputFormat: configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </p>
      </HeaderItem>
      <PopoverBody className='form_edit' ref={popperElement} style={popStyle} {...attributes.popper}>
        {open && (
          <DeliveryDetailsContent
            auth={auth}
            addressState={addressState}
            onClose={props.onClose}
          />
        )}
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </div>
  )
}
