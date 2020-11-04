import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'

import { useEvent, useLanguage, useOrder } from 'ordering-components'

import { useWindowSize } from '../../hooks/useWindowSize'
import { LogoutButton } from '../LogoutButton'

import {
  Container,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator
} from './styles'

export const SidebarMenu = (props) => {
  const { auth } = props
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    actionSidebar(false)
    setIsMenuOpen(false)
  }

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '340px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        console.log('in')
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        console.log('in2')
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  return (
    <Container>
      <IconContent
        isHome={isHome}
        onClick={() => actionSidebar(true)}
      >
        <IosMenu />
      </IconContent>
      <SidebarContent
        id='sidebar_menu'
        isHome={isHome}
      >
        <MenuClose
          isHome={isHome}
          onClick={() => actionSidebar(false)}
        >
          <MdClose />
        </MenuClose>

        <MenuLink
          isHome={isHome}
          onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
        >
          <WrappContent>
            <MenuLinkIcon
              isHome={isHome}
              active={
                window.location.pathname === '/' ||
                window.location.pathname === '/home' ||
                window.location.pathname === '/search'
              }
            >
              {options?.address?.location ? (
                <BiStore />
              ) : (
                <AiOutlineHome />
              )}
            </MenuLinkIcon>
            <MenuLinkText>
              <TextInfo
                isHome={isHome}
                active={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/home' ||
                  window.location.pathname === '/search'
                }
              >
                {options?.address?.location ? (
                  t('BUSINESSES', 'Businesses')
                ) : (
                  t('HOME', 'Home')
                )}
              </TextInfo>
            </MenuLinkText>
            <MenuLinkSeparator>
              <div>
                <hr />
              </div>
            </MenuLinkSeparator>
          </WrappContent>
        </MenuLink>

        {auth && (
          <>
            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: 'profile' })}
            >
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={
                    window.location.pathname === '/profile'
                  }
                >
                  <FaRegAddressCard />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={
                      window.location.pathname === '/profile'
                    }
                  >
                    {t('PROFILE', 'Profile')}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>

            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: 'orders' })}
            >
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={
                    window.location.pathname === '/profile/orders'
                  }
                >
                  <FaRegListAlt />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={
                      window.location.pathname === '/profile/orders'
                    }
                  >
                    {t('ORDERS', 'Orders')}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>

            <LogoutButton />
          </>
        )}
        {!auth && (
          <>
            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: 'signin' })}
            >
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={
                    window.location.pathname === '/signin' ||
                    window.location.pathname === '/login'
                  }
                >
                  <AiOutlineLogin />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={
                      window.location.pathname === '/signin' ||
                      window.location.pathname === '/login'
                    }
                  >
                    {t('SIGNIN', 'Sign in')}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>

            <MenuLink
              isHome={isHome}
              onClick={() => handleGoToPage({ page: 'signup' })}
            >
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={
                    window.location.pathname === '/signup'
                  }
                >
                  <AiOutlineUserAdd />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
                    active={
                      window.location.pathname === '/signup'
                    }
                  >
                    {t('SIGNUP', 'Sign up')}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>
          </>
        )}
      </SidebarContent>
    </Container>
  )
}
