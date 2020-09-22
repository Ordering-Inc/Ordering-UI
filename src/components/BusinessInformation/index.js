/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { BusinessInformation as BusinessInformationController, GoogleMaps } from 'ordering-components'
import { Modal } from '../Modal'
import { BusinessReviews } from '../BusinessReviews'
import { BusinessInformationContainer, Header, BussinessTitle, Information, HeaderImage, BusinessContent, FlexTabs, BusinessLocation, BusinessOpeningTime, Times, DeliveryDetails, BusinessGallery, BusinessVideos } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

export const BusinessInformationUI = (props) => {
  const { business, businessLocation, businessSchedule, businessPhotos, businessVideos, ordering } = props
  const [open, setOpen] = useState(true)
  const [tabValue, setTabValue] = useState('General Info')
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  const onClose = () => {
    setOpen(false)
  }

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
    <Modal open={open} onClose={onClose}>
      <BusinessInformationContainer>
        <Header img={business.header}>
          <BussinessTitle>
            <HeaderImage>
              <img src={business.logo} />
            </HeaderImage>
            <Information>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5>{business.name}</h5>
                <h5>stars: {business.reviews?.total}</h5>
              </div>
              <p>{business.delivery_time}min ${business.delivery_price}</p>
            </Information>
          </BussinessTitle>
        </Header>
        <BusinessContent>
          <FlexTabs>
            <Tabs variant='primary'>
              <Tab onClick={() => setTabValue('General Info')} active={tabValue === 'General Info'}>
              General Info
              </Tab>
              <Tab onClick={() => setTabValue('Reviews')} active={tabValue === 'Reviews'}>
              Reviews
              </Tab>
            </Tabs>
          </FlexTabs>
          {tabValue === 'General Info' ? (
            <>
              <BusinessLocation>
                <h4>Business Location</h4>
                <>
                  <span>{businessLocation.address}</span>
                  <span>{businessLocation.address_notes}</span>
                  {/*  <GoogleMaps
                apiKey='AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs'
                location={businessLocation.location}
                mapControls={businessLocation.googleMapsControls}
              /> */}
                </>
              </BusinessLocation>
              <BusinessOpeningTime>
                <h4>Business Opening Time</h4>
                <Times>
                  {businessSchedule.map((Schedule, i) => (
                    <div key={i}>
                      <h4>
                        {daysOfWeek[i]}
                      </h4>
                      {openingTime(Schedule.lapses[0])}
                    </div>
                  ))}
                </Times>
                <DeliveryDetails>
                  <div>
                    <h5>Delivery Fee</h5>
                  </div>
                  <div>
                    <h5>Delivery Fee</h5>
                  </div>
                  <div>
                    <h5>Delivery Fee</h5>
                  </div>
                </DeliveryDetails>
              </BusinessOpeningTime>
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
              <BusinessVideos>
                <h4>Business Videos</h4>
                <div>
                  {businessVideos.map((video, i) => (
                    <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                  ))}
                </div>
              </BusinessVideos>
            </>
          ) : (
            <>
              <BusinessReviews businessId={business.id} reviews={business.reviews?.reviews} ordering={ordering} businessName={business.name} stars={business.reviews?.total} />
            </>
          )}

        </BusinessContent>
      </BusinessInformationContainer>
    </Modal>
  )
}

export const BusinessInformation = (props) => {
  const BusinessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI
  }
  return <BusinessInformationController {...BusinessInformationProps} />
}
