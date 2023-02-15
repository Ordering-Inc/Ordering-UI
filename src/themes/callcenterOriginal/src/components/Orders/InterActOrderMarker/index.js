import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { useTheme } from 'styled-components'
import {
  InfoContainer,
  TextContainer,
  Text,
  WrapperMapMarker,
  MapMarkerImg
} from './styles'

export const InterActOrderMarker = (props) => {
  const {
    image,
    customer,
    business,
    driver
  } = props
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const theme = useTheme()
  const [infoShow, setInfoShow] = useState(false)
  const infoRef = useRef(null)
  const [infoTop, setInfoTop] = useState('0px')

  useEffect(() => {
    if (!infoShow) return
    setInfoTop(`-${infoRef.current.scrollHeight + 55}px`)
  }, [infoShow])

  return (
    <>
      {infoShow && (
        <InfoContainer ref={infoRef} style={{ transform: `translate(-50%, ${infoTop})` }}>
          {business && (
            <>
              <TextContainer>
                <Text fontWeight='bold'>
                  {t('NAME', 'Name')}:
                </Text>
                <Text>{business.name}</Text>
              </TextContainer>
              {business?.email && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('EMAIL', 'Email')}:
                  </Text>
                  <Text>{business.email}</Text>
                </TextContainer>
              )}
              {business?.phone && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('PHONE', 'Phone')}:
                  </Text>
                  <Text>{business.phone}</Text>
                </TextContainer>
              )}
            </>
          )}
          {customer && (
            <>
              <TextContainer>
                <Text fontWeight='bold'>
                  {t('NAME', 'Name')}:
                </Text>
                <Text>{customer.name} {customer.lastname}</Text>
              </TextContainer>
              {customer?.order_id && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('INVOICE_ORDER_NO', 'Order No')}
                  </Text>
                  <Text>{customer.order_id}</Text>
                </TextContainer>
              )}
              {customer?.email && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('EMAIL', 'Email')}:
                  </Text>
                  <Text>{customer.email}</Text>
                </TextContainer>
              )}
              {customer?.cellphone && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('CELLPHONE', 'Cellphone')}:
                  </Text>
                  <Text>{customer.cellphone}</Text>
                </TextContainer>
              )}
            </>
          )}
          {driver && (
            <>
              <TextContainer>
                <Text fontWeight='bold'>
                  {t('NAME', 'Name')}:
                </Text>
                <Text>{driver.name} {driver.lastname}</Text>
              </TextContainer>
              {driver?.email && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('EMAIL', 'Email')}:
                  </Text>
                  <Text>{driver.email}</Text>
                </TextContainer>
              )}
              {driver?.cellphone && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('CELLPHONE', 'Cellphone')}:
                  </Text>
                  <Text>{driver.cellphone}</Text>
                </TextContainer>
              )}
              {driver?.drivergroups?.length > 0 && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('DRIVER_GROUP', 'Driver group')}:
                  </Text>
                  {driver.drivergroups.map(group => (
                    <Text key={group.id}>{group.name},</Text>
                  ))}
                </TextContainer>
              )}
              {driver?.last_location_at && (
                <TextContainer>
                  <Text fontWeight='bold'>
                    {t('LAST_LOCATION', 'Last location')}:
                  </Text>
                  <Text>{parseDate(driver.last_location_at, { utc: false })}</Text>
                </TextContainer>
              )}
            </>
          )}
        </InfoContainer>
      )}
      <WrapperMapMarker
        onMouseOver={() => setInfoShow(true)}
        onMouseLeave={() => setInfoShow(false)}
      >
        {image ? (
          <MapMarkerImg bgimage={image} />
        ) : (
          <>
            {customer && <FaUserAlt />}
            {driver && (
              <MapMarkerImg bgimage={theme?.images?.icons?.noDriver} />
            )}
          </>
        )}
      </WrapperMapMarker>
    </>
  )
}
