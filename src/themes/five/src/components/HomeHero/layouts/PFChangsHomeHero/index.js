import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage } from 'ordering-components'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput,
  SearchLocationsContainer,
  DelvieryPickupContainer,
  DeliveryPickupContainer
} from './styles'

import { Modal } from '../../../Modal'
import { Button } from '../../../../styles/Buttons/theme/pfchangs'
import { AddressForm } from '../../../AddressForm'
import { AddressList } from '../../../AddressList'

export const PFChangsHomeHero = (props) => {
  const { onFindBusiness, contentPosition } = props

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [orderTypeSelected, setOrderTypeSelected] = useState(1)
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))

  const homeBackgroundImage = theme?.layouts?.homepage_view?.components?.image

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

  const handleChangeOrderType = (orderType) => {
    setOrderTypeSelected(orderType)
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer bgimage={homeBackgroundImage || theme.images?.general?.homeHero}>
        <ContentWrapper contentPosition={contentPosition}>
          <SearchLocationsContainer>
            <div>
              <p>{t('SEARCH_OR_VIEW_LOCATIONS_BELOW', 'Search or view nearby locations below')}</p>
            </div>
            <DeliveryPickupContainer orderTypeSelected={orderTypeSelected}>
              <Button color={orderTypeSelected === 2 ? '#000' : '#FFF'} onClick={() => handleChangeOrderType(2)}>
                {t('PICKUP', 'Pickup')}
              </Button>
              <Button color={orderTypeSelected === 1 ? '#000' : '#FFF'} onClick={() => handleChangeOrderType(1)}>
                {t('DELIVERY', 'Delivery')}
              </Button>
            </DeliveryPickupContainer>
            {/* <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
            <Slogan>{t('SUBTITLE_HOME', theme?.defaultLanguages?.SUBTITLE_HOME || 'Let\'s start to order food now')}</Slogan> */}
            <WrapInput onClick={handleAddressInput} withIcon>
              <HiOutlineLocationMarker />
              <p>
                {orderState?.options?.address?.address || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
              </p>
            </WrapInput>
            <Button
              color='primary'
              name='find-business'
              onClick={handleFindBusinesses}
            >
              {t('FIND_BUSINESSES', theme?.defaultLanguages?.FIND_BUSINESSES || 'Find businesses')}
            </Button>
          </SearchLocationsContainer>
          <div> {/** mapa */}

          </div>
        </ContentWrapper>
        <Modal
          title={t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
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
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
