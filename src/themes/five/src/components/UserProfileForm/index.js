import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  UserFormDetails as UserProfileController,
  LogoutAction as LogoutActionController,
  useConfig,
  useEvent,
  useCustomer,
  useLanguage,
  useSession,
  DragAndDrop,
  ExamineClick,
  useOrderingTheme
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'
import { UserFormDetailsUI as UserFormDetailsOldUI } from '../../../../../components/UserFormDetails'
import { Modal } from '../Modal'
import { VerifyCodeForm } from '../VerifyCodeForm'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { AddressList } from '../AddressList'
import { Alert } from '../Confirm'

import { ProfileOptions } from './ProfileOptions'
import { bytesConverter, capitalize } from '../../../../../utils'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'
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
  ProfileOptionsList,
  ListLink,
  ListItem
} from './styles'

const LogoutActionUI = (props) => {
  const [, t] = useLanguage()
  const [, { deleteUserCustomer }] = useCustomer()

  const handleClick = () => {
    const GoogleAuth = window?.gapi?.auth2?.getAuthInstance()
    if (GoogleAuth) {
      const signedIn = GoogleAuth.isSignedIn.get()
      if (signedIn) {
        GoogleAuth.signOut().then(() => {
          GoogleAuth.disconnect()
        })
      }
    }

    deleteUserCustomer(true)
    props.handleLogoutClick()
  }
  return (
    <ListItem onClick={handleClick}>
      {t('LOGOUT', 'Logout')}
    </ListItem>
  )
}

const ListItemLogout = () => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}

const UserProfileFormUI = (props) => {
  const {
    userData,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit,
    isCustomerMode,
    isHiddenAddress,
    handleSendVerifyCode,
    verifyPhoneState,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()
  const [orderingTheme] = useOrderingTheme()
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, willVerifyOtpState)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)
  const windowSize = useWindowSize()

  const showCustomerPicture = !orderingTheme?.theme?.profile?.components?.picture?.hidden
  const showAddressList = !orderingTheme?.theme?.profile?.components?.address_list?.hidden
  const userFormLayoutRow = orderingTheme?.theme?.profile?.components?.layout?.position === 'row'

  const isPromotionsEnabled = configs?.advanced_offers_module?.value === '1' || configs?.advanced_offers_module?.value === true
  const isAddressListNewPage = orderingTheme?.theme?.profile?.components?.address_list?.components?.layout?.position === 'new_page'
  const isWalletEnabled = configs?.cash_wallet?.value &&
    configs?.wallet_enabled?.value === '1' &&
    (configs?.wallet_cash_enabled?.value === '1' || configs?.wallet_credit_point_enabled?.value === '1')

  const profileOptions = [
    { name: 'wallets', pathname: '/wallets', displayName: 'wallets', key: 'wallets', isActive: isWalletEnabled && !isCustomerMode },
    { name: 'promotions', pathname: '/promotions', displayName: 'promotions', key: 'promotions', isActive: isPromotionsEnabled },
    { name: 'messages', pathname: '/messages', displayName: 'messages', key: 'messages', isActive: !isCustomerMode },
    { name: 'help', pathname: '/help', displayName: 'help', key: 'help', isActive: true },
    { name: 'sessions', pathname: '/sessions', displayName: 'sessions', key: 'sessions', isActive: true },
    { name: 'favorite', pathname: '/favorite', displayName: 'favorites', key: 'favorites', isActive: true },
    { name: 'addresses', pathname: '/profile/addresses', displayName: 'places', key: 'places', isActive: isAddressListNewPage }
  ]

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

  const handleGoToPage = (page) => {
    events.emit('go_to_page', { page })
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
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else { resetOtpLeftTime() }
  }, [verifyPhoneState?.result?.result])

  useEffect(() => {
    toggleIsEdit()
  }, [])

  useEffect(() => {
    handleSendOtp()
  }, [willVerifyOtpState])

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
          {windowSize.width <= 576 && (
            <ProfileOptionsList>
              {profileOptions.map((option, i) => option.isActive && (
                <ListLink
                  key={i}
                  active={window.location.pathname === option.pathname}
                  onClick={() => handleGoToPage(option.name)}
                >
                  {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
                </ListLink>
              ))}
              <ListItemLogout />
            </ProfileOptionsList>
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
                <UserFormDetailsUI
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
            <AddressList isModal addressList={user?.addresses} isProfile />
          </SavedPlaces>
        )}
      </Container>
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
