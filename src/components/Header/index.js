import React, { useState, useEffect } from 'react'
import { useSession, useLanguage, useOrder, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

import {
  Header as HeaderContainer, HeaderInvert, InnerHeader, LogoHeader, LeftHeader, RightHeader, Menu, MenuLink, SubMenu
} from './styles'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import { LanguageSelector } from '../LanguageSelector'
import { AddressesPopover } from '../AddressesPopover'
import { UserPopover } from '../UserPopover'
import { MomentPopover } from '../MomentPopover'
import { CartPopover } from '../CartPopover'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'

export const Header = (props) => {
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()

  const { isHome } = props

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

  const HeaderType = isHome ? HeaderInvert : HeaderContainer

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
