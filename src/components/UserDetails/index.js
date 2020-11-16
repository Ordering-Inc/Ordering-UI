import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController, useLanguage, useSession } from 'ordering-components'

import {
  Container,
  Header,
  FormInput,
  SkeletonForm
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    cartStatus,
    formState,
    userState,
    showField,
    validationFields,
    useValidationFields,
    handleButtonUpdateClick,
    isRequiredField,
    handleChangeInput,
    onEditUserClick
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = () => {
    if (Object.keys(formState.changes).length !== 0) {
      handleButtonUpdateClick()
    }
    onEditUserClick()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
    if ((!formState.loading && formState.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
    }
  }, [formState.loading])

  return (
    <>
      {((useValidationFields && validationFields.loading) || userState.loading) && (
        <Container>
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
        </Container>
      )}

      {userState.result && userState.result.error && (
        <p>{userState.result.result}</p>
      )}

      {!((useValidationFields && validationFields.loading) || userState.loading) && userState.result && userState.result.result && (
        <Container>
          <Header>
            <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            {!userState.result.error && (useValidationFields || !validationFields.loading) && cartStatus !== 2 && (
              !isEdit ? (
                <TiPencil className='edit' onClick={() => onEditUserClick()} />
              ) : (
                <FcCancel className='cancel' onClick={() => onEditUserClick()} />
              )
            )}
          </Header>
          <FormInput onSubmit={handleSubmit(onSubmit)}>
            {!validationFields.loading ? (
              <>
                {Object.values(validationFields.fields).map(field => (
                  showField(field.code) && (
                    <React.Fragment key={field.id}>
                      {field.code === 'mobile_phone' &&
                        <Input
                          placeholder={t('country_phone_code', 'Mobile Phone Country Code')}
                          name='country_phone_code'
                          defaultValue={user.country_phone_code}
                          onChange={handleChangeInput}
                          disabled={!isEdit}
                          ref={register({
                            required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                            pattern: {
                              value: /^(\+?\d{1,3}|\d{1,4})$/,
                              message: t('BAD_COUNTRY_CODE', 'Bad country Code')
                            }
                          })}
                        />}
                      <Input
                        key={field.id}
                        type={(field.id >= 1 && field.id < 6) || field.id >= 55 ? field.type : 'hidden'}
                        name={field.code === 'mobile_phone' ? 'cellphone' : field.code}
                        placeholder={t(field.name)}
                        disabled={!isEdit}
                        defaultValue={field.code === 'mobile_phone' ? user.cellphone : user[field.code]}
                        onChange={handleChangeInput}
                        ref={register({
                          required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                          pattern: {
                            value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                            message: field.code === 'email' ? t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                          }
                        })}
                      />
                    </React.Fragment>
                  )
                ))}
                <Input
                  type='password'
                  name='password'
                  placeholder={t('FRONT_VISUALS_PASSWORD')}
                  onChange={handleChangeInput}
                  disabled={!isEdit}
                  ref={register({
                    required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                    minLength: {
                      value: 5,
                      message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                />
                {Object.keys(formState.changes).length > 0 && isEdit && (
                  <Button
                    color='primary'
                    type='submit'
                  >
                    {t('UPDATE', 'Update')}
                  </Button>
                )}

                {formState.loading && (
                  <Button
                    color='primary'
                    type='button'
                  >
                    {t('UPDATING', 'Updating...')}
                  </Button>
                )}
              </>
            ) : (
              <SkeletonForm>{[...Array(6)].map((item, i) => (
                <Skeleton key={i} />
              ))}
              </SkeletonForm>
            )}
          </FormInput>
        </Container>
      )}
      <Alert
        title={t('PROFILE', 'profile')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return <UserDetailsController {...userDetailsProps} />
}
