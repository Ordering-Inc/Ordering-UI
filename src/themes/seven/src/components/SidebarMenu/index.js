import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import { useEvent, useLanguage, useOrder } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'
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
  MenuLinkSeparator,
  Navlinks
} from './styles'

export const SidebarMenu = (props) => {
  const { auth, isHideSignup, userCustomer, isCustomerMode } = props
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container auth={auth}>
        <IconContent
          aria-label='menu'
          onClick={() => actionSidebar(true)}
        >
          <IosMenu />
        </IconContent>
        <SidebarContent
          id='sidebar_menu'
        >
          <MenuClose
            aria-label='close'
            onClick={() => actionSidebar(false)}
          >
            <MdClose />
          </MenuClose>

          {userCustomer && (
            <MenuLink isCustomer={userCustomer}>
              <WrappContent>
                <MenuLinkIcon
                  active={false}
                >
                  <FaUserCircle />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    active={false}
                  >
                    {`${userCustomer?.name} ${userCustomer?.lastname}`}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>
          )}
          <MenuLink
            onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
            style={{ padding: '10px 16px', boxSizing: 'border-box' }}
          >
            <MenuLinkText>
              <TextInfo
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
          </MenuLink>

          <Navlinks>
            <a href={t('ARCHIES_MENU_LINK', 'https://archies.cluvi.co')} target='_blank' rel='noopener noreferrer'>{t('ARCHIES_MENU_TEXT', 'Menu')}</a>
            <Link
              to='/location'
              onClick={() => actionSidebar(false)}
            >
              <span className={window.location.pathname === '/location' ? 'active' : ''}>{t('ARCHIES_UBICATION_TEXT ', 'Ubicación')} </span>
            </Link>
            <Link
              to='/picoli'
              onClick={() => actionSidebar(false)}
            >
              <span className={window.location.pathname === '/picoli' ? 'active' : ''}>{t('ARCHIES_PICOLI_TEXT ', 'Picoli')}</span>
            </Link>
            <Link
              to='/promotions'
              onClick={() => actionSidebar(false)}
            >
              <span className={window.location.pathname === '/promotions' ? 'active' : ''}>{t('ARCHIES_PROMOS_TEXT ', 'Promociones')}</span>
            </Link>
            <a href={t('ARCHIES_CONTACT_LINK', 'https://contacto.miexperienciaarchies.com.co')} target='_blank' rel='noopener noreferrer'>{t('ARCHIES_CONTACT_TEXT ', 'Contacto')}</a>
          </Navlinks>

          {auth && (
            <>
              <MenuLink
                onClick={() => handleGoToPage({ page: 'profile' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/profile'
                    }
                  >
                    <FaRegAddressCard />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
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
              {
                !isCustomerMode && (
                  <MenuLink
                    onClick={() => handleGoToPage({ page: 'orders' })}
                  >
                    <WrappContent>
                      <MenuLinkIcon
                        active={
                          window.location.pathname === '/profile/orders'
                        }
                      >
                        <FaRegListAlt />
                      </MenuLinkIcon>
                      <MenuLinkText>
                        <TextInfo
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
                )
              }

              <LogoutButton onCustomClick={() => actionSidebar(false)} />
            </>
          )}
          {!auth && (
            <>
              <MenuLink
                onClick={() => handleGoToPage({ page: 'signin' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/signin' ||
                      window.location.pathname === '/login'
                    }
                  >
                    <AiOutlineLogin />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/signin' ||
                        window.location.pathname === '/login'
                      }
                    >
                      {t('SIGN_IN', 'Sign in')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
              {!isHideSignup && (
                <MenuLink
                  onClick={() => handleGoToPage({ page: 'signup' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      active={
                        window.location.pathname === '/signup'
                      }
                    >
                      <AiOutlineUserAdd />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
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
              )}
            </>
          )}
        </SidebarContent>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
