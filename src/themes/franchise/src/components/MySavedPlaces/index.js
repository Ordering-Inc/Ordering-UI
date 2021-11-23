import React from 'react'
import { useSession, useLanguage, UserFormDetails as UserFormDetailsController } from 'ordering-components'
import { AddressList } from '../AddressList'
import { useTheme } from 'styled-components'
import {
  MySavedPlacesContainer,
  WrappNotAddresses
} from './styles'

const MySavedPlacesUI = (props) => {
  const [{ user }] = useSession()
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <MySavedPlacesContainer>
      <h1>{t('MY_ADDRESSES', 'My Saved places')}</h1>
      {user?.addresses ? (
        <AddressList isModal addressList={user?.addresses} />
      ) : (
        <WrappNotAddresses>
          <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='112px' loading='lazy' />
          <h1>{t('NOT_FOUND_ADDRESS', 'Sorry, You don\'t seem to have any addresses.')}</h1>
        </WrappNotAddresses>
      )}
    </MySavedPlacesContainer>
  )
}

export const MySavedPlaces = (props) => {
  const mySavedPlacesProps = {
    ...props,
    UIComponent: MySavedPlacesUI
  }
  return <UserFormDetailsController {...mySavedPlacesProps} />
}
