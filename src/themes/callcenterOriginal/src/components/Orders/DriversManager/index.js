import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useConfig, DriverListDashboard as DriverListController } from 'ordering-components'
import { DriversDashboard } from '../DriversDashboard'
import { OrdersLateralBar } from '../OrdersLateralBar'
import { SearchBar } from '../../Shared'
import { OrderNotification } from '../OrderNotification'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles/Buttons'
import { useInfoShare } from '../../../../../../contexts/InfoShareContext'
import { GoogleMapsApiKeySettingButton } from '../GoogleMapsApiKeySettingButton'

import {
  DriversHeader,
  HeaderTitleContainer,
  DriversContainer,
  DriversContent
} from './styles'

const DriversManagerUI = (props) => {
  const {
    onDriverRedirect,
    handleChangeSearch,
    searchValue,
    driversIsOnline,
    driversList
  } = props

  const drivers = driversList?.drivers
  const loading = driversList?.loading
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const query = new URLSearchParams(useLocation().search)
  const [isOpenDriverOrders, setIsOpenDriverOrders] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [openDriver, setOpenDriver] = useState(null)

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
    onDriverRedirect()
  }

  const handleChangeDriver = (driver) => {
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(null)
    } else {
      setSelectedDriver(driver)
    }
  }

  const handleOpenDriverOrders = (driver) => {
    onDriverRedirect(driver?.id)
    setOpenDriver(driver)
    setIsOpenDriverOrders(true)
  }

  useEffect(() => {
    if (loading) return
    const id = query.get('id')
    if (id === null) setIsOpenDriverOrders(false)
    else {
      const driver = drivers.find(_driver => _driver.id === parseInt(id))
      setOpenDriver(driver)
      setIsOpenDriverOrders(true)
    }
  }, [drivers, loading])

  useEffect(() => {
    setSelectedDriver(null)
  }, [driversIsOnline])

  return (
    <>
      <DriversContainer>
        <DriversHeader>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('DRIVERS_DASHBOARD', 'Drivers dashboard')}</h1>
          </HeaderTitleContainer>
          {!googleMapsApiKey && (
            <GoogleMapsApiKeySettingButton />
          )}
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={handleChangeSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </DriversHeader>
        <DriversContent>
          <DriversDashboard
            {...props}
            selectedDriver={selectedDriver}
            handleChangeDriver={handleChangeDriver}
            handleOpenDriverOrders={handleOpenDriverOrders}
          />
        </DriversContent>

        {isOpenDriverOrders && openDriver && (
          <OrdersLateralBar
            isDriver
            open={isOpenDriverOrders}
            user={openDriver}
            onClose={() => handleBackRedirect()}
          />
        )}

        <OrderNotification />
      </DriversContainer>
    </>
  )
}

export const DriversManager = (props) => {
  const DriversControlProps = {
    ...props,
    asDashboard: true,
    UIComponent: DriversManagerUI
  }
  return (
    <>
      <DriverListController {...DriversControlProps} />
    </>
  )
}
