import React, { useRef, useEffect } from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { usePopper } from 'react-popper'
import { getHourMin } from '../../../../../utils'
import { Container, HeaderItem, PopoverBody, PopoverArrow, TimeItem } from './styles'
import EnChevronThinDown from '@meronex/icons/en/EnChevronThinDown'

import BsDot from '@meronex/icons/bs/BsDot'
export const AllDayPopover = (props) => {
  const {
    open,
    menus,
    filterByMenus,
    handleChangeFilterByMenus
  } = props
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 0]
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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', maxHeight: '70vh', overflowY: 'auto' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  const onChangeFilterByMenus = (menuId) => {
    handleChangeFilterByMenus(menuId)
    props.onClose()
  }

  return (
    <Container className='allDay-popover' style={{ overflow: 'hidden' }}>
      <HeaderItem
        ref={referenceElement}
        isHome={props.isHome}
      >
        <h3 onClick={props.onClick}>{t('ALL_DAY', 'All Day')} <EnChevronThinDown /></h3>
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        {menus.map(menu => (
          <TimeItem
            key={menu.id}
            active={menu.id === filterByMenus}
            onClick={() => onChangeFilterByMenus(menu.id)}
          >
            <p>{menu?.name}</p>
            {menu.schedule.map((_schedule, index) => (
              <p key={index}>
                <span>{getHourMin(_schedule?.lapses[0]?.open?.hour, _schedule?.lapses[0]?.open?.minute)}</span>
                <BsDot />
                <span>{getHourMin(_schedule?.lapses[0]?.close?.hour, _schedule?.lapses[0]?.close?.minute)}</span>
              </p>
            ))}
          </TimeItem>
        ))}
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </Container>
  )
}
