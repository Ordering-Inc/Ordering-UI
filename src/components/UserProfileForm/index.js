import React, { useState, useEffect } from 'react'
import { UserProfileForm as UserProfileController, useLanguage, useSession, ExamineClick, DragAndDrop } from 'ordering-components'

import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { AddressList } from '../AddressList'

import { UserProfileContainer, UserImage, Image, SideForm, FormInput, Camera, UserData, SavedPlaces } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { ProfileOptions } from './ProfileOptions'

import { GiPhotoCamera } from 'react-icons/Gi'

const UserProfileFormUI = (props) => {
  const { hanldeChangeInput, handleButtonUpdateClick, handlechangeImage, formState, showField, validationFields, isRequiredField, useChekoutFileds } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if ((!formState.loading && formState.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
    }
  }, [formState.loading])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (formState.changes.photo) {
      handleButtonUpdateClick()
    }
  }, [formState.changes.photo])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      console.log(files[0])
      handlechangeImage(files[0])
    }
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length !== 0) {
      handleButtonUpdateClick()
    }
    setEdit(false)
  }

  return (
    <>
      <ProfileOptions value='My Account' />
      <UserProfileContainer>
        <UserImage>
          <ExamineClick onFiles={handleFiles} accept='image/png, image/jpeg, image/jpg'>
            <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg'>
              <Image>{formState.changes.photo && formState.loading ? 'loading image' : <img src={(!formState.changes.photo || formState.result?.result === 'Network Error') ? user.photo : formState.changes.photo} />}</Image>
            </DragAndDrop>
          </ExamineClick>
          <Camera><GiPhotoCamera /></Camera>
        </UserImage>
        <SideForm>
          {edit
            ? (
              <FormInput onSubmit={handleSubmit(onSubmit)}>
                {
                  !(useChekoutFileds && validationFields.loading) ? (
                    <>
                      {
                        Object.values(validationFields.fields).map(field => (
                          showField(field.code) && (
                            <React.Fragment key={field.id}>
                              {
                                field.code === 'mobile_phone' &&
                                  <Input
                                    placeholder={t('country_phone_code', 'Mobile Phone Country Code')} name='country_phone_code' defaultValue={user.country_phone_code} onChange={hanldeChangeInput} ref={register({
                                      required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                                      pattern: {
                                        value: /^(\+?\d{1,3}|\d{1,4})$/,
                                        message: 'Bad country Code'
                                      }
                                    })}
                                  />
                              }
                              <Input
                                key={field.id}
                                type={field.id < 6 && field.id >= 1 ? field.type : 'hidden'}
                                name={field.code === 'mobile_phone' ? 'cellphone' : field.code}
                                placeholder={t(field.name)}
                                defaultValue={field.code === 'mobile_phone' ? user.cellphone : user[field.code]}
                                onChange={hanldeChangeInput}
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
                        ))
                      }
                      <Input
                        type='password'
                        name='password'
                        placeholder={t('FRONT_VISUALS_PASSWORD')}
                        onChange={hanldeChangeInput}
                        ref={register({
                          required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                          minLength: {
                            value: 5,
                            message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                          }
                        })}
                      />

                      <Button color='primary' type='submit'>Update</Button>

                    </>
                  ) : <h4>Loading Form...</h4>
                }
              </FormInput>
            )
            : (
              formState.loading && !formState.changes.photo
                ? 'loading user'
                : (
                  <UserData>
                    <h4>{user.name} {user.lastname}</h4>
                    <p>{user.email}</p>
                    <p>{user.country_phone_code} {user.cellphone}</p>
                    <Button color='primary' outline onClick={() => setEdit(true)}>Edit</Button>
                  </UserData>
                )
            )}

          <SavedPlaces>
            <h5>Saved Places</h5>
            <AddressList addressList={user.addresses} />
          </SavedPlaces>
        </SideForm>
        <Alert
          title={t('PROFILE', 'profile')}
          content={alertState.content}
          acceptText={t('ACCEPT')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </UserProfileContainer>
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
