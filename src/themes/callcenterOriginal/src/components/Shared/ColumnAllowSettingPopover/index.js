import React, { useState, useRef, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { LayoutThreeColumns } from 'react-bootstrap-icons'
import { usePopper } from 'react-popper'
import { IconButton } from '../../../styles'

import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem,
  Title
} from './styles'

export const ColumnAllowSettingPopover = (props) => {
  const {
    optionsDefault,
    allowColumns,
    handleChangeAllowColumns,
    title,
    isOrder
  } = props

  const [open, setOpen] = useState(false)

  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-end',
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

  const { styles, attributes, update } = popper

  useEffect(() => {
    update && update()
  }, [open])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
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

  const popStyle = { ...styles.popper, display: open ? 'block' : 'none', minWidth: '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem>
        <IconButton
          color='black'
          ref={referenceElement}
          onClick={() => setOpen(!open)}
        >
          <LayoutThreeColumns />
        </IconButton>
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        {title && <Title>{title}</Title>}
        <PopoverList>
          {optionsDefault.map(option => (
            <AllowItem
              key={option.value}
              isChecked={isOrder ? allowColumns?.[option.value]?.visable : allowColumns[option.value]}
              onClick={() => handleChangeAllowColumns(option.value)}
            >
              {(isOrder
                ? allowColumns?.[option.value]?.visable
                : allowColumns[option.value])
                ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )}
              <span>
                {option.content}
              </span>
            </AllowItem>
          ))}
        </PopoverList>
      </PopoverBody>
    </div>
  )
}
