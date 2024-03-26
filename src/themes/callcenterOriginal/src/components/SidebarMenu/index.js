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
import GiHistogram from '@meronex/icons/gi/GiHistogram'
import BsGraphUp from '@meronex/icons/bs/BsGraphUp'

import { useEvent, useLanguage, useOrder, useSession } from 'ordering-components'
import { useTheme } from 'styled-components'

import { capitalize } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'
import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { LoginForm } from '../LoginForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { X as CloseIcon } from 'react-bootstrap-icons'

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
  MobileMessage
} from './styles'

const extraOptions = [
  { name: 'profile', pathname: '/profile', displayName: 'view account', key: 'view_account' },
  { name: 'help', pathname: '/help', displayName: 'help', key: 'help' }
]

const adminOptionsDefault = [
  { name: 'orderlist', pathname: '/orderlist', displayName: 'order list', key: 'ORDER_LIST' },
  { name: 'deliveries', pathname: '/deliveries', displayName: 'delivery dashboard', key: 'DELIVERY_DASHBOARD' },
  { name: 'drivers_dashboard', pathname: '/drivers', displayName: 'drivers dashboard', key: 'DRIVERS_DASHBOARD' }
]

export const SidebarMenu = (props) => {
  const { auth, isHideSignup, userCustomer, isCustomerMode } = props
  const [sessionState, { login }] = useSession()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

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

  useEffect(() => {
    if (!isCustomerMode) return
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setShowMessage(true)
    }
  }, [])

  const getMenuIcon = (icon) => {
    const list = {
      profile: <FaRegAddressCard />,
      help: <BiHelpCircle />,
      orderlist: <FaRegListAlt />,
      deliveries: <GiHistogram />,
      drivers_dashboard: <BsGraphUp />
    }
    return list[icon]
  }

  return (
    <>
      {showMessage && (
        <MobileMessage>
          <div>
            <CloseIcon onClick={() => setShowMessage(false)} />
            {t('FOR_THE_BEST_EXPERIENCE_WHILE_SETTING_UP', 'For the best experience while setting up your project, we recommend using a computer.')}
          </div>
        </MobileMessage>
      )}
      <Container auth={auth}>
        <IconContent
          aria-label='menu'
          onClick={() => actionSidebar(true)}
        >
          <IosMenu />
        </IconContent>
        <SidebarContent id='sidebar_menu'>
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

          <MenuLink onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}>
            <WrappContent>
              <MenuLinkIcon
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
              {extraOptions.map(option => (
                <MenuLink
                  key={option.key}
                  onClick={() => handleGoToPage({ page: option.name })}
                >
                  <WrappContent>
                    <MenuLinkIcon active={window.location.pathname === option.pathname}>
                      {getMenuIcon(option.name)}
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo active={window.location.pathname === option.pathname}>
                        {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
                      </TextInfo>
                    </MenuLinkText>
                    <MenuLinkSeparator>
                      <div>
                        <hr />
                      </div>
                    </MenuLinkSeparator>
                  </WrappContent>
                </MenuLink>
              ))}
              {sessionState?.user?.level === 0 && adminOptionsDefault.map(option => (
                <MenuLink
                  key={option.key}
                  onClick={() => handleGoToPage({ page: option.name })}
                >
                  <WrappContent>
                    <MenuLinkIcon active={window.location.pathname === option.pathname}>
                      {getMenuIcon(option.name)}
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo active={window.location.pathname === option.pathname}>
                        {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
                      </TextInfo>
                    </MenuLinkText>
                    <MenuLinkSeparator>
                      <div>
                        <hr />
                      </div>
                    </MenuLinkSeparator>
                  </WrappContent>
                </MenuLink>
              ))}
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
                onClick={() => handleOpenLoginSignUp('login')}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={modalPageToShow === 'login'}
                  >
                    <AiOutlineLogin />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
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
                  onClick={() => handleOpenLoginSignUp('signup')}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      active={modalPageToShow === 'signup'}
                    >
                      <AiOutlineUserAdd />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
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
    </>
  )
}
