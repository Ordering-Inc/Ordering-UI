import React, { useState } from 'react'
import { AddressDetails as AddressDetailsController, useLanguage } from 'ordering-components'
import {
  AddressContainer,
  Map,
  WrappMap
} from './styles'
import { Alert } from '../../../../../components/Confirm'

const AddressDetailsUI = (props) => {
  const {
    googleMapsUrl,
    apiKey
  } = props
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressContainer>
        {apiKey && (
          <WrappMap>
            <Map>
              <img src={googleMapsUrl} id='google-maps-image' alt='google-maps-location' width='288px' height='162px' loading='lazy' />
            </Map>
          </WrappMap>
        )}
        <Alert
          title={t('SEARCH', 'Search')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => setAlertState({ open: false, content: [] })}
          onAccept={() => setAlertState({ open: false, content: [] })}
          closeOnBackdrop={false}
        />
      </AddressContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
