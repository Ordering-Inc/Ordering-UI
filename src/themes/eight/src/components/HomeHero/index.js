import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  OrderTypeSelectContainer,
  OrderTypeItem,
  OrderTypeInfo,

  WrapInput,
  InputSpan
} from './styles'

import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'
import { AddressForm } from '../../../../../components/AddressForm'
import { AddressList } from '../../../../../components/AddressList'

export const HomeHero = (props) => {
  const { onFindBusiness } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  const handleAddressInput = () => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <HeroContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME_8', theme?.defaultLanguages?.TITLE_HOME || 'What type of order can we get started for you?')}</Title>
          <Slogan>{t('SUBTITLE_HOME_8', theme?.defaultLanguages?.SUBTITLE_HOME || 'Order ahead for pickup or let us deliver to your location')}</Slogan>
          <OrderTypeSelectContainer>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.pickup} alt='pickup' />
              <OrderTypeInfo>
                <span>{t('PICKUP', 'Pickup')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.delivery} alt='delivery' />
              <OrderTypeInfo>
                <span>{t('DELIVERY', 'Delivery')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.eatIn} alt='eat in' />
              <OrderTypeInfo>
                <span>{t('EAT_IN', 'Eat in')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.curbside} alt='curbside' />
              <OrderTypeInfo>
                <span>{t('CURBSIDE', 'Curbside')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
            <OrderTypeItem onClick={handleAddressInput}>
              <img src={theme.images.orderTypes.driveThru} alt='drive thru' />
              <OrderTypeInfo>
                <span>{t('DRIVE_THRU', 'Drive thru')}</span>
                <p>{t('Feugiat ipsum est egestas nulla diam dolor.')}</p>
              </OrderTypeInfo>
            </OrderTypeItem>
          </OrderTypeSelectContainer>
        </ContentWrapper>

        <Modal
          title={t('ADDRESS', theme?.defaultLanguages?.ADDRESS || 'Address')}
          open={modals.formOpen}
          onClose={() => setModals({ ...modals, formOpen: false })}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals({ ...modals, formOpen: false })}
            onSaveAddress={() => setModals({ ...modals, formOpen: false })}
            onCancel={() => setModals({ ...modals, formOpen: false })}
          />
        </Modal>
        <Modal
          title={t('ADDRESSES', theme?.defaultLanguages?.ADDRESSES || 'Addresses')}
          open={modals.listOpen}
          width='70%'
          onClose={() => setModals({ ...modals, listOpen: false })}
        >
          <AddressList
            isModal
            changeOrderAddressWithDefault
            userId={isNaN(userCustomer) ? null : userCustomer}
            onCancel={() => setModals({ ...modals, listOpen: false })}
            onAccept={() => handleFindBusinesses()}
          />
        </Modal>
      </HeroContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}
