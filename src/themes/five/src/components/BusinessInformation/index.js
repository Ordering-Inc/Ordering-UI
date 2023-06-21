import React, { useState } from 'react'
import { formatUrlVideo, convertHoursToMinutes } from '../../../../../utils'
import {
  BusinessInformation as BusinessInformationController,
  GoogleMapsMap,
  useLanguage,
  useConfig
} from 'ordering-components'
import { Modal } from '../Modal'
import {
  BusinessInformationContainer,
  BusinessContent,
  SectionTitle,
  Map,
  ScheduleSection,
  ScheduleContainer,
  DeliveryInfo,
  BusinessMediaContent,
  ModalIcon,
  Description,
  ImageContainer,
  BusinessTitle,
  BusinessAddress,
  BusinessAddressNotes,
  Divider
} from './styles'
import MdClose from '@meronex/icons/md/MdClose'
import { ScheduleAccordion } from '../ScheduleAccordion'
import { useTheme } from 'styled-components'
import moment from 'moment'

export const BusinessInformationUI = (props) => {
  const {
    business,
    businessLocation,
    businessSchedule,
    businessPhotos,
    businessVideos,
    onClose
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [modalImage, setModalImage] = useState(false)
  const [image, setImage] = useState('')
  const theme = useTheme()

  const hideLocation = theme?.business_view?.components?.information?.components?.location?.hidden
  const hideSchedule = theme?.business_view?.components?.information?.components?.schedule?.hidden
  const hideDescription = theme?.business_view?.components?.information?.components?.description?.hidden
  const hideAbout = theme?.business_view?.components?.information?.components?.about?.hidden
  const hideVideos = theme?.business_view?.components?.information?.components?.videos?.hidden
  const hideDeliveryTime = theme?.business_view?.components?.information?.components?.delivery_time?.hidden
  const hidePickupTime = theme?.business_view?.components?.information?.components?.pickup_time?.hidden
  const hideImages = theme?.business_view?.components?.information?.components?.images?.hidden
  const hideAddress = theme?.business_view?.components?.information?.components?.address?.hidden
  const formatTime = configs?.general_hour_format?.value

  const fillStyle = {
    fillColor: theme.colors.primary,
    strokeColor: theme.colors.darkPrimaryColor,
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: false
  }

  const checkTime = (val) => (val < 10 ? `0${val}` : val)
  const timeFormated = (time) => {
    return moment(`1900-01-01 ${checkTime(time.hour)}:${checkTime(time.minute)}`).format(formatTime)
  }

  const handleModalImage = (src) => {
    setImage(src)
    setModalImage(true)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessInformationContainer>
        <ModalIcon>
          <MdClose onClick={() => onClose(false)} />
        </ModalIcon>
        <BusinessContent>
          <BusinessTitle>{business?.name}</BusinessTitle>
          {!hideAbout && business.about && (
            <>
              <SectionTitle>{t('BUSINESS_ABOUT', 'Business short description')}</SectionTitle>
              <Description>{business.about}</Description>
            </>
          )}
          {!hideDescription && business.description && (
            <>
              <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business description')}</SectionTitle>
              <Description>{business.description}</Description>
            </>
          )}
          {
            !hideLocation && (
              <>
                {businessLocation.location && (
                  <>
                    <SectionTitle>{t('BUSINESS_LOCATION', 'Business location')}</SectionTitle>
                    {businessLocation.location && (
                      <Map>
                        <GoogleMapsMap
                          apiKey={configs?.google_maps_api_key?.value}
                          location={businessLocation.location}
                          mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
                          businessZones={business?.zones}
                          fillStyle={fillStyle}
                        />
                      </Map>
                    )}
                  </>
                )}
                {
                  !hideAddress && business?.address && <BusinessAddress>{business?.address}</BusinessAddress>
                }
                {business?.address_notes && <BusinessAddressNotes>{business?.address_notes}</BusinessAddressNotes>}
                <Divider />
              </>
            )
          }
          {businessSchedule?.length > 0 && (
            <>
              {!hideSchedule && (
                <>
                  <SectionTitle>{t('OPENING_TIME', 'Opening time')}</SectionTitle>
                  <ScheduleSection>
                    <ScheduleContainer>
                      {businessSchedule.map((schedule, i) => (
                        <ScheduleAccordion
                          key={i}
                          weekIndex={i}
                          timeFormated={timeFormated}
                          schedule={schedule}
                        />
                      ))}
                    </ScheduleContainer>
                  </ScheduleSection>
                  <Divider />
                </>
              )}
              <DeliveryInfo>
                <div>
                  {!hideDeliveryTime && (
                    <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
                  )}
                  {!hidePickupTime && (
                    <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
                  )}
                </div>
              </DeliveryInfo>
              <Divider />
            </>
          )}
          {!hideVideos && businessVideos?.length > 0 && (
            <BusinessMediaContent>
              <SectionTitle>{t('VIDEOS', 'Videos')}</SectionTitle>
              <div>
                {businessVideos.map((video, i) => (
                  <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                ))}
              </div>
            </BusinessMediaContent>
          )}
          <Divider />
          {!hideImages && businessPhotos?.length > 0 && (
            <BusinessMediaContent>
              <SectionTitle>{t('IMAGES', 'Images')}</SectionTitle>
              <div>
                {
                  businessPhotos.map((photo, i) => (
                    <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} loading='lazy' />
                  ))
                }
              </div>
            </BusinessMediaContent>
          )}
        </BusinessContent>
        <Modal
          onClose={() => setModalImage(false)}
          open={modalImage}
          padding='0'
          hideCloseDefault
          isTransparent
          height='auto'
        >
          <ImageContainer>
            <ModalIcon>
              <MdClose onClick={() => setModalImage(false)} />
            </ModalIcon>
            <img src={image} width='320px' height='180px' loading='lazy' />
          </ImageContainer>
        </Modal>
      </BusinessInformationContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessInformation = (props) => {
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const BusinessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI,
    googleMapsControls
  }
  return <BusinessInformationController {...BusinessInformationProps} />
}
