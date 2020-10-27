import React, { useState, useEffect } from 'react'
import { useSession, useLanguage, useOrder, useEvent, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import IosBasket from '@meronex/icons/ios/IosBasket'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import FaRegClock from '@meronex/icons/fa/FaRegClock'

import {
  Header as HeaderContainer,
  HeaderInvert,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  SubMenu,
  HeaderIcon
} from './styles'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import { LanguageSelector } from '../LanguageSelector'
import { AddressesPopover } from '../AddressesPopover'
import { UserPopover } from '../UserPopover'
import { MomentPopover } from '../MomentPopover'
import { CartPopover } from '../CartPopover'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { CartContent } from '../CartContent'
import { Modal } from '../Modal'
import { MomentContent } from '../MomentContent'
import { AddressContent } from '../AddressContent'

export const Header = (props) => {
  const { isHome } = props

  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [{ parseDate }] = useUtils()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const cartsWithProducts = Object.values(orderState?.carts).filter(cart => cart.products.length > 0)

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const HeaderType = isHome ? HeaderInvert : HeaderContainer

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }
  const closeModal = () => setModalIsOpen(false)

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleAddProduct = () => {
    handleTogglePopover('cart')
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [])

  return (
    <HeaderType>
      <InnerHeader>
        <LeftHeader>
          <LogoHeader onClick={() => handleGoToPage({ page: orderState.options?.address?.location ? 'search' : 'home' })}>
            <img src={isHome ? theme?.images?.logos?.logotypeInvert : theme?.images?.logos?.logotype} />
            <img src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} />
          </LogoHeader>
          {onlineStatus && (
            <Menu>
              <OrderTypeSelectorHeader />
              <MomentPopover
                open={openPopover.moment}
                onClick={() => handleTogglePopover('moment')}
                onClose={() => handleClosePopover('moment')}
              />
              <AddressesPopover
                auth={auth}
                addressState={orderState?.options?.address}
                open={openPopover.addresses}
                onClick={() => handleTogglePopover('addresses')}
                onClose={() => handleClosePopover('addresses')}
              />
            </Menu>
          )}
        </LeftHeader>
        {onlineStatus && (
          <RightHeader>
            <Menu>
              {
                !auth && (
                  <>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signin' })}>{t('SIGNIN', 'Sign in')}</MenuLink>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1}>{t('SIGNUP', 'Sign up')}</MenuLink>
                  </>
                )
              }
              {
                auth && (
                  <>
                    <UserPopover
                      open={openPopover.user}
                      isHome={isHome}
                      onClick={() => handleTogglePopover('user')}
                      onClose={() => handleClosePopover('user')}
                    />
                    {windowSize.width > 768 ? (
                      <CartPopover
                        open={openPopover.cart}
                        carts={cartsWithProducts}
                        onClick={() => handleTogglePopover('cart')}
                        onClose={() => handleClosePopover('cart')}
                        auth={auth}
                      />
                    ) : (
                      <HeaderIcon variant='cart' onClick={() => openModal('cart')}>
                        <span>
                          <IosBasket />
                          {cartsWithProducts.length > 0 && <p>{cartsWithProducts.length}</p>}
                        </span>
                      </HeaderIcon>
                    )}
                  </>
                )
              }
              <LanguageSelector />
            </Menu>
          </RightHeader>
        )}
      </InnerHeader>
      {windowSize.width <= 820 && onlineStatus &&
        windowSize.width > 768 ? (
          <SubMenu>
            <AddressesPopover
              auth={auth}
              addressState={orderState?.options?.address}
              open={openPopover.addresses}
              onClick={() => handleTogglePopover('addresses')}
              onClose={() => handleClosePopover('addresses')}
            />
            <MomentPopover
              open={openPopover.moment}
              onClick={() => handleTogglePopover('moment')}
              onClose={() => handleClosePopover('moment')}
            />
          </SubMenu>
        ) : (
          <SubMenu>
            <HeaderIcon variant='address' onClick={() => openModal('address')}>
              <FaMapMarkerAlt />
              {orderState.options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
            </HeaderIcon>
            <HeaderIcon variant='moment' onClick={() => openModal('moment')}>
              <FaRegClock />
              {orderState.options?.moment
                ? parseDate(orderState.options?.moment, { outputFormat: 'MM/DD hh:mma' })
                : t('ASAP_ABBREVIATION', 'ASAP')}
            </HeaderIcon>
          </SubMenu>
        )}
      <Modal
        open={modalIsOpen}
        onClose={() => closeModal()}
        width='70%'
        padding='0'
      >
        {modalSelected === 'cart' && (
          <CartContent
            carts={cartsWithProducts}
            isOrderStateCarts={!!orderState.carts}
            onClose={closeModal}
          />
        )}
        {modalSelected === 'address' && (
          <AddressContent
            auth={auth}
            addressState={orderState?.options?.address}
            onClose={closeModal}
          />
        )}
        {modalSelected === 'moment' && (
          <MomentContent />
        )}
      </Modal>
    </HeaderType>
  )
}
