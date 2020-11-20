import React, { useState } from 'react'
import { formatUrlVideo, convertHoursToMinutes } from '../../utils'
import {
  BusinessInformation as BusinessInformationController,
  GoogleMapsMap,
  useOrder,
  useLanguage,
  useUtils
} from 'ordering-components'
import { BusinessReviews } from '../BusinessReviews'
import { Modal } from '../Modal'
import {
  BusinessInformationContainer,
  BusinessHeader,
  BusinessContent,
  BusinessBasicContent,
  FlexTabs,
  SectionTitle,
  Map,
  ScheduleBlock,
  ScheduleSection,
  ScheduleContainer,
  DeliveryInfo,
  BusinessMediaContent,
  BusinessInfo,
  BusinessInfoItem,
  WrapperBusinessLogo,
  BusinessLogo,
  ModalIcon,
  Description,
  ImageContainer
} from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import FiClock from '@meronex/icons/fi/FiClock'
import GrLocation from '@meronex/icons/gr/GrLocation'
import MdClose from '@meronex/icons/md/MdClose'
import { AutoScroll } from '../AutoScroll'

export const BusinessInformationUI = (props) => {
  const {
    business,
    getBusinessType,
    optimizeImage,
    businessLocation,
    businessSchedule,
    businessPhotos,
    businessVideos,
    onClose
  } = props
  const [orderState] = useOrder()
  const [tabValue, setTabValue] = useState('General Info')
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance }] = useUtils()
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
    <BusinessInformationContainer>
      <ModalIcon>
        <MdClose onClick={() => onClose()} />
      </ModalIcon>
      <BusinessHeader>
        <img src={business.header} alt='business-image' />
        <BusinessBasicContent>
          <WrapperBusinessLogo>
            <BusinessLogo bgimage={optimizeImage(business?.logo, 'h_200,c_limit')} />
          </WrapperBusinessLogo>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <div>
                <p className='bold'>{business?.name}</p>
                <p>
                  <FaStar className='start' />
                  {business?.reviews?.total}
                </p>
              </div>
              <div>
                <p>{getBusinessType()}</p>
              </div>
              <div>
                <>
                  {orderState?.options?.type === 1 ? (
                    <h5>
                      <FiClock />
                      {convertHoursToMinutes(business?.delivery_time)}
                    </h5>
                  ) : (
                    <h5>
                      <FiClock />
                      {convertHoursToMinutes(business?.pickup_time)}
                    </h5>
                  )}
                </>
                <h5>
                  <GrLocation />
                  {parseDistance(business?.distance || 0)}
                </h5>
                <h5>
                  <GrDeliver />
                  {business && parsePrice(business?.delivery_price || 0)}
                </h5>
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessBasicContent>
      </BusinessHeader>
      <BusinessContent>
        {business.reviews && (
          <FlexTabs>
            <Tabs variant='primary'>
              <Tab onClick={() => setTabValue('General Info')} active={tabValue === 'General Info'}>
                {t('GENERAL_INFO', 'General Info')}
              </Tab>
              {business.reviews && (
                <Tab onClick={() => setTabValue('Reviews')} active={tabValue === 'Reviews'}>
                  {t('REVIEWS', 'Reviews')}
                </Tab>
              )}
            </Tabs>
          </FlexTabs>
        )}

        {tabValue === 'General Info' ? (
          <>
            {business.about && (
              <>
                <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business short description')}</SectionTitle>
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
                      apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
                      location={businessLocation.location}
                      mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
                    />
                  </Map>
                )}
              </>
            )}
            {businessSchedule?.length > 0 && (
              <>
                <SectionTitle>{t('BUSINESS_OPENING_TIME', 'Business Opening Time')}</SectionTitle>
                <ScheduleSection>
                  <ScheduleContainer id='modal-container'>
                    <Tabs id='schedules'>
                      <AutoScroll container='modal-container' categories='schedules' modal>
                        {businessSchedule.map((schedule, i) => (
                          <ScheduleBlock key={i}>
                            <h4>{daysOfWeek[i]}</h4>
                            <p>{scheduleFormatted(schedule.lapses[0].open)}</p>
                            <p>{scheduleFormatted(schedule.lapses[0].close)}</p>
                          </ScheduleBlock>
                        ))}
                      </AutoScroll>
                    </Tabs>
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
                      <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} />
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
          </>
        ) : (
          <>
            {business.reviews?.reviews && (
              <BusinessReviews
                businessId={business.id}
                reviews={business.reviews?.reviews}
                businessName={business.name}
                stars={business.reviews?.total}
              />
            )}
          </>
        )}
      </BusinessContent>
      <Modal
        onClose={() => setModalImage(false)}
        open={modalImage}
        padding='0'
        hideCloseDefault
        isTransparent
      >
        <ImageContainer>
          <ModalIcon>
            <MdClose onClick={() => setModalImage(false)} />
          </ModalIcon>
          <img src={image} />
        </ImageContainer>
      </Modal>
    </BusinessInformationContainer>
  )
}

export const BusinessInformation = (props) => {
  const BusinessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI
  }
  return <BusinessInformationController {...BusinessInformationProps} />
}
