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
  GoogleMapsMap
} from 'ordering-components'
import { Alert } from '../Confirm'

import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection,
  WrapperMap
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

const AddressFormUI = (props) => {
  const {
    googleMapsControls,
    formState,
    addressState,
    validationFields,
    isRequiredField,
    updateChanges,
    onCancel,
    hanldeChangeInput,
    saveAddress
  } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [state, setState] = useState({ selectedFromAutocomplete: true })
  const [addressTag, setAddressTag] = useState(addressState?.address?.tag)

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = (values) => {
    saveAddress()
    if (!formState.loading) {
    }
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
        content: formState.result?.result || [t('ERROR')]
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <>
      <FormControl onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        {addressState?.address?.location && (
          <WrapperMap>
            <GoogleMapsMap
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              location={{ ...addressState?.address?.location, zoom: googleMapsControls.defaultZoom }}
              mapControls={googleMapsControls}
            />
          </WrapperMap>
        )}
        <AddressWrap className='google-control'>
          <WrapAddressInput>
            <HiOutlineLocationMarker />
            <GoogleAutocompleteInput
              className='input-autocomplete'
              apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
              name='address'
              placeholder='Address'
              onChangeAddress={handleChangeAddress}
              onKeyDown={handleAddressKeyDown}
              defaultValue={formState.changes?.address || addressState.address?.address}
              childRef={register({
                required: isRequiredField('address') ? 'Address is required' : null
              })}
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
        <Input
          className='internal_number'
          name='internal_number'
          placeholder='Internal number'
          ref={register}
          defaultValue={formState.changes?.internal_number || addressState.address.internal_number}
          onChange={hanldeChangeInput}
        />
        <Input
          className='zipcode'
          name='zipcode'
          placeholder='Zip code'
          ref={register}
          defaultValue={formState.changes?.zipcode || addressState.address.zipcode}
          onChange={hanldeChangeInput}
        />
        <textarea
          name='address_notes'
          rows={4}
          placeholder={t('ADDRESS_NOTES', 'Address Notes')}
          ref={register}
          defaultValue={formState.changes?.address_notes || addressState.address.address_notes}
          onChange={hanldeChangeInput}
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
          <Button type='button' disabled={formState.loading} outline onClick={() => onCancel()}>Cancel</Button>
          <Button type='submit' disabled={formState.loading} color='primary'>
            {addressState.address?.id ? 'Update' : 'Add'}
          </Button>
        </FormActions>
      </FormControl>
      <Alert
        title={t('ADDRESS')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
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
    googleMapsControls
  }

  return <AddressFormController {...addressFormProps} />
}
