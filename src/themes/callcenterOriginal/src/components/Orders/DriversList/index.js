import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import BsDot from '@meronex/icons/bs/BsDot'
import { useTheme } from 'styled-components'
import { getStarWidth } from '../../../../../../utils'
import {
  DriversListContainer,
  DriverCard,
  WrapperImage,
  Image,
  DriverInfo,
  WrapperStar,
  AssignedOrdersCount
} from './styles'

export const DriversList = (props) => {
  const {
    loading,
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver,
    handleChangeDriver,
    handleOpenDriverOrders
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const handleClickDriver = (e, driver) => {
    const isInvalid = e.target.closest('.driver-orders')
    if (isInvalid) return
    handleChangeDriver(driver)
  }

  const onOpenDriverOrdersDetail = (driver) => {
    if (selectedDriver?.id !== driver.id) {
      handleChangeDriver(driver)
    }
    handleOpenDriverOrders(driver)
  }

  return (
    <DriversListContainer>
      {loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <DriverCard
              key={i}
            >
              <WrapperImage>
                <Skeleton width={45} height={45} />
              </WrapperImage>
              <DriverInfo>
                <div>
                  <Skeleton width={100} />
                </div>
                <Skeleton width={100} />
              </DriverInfo>
            </DriverCard>
          ))}
        </>
      ) : (
        <>
          {(driversIsOnline ? onlineDrivers : offlineDrivers).map(driver => (
            <DriverCard
              key={driver.id}
              onClick={(e) => handleClickDriver(e, driver)}
              active={selectedDriver?.id === driver.id}
            >
              <WrapperImage>
                <Image bgimage={optimizeImage(driver?.photo || theme.images?.icons?.noDriver, 'h_50,c_limit')} />
              </WrapperImage>
              <DriverInfo>
                <div>
                  <p>{driver.name} {driver.lastname}</p>
                  <BsDot />
                  <AssignedOrdersCount
                    className='driver-orders'
                    disabled={!driver?.assigned_orders_count || driver?.assigned_orders_count === 0}
                    onClick={() => onOpenDriverOrdersDetail(driver)}
                  >
                    {driver?.assigned_orders_count} {t('ORDERS', 'Orders')}
                  </AssignedOrdersCount>
                </div>
                {driver?.qualification && (
                  <WrapperStar width={getStarWidth(driver?.qualification)} />
                )}
              </DriverInfo>
            </DriverCard>
          ))}
        </>
      )}
    </DriversListContainer>
  )
}
