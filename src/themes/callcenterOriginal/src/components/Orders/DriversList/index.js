import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import BsDot from '@meronex/icons/bs/BsDot'
import { useTheme } from 'styled-components'
import { getStarWidth } from '../../../../../../utils'
import { LinkButton } from '../../../styles'

import {
  DriversListContainer,
  DriverCard,
  WrapperImage,
  Image,
  DriverInfo,
  WrapperStar
} from './styles'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

export const DriversList = (props) => {
  const {
    loading,
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver,
    handleChangeDriver,
    handleOpenDriverOrders,
    hidePhoto
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const { width } = useWindowSize()

  const handleClickDriver = (e, driver) => {
    const isInvalid = e.target.closest('.driver-orders')
    if (isInvalid) return
    handleChangeDriver(driver)
    const element = document.getElementById('driverDashboard')
    if (width < 993 && element) element.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
              {!hidePhoto && (
                <WrapperImage>
                  <Image bgimage={optimizeImage(driver?.photo || theme.images?.icons?.noDriver, 'h_50,c_limit')} />
                </WrapperImage>
              )}
              <DriverInfo>
                <div>
                  <p>{driver.name} {driver.lastname}</p>
                  <BsDot />
                  <LinkButton
                    className='driver-orders'
                    disabled={!driver?.assigned_orders_count || driver?.assigned_orders_count === 0}
                    onClick={() => onOpenDriverOrdersDetail(driver)}
                  >
                    {driver?.assigned_orders_count} {t('ORDERS', 'Orders')}
                  </LinkButton>
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
