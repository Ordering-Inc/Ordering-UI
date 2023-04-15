import React, { useEffect, useRef, useState } from 'react'
import { useLanguage, OrderTypeControl, useOrder, useApi, useEvent, useSession, useConfig, useUtils } from 'ordering-components'
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
  PlaceName,
  TitleContainer,
  OrderTypeWrapper,
  LogoutButtonContainer,
  IconsContainer
} from './styles'
import { Input } from '../../../../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { LogoutButton } from '../LogoutButton'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    handleChangeOrderType,
    orderTypes,
    onClose,
    logo,
    handleBusinessPage,
    businessId,
    isDisabledTables
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [orderStatus] = useOrder()
  const [ordering] = useApi()
  const [{ auth }] = useSession()
  const [configState] = useConfig()
  const [{ optimizeImage }] = useUtils()
  const [orderTypeSelected, setOrderTypeSelected] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  // const [pagination, setPagination] = useState({})
  const [places, setPlaces] = useState([])
  const [placeId, setPlaceId] = useState('')
  const inputRef = useRef()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const handleClickOrderType = ({ value, text, label }) => {
    handleChangeOrderType && handleChangeOrderType(value)
    if (!label) {
      handleBusinessPage()
      return
    }
    onClose && onClose()
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
    if (places.some(place => place.id === parseInt(placeId)) || isDisabledTables) {
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

  const ordersRedirect = () => {
    events.emit('go_to_page', { page: 'orders' })
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
        <TitleContainer>
          <OrderTypeListTitle>{t('SELECT_YOUR_ORDER_TYPE', 'Select your order type')}</OrderTypeListTitle>
          {auth && (
            <IconsContainer>
              <svg onClick={ordersRedirect} width='20px' height='20px' viewBox='0 0 16 16' fill={theme.colors.darkTextColor} xmlns='http://www.w3.org/2000/svg'>
                <path d='M14.5 3C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V12.5C15 12.6326 14.9473 12.7598 14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13H1.5C1.36739 13 1.24021 12.9473 1.14645 12.8536C1.05268 12.7598 1 12.6326 1 12.5V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3H14.5ZM1.5 2C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5L0 12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H1.5Z' fill={theme.colors.darkTextColor} />
                <path d='M7.00005 5.50004C7.00005 5.36743 7.05272 5.24025 7.14649 5.14649C7.24026 5.05272 7.36744 5.00004 7.50005 5.00004H12.5C12.6327 5.00004 12.7598 5.05272 12.8536 5.14649C12.9474 5.24025 13 5.36743 13 5.50004C13 5.63265 12.9474 5.75982 12.8536 5.85359C12.7598 5.94736 12.6327 6.00004 12.5 6.00004H7.50005C7.36744 6.00004 7.24026 5.94736 7.14649 5.85359C7.05272 5.75982 7.00005 5.63265 7.00005 5.50004ZM5.50405 4.64604C5.55061 4.69248 5.58755 4.74766 5.61276 4.80841C5.63796 4.86915 5.65094 4.93427 5.65094 5.00004C5.65094 5.06581 5.63796 5.13093 5.61276 5.19167C5.58755 5.25242 5.55061 5.30759 5.50405 5.35404L4.00405 6.85404C3.9576 6.9006 3.90242 6.93755 3.84168 6.96275C3.78093 6.98796 3.71581 7.00093 3.65005 7.00093C3.58428 7.00093 3.51916 6.98796 3.45841 6.96275C3.39767 6.93755 3.34249 6.9006 3.29605 6.85404L2.79605 6.35404C2.74956 6.30755 2.71268 6.25236 2.68752 6.19162C2.66236 6.13088 2.64941 6.06578 2.64941 6.00004C2.64941 5.86726 2.70216 5.73993 2.79605 5.64604C2.88993 5.55215 3.01727 5.49941 3.15005 5.49941C3.28282 5.49941 3.41016 5.55215 3.50405 5.64604L3.65005 5.79304L4.79605 4.64604C4.84249 4.59948 4.89767 4.56253 4.95841 4.53733C5.01916 4.51212 5.08428 4.49915 5.15005 4.49915C5.21581 4.49915 5.28093 4.51212 5.34168 4.53733C5.40242 4.56253 5.4576 4.59948 5.50405 4.64604ZM7.00005 9.50004C7.00005 9.36743 7.05272 9.24025 7.14649 9.14649C7.24026 9.05272 7.36744 9.00004 7.50005 9.00004H12.5C12.6327 9.00004 12.7598 9.05272 12.8536 9.14649C12.9474 9.24025 13 9.36743 13 9.50004C13 9.63265 12.9474 9.75983 12.8536 9.85359C12.7598 9.94736 12.6327 10 12.5 10H7.50005C7.36744 10 7.24026 9.94736 7.14649 9.85359C7.05272 9.75983 7.00005 9.63265 7.00005 9.50004ZM5.50405 8.64604C5.55061 8.69249 5.58755 8.74766 5.61276 8.80841C5.63796 8.86915 5.65094 8.93427 5.65094 9.00004C5.65094 9.06581 5.63796 9.13093 5.61276 9.19167C5.58755 9.25242 5.55061 9.30759 5.50405 9.35404L4.00405 10.854C3.9576 10.9006 3.90242 10.9375 3.84168 10.9628C3.78093 10.988 3.71581 11.0009 3.65005 11.0009C3.58428 11.0009 3.51916 10.988 3.45841 10.9628C3.39767 10.9375 3.34249 10.9006 3.29605 10.854L2.79605 10.354C2.74956 10.3076 2.71268 10.2524 2.68752 10.1916C2.66236 10.1309 2.64941 10.0658 2.64941 10C2.64941 9.9343 2.66236 9.8692 2.68752 9.80846C2.71268 9.74772 2.74956 9.69253 2.79605 9.64604C2.84253 9.59955 2.89772 9.56268 2.95846 9.53752C3.0192 9.51236 3.0843 9.49941 3.15005 9.49941C3.21579 9.49941 3.28089 9.51236 3.34163 9.53752C3.40237 9.56268 3.45756 9.59955 3.50405 9.64604L3.65005 9.79304L4.79605 8.64604C4.84249 8.59948 4.89767 8.56253 4.95841 8.53733C5.01916 8.51212 5.08428 8.49915 5.15005 8.49915C5.21581 8.49915 5.28093 8.51212 5.34168 8.53733C5.40242 8.56253 5.4576 8.59948 5.50405 8.64604Z' fill={theme.colors.darkTextColor} />
              </svg>
              <LogoutButtonContainer>
                <LogoutButton />
              </LogoutButtonContainer>
            </IconsContainer>
          )}
        </TitleContainer>
        <Logo>
          <img
            src={optimizeImage(logo, 'h_200,c_limit')}
          />
        </Logo>
        {
          orderTypes && orderTypes.filter(ordertype => configTypes.includes(ordertype.value)).map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={item?.image}
              onClick={() => handleClickOrderType({ value: item.value, text: item.text, label: item.label })}
              active={orderStatus?.options?.type === item?.value}
            >
              <OrderTypeWrapper>
                <OrderTypeTitle>{item.text}</OrderTypeTitle>
                <OrderTypeDescription>{item.description}</OrderTypeDescription>
                <OrderStartWrapper>
                  <span>{t('START_MY_ORDER', 'Start my order')}</span>
                  <BsArrowRight />
                </OrderStartWrapper>
              </OrderTypeWrapper>
            </OrderTypeListItemContainer>
          ))
        }
        <Modal
          open={orderTypeSelected?.open}
          onClose={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })}
          hideCloseDefault
          height='calc(100vh + 100px)'
          padding='30px 40px 10px 40px'
        >
          <ModalIcon>
            <BsArrowLeft size={20} onClick={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })} color={theme.colors.arrowColor} />
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
            {!isDisabledTables && (
              <Table>
                {places.length > 0 && (
                  <h2>{t('AVAILABLE_PLACES', 'Available places')}</h2>
                )}
                {places.map(place => (
                  <PlaceName key={place.id} isDisabled={!place.enabled}>
                    <p>{place.name}</p> <span>{t('TABLE', 'Table')} {place.id}</span>
                  </PlaceName>
                ))}
              </Table>
            )}
          </TypeContainer>
          <Button color='primary' style={{ width: '100%' }} height='44px' onClick={handleChangePlace}>
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
        image: theme.images?.deliveryTypes?.curbside
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
