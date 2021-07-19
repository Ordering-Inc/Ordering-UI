import React, { useState } from 'react'
import { AddressDetails as AddressDetailsController, useOrder, useLanguage, useCustomer } from 'ordering-components'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import { useTheme } from 'styled-components'

import {
  AddressContainer,
  Accordion,
  AccordionContent,
  Map,
  Text,
  WrappMap
} from './styles'

import { Alert } from '../../../../../components/Confirm'
import { AddressList } from '../AddressList'

const AddressDetailsUI = (props) => {
  const {
    addressToShow,
    isCartPending,
    googleMapsUrl,
    isCustomerMode
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [{ user }] = useCustomer()

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    toggleAccordion()
  }

  const toggleAccordion = () => {
    if (!(orderState?.options?.type === 1 && !isCartPending)) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AddressContainer>
        <Accordion
          className={`accordion ${setActive}`}
          onClick={() => toggleAccordion()}
          active={orderState?.options?.type === 1 && !isCartPending}
        >
          <Text active={setActive === 'active'}>
            <FaMapMarkerAlt />
            <h4>{addressToShow || orderState?.options?.address?.address}</h4>
          </Text>
          {orderState?.options?.type === 1 && !isCartPending &&
            <span>
              <IosArrowDown className={`${setRotate}`} />
            </span>}
        </Accordion>
        <AccordionContent
          style={{ maxHeight: !setActive && '0px' }}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
            onCancel={() => toggleAccordion()}
            onAccept={() => handleFindBusinesses()}
            userCustomerSetup={isCustomerMode && user}
          />
        </AccordionContent>
        <WrappMap>
          <Map>
            <img src={googleMapsUrl} id='google-maps-image' alt='google-maps-location' width='288px' height='162px' loading='lazy' />
          </Map>
        </WrappMap>

        <Alert
          title={t('SEARCH', 'Search')}
          content={alertState.content}
          acceptText={t('ACCEPT', theme?.defaultLanguages?.ACCEPT || 'Accept')}
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
