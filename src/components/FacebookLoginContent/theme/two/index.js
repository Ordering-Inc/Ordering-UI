import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import FiEdit from '@meronex/icons/fi/FiEdit'
import {
  Container,
  Tagline,
  EditThisButton,
  TermsAndPrivacy,
  Cancel
} from './styles'
import { Button } from '../../../../styles/Buttons'
export const FacebookLoginContent = (props) => {
  const {
    handleFacebookLogin
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  const ContinueLogin = () => {
    handleFacebookLogin()
    props.onCancel()
  }
  return (
    <Container>
      <img alt='Isotype' width='80px' src={theme?.images?.logos?.isotypeInvert} loading='lazy' />
      <Tagline>
        <p>
          <span>{t('ORDERING', 'Ordering')}</span> {t('WILL_RECEIVE', 'will receive:')}
        </p>
        <p>{t('YOUR_NAME_PROFILE_EMAIL', 'your name and profile picture and emails address.')}</p>
      </Tagline>
      <EditThisButton>
        <FiEdit />
        {t('EDIT_THIS', 'Edit this')}
      </EditThisButton>
      <p>{t('THIS_DOESNT_LET_THE_APP_POST_TO_FACEBOOK', 'This doesn’t let the app post to Facebook')}</p>
      <Button color='blue' borderRounded onClick={() => ContinueLogin()}>
        {t('CONTINUE_AS_CUSTOMER', 'Continue as Customer')}
      </Button>
      <Cancel onClick={() => props.onCancel()}>
        {t('CANCEL', 'Cancel')}
      </Cancel>
      <TermsAndPrivacy>
        {t('ORDERINGS', 'Ordering’s')} <span>{t('PRIVACY_POLICY', 'Privacy Policy')}</span> {t('AND', 'and')} <span>{t('TERMS', 'Terms')}</span>
      </TermsAndPrivacy>
    </Container>
  )
}
