import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'
import GrLogout from '@meronex/icons/gr/GrLogout'
import {
  UserFormDetails as UserProfileController,
  LogoutAction as LogoutActionController,
  useLanguage,
  useSession,
  DragAndDrop,
  ExamineClick,
  useCustomer
} from 'ordering-components'
import IosGlobe from '@meronex/icons/ios/IosGlobe'
import { UserFormDetailsUI } from '../UserFormDetails'
import { AddressList } from '../AddressList'
import { Alert } from '../../../../../components/Confirm'
import { bytesConverter } from '../../../../../utils'
import { LanguageSelector } from '../../../../../components/LanguageSelector'
import { Modal } from '../Modal'
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
  ProfileContainer,
  Title,
  UserInfomation,
  UserInfo,
  ImageWrapper,
  RedireactLink,
  UserName,
  Divider,
  ShortLinks,
  LinkItem,
  ProfileImage,
  LanguageSelectorWrapper,
  FooterMenuWrapper,
  LogoutWrapper
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    userData,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit,
    isHiddenAddress
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)
  const isLanguageFullName = true
  const history = useHistory()

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

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  useEffect(() => {
    toggleIsEdit()
  }, [])

  const [modalSelected, setModalSelected] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  const handleOpenAccount = (val) => {
    openModal('account')
    if (val === 'account') {
      cleanFormState({ changes: {} })
    }
  }

  const handleHelpRedirect = () => {
    history.push('/help')
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
        <ProfileContainer>
          <Title>
            {t('PROFILE', 'Profile')}
          </Title>
          <UserInfomation>
            <ProfileImage>
              <ImageWrapper>
                {user?.photo ? (
                  <img src={user?.photo} alt='user image' width='200px' height='200px' loading='lazy' />
                ) : (
                  <FaUserAlt />
                )}
              </ImageWrapper>
            </ProfileImage>
            <UserInfo>
              <UserName>{user?.name}</UserName>
              <RedireactLink onClick={() => handleOpenAccount('account')}>View account</RedireactLink>
            </UserInfo>
          </UserInfomation>
          <Divider />
          <ShortLinks>
            <LinkItem onClick={() => openModal('address')}><span><GeoAlt /></span>{t('SAVED_ADDRESS', 'My saved places')}</LinkItem>
            <LinkItem onClick={() => handleHelpRedirect()}><span><LifePre /></span>{t('SAVED_ADDRESS', 'Help')}</LinkItem>
          </ShortLinks>
          <FooterMenuWrapper>
            <LanguageSelectorWrapper>
              <IosGlobe />
              <LanguageSelector isLanguageFullName={isLanguageFullName} />
            </LanguageSelectorWrapper>
            <PopoverListItemLogout />
          </FooterMenuWrapper>

        </ProfileContainer>

        {modalIsOpen && (
          <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
          >
            {modalSelected === 'account' && (
              <UserProfileContainer mbottom={isHiddenAddress && 25}>
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
                            : formState?.changes?.photo && formState.result.error && (<img src={formState?.changes?.photo} alt='user image' loading='lazy' />)
                          )}
                      </DragAndDrop>
                    </ExamineClick>
                  </Image>
                  <Camera><FiCamera /></Camera>
                </UserImage>
                <SideForm className='user-form'>
                  <WrapperForm>
                    <UserFormDetailsUI
                      {...props}
                      onCancel={toggleEditState}
                      isHiddenAddress={isHiddenAddress}
                    />
                  </WrapperForm>
                </SideForm>
              </UserProfileContainer>
            )}
            {modalSelected === 'address' && (
              <>
                {(userData?.addresses || user?.addresses) && !isHiddenAddress && (
                  <SavedPlaces>
                    <h1>{t('MY_SAVED_PLACES', 'My Saved places')}</h1>
                    <AddressList isModal addressList={user?.addresses} />
                  </SavedPlaces>
                )}
              </>
            )}
          </Modal>
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const UserProfile = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}

