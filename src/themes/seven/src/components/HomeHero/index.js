import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, OrderTypeControl, useConfig } from 'ordering-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapOrderyType,
  OrderTypeItem
} from './styles'

import { Modal } from '../../../../../components/Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

export const HomeHero = (props) => {
  const { onFindBusiness } = props
  const [configState] = useConfig()

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  // const configTypes = [1, 2, 3]

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
      <HeroContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper>
          <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
          <Slogan>{t('SUBTITLE_HOME', theme?.defaultLanguages?.SUBTITLE_HOME || 'Let\'s start to order food now')}</Slogan>
          <ArchiesOrderTypes
            configTypes={!configState?.loading && configTypes.length > 0 ? configTypes : null}
            defaultValue={!(!configState?.loading && configTypes.length > 0) && 1}
            handleAddressInput={handleAddressInput}
          />
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
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

const ArchiesOrderTypeUI = (props) => {
  const {
    handleChangeOrderType,
    configTypes,
    orderTypes,
    handleAddressInput
  } = props

  const handleOrderType = (orderType) => {
    if (configTypes && configTypes.includes(orderType.value)) {
      handleChangeOrderType(orderType.value)
    }
    handleAddressInput()

    // if (orderType.value === configTypes[0]) {
    //   handleAddressInput()
    // }
  }

  return (
    <WrapOrderyType>
      {
        orderTypes && orderTypes.map((orderType) => {
          return (
            <OrderTypeItem key={orderType.value} onClick={() => handleOrderType(orderType)}>
              {orderType.content}
            </OrderTypeItem>
          )
        })
      }
    </WrapOrderyType>
  )
}

export const ArchiesOrderTypes = (props) => {
  const [, t] = useLanguage()
  const orderTypeProps = {
    ...props,
    UIComponent: ArchiesOrderTypeUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: <span>{t('DELIVERY', 'Delivery')}</span>
      },
      {
        value: 2,
        content: <span>{t('PICKUP', 'Pickup')}</span>
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}
