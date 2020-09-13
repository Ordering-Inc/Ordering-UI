import React from 'react'
import { UserProfileForm as UserProfileController, useLanguage } from 'ordering-components'

import { UserProfileContainer, UserImage, Image, SideForm, FormInput, Camera } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { GiPhotoCamera } from 'react-icons/gi'

const UserProfileFormUI = (props) => {
  const { hanldeChangeInput, handleButtonUpdateClick, handlechangeImage } = props
  const [, t] = useLanguage()

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
      <UserImage> <Image onDrop={handlechangeImage}><img src='https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg' /></Image> <Camera><GiPhotoCamera /></Camera></UserImage>
      <SideForm>
        <FormInput>
          {inputs.map((_input) => (
            <Input key={_input.name} name={_input.name} type={_input.type} placeholder={_input.placeholder} onChange={hanldeChangeInput} />
          ))}
          <Button color='primary' onClick={handleButtonUpdateClick}>Update</Button>
        </FormInput>
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
