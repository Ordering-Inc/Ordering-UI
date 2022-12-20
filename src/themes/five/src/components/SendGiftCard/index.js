import React, { useEffect, useState } from 'react'
import { useLanguage, SendGiftCard as SendGiftCardController } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'
import {
  Container,
  FormController
} from './styles'

const SendGiftCardUI = (props) => {
  const {
    actionState,
    handleSendGiftCard
  } = props
  const [, t] = useLanguage()
  const { register, handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = (values) => {
    handleSendGiftCard(values)
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>{t('GIFT_CARD_DETAILS', 'Gift Card details')}</h2>
      <FormController>
        <label>{t('TO', 'To')}</label>
        <Input
          name='email'
          placeholder={t('ENTER_AN_EMAIL', 'Enter an email')}
          ref={register({
            required: t('VALIDATION_ERROR_REQUIRED', 'To email is required').replace('_attribute_', t('EMAIL', 'EMail'))
          })}
          autoComplete='off'
        />
      </FormController>
      <FormController>
        <label>{t('FROM', 'From')}</label>
        <Input
          name='user_name'
          ref={register()}
          placeholder={t('WRITE_YOUR_NAME', 'Write your name')}
          autoComplete='off'
        />
      </FormController>
      <FormController>
        <label>{t('TITLE', 'Title')}</label>
        <Input
          name='title'
          ref={register()}
          placeholder={t('TITLE', 'Title')}
          autoComplete='off'
        />
      </FormController>
      <FormController>
        <label>{t('MESSAGES', 'Messages')}</label>
        <TextArea
          name='message'
          ref={register()}
          rows={5}
          placeholder={t('TYPE_YOUR_MESSAGE_HERE', 'Type your message here')}
          autoComplete='off'
        />
      </FormController>
      <Button
        type='submit'
        color='primary'
        disabled={actionState.loading}
      >
        {actionState?.loading ? t('LOADING', 'Loading') : t('SEND_GIFT_CARD', 'Send gift card')}
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

export const SendGiftCard = (props) => {
  const sendGiftCardProps = {
    ...props,
    UIComponent: SendGiftCardUI
  }
  return <SendGiftCardController {...sendGiftCardProps} />
}
