import React from 'react'
import { useForm } from 'react-hook-form'
import { FcCancel } from 'react-icons/fc'
import { TiPencil } from 'react-icons/ti'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from 'ordering-components'

import {
  Container,
  Header
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    cartStatus,
    formState,
    userState,
    validationFields,
    useValidationFields,
    handleButtonUpdateClick,
    isRequiredField,
    handleChangeInput,
    onEditUserClick
  } = props

  const { handleSubmit, register, errors } = useForm()

  const inputs = [
    { name: 'name', placeholder: 'Firstname', requiredMessage: 'Name is required', type: 'text' },
    { name: 'email', placeholder: 'Email', requiredMessage: 'Email is required', type: 'text' },
    { name: 'cellphone', placeholder: 'Cellphone', requiredMessage: 'Cellphone is required', type: 'text' }
  ]

  return (
    <>
      {((useValidationFields && validationFields.loading) || userState.loading) && (
        <Container>
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
        </Container>
      )}

      {userState.result && userState.result.error && (
        <p>{userState.result.result}</p>
      )}

      {!((useValidationFields && validationFields.loading) || userState.loading) && userState.result && userState.result.result && (
        <Container>
          <Header>
            <h1>Customer Details</h1>
            {!userState.result.error && (useValidationFields || !validationFields.loading) && cartStatus !== 2 && (
              !isEdit ? (
                <TiPencil className='edit' onClick={() => onEditUserClick()} />
              ) : (
                <FcCancel className='cancel' onClick={() => onEditUserClick()} />
              )
            )}
          </Header>
          <form onSubmit={handleSubmit(handleButtonUpdateClick)}>
            {inputs.map((_input) => (
              <div key={_input.name}>
                <Input
                  name={_input.name}
                  type={_input.type}
                  placeholder={_input.placeholder}
                  style={{ borderColor: errors[_input.name] ? '#c10000' : null, marginBottom: '10px', boxSizing: 'border-box' }}
                  onChange={handleChangeInput}
                  defaultValue={userState.result.result[_input.name]}
                  disabled={!isEdit}
                  ref={register({
                    required: isRequiredField(_input.name) ? _input.requiredMessage : null
                  })}
                />
                {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
              </div>
            ))}
            <div>
              <Button
                color='primary'
                type='submit'
                disabled={Object.keys(formState.changes).length === 0}
              >
                {formState.loading ? 'Updating...' : 'Update'}
                {!formState.loading && formState.result && formState.result.error && (<span>{formState.result.result}</span>)}
              </Button>
            </div>
          </form>
        </Container>
      )}
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return <UserDetailsController {...userDetailsProps} />
}
