import React, { useEffect, useState } from 'react'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'
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
    cleanFormState,
    cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    isCustomerMode,
    userState,
    isHideAddress
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [placeId, setPlaceId] = useState()
  const userData = userState.result?.result || props.userData || formState.result?.result || user

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  useEffect(() => {
    const placeId = window.localStorage.getItem('place_id')
    setPlaceId(placeId)
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(validationFields.loading || formState.loading || userState.loading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || userState.loading) && (
        <Container>
          <Header className='user-form'>
            <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            {cartStatus !== 2 && isEdit && (
              <AiOutlineClose className='cancel' onClick={() => toggleEditState()} />
            )}
          </Header>

          {!isEdit ? (
            <UserData>
              {userData?.address && !isHideAddress && (
                <p>{userData?.address}</p>
              )}
              {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
                <p>
                  {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
                </p>
              )}
              {userData?.email && (
                <p>{userData?.email}</p>
              )}
              {(userData?.cellphone || user?.cellphone) && (
                <p>
                  {(userData?.country_phone_code) && `+${(userData?.country_phone_code)} `}{(userData?.cellphone)}
                </p>
              )}
              {(userData?.phone || user?.phone) && (
                <p>{(userData?.cellphone)}</p>
              )}
              {(placeId && (
                <p>{t('PLACE_ID', 'Place ID:')} {placeId}</p>
              ))}
              {cartStatus !== 2 && !isEdit && (
                <a onClick={() => toggleIsEdit()}>{t('CHANGE', 'Change')}</a>
              )}
            </UserData>
          ) : (
            <SideForm>
              <UserFormDetailsUI
                {...props}
                userData={userData}
                isCustomerMode={isCustomerMode}
              />
            </SideForm>
          )}
        </Container>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
