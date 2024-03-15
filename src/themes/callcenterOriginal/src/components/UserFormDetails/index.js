import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSession, useLanguage, useCustomer, useConfig } from 'ordering-components'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'
import { formatPhoneNumber } from 'react-phone-number-input'

import {
  FormInput,
  ActionsForm,
  SkeletonForm,
  InputGroup,
  Divider,
  InputPhoneNumberWrapper
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { InputPhoneNumber } from '../../../../../components/InputPhoneNumber'
import { Alert } from '../Confirm'
import { sortInputFields } from '../../../../../utils'

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
    userData,
    isCustomerMode,
    confirmDataLayout,
    inputsconfirmData,
    handleRequestCustomerAddress,
    setCellphoneStartZero
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()

  const [{ user: userSession }] = useSession()
  const [{ configs }] = useConfig()
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { setUserCustomer }] = useCustomer()
  const emailInput = useRef(null)

  const user = userData || userSession
  const countryPhoneCode = user?.country_phone_code ?? user?.country_code

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
      if (formState.result.error && formState.changes?.cellphone && formState.changes?.country_phone_code) {
        phone = `+${formState.changes?.country_phone_code} ${formState.changes?.cellphone}`
        setUserPhoneNumber(phone)
        return
      }
      if (countryPhoneCode) {
        phone = `+${countryPhoneCode} ${user?.cellphone}`
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
      validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      })
      return
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (countryPhoneCode) {
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
    if (Object.keys(formState.changes).length === 0 && isPhoneNumberValid && confirmDataLayout) {
      handleRequestCustomerAddress()
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      let changes = null
      if (user?.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        }
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true)
      }
      handleButtonUpdateClick({
        ...changes,
        confirmDataLayout
      })
    }
  }

  const handleChangePhoneNumber = (number, isValid, rawNumber) => {
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
      if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
        if (phoneNumberParser?.nationalNumber) phoneNumberParser.nationalNumber = formatPhoneNumber(number)?.replace?.(/\s/g, '')
      }
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser?.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser?.nationalNumber
        }
      }
    }
    setCellphoneStartZero && setCellphoneStartZero(rawNumber?.number && rawNumber?.countryCallingCode ? rawNumber?.number : null)
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    if (emailInput?.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
    }
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if ((!formState?.loading && formState?.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState?.loading])

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
    if (!isEdit) onCancel && onCancel()
  }, [user, isEdit])

  useEffect(() => {
    if (!validationFields.loading && emailInput.current) {
      formMethods.setValue('email', formState?.result?.result
        ? formState?.result?.result?.email
        : formState?.changes?.email ?? (user && user?.email) ?? '')
    }
  }, [validationFields, emailInput.current])

  useEffect(() => {
    formMethods.register('email', {
      required: isRequiredField('email')
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
  }, [formMethods])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FormInput
        onSubmit={formMethods.handleSubmit(onSubmit)}
        isCheckout={isCheckout}
        isEdit={isEdit}
        confirmDataLayout={confirmDataLayout}
      >
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
            {!confirmDataLayout && (
              <Divider />
            )}
            {sortInputFields({ values: inputsconfirmData || validationFields?.fields?.checkout }).map(field =>
              showField && showField(field.code) && (
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    <InputGroup>
                      {!confirmDataLayout && (
                        <p>{t(field.code.toUpperCase(), field?.name)}</p>
                      )}
                      <Input
                        key={field.id}
                        type={field.type}
                        name={field.code}
                        className='form'
                        borderBottom
                        disabled={!isEdit}
                        placeholder={t(field.code.toUpperCase(), field?.name)}
                        defaultValue={
                          formState?.result?.result
                            ? formState?.result?.result[field.code]
                            : formState?.changes[field.code] ?? (user && user[field.code]) ?? ''
                        }
                        onChange={handleChangeInputEmail}
                        ref={(e) => {
                          emailInput.current = e
                        }}
                        autoComplete='off'
                      />
                    </InputGroup>
                  ) : (
                    <InputGroup confirmDataLayout={confirmDataLayout}>
                      {!confirmDataLayout && (
                        <p>{t(field.code.toUpperCase(), field?.name)}</p>
                      )}
                      <Input
                        key={field.id}
                        type={field.type}
                        borderBottom
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
                        ref={formMethods.register({
                          required: isRequiredField(field.code)
                            ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                            : null
                        })}
                        autoComplete='off'
                      />
                    </InputGroup>
                  )}

                </React.Fragment>
              )
            )}
            {!!showInputPhoneNumber && (
              <InputPhoneNumberWrapper confirmDataLayout={confirmDataLayout}>
                {!confirmDataLayout && (
                  <p>{t('PHONE', 'Phone')}</p>
                )}
                <InputPhoneNumber
                  user={user}
                  value={userPhoneNumber}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={setIsValidPhoneNumber}
                  disabled={!isEdit}
                />
              </InputPhoneNumberWrapper>
            )}
            {!confirmDataLayout && (
              <Divider />
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
              {((formState && Object.keys(formState?.changes).length > 0 && isEdit) || formState?.loading || confirmDataLayout) && (
                <Button
                  id='form-btn'
                  color='primary'
                  type='submit'
                  disabled={formState.loading}
                >
                  {confirmDataLayout
                    ? t('SEND_SMS', 'Send sms')
                    : formState.loading
                      ? t('UPDATING', 'Updating...')
                      : t('UPDATE', 'Update')}
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
