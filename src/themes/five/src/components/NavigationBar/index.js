import React, { useState } from 'react'
import { useTheme } from 'styled-components'
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
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'

import {
  NavigationBarContainer,
  NavigationLink
} from './styles'

export const NavigationBar = () => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const location = useLocation()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ auth }, { login }] = useSession()
  const [isCart, setIsCart] = useState(false)
  const [isAddress, setIsAddress] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null

  const handleGoToPage = (data) => {
    auth
      ? events.emit('go_to_page', data)
      : handleOpenLoginSignUp('login')
  }

  const handleChangeExplore = () => {
    auth
      ? handleGoToPage({ page: 'search' })
      : setIsAddress(true)
  }

  const handleOpenLoginSignUp = (index) => {
    setModalPageToShow(index)
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const closeAuthModal = () => {
    setModalPageToShow(null)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeAuthModal()
    }
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const itemlist = {
    home: {
      key: 'home',
      text: t('HOME', 'Home'),
      active: location.pathname === '/search' || isAddress,
      onClick: handleChangeExplore
    },
    browse: {
      key: 'browse',
      active: location.pathname === '/business_search',
      onClick: () => handleGoToPage({ page: 'business_search' }),
      text: t('EXPLORE', 'Explore')
    },
    cart: {
      key: 'cart',
      active: isCart,
      text: t('MY_CART', 'My cart'),
      onClick: () => setIsCart(true)
    },
    orders: {
      key: 'orders',
      active: location.pathname === '/profile/orders',
      text: t('ORDERS', 'Orders'),
      onClick: () => handleGoToPage({ page: 'orders' })
    },
    profile: {
      key: 'profile',
      active: location.pathname === '/profile',
      text: t('PROFILE', 'Profile'),
      onClick: () => handleGoToPage({ page: 'profile' })
    }
  }

  const getIcon = (icon) => {
    return icon === 'home'
      ? <BsHouse />
      : icon === 'browse'
        ? <BsSearch />
        : icon === 'orders'
          ? <BsCardChecklist />
          : icon === 'cart'
            ? <AiOutlineShoppingCart />
            : <FaRegUser />
  }

  return (
    <>
      <NavigationBarContainer>
        {Object.values(itemlist).map(item => (
          <NavigationLink
            key={item.key}
            active={item.active}
            onClick={() => item.onClick()}
          >
            {getIcon(item.key)}
            <p>{item.text}</p>
          </NavigationLink>
        ))}
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
      <Modal
        open={modalPageToShow && !auth}
        onRemove={() => closeAuthModal()}
        width='50%'
        authModal
      >
        {modalPageToShow === 'login' && (
          <LoginForm
            handleSuccessLogin={handleSuccessLogin}
            elementLinkToSignup={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'signup' })
                } href='#'
              >{t('CREATE_ACCOUNT', theme?.defaultLanguages?.CREATE_ACCOUNT || 'Create account')}
              </a>
            }
            elementLinkToForgotPassword={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                } href='#'
              >{t('RESET_PASSWORD', theme?.defaultLanguages?.RESET_PASSWORD || 'Reset password')}
              </a>
            }
            useLoginByCellphone
            isPopup
          />
        )}
        {modalPageToShow === 'signup' && (
          <SignUpForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            useLoginByCellphone
            useChekoutFileds
            handleSuccessSignup={handleSuccessSignup}
            isPopup
          />
        )}
        {modalPageToShow === 'forgotpassword' && (
          <ForgotPasswordForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            isPopup
          />
        )}
      </Modal>
    </>
  )
}

export default NavigationBar
