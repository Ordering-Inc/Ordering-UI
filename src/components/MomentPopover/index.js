import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow } from './styles'
import { MomentControl } from '../MomentControl'

export const MomentPopover = (props) => {
  const { open } = props
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
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
    forceUpdate && forceUpdate()
  }, [open, orderStatus])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
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

  const momentProps = {
    // minDate: new Date('2020-09-22 18:00'),
    maxDate: new Date('2020-09-30 10:00')
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}>{orderStatus.options?.moment || t('ASAP', 'ASAP')}</HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        {/* <div style={{ fontSize: '25px', fontWeight: 'bold' }}>{t('SELECT_A_DATE', 'Select a date')}</div> */}
        {/* <AddressList
          popover
          changeOrderAddressWithDefault
        /> */}
        <MomentControl {...momentProps} />
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
