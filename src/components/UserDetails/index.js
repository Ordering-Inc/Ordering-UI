import React, { useEffect } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import Skeleton from 'react-loading-skeleton'
import { Container, Header, SideForm } from './styles'

import {
  UserFormDetails as UserFormController,
  useLanguage
} from 'ordering-components'

import { UserFormDetails } from '../UserFormDetails'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    userState,
    cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    useValidationFields
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (isUserDetailsEdit) {
      toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  return (
    <>
      {((useValidationFields && validationFields.loading) || userState.loading || formState.loading) && (
        <Container>
          <Skeleton height={40} style={{ marginBottom: '10px' }} />
          <Skeleton height={40} style={{ marginBottom: '10px' }} />
          <Skeleton height={40} style={{ marginBottom: '10px' }} />
          <Skeleton height={40} style={{ marginBottom: '10px' }} />
          <Skeleton height={40} style={{ marginBottom: '10px' }} />
        </Container>
      )}

      {userState.result && userState.result.error && (
        <p>{userState.result.result}</p>
      )}

      {!((useValidationFields && validationFields.loading) || userState.loading || formState.loading) &&
        userState.result &&
        userState.result.result &&
        (
          <Container>
            <Header>
              <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
              {useValidationFields && cartStatus !== 2 && (
                !isEdit ? (
                  <TiPencil className='edit' onClick={() => toggleIsEdit()} />
                ) : (
                  <FcCancel className='cancel' onClick={() => toggleIsEdit()} />
                )
              )}
            </Header>
            <SideForm>
              <UserFormDetails
                t={t}
                {...props}
              />
            </SideForm>
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

  return <UserFormController {...userDetailsProps} />
}
