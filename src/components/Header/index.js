import React, { useState, useEffect } from 'react'
import { useSession, useLanguage, useOrder, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  SubMenu
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
import { HeaderOption } from '../HeaderOption'
import { SidebarMenu } from '../SidebarMenu'

export const Header = (props) => {
  const { isHome } = props

  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const cartsWithProducts = Object.values(orderState?.carts).filter(cart => cart.products.length > 0)

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

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
    <HeaderContainer home={isHome}>
      <InnerHeader>
        <LeftHeader>
          <SidebarMenu auth={auth} />
          <LogoHeader onClick={() => handleGoToPage({ page: orderState?.options?.address?.location ? 'search' : 'home' })}>
            <img alt='Logotype' width='170px' height='45px' src={isHome ? theme?.images?.logos?.logotypeInvert : theme?.images?.logos?.logotype} />
            <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} />
          </LogoHeader>
          {onlineStatus && (
            <Menu className='left-header'>
              <OrderTypeSelectorHeader />
              <MomentPopover
                open={openPopover.moment}
                onClick={() => handleTogglePopover('moment')}
                onClose={() => handleClosePopover('moment')}
                isHome={isHome}
              />
              <AddressesPopover
                auth={auth}
                addressState={orderState?.options?.address}
                open={openPopover.addresses}
                onClick={() => handleTogglePopover('addresses')}
                onClose={() => handleClosePopover('addresses')}
                isHome={isHome}
              />
            </Menu>
          )}
        </LeftHeader>
        {onlineStatus && (
          <RightHeader>
            <Menu>
              {
                !auth && windowSize.width > 870 && (
                  <>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signin' })}>{t('SIGN_IN', 'Sign in')}</MenuLink>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1}>{t('SIGN_UP', 'Sign up')}</MenuLink>
                  </>
                )
              }
              {
                auth && (
                  <>
                    {windowSize.width > 768 && (
                      <UserPopover
                        open={openPopover.user}
                        isHome={isHome}
                        onClick={() => handleTogglePopover('user')}
                        onClose={() => handleClosePopover('user')}
                      />
                    )}
                    {windowSize.width > 768 ? (
                      <CartPopover
                        open={openPopover.cart}
                        carts={cartsWithProducts}
                        onClick={() => handleTogglePopover('cart')}
                        onClose={() => handleClosePopover('cart')}
                        auth={auth}
                      />
                    ) : (
                      <HeaderOption
                        variant='cart'
                        totalCarts={cartsWithProducts.length}
                        onClick={(variant) => openModal(variant)}
                      />
                    )}
                  </>
                )
              }
              <LanguageSelector />
            </Menu>
          </RightHeader>
        )}
      </InnerHeader>
      {onlineStatus && (
        windowSize.width <= 820 && windowSize.width > 768 ? (
          <SubMenu>
            <AddressesPopover
              auth={auth}
              addressState={orderState?.options?.address}
              open={openPopover.addresses}
              onClick={() => handleTogglePopover('addresses')}
              onClose={() => handleClosePopover('addresses')}
              isHome={isHome}
            />
            <MomentPopover
              open={openPopover.moment}
              onClick={() => handleTogglePopover('moment')}
              onClose={() => handleClosePopover('moment')}
              isHome={isHome}
            />
          </SubMenu>
        ) : (
          <SubMenu>
            <HeaderOption
              variant='address'
              addressState={orderState?.options?.address?.address?.split(',')?.[0]}
              onClick={(variant) => openModal(variant)}
              isHome={isHome}
            />
            <HeaderOption
              variant='moment'
              momentState={orderState?.options?.moment}
              onClick={(variant) => openModal(variant)}
              isHome={isHome}
            />
          </SubMenu>
        )
      )}
      {modalIsOpen && (
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
      )}
    </HeaderContainer>
  )
}
