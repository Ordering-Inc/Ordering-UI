import React, { useState } from 'react'
import { UserFormDetailsUI } from '../../../UserFormDetails'
import { AccountManage } from '../../../AccountManage/theme/two'

import {
  UserFormDetails as UserProfileController,
  useLanguage
  // useEvent
} from 'ordering-components'

import {
  Container,
  ProfileContainer,
  Header,
  // ProfileOptionsContainer,
  // Tab,
  WrapperForm,
  PrivacyContainer,
  WrapAccountManage
} from './styles'

const UserProfileFormUI = (props) => {
  const [, t] = useLanguage()
  // const [events] = useEvent()

  const [isManageAccountPage, setIsManageAccountPage] = useState(false)

  // const handleGoToPage = (data) => {
  //   events.emit('go_to_page', data)
  // }

  return (
    <Container>
      <ProfileContainer>
        <Header>
          <h1 onClick={() => setIsManageAccountPage(false)}>{t('PROFILE', 'Profile')}</h1>
          {/* <ProfileOptionsContainer>
            <Tab onClick={() => handleGoToPage({ page: 'reset_password' })}>
              {t('CHANGE_PASSWORD', 'Change Password')}
            </Tab>
            <Tab onClick={() => setIsManageAccountPage(true)}>
              {t('MANAGE_ACCOUNT', 'Manage Account')}
            </Tab>
          </ProfileOptionsContainer> */}
        </Header>
        {!isManageAccountPage ? (
          <WrapperForm>
            <UserFormDetailsUI
              {...props}
            />
          </WrapperForm>
        ) : (
          <WrapAccountManage>
            <AccountManage />
          </WrapAccountManage>
        )}
      </ProfileContainer>
      {!isManageAccountPage && (
        <PrivacyContainer>
          <Header>
            <h1>{t('PRIVACY', 'Privacy')}</h1>
          </Header>
          <WrapperForm>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. <span>Learn More</span>
            </p>
          </WrapperForm>
        </PrivacyContainer>
      )}
    </Container>
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
