import React, { useEffect, useState } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import Skeleton from 'react-loading-skeleton'
import { VerifyCodeForm } from '../../../VerifyCodeForm'
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
import { useCountdownTimer } from '../../../../../../../hooks/useCountdownTimer'
import { parsePhoneNumber } from 'libphonenumber-js'
import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'
import { Alert } from '../../../Confirm'
import { Modal } from '../../../Modal'
import { UserFormDetailsUI } from '../../../UserFormDetails/layouts/pfchangs'

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
    handleSendVerifyCode,
    verifyPhoneState,
    requiredFields,
    setFormState,
    setIsSuccess,
    isCheckout
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userData = userState.result?.result || props.userData || formState.result?.result || user

  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, willVerifyOtpState)

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  useEffect(() => {
    setIsOpenUserData && setIsOpenUserData(isEdit)
  }, [isEdit])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else { resetOtpLeftTime() }
  }, [verifyPhoneState?.result?.result])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSendPhoneCode = (values) => {
    setWillVerifyOtpState(false)
    setFormState({
      ...formState,
      changes: {
        ...formState?.changes,
        verification_code: values?.code
      }
    })
  }

  useEffect(() => {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      })
    }
  }, [otpLeftTime])

  useEffect(() => {
    handleSendOtp()
  }, [willVerifyOtpState])

  useEffect(() => {
    if (!isEdit && requiredFields) {
      setIsSuccess && setIsSuccess(true)
      onClose && onClose()
    }
  }, [isEdit, requiredFields])

  return (
    <>
      {(validationFields.loading || formState.loading || userState.loading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || userState.loading) && (
        <Container>
          {isModal && (
            <TitleContainer isAddressFormOpen={isAddressFormOpen && !isEdit}>
              {!requiredFields && (
                <ModalIcon>
                  <MdClose onClick={() => onClose()} />
                </ModalIcon>
              )}
              <h1>{t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            </TitleContainer>
          )}
          {!requiredFields && !isCheckout && (
            <Header className='user-form'>
              {!isModal && (
                <h1>{t('YOUR_INFORMATION', 'Your Information')}</h1>
              )}
              {/* {cartStatus !== 2 && (
                !isEdit ? (
                  <span onClick={() => toggleIsEdit()}>{t('CHANGE', 'Change')}</span>
                ) : (
                  <FcCancel className='cancel' onClick={() => toggleEditState()} />
                )
              )} */}
            </Header>
          )}

          {!isEdit ? (
            <UserData isCheckout={isCheckout}>
              <>
                {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
                  <UserName>
                    {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
                  </UserName>
                )}
                <span onClick={() => toggleEditState()}>{t('CHANGE', 'Change')}</span>
              </>
              {userData?.email && (
                <p>{userData?.email}</p>
              )}
              {(userData?.cellphone || user?.cellphone) && (
                <PhoneContainer>
                  <CountryFlag>
                    {
                      userData?.country_phone_code && (
                        <PhoneInput onChange={() => { }} defaultCountry={parsePhoneNumber(`+${(userData?.country_phone_code?.replace('+', ''))} ${userData?.cellphone}`)?.country} />
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
          handleCheckPhoneCode={handleSendPhoneCode}
          email={(userData?.email || user?.email)}
          isPhone
        />
      </Modal>
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
