import React from 'react'
import { TiPencil } from 'react-icons/ti'
import { AddressDetails as AddressDetailsController } from 'ordering-components'

import {
  AddressContainer,
  Header,
  Map,
  Text
} from './styles'

const AddressDetailsUI = (props) => {
  const {
    userAddress,
    orderType,
    googleMapsUrl
  } = props

  const handleClick = (e) => {
    // setIsOpen(e)
  }

  return (
    <AddressContainer>
      <Header>
        <Text>
          {userAddress}
          {orderType === 1 &&
            <TiPencil
              onClick={() => handleClick(true)}
            />}
        </Text>
      </Header>
      <Map>
        <img src={googleMapsUrl} alt='google-maps-location' width='700' height='260' />
      </Map>
    </AddressContainer>
  )
}

export const AddressDetails = (props) => {
  const addressDetailsProps = {
    ...props,
    UIComponent: AddressDetailsUI
  }
  return (
    <AddressDetailsController {...addressDetailsProps} />
  )
}
