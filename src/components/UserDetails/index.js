import React, { useEffect } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import Skeleton from 'react-loading-skeleton'
import { Container, Header, SideForm, UserData } from './styles'

import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    userState,
    cleanFormState,
    cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    useValidationFields
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()

  useEffect(() => {
    if (isUserDetailsEdit) {
      toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  const toggleEditState = () => {
    toggleIsEdit()

    cleanFormState({ changes: {} })
  }

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
                  <FcCancel className='cancel' onClick={() => toggleEditState()} />
                )
              )}
            </Header>

            {!isEdit ? (
              <UserData>
                <p>{user.name} {user.lastname}</p>
                <p>{user.email}</p>
                {user.cellphone && (
                  <p>{user.country_phone_code && `+${user.country_phone_code} `}{user.cellphone}</p>
                )}
              </UserData>
            ) : (
              <SideForm>
                <UserFormDetailsUI
                  t={t}
                  {...props}
                />
              </SideForm>
            )}

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
