import React, { useState, useEffect } from 'react'
import { useSession, useLanguage, useOrder, useEvent, useConfig } from 'ordering-components'
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
import { capitalize } from '../../utils'

import { LanguageSelector } from '../LanguageSelector'
import { AddressesPopover } from '../AddressesPopover'
import { UserPopover } from '../UserPopover'
import { MomentPopover } from '../MomentPopover'
import { CartPopover } from '../CartPopover'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { CartContent } from '../CartContent'
import { Modal } from '../Modal'
import { MomentContent } from '../MomentContent'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { HeaderOption } from '../HeaderOption'
import { SidebarMenu } from '../SidebarMenu'

export const Header = (props) => {
  const { isHome, location, closeCartPopover } = props

  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products.length > 0)) || null

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

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
    if (!closeCartPopover) {
      handleTogglePopover('cart')
    }
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
            <img alt='Logotype' width='170px' height='45px' src={isHome ? theme?.images?.logos?.logotypeInvert : theme?.images?.logos?.logotype} loading='lazy' />
            <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy' />
          </LogoHeader>
          <Menu className='left-header'>
            {!configState?.loading && configTypes.length > 0 && (
              <OrderTypeSelectorHeader configTypes={configTypes} />
            )}
            {onlineStatus && windowSize.width > 820 && (
              <>
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
              </>
            )}
          </Menu>
        </LeftHeader>
        {onlineStatus && (
          <RightHeader>
            <Menu>
              {
                !auth && windowSize.width > 870 && (
                  <>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signin' })} name='signin'>{t('SIGN_IN', 'Sign in')}</MenuLink>
                    <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1} name='signup'>{t('SIGN_UP', 'Sign up')}</MenuLink>
                  </>
                )
              }
              {
                auth && (
                  <>
                    {windowSize.width > 768 && (
                      <UserPopover
                        withLogout
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
                        location={location}
                      />
                    ) : (
                      <HeaderOption
                        variant='cart'
                        totalCarts={cartsWithProducts?.length}
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
              onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                ? null
                : (variant) => openModal(variant)}
              isHome={isHome}
            />
          </SubMenu>
        )
      )}
      {modalIsOpen && (
        <Modal
          title={t(modalSelected.toUpperCase(), capitalize(modalSelected))}
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width='70%'
          padding={modalSelected === 'address' ? '20px' : '5px'}
        >
          {modalSelected === 'cart' && (
            <CartContent
              carts={cartsWithProducts}
              isOrderStateCarts={!!orderState.carts}
              onClose={() => setModalIsOpen(false)}
            />
          )}
          {modalSelected === 'address' && (
            auth ? (
              <AddressList
                isModal
                changeOrderAddressWithDefault
                onCancel={() => setModalIsOpen(false)}
                onAccept={() => setModalIsOpen(false)}
              />
            ) : (
              <AddressForm
                useValidationFileds
                address={orderState?.options?.address || {}}
                onCancel={() => setModalIsOpen(false)}
                onSaveAddress={() => setModalIsOpen(false)}
              />
            )
          )}
          {modalSelected === 'moment' && (
            <MomentContent />
          )}
        </Modal>
      )}
    </HeaderContainer>
  )
}
