import React, { useState, useEffect } from 'react'
import FaHome from '@meronex/icons/fa/FaHome'
import FaPlus from '@meronex/icons/fa/FaPlus'
import FaRegBuilding from '@meronex/icons/fa/FaRegBuilding'
import FaRegHeart from '@meronex/icons/fa/FaRegHeart'
import ImCompass from '@meronex/icons/im/ImCompass'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  GoogleGpsButton,
  useLanguage,
  GoogleMapsMap,
  useSession
} from 'ordering-components'
import { Alert } from '../Confirm'

import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection,
  WrapperMap,
  ShowMap
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'

const maxLimitLocation = 500

const mapErrors = {
  ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
  ERROR_MAX_LIMIT_LOCATION: `Sorry, You can only set the position to ${maxLimitLocation}m`
}

const AddressFormUI = (props) => {
  const {
    addressesList,
    googleMapsControls,
    formState,
    addressState,
    validationFields,
    isRequiredField,
    updateChanges,
    onCancel,
    hanldeChangeInput,
    saveAddress,
    setIsEdit
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()
  const [{ auth }] = useSession()
  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)
  const [toggleMap, setToggleMap] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputNames = ['address', 'internal_number', 'zipcode', 'address_notes']

  const [addressValue, setAddressValue] = useState(formState.changes?.address ?? addressState.address?.address ?? '')

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
          values.push(address[prop].lat === addressToCompare[prop].lat &&
            address[prop].lng === addressToCompare[prop].lng)
        } else {
          values.push(address[prop] === addressToCompare[prop])
        }
      } else {
        values.push(!address[prop])
      }
    })
    return values.every(value => value)
  }

  const onSubmit = async () => {
    const arrayList = addressState.address?.id
      ? addressesList.filter(address => address.id !== addressState.address?.id) || []
      : addressesList || []
    const addressToCompare = addressState.address?.id
      ? { ...addressState.address, ...formState.changes }
      : formState?.changes

    const isAddressAlreadyExist = arrayList.map(address => checkAddress(address, addressToCompare)).some(value => value) ?? false

    if (!isAddressAlreadyExist) {
      saveAddress()
      return
    }

    setAlertState({
      open: true,
      content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
    })
  }

  const handleAddressTag = (tag) => {
    setAddressTag(tag)
    hanldeChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    })
  }

  const handleChangeAddress = (address) => {
    setState({
      ...state,
      selectedFromAutocomplete: true
    })
    updateChanges(address)
  }

  const handleAddressKeyDown = () => {
    state.selectedFromAutocomplete && setState({
      ...state,
      selectedFromAutocomplete: false
    })
  }

  const setMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    })
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }

    setAddressValue(formState?.changes?.address ?? '')
    inputNames.forEach(field => formMethods.setValue(field, formState?.changes[field] || ''))
  }, [formState])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (addressState.address?.id) {
      setIsEdit(true)
      setAddressValue(addressState.address?.address)
    } else {
      setIsEdit(false)
    }
  }, [addressState])

  useEffect(() => {
    inputNames.forEach(name => {
      formMethods.register(name, {
        required: isRequiredField(name)
          ? t(`VALIDATION_ERROR_${name}_REQUIRED`, `The field ${name} is required`)
          : null
      })
    })
  }, [formMethods])

  return (
    <div className='address-form'>
      <FormControl onSubmit={formMethods.handleSubmit(onSubmit)} autoComplete='off'>
        {(addressState?.address?.location || formState?.changes?.location) && toggleMap && (
          <WrapperMap>
            <GoogleMapsMap
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              location={{ ...(addressState?.address?.location || formState?.changes?.location), zoom: googleMapsControls.defaultZoom }}
              mapControls={googleMapsControls}
              handleChangeAddressMap={handleChangeAddress}
              setErrors={setMapErrors}
              maxLimitLocation={maxLimitLocation}
            />
          </WrapperMap>
        )}
        <AddressWrap className='google-control'>
          <WrapAddressInput>
            <HiOutlineLocationMarker />
            <GoogleAutocompleteInput
              className='input-autocomplete'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              placeholder={t('ADDRESS', 'Address')}
              onChangeAddress={(e) => {
                formMethods.setValue('address', e.address)
                handleChangeAddress(e)
              }}
              onKeyDown={handleAddressKeyDown}
              onChange={(e) => {
                hanldeChangeInput({ target: { name: 'address', value: e.target.value } })
                setAddressValue(e.target.value)
              }}
              value={addressValue}
              autoComplete='new-field'
            />
          </WrapAddressInput>
          {(!validationFields.loading || !addressState.loading) &&
            <GoogleGpsButton
              className='gps-button'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              onAddress={(e) => {
                formMethods.setValue('address', e.address)
                handleChangeAddress(e)
              }}
              IconButton={ImCompass}
            />}
        </AddressWrap>
        {(addressState?.address?.location || formState?.changes?.location) && !toggleMap && (
          <ShowMap onClick={() => setToggleMap(!toggleMap)}>{t('VIEW_MAP', 'View map to modify the exact location')}</ShowMap>
        )}
        <Input
          className='internal_number'
          placeholder={t('INTERNAL_NUMBER', 'Internal number')}
          value={formState.changes?.internal_number ?? addressState.address.internal_number ?? ''}
          onChange={(e) => {
            formMethods.setValue('internal_number', e.target.value)
            hanldeChangeInput({ target: { name: 'internal_number', value: e.target.value } })
          }}
          autoComplete='new-field'
        />
        <Input
          className='zipcode'
          placeholder={t('ZIP_CODE', 'Zip code')}
          value={formState.changes?.zipcode ?? addressState.address.zipcode ?? ''}
          onChange={(e) => {
            formMethods.setValue('zipcode', e.target.value)
            hanldeChangeInput({ target: { name: 'zipcode', value: e.target.value } })
          }}
          autoComplete='new-field'
        />
        <TextArea
          rows={4}
          placeholder={t('ADDRESS_NOTES', 'Address Notes')}
          value={formState.changes?.address_notes ?? addressState.address.address_notes ?? ''}
          onChange={(e) => {
            formMethods.setValue('address_notes', e.target.value)
            hanldeChangeInput({ target: { name: 'address_notes', value: e.target.value } })
          }}
          autoComplete='new-field'
        />
        {!formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>}
        <AddressTagSection>
          <Button className={addressTag === 'home' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('home')}>
            <span><FaHome /></span>
          </Button>
          <Button className={addressTag === 'office' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('office')}>
            <span><FaRegBuilding /></span>
          </Button>
          <Button className={addressTag === 'favorite' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('favorite')}>
            <span><FaRegHeart /></span>
          </Button>
          <Button className={addressTag === 'other' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('other')}>
            <span><FaPlus /></span>
          </Button>
        </AddressTagSection>
        <FormActions>
          <Button
            outline
            type='button'
            disabled={formState.loading}
            onClick={() => onCancel()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          {Object.keys(formState?.changes).length > 0 && (
            <Button
              id='submit-btn'
              type='submit'
              disabled={formState.loading}
              color='primary'
            >
              {!formState.loading ? (
                addressState.address?.id || !auth ? t('UPDATE', 'Update') : t('ADD', 'Add')
              ) : (
                t('LOADING', 'Loading')
              )}
            </Button>
          )}
        </FormActions>
      </FormControl>
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
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }
  const addressFormProps = {
    ...props,
    UIComponent: AddressFormUI,
    googleMapsControls,
    isSelectedAfterAdd: true
  }

  return <AddressFormController {...addressFormProps} />
}
