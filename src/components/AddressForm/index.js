import React from 'react'
import {
  AddressForm as AddressFormController
  // useSession,
  // GoogleAutocompleteInput,
  // GoogleGpsButton
} from 'ordering-components'

import {
  FormControl,
  FormActions
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

const AddressFormUI = (props) => {
  const {
    onCancel,
    onSaveAddressForm
  } = props
  // const [{ auth }] = useSession()

  return (
    <>
      <FormControl>
        <Input w='100' placeholder='Address' />
        <Input placeholder='Internal number' />
        <Input placeholder='Zip code' />
        <Input w='100' placeholder='Address Notes' />
      </FormControl>
      <FormActions>
        <Button outline onClick={() => onCancel()}>Cancel</Button>
        <Button color='primary' onClick={() => onSaveAddressForm()}>Accept</Button>
      </FormActions>
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
