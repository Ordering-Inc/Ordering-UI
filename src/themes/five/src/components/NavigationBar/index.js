import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent, useOrder, useSession } from 'ordering-components'
import BsHouse from '@meronex/icons/bs/BsHouse'
import BsSearch from '@meronex/icons/bs/BsSearch'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'
import BsCardChecklist from '@meronex/icons/bs/BsCardChecklist'
import FaRegUser from '@meronex/icons/fa/FaRegUser'

import { CartContent } from '../CartContent'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'

import {
  NavigationBarContainer,
  NavigationLink
} from './styles'

export const NavigationBar = () => {
  const [, t] = useLanguage()
  const location = useLocation()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [isCart, setIsCart] = useState(false)
  const [isAddress, setIsAddress] = useState(false)

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleChangeExplore = () => {
    if (auth) handleGoToPage({ page: 'search' })
    else setIsAddress(true)
  }

  return (
    <>
      <NavigationBarContainer>
        <NavigationLink
          active={location.pathname === '/search' || isAddress}
          onClick={handleChangeExplore}
        >
          <BsHouse />
          <p>{t('HOME', 'Home')}</p>
        </NavigationLink>
        <NavigationLink
          active={location.pathname === '/business_search'}
          onClick={() => handleGoToPage({ page: 'business_search' })}
        >
          <BsSearch />
          <p>{t('BROWSE', 'Browse')}</p>
        </NavigationLink>
        <NavigationLink
          active={location.pathname === '/profile/orders'}
          onClick={() => handleGoToPage({ page: 'orders' })}
        >
          <BsCardChecklist />
          <p>{t('ORDERS', 'Orders')}</p>
        </NavigationLink>
        <NavigationLink
          active={isCart}
          onClick={() => setIsCart(true)}
        >
          <AiOutlineShoppingCart />
          <p>{t('MY_CART', 'My cart')}</p>
        </NavigationLink>
        <NavigationLink
          active={location.pathname === '/profile'}
          onClick={() => handleGoToPage({ page: 'profile' })}
        >
          <FaRegUser />
          <p>{t('PROFILE', 'Profile')}</p>
        </NavigationLink>
      </NavigationBarContainer>
      <Modal
        open={isCart}
        onClose={() => setIsCart(false)}
        width='50%'
      >
        <CartContent
          carts={cartsWithProducts}
          isOrderStateCarts={!!orderState.carts}
          onClose={() => setIsCart(false)}
        />
      </Modal>
      <Modal
        open={isAddress}
        title={t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?')}
        onClose={() => setIsAddress(false)}
        width='50%'
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onCancel={() => setIsAddress(false)}
          onSaveAddress={() => setIsAddress(false)}
        />
      </Modal>
    </>
  )
}
