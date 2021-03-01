import React, { useState } from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components'
import EnFacebook from '@meronex/icons/en/EnFacebook'
import { Modal } from '../Modal/theme/two'
import { FacebookLoginContent } from '../FacebookLoginContent'
import { FacebookButton } from './styles'

const FacebookLoginButtonUI = (props) => {
  const {
    isCustomTitle,
    handleFacebookLogin
  } = props

  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(false)

  const onClickFacebookButton = () => {
    setOpenModal(true)
  }
  return (
    <>
      <FacebookButton
        initialIcon
        isCustomTitle={isCustomTitle}
        onClick={() => onClickFacebookButton()}
      >
        {!isCustomTitle ? (
          <div><EnFacebook /> {t('CONTINUE_WITH_FACEBOOK', 'Continue with Facebook')}</div>
        ) : (
          <div>{isCustomTitle}</div>
        )}
      </FacebookButton>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        hideCloseDefault
      >
        <FacebookLoginContent
          handleFacebookLogin={handleFacebookLogin}
          onCancel={() => setOpenModal(false)}
        />
      </Modal>
    </>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }
  return <FacebookLoginController {...facebookLoginProps} />
}