export const Bell = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14H6C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16Z' fill='black' />
        <path fillRule='evenodd' clipRule='evenodd' d='M8 1.9179L7.203 2.0789C6.29896 2.2631 5.48633 2.754 4.90265 3.46852C4.31897 4.18304 4.0001 5.07728 4 5.9999C4 6.6279 3.866 8.1969 3.541 9.7419C3.381 10.5089 3.165 11.3079 2.878 11.9999H13.122C12.835 11.3079 12.62 10.5099 12.459 9.7419C12.134 8.1969 12 6.6279 12 5.9999C11.9997 5.07746 11.6807 4.18345 11.097 3.46913C10.5134 2.75482 9.70087 2.26406 8.797 2.0799L8 1.9169V1.9179ZM14.22 11.9999C14.443 12.4469 14.701 12.8009 15 12.9999H1C1.299 12.8009 1.557 12.4469 1.78 11.9999C2.68 10.1999 3 6.8799 3 5.9999C3 3.5799 4.72 1.5599 7.005 1.0989C6.99104 0.959852 7.00638 0.819425 7.05003 0.686672C7.09368 0.553919 7.16467 0.431788 7.25842 0.328156C7.35217 0.224525 7.4666 0.141693 7.59433 0.0850029C7.72206 0.0283129 7.86026 -0.000976562 8 -0.000976562C8.13974 -0.000976563 8.27794 0.0283129 8.40567 0.0850029C8.5334 0.141693 8.64783 0.224525 8.74158 0.328156C8.83533 0.431788 8.90632 0.553919 8.94997 0.686672C8.99362 0.819425 9.00896 0.959852 8.995 1.0989C10.1253 1.3288 11.1414 1.94226 11.8712 2.8354C12.6011 3.72854 12.9999 4.84647 13 5.9999C13 6.8799 13.32 10.1999 14.22 11.9999Z' fill='black' />
        <circle cx='4' cy='4' r='4' fill='#E63757' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const GeoAlt = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M12.166 8.94C11.642 10.002 10.932 11.06 10.206 12.01C9.5173 12.9056 8.7809 13.7635 8 14.58C7.21908 13.7635 6.48268 12.9056 5.794 12.01C5.068 11.06 4.358 10.002 3.834 8.94C3.304 7.867 3 6.862 3 6C3 4.67392 3.52678 3.40215 4.46447 2.46447C5.40215 1.52678 6.67392 1 8 1C9.32608 1 10.5979 1.52678 11.5355 2.46447C12.4732 3.40215 13 4.67392 13 6C13 6.862 12.695 7.867 12.166 8.94ZM8 16C8 16 14 10.314 14 6C14 4.4087 13.3679 2.88258 12.2426 1.75736C11.1174 0.632141 9.5913 0 8 0C6.4087 0 4.88258 0.632141 3.75736 1.75736C2.63214 2.88258 2 4.4087 2 6C2 10.314 8 16 8 16Z' fill='black' />
        <path d='M8 8C7.46957 8 6.96086 7.78929 6.58579 7.41421C6.21071 7.03914 6 6.53043 6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4C8.53043 4 9.03914 4.21071 9.41421 4.58579C9.78929 4.96086 10 5.46957 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8ZM8 9C8.79565 9 9.55871 8.68393 10.1213 8.12132C10.6839 7.55871 11 6.79565 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3C7.20435 3 6.44129 3.31607 5.87868 3.87868C5.31607 4.44129 5 5.20435 5 6C5 6.79565 5.31607 7.55871 5.87868 8.12132C6.44129 8.68393 7.20435 9 8 9Z' fill='black' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const LifePre = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM14.43 10.772C13.7204 12.4122 12.4122 13.7204 10.772 14.43L9.657 11.642C10.536 11.2407 11.2407 10.536 11.642 9.657L14.43 10.772ZM5.228 14.43C3.58776 13.7204 2.27964 12.4122 1.57 10.772L4.358 9.657C4.75926 10.536 5.46404 11.2407 6.343 11.642L5.228 14.43ZM14.43 5.228L11.642 6.343C11.2407 5.46404 10.536 4.75926 9.657 4.358L10.772 1.57C12.4122 2.27964 13.7204 3.58776 14.43 5.228ZM6.343 4.358C5.46404 4.75926 4.75926 5.46404 4.358 6.343L1.57 5.228C2.27964 3.58776 3.58776 2.27964 5.228 1.57L6.343 4.358ZM8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z' fill='black' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Reward = () => {
  return (
    <svg id='Capa_1' enableBackground='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'><path d='m418.648 279.958 33.986-33.458-16.143-44.865 16.143-44.865-33.986-33.458-5-47.409-45.112-15.385-25.016-40.594-47.347 5.716-40.173-25.64-40.173 25.64-47.346-5.716-25.015 40.593-45.113 15.385-5.001 47.41-33.986 33.458 16.143 44.865-16.143 44.865 33.986 33.457 5 47.411 25.047 8.542-42.929 134.181 73.492-4.042 57.499 45.951 36.441-113.899 8.098 5.169 8.098-5.169 36.441 113.899 57.498-45.951 73.492 4.042-42.929-134.181 25.046-8.542zm-222.5 181.368-32.392-25.886-41.403 2.276 27.214-85.06 18.912 30.69 47.347-5.716 5.895 3.763zm152.096-25.886-32.392 25.886-25.574-79.933 5.895-3.763 47.346 5.716 18.913-30.69 27.214 85.06zm37.554-130.299-37.166 12.675-20.593 33.416-38.949-4.702-33.09 21.12-33.09-21.119-38.95 4.702-20.593-33.417-37.166-12.675-4.117-39.033-27.959-27.524 13.295-36.949-13.295-36.949 27.959-27.525 4.117-39.033 37.166-12.675 20.593-33.416 38.949 4.702 33.091-21.118 33.09 21.119 38.95-4.702 20.593 33.417 37.166 12.675 4.117 39.033 27.959 27.524-13.295 36.949 13.295 36.949-27.959 27.525z' /><path d='m256 84.791c-64.428 0-116.844 52.416-116.844 116.845s52.416 116.843 116.844 116.843 116.844-52.416 116.844-116.844-52.416-116.844-116.844-116.844zm0 203.662c-47.871 0-86.818-38.947-86.818-86.818 0-47.872 38.947-86.818 86.818-86.818s86.818 38.947 86.818 86.818c0 47.872-38.947 86.818-86.818 86.818z' /></svg>
  )
}

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
    props.onClose && props.onClose()
  }
  return (
    <LogoutWrapper onClick={handleClick}>
      <GrLogout />
      <span>{t('LOGOUT', 'Logout')}</span>
    </LogoutWrapper>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}
