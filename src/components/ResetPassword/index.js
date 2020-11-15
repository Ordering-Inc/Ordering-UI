import React from 'react'
import { useForm } from 'react-hook-form'
import {
  useLanguage
} from 'ordering-components'
import {
  ResetPasswordContainer,
  FormSide,
  HeroSide,
  FormInput,
  TitleHeroSide
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

export const ResetPassword = (props) => {
  const {
    isPopup
  } = props

  const { handleSubmit } = useForm()
  const [, t] = useLanguage()
  const theme = useTheme()

  const onSubmit = () => {
    console.log('success')
  }

  const hanldeChangeInput = (e) => {
    console.log(e.target.value)
  }
  return (
    <ResetPasswordContainer isPopup={isPopup}>
      <HeroSide isPopup={isPopup}>
        <TitleHeroSide>
          <h1>{t('TITLE_RESET_PASSWORD', 'Reset password')}</h1>
          <p>{t('SUBTITLE_RESET_PASSWORD', '')}</p>
        </TitleHeroSide>
      </HeroSide>
      <FormSide isPopup={isPopup}>
        <img src={theme?.images?.logos?.logotype} alt='Logo' />
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type='password'
            name='password'
            aria-label='password'
            spellcheck='false'
            placeholder={t('NEW_PASSWORD', 'New passowrd')}
            onChange={(e) => hanldeChangeInput(e)}
          />
          <Input
            type='password'
            name='confirm-password'
            aria-label='confirm-password'
            spellcheck='false'
            placeholder={t('CONFIRM_PASSWORD', 'Confirm Password')}
            onChange={(e) => hanldeChangeInput(e)}
          />
          <Button type='submit' color='primary'>
            {t('CHANGE_PASSWORD', 'Change Password')}
          </Button>
        </FormInput>
      </FormSide>
    </ResetPasswordContainer>
  )
}
