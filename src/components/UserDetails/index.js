import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController, useLanguage, useSession } from 'ordering-components'
import parsePhoneNumber from 'libphonenumber-js'
import { flatArray } from '../../utils'

import {
  Container,
  Header,
  FormInput,
  SkeletonForm,
  SideForm
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'

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
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [validationFieldsSorted, setValidationFieldsSorted] = useState([])

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber && validationFields?.fields?.cellphone?.required) {
      setAlertState({
        open: true,
        content: [t('ERROR_PHONE_NUMBER', 'The Phone Number field is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
      })
      return
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      let changes = null
      if (user?.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        }
      }
      handleButtonUpdateClick(changes)
      onEditUserClick()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)
    if (isValid) {
      const phoneNumberParser = parsePhoneNumber(number)
      const phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
      handleChangeInput(phoneNumber, true)
    }
  }

  const setUserCellPhone = () => {
    if (user?.cellphone) {
      let phone = null
      if (user?.country_phone_code) {
        phone = `+${user?.country_phone_code} `
      }
      phone = `${phone}${user?.cellphone}`
      setUserPhoneNumber(phone)
    }
  }

  const sortValidationFields = () => {
    const fields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email']
    const fieldsSorted = []
    const validationsFieldsArray = Object.values(validationFields.fields)

    fields.forEach(f => {
      validationsFieldsArray.forEach(field => {
        if (f === field.code) {
          fieldsSorted.push(field)
        }
      })
    })

    fieldsSorted.push(validationsFieldsArray.filter(field => !fields.includes(field.code)))
    setValidationFieldsSorted(flatArray(fieldsSorted))
  }

  useEffect(() => {
    if (validationFields.fields) {
      sortValidationFields()
    }
  }, [validationFields.fields])

  useEffect(() => {
    if ((user || !isEdit) && !formState.loading) {
      setUserCellPhone()
    }
  }, [user, isEdit])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const content = Object.values(errors).map(error => error.message)
      if (!isValidPhoneNumber) {
        content.push(t('INVALID_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
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
          <SideForm>
            <FormInput onSubmit={handleSubmit(onSubmit)}>
              {!validationFields.loading ? (
                <>
                  {validationFieldsSorted.map(field => field.code !== 'mobile_phone' && (
                    showField(field.code) && (
                      <React.Fragment key={field.id}>
                        <Input
                          key={field.id}
                          type={(field.id >= 1 && field.id < 6) || field.id >= 55 ? field.type : 'hidden'}
                          name={field.code}
                          className='form'
                          disabled={!isEdit}
                          placeholder={t(field.name)}
                          defaultValue={user[field.code]}
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
                    className='form'
                    disabled={!isEdit}
                    placeholder={t('FRONT_VISUALS_PASSWORD')}
                    onChange={handleChangeInput}
                    ref={register({
                      required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                      minLength: {
                        value: 5,
                        message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                      }
                    })}
                  />

                  <InputPhoneNumber
                    value={userPhoneNumber}
                    setValue={handleChangePhoneNumber}
                    handleIsValid={setIsValidPhoneNumber}
                    disabled={!isEdit}
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
          </SideForm>
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
