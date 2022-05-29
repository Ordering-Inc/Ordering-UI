import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useSession, useOrder, useLanguage, OrderTypeControl, useConfig } from 'ordering-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  DiscountBars,
  SloganContent,
  WrapOrderyType,
  OrderTypeItem
} from './styles'

import { useWindowSize } from '../../../../../../../hooks/useWindowSize'
import { Modal } from '../../../../../../../components/Modal'
import { AddressForm } from '../../../../../../seven/src/components/AddressForm'
import { AddressList } from '../../../../../../seven/src/components/AddressList'

export const RedHomeHero = (props) => {
  const { onFindBusiness } = props
  const [configState] = useConfig()

  const [{ auth }] = useSession()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const theme = useTheme()
  const userCustomer = parseInt(window.localStorage.getItem('user-customer'))
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const history = useHistory()
  const windowSize = useWindowSize()

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setModals({ ...modals, formOpen: true })
      return
    }
    setModals({ listOpen: false, formOpen: false })
    onFindBusiness && onFindBusiness()
  }

  const handleAddressInput = () => {
    if (auth && orderState?.options?.address?.location) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  useEffect(() => {
    return () => setModals({ listOpen: false, formOpen: false })
  }, [])

  const [submited, setSubmited] = useState(false)

  const handleSaveAddress = () => {
    setSubmited(true)
    setModals({ ...modals, formOpen: false })
  }

  useEffect(() => {
    if (orderState?.options?.address?.address && submited) {
      history.push('/search')
    }
  }, [orderState, submited])

  const today = new Date()
  const curHr = today.getHours()
  const [bgImage, setBgImage] = useState()

  useEffect(() => {
    if (curHr < 12) {
      windowSize.width > 480
        ? setBgImage(theme.images?.alsea?.moringHomeBackDesktop || theme.images?.general?.homeHero)
        : setBgImage(theme.images?.alsea?.moringHomeBackMobile || theme.images?.general?.homeHero)
    } else {
      windowSize.width > 480
        ? setBgImage(theme.images?.alsea?.afternoonHomeBackDesktop || theme.images?.general?.homeHero)
        : setBgImage(theme.images?.alsea?.afternoonHomeBackMobile || theme.images?.general?.homeHero)
    }
  }, [curHr, windowSize])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeroContainer bgimage={bgImage}>
        <ContentWrapper>
          <DiscountBars>
            <img src={theme.images?.alsea?.discountBanner} alt='' />
          </DiscountBars>
          <SloganContent>
            <Title>{t('TITLE_HOME', theme?.defaultLanguages?.TITLE_HOME || 'All We need is Food.')}</Title>
            <ArchiesOrderTypes
              configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
              defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
              handleAddressInput={handleAddressInput}
            />
          </SloganContent>
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
            // onSaveAddress={() => setModals({ ...modals, formOpen: false })}
            onSaveAddress={() => handleSaveAddress()}
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
  }

  return (
    <WrapOrderyType>
      {
        orderTypes && orderTypes.map((orderType) => {
          return (
            <OrderTypeItem key={orderType.value} onClick={() => handleOrderType(orderType)}>
              {orderType.icon}
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
        icon: <TruckIcon />,
        content: <span>{t('DELIVERY', 'Delivery')}</span>

      },
      {
        value: 2,
        icon: <StorePickupIcon />,
        content: <span>{t('PICKUP', 'Pickup')}</span>
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}

export const StorePickupIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <g id='shop-store-market-donut-drink'>
        <path d='M26,16a3,3,0,1,0-3-3A3,3,0,0,0,26,16Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,26,12Z' />
        <rect x='20' y='47' width='2' height='2' />
        <path d='M59,56H57V28.9A5.017,5.017,0,0,0,61,24a.808.808,0,0,0-.01-.16L59.26,13.51A2.978,2.978,0,0,0,56.31,11H49V5a3.009,3.009,0,0,0-3-3H18a3.009,3.009,0,0,0-3,3v6H7.69a2.978,2.978,0,0,0-2.95,2.51L3.01,23.84A.808.808,0,0,0,3,24a5.017,5.017,0,0,0,4,4.9V56H5a3,3,0,0,0,0,6H59a3,3,0,0,0,0-6ZM53,13h3.31a.989.989,0,0,1,.98.84L59,24.08A3,3,0,0,1,53,24Zm-4,8V13h2V24a3,3,0,0,1-6,0h1A3.009,3.009,0,0,0,49,21ZM17,5a1,1,0,0,1,1-1H46a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H18a1,1,0,0,1-1-1ZM43,24a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0ZM13,13h2v8a3.009,3.009,0,0,0,3,3h1a3,3,0,0,1-6,0ZM12,27a5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,4.994,4.994,0,0,0,3,1.89V56H25V43a7,7,0,0,0-14,0V56H9V28.89A4.994,4.994,0,0,0,12,27ZM23,43V56H13V43a5,5,0,0,1,10,0ZM5,24.08,6.71,13.84A.989.989,0,0,1,7.69,13H11V24a3,3,0,0,1-6,.08ZM59,60H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z' />
        <path d='M43.79,10.38A1,1,0,0,0,43,10H40V8h3V6H39a1,1,0,0,0-1,1v3H35a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,37,20h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,43.79,10.38ZM40.22,18H37.78l-1.5-6h5.44Z' />
        <path d='M26,6a7,7,0,1,0,7,7A7.008,7.008,0,0,0,26,6Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,26,18Z' />
        <path d='M50,32H30a3.009,3.009,0,0,0-3,3V51a3.009,3.009,0,0,0,3,3H50a3.009,3.009,0,0,0,3-3V35A3.009,3.009,0,0,0,50,32Zm1,19a1,1,0,0,1-1,1H30a1,1,0,0,1-1-1V35a1,1,0,0,1,1-1H50a1,1,0,0,1,1,1Z' />
        <path d='M44.79,40.38A1,1,0,0,0,44,40H41V38h3V36H40a1,1,0,0,0-1,1v3H36a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,38,50h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,44.79,40.38ZM41.22,48H38.78l-1.5-6h5.44Z' />
      </g>
    </svg>
  )
}

export const TruckIcon = () => {
  return (
    <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 462.522 462.522' xmlSpace='preserve'>
      <path d='M432.958,222.262c-1.452-0.305-2.823-0.592-4.042-0.909c-13.821-3.594-20.129-5.564-24.793-14.569l-17.667-35.768 c-5.678-10.961-20.339-19.879-32.682-19.879h-31.453v-41.303c0-7.416-6.034-13.45-13.452-13.45l-219.07,0.22 c-7.218,0-12.661,5.736-12.661,13.343v12.208H21.018C9.429,122.156,0,131.584,0,143.174s9.429,21.018,21.018,21.018h56.119v20.145 H40.394c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h36.743v20.145H59.77 c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h17.367v21.07c0,7.416,6.034,13.45,13.45,13.45h22.788 c3.549,24.323,24.542,43.064,49.837,43.064c25.297,0,46.291-18.741,49.841-43.064h92.224c0.479,0,0.97-0.032,1.46-0.064 c3.522,24.354,24.528,43.128,49.845,43.128c25.297,0,46.291-18.741,49.841-43.064h32.732c12.885,0,23.368-10.482,23.368-23.366 v-39.648C462.522,228.465,444.73,224.732,432.958,222.262z M356.582,297.46c10.1,0,18.317,8.214,18.317,18.311 s-8.217,18.311-18.317,18.311c-10.096,0-18.31-8.214-18.31-18.311S346.486,297.46,356.582,297.46z M322.321,219.414v-48.77h24.036 c9.238,0,20.634,6.932,24.864,15.094l15.721,31.829c0.333,0.644,0.679,1.258,1.038,1.846H322.321z M181.529,315.77 c0,10.096-8.217,18.311-18.317,18.311c-10.096,0-18.309-8.214-18.309-18.311s8.213-18.311,18.309-18.311 C173.312,297.46,181.529,305.674,181.529,315.77z' />
    </svg>
  )
}