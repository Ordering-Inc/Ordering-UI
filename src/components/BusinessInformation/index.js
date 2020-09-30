/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { BusinessInformation as BusinessInformationController, GoogleMaps, WrapperGoogleMaps } from 'ordering-components'
import { BusinessReviews } from '../BusinessReviews'
import { BusinessInformationContainer, Header, BussinessTitle, Information, HeaderImage, BusinessContent, FlexTabs, BusinessLocation, Map, BusinessOpeningTime, Times, DeliveryDetails, BusinessGallery, BusinessVideos } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { GrDeliver } from 'react-icons/gr'

export const BusinessInformationUI = (props) => {
  const { business, businessLocation, businessSchedule, businessPhotos, businessVideos } = props
  const [tabValue, setTabValue] = useState('General Info')
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)

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
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    const id = (match && match[7].length === 11) ? match[7] : false
    return `https://www.youtube-nocookie.com/embed/${id}`
  }

  return (
    <BusinessInformationContainer>
      <Header img={business.header}>
        <BussinessTitle>
          {business?.logo && (
            <HeaderImage>
              <img src={business.logo} />
            </HeaderImage>
          )}
          <Information>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5>{business.name}</h5>
              <h5><AiFillStar color='yellow' /> {business.reviews?.total}</h5>
            </div>
            <p><AiOutlineClockCircle />{business.delivery_time}min * <GrDeliver />${business.delivery_price}</p>
          </Information>
        </BussinessTitle>
      </Header>
      <BusinessContent>
        {business.reviews && (
          <FlexTabs>
            <Tabs variant='primary'>
              <Tab onClick={() => setTabValue('General Info')} active={tabValue === 'General Info'}>
                     General Info
              </Tab>
              {business.reviews && (
                <Tab onClick={() => setTabValue('Reviews')} active={tabValue === 'Reviews'}>
                     Reviews
                </Tab>
              )}
            </Tabs>
          </FlexTabs>
        )}
        {tabValue === 'General Info' ? (
          <>
            {businessLocation.location && (
              <BusinessLocation>
                <h4>Business Location</h4>
                <>
                  {businessLocation.location && (businessLocation.googleMapsControls || business.googleMapsControls) && (
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
                <h4>Business Opening Time</h4>
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
                    <h5>Delivery Fee:</h5>
                    <h5>Minimun Order:</h5>
                    <h5>Distance:</h5>
                  </div>
                  <span />
                  <div>
                    <h5>Order Type Time:</h5>
                    <h5>Delivery Time:</h5>
                    <h5>Pickup Time:</h5>
                  </div>
                  <span />
                </DeliveryDetails>
              </BusinessOpeningTime>
            )}
            {businessPhotos.length > 0 && (
              <BusinessGallery>
                <h4>Business Photo Gallery</h4>
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
                <h4>Business Videos</h4>
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
