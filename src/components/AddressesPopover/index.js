import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage, useSession } from 'ordering-components'
import { AddressList } from '../AddressList'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow } from './styles'
import { AddressForm } from '../AddressForm'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const AddressesPopover = (props) => {
  const { open } = props
  const [orderState] = useOrder()
  const [userState] = useSession()
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
  }, [open, orderState])

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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}>
        <FaMapMarkerAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        {
          userState.auth && (
            <>
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{t('ADDRESSES', 'Addresses')}</div>
              <AddressList
                popover
                changeOrderAddressWithDefault
              />
            </>
          )
        }
        {
          !userState.auth && (
            <>
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{t('ADDRESS', 'Address')}</div>
              <AddressForm
                useValidationFileds
                address={orderState?.options?.address || {}}
                onClose={() => props.onClose && props.onClose()}
                onCancel={() => props.onClose && props.onClose()}
                onSaveAddress={() => props.onClose && props.onClose()}
              />
            </>
          )
        }
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
