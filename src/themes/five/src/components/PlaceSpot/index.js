import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  PlaceSpot as PlaceSpotController,
  useLanguage,
  useOrder
} from 'ordering-components'

import {
  PlaceGroupContainer,
  PlaceSpotContainer,
  Title,
  ButtonWrapper,
  WrapperInput,
  WrapperOption,
  WrapperOptionList
} from './styles'

import { Alert } from '../Confirm'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'
import { Select } from '../../styles/Select'

const PlaceSpotUI = (props) => {
  const {
    cart,
    orderTypes,
    placesState,
    spotNumber,
    spotState,
    isCheckout,
    vehicle,
    isInputMode,
    onClose,
    setSpotNumber,
    setVehicle,
    setSpotState,
    handleChangeSpot,
    setHasBusinessPlaces
  } = props

  const el = useRef()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [placeGroupSelected, setPlaceGroupSelected] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const selectYourSpotString = placeGroupSelected?.name === 'Tables' ? t('SELECT_YOUR_TABLE', 'Select your table') : t('SELECT_YOUR_SPOT', 'Select your spot')
  const vehicleInputAllowed = [4, 5]
  const isEatin = orderState?.options?.type === 3
  const placeholderText = isEatin
    ? t('EATIN_SPOT_NUMBER', 'Table number')
    : orderState?.options?.type === 5
      ? t('DRIVE_THRU_SPOT_NUMBER', 'Drive thru lane')
      : t('CURBSIDE_SPOT_NUMBER', 'Spot number')

  const vehicleTypeList = [
    { key: 'car', text: t('VEHICLE_TYPE_CAR', 'Car') },
    { key: 'truck', text: t('VEHICLE_TYPE_TRUCK', 'Truck') },
    { key: 'suv', text: t('VEHICLE_TYPE_SUV', 'SUV') },
    { key: 'van', text: t('VEHICLE_TYPE_VAN', 'Van') },
    { key: 'motorcycle', text: t('VEHICLE_TYPE_MOTORCYCLE', 'Motorcycle') },
    { key: 'bike', text: t('VEHICLE_TYPE_BIKE', 'Bike') }
  ]

  const vehicleInputList = [
    { key: 'model', text: t('VEHICLE_MODEL', 'Model') },
    { key: 'car_registration', text: t('VEHICLE_CAR_REGISTRATION', 'Car registration') },
    { key: 'color', text: t('VEHICLE_COLOR', 'Color') }
  ]

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
    setSpotState({ ...spotState, error: null })
  }

  const getVehicleTypeList = () => {
    vehicleTypeList.unshift({
      key: null,
      text: t('SELECT_AN_OPTION', 'Select an option')
    })

    return vehicleTypeList.map(type => ({
      value: type?.key,
      content: type?.text,
      showOnSelected: type?.text
    }))
  }

  const onChangeSpotNumber = (e) => {
    if (/^[\d]*$/.test(e?.target?.value)) {
      let spotNumber = parseFloat(e?.target?.value)
      spotNumber = isNaN(spotNumber) ? null : spotNumber
      setSpotNumber(spotNumber)
    }
  }

  const onChangeSpot = () => {
    if (orderState.loading) return
    const isVehicle = Object.values(vehicle).every(e => e)
    const bodyToSend = {}
    spotNumber && (bodyToSend.spot_number = spotNumber)
    isVehicle && (bodyToSend.vehicle = vehicle)

    if (Object.keys(bodyToSend).length) {
      handleChangeSpot({ bodyToSend, isCheckout: !!isCheckout })
    }
  }

  const getPlacesGroups = () => {
    const groups = placesState.placeGroups?.filter(group => group?.enabled && placesState?.places?.find(place => place?.enabled && place?.place_group_id === group?.id))
    return groups.map(group => ({
      value: group,
      content: group?.name,
      showOnSelected: group?.name
    }))
  }

  const getPlaces = () => {
    const places = placeGroupSelected && placesState?.places?.filter(place => place?.enabled && place?.place_group_id === placeGroupSelected?.id)
    return places.map(place => ({
      value: place,
      content: place.name,
      showOnSelected: place.name
    }))
  }

  useEffect(() => {
    if (!placesState?.loading) {
      const placeGroupOnCart = placesState?.placeGroups.find(group => group?.id === cart?.place?.place_group_id)
      setPlaceGroupSelected(placeGroupOnCart)
      const groups = placesState.placeGroups?.filter(group => group?.enabled && placesState?.places?.find(place => place?.enabled && place?.place_group_id === group?.id))
      if (groups.length === 0) {
        setHasBusinessPlaces && setHasBusinessPlaces(false)
      }
    }
  }, [placesState])

  useEffect(() => {
    el.current && (el.current.onkeyup = onChangeSpotNumber)
  }, [])

  useEffect(() => {
    el.current && (el.current.value = spotNumber ?? '')
  }, [spotNumber])

  useEffect(() => {
    if (spotState?.error) {

    }
  }, [spotState])

  useEffect(() => {
    if (spotState?.error?.length > 0) {
      setAlertState({
        open: true,
        content: spotState?.error
      })
    }
  }, [spotState?.error])

  return (
    <PlaceSpotContainer isCheckout={isCheckout} style={props.containerStyle}>
      {isInputMode ? (
        <PlaceGroupContainer>
          <Title>
            {orderTypes[orderState?.options?.type]}
          </Title>
          {vehicleInputAllowed.includes(orderState?.options?.type) && (
            <WrapperOptionList>
              <WrapperOption>
                <p>
                  {t('VEHICLE_TYPE', 'Vehicle type')}
                </p>
                <Select
                  isHomeStyle={props.isHomeStyle}
                  options={getVehicleTypeList()}
                  defaultValue={vehicle?.type || null}
                  onChange={(type) => setVehicle({ ...vehicle, type: type ?? '' })}
                  selectInputStyle={{ paddingTop: 3.5, paddingBottom: 3.5 }}
                />
              </WrapperOption>

              {vehicleInputList.map(input => (
                <WrapperOption key={input.key}>
                  <p>
                    {input.text}
                  </p>
                  <Input
                    type='text'
                    placeholder={input.text}
                    defaultValue={vehicle[input.key]}
                    onChange={(val) => setVehicle({ ...vehicle, [input.key]: val?.target?.value })}
                  />
                </WrapperOption>
              ))}
            </WrapperOptionList>
          )}
          <p>{placeholderText}</p>
          <WrapperInput>
            <Input
              ref={el}
              name={`${isEatin ? 'table' : 'spot'}_number`}
              type='text'
              placeholder={placeholderText}
              onKeyPress={(e) => {
                if (!/^[\d]*$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
            <Button
              color='primary'
              outline
              disabled={(!spotNumber && !Object.values(vehicle).every(e => e))}
              onClick={() => onChangeSpot()}
            >
              {t('UPDATE_SPOT_NUMBER', 'Update')}
            </Button>
          </WrapperInput>
        </PlaceGroupContainer>
      ) : (
        <>
          {placesState?.loading && (
            <>
              <PlaceGroupContainer>
                <Skeleton width={100} height={25} className='title' />
                <Skeleton height={30} />
              </PlaceGroupContainer>
              <div>
                <Skeleton width={120} height={25} className='title' />
                <Skeleton height={30} />
              </div>
            </>
          )}
          {!(placesState.error || placesState?.placeGroups?.length === 0) && !placesState?.loading && (
            <>
              <PlaceGroupContainer>
                <Title>
                  {props.isSelectDisabled ? (
                    t('PLACE_GROUP', 'Place group')
                  ) : (
                    orderTypes[orderState?.options?.type]
                  )}
                </Title>
                {props.isSelectDisabled ? (
                  <div>
                    {placeGroupSelected?.name} - {placesState?.places?.find(place => place?.id === cart?.place_id)?.name}
                  </div>
                ) : (
                  <Select
                    isHomeStyle={!props.isCancelHomeStyle}
                    isDisabled={props.isSelectDisabled}
                    options={getPlacesGroups()}
                    defaultValue={placeGroupSelected ?? cart?.place}
                    placeholder={t('PLACE_GROUP', 'Place group')}
                    isOneOption={getPlacesGroups()?.length === 1}
                    disableOneOption={getPlacesGroups()?.length > 1 || props.isSelectDisabled}
                    onChange={(group) => setPlaceGroupSelected(group)}
                  />
                )}
              </PlaceGroupContainer>
              {placeGroupSelected && !props.isSelectDisabled && (
                <div>
                  <Title>{selectYourSpotString}</Title>
                  <Select
                    disableOneOption
                    options={getPlaces()}
                    isHomeStyle={!props.isCancelHomeStyle}
                    isDisabled={props.isSelectDisabled}
                    placeholder={selectYourSpotString}
                    defaultValue={placesState?.places?.find(place => place?.id === cart?.place_id)}
                    onChange={(place) => handleChangeSpot(place, props.isFetchOrder)}
                  />
                </div>
              )}
            </>
          )}
          {placeGroupSelected && placesState?.places?.find(place => place?.id === cart?.place_id) && !isCheckout && (
            <ButtonWrapper>
              <Button
                color={placesState?.loading ? 'secondary' : 'primary'}
                disabled={placesState?.loading}
                onClick={() => onClose && onClose()}
              >
                {t('CONTINUE', 'Continue')}
              </Button>
            </ButtonWrapper>
          )}
        </>
      )}
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </PlaceSpotContainer>
  )
}

export const PlaceSpot = (props) => {
  const [, t] = useLanguage()

  const placeSpotProps = {
    ...props,
    UIComponent: PlaceSpotUI,
    onRemoveSpotNumber: (businessSlug) => {
      const spotNumberFromStorage = window.localStorage.getItem('table_number')
      if (!spotNumberFromStorage) return
      const slug = JSON.parse(spotNumberFromStorage)?.slug
      if (businessSlug === slug) {
        window.localStorage.removeItem('table_number')
      }
    },
    orderTypes: {
      1: t('DELIVERY', 'Delivery'),
      2: t('PICKUP', 'Pickup'),
      3: t('EAT_IN', 'Eat in'),
      4: t('CURBSIDE', 'Curbside'),
      5: t('DRIVE_THRU', 'Drive thru')
    }
  }

  return <PlaceSpotController {...placeSpotProps} />
}
