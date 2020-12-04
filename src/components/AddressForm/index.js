import React, { useState, useEffect } from 'react'
import FaHome from '@meronex/icons/fa/FaHome'
import FaPlus from '@meronex/icons/fa/FaPlus'
import FaRegBuilding from '@meronex/icons/fa/FaRegBuilding'
import FaRegHeart from '@meronex/icons/fa/FaRegHeart'
import ImCompass from '@meronex/icons/im/ImCompass'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  GoogleGpsButton,
  useLanguage,
  GoogleMapsMap
} from 'ordering-components'
import { Alert } from '../Confirm'
// import { CustomInput } from '../UI/CustomInput'
// import { CustomTextArea } from '../UI/CustomTextArea'

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
    handleChangePosition
  } = props

  const [, t] = useLanguage()
  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)
  const [toggleMap, setToggleMap] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = (e) => {
    e.preventDefault()
    if (isRequiredField('address')) {
      const inputTest = document.getElementsByClassName('input-autocomplete')[0]
      if (!inputTest.value) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'Address is required')]
        })
        return
      }
    }
    const isAddressAlreadyExist = (addressesList || []).some(address => (
      address.location.lat === formState.changes.location.lat && address.location.lng === formState.changes.location.lng
    ))
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

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState])

  /* useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors]) */

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    const inputs = document.getElementsByClassName('address-input')
    Array.prototype.forEach.call(inputs, input => {
      input.setAttribute('autoComplete', 'new-field')
    })
  })

  return (
    <div className='address-form'>
      <FormControl onSubmit={onSubmit} autoComplete='off'>
        {(addressState?.address?.location || formState?.changes?.location) && toggleMap && (
          <WrapperMap>
            <GoogleMapsMap
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              location={{ ...(addressState?.address?.location || formState?.changes?.location), zoom: googleMapsControls.defaultZoom }}
              mapControls={googleMapsControls}
              handleChangePosition={handleChangePosition}
            />
          </WrapperMap>
        )}
        <AddressWrap className='google-control'>
          <WrapAddressInput>
            <HiOutlineLocationMarker />
            <GoogleAutocompleteInput
              className='input-autocomplete address-input'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              placeholder={t('ADDRESS', 'Address')}
              onChangeAddress={handleChangeAddress}
              onKeyDown={handleAddressKeyDown}
              defaultValue={formState.changes?.address || addressState.address?.address}
            />
          </WrapAddressInput>
          {(!validationFields.loading || !addressState.loading) &&
            <GoogleGpsButton
              className='gps-button'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              onAddress={handleChangeAddress}
              IconButton={ImCompass}
            />}
        </AddressWrap>
        {(addressState?.address?.location || formState?.changes?.location) && (
          <ShowMap onClick={() => setToggleMap(!toggleMap)}>{t('VIEW_MAP', 'View map to modify the exact location')}</ShowMap>
        )}
        <Input
          className='internal_number address-input'
          placeholder={t('INTERNAL_NUMBER', 'Internal number')}
          defaultValue={formState.changes?.internal_number || addressState.address.internal_number}
          onChange={(e) => hanldeChangeInput({ target: { name: 'test2', value: e.target.value } })}
          autoComplete='new-field'
        />
        <Input
          className='zipcode address-input'
          placeholder={t('ZIP_CODE', 'Zip code')}
          defaultValue={formState.changes?.zipcode || addressState.address.zipcode}
          onChange={(e) => hanldeChangeInput({ target: { name: 'test3', value: e.target.value } })}
          autoComplete='new-field'
        />
        <TextArea
          className='address-input'
          rows={4}
          placeholder={t('ADDRESS_NOTES', 'Address Notes')}
          defaultValue={formState.changes?.address_notes || addressState.address.address_notes}
          onChange={(e) => hanldeChangeInput({ target: { name: 'test4', value: e.target.value } })}
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
          <Button type='button' disabled={formState.loading} outline onClick={() => onCancel()}>{t('CANCEL', 'Cancel')}</Button>
          <Button type='submit' disabled={formState.loading} color='primary'>
            {addressState.address?.id ? t('UPDATE', 'Update') : t('ADD', 'Add')}
          </Button>
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
