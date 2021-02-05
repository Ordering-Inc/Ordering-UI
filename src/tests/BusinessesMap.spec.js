import React from 'react'
import { mount } from '@cypress/react'
import { BusinessesMap } from '../components/BusinessesMap'
import ProviderMock from '../__mocks__/ProviderMock'

describe('Mounting Businesses Map component', () => {
  const userLocation = { lat: 40.7751052, lng: -73.9651148 }

  const businessList = [
    {
      location: { lat: 40.94677350000001, lng: -73.98595739999996, zipcode: -1, zoom: 15 },
      logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
      id: 41,
      slug: 'mcbonalds'
    },
    {
      location: { lat: 40.80196739999999, lng: -73.94575050000003, zipcode: -1, zoom: 15 },
      logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562275904/rtsxbq0sblemyu6bxehq.jpg',
      id: 3,
      slug: 'tastewine'
    },
    {
      location: { lat: 37.791370300000004, lng: -122.39876809999998, zipcode: -1, zoom: 15 },
      id: 12
    }
  ]
  it('Component UI', () => {
    mount(
      <ProviderMock>
        <BusinessesMap
          userLocation={userLocation}
          businessList={businessList}
        />
      </ProviderMock>
    )
    cy.get('div').should('be.visible')
  })
})
