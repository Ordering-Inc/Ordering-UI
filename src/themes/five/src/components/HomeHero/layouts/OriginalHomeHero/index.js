import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, useOrderingTheme, useConfig } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput,
  LogoWrapper,
  UseAccount,
  HeroContent,
  SectionHeader,
  PoweredByOrdering
} from './styles'

import { Modal } from '../../../Modal'
import { Button } from '../../../../styles/Buttons'
import { AddressForm } from '../../../AddressForm'
import { LoginForm } from '../../../LoginForm'
import { SignUpForm } from '../../../SignUpForm'
import { ForgotPasswordForm } from '../../../ForgotPasswordForm'
import { AddressList } from '../../../AddressList'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'

export const OriginalHomeHero = (props) => {
  const { onFindBusiness, notificationState } = props

  const [{ auth }, { login }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))
  const windowSize = useWindowSize()
  const [orderingTheme] = useOrderingTheme()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)
  const [newAddressModalOpened, setNewAddressModalOpened] = useState(false)

  const isShowLoginAccount = !orderingTheme?.theme?.mobile_view_web?.components?.home?.components?.login_account?.hidden
  const bgImg = orderingTheme?.theme?.my_products?.components?.images?.components?.homepage_background?.components?.image
  const logo = orderingTheme?.theme?.my_products?.components?.images?.components?.logo?.components?.image
  const mobileBgImg = orderingTheme?.theme?.my_products?.components?.images?.components?.homepage_mobile_background?.components?.image
  const isFullScreen = orderingTheme?.theme?.my_products?.components?.images?.components?.homepage_image_fullscreen
  const isChew = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value
  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleOpenLoginSignUp = (index) => {
    setModalPageToShow(index)
    setAuthModalOpen(true)
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

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  useEffect(() => {
    if (newAddressModalOpened) return
    if (auth && !orderState.loading && !orderState?.options?.address?.location) {
      setModals({ ...modals, listOpen: true })
      setNewAddressModalOpened(true)
    }
  }, [auth, orderState, newAddressModalOpened])

  return (
    <HeroContainer
      mb={!auth && isShowLoginAccount && '30vh'}
      bgimage={windowSize.width < 576
        ? (mobileBgImg || theme.images?.general?.homeHeroMobile)
        : (bgImg || theme.images?.general?.homeHero)}
      isFullScreen={isFullScreen}
    >
      <ContentWrapper>
        {windowSize.width < 576 && !isChew && (
          <LogoWrapper>
            <img alt='Logotype' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
          </LogoWrapper>
        )}
        <HeroContent>
          <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
          <Slogan>{t('SUBTITLE_HOME', theme?.defaultLanguages?.SUBTITLE_HOME || 'Let\'s start to order food now')}</Slogan>
          <WrapInput onClick={handleAddressInput} withIcon>
            <HiOutlineLocationMarker />
            <p>
              {orderState?.options?.address?.address || t('WHERE_DO_WE_DELIVERY', theme?.defaultLanguages?.WHERE_DO_WE_DELIVERY || 'Where do we delivery?')}
            </p>
          </WrapInput>

          <Button
            color='primary'
            name='find-business'
            onClick={handleFindBusinesses}
          >
            {t('FIND_BUSINESSES', theme?.defaultLanguages?.FIND_BUSINESSES || 'Find businesses')}
          </Button>
        </HeroContent>
      </ContentWrapper>

      {windowSize.width < 576 && !auth && isShowLoginAccount && (
        <>
          {enabledPoweredByOrdering && (
            <PoweredByOrdering>
              {t('POWERED_BY', 'Powered by')}
              <a href='https://www.ordering.co'>
                {t('ORDERING_CO', 'Ordering.co')}
              </a>
            </PoweredByOrdering>
          )}
          <UseAccount>
            <SectionHeader>
              {t('YOUR_ACCOUNT', 'Use your account')}
            </SectionHeader>
            <Button color='primary' onClick={() => handleOpenLoginSignUp('login')}>{t('LOGIN', 'login')}</Button>
            <Button color='primary' onClick={() => handleOpenLoginSignUp('signup')}>{t('SIGNUP', 'signUp')}</Button>
          </UseAccount>
        </>
      )}

      <Modal
        title={t('WHERE_DO_WE_DELIVERY', theme?.defaultLanguages?.WHERE_DO_WE_DELIVERY || 'Where do we delivery?')}
        open={modals.formOpen}
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <AddressForm
          useValidationFileds
          address={orderState?.options?.address || {}}
          onClose={() => setModals({ ...modals, formOpen: false })}
          onSaveAddress={() => setModals({ ...modals, formOpen: false })}
          onCancel={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>
      <Modal
        title={t('WHERE_DO_WE_DELIVERY', theme?.defaultLanguages?.WHERE_DO_WE_DELIVERY || 'Where do we delivery?')}
        open={modals.listOpen}
        width='70%'
        onClose={() => setModals({ ...modals, listOpen: false })}
      >
        <AddressList
          isModal
          changeOrderAddressWithDefault
          userId={isNaN(userCustomer) ? null : userCustomer}
          onCancel={() => setModals({ ...modals, listOpen: false })}
          onAccept={() => handleFindBusinesses()}
        />
      </Modal>
      {authModalOpen && !auth && (
        <Modal
          open={authModalOpen}
          onRemove={() => closeAuthModal()}
          width='50%'
          authModal
        >
          {modalPageToShow === 'login' && (
            <LoginForm
              notificationState={notificationState}
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
              notificationState={notificationState}
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
    </HeroContainer>
  )
}
