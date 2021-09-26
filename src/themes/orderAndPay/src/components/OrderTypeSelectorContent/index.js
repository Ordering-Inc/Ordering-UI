import React, { useEffect, useRef, useState } from 'react'
import { useLanguage, OrderTypeControl, useOrder, useApi } from 'ordering-components'
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
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  // const [pagination, setPagination] = useState({})
  const [places, setPlaces] = useState([])
  const [placeId, setPlaceId] = useState('')
  const inputRef = useRef()
  const handleClickOrderType = ({ value, text, label }) => {
    if (!label) {
      handleBusinessPage()
      return
    }
    onClose && onClose()
    handleChangeOrderType && handleChangeOrderType(value)
    setOrderTypeSelected({ open: true, type: text, label })
  }

  const getPlaces = async () => {
    try {
      const response = await fetch(`${ordering.root}/business/${businessId}/places`)
      const { result, error } = await response.json()
      if (error) {
        setAlertState({
          open: true,
          content: result
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
        content: err.message
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
    if (places.some(place => place.id === parseInt(placeId))) {
      await window.localStorage.setItem('place_id', placeId)
      handleBusinessPage()
    } else {
      setAlertState({
        open: true,
        content: [t('THE_PLACES_NOT_EXISTS', 'The place does not exists')]
      })
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onChangePlaceId = (e) => {
    inputRef.current.value = inputRef.current.value.replace(/[^0-9.]+/g, '')
    setPlaceId(e.target.value.replace(/[^0-9.]+/g, ''))
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
        <OrderTypeListTitle>{t('SELECT_YOUR_ORDER_TYPE', 'Select your order type')}</OrderTypeListTitle>
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
              <Input
                placeholder='#'
                onChange={(e) => onChangePlaceId(e)}
                type='text'
                ref={inputRef}
                min={0}
              />
            </InputWrapper>
            <Table>
              {places.length > 0 && (
                <h2>{t('AVAILABLE_PLACES', 'Available places')}</h2>
              )}
              {places.map(place => (
                <PlaceName key={place.id} isDisabled={!place.enabled}>
                  {place.name} #{place.id}
                </PlaceName>
              ))}
            </Table>
          </TypeContainer>
          <Button color='primary' style={{ width: '100%' }} onClick={handleChangePlace}>
            {t('CONTINUE', 'Continue')}
          </Button>
        </Modal>
      </OrderTypeSelectorContainer>
      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
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
    logo: theme.images?.businessLogo || props.logo || theme.images?.dummies?.businessLogo,
    orderTypes: props.orderTypes || [
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_PICKUP', theme?.defaultLanguages?.ORDERTYPE_DESCRIPTION_PICKUP),
        image: theme.images?.deliveryTypes?.pickUp
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: t('ORDERTYPE_DESCRIPTION_EATIN', theme?.defaultLanguages?.ORDERTYPE_DESCRIPTION_EATIN),
        image: theme.images?.deliveryTypes?.eatIn,
        label: t('TABLE_NUMBER', 'Table number')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', theme?.defaultLanguages?.ORDERTYPE_DESCRIPTION_CURBSIDE),
        image: theme.images?.deliveryTypes?.curbside,
        label: t('Spot', 'Spot')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', theme?.defaultLanguages?.ORDERTYPE_DESCRIPTION_DRIVETHRU),
        image: theme.images?.deliveryTypes?.driveThru
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
