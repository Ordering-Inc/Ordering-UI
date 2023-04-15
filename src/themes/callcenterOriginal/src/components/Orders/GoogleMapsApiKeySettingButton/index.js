import React, { useState, useEffect } from 'react'
import { useLanguage, GoogleMapsApiKeySetting as GoogleMapsApiKeySettingController } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Modal, Alert } from '../../Shared'
import { Button, Input } from '../../../styles'
import {
  Container,
  ModalBody
} from './style'

const GoogleMapsApiKeySettingUI = (props) => {
  const {
    actionState,
    handleSaveApiKey
  } = props

  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = (values) => {
    handleSaveApiKey(values.api_key)
  }

  useEffect(() => {
    if (!actionState.error) return
    setAlertState({
      open: true,
      content: actionState.error
    })
  }, [actionState.error])

  return (
    <Container>
      <Button
        borderRadius='8px'
        color='lightPrimary'
        onClick={() => setOpenModal(true)}
      >
        {t('INSTRUCTIONS_HERE', 'Instructions here')}
      </Button>
      <Modal
        width='700px'
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalBody onSubmit={handleSubmit(onSubmit)}>
          <h2>{t('GOOGLE_MAPS_API', 'Google Maps API Key')}</h2>
          <p>{t('GOOGLE_MAPS_API_SETUP_DESCRIPTION', 'Set up the google map API of your platform.')}</p>
          <Input
            placeholder={t('ADD_API_KEY', 'Add API Key')}
            name='api_key'
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Value is required'
              ).replace('_attribute_', t('API_KEY', 'Api Key'))
            })}
            autoComplete='off'
          />
          {errors?.api_key?.message && (
            <p className='error'>{errors.api_key.message}</p>
          )}
          <Button
            color='primary'
            borderRadius='8px'
            disabled={actionState.loading}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ModalBody>
      </Modal>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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

export const GoogleMapsApiKeySettingButton = (props) => {
  const apiKeySettingProps = {
    ...props,
    UIComponent: GoogleMapsApiKeySettingUI
  }
  return <GoogleMapsApiKeySettingController {...apiKeySettingProps} />
}
