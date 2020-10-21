import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Header as HeaderContainer, HeaderInvert, InnerHeader, LogoHeader, LeftHeader, RightHeader, Menu, MenuLink,
  SubMenu
} from './styles'

import { useSession, useLanguage, useOrder, useEvent } from 'ordering-components'
import { useWindowSize } from '../../../src/hooks/useWindowSize'
import { useOnlineStatus } from '../../../src/hooks/useOnlineStatus'

import logoHeader from '../../assets/images/logo-header.svg'
import logoHeaderInvert from '../../assets/images/logo-header-invert.svg'
import logo from '../../assets/images/logo.svg'
import { LanguageSelector } from '../../../src/components/LanguageSelector'
import { AddressesPopover } from '../../../src/components/AddressesPopover'
import { UserPopover } from '../../../src/components/UserPopover'
import { MomentPopover } from '../../../src/components/MomentPopover'
import { CartPopover } from '../../../src/components/CartPopover'
import { OrderTypeSelectorHeader } from '../../../src/components/OrderTypeSelectorHeader'

export const Header = (props) => {
  const [events] = useEvent()
  const location = useLocation()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})

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

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const isHome = location.pathname === '/' || location.pathname === '/home'
  const HeaderType = isHome ? HeaderInvert : HeaderContainer

  const handleAddProduct = () => {
    handleTogglePopover('cart')
  }

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [])

  return (
    <HeaderType>
      <InnerHeader>
        <LeftHeader>
          <LogoHeader>
            <Link to={orderState.options?.address?.location ? '/search' : '/'}>
              <img src={isHome ? logoHeaderInvert : logoHeader} />
              <img src={logo} />
            </Link>
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
                    <MenuLink to='/signin'>{t('SIGNIN', 'Sign in')}</MenuLink>
                    <MenuLink to='/signup' highlight={1}>{t('SIGNUP', 'Sign up')}</MenuLink>
                  </>
                )
              }
              {
                auth && (
                  <>
                    <UserPopover
                      open={openPopover.user}
                      onClick={() => handleTogglePopover('user')}
                      onClose={() => handleClosePopover('user')}
                    />
                    <CartPopover
                      open={openPopover.cart}
                      onClick={() => handleTogglePopover('cart')}
                      onClose={() => handleClosePopover('cart')}
                      auth={auth}
                    />
                  </>
                )
              }
              <LanguageSelector />
            </Menu>
          </RightHeader>
        )}
      </InnerHeader>
      {windowSize.width <= 820 && onlineStatus && (
        <SubMenu>
          <AddressesPopover
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
      )}
    </HeaderType>
  )
}
