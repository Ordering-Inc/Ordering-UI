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
  ScheduleBlock,
  ScheduleSection,
  ScheduleContainer,
  DeliveryInfo,
  BusinessMediaContent,
  ModalIcon,
  Description,
  ImageContainer,
  BusinessTitle,
  BusinessAddress,
  Divider
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
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
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
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessInformationContainer>
        <ModalIcon>
          <MdClose onClick={() => onClose(false)} />
        </ModalIcon>
        <BusinessContent>
          <BusinessTitle>{business?.name}</BusinessTitle>
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
          {businessLocation.location && (
            <>
              <SectionTitle>{t('BUSINESS_LOCATION', 'Business location')}</SectionTitle>
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
          {
            business?.address && <BusinessAddress>{business?.address}</BusinessAddress>
          }
          <Divider />
          {businessSchedule?.length > 0 && (
            <>
              <SectionTitle>{t('OPENING_TIME', 'Opening time')}</SectionTitle>
              <ScheduleSection>
                <ScheduleContainer>
                  {businessSchedule.map((schedule, i) => (
                    <ScheduleBlock key={i}>
                      <h4>{daysOfWeek[i]}</h4>
                      {schedule.enabled ? (
                        <div>
                          <p>{scheduleFormatted(schedule.lapses[0].open)}</p>
                          <div>-</div>
                          <p>{scheduleFormatted(schedule.lapses[0].close)}</p>
                        </div>
                      ) : (
                        <p className='close'>{t('CLOSED', 'Closed')}</p>
                      )}
                    </ScheduleBlock>
                  ))}
                </ScheduleContainer>
              </ScheduleSection>
              <Divider />
              <DeliveryInfo>
                <div>
                  <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
                  <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
                </div>
              </DeliveryInfo>
              <Divider />
            </>
          )}
          {businessVideos?.length > 0 && (
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
          {businessPhotos?.length > 0 && (
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
