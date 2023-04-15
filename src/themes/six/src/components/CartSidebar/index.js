import React, { useEffect, useState } from 'react'
import { useLanguage, useOrder } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import MdCart from '@meronex/icons/ios/MdCart'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { CartContent } from '../CartContent'

import {
  Container,
  BackDropContainer,
  TopContainer,
  IconContent,
  SidebarContent,
  MenuClose,
  CartContentWrapper
} from './styles'

export const CartSidebar = (props) => {
  const {
    open,
    carts
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [orderState] = useOrder()

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('cartSidebar').style.width = value
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('cartSidebar').style.width = '100vw'
      } else {
        document.getElementById('cartSidebar').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <>
      <Container>
        <IconContent
          onClick={() => actionSidebar(true)}
        >
          <MdCart />
          {carts?.length > 0 && <span>{props.carts?.length}</span>}
        </IconContent>
        {isMenuOpen && (
          <BackDropContainer onClick={() => actionSidebar(false)} />
        )}
        <SidebarContent
          id='cartSidebar'
        >
          <TopContainer>
            <h2>{t('MY_CART', 'My cart')}</h2>
            <MenuClose
              aria-label='close'
              onClick={() => actionSidebar(false)}
            >
              <MdClose />
              {t('CLOSE', 'close')}
            </MenuClose>
          </TopContainer>
          <CartContentWrapper>
            <CartContent
              isCartPopover
              isSidebar
              carts={props.carts}
              isOrderStateCarts={!!orderState.carts}
              onClose={() => actionSidebar(false)}
            />
          </CartContentWrapper>
        </SidebarContent>
      </Container>
    </>
  )
}
