import React, { useState } from 'react'
import { useLanguage, useOrder, useUtils, useConfig } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import GrClock from '@meronex/icons/gr/GrClock'
import { Button } from '../../styles/Buttons'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'
import { MomentContent } from '../MomentContent'

import {
  Container,
  Title,
  AddressContainer,
  WrapperAddress,
  ScheduleContainer,
  WrapScheduleTime,
  AddressFormContainer
} from './styles'
export const DeliveryDetailsContent = (props) => {
  const {
    auth,
    addressState,
    onClose
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const [openAddressForm, setOpenAddressForm] = useState(false)
  const [openMomentForm, setOpenMomentForm] = useState(false)

  const handleCloseMoment = () => {
    onClose && onClose()
    setOpenMomentForm(false)
  }

  return (
    <>
      {!openAddressForm && !openMomentForm && (
        <Container>
          <Title>{t('ADDRESS', 'Address')}</Title>
          <AddressContainer>
            <WrapperAddress>
              <HiOutlineLocationMarker />
              {orderState.options?.address?.address?.split(',')?.[0]}
            </WrapperAddress>
            <Button color='secundary' onClick={() => setOpenAddressForm(true)}>
              {t('CHANGE', 'Change')}
            </Button>
          </AddressContainer>
          <ScheduleContainer>
            <WrapScheduleTime>
              <GrClock />
              {orderState.options?.moment
                ? parseDate(orderState.options?.moment, { outputFormat: configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
                : t('ASAP_ABBREVIATION', 'ASAP')}
            </WrapScheduleTime>
            <Button color='secundary' onClick={() => setOpenMomentForm(true)}>
              {t('CHANGE', 'Change')}
            </Button>
          </ScheduleContainer>
          <Button color='primary' onClick={() => onClose && onClose()}>
            {t('DONE', 'Done')}
          </Button>
        </Container>
      )}
      {openAddressForm && (
        <AddressFormContainer>
          <Title>{t('DELIVERY_TO', 'Delivery To')}</Title>
          {auth ? (
            <AddressList
              isPopover
              changeOrderAddressWithDefault
              userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
              onClosePopover={props.onClose}
              onDone={() => setOpenAddressForm(false)}
            />
          ) : (
            <AddressForm
              useValidationFileds
              address={addressState || {}}
              onClose={() => setOpenAddressForm(false)}
              onCancel={() => setOpenAddressForm(false)}
              onSaveAddress={() => setOpenAddressForm(false)}
            />
          )}
        </AddressFormContainer>
      )}
      {openMomentForm && (
        <MomentContent
          onClose={() => handleCloseMoment()}
        />
      )}
    </>
  )
}
