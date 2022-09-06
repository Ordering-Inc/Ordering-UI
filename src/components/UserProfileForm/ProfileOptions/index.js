import React, { useState } from 'react'
import { FlexTabs } from './styles'
import { Tabs, Tab } from '../../../styles/Tabs'
import { Tabs as TabsOriginal, Tab as TabOriginal } from '../../../themes/five/src/styles/Tabs'
import BsPerson from '@meronex/icons/bs/BsPerson'
import AiOutlineUnorderedList from '@meronex/icons/ai/AiOutlineUnorderedList'
import FaAddressBook from '@meronex/icons/fa/FaAddressBook'
import { useEvent, useLanguage, useOrderingTheme } from 'ordering-components'
import { useTheme } from 'styled-components'

export const ProfileOptions = (props) => {
  const {
    value,
    pfchangs
  } = props
  const [tabValue] = useState(value)
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [orderingTheme] = useOrderingTheme()
  const theme = useTheme()

  const showAddressListTab = orderingTheme?.theme?.profile?.components?.address_list?.components?.layout?.position === 'new_page'

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const TabsComponent = pfchangs
    ? TabsOriginal
    : Tabs

  const TabComponent = pfchangs
    ? TabOriginal
    : Tab

  const pfchangsTabProps = pfchangs ? {
    borderBottom: true,
    pfchangs: true,
    activeColor: theme.colors?.gold,
    color: theme.colors?.gold
  } : {}

  return (
    <FlexTabs pfchangs={pfchangs}>
      <TabsComponent variant='primary'>
        <TabComponent
          onClick={() => handleGoToPage({ page: 'profile' })}
          active={tabValue === 'account'}
          {...pfchangsTabProps}
        >
          <a>
            <BsPerson /> {t('MY_ACCOUNT', 'My Account')}
          </a>
        </TabComponent>
        {showAddressListTab && (
          <TabComponent
            onClick={() => handleGoToPage({ page: 'addresses' })}
            active={tabValue === 'addresses'}
            {...pfchangsTabProps}
          >
            <a>
              <FaAddressBook /> {t('MY_ADDRESSES', 'My Addresses')}
            </a>
          </TabComponent>
        )}
        <TabComponent
          onClick={() => handleGoToPage({ page: 'orders' })}
          active={tabValue === 'orders'}
          {...pfchangsTabProps}
        >
          <a>
            <AiOutlineUnorderedList /> {t('MY_ORDERS', 'My orders')}
          </a>
        </TabComponent>
      </TabsComponent>
    </FlexTabs>
  )
}
