import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  UserFormDetails as UserProfileController,
  useLanguage,
  useSession,
  DragAndDrop,
  ExamineClick,
  useOrderingTheme
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'
import { UserFormDetailsUI as UserFormDetailsOldUI } from '../../../../../components/UserFormDetails'
import { UserFormDetailsUI as UserFormDetailsPFChangs } from '../UserFormDetails/layouts/pfchangs'
import { Modal } from '../Modal'
import { VerifyCodeForm } from '../VerifyCodeForm'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { AddressList } from '../AddressList'
import { Alert } from '../Confirm'
import { Alert as AlertPFChangs } from '../Confirm/layouts/pfchangs'
import { LoginForm as LoginFormComponent } from '../LoginForm/layouts/pfchangs'
import { PaymentOptionOpenPay } from '../PaymentOptionOpenPay'

import { ProfileOptions } from '../../../../../components/UserProfileForm/ProfileOptions'
import { bytesConverter, deUnaApiKey } from '../../../../../utils'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'
import { useTheme } from 'styled-components'
import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  SideForm,
  Camera,
  SavedPlaces,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm,
  LanguageSelectorWrapper
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    userData,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit,
    isHiddenAddress,
    handleSendVerifyCode,
    verifyPhoneState,
    setFormState,
    willVerifyOtpState,
    setWillVerifyOtpState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ user }] = useSession()
  const [orderingTheme] = useOrderingTheme()
  const [otpDataUser, setOtpDataUser] = useState(null)
  const [showMyCards, setShowMyCards] = useState(false)

  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, willVerifyOtpState)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)

  const showCustomerPicture = !orderingTheme?.theme?.profile?.components?.picture?.hidden
  const showAddressList = !orderingTheme?.theme?.profile?.components?.address_list?.hidden
  const userFormLayoutRow = orderingTheme?.theme?.profile?.components?.layout?.position === 'row'
  const pfchangs = theme?.profile?.components?.layout?.type === 'pfchangs'

  const UserFormDetailComponent = pfchangs
    ? UserFormDetailsPFChangs
    : UserFormDetailsUI

  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const toggleEditState = (val) => {
    toggleIsEdit()
    if (!val) {
      cleanFormState({ changes: {} })
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const closeWillVerifyModal = () => {
    setWillVerifyOtpState(false)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ATENTION', 'Atención')]
      })
    } else { resetOtpLeftTime() }
  }, [verifyPhoneState?.result?.result])

  useEffect(() => {
    toggleIsEdit()
  }, [])

  // useEffect(() => {
  //   handleSendOtp()
  // }, [willVerifyOtpState])

  useEffect(() => {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      })
    }
  }, [otpLeftTime])

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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {!isHiddenAddress && (
        <ProfileOptions value='account' pfchangs={pfchangs} setShowMyCards={setShowMyCards} />
      )}
      {showMyCards ? (
        <Container>
          <UserProfileContainer fromProfile>
            <PaymentOptionOpenPay
              fromProfile
              deUnaApiKey={deUnaApiKey}
            />
          </UserProfileContainer>
        </Container>
      ) : (
        <Container>
          <UserProfileContainer mbottom={isHiddenAddress && 25}>
            {showCustomerPicture && (
              <UserImage className='user-image'>
                <Image onClick={() => handleClickImage()} isImage={user?.photo || (formState?.changes?.photo && !formState.result.error)}>
                  <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                    <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                      {formState.changes?.photo && formState.loading
                        ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                        : ((!formState.changes?.photo || formState.result?.result === 'Network Error' || formState.result.error)
                          ? user?.photo
                            ? (<img src={user?.photo} alt='user image' width='200px' height='200px' loading='lazy' />)
                            : (
                              <UploadImageIcon>
                                <BiImage />
                                <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                              </UploadImageIcon>
                            )
                          : formState?.changes?.photo && formState.result.error &&
                          (
                            <img
                              src={formState?.changes?.photo}
                              alt='user image'
                              loading='lazy'
                            />
                          )
                        )}
                    </DragAndDrop>
                  </ExamineClick>
                </Image>
                <Camera><FiCamera /></Camera>
              </UserImage>
            )}
            <SideForm className='user-form'>
              <WrapperForm>
                {userFormLayoutRow ? (
                  <UserFormDetailsOldUI
                    {...props}
                    onCancel={toggleEditState}
                    isOriginalLayout
                    isHiddenAddress={isHiddenAddress}
                    isOldLayout
                  />
                ) : (
                  <UserFormDetailComponent
                    {...props}
                    onCancel={toggleEditState}
                    isHiddenAddress={isHiddenAddress}
                    setWillVerifyOtpState={setWillVerifyOtpState}
                  />
                )}
              </WrapperForm>
            </SideForm>
          </UserProfileContainer>
          {(userData?.addresses || user?.addresses) && !isHiddenAddress && showAddressList && (
            <SavedPlaces>
              <h1>{t('MY_ADDRESSES', 'My Saved places')}</h1>
              <AddressList isModal addressList={user?.addresses} isProfile pfchangs={pfchangs} />
            </SavedPlaces>
          )}
        </Container>
      )}

      <AlertComponent
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {/* <Modal
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
      </Modal> */}
      <Modal
        open={willVerifyOtpState}
        width='50%'
        hideCloseDefault
      >
        <LoginFormComponent
          useLoginByCellphone
          isPopup
          defaultLoginTab='otp'
          setOtpDataUser={setOtpDataUser}
          isDirectLogin
          handleSuccessLogin={closeWillVerifyModal}
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

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
