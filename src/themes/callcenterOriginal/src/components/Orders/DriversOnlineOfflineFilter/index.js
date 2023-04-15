import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  Tab
} from './styles'

export const DriversOnlineOfflineFilter = (props) => {
  const {
    driversIsOnline,
    handleChangeDriverIsOnline,
    numberOfonlineDrivers,
    numberOfofflineDrivers
  } = props
  const [, t] = useLanguage()
  return (
    <Container>
      <Tab
        active={driversIsOnline}
        onClick={() => handleChangeDriverIsOnline(true)}
      >
        {t('ONLINE', 'Online')}
        <span>({numberOfonlineDrivers ?? 0})</span>
      </Tab>
      <Tab
        active={!driversIsOnline}
        onClick={() => handleChangeDriverIsOnline(false)}
      >
        {t('INACTIVE_DRIVERS', 'Offline')}
        <span>({numberOfofflineDrivers ?? 0})</span>
      </Tab>
    </Container>
  )
}
