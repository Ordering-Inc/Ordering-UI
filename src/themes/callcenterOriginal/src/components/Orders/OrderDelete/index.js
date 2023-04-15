import React, { useEffect, useState } from 'react'
import { useLanguage, CheckPassword as CheckPasswordController } from 'ordering-components'
import FaTrash from '@meronex/icons/fa/FaTrash'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { Button } from '../../../styles/Buttons'
import { Modal } from '../../Shared'

import {
  WrapperCheckPassword,
  ErrorText
} from './styles'

const OrderDeleteUI = (props) => {
  const {
    checkPasswordStatus,
    handleChangePassword,
    getCheckPassword,
    handleDeleteMultiOrders
  } = props
  const { width } = useWindowSize()
  const [, t] = useLanguage()

  const [checkPasswordModalOpen, setCheckPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState('')
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleModalOpen = () => {
    setPassword('')
    setCheckPasswordModalOpen(true)
  }

  useEffect(() => {
    handleChangePassword(password)
  }, [password])

  useEffect(() => {
    if (checkPasswordStatus.loading || checkPasswordStatus.error !== null) return
    if (checkPasswordStatus.result === 'OK') {
      setCheckPasswordModalOpen(false)
      setPassword('')
      handleDeleteMultiOrders()
    }
  }, [checkPasswordStatus])

  return (
    <>
      <Button
        borderRadius='8px'
        color='secundary'
        onClick={() => handleModalOpen()}
      >
        {width > 600 && t('DELETE', 'Delete')}
        <FaTrash />
      </Button>

      <Modal
        open={checkPasswordModalOpen}
        width='600px'
        onClose={() => setCheckPasswordModalOpen(false)}
      >
        <WrapperCheckPassword>
          <h3>{t('CONFIRM_PASSWORD', 'Confirm password')}</h3>
          <p>{t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')}</p>
          <input
            autoComplete='new-password'
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
            onClick={() => getCheckPassword()}
          >
            {t('CONFIRM', 'Confirm')}
          </Button>
        </WrapperCheckPassword>
      </Modal>
    </>
  )
}

export const OrderDelete = (props) => {
  const checkPasswordControlProps = {
    ...props,
    UIComponent: OrderDeleteUI
  }
  return <CheckPasswordController {...checkPasswordControlProps} />
}
