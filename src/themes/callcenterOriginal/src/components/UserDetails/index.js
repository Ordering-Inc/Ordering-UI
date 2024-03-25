import React, { useEffect } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import Skeleton from 'react-loading-skeleton'
import {
  Container,
  Header,
  SideForm,
  UserData,
  UserName,
  ModalIcon,
  TitleContainer,
  CountryFlag,
  PhoneContainer
} from './styles'
import MdClose from '@meronex/icons/md/MdClose'
import PhoneInput from 'react-phone-number-input'
import { parsePhoneNumber } from 'libphonenumber-js'
import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'
import { Modal } from '../Modal'

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
    isModal,
    setIsOpenUserData,
    isAddressFormOpen,
    onClose,
    userConfirmPhone,
    setUserConfirmPhone
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const userData = userState.result?.result || props.userData || formState.result?.result || user

  const validationFieldsLength = Object.values(validationFields?.fields?.checkout)?.map(field => field.enabled)
  const countryPhoneCode = userData?.country_phone_code ?? userData?.country_code
  const inputsConfirmAddress = [{
    id: 1,
    name: 'Name',
    type: 'text',
    code: 'name'
  }, {
    id: 2,
    name: 'Lastname',
    type: 'text',
    code: 'lastname'
  }]
  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  useEffect(() => {
    setIsOpenUserData && setIsOpenUserData(isEdit)
  }, [isEdit])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(validationFields.loading || formState.loading || userState.loading) && (
        <UserData isModal={isModal}>
          {isModal ? [...Array(4)].map((_, i) => (
            <Skeleton key={i} width={150 + (i * 10)} height={15} />
          ))
            : validationFieldsLength?.map((field, i) => (
              <React.Fragment key={field?.id}>
                <Skeleton width={250} height={50} />
                <Skeleton width={180} height={25} />
                <Skeleton width={210} height={50} />
              </React.Fragment>
            ))}
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || userState.loading) && (
        <Container isEdit={isEdit}>
          {isModal && (
            <TitleContainer isAddressFormOpen={isAddressFormOpen && !isEdit}>
              <ModalIcon>
                <MdClose onClick={() => onClose()} />
              </ModalIcon>
              <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            </TitleContainer>
          )}
          <Header className='user-form'>
            {!isModal && (
              <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            )}
            {cartStatus !== 2 && (
              !isEdit ? (
                <span onClick={() => toggleIsEdit()}>{t('CHANGE', 'Change')}</span>
              ) : (
                <FcCancel className='cancel' onClick={() => toggleEditState()} />
              )
            )}
          </Header>

          {!isEdit ? (
            <UserData>
              {userData?.address && (
                <p>{userData?.address}</p>
              )}
              {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
                <UserName>
                  {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
                </UserName>
              )}
              {userData?.email && (
                <p>{userData?.email}</p>
              )}
              {(userData?.cellphone || user?.cellphone) && (
                <PhoneContainer>
                  <CountryFlag>
                    {
                      countryPhoneCode && userData?.cellphone && (
                        <PhoneInput onChange={() => { }} defaultCountry={parsePhoneNumber(`+${(countryPhoneCode?.replace('+', ''))} ${userData?.cellphone?.replace(`+${countryPhoneCode}`, '')}`)?.country} />
                      )
                    }
                  </CountryFlag>
                  <p>
                    {userData?.cellphone}
                  </p>
                </PhoneContainer>
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
      <Modal
        title={t('CONFIRM_CELLPHONE_CLIENT', 'Confirm client\'s cellphone')}
        open={userConfirmPhone?.open}
        onClose={() => setUserConfirmPhone({ open: false, result: null })}
      >
        <UserFormDetailsUI
          {...props}
          confirmDataLayout
          isEdit
          dontToggleEditMode
          inputsconfirmData={inputsConfirmAddress}
          userData={userData}
          isCustomerMode={isCustomerMode}
        />
      </Modal>
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
