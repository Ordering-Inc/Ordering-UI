import React, { useState } from 'react'
import { FlexTabs } from './styles'
import { Tabs, Tab } from '../../../styles/Tabs'
import { Tabs as TabsOriginal, Tab as TabOriginal } from '../../../themes/five/src/styles/Tabs'
import BsPerson from '@meronex/icons/bs/BsPerson'
import AiOutlineUnorderedList from '@meronex/icons/ai/AiOutlineUnorderedList'
import FaAddressBook from '@meronex/icons/fa/FaAddressBook'
import { useEvent, useLanguage, useOrderingTheme, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'

export const ProfileOptions = (props) => {
  const {
    value,
    pfchangs,
    setShowMyCards
  } = props
  const [tabValue, setTabValue] = useState(value)
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [orderingTheme] = useOrderingTheme()
  const theme = useTheme()
  const [{ configs }] = useConfig()

  const showAddressListTab = orderingTheme?.theme?.profile?.components?.address_list?.components?.layout?.position === 'new_page'
  const showMyCardsTab = configs?.webview_checkout_deuna.value === '1'

  const handleGoToPage = (data) => {
    setTabValue(data.page === 'profile' ? 'account' : data.page)
    if (data?.page === 'myCards') {
      setShowMyCards && setShowMyCards(true)
    } else {
      setShowMyCards && setShowMyCards(false)
      events.emit('go_to_page', data)
    }
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
        {showMyCardsTab && (
          <TabComponent
            onClick={() => handleGoToPage({ page: 'myCards' })}
            active={tabValue === 'myCards'}
            {...pfchangsTabProps}
          >
            <a>
              <AiOutlineUnorderedList /> {t('MY_CARDS', 'Mis Tarjetas')}
            </a>
          </TabComponent>
        )}
      </TabsComponent>
    </FlexTabs>
  )
}
