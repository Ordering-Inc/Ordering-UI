import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import BiHelpCircle from '@meronex/icons/bi/BiHelpCircle'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import { useEvent, useLanguage, useOrder, useConfig } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { capitalize } from '../../../../../utils'
import { MomentContent } from '../../../../../components/MomentContent'
import { Button } from '../../../../../styles/Buttons'

import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { LogoutButton } from '../LogoutButton'
import { HeaderOption } from '../HeaderOption'
import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { LoginForm } from '../../../../../themes/five/src/components/LoginForm'
import { SignUpForm } from '../../../../../themes/five/src/components/SignUpForm'
import { ForgotPasswordForm } from '../../../../../themes/five/src/components/ForgotPasswordForm'

import {
  Container,
  IconContent,
  SidebarContent,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  Hr,
  SideBarOver,
  MenuLinkSeparator
} from './styles'
export const SidebarMenu = (props) => {
  const { auth, isHideSignup, userCustomer, isCustomerMode } = props
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [configState] = useConfig()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sideBackOver, setSideBackOver] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const theme = useTheme()
  const hideHelp = theme?.bar_menu?.components?.help?.hidden

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    actionSidebar(false)
    setIsMenuOpen(false)
  }
  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    setSideBackOver(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '340px' : '87vw'
      : '0'
    if (value) {
      const x = document.getElementsByTagName('BODY')[0]
      x.style.overflow = 'hidden'
    } else {
      const x = document.getElementsByTagName('BODY')[0]
      x.style.overflow = 'unset'
    }
  }
  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setModalSelected(null)
    actionSidebar(false)
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalSelected(page)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
    }
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
        >
          {isMenuOpen
            ? <MdClose onClick={() => actionSidebar(false)} />
            : <IosMenu onClick={() => actionSidebar(true)} />}
        </IconContent>
        <SidebarContent
          id='sidebar_menu'
        >
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
              </WrappContent>
            </MenuLink>
          )}
          <MenuLink
            onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
          >
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
            </WrappContent>
          </MenuLink>

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
                </WrappContent>
              </MenuLink>
              {!hideHelp && (
                <MenuLink
                  onClick={() => handleGoToPage({ page: 'help' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      active={
                        window.location.pathname === '/help'
                      }
                    >
                      <BiHelpCircle />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
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
              )}
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
                    </WrappContent>
                  </MenuLink>
                )
              }
            </>
          )}

          <MenuLink>
            <WrappContent>
              <OrderTypeSelectorHeader
                configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
              />
            </WrappContent>
            <Hr />
          </MenuLink>
          <MenuLink style={{ marginTop: '25px' }}>
            <WrappContent>
              <HeaderOption
                variant='address'
                addressState={options?.address?.address?.split(',')?.[0]}
                onClick={(variant) => openModal(variant)}
              />
            </WrappContent>
          </MenuLink>
          <MenuLink>
            <WrappContent>
              <HeaderOption
                variant='moment'
                momentState={options?.moment}
                onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                  ? null
                  : (variant) => openModal(variant)}
              />
            </WrappContent>
          </MenuLink>
          {auth && (
            <LogoutButton onCustomClick={() => actionSidebar(false)} inSide='SideMenu' />
          )}

          {!auth && (
            <MenuLink style={{ marginTop: '25px' }}>
              <Button outline color='secundary' onClick={() => openModal('login')} name='login'>{t(theme?.defaultLanguages?.SIGN_IN || 'Sign in')}</Button>
              {!isHideSignup && (
                <Button color='secundary' onClick={() => openModal('signup')} highlight={1} name='signup'>{t(theme?.defaultLanguages?.SIGN_UP || 'Join now')}</Button>
              )}
            </MenuLink>
          )}
        </SidebarContent>
        {sideBackOver && <SideBarOver onClick={() => actionSidebar(false)} />}
        {modalIsOpen && (
          <Modal
            title={t(modalSelected.toUpperCase(), capitalize(modalSelected))}
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
            padding={modalSelected === 'address' ? '15px' : '5px'}
          >
            {modalSelected === 'address' && (
              auth ? (
                <AddressList
                  isModal
                  changeOrderAddressWithDefault
                  userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
                  onCancel={() => setModalIsOpen(false)}
                  onAccept={() => setModalIsOpen(false)}
                />
              ) : (
                <AddressForm
                  useValidationFileds
                  address={options?.address || {}}
                  onCancel={() => setModalIsOpen(false)}
                  onSaveAddress={() => setModalIsOpen(false)}
                />
              )
            )}
            {modalSelected === 'moment' && (
              <MomentContent />
            )}
            {modalSelected === 'login' && (
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
            {modalSelected === 'signup' && (
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
                isPopup
                closeModal={() => closeModal()}
              />
            )}
            {modalSelected === 'forgotpassword' && (
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
