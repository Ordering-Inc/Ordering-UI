import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSession, useLanguage, useCustomer, useConfig } from 'ordering-components'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'
import { useTheme } from 'styled-components'
import { SignUpForm } from '../SignUpForm'

import {
  FormInput,
  ActionsForm,
  SkeletonForm,
  InputGroup,
  InputPhoneNumberWrapper,
  LanguageSelectorWrapper,
  SwitchWrapper,
  NotificationsGroupSwitchWrapper
} from './styles'

import { Switch } from '../../../../../styles/Switch'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { InputPhoneNumber } from '../../../../../components/InputPhoneNumber'
import { LanguageSelector } from '../../../../../components/LanguageSelector'
import { Alert } from '../Confirm'
import { sortInputFields } from '../../../../../utils'
import Modal from '../Modal'
import moment from 'moment'
import { DatePickerUI } from '../DatePicker'

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
    setWillVerifyOtpState,
    handleChangePromotions,
    isOldLayout,
    requiredFields,
    handleChangeNotifications,
    handlePlaceOrderAsGuest,
    isAllowGuest
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [{ user: userSession }, { login }] = useSession()
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { setUserCustomer }] = useCustomer()
  const [isChanged, setIsChanged] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const emailInput = useRef(null)
  const user = userData || userSession
  const [birthdate, setBirthdate] = useState(user?.birthdate ? moment(user?.birthdate, 'YYYY-MM-DD').toDate() : null)
  const [openCalendar, setOpenCalendar] = useState(false)

  const [notificationList, setNotificationList] = useState({
    email: formState?.result?.result
      ? !!formState?.result?.result?.settings?.email?.newsletter
      : !!(formState?.changes?.settings?.email?.newsletter ?? (user && user?.settings?.email?.newsletter)),
    sms: formState?.result?.result
      ? !!formState?.result?.result?.settings?.sms?.newsletter
      : !!(formState?.changes?.settings?.sms?.newsletter ?? (user && user?.settings?.sms?.newsletter)),
    notification: formState?.result?.result
      ? !!formState?.result?.result?.settings?.notification?.newsletter
      : !!(formState?.changes?.settings?.notification?.newsletter ?? (user && user?.settings?.notification?.newsletter))
  })

  const showCustomerCellphone = !theme?.profile?.components?.cellphone?.hidden
  const showCustomerPassword = !theme?.profile?.components?.password?.hidden
  const showCustomerPromotions = !theme?.profile?.components?.promotions?.hidden
  const showLangauges = !theme?.profile?.components?.languages?.hidden
  const showNotifications = !theme?.profile?.components?.notification_settings?.hidden

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
    handlePlaceOrderAsGuest && handlePlaceOrderAsGuest()
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false
  const showInputBirthday = validationFields?.fields?.checkout?.birthdate?.enabled ?? false

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
    const requiredPhone = (user?.guest_id && requiredFields?.includes?.('cellphone')) || (validationFields?.fields?.checkout?.cellphone?.enabled && validationFields?.fields?.checkout?.cellphone?.required)
    if (!userPhoneNumber &&
      (requiredPhone || configs?.verification_phone_required?.value === '1')
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
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true)
      }
      handleButtonUpdateClick(changes)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)
    setIsChanged(true)

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

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    if (emailInput.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
    }
  }

  const showFieldWithTheme = (name) => {
    return !theme?.profile?.components?.[name]?.hidden
  }

  const _handleChangeDate = (date) => {
    setBirthdate(date)
    const _birthdate = moment(date).format('YYYY-MM-DD')
    handleChangeInput({ target: { name: 'birthdate', value: _birthdate } })
    setOpenCalendar(false)
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
      if (!isEdit) {
        cleanFormState && cleanFormState({ changes: {} })
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
    if (!validationFields.loading && birthdate) {
      formMethods.setValue('birthdate', formState?.result?.result
        ? formState?.result?.result?.birthdate
        : formState?.changes?.birthdate ?? (user && user?.birthdate) ?? '')
    }
  }, [validationFields, birthdate])

  useEffect(() => {
    if (requiredFields) return
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

  useEffect(() => {
    if (isChanged && userPhoneNumber && isValidPhoneNumber && formState?.changes?.country_phone_code && formState?.changes?.cellphone && configs?.verification_phone_required?.value === '1') {
      setWillVerifyOtpState && setWillVerifyOtpState(true)
    }
  }, [isValidPhoneNumber, userPhoneNumber, configs?.verification_phone_required?.value, isChanged])

  useEffect(() => {
    if (requiredFields && !requiredFields?.includes?.('cellphone')) setIsValidPhoneNumber(true)
  }, [requiredFields])

  const handleEditNotifications = (key, value) => {
    setNotificationList({
      ...notificationList,
      [key]: value
    })
  }

  useEffect(() => {
    isEdit && handleChangeNotifications(notificationList)
  }, [notificationList])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)} isCheckout={isCheckout}>
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
            {sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
              ((showField && showField(field.code) && showFieldWithTheme(field.code)) || user?.guest_id) && (
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    ((requiredFields && requiredFields?.includes?.(field.code)) || !requiredFields) && (
                      <InputGroup>
                        <p>{t(field.code.toUpperCase(), field?.name)}</p>
                        <Input
                          key={field.id}
                          type={field.type}
                          name={field.code}
                          className='form'
                          borderBottom
                          disabled={!isEdit}
                          placeholder={t(field.code.toUpperCase(), field?.name)}
                          defaultValue={formState?.changes[field.code] ?? (user && user[field.code]) ?? ''}
                          onChange={handleChangeInputEmail}
                          ref={(e) => {
                            emailInput.current = e
                          }}
                          autoComplete='off'
                        />
                      </InputGroup>
                    )
                  ) : (
                    ((requiredFields && requiredFields?.includes?.(field.code)) || !requiredFields) && (
                      <InputGroup>
                        <p>{t(field.code.toUpperCase(), field?.name)}</p>
                        <Input
                          key={field.id}
                          type={field.type}
                          borderBottom
                          name={field.code}
                          className='form'
                          disabled={!isEdit}
                          placeholder={t(field.code.toUpperCase(), field?.name)}
                          defaultValue={formState?.changes[field.code] ?? (user && user[field.code]) ?? ''}
                          onChange={handleChangeInput}
                          ref={formMethods.register({
                            required: isRequiredField(field.code)
                              ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                              : null
                          })}
                          autoComplete='off'
                        />
                      </InputGroup>
                    )
                  )}
                </React.Fragment>
              )
            )}
            {((!user?.guest_id && showInputBirthday) || (user?.guest_id && requiredFields?.includes?.('birthdate'))) && (
              <InputPhoneNumberWrapper>
                <p>{t('BIRTHDATE', 'Birthdate')}</p>
                <Input
                  borderBottom
                  className='form'
                  value={birthdate ? moment(birthdate).format('YYYY/MM/DD') : ''}
                  autoComplete='off'
                  onFocus={() => setOpenCalendar(true)}
                />
                {openCalendar && (
                  <DatePickerUI value={birthdate} onChange={_handleChangeDate} name={'birthdate'} />
                )}
              </InputPhoneNumberWrapper>
            )}
            {((!user?.guest_id && !!showInputPhoneNumber) || (user?.guest_id && requiredFields?.includes?.('cellphone'))) && showCustomerCellphone && ((requiredFields && requiredFields?.includes?.('cellphone')) || !requiredFields) && (
              <InputPhoneNumberWrapper>
                <p>{t('PHONE', 'Phone')}</p>
                <InputPhoneNumber
                  user={user}
                  value={userPhoneNumber}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={setIsValidPhoneNumber}
                  disabled={!isEdit}
                />
              </InputPhoneNumberWrapper>
            )}
            {!isCheckout && showCustomerPassword && !requiredFields && !isCustomerMode && (
              <InputGroup>
                <p>{t('PASSWORD', 'Password')}</p>
                <Input
                  type='password'
                  name='password'
                  className='form'
                  disabled={!isEdit}
                  borderBottom
                  placeholder={t('FRONT_VISUALS_PASSWORD', 'Password')}
                  onChange={handleChangeInput}
                  ref={formMethods.register({
                    required: isRequiredField('password')
                      ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                      : null,
                    minLength: {
                      value: 8,
                      message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                />
              </InputGroup>
            )}
            {showNotifications && showCustomerPromotions && !requiredFields && !isCustomerMode && (
              <>
                <NotificationsGroupSwitchWrapper>
                  <p>{t('MARKETING_NOTIFICATIONS', 'Marketing Notifications')}</p>
                  <SwitchWrapper>
                    <p>{t('EMAILS', 'Emails')}</p>
                    <Switch
                      onChange={value => handleEditNotifications('email', value)}
                      defaultChecked={notificationList?.email}
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <p>{t('SMS', 'Sms')}</p>
                    <Switch
                      onChange={value => handleEditNotifications('sms', value)}
                      defaultChecked={notificationList?.sms}
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <p>{t('PUSH_NOTIFICATIONS', 'Push Notifications')}</p>
                    <Switch
                      onChange={value => handleEditNotifications('notification', value)}
                      defaultChecked={notificationList?.notification}
                    />
                  </SwitchWrapper>
                </NotificationsGroupSwitchWrapper>
              </>
            )}
            {showLangauges && !requiredFields && !isCustomerMode && (
              <>
                <LanguageSelectorWrapper>
                  <p>{t('LANGUAGE', 'Language')}</p>
                  <LanguageSelector />
                </LanguageSelectorWrapper>
              </>
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
              {onCancel && isOldLayout && (
                <Button
                  outline
                  type='button'
                  onClick={() => onCancel(false)}
                  disabled={formState.loading}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              )}
              {!requiredFields && ((formState && Object.keys(formState?.changes).length > 0 && isEdit) || formState?.loading) && (
                <Button
                  id='form-btn'
                  color='primary'
                  type='submit'
                  disabled={formState.loading}
                >
                  {formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')}
                </Button>
              )}
              {requiredFields && (
                <Button
                  id='form-btn'
                  color='primary'
                  type='submit'
                  disabled={formState.loading}
                >
                  {formState.loading ? t('UPDATING', 'Updating...') : t('CONTINUE', 'Continue')}
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
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width='760px'
      >
        <SignUpForm
          useLoginByCellphone
          useChekoutFileds
          handleSuccessSignup={handleSuccessSignup}
          isPopup
          isGuest
        />
      </Modal>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
