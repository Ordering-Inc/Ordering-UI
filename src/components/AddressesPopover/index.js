import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow, Container, Title } from './styles'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'

export const AddressesPopover = (props) => {
  const {
    open,
    auth,
    addressState
  } = props

  const [orderState] = useOrder()
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
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div className='address-popover' style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick} isHome={props.isHome}>
        <FaMapMarkerAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
      </HeaderItem>
      <PopoverBody className='form_edit' ref={popperElement} style={popStyle} {...attributes.popper}>
        {open && (
          <Container>
            {auth && (
              <>
                <Title>{t('ADDRESSES', 'Addresses')}</Title>
                <AddressList
                  popover
                  changeOrderAddressWithDefault
                  onClosePopover={props.onClose}
                />
              </>)}
            {!auth && (
              <>
                <Title>{t('ADDRESS', 'Address')}</Title>
                <AddressForm
                  useValidationFileds
                  address={addressState || {}}
                  onClose={() => props.onClose && props.onClose()}
                  onCancel={() => props.onClose && props.onClose()}
                  onSaveAddress={() => props.onClose && props.onClose()}
                />
              </>)}
          </Container>
        )}
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}
