import React, { useState, useEffect } from 'react'
import { useConfig, DriversList as DriversController } from 'ordering-components'
import { OrdersLateralBar } from '../../OrdersLateralBar'
import { GoogleMapsApiKeySettingButton } from '../../GoogleMapsApiKeySettingButton'
import { DriversOnlineOfflineFilter } from '../../DriversOnlineOfflineFilter'
import { DriversBusyStatusFilter } from '../../DriversBusyStatusFilter'
import { DriversList } from '../../DriversList'

import {
  DriversHeader,
  DriversContainer,
  DriversContent,

  DriverListContainer,
  FilterContainer,
  WrapperDriversList
} from './styles'

const DriversManagerUI = (props) => {
  const {
    driversIsOnline,
    driversList,
    handleChangeDriverIsOnline,
    driversSubfilter,
    handleChangeDriversSubFilter,
    onlineDrivers,
    offlineDrivers,
    setMapsData
  } = props

  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const numberOfonlineDrivers = onlineDrivers.length
  const numberOfofflineDrivers = offlineDrivers.length
  const numberOfbusyDrivers = driversIsOnline ? onlineDrivers.filter(ele => ele.busy).length : offlineDrivers.filter(ele => ele.busy).length
  const numberOfnotBusyDrivers = driversIsOnline ? onlineDrivers.filter(ele => !ele.busy).length : offlineDrivers.filter(ele => !ele.busy).length

  const [isOpenDriverOrders, setIsOpenDriverOrders] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [openDriver, setOpenDriver] = useState(null)

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
  }

  const handleChangeDriver = (driver) => {
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(null)
    } else {
      setSelectedDriver(driver)
    }
  }

  const handleOpenDriverOrders = (driver) => {
    setOpenDriver(driver)
    setIsOpenDriverOrders(true)
  }

  useEffect(() => {
    setSelectedDriver(null)
  }, [driversIsOnline])

  useEffect(() => {
    setMapsData({
      driversIsOnline: driversIsOnline,
      onlineDrivers: onlineDrivers,
      offlineDrivers: offlineDrivers,
      selectedDriver: selectedDriver
    })
  }, [driversIsOnline, selectedDriver, onlineDrivers, offlineDrivers])

  return (
    <>
      <DriversContainer>
        <DriversHeader>
          {!googleMapsApiKey && (
            <GoogleMapsApiKeySettingButton />
          )}
        </DriversHeader>
        <DriversContent>
          <DriverListContainer>
            <FilterContainer>
              <DriversOnlineOfflineFilter
                driversIsOnline={driversIsOnline}
                handleChangeDriverIsOnline={handleChangeDriverIsOnline}
                numberOfonlineDrivers={numberOfonlineDrivers}
                numberOfofflineDrivers={numberOfofflineDrivers}
              />
              <DriversBusyStatusFilter
                driversSubfilter={driversSubfilter}
                handleChangeDriversSubFilter={handleChangeDriversSubFilter}
                numberOfbusyDrivers={numberOfbusyDrivers}
                numberOfnotBusyDrivers={numberOfnotBusyDrivers}
              />
            </FilterContainer>
            <WrapperDriversList>
              <DriversList
                hidePhoto
                loading={driversList.loading}
                driversIsOnline={driversIsOnline}
                onlineDrivers={onlineDrivers}
                offlineDrivers={offlineDrivers}
                selectedDriver={selectedDriver}
                handleChangeDriver={handleChangeDriver}
                handleOpenDriverOrders={handleOpenDriverOrders}
              />
            </WrapperDriversList>
          </DriverListContainer>
        </DriversContent>

        {isOpenDriverOrders && openDriver && (
          <OrdersLateralBar
            isDriver
            open={isOpenDriverOrders}
            user={openDriver}
            onClose={() => handleBackRedirect()}
          />
        )}
      </DriversContainer>
    </>
  )
}

export const DriversManager = (props) => {
  const DriversControlProps = {
    ...props,
    asDashboard: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification'],
    UIComponent: DriversManagerUI
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
