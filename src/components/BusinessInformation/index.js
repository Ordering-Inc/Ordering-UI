import React, { useState } from 'react'

import { BusinessInformation as BusinessInformationController, GoogleMaps, WrapperGoogleMaps, useOrder } from 'ordering-components'
import { BusinessReviews } from '../BusinessReviews'
import { BusinessInformationContainer, Header, BusinessContent, BusinessBasicContent, FlexTabs, BusinessLocation, Map, BusinessOpeningTime, Times, DeliveryDetails, BusinessGallery, BusinessVideos, BusinessInfo, BusinessInfoItem, WrapperBusinessLogo, BusinessLogo } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import { getLanguage } from 'ordering-components'

import { GrDeliver, FaStar, FiClock, VscLocation } from 'react-icons/all'

export const BusinessInformationUI = (props) => {
  const { business, getBusinessType, dateFormatted, formatNumber, formatPrice, optimizeImage, businessLocation, businessSchedule, businessPhotos, businessVideos } = props
  const [orderState] = useOrder()
  const [tabValue, setTabValue] = useState('General Info')
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)
  const [, t] = getLanguage()

  const openingTime = ({ open, close }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return (
      <div>
        <p>{`${checkTime(open?.hour)}:${checkTime(open?.minute)}`}</p>
        <p>{`${checkTime(close?.hour)}:${checkTime(close?.minute)}`}</p>
      </div>
    )
  }

  const formatUrlVideo = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    const id = (match && match[7].length === 11) ? match[7] : false
    return `https://www.youtube-nocookie.com/embed/${id}`
  }

  return (
    <BusinessInformationContainer>
      <Header img={business.header}>
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
                    <p>
                      <FiClock />
                      {dateFormatted(business?.delivery_time)}
                    </p>
                  ) : (
                    <p>
                      <FiClock />
                      {dateFormatted(business?.pickup_time)}
                    </p>
                  )}
                </>
                <p>
                  <VscLocation />
                  {formatNumber(business?.distance) || 0} KM
                </p>
                <p>
                  <GrDeliver />
                  {business && formatPrice(business?.delivery_price || 0)}
                </p>
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessBasicContent>
      </Header>
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
            {businessLocation.location && (
              <BusinessLocation>
                <h4>{t('BUSINESS_LOCATION', 'Business location')}</h4>
                <>
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
              </BusinessLocation>
            )}
            {businessSchedule.length > 0 && (
              <BusinessOpeningTime>
                <h4>{t('BUSINESS_OPENING_TIME', 'Business Opening Time')}</h4>
                <Times>
                  {businessSchedule.map((Schedule, i) => (
                    <React.Fragment key={i}>
                      <div>
                        <h4>
                          {daysOfWeek[i]}
                        </h4>
                        {openingTime(Schedule.lapses[0])}
                      </div>
                      <p style={{ border: '1px solid #ccc', display: daysOfWeek[i] === 'Sat' && 'none' }} />
                    </React.Fragment>
                  ))}
                </Times>
                <DeliveryDetails>
                  <span />
                  <div>
                    <h5>{t('DELIVERY_FEE', 'Delivery Fee:')} {formatPrice(business.service_fee)}</h5>
                    <h5>{t('MINIMUM_ORDER', 'Minimum Order:')} {formatPrice(business.minimum)}</h5>
                    <h5>{t('DISTANCE', 'Distance:')} {formatNumber(business?.distance) || 0} {t('KM', 'KM')}</h5>
                  </div>
                  <span />
                  <div>
                    <h5>{t('DELIVERY_TIME', 'Delivery Time:')} {dateFormatted(business?.delivery_time)}</h5>
                    <h5>{t('PICKUP_TIME', 'Pickup Time:')} {dateFormatted(business?.pickup_time)}</h5>
                  </div>
                  <span />
                </DeliveryDetails>
              </BusinessOpeningTime>
            )}
            {businessPhotos.length > 0 && (
              <BusinessGallery>
                <h4>{t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')}</h4>
                <div>
                  {
                    businessPhotos.map((photo, i) => (
                      <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' />
                    ))
                  }
                </div>
              </BusinessGallery>
            )}
            {businessVideos.length > 0 && (
              <BusinessVideos>
                <h4>{t('BUSINESS_VIDEOS', 'Business Videos')}</h4>
                <div>
                  {businessVideos.map((video, i) => (
                    <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                  ))}
                </div>
              </BusinessVideos>
            )}
          </>
        ) : (
          <>
            {business.reviews?.reviews && <BusinessReviews businessId={business.id} reviews={business.reviews?.reviews} businessName={business.name} stars={business.reviews?.total} />}
          </>
        )}
      </BusinessContent>
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
