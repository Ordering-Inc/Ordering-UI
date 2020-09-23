import React, { useState } from 'react'
import {
  Header as HeaderContainer, HeaderInvert, InnerHeader, LogoHeader, LeftHeader, RightHeader, Menu, MenuLink
} from './styles'

import { useLocation, Link } from 'react-router-dom'

import { useSession, useOrder } from 'ordering-components'

import logoHeader from '../../assets/images/logo-header.svg'
import logoHeaderInvert from '../../assets/images/logo-header-invert.svg'
import { LanguageSelector } from '../../../src/components/LanguageSelector'
import { useLanguage } from 'ordering-components/_modules/contexts/LanguageContext'
import { AddressesPopover } from '../../../src/components/AddressesPopover'
import { UserPopover } from '../../../src/components/UserPopover'
import { MomentPopover } from '../../../src/components/MomentPopover'

export const Header = (props) => {
  const location = useLocation()
  const [, t] = useLanguage()
  const [{ user, auth }] = useSession()
  // const [orderStatus] = useOrder()
  const [openPopover, setOpenPopover] = useState({ open: false })

  const handleTogglePopover = (type) => {
    setOpenPopover({
      type,
      open: openPopover.type === type ? !openPopover.open : true
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
            </Link>
          </LogoHeader>
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
              open={openPopover.open && openPopover.type === 'moment'}
              onClick={() => handleTogglePopover('moment')}
              onClose={() => handleTogglePopover('moment')}
            />
            <AddressesPopover
              open={openPopover.open && openPopover.type === 'addresses'}
              onClick={() => handleTogglePopover('addresses')}
              onClose={() => handleTogglePopover('addresses')}
            />
            <UserPopover
              open={openPopover.open && openPopover.type === 'user'}
              onClick={() => handleTogglePopover('user')}
              onClose={() => handleTogglePopover('user')}
            />
            <LanguageSelector />
          </Menu>
        </RightHeader>
      </InnerHeader>
    </HeaderType>
  )
}
