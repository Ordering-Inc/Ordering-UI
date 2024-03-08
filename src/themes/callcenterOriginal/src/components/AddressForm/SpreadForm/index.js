import React, { useEffect, useState } from 'react'
import { FormActions, FormControl, FormattedAddress } from './styles'
import { useLanguage, useApi, useSession, useConfig, useToast, ToastType } from 'ordering-components'
import { useTheme } from 'styled-components'

import { Input } from '../../../styles/Inputs'
import { Button } from '../../../styles/Buttons'
import { capitalize } from '../../../../../../utils'

const inputNames = [
  { id: 1, name: 'route', required: true },
  { id: 2, name: 'street_number', required: true },
  { id: 3, name: 'neighborhood', required: true },
  { id: 4, name: 'zipcode', required: false },
  { id: 5, name: 'city', required: true },
  { id: 6, name: 'state', required: true },
  { id: 7, name: 'country_code', enabled: false, required: false }
]

export const SpreadForm = (props) => {
  const { address, onChangeAddress, onCancel } = props

  const theme = useTheme()
  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [{ token: sessionToken }] = useSession()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ changes: {}, loading: false, error: null, added: false })

  const googleMapsApiKey = configs?.google_maps_api_key?.value

  const handleAddAddress = () => {
    onChangeAddress(formState.changes)
    setFormState({ ...formState, added: true })
  }

  const handleChangeInput = ({ name, value }) => {
    const changes = formState.changes
    if (changes?.location) {
      delete changes.location
    }

    setFormState({
      ...formState,
      changes: {
        ...changes,
        [name]: value
      }
    })
  }

  const changeAttrName = (attr) => {
    const list = {
      sublocality_level_1: 'neighborhood',
      administrative_area_level_1: 'state',
      locality: 'city',
      postal_code: 'zipcode'
    }

    return list[attr] ?? attr
  }

  const handlePostAddress = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const _body = {
        google_api_key: googleMapsApiKey,
        body: {
          address: {
            regionCode: 'MX',
            addressLines: inputNames
              .filter(i => i?.enabled !== false)
              .sort((a, b) => a.id - b.id)
              .map(input => formState.changes[input.name])
              .filter(_i => _i)
          }
        }
      }
      formState?.previousResponseId && (_body.previousResponseId = formState?.previousResponseId)

      const req = await fetch(`${ordering.root}/helpers/addresses/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionToken}`
        },
        body: JSON.stringify(_body)
      })

      const { error, result } = await req.json()

      const _formState = formState
      if (!error && !result?.error) {
        _formState.previousResponseId = result?.responseId
        _formState.formattedAddress = result?.result?.address?.formattedAddress

        const addressComponents =
          result?.result?.address?.addressComponents?.map(field => ({
            name: changeAttrName(field.componentType),
            value: field.componentName?.text
          }))

        inputNames.map(_i => _i.name).forEach(field => {
          _formState.changes[field] = addressComponents.find(c => c.name === field)?.value ?? formState.changes?.[field]
        })

        _formState.changes.locality = _formState.changes.city
        _formState.changes.country = 'México'
        _formState.changes.country_code = 'MX'
        _formState.changes.address = result?.result?.address?.formattedAddress

        result?.result?.geocode?.location && (
          _formState.changes.location = {
            lat: result?.result?.geocode?.location?.latitude,
            lng: result?.result?.geocode?.location?.longitude
          }
        )
      }

      setFormState({
        ...formState,
        ..._formState,
        loading: false,
        error: error ? result[0] : null
      })
    } catch (error) {
      setFormState({ ...formState, loading: false })
    }
  }

  useEffect(() => {
    if (address) {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          ...address
        }
      })
    }
  }, [address])

  useEffect(() => {
    if (formState.error) {
      showToast(ToastType.Error, formState.error, 3000)
      setFormState({ ...formState, error: null })
    }
  }, [JSON.stringify(formState.error)])

  return (
    <FormControl
      autoComplete='off'
      onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
    >
      {(!!formState?.formattedAddress || address?.address) && <FormattedAddress>{formState?.formattedAddress ?? address?.address}</FormattedAddress>}
      {inputNames.map(field => (
        <React.Fragment key={field.name}>
          <Input
            className={field.name}
            placeholder={t(`ADDRESS_${field.name.toUpperCase()}`, capitalize(field.name.replace('_', ' ')))}
            value={formState.changes?.[field.name] ?? address?.[field.name] ?? (field.name === 'country_code' ? 'MX' : '')}
            disabled={field?.enabled === false}
            style={{
              ...(field?.enabled === false ? { background: theme.colors.disabled } : {})
            }}
            onChange={(e) => {
              handleChangeInput({ name: field.name, value: e.target.value })
            }}
            autoComplete='new-field'
            maxLength={70}
          />
        </React.Fragment>
      ))}
      {!formState.added && (
        <FormActions>
          {/* <Button
            outline
            type='button'
            disabled={formState.loading}
            onClick={() => onCancel()}
            hoverColor='#CCC'
          >
            {t('CANCEL', 'Cancel')}
          </Button> */}
          <Button
            id='submit-btn'
            type='button'
            disabled={formState.loading || !inputNames
              .filter(i => i.required)
              .every(input => formState.changes?.[input.name])}
            color='primary'
            onClick={formState.changes?.location ? handleAddAddress : handlePostAddress}
          >
            {!formState.loading ? (
              address?.address
                ? formState.changes?.location
                  ? t('UPDATE', 'Update')
                  : t('VERIFY_ADDRESS', 'Verify address')
                : formState.changes?.location
                  ? t('CONFIRM_ADDRESS', 'Confirm address')
                  : t('VERIFY_ADDRESS', 'Verify address')
            ) : (
              t('LOADING', 'Loading')
            )}
          </Button>
        </FormActions>
      )}
    </FormControl>
  )
}
