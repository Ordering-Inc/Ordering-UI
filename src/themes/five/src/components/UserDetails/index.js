import React, { useEffect, useState } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import Skeleton from 'react-loading-skeleton'
import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'
import { UserFormDetailsUI } from '../UserFormDetails'
import { VerifyCodeForm } from '../VerifyCodeForm'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'

import { Container, Header, SideForm, UserData } from './styles'

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
    checkPhoneCodeState,
    handleSendVerifyCode,
    handleCheckPhoneCode,
    verifyPhoneState,
    isVerifiedPhone
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const userData = userState.result?.result || props.userData || formState.result?.result || user

  const handleSendOtp = () => {
    if (willVerifyOtpState && formState?.changes?.cellphone && formState?.changes?.country_phone_code) {
      const { cellphone, country_phone_code: countryPhoneCode } = formState?.changes

      resetOtpLeftTime()

      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      })
    }
  }

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')]
      })
    } else { resetOtpLeftTime() }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else { resetOtpLeftTime() }
  }, [verifyPhoneState])

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  useEffect(() => {
    handleSendOtp()
  }, [willVerifyOtpState])

  useEffect(() => {
    if (isVerifiedPhone) setWillVerifyOtpState(false)
  }, [isVerifiedPhone])

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
            </UserData>
          ) : (
            <SideForm>
              <UserFormDetailsUI
                {...props}
                userData={userData}
                isCustomerMode={isCustomerMode}
                setWillVerifyOtpState={setWillVerifyOtpState}
              />
            </SideForm>
          )}
        </Container>
      )}
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Modal
        title={t('ENTER_VERIFICATION_CODE', 'Enter verification code')}
        open={willVerifyOtpState}
        width='700px'
        height='420px'
        onClose={() => setWillVerifyOtpState(false)}
      >
        <VerifyCodeForm
          otpLeftTime={otpLeftTime}
          credentials={formState?.changes}
          handleSendOtp={handleSendOtp}
          handleCheckPhoneCode={handleCheckPhoneCode}
          email={(userData?.email || user?.email)}
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
