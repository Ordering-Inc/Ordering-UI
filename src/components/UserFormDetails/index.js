import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSession, useLanguage, useCustomer } from 'ordering-components'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'

import { FormInput, ActionsForm, SkeletonForm } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { Alert } from '../Confirm'

import { flatArray } from '../../utils'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone']

export const UserFormDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    onCancel,
    showField,
    cleanFormState,
    onCloseProfile,
    isRequiredField,
    validationFields,
    handleChangeInput,
    handleButtonUpdateClick,
    isCheckout,
    userData
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [, t] = useLanguage()

  const [{ user: userSession }] = useSession()
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [validationFieldsSorted, setValidationFieldsSorted] = useState([])
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { setUserCustomer }] = useCustomer()

  const user = userData || userSession

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  const setUserCellPhone = (isEdit = false) => {
    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber)
      return
    }
    if (user?.cellphone) {
      let phone = null
      if (user?.country_phone_code) {
        phone = `+${user?.country_phone_code} ${user?.cellphone}`
      } else {
        phone = user?.cellphone
      }
      setUserPhoneNumber(phone)
      return
    }
    setUserPhoneNumber(user?.cellphone || '')
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
        validationFields?.fields?.checkout?.cellphone?.required &&
        validationFields?.fields?.checkout?.cellphone?.enabled
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      })
      return
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user?.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        })
        return
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
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
    }
  }

  useEffect(() => {
    if (!formState.loading && !formState.result.error && formState.result.result) {
      setUserCustomer(formState.result.result, true)
    }
  }, [formState.result.result])

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const sortValidationFields = () => {
    const fields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email']
    const fieldsSorted = []
    const validationsFieldsArray = Object.values(validationFields.fields?.checkout)

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
    if (Object.keys(errors).length > 0) {
      const content = Object.values(errors).map(error => error.message)
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [errors])

  useEffect(() => {
    if ((!formState?.loading && formState?.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState?.loading])

  useEffect(() => {
    if (validationFields?.fields?.checkout) {
      sortValidationFields()
    }
  }, [validationFields?.fields?.checkout])

  useEffect(() => {
    if (!isEdit && onCloseProfile) {
      onCloseProfile()
    }
    if ((user || !isEdit) && !formState?.loading) {
      setUserCellPhone()
      if (!isEdit && !formState?.loading) {
        cleanFormState && cleanFormState({ changes: {} })
        setUserCellPhone(true)
      }
    }
  }, [user, isEdit])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FormInput onSubmit={handleSubmit(onSubmit)} isCheckout={isCheckout}>
        {!validationFields?.loading ? (
          <>
            {
            props.beforeMidElements?.map((BeforeMidElements, i) => (
              <React.Fragment key={i}>
                {BeforeMidElements}
              </React.Fragment>))
            }
            {
            props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />))
            }
            {validationFieldsSorted.map(field => !notValidationFields.includes(field.code) && (
              showField && showField(field.code) && (
                <React.Fragment key={field.id}>
                  <Input
                    key={field.id}
                    type={(field.id >= 1 && field.id < 6) || field.id >= 55 ? field.type : 'hidden'}
                    name={field.code}
                    className='form'
                    disabled={!isEdit}
                    placeholder={t(field.code.toUpperCase(), field?.name)}
                    defaultValue={
                      formState?.result?.result
                        ? formState?.result?.result[field.code]
                        : formState?.changes[field.code] ?? (user && user[field.code]) ?? ''
                    }
                    onChange={handleChangeInput}
                    ref={register({
                      required: isRequiredField(field.code)
                        ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                        : null,
                      pattern: {
                        value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                        message: field.code === 'email' ? t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                      }
                    })}
                    autoComplete='off'
                  />
                </React.Fragment>
              )
            ))}
            {!isCheckout && (
              <Input
                type='password'
                name='password'
                className='form'
                disabled={!isEdit}
                placeholder={t('FRONT_VISUALS_PASSWORD', 'Password')}
                onChange={handleChangeInput}
                ref={register({
                  required: isRequiredField('password')
                    ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                    : null,
                  minLength: {
                    value: 8,
                    message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                  }
                })}
              />
            )}
            {!!showInputPhoneNumber && (
              <InputPhoneNumber
                user={user}
                value={userPhoneNumber}
                setValue={handleChangePhoneNumber}
                handleIsValid={setIsValidPhoneNumber}
                disabled={!isEdit}
              />
            )}
            {
            props.afterMidElements?.map((MidElement, i) => (
              <React.Fragment key={i}>
                {MidElement}
              </React.Fragment>))
            }
            {
             props.afterMidComponents?.map((MidComponent, i) => (
               <MidComponent key={i} {...props} />))
            }
            <ActionsForm>
              {onCancel && (
                <Button
                  outline
                  type='button'
                  onClick={() => onCancel(false)}
                  disabled={formState.loading}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              )}

              {((formState && Object.keys(formState?.changes).length > 0 && isEdit) || formState?.loading) && (
                <Button
                  id='form-btn'
                  color='primary'
                  type='submit'
                  disabled={formState.loading}
                >
                  {formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')}
                </Button>
              )}
            </ActionsForm>
          </>
        ) : (
          <SkeletonForm>
            {[...Array(6)].map((item, i) => (
              <Skeleton key={i} />
            ))}
          </SkeletonForm>
        )}
      </FormInput>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
