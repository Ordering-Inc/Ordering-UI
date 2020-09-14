import React from 'react'
import { UserProfileForm as UserProfileController, useLanguage,ExamineClick,DragAndDrop } from 'ordering-components'

import { UserProfileContainer, UserImage, Image, SideForm, FormInput, Camera,ButtonLogin } from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

import { GiPhotoCamera } from 'react-icons/gi'

const UserProfileFormUI = (props) => {
  const { hanldeChangeInput, handleButtonUpdateClick, handlechangeImage,formState,showField } = props
  const [, t] = useLanguage()
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
           <Image><img src={formState.changes.photo}/></Image>
         </DragAndDrop>
        </ExamineClick>
     <Camera><GiPhotoCamera /></Camera></UserImage>
      <SideForm>
        <FormInput>
          {inputs.map((_input) => (
            <React.Fragment key={_input.name}>
              {showField(_input.name) && (
                <Input key={_input.name} name={_input.name} type={_input.type} placeholder={_input.placeholder} onChange={hanldeChangeInput} />
              )}
            </React.Fragment>
          ))}
        </FormInput>
        <ButtonLogin>
          <Button color='primary' onClick={handleButtonUpdateClick}>Update</Button>
        </ButtonLogin>
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
