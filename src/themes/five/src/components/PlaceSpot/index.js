import React, { useEffect, useState } from 'react'
import { Select } from '../../styles/Select'
import {
  // PlaceSpot as PlaceSpotController,
  useLanguage,
  useOrder
} from 'ordering-components'
import { PlaceSpot as PlaceSpotController } from './test'
import { PlaceGroupContainer, PlaceSpotContainer, Title, ButtonWrapper } from './styles'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'

const PlaceSpotUI = (props) => {
  const {
    cart,
    orderTypes,
    placesState,
    handleChangePlace,
    onClose,
    isCheckout,
    setHasBusinessPlaces
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [placeGroupSelected, setPlaceGroupSelected] = useState(null)
  const selectYourSpotString = placeGroupSelected?.name === 'Tables' ? t('SELECT_YOUR_TABLE', 'Select your table') : t('SELECT_YOUR_SPOT', 'Select your spot')

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

  return (
    <PlaceSpotContainer isCheckout={isCheckout} style={props.containerStyle}>
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
                onChange={(place) => handleChangePlace(place, props.isFetchOrder)}
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
    </PlaceSpotContainer>
  )
}

export const PlaceSpot = (props) => {
  const [, t] = useLanguage()

  const placeSpotProps = {
    ...props,
    UIComponent: PlaceSpotUI,
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
