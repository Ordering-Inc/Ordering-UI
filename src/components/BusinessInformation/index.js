import React, { useState } from 'react'
import { BusinessInformation as BusinessInformationController, GoogleMaps } from 'ordering-components'
import { Modal } from '../Modal'
import { BusinessInformationContainer, Header, BussinessTitle, Information, HeaderImage, BusinessContent, FlexTabs, BusinessLocation, BusinessOpeningTime, Times, DeliveryDetails, BusinessGallery } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

export const BusinessInformationUI = (props) => {
  const { business, businessLocation, businessSchedule, businessPhotos } = props
  const [open, setOpen] = useState(true)
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

  return (
    <Modal open={open} onClose={onClose}>
      <BusinessInformationContainer>
        <Header img={business.header}>
          <BussinessTitle>
            <HeaderImage>
              <img src={business.logo} />
            </HeaderImage>
            <Information>
              <h5>{business.name}</h5>
              <p>{business.delivery_time}min ${business.delivery_price}</p>
            </Information>
          </BussinessTitle>
        </Header>
        <BusinessContent>
          <FlexTabs>
            <Tabs>
              <Tab>
              General Info
              </Tab>
              <Tab>
              Reviews
              </Tab>
            </Tabs>
          </FlexTabs>
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
        </BusinessContent>
      </BusinessInformationContainer>
    </Modal>
  )
}

export const BusinessInformation = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: BusinessInformationUI
  }
  return <BusinessInformationController {...loginControllerProps} />
}
