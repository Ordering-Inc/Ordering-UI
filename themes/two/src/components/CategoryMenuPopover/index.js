import React, { useRef, useEffect, useState } from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { usePopper } from 'react-popper'
import { getHourMin } from '../../../../../src/utils'

import {
  Container,
  HeaderItem,
  PopoverBody,
  // PopoverArrow,
  HeaderContent,
  TitleAndTime,
  Menu
} from './styles'
import AiOutlineUnorderedList from '@meronex/icons/ai/AiOutlineUnorderedList'
import GrClose from '@meronex/icons/gr/GrClose'
import { Button } from '../../styles/Buttons'

export const CategoryMenuPopover = (props) => {
  const {
    open,
    categories,
    categorySelected,
    handlerClickCategory,
    allTime
  } = props
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [totalProducts, setTotalProducts] = useState(0)
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

  useEffect(() => {
    if (orderStatus.loading) return
    let _totalProducts = 0
    for (const category of categories) {
      if (typeof category.id === 'number') {
        _totalProducts += category.products.length
      }
    }
    setTotalProducts(_totalProducts)
  }, [categories])

  return (
    <Container className='categoryMenu-popover'>
      <HeaderItem
        ref={referenceElement}
        onClick={props.onClick}
        isHome={props.isHome}
      >
        <AiOutlineUnorderedList />
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <HeaderContent>
          <TitleAndTime>
            <h3>
              {t('ALL_DAY', 'All Day')}
            </h3>
            <p>{getHourMin(allTime?.lapses[0]?.open?.hour, allTime?.lapses[0]?.open?.minute)} - {getHourMin(allTime?.lapses[0]?.close?.hour, allTime?.lapses[0]?.close?.minute)}</p>
          </TitleAndTime>
          <Button color='secondary' circle onClick={props.onClose}>
            <GrClose />
          </Button>
        </HeaderContent>
        <div>
          {categories && categories.length && categories.map(category => (
            <Menu
              key={category.name}
              className={`category ${category.id === 'featured' ? 'special' : ''}`}
              active={categorySelected?.id === category.id}
              borderBottom
              onClick={() => handlerClickCategory(category)}
            >
              <span>{category.name}</span>
              <span>{category.name === 'All' ? totalProducts : category?.products?.length}</span>
            </Menu>
          ))}
        </div>
        {/* <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} /> */}
      </PopoverBody>
    </Container>
  )
}
