import React, { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import {
  AddressForm as AddressFormController,
  GoogleAutocompleteInput,
  GoogleGpsButton,
  useLanguage
} from 'ordering-components'
import { Alert } from '../Confirm'

import {
  FormControl,
  FormActions,
  AddressWrap,
  WrapAddressInput,
  AddressTagSection
} from './styles'

import company from '../../../template/assets/company.svg'
import heart from '../../../template/assets/heart.svg'
import home from '../../../template/assets/home.svg'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

const AddressFormUI = (props) => {
  const {
    formState,
    addressState,
    validationFields,
    isRequiredField,
    updateChanges,
    onCancel,
    onSaveAddressForm,
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
      onSaveAddressForm()
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
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <AddressWrap className='google-control'>
          <WrapAddressInput>
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
            />}
        </AddressWrap>
        <Input
          name='internal_number'
          placeholder='Internal number'
          ref={register}
          defaultValue={addressState.address.internal_number}
          onChange={hanldeChangeInput}
        />
        <Input
          name='zipcode'
          placeholder='Zip code'
          ref={register}
          defaultValue={addressState.address.zipcode}
          onChange={hanldeChangeInput}
        />
        <Input
          name='address_notes'
          type='textarea'
          w='100'
          placeholder='Address Notes'
          ref={register}
          defaultValue={addressState.address.address_notes}
          onChange={hanldeChangeInput}
        />
        {!formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>}
        <AddressTagSection>
          <Button className={addressTag === 'home' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('home')}>
            <img src={home} alt='Home' />
          </Button>
          <Button className={addressTag === 'office' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('office')}>
            <img src={company} alt='Office' />
          </Button>
          <Button className={addressTag === 'favorite' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('favorite')}>
            <img src={heart} alt='Favorite' />
          </Button>
          <Button className={addressTag === 'other' ? 'active' : ''} type='button' outline circle onClick={() => handleAddressTag('other')}>
            <span><FiPlus /></span>
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
  const addressFormProps = {
    ...props,
    UIComponent: AddressFormUI
  }

  return <AddressFormController {...addressFormProps} />
}
