import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, RedeemGiftCard as RedeemGiftCardController } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Alert } from '../../Confirm'
import { Button } from '../../../styles/Buttons'
import { Input } from '../../../styles/Inputs'

import {
  Container,
  FormContainer,
  FormController,
  GiftCardInfoContainer
} from './styles'

const RedeemGiftCardUI = (props) => {
  const {
    actionState,
    redeemedGiftCard,
    handleApply,
    onClose
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
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
    <Container>
      {!redeemedGiftCard ? (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
                required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
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
        </FormContainer>
      ) : (
        <>
          <h2>{t('GIFT_CARD', 'Gift card')}</h2>
          <GiftCardInfoContainer>
            <p>{t('TYPE', 'Type')}: {redeemedGiftCard?.type}</p>
            <p>{t('AMOUNT', 'Amount')}: {parsePrice(redeemedGiftCard?.amount)}</p>
            <p>{t('FROM', 'From')}: {redeemedGiftCard?.receiver?.name} {redeemedGiftCard?.receiver?.lastname}</p>
            {redeemedGiftCard?.title && <p>{t('TITLE', 'Title')}: {redeemedGiftCard?.title}</p>}
            {redeemedGiftCard?.message && <p>{t('MESSAGES', 'Messages')}: {redeemedGiftCard?.message}</p>}
            <Button
              color='primary'
              onClick={() => onClose()}
            >
              {t('OK', 'Ok')}
            </Button>
          </GiftCardInfoContainer>
        </>
      )}
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
