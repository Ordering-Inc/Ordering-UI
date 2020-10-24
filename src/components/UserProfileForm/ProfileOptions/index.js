import React, { useState } from 'react'
import { FlexTabs } from './styles'
import { Tabs, Tab } from '../../../styles/Tabs'
import { BsPerson, AiOutlineUnorderedList } from 'react-icons/all'
import { useEvent, useLanguage } from 'ordering-components'

export const ProfileOptions = ({ value }) => {
  const [tabValue] = useState(value)
  const [, t] = useLanguage()
  const [events] = useEvent()

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <FlexTabs>
      <Tabs variant='primary'>
        <Tab active={tabValue === 'My Account'}>
          <a onClick={() => handleGoToPage({ page: 'profile' })}>
            <BsPerson /> {t('MY_ACCOUNT', 'My account')}
          </a>
        </Tab>
        <Tab active={tabValue === 'My Orders'}>
          <a onClick={() => handleGoToPage({ page: 'orders' })}>
            <AiOutlineUnorderedList /> {t('MY_ORDERS', 'My orders')}
          </a>
        </Tab>
      </Tabs>
    </FlexTabs>
  )
}
