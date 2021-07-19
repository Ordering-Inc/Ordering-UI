import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage } from 'ordering-components'
import FaLocationArrow from '@meronex/icons/fa/FaLocationArrow'

import {
  HeroContainer,
  HeroImage,
  FormContainer,
  FormWrapper,
  LogoWrapper,
  InputContainer,
  RedirectLink
} from './styles'

import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

export const HomeHero = (props) => {
  const {
    onFindBusiness,
    elementLinkToLogin
  } = props

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
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer>
        <HeroImage
          bgimage={theme.images?.general?.homeHero}
        />
        <FormContainer>
          <FormWrapper>
            <LogoWrapper>
              <img alt='Logotype' src={theme?.images?.logos?.logotype} loading='lazy' />
            </LogoWrapper>
            <h1>{t('TITLE_HOME_TEMPLATE_4', theme?.defaultLanguages?.TITLE_HOME_TEMPLATE_4 || 'Groceries delivered in as little as 1 hour')}</h1>
            <InputContainer onClick={() => handleAddressInput()}>
              <FaLocationArrow />
              <span>{t('MOBILE_FRONT_VISUALS_ADDRESS_OR_ZIPCODE', theme?.defaultLanguages?.MOBILE_FRONT_VISUALS_ADDRESS_OR_ZIPCODE || 'Address or zip code')}</span>
            </InputContainer>
            <Button
              color='primary'
              onClick={handleFindBusinesses}
            >
              {t('CONTINUE', 'Continue')}
            </Button>
            <RedirectLink>
              <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', theme?.defaultLanguages?.MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT || 'Already have an account?')}</span>
              {elementLinkToLogin}
            </RedirectLink>
          </FormWrapper>
        </FormContainer>
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
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
