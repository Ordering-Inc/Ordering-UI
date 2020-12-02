import React, { useState, useEffect } from 'react'
import {
  UserProfileForm as UserProfileController,
  useLanguage,
  useSession,
  ExamineClick,
  DragAndDrop
} from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import parsePhoneNumber from 'libphonenumber-js'

import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { AddressList } from '../AddressList'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { flatArray } from '../../utils'

import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  SideForm,
  FormInput,
  Camera,
  UserData,
  SavedPlaces,
  SkeletonForm,
  UploadImageIcon,
  SkeletonWrapper,
  ActionsForm
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { ProfileOptions } from './ProfileOptions'

import GiPhotoCamera from '@meronex/icons/gi/GiPhotoCamera'
import BiImage from '@meronex/icons/bi/BiImage'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone']

const UserProfileFormUI = (props) => {
  const {
    handleChangeInput,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    showField,
    validationFields,
    isRequiredField,
    useChekoutFileds,
    cleanFormState
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [edit, setEdit] = useState(false)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [validationFieldsSorted, setValidationFieldsSorted] = useState([])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      handlechangeImage(files[0])
    }
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber && validationFields?.fields?.cellphone?.required) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
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
      setEdit(false)
    }
  }

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

  const setUserCellPhone = () => {
    if (user && user?.cellphone) {
      let phone = null
      if (user?.country_phone_code) {
        phone = `+${user?.country_phone_code} `
      }
      phone = `${phone}${user?.cellphone}`
      setUserPhoneNumber(phone)
    }
  }

  const handleCloseForm = () => {
    setEdit(false)
    cleanFormState()
    setUserCellPhone()
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

  const showInputPhoneNumber = () => validationFields?.fields?.cellphone?.enabled ?? false

  useEffect(() => {
    if (validationFields.fields) {
      sortValidationFields()
    }
  }, [validationFields.fields])

  useEffect(() => {
    setUserCellPhone()
  }, [user])

  useEffect(() => {
    if ((!formState.loading && formState.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState.loading])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const content = Object.values(errors).map(error => error.message)
      if (!isValidPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [errors])

  useEffect(() => {
    if (formState.changes.photo) {
      handleButtonUpdateClick()
    }
  }, [formState.changes.photo])

  return (
    <>
      <ProfileOptions value={t('MY_ACCOUNT', 'My Account')} />
      <Container>
        <UserProfileContainer>
          <UserImage className='user-image'>
            <ExamineClick onFiles={handleFiles} accept='image/png, image/jpeg, image/jpg' disabled={!formState.loading}>
              <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={!formState.loading}>
                <Image isImage={user?.photo || formState?.changes?.photo}>
                  {formState.changes.photo && formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes.photo || formState.result?.result === 'Network Error')
                      ? user?.photo
                        ? (<img src={user?.photo} alt='user image' />)
                        : (
                          <UploadImageIcon>
                            <BiImage />
                            <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                          </UploadImageIcon>
                        )
                      : formState?.changes?.photo
                        ? (<img src={formState?.changes?.photo} alt='user image' />)
                        : (
                          <UploadImageIcon>
                            <BiImage />
                            <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                          </UploadImageIcon>
                        )
                    )}
                </Image>
              </DragAndDrop>
            </ExamineClick>
            <Camera><GiPhotoCamera /></Camera>
          </UserImage>
          <SideForm className='user-form'>
            {!edit ? (
              formState.loading ? (
                <UserData>
                  <Skeleton width={250} height={25} />
                  <Skeleton width={180} height={25} />
                  <Skeleton width={210} height={25} />
                  <Skeleton width={100} height={40} />
                </UserData>
              ) : (
                <UserData>
                  <h1>{user.name} {user.lastname}</h1>
                  <p>{user.email}</p>
                  {user.cellphone && (
                    <p>{user.country_phone_code && `+${user.country_phone_code} `}{user.cellphone}</p>
                  )}
                  <Button color='primary' outline onClick={() => setEdit(true)}>
                    {t('EDIT', 'Edit')}
                  </Button>
                </UserData>
              )
            ) : (
              <FormInput onSubmit={handleSubmit(onSubmit)}>
                {!(useChekoutFileds && validationFields.loading) ? (
                  <>
                    {validationFieldsSorted.map(field => !notValidationFields.includes(field.code) && (
                      showField(field.code) && (
                        <React.Fragment key={field.id}>
                          <Input
                            key={field.id}
                            type={(field.id >= 1 && field.id < 6) || field.id >= 55 ? field.type : 'hidden'}
                            name={field.code}
                            className='form'
                            placeholder={t(field.name)}
                            defaultValue={user[field.code]}
                            onChange={handleChangeInput}
                            ref={register({
                              required: isRequiredField(field.code) ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
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

                    <Input
                      type='password'
                      name='password'
                      className='form'
                      placeholder={t('FRONT_VISUALS_PASSWORD')}
                      onChange={handleChangeInput}
                      ref={register({
                        required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
                        minLength: {
                          value: 5,
                          message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                        }
                      })}
                    />
                    {!!showInputPhoneNumber() && (
                      <InputPhoneNumber
                        value={userPhoneNumber}
                        setValue={handleChangePhoneNumber}
                        handleIsValid={setIsValidPhoneNumber}
                      />
                    )}
                    <ActionsForm>
                      <Button color='secondary' type='button' onClick={() => handleCloseForm()}>
                        {t('CANCEL', 'Cancel')}
                      </Button>
                      <Button color='primary' type='submit' disabled={Object.keys(formState.changes).length === 0}>
                        {t('UPDATE', 'Update')}
                      </Button>
                    </ActionsForm>
                  </>
                ) : (
                  <SkeletonForm>{[...Array(6)].map((item, i) => (
                    <Skeleton key={i} />
                  ))}
                  </SkeletonForm>
                )}
              </FormInput>
            )}

          </SideForm>
        </UserProfileContainer>
        <SavedPlaces>
          <h1>Saved Places</h1>
          <AddressList addressList={user.addresses} />
        </SavedPlaces>
      </Container>
      <Alert
        title={t('PROFILE', 'profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
