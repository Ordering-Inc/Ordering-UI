import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import BiHelpCircle from '@meronex/icons/bi/BiHelpCircle'
import MdMyLocation from '@meronex/icons/md/MdMyLocation'

import { useEvent, useLanguage, useOrder, useSession } from 'ordering-components'
import { useTheme } from 'styled-components'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'
import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { LoginForm } from '../LoginForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'

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
  const { auth, isHideSignup, userCustomer, isCustomerMode } = props
  const [{ login }] = useSession()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const closeModal = () => {
    setModalIsOpen(false)
    setModalPageToShow(null)
    actionSidebar(false)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
    }
  }

  const handleOpenLoginSignUp = (index) => {
    setModalPageToShow(index)
    setModalIsOpen(true)
  }

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

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
    closeModal()
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
          isHome={isHome}
          aria-label='menu'
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
            aria-label='close'
            onClick={() => actionSidebar(false)}
          >
            <MdClose />
          </MenuClose>

          {userCustomer && (
            <MenuLink isHome={isHome} isCustomer={userCustomer}>
              <WrappContent>
                <MenuLinkIcon
                  isHome={isHome}
                  active={false}
                >
                  <FaUserCircle />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    isHome={isHome}
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
                onClick={() => handleGoToPage({ page: 'saved_places' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/saved_places'
                    }
                  >
                    <MdMyLocation />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/saved_places'
                      }
                    >
                      {t('MY_ADDRESSES', 'My Saved places')}
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
                onClick={() => handleGoToPage({ page: 'help' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/help'
                    }
                  >
                    <BiHelpCircle />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/help'
                      }
                    >
                      {t('HELP', 'help')}
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
                )
              }

              <LogoutButton onCustomClick={() => actionSidebar(false)} />
            </>
          )}
          {!auth && (
            <>
              <MenuLink
                isHome={isHome}
                onClick={() => handleOpenLoginSignUp('login')}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={modalPageToShow === 'login'}
                  >
                    <AiOutlineLogin />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={modalPageToShow === 'login'}
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
                  isHome={isHome}
                  onClick={() => handleOpenLoginSignUp('signup')}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      isHome={isHome}
                      active={modalPageToShow === 'signup'}
                    >
                      <AiOutlineUserAdd />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        isHome={isHome}
                        active={modalPageToShow === 'signup'}
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
        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='50%'
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
        )}
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
