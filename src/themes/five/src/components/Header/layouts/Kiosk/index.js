
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useLanguage, useEvent, useConfig } from 'ordering-components'

import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink
} from '../../styles'

import { useOnlineStatus } from '../../../../../../../hooks/useOnlineStatus'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'
import { HeaderOption } from '../../../HeaderOption'
import { Modal } from '../../../Modal'
import { LoginForm } from '../../../LoginForm'
import { OrderTypeSelectorContent } from '../../../OrderTypeSelectorContent/layouts/Kiosk'
import { OrderTypeSelectorHeader } from '../../../OrderTypeSelectorHeader'

export const Header = (props) => {
  const {
    isHome
  } = props

  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const theme = useTheme()
  const [configState] = useConfig()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [modalPageToShow, setModalPageToShow] = useState(null)

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')]
  const excludeTypes = [1]
  // const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)).filter(val => !excludeTypes.includes(val)) || []
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => !excludeTypes.includes(Number(value)) && Number(value)) || []

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const closeAuthModal = () => {
    setAuthModalOpen(false)
    setModalPageToShow(null)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeAuthModal()
    }
  }

  const handleOpenLoginSignUp = (index) => {
    setModalPageToShow(index)
    setAuthModalOpen(true)
  }

  return (
    <HeaderContainer style={{ height: 80 }}>
      <InnerHeader style={{ height: '100%' }}>
        <LeftHeader>
          <LogoHeader
            onClick={() => handleGoToPage({ page: 'home' })}
          >
            <img alt='Logotype' width='170px' height='45px' src={theme?.images?.logos?.logotype} loading='lazy' />
            <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy' />
          </LogoHeader>
        </LeftHeader>

        <Menu className='left-header'>
          {windowSize.width > 768 ? (
            <OrderTypeSelectorHeader
              isFullClick
              containerStyle={{ margin: 'auto' }}
              orderTypeList={orderTypeList}
              onClick={() => openModal('delivery')}
            />
          ) : (
            <HeaderOption
              variant='delivery'
              onClick={(variant) => openModal(variant)}
              orderTypeList={orderTypeList}
            />
          )}
        </Menu>

        {onlineStatus && !auth && windowSize.width > 920 && (
          <RightHeader>
            <Menu>
              <MenuLink
                onClick={() => handleOpenLoginSignUp('login')}
                style={{ whiteSpace: 'nowrap' }}
                name='signin'
              >
                {t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </MenuLink>
            </Menu>
          </RightHeader>
        )}
      </InnerHeader>

      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width='100%'
          customStyle={{
            height: '100%',
            maxHeight: '100vh'
          }}
        >
          {modalSelected === 'delivery' && (
            <OrderTypeSelectorContent
              title={t('PLEASE_SELECT_YOUR_ORDER_TYPE', 'Please select your order type')}
              onClose={() => setModalIsOpen(false)}
              configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
              defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
            />
          )}
        </Modal>
      )}

      {authModalOpen && !auth && (
        <Modal
          open={authModalOpen}
          onRemove={() => closeAuthModal()}
          onClose={() => closeAuthModal()}
          width='50%'
          authModal
        >
          {modalPageToShow === 'login' && (
            <LoginForm
              isPopup
              useKioskApp
              useLoginByCellphone
              allowedLevels={[0, 2]}
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
            />
          )}
        </Modal>
      )}
    </HeaderContainer>
  )
}

export default Header
