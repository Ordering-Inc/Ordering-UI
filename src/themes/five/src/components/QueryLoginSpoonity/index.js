import React from 'react'
import { QueryLoginSpoonity as QueryLoginSpoonityController, useEvent, useLanguage, useSession, useSite } from 'ordering-components'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import Modal from '../Modal'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { useTheme } from 'styled-components'

const QueryLoginSpoonityUI = (props) => {
  const {
    userState,
    notificationState,
    authModalOpen,
    setAuthModalOpen,
    modalPageToShow,
    setModalPageToShow
  } = props

  const [, t] = useLanguage()
  const [{ auth }, { login }] = useSession()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ site }] = useSite()
  const businessUrlTemplate = site?.business_url_template || '/store/:business_slug'

  const closeAuthModal = () => {
    setAuthModalOpen(false)
    setModalPageToShow(null)
    const store = window.location.pathname.split('/')?.filter(text => text !== '' && text !== 'store')?.[0]
    if (store) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: store } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${store}` })
      }
    } else {
      events.emit('go_to_page', { page: 'search' })
    }
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

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  return (
    <>
      {userState?.loading ? (
        <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading Ordering Dashboard...')} />
      ) : (
        <>
          {authModalOpen && !auth && (
            <Modal
              open={authModalOpen}
              onRemove={() => closeAuthModal()}
              onClose={() => closeAuthModal()}
              width='50%'
              authModal
              closeOnBackdrop
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
                  closeModal={() => closeAuthModal()}
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
        </>
      )}
    </>
  )
}

export const QueryLoginSpoonity = (props) => {
  const queryProps = {
    ...props,
    UIComponent: QueryLoginSpoonityUI
  }
  return <QueryLoginSpoonityController {...queryProps} />
}
