import React, { useEffect, useRef } from 'react'
import { Cart3 } from 'react-bootstrap-icons'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverArrow,
  TitleContainer,
  Title
} from './styles'

import { useOrder, useEvent, useLanguage, useOrderingTheme } from 'ordering-components'
import { useTheme } from 'styled-components'
import { CartContent } from '../CartContent'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'

export const CartPopover = (props) => {
  const { open, auth, location, isCustomerMode, setPreorderBusiness } = props
  const [orderState] = useOrder()
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [orderingTheme] = useOrderingTheme()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const isChew = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: theme?.rtl ? 'bottom' : 'bottom-end',
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

  const { styles, attributes } = popper

  const isSlideBar = theme?.header?.components?.cart?.components?.open_strategy?.type === 'slide'

  useEffect(() => {
    // forceUpdate && forceUpdate()
  }, [open, orderState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    const outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target)
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      events.emit('cart_popover_closed')
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  useEffect(() => {
    props.onClose()
  }, [auth])

  useEffect(() => {
    if (location && location.pathname.includes('/checkout/')) {
      props.onClose && props.onClose()
    }
  }, [location])

  const getScrollTop = () => {
    if (document.documentElement?.scrollTop > 80) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    if (location && location.pathname.includes('/store/') && isCustomerMode) {
      window.addEventListener('scroll', getScrollTop)
    }
    return () => {
      window.removeEventListener('scroll', getScrollTop)
    }
  }, [])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', width: '450px', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <div style={{ overflow: 'hidden' }}>
        <HeaderItem ref={referenceElement} onClick={props.onClick} name='cart-popover' isChew={isChew}>
          <span>
            <Cart3 />
            {props.carts?.length > 0 && <span>{props.carts?.length}</span>}
          </span>
        </HeaderItem>
        {isSlideBar ? (
          <Modal
            open={open}
            onClose={props.onClose}
            hideCloseDefault
            isSlideBar
            slideBarPosition={theme?.header?.components?.cart?.components?.open_strategy?.position}
          >
            <TitleContainer>
              <Title>{t('MY_CART', 'My cart')}</Title>
              <Button outline color='primary' onClick={props.onClose}>
                <AiOutlineClose /> {t('CLOSE', 'Close')}
              </Button>
            </TitleContainer>
            <CartContent
              isCartPopover
              carts={props.carts}
              isOrderStateCarts={!!orderState.carts}
              onClose={props.onClose}
              setPreorderBusiness={setPreorderBusiness}
              isOpenCart={open}
              onClick={props.onClick}
              isSlideBar={isSlideBar}
            />
          </Modal>
        ) : (
          <PopoverBody className='cart-popover' ref={popperElement} style={popStyle} {...attributes.popper}>
            <CartContent
              isCartPopover
              carts={props.carts}
              isOrderStateCarts={!!orderState.carts}
              onClose={props.onClose}
              setPreorderBusiness={setPreorderBusiness}
              isOpenCart={open}
              onClick={props.onClick}
            />
            <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
          </PopoverBody>
        )}
      </div>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
