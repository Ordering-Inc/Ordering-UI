import React, { useEffect, useState } from 'react'
import { useLanguage, RedeemGiftCard as RedeemGiftCardController } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

import {
  Container,
  FormController
} from './styles'

const RedeemGiftCardUI = (props) => {
  const {
    actionState,
    handleApply
  } = props

  const [, t] = useLanguage()
  const { register, handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = (values) => {
    handleApply(values)
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!actionState.error) return
    setAlertState({
      open: true,
      content: actionState.error
    })
  }, [actionState.error])

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>{t('REDEEM_GIFT_CARD', 'Redeem a gift card')}</h2>
      <FormController>
        <label>{t('GIFT_CARD_CODE', 'Gift card code')}</label>
        <Input
          name='code'
          placeholder='0000 0000'
          type='text'
          ref={register({
            required: t('VALIDATION_ERROR_REQUIRED', 'Code is required').replace('_attribute_', t('CODE', 'Code'))
          })}
          autoComplete='off'
        />
      </FormController>
      <FormController>
        <label>{t('PASSWORD', 'Password')}</label>
        <Input
          name='password'
          type='password'
          ref={register({
            required: t('VALIDATION_ERROR_REQUIRED', 'Code is required').replace('_attribute_', t('PASSWORD', 'Password'))
          })}
          autoComplete='new-password'
        />
      </FormController>
      <Button
        type='submit'
        color='primary'
        disabled={actionState.loading}
      >
        {actionState?.loading ? t('LOADING', 'Loading') : t('APPLY_TO_YOUR_BALANCE', 'Apply to your balance')}
      </Button>
      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const RedeemGiftCard = (props) => {
  const redeemGiftCardProps = {
    ...props,
    UIComponent: RedeemGiftCardUI
  }
  return <RedeemGiftCardController {...redeemGiftCardProps} />
}
