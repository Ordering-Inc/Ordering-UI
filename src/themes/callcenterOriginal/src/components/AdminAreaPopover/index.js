import React, { useRef, useEffect } from 'react'
import { useLanguage, useEvent } from 'ordering-components'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  PopoverListLink,
  AdminSection
} from './styles'
import { capitalize } from '../../../../../utils'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'

const optionsDefault = [
  { name: 'orderlist', pathname: '/orderlist', displayName: 'order list', key: 'ORDER_LIST' },
  { name: 'deliveries', pathname: '/deliveries', displayName: 'delivery dashboard', key: 'DELIVERY_DASHBOARD' },
  { name: 'drivers_dashboard', pathname: '/drivers', displayName: 'drivers dashboard', key: 'DRIVERS_DASHBOARD' }
]

export const AdminAreaPopover = (props) => {
  const {
    open,
    isHome
  } = props
  const [, t] = useLanguage()
  const [events] = useEvent()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const options = optionsDefault
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

  const { styles, attributes } = popper

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

  const handleGoToPage = (page) => {
    events.emit('go_to_page', { page })
    props.onClick && props.onClick()
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem
        isHome={isHome}
        ref={referenceElement}
        isOpen={open}
        onClick={props.onClick}
      >
        <AdminSection>
          <p>
            {t('ADMIN_AREA', 'Admin Area')}
          </p>
          <BisDownArrow />
        </AdminSection>

      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          {options && options.length > 0 && (
            options.map((option, i) => (
              <PopoverListLink
                key={i}
                active={window.location.pathname === option.pathname}
                onClick={() => handleGoToPage(option.name)}
              >
                {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
              </PopoverListLink>
            ))
          )}
        </PopoverList>
      </PopoverBody>
    </div>
  )
}
