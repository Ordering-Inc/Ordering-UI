import React, { useState } from 'react'
import FiSettings from '@meronex/icons/fi/FiSettings'
import AiOutlineUnorderedList from '@meronex/icons/ai/AiOutlineUnorderedList'
import { useEvent, useLanguage } from 'ordering-components'

import {
  ProfileMenuContainer,
  ProfileMenuInnerContainer,
  ProfileMenuItem
} from './styles'
export const ProfileOptions = ({ value }) => {
  const [tabValue] = useState(value)
  const [, t] = useLanguage()
  const [events] = useEvent()

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <ProfileMenuContainer>
      <ProfileMenuInnerContainer>
        <ProfileMenuItem active={tabValue === 'orders'}>
          <a onClick={() => handleGoToPage({ page: 'orders' })}>
            <AiOutlineUnorderedList /> {t('YOUR_ORDERS', 'Your orders')}
          </a>
        </ProfileMenuItem>
        <ProfileMenuItem active={tabValue === 'account'}>
          <a onClick={() => handleGoToPage({ page: 'profile' })}>
            <FiSettings /> {t('YOUR_ACCOUNT_SETTINGS', 'Your account settings')}
          </a>
        </ProfileMenuItem>
      </ProfileMenuInnerContainer>
    </ProfileMenuContainer>
  )
}
