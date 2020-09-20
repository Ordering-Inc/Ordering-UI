import React, { useState, useEffect } from 'react'
import { UserProfileForm as UserProfileController, useLanguage, useSession, ExamineClick, DragAndDrop } from 'ordering-components'

import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'

import { UserProfileContainer, UserImage, Image, SideForm, FormInput, Camera, ButtonLogin, UserData, SavedPlaces } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { GiPhotoCamera } from 'react-icons/gi'

const UserProfileFormUI = (props) => {
  const { hanldeChangeInput, handleButtonUpdateClick, handlechangeImage, formState, showField, validationFields, isRequiredField, useChekoutFileds } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

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

  const inputs = [
    { name: 'name', placeholder: t('NAME'), requiredMessage: 'Name is required', type: 'text' },
    { name: 'lastname', placeholder: t('Last Name'), requiredMessage: 'Lastname is required', type: 'text' },
    { name: 'email', placeholder: t('EMAIL'), requiredMessage: 'Email is required', type: 'text' },
    { name: 'password', placeholder: t('PASSWORD'), requiredMessage: 'Password is required', type: 'password' },
    { name: 'country_phone_code', placeholder: 'Mobile Phone Country Code', requiredMessage: 'Country Code is required', type: 'select' },
    { name: 'cellphone', placeholder: t('CELLPHONE'), requiredMessage: 'Cellphone is required', type: 'text' }
  ]

  return (
    <UserProfileContainer>
      <UserImage>
        <ExamineClick onFiles={handleFiles}>
          <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)}>
            <Image><img src={formState.changes.photo} /></Image>
          </DragAndDrop>
        </ExamineClick>
        <Camera><GiPhotoCamera /></Camera>
      </UserImage>
      <SideForm>
        {edit
          ? (
            <FormInput>
              {
                !(useChekoutFileds && validationFields.loading) && (
                  <>
                    {
                      Object.values(validationFields.fields).map(field => (
                        showField(field.code) && (
                          <Input
                            key={field.id}
                            type={field.code === 'name' || field.name === 'lastname' || field.code === 'email' || field.code === 'country_phone_code' || field.code === 'mobile_phone' ? field.type : 'hidden'}
                            name={field.code}
                            placeholder={t(field.name)}
                            value={user[field.code]}
                            onChange={hanldeChangeInput}
                            ref={register({
                              required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', `${field.name} is required`).replace('_attribute_', t(field.name, field.code)) : null,
                              pattern: {
                                value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
                                message: field.code === 'email' ? t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
                              }
                            })}
                            required={field.required}
                          />
                        )
                      ))
                    }
                    <Input
                      type='password'
                      name='password'
                      placeholder={t('FRONT_VISUALS_PASSWORD')}
                      onChange={hanldeChangeInput}
                      required
                      ref={register({
                        required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                        minLength: {
                          value: 5,
                          message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                        }
                      })}
                    />

                    <ButtonLogin onClick={() => setEdit(false)}>
                      <Button color='primary' onClick={handleButtonUpdateClick}>Update</Button>
                    </ButtonLogin>
                  </>
                )
              }
            </FormInput>
          )
          : (
            <UserData>
              <h5>{user.name} {user.lastname}</h5>
              <p>{user.email}</p>
              <p>{user.country_phone_code} {user.phone}</p>
              <span><Button onClick={() => setEdit(true)}>Edit</Button></span>
            </UserData>
          )}

        <SavedPlaces>
          <h5>Saved Places</h5>
        </SavedPlaces>
      </SideForm>
    </UserProfileContainer>
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
