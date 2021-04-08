import React, { useState } from 'react'
import { formatUrlVideo, convertHoursToMinutes } from '../../../../../utils'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import FiClock from '@meronex/icons/fi/FiClock'
import {
  BusinessInformation as BusinessInformationController,
  GoogleMapsMap,
  useLanguage,
  useConfig
} from 'ordering-components'
import { Modal } from '../../../../../components/Modal'
import {
  BusinessInformationContainer,
  BusinessContent,
  SectionTitle,
  Map,
  ScheduleBlock,
  ScheduleSection,
  ScheduleContainer,
  DeliveryInfo,
  BusinessMediaContent,
  ModalIcon,
  Description,
  ImageContainer,
  BusinessInnerContent,
  BusinessAddressContainer
} from './styles'
import MdClose from '@meronex/icons/md/MdClose'

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
  const daysOfWeek = [
    t('SUNDAY', 'Sunday'),
    t('MONDAY', 'Monday'),
    t('TUESDAY', 'Tuesday'),
    t('WEDNESDAY', 'Wednesday'),
    t('THURSDAY', 'Thursday'),
    t('FRIDAY', 'Friday'),
    t('SATURDAY', 'Saturday')
  ]
  const [modalImage, setModalImage] = useState(false)
  const [image, setImage] = useState('')

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
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
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <BusinessInformationContainer>
        <ModalIcon>
          <MdClose onClick={() => onClose(false)} />
        </ModalIcon>
        <BusinessContent>
          {businessLocation.location && (
            <>
              {businessLocation.location && (
                <Map>
                  <GoogleMapsMap
                    apiKey={configs?.google_maps_api_key?.value}
                    location={businessLocation.location}
                    mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
                  />
                </Map>
              )}
            </>
          )}
          <BusinessInnerContent>
            {business.about && (
              <>
                <SectionTitle>{t('BUSINESS_ABOUT', 'Business short description')}</SectionTitle>
                <Description>{business.about}</Description>
              </>
            )}
            {business.description && (
              <>
                <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business description')}</SectionTitle>
                <Description>{business.description}</Description>
              </>
            )}
            <SectionTitle>{t('LOCATION_AND_HOURS_OF_OPERATION', 'Location and hours of operation')}</SectionTitle>
            <BusinessAddressContainer>
              <HiOutlineLocationMarker />
              {business?.address}
            </BusinessAddressContainer>
            {businessSchedule?.length > 0 && (
              <>
                <ScheduleSection>
                  <FiClock />
                  <ScheduleContainer>
                    {businessSchedule.map((schedule, i) => (
                      <ScheduleBlock key={i}>
                        <h4>{daysOfWeek[i]}</h4>
                        <p>{scheduleFormatted(schedule.lapses[0].open)} - {scheduleFormatted(schedule.lapses[0].close)}</p>
                      </ScheduleBlock>
                    ))}
                  </ScheduleContainer>
                </ScheduleSection>
                <DeliveryInfo>
                  <div>
                    <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
                    <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
                  </div>
                </DeliveryInfo>
              </>
            )}
            {businessPhotos?.length > 0 && (
              <BusinessMediaContent>
                <SectionTitle>{t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')}</SectionTitle>
                <div>
                  {
                    businessPhotos.map((photo, i) => (
                      <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} loading='lazy' />
                    ))
                  }
                </div>
              </BusinessMediaContent>
            )}
            {businessVideos?.length > 0 && (
              <BusinessMediaContent>
                <SectionTitle>{t('BUSINESS_VIDEOS', 'Business Videos')}</SectionTitle>
                <div>
                  {businessVideos.map((video, i) => (
                    <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                  ))}
                </div>
              </BusinessMediaContent>
            )}
          </BusinessInnerContent>
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
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
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
