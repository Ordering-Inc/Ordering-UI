import React, { useState } from 'react'
import {
  Header as HeaderContainer, HeaderInvert, InnerHeader, LogoHeader, LeftHeader, RightHeader, Menu, MenuLink
} from './styles'

import { useLocation, Link } from 'react-router-dom'

import { useSession, useLanguage } from 'ordering-components'

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
  const location = useLocation()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
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

  const isHome = location.pathname === '/' || location.pathname === '/home'
  const HeaderType = isHome ? HeaderInvert : HeaderContainer

  return (
    <HeaderType>
      <InnerHeader>
        <LeftHeader>
          <LogoHeader>
            <Link to='/'>
              <img src={isHome ? logoHeaderInvert : logoHeader} />
              <img src={logo} />
            </Link>
          </LogoHeader>
          <Menu>
            <OrderTypeSelectorHeader />
          </Menu>
        </LeftHeader>
        <RightHeader>
          <Menu>
            {
              !auth && (
                <>
                  <MenuLink to='/signin'>{t('SIGNIN', 'Sign up')}</MenuLink>
                  <MenuLink to='/signup' highlight={1}>{t('SIGNUP', 'Sign up')}</MenuLink>
                </>
              )
            }
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
                  />
                </>
              )
            }
            <LanguageSelector />
          </Menu>
        </RightHeader>
      </InnerHeader>
      <InnerHeader className='sub-menu'>
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
      </InnerHeader>
    </HeaderType>
  )
}
