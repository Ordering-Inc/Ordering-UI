import React, { useEffect, useState } from 'react'
import { useLanguage, OrderTypeControl, useOrder, useApi, useSession } from 'ordering-components'
import { useTheme } from 'styled-components'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Modal } from '../Modal'
import {
  OrderTypeSelectorContainer,
  OrderTypeListItemContainer,
  OrderTypeTitle,
  OrderTypeDescription,
  OrderStartWrapper,
  OrderTypeListTitle,
  Logo,
  TypeContainer,
  ModalIcon,
  InputWrapper,
  Table,
  PlaceName
} from './styles'
import { Input } from '../../../../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    handleChangeOrderType,
    orderTypes,
    onClose,
    logo,
    handleBusinessPage,
    businessId
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const [orderTypeSelected, setOrderTypeSelected] = useState(null)
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  // const [pagination, setPagination] = useState({})
  const [places, setPlaces] = useState([])
  const [placeId, setPlaceId] = useState(null)

  const handleClickOrderType = ({ value, text, label }) => {
    if (!label) {
      handleBusinessPage()
      return
    }
    onClose && onClose()
    handleChangeOrderType && handleChangeOrderType(value)
    setOrderTypeSelected({ open: true, type: text, label })
  }
  console.log(places)
  const getPlaces = async () => {
    try {
      const response = await fetch(`${ordering.root}/business/${businessId}/places`)
      const { result, error } = await response.json()
      if (error) {
        setAlertState({
          open: true,
          content: [result]
        })
      } else {
        setPlaces(result.map(place => ({
          name: place.name,
          id: place.id,
          enabled: place.enabled
        })))
      }
    } catch (err) {
      setAlertState({
        open: true,
        content: [err.message]
      })
    }
  }

  const handleChangePlace = async () => {
    if (!placeId) {
      setAlertState({
        open: true,
        content: [t('PLACE_ID_REQURED', 'Place id is required')]
      })
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch(`${ordering.root}/carts/change_place`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          place_id: placeId,
          business_id: businessId
        })
      })
      const { result, error } = await response.json()
      if (error && result[0] !== 'ERROR_YOU_HAVE_NOT_CART') {
        setAlertState({
          open: true,
          content: [result]
        })
      } else {
        await window.localStorage.setItem('place_id', placeId)
        handleBusinessPage()
      }
      setIsLoading(false)
    } catch (err) {
      setAlertState({
        open: true,
        content: [err.message]
      })
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    getPlaces()
  }, [])

  return (
    <div className='order-type' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrderTypeSelectorContainer>
        <Logo>
          <img
            src={logo}
          />
        </Logo>
        <OrderTypeListTitle>{t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')}</OrderTypeListTitle>
        {
          orderTypes && orderTypes.map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={item?.image}
              onClick={() => handleClickOrderType({ value: item.value, text: item.text, label: item.label })}
              active={orderStatus?.options?.type === item?.value}
            >
              <OrderTypeTitle>{item.text}</OrderTypeTitle>
              <OrderTypeDescription>{item.description}</OrderTypeDescription>
              <OrderStartWrapper>
                <span>{t('START_MY_ORDER', 'start my order')}</span>
                <BsArrowRight />
              </OrderStartWrapper>
            </OrderTypeListItemContainer>
          ))
        }
        <Modal
          open={orderTypeSelected?.open}
          onClose={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })}
          hideCloseDefault
        >
          <ModalIcon>
            <BsArrowLeft size={20} onClick={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })} />
          </ModalIcon>
          <TypeContainer>
            <h1>{orderTypeSelected?.type}</h1>
            <label>{orderTypeSelected?.label}</label>
            <InputWrapper>
              <Input placeholder='#' onChange={(e) => setPlaceId(e.target.value)} type='number' />
            </InputWrapper>
            <Table>
              <h2>{t('AVAILABLE_PLACES', 'Available places')}</h2>
              {places.map(place => (
                <PlaceName key={place.id} isDisabled={!place.enabled}>
                  {place.name} #{place.id}
                </PlaceName>
              ))}
            </Table>
          </TypeContainer>
          <Button color='primary' style={{ width: '100%' }} onClick={handleChangePlace} disabled={isLoading}>
            {t('CONTINUE', 'Continue')}
          </Button>
        </Modal>
      </OrderTypeSelectorContainer>
      <Alert
        title={t('LOGIN', 'Login')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

export const OrderTypeSelectorContent = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorContentUI,
    logo: props.logo || theme.images?.dummies?.businessLogo,
    orderTypes: props.orderTypes || [
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.pickUp
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.eatIn,
        label: t('TABLE_NUMBER', 'Table number')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.curbside,
        label: t('Spot', 'Spot')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.driveThru
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
