import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  useLanguage,
  CheckPassword as CheckPasswordController
} from 'ordering-components'
import { Modal } from '../Modal'
import { Button } from '../../../styles'

import {
  WrapperCheckPassword,
  ErrorText
} from './styles'

const ConfirmAdminUI = (props) => {
  const {
    checkPasswordStatus,
    handleChangePassword,
    getCheckPassword,

    open,
    onClose,
    onConfirm
  } = props

  const [, t] = useLanguage()
  const { handleSubmit } = useForm()

  const [password, setPassword] = useState('')

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    getCheckPassword()
  }

  useEffect(() => {
    handleChangePassword(password)
  }, [password])

  useEffect(() => {
    if (checkPasswordStatus.loading || checkPasswordStatus.error !== null) return
    if (checkPasswordStatus.result === 'OK') {
      onConfirm()
    }
  }, [checkPasswordStatus])

  useEffect(() => {
    setPassword('')
  }, [open])

  return (
    <Modal
      open={open}
      width={props.width || '600px'}
      onClose={() => onClose()}
    >
      <WrapperCheckPassword
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>{t('CONFIRM_PASSWORD', 'Confirm password')}</h3>
        <p>{t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')}</p>
        <input
          autoComplete='off'
          type='password'
          value={password}
          placeholder={t('PASSWORD', 'password')}
          onChange={(e) => handlePassword(e)}
        />
        {checkPasswordStatus?.error && (
          <ErrorText
            className='text-danger'
          >
            {checkPasswordStatus.error}
          </ErrorText>
        )}
        <Button
          color='primary'
          borderRadius='7.6px'
        >
          {checkPasswordStatus.loading ? t('LOADING', 'Loading') : t('CONFIRM', 'Confirm')}
        </Button>
      </WrapperCheckPassword>
    </Modal>
  )
}

export const ConfirmAdmin = (props) => {
  const checkPasswordControlProps = {
    ...props,
    UIComponent: ConfirmAdminUI
  }
  return (
    <>
      {props.open && (
        <CheckPasswordController {...checkPasswordControlProps} />
      )}
    </>
  )
}
