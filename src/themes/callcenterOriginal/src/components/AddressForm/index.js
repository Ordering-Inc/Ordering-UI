import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import CgSearchLoading from '@meronex/icons/cg/CgSearchLoading'
import {
  Heart,
  Building,
  PlusLg,
  House,
  GeoAlt
} from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  useLanguage,
  GoogleMapsMap,
  useSession,
  useOrder,
  useConfig,
  useToast,
  ToastType,
  useEvent
} from 'ordering-components'
import { Alert } from '../Confirm'
import { GoogleGpsButton } from '../../../../../components/GoogleGpsButton'
import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection,
  WrapperMap,
  WrapperSkeleton,
  AddressMarkContainer,
  StreetViewText,
  WithoutAddressContainer
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'
import { WithoutAddressText } from '../AddressList/styles'

const AddressFormUI = (props) => {
  const {
    addressesList,
    googleMapsControls,
    formState,
    addressState,
    isRequiredField,
    showField,
    updateChanges,
    onCancel,
    handleChangeInput,
    saveAddress,
    setIsEdit,
    userCustomerSetup,
    businessesList,
    getBusinessDeliveryZones,
    address,
    notUseCustomerInfo,
    addFormRestrictions,
    showSpreadForm,
    isAllowUnaddressOrderType,
    addressSpreadForm,
    setAddressSpreadForm,
    editSpreadAddress,
    setEditSpreadAddress
  } = props

  const [configState] = useConfig()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [{ auth }] = useSession()
  const [, { showToast }] = useToast()
  const [events] = useEvent()
  const theme = useTheme()

  const [selectedFromAutocomplete, setSelectedFromAutocomplete] = useState(false)
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [addressValue, setAddressValue] = useState(formState.changes?.address ?? addressState.address?.address ?? '')
  const [firstLocationNoEdit, setFirstLocationNoEdit] = useState({ value: null })
  const [showMap, setShowMap] = useState(false)
  const isEditing = !!addressState.address?.id
  const googleInputRef = useRef()

  const [locationChange, setLocationChange] = useState(
    isEditing
      ? addressState?.address?.location
      : formState.changes?.location ?? null
  )

  const businessZones = businessesList?.businesses?.map(business => business?.zones)
  const maxLimitLocation = configState?.configs?.meters_to_change_address?.value
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value
  const isLocationRequired = configState.configs?.google_autocomplete_selection_required?.value === '1' ||
    configState.configs?.google_autocomplete_selection_required?.value === 'true'

  const mapErrors = {
    ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
    ERROR_MAX_LIMIT_LOCATION: `Sorry, You can only set the position to ${maxLimitLocation}m`
  }

  const inputNames = [
    { name: 'address', code: 'Address' },
    { name: 'internal_number', code: 'Internal number' },
    { name: 'zipcode', code: 'Zipcode' },
    { name: 'address_notes', code: 'Address notes' }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  /**
   * Returns true when the user made no changes
   * @param {object} address
   */
  const checkAddress = (address, addressToCompare) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    props.forEach(prop => {
      if (addressToCompare[prop]) {
        if (prop === 'location') {
          values.push(address[prop]?.lat === addressToCompare[prop]?.lat &&
            address[prop]?.lng === addressToCompare[prop]?.lng)
        } else {
          values.push(address[prop] === addressToCompare[prop])
        }
      } else {
        values.push(!address[prop])
      }
    })
    return values.every(value => value)
  }

  const getAddressFormatted = (addressChange) => {
    const data = { address: null, error: null }
    const geocoder = window.google && new window.google.maps.Geocoder()
    if (geocoder) {
      geocoder.geocode({ address: addressChange }, (results, status) => {
        let postalCode = null
        if (status === 'OK' && results && results.length > 0) {
          for (const component of results?.[0].address_components) {
            const addressType = component.types?.[0]
            if (addressType === 'postal_code') {
              postalCode = component.short_name
              break
            }
          }
          data.address = {
            address: addressChange,
            location: { lat: results?.[0].geometry.location.lat(), lng: results?.[0].geometry.location.lng() },
            utc_offset: results?.[0].utc_offset_minutes ?? 0,
            map_data: {
              library: 'google',
              place_id: results?.[0].place_id
            }
          }
          if (postalCode) {
            data.address.zipcode = postalCode
          }
          const arrayList = isEditing
            ? addressesList.filter(address => address.id !== addressState.address?.id) || []
            : addressesList || []
          const addressToCompare = isEditing
            ? { ...addressState.address, ...data.address, ...formState?.changes }
            : { ...data.address, ...formState?.changes }

          const isAddressAlreadyExist = arrayList.map(address => checkAddress(address, addressToCompare)).some(value => value) ?? false
          if (!isAddressAlreadyExist) {
            saveAddress(data.address, userCustomerSetup)
            return
          }

          setAlertState({
            open: true,
            content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
          })
        } else {
          setAlertState({
            open: true,
            content: [t('ERROR_NOT_FOUND_ADDRESS', 'Error, address not found')]
          })
        }
      })
    } else {
      setAlertState({
        open: true,
        content: [t('ERROR_FAILED_LOAD_GEOCODER', 'Failed to load geocoder, please try again.')]
      })
    }
  }

  const checkKeyDown = (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (keyCode === 13) { e.preventDefault() }
  }

  const onSubmit = async () => {
    if (!auth && formState?.changes?.address === '' && addressState?.address?.address) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'The field Address is required')]
      })
      setLocationChange(null)
      return
    }

    if (formState?.changes?.address && !formState?.changes?.location) {
      if (isLocationRequired) {
        setAlertState({
          open: true,
          content: [t('ADDRESS_REQUIRE_LOCATION', 'The address needs a location, please select one of the suggested')]
        })
        return
      }
      getAddressFormatted(formState?.changes?.address)
      return
    }

    const arrayList = isEditing
      ? addressesList?.filter(address => address?.id !== addressState?.address?.id) || []
      : addressesList || []
    const addressToCompare = isEditing
      ? { ...addressState.address, ...formState.changes }
      : formState?.changes

    const isAddressAlreadyExist = arrayList.map(address => checkAddress(address, addressToCompare)).some(value => value) ?? false

    if (!isAddressAlreadyExist) {
      saveAddress({}, userCustomerSetup)
      return
    }

    setAlertState({
      open: true,
      content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
    })
  }

  const handleAddressTag = (tag) => {
    setAddressTag(tag)
    handleChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    })
  }

  const handleChangeAddress = async (address) => {
    if (address?.location) {
      const result = await getBusinessDeliveryZones(address?.location)
      if (result?.length === 0) {
        showToast(ToastType.Error, t('NO_NEAR_DELIVERY_ZONES', 'No near delivery zones'), 3000)
      }
    }
    setSelectedFromAutocomplete(true)
    updateChanges({
      ...address,
      address: googleInputRef?.current?.value
    })
  }

  const setMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: !(errKey === 'ERROR_MAX_LIMIT_LOCATION')
        ? [t(errKey, mapErrors[errKey])]
        : `${[t(errKey, mapErrors[errKey])]} ${maxLimitLocation} ${[t('METTERS', 'meters')]}`
    })
  }

  const openStreetView = () => {
    const lat = formState?.changes?.location?.lat ?? address?.location?.lat
    const lng = formState?.changes?.location?.lng ?? address?.location?.lng
    const url = `http://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    if (!auth) {
      setLocationChange(formState?.changes?.location ?? orderState?.options?.address?.location ?? '')
      setAddressValue(formState?.changes?.address ?? orderState?.options?.address?.address ?? '')
      inputNames.forEach(field =>
        formMethods.setValue(
          field.name,
          formState?.changes[field.name] ||
          (orderState?.options?.address && orderState?.options?.address[field.name]) ||
          ''
        )
      )
      return
    }

    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }

    setAddressValue(formState?.changes?.address ?? addressState.address?.address ?? '')
    formMethods.setValue('address', formState?.changes?.address ?? addressState.address?.address ?? '')
    if (!isEditing) {
      inputNames.forEach(field => formMethods.setValue(field.name, formState?.changes[field.name] || ''))
      formState?.changes?.address && setLocationChange(formState?.changes?.location)
      if (
        formState?.changes?.address &&
        formState?.changes?.address !== firstLocationNoEdit?.address &&
        formState?.changes?.location &&
        formState?.changes?.location?.lat !== firstLocationNoEdit.value?.lat &&
        formState?.changes?.location?.lng !== firstLocationNoEdit.value?.lng
      ) {
        setFirstLocationNoEdit({
          value: formState?.changes?.location,
          address: formState?.changes?.address
        })
      }
    }

    if (isEditing) {
      if (formState?.changes?.location) {
        const prevLocation = { lat: Math.trunc(locationChange?.lat), lng: Math.trunc(locationChange?.lng) }
        const newLocation = { lat: Math.trunc(formState?.changes?.location?.lat), lng: Math.trunc(formState?.changes?.location?.lng) }
        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          setLocationChange(formState?.changes?.location)
        }
      }
    }
  }, [formState])

  useEffect(() => {
    if (isEditing) {
      setIsEdit && setIsEdit(true)
      setAddressValue(addressState.address?.address)
    } else {
      setIsEdit && setIsEdit(false)
    }
  }, [addressState])

  useEffect(() => {
    if (!auth) {
      setLocationChange(formState?.changes?.location ?? orderState?.options?.address?.location ?? '')
    }

    return () => {
      setFirstLocationNoEdit({ value: null })
      setAddressSpreadForm(null)
    }
  }, [])

  /** Form events control */

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    inputNames.forEach(field => {
      formMethods.register(field.name, {
        required: isRequiredField(field.name)
          ? t(`VALIDATION_ERROR_${field.name}_REQUIRED`, `The field ${field.code} is required`)
          : null
      })
      formMethods.setValue(field.name, formState.changes?.[field.name] ?? addressState.address?.[field.name] ?? '')
    })
  }, [formMethods])

  useEffect(() => {
    if (address?.location) {
      getBusinessDeliveryZones(address?.location)
    }
  }, [address])

  useEffect(() => {
    if (addressSpreadForm) {
      updateChanges(addressSpreadForm)
      if (addressSpreadForm?.location) {
        setSelectedFromAutocomplete(true)
      }
    }
  }, [addressSpreadForm])

  return (
    <div className='address-form'>
      {(configState.loading || addressState.loading) && (
        <WrapperSkeleton>
          <Skeleton height={50} count={5} style={{ marginBottom: '10px' }} />
        </WrapperSkeleton>
      )}

      {(!showSpreadForm || (showSpreadForm && addressSpreadForm?.address)) && (
        <>
          {!configState.loading && !addressState.loading && (
            <FormControl
              onSubmit={formMethods.handleSubmit(onSubmit)}
              onKeyDown={(e) => checkKeyDown(e)}
              autoComplete='off'
            >
              {inputNames.map(field => showField && showField(field.name) && (
                field.name === 'address' ? (
                  <React.Fragment key={field.name}>
                    <>
                      {!showSpreadForm && (
                        <AddressWrap className='google-control'>
                          <WrapAddressInput>
                            {!selectedFromAutocomplete && address?.address && (!address?.location?.lat || !address?.location?.lng) && (
                              <AddressMarkContainer>
                                <p>
                                  {t('PLEASE_SELECT_GOOGLE_MAPS_ADDRESS', 'Please select an address given by google maps.')}
                                </p>
                              </AddressMarkContainer>
                            )}
                            <GoogleAutocompleteInput
                              className='input-autocomplete'
                              apiKey={googleMapsApiKey}
                              placeholder={t('ADDRESS', 'Address')}
                              onChangeAddress={(e) => {
                                formMethods.setValue('address', e.address)
                                handleChangeAddress(e)
                              }}
                              onChange={(e) => {
                                handleChangeInput({ target: { name: 'address', value: e.target.value } })
                                setAddressValue(e.target.value)
                              }}
                              childRef={(ref) => {
                                googleInputRef.current = ref
                              }}
                              defaultValue={
                                  formState?.result?.result
                                    ? formState?.result?.result?.address
                                    : formState?.changes?.address ?? addressValue
                              }
                              autoComplete='new-field'
                              countryCode={configState?.configs?.country_autocomplete?.value || '*'}
                            />
                          </WrapAddressInput>
                          <GoogleGpsButton
                            className='gps-button'
                            apiKey={googleMapsApiKey}
                            onAddress={(e) => {
                              formMethods.setValue('address', e.address)
                              handleChangeAddress(e)
                            }}
                            onError={setMapErrors}
                            IconButton={GeoAlt}
                            IconLoadingButton={CgSearchLoading}
                          />
                        </AddressWrap>
                      )}
                      {(addressState?.address?.location || formState?.changes?.location) && (
                        <WrapperMap notUseCustomerInfo={notUseCustomerInfo} addFormRestrictions={addFormRestrictions}>
                          {!showMap && (
                            <section>
                              <GeoAlt style={{ fontSize: 25, marginRight: 5 }} />
                              {(addressState?.address?.address || formState?.changes?.address) && (
                                <span>{addressState?.address?.address || formState?.changes?.address}{', '}</span>
                              )}
                              {(addressState?.address?.country || formState?.changes?.country) && (
                                <span>{addressState?.address?.country || formState?.changes?.country}{', '}</span>
                              )}
                              {(addressState?.address?.address_notes || formState?.changes?.address_notes) && (
                                <span>{addressState?.address?.address_notes || formState?.changes?.address_notes}{', '}</span>
                              )}
                              {(addressState?.address?.internal_number || formState?.changes?.internal_number) && (
                                <span>{addressState?.address?.internal_number || formState?.changes?.internal_number}{', '}</span>
                              )}
                              {(addressState?.address?.zipcode || formState?.changes?.zipcode) && (
                                <span>{addressState?.address?.zipcode || formState?.changes?.zipcode}{', '}</span>
                              )}
                              <br />
                              <a
                                style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
                                onClick={() => setShowMap(!showMap)}
                              >
                                {t('SHOW_MAP', 'Show Map')}
                              </a>
                              {showSpreadForm && (
                                <a
                                  style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', marginLeft: 20 }}
                                  onClick={() => setEditSpreadAddress(!editSpreadAddress)}
                                >
                                  {t('EDIT_ADDRESS', 'Edit Address')}
                                </a>
                              )}
                            </section>
                          )}

                          {locationChange && showMap && (
                            <GoogleMapsMap
                              useMapWithBusinessZones
                              deactiveAlerts
                              avoidFitBounds
                              apiKey={googleMapsApiKey}
                              location={locationChange}
                              locations={businessesList?.businesses}
                              mapControls={googleMapsControls}
                              handleChangeAddressMap={handleChangeAddress}
                              setErrors={setMapErrors}
                              maxLimitLocation={parseInt(maxLimitLocation, 10)}
                              businessZones={businessZones}
                              fallbackIcon={theme.images?.dummies?.businessLogo}
                            />
                          )}
                          {showMap && !editSpreadAddress && (
                            <>
                              {showSpreadForm && (
                                <StreetViewText style={{ top: '0' }} onClick={() => setEditSpreadAddress(!editSpreadAddress)}>
                                  {t('EDIT_ADDRESS', 'Edit Address')}
                                </StreetViewText>
                              )}
                              <StreetViewText onClick={() => openStreetView()}>
                                {t('OPEN_STREET_VIEW', 'Open Street view')}
                              </StreetViewText>
                            </>
                          )}
                        </WrapperMap>
                      )}
                    </>

                  </React.Fragment>
                ) : (
                  <React.Fragment key={field.name}>
                    {field.name !== 'address_notes' ? (
                      <Input
                        className={field.name}
                        placeholder={t(field.name.toUpperCase(), field.code)}
                        value={formState.changes?.[field.name] ?? addressState.address?.[field.name] ?? ''}
                        onChange={(e) => {
                          formMethods.setValue(field.name, e.target.value)
                          handleChangeInput({ target: { name: field.name, value: e.target.value } })
                        }}
                        autoComplete='new-field'
                        maxLength={30}
                      />
                    ) : (
                      <TextArea
                        rows={4}
                        placeholder={t('ADDRESS_NOTES', 'Address Notes')}
                        value={formState.changes?.address_notes ?? addressState.address.address_notes ?? ''}
                        onChange={(e) => {
                          formMethods.setValue('address_notes', e.target.value)
                          handleChangeInput({ target: { name: 'address_notes', value: e.target.value } })
                        }}
                        autoComplete='new-field'
                        maxLength={250}
                      />
                    )}
                  </React.Fragment>
                )
              ))}

              {!formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>}

              <AddressTagSection>
                <Button className={addressTag === 'home' ? 'active' : ''} bgtransparent type='button' onClick={() => handleAddressTag('home')}>
                  <span><House /></span>
                </Button>
                <Button className={addressTag === 'office' ? 'active' : ''} bgtransparent type='button' onClick={() => handleAddressTag('office')}>
                  <span><Building /></span>
                </Button>
                <Button className={addressTag === 'favorite' ? 'active' : ''} bgtransparent type='button' onClick={() => handleAddressTag('favorite')}>
                  <span><Heart /></span>
                </Button>
                <Button className={addressTag === 'other' ? 'active' : ''} bgtransparent type='button' onClick={() => handleAddressTag('other')}>
                  <span><PlusLg /></span>
                </Button>
              </AddressTagSection>
              <FormActions>
                {
                  !addFormRestrictions && Object.keys(formState?.changes).length === 0 && (
                    <Button
                      outline
                      type='button'
                      disabled={formState.loading}
                      onClick={() => onCancel()}
                      hoverColor='#CCC'
                    >
                      {t('CANCEL', 'Cancel')}
                    </Button>
                  )
                }

                {!(
                  !selectedFromAutocomplete &&
                  address?.address &&
                  (!address?.location?.lat || !address?.location?.lng)) &&
                  Object.keys(formState?.changes).length > 0 &&
                (
                  <Button
                    id='submit-btn'
                    type='submit'
                    disabled={formState.loading}
                    color='primary'
                  >
                    {!formState.loading ? (
                      <>
                        {
                          isEditing || (!auth && orderState.options?.address?.address)
                            ? t('UPDATE', 'Update')
                            : t('ADD_ADDRESS', 'Add address')
                        }
                      </>
                    ) : (
                      t('LOADING', 'Loading')
                    )}
                  </Button>
                )}
              </FormActions>
              {isAllowUnaddressOrderType && (
                <WithoutAddressContainer>
                  <WithoutAddressText onClick={() => events.emit('go_to_page', { page: 'search' })}>{t('CONTINUE_WITHOUT_ADDRESS', 'Continue without address')}</WithoutAddressText>
                </WithoutAddressContainer>
              )}
            </FormControl>
          )}
        </>
      )}

      <Alert
        title={t('ADDRESS', 'Address')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </div>
  )
}

export const AddressForm = (props) => {
  const googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }
  const addressFormProps = {
    ...props,
    UIComponent: AddressFormUI,
    googleMapsControls,
    isSelectedAfterAdd: true
  }

  return <AddressFormController {...addressFormProps} />
}
