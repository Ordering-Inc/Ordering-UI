import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer, useUtils, useApi } from 'ordering-components'
import { useTheme } from 'styled-components'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'
import { LanguageSelector } from '../LanguageSelector'

import { GeoAlt } from 'react-bootstrap-icons'
import TiWarningOutline from '@meronex/icons/ti/TiWarningOutline'
import { OrderTypeSelectorContent } from '../OrderTypeSelectorContent'

import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  SubMenu,
  CustomerInfo,
  UserEdit,
  AddressMenu,
  MomentMenu,
  FarAwayMessage,
  Divider,
  LoginButton
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'

import { UserPopover } from '../UserPopover'
import { CartPopover } from '../CartPopover'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { CartContent } from '../CartContent'
import { Modal } from '../Modal'
import { MomentContent } from '../MomentContent'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { HeaderOption } from '../HeaderOption'
import { SidebarMenu } from '../SidebarMenu'
import { UserDetails } from '../UserDetails'
import { Confirm } from '../Confirm'
import { Confirm as ConfirmPFChangs } from '../Confirm/layouts/pfchangs'
import { LoginForm } from '../LoginForm'
import { LoginForm as LoginFormPF } from '../LoginForm/layouts/pfchangs'
import { SignUpForm } from '../SignUpForm'
import { SignUpForm as SignUpFormPF } from '../SignUpForm/layouts/pfchangs'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { getDistance } from '../../../../../utils'
import { BusinessPreorder } from '../BusinessPreorder'
import BsFillPersonFill from '@meronex/icons/bs/BsFillPersonFill';

export const Header = (props) => {
  const {
    isHome,
    location,
    isShowOrderOptions,
    isHideSignup,
    isCustomerMode,
    franchiseId,
    slug
  } = props
  const { pathname } = useLocation()
  const [events] = useEvent()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  const [{ auth }, { login }] = useSession()
  const [orderState, { refreshOrderOptions }] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()
  const [ordering] = useApi()
  const [customerState, { deleteUserCustomer }] = useCustomer()

  const clearCustomer = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [modalPageToShow, setModalPageToShow] = useState(null)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [otpDataUser, setOtpDataUser] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isFarAway, setIsFarAway] = useState(false)
  const isAlsea = ordering.project === 'alsea'

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0 && (cart?.business?.slug.includes(slug || 'pf_changs')))) || null // change filter includes pf_changs for cart?.business?.franchise_id === franchiseId || !franchiseId || !cart?.business?.franchiseId) DON'T MERGE THIS TO MASTER
  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')]
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isPreOrderSetting = configState?.configs?.preorder_status_enabled?.value === '1'

  const headerLayout = theme?.layouts?.header?.components?.layout?.type
  const headerBackgroundColor = theme?.colors?.tertiaryContrast || theme?.layouts?.header?.components?.style?.backgroundColor
  const headerBorderBottom = theme?.layouts?.header?.components?.style?.borderBottom
  const headerLogo = theme?.layouts?.header?.components?.logo?.components?.image
  const isloginSignupLayoutPF = theme?.layouts?.header?.components?.login_signup?.components?.layout?.type === 'pfchangs'
  const loginSignupIcon = theme?.layouts?.header?.components?.login_signup?.components?.icon?.components?.image
  const cartAlwaysShowed = theme?.layouts?.header?.components?.cart?.components?.open_strategy?.alwaysShowed
  const showAddressForm = !theme?.layouts?.header?.components?.address_form?.hidden
  const showOrderTypes = !theme?.layouts?.header?.components?.order_types?.hidden
  const showMoment = !theme?.layouts?.header?.components?.moment?.hidden
  const showOrderOptionsByTheme = showMoment || showOrderTypes || showAddressForm

  const LoginFormComponent = isloginSignupLayoutPF
    ? LoginFormPF
    : LoginForm

  const SignFormComponent = isloginSignupLayoutPF
    ? SignUpFormPF
    : SignUpForm

  const ConfirmComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? ConfirmPFChangs
    : Confirm

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token || otpDataUser?.token
    })
  }

  const handleClickUserCustomer = (e) => {
    const isActionsClick = clearCustomer.current?.contains(e?.target)
    if (isActionsClick) {
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', theme?.defaultLanguages?.QUESTION_CLEAR_CUSTOMER || 'Are you sure that you want to clear the customer?'),
        handleOnAccept: () => {
          deleteUserCustomer(true)
          refreshOrderOptions()
          handleGoToPage({ page: 'home' })
          setConfirm({ ...confirm, open: false })
        }
      })
      return
    }
    setCustomerModalOpen(true)
  }

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true)
      refreshOrderOptions()
    }
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const closeAuthModal = (deleteUser) => {
    setAuthModalOpen(false)
    setModalPageToShow(null)
    setOtpDataUser(null)
    if (otpDataUser && deleteUser) {
      deleteOtpUser()
    }
  }

  const handleSuccessLogin = (user) => {
    if (!user?.name || !user?.lastname || !user?.cellphone || !user?.email) {
      setModalPageToShow('user_update')
      setAuthModalOpen(true)
      setOtpDataUser(null)
      return
    }
    if (user) {
      closeAuthModal()
    }
  }

  const handleOpenLoginSignUp = (index) => {
    if (isCustomerMode) {
      events.emit('go_to_page', { page: 'home' })
    } else {
      setModalPageToShow(index)
      setAuthModalOpen(true)
    }
  }

  const handleClosePreorder = () => {
    setPreorderBusiness(null)
  }

  const handleBusinessClick = (business) => {
    events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
  }

  const deleteOtpUser = async () => {
    try {
      await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/delete_new_user.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: otpDataUser.id,
          token: otpDataUser.token
        })
      })
    } catch (err) {
      setConfirm({
        ...confirm,
        content: err.message,
        open: true
      })
    }
  }
  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [customerState?.user?.address])

  useEffect(() => {
    if (!(pathname.includes('/search'))) {
      setIsFarAway(false)
      return
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords
      const distance = getDistance(crd.latitude, crd.longitude, orderState?.options?.address?.location?.lat, orderState?.options?.address?.location?.lng)
      if (distance > 20) setIsFarAway(true)
      else setIsFarAway(false)
    }, (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }, [orderState?.options?.address?.location, pathname])

  useEffect(() => {
    if (!otpDataUser && isloginSignupLayoutPF && modalPageToShow === 'signup') {
      setAuthModalOpen(false)
      setModalPageToShow(null)
    }
  }, [otpDataUser, modalPageToShow, authModalOpen])

  useEffect(() => {
    if (auth && isloginSignupLayoutPF) {
      setOtpDataUser(null)
    }
  }, [auth])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderContainer
        headerBackgroundColor={headerBackgroundColor}
        headerBorderBottom={headerBorderBottom}
      >
        <InnerHeader>
          <LeftHeader>
            <SidebarMenu
              auth={auth}
              isHideSignup={isHideSignup}
              userCustomer={userCustomer}
              isCustomerMode={isCustomerMode}
              handleOpenLoginSignUpCustom={handleOpenLoginSignUp}
            />
            <LogoHeader
              onClick={() => handleGoToPage({ page: orderState?.options?.address?.location && !isCustomerMode && headerLayout !== 'pfchangs' ? 'search' : 'home' })}
              disabledResponsive={!!headerLogo}
              imgW={windowSize.width <= 768 && headerLogo ? '95px' : null}
              imgH={windowSize.width <= 768 && headerLogo ? '21px' : null}
            >
              <img alt='Logotype' width={headerLayout === 'pfchangs' ? '' : '170px'} height={headerLayout === 'pfchangs' ? '' : '45px'} src={headerLogo || theme?.images?.logos?.logotype} loading='lazy' />
              {!headerLogo && (
                <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy' />
              )}
            </LogoHeader>
          </LeftHeader>
          {/* {showOrderOptionsByTheme && isShowOrderOptions && !props.isCustomLayout && (
            <Menu className='left-header' isCustomerMode={isCustomerMode}>
              {windowSize.width > 820 && isFarAway && (
                <FarAwayMessage>
                  <TiWarningOutline />
                  <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
                </FarAwayMessage>
              )}
              {isCustomerMode && showAddressForm && (
                <>
                  <AddressMenu
                    isCustomerMode={isCustomerMode}
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <GeoAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
                  </AddressMenu>
                  <Divider />
                </>
              )}
              {isCustomerMode && windowSize.width > 450 && (
                <>
                  <CustomerInfo
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <span>
                      <p>{userCustomer?.name} {userCustomer?.lastname}</p>
                    </span>
                    <span
                      ref={clearCustomer}
                    >
                      <AiOutlineClose />
                    </span>
                  </CustomerInfo>
                  <Divider />
                </>
              )}
              {onlineStatus && windowSize.width > 820 && (
                <>
                  {!isCustomerMode && showAddressForm && (
                    <AddressMenu
                      onClick={() => openModal('address')}
                    >
                      <GeoAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
                    </AddressMenu>
                  )}
                  {showMoment && !isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
                    <MomentMenu
                      onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                        ? null
                        : () => openModal('moment')}
                    >
                      <div>
                        {orderState.options?.moment
                          ? parseDate(orderState.options?.moment, { outputFormat: configState?.configs?.dates_moment_format?.value })
                          : t('ASAP_ABBREVIATION', 'ASAP')}
                      </div>
                    </MomentMenu>
                  )}
                </>
              )}
              {showOrderTypes && (
                <>
                  {windowSize.width > 768 ? (
                    <OrderTypeSelectorHeader
                      orderTypeList={orderTypeList}
                      onClick={() => openModal('delivery')}
                    />
                  ) : (
                    <HeaderOption
                      variant='delivery'
                      onClick={(variant) => openModal(variant)}
                      orderTypeList={orderTypeList}
                    />
                  )}
                </>
              )}
            </Menu>
          )} */}
          {onlineStatus && (
            <RightHeader>
              <Menu isCustomerMode={isCustomerMode}>
                {
                  !auth && windowSize.width > 920 && !isloginSignupLayoutPF && (
                    <>
                      <MenuLink onClick={() => handleOpenLoginSignUp('login')} style={{ whiteSpace: 'nowrap' }} name='signin'>{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}</MenuLink>
                      {!isHideSignup && (
                        <MenuLink
                          onClick={() => handleOpenLoginSignUp('signup')}
                          highlight={1}
                          style={{ whiteSpace: 'nowrap' }}
                          name='signup'
                        >
                          {t('SIGN_UP', theme?.defaultLanguages?.SIGN_UP || 'Sign up')}
                        </MenuLink>
                      )}
                    </>
                  )
                }
                {
                  cartAlwaysShowed && (
                    <>
                      {windowSize.width > 768 ? (
                        <CartPopover
                          open={openPopover.cart}
                          carts={cartsWithProducts}
                          onClick={() => handleTogglePopover('cart')}
                          onClose={() => handleClosePopover('cart')}
                          auth={auth}
                          location={location}
                          isCustomerMode={isCustomerMode}
                          setPreorderBusiness={setPreorderBusiness}
                        />
                      ) : !pathname.includes('/checkout') && (
                        <HeaderOption
                          variant='cart'
                          totalCarts={cartsWithProducts?.length}
                          onClick={(variant) => openModal(variant)}
                        />
                      )}
                    </>
                  )
                }
                {
                  !auth && isloginSignupLayoutPF && windowSize.width > 920 && (
                    <LoginButton onClick={() => handleOpenLoginSignUp('login')}>
                      {loginSignupIcon && (
                        <BsFillPersonFill />
                      )}
                      <p>{t('SIGN_IN_JOIN', 'Sign In/Join')}</p>
                    </LoginButton>
                  )
                }
                {
                  auth && (
                    <>
                      {!cartAlwaysShowed && isShowOrderOptions && (
                        windowSize.width > 768 ? (
                          <CartPopover
                            open={openPopover.cart}
                            carts={cartsWithProducts}
                            onClick={() => handleTogglePopover('cart')}
                            onClose={() => handleClosePopover('cart')}
                            auth={auth}
                            location={location}
                            isCustomerMode={isCustomerMode}
                            franchiseId={franchiseId}
                            setPreorderBusiness={setPreorderBusiness}
                          />
                        ) : (
                          <HeaderOption
                            variant='cart'
                            totalCarts={cartsWithProducts?.length}
                            onClick={(variant) => openModal(variant)}
                          />
                        )
                      )}
                      {isCustomerMode && (
                        <LanguageSelector />
                      )}
                      {windowSize.width > 768 && (
                        <UserPopover
                          withLogout
                          isCustomerMode={isCustomerMode}
                          open={openPopover.user}
                          onClick={() => handleTogglePopover('user')}
                          onClose={() => handleClosePopover('user')}
                        />
                      )}
                    </>
                  )
                }
              </Menu>
            </RightHeader>
          )}
        </InnerHeader>
        {onlineStatus && showOrderOptionsByTheme && isShowOrderOptions && !props.isCustomLayout && !isCustomerMode && (
          windowSize.width > 768 && windowSize.width <= 820 ? (
            <SubMenu>
              {isFarAway && (
                <FarAwayMessage>
                  <TiWarningOutline />
                  <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
                </FarAwayMessage>
              )}
              <AddressMenu
                onClick={() => openModal('address')}
              >
                <GeoAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
              </AddressMenu>
              {showMoment && !isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
                <HeaderOption
                  variant='moment'
                  momentState={orderState?.options?.moment}
                  onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                    ? null
                    : (variant) => openModal(variant)}
                />
              )}
            </SubMenu>
          ) : (
            <SubMenu>
              {showAddressForm && (
                <>
                  {isFarAway && (
                    <FarAwayMessage>
                      <TiWarningOutline />
                      <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
                    </FarAwayMessage>
                  )}
                  <HeaderOption
                    variant='address'
                    addressState={orderState?.options?.address?.address?.split(',')?.[0]}
                    onClick={(variant) => openModal(variant)}
                  />
                </>
              )}
              {showMoment && !isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
                <HeaderOption
                  variant='moment'
                  momentState={orderState?.options?.moment}
                  onClick={configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0
                    ? null
                    : (variant) => openModal(variant)}
                />
              )}
            </SubMenu>
          )
        )}
        {modalIsOpen && (
          <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width={modalSelected === 'address' ? '70%' : '700px'}
          >
            {modalSelected === 'cart' && (
              <CartContent
                carts={cartsWithProducts}
                isOrderStateCarts={!!orderState.carts}
                onClose={() => setModalIsOpen(false)}
              />
            )}
            {modalSelected === 'address' && (
              auth ? (
                <AddressList
                  isModal
                  changeOrderAddressWithDefault
                  userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
                  onCancel={() => setModalIsOpen(false)}
                  isCustomerMode={isCustomerMode}
                />
              ) : (
                <AddressForm
                  useValidationFileds
                  address={orderState?.options?.address || {}}
                  onCancel={() => setModalIsOpen(false)}
                  onSaveAddress={() => setModalIsOpen(false)}
                  isCustomerMode={isCustomerMode}
                />
              )
            )}
            {modalSelected === 'moment' && (
              <MomentContent
                onClose={() => setModalIsOpen(false)}
              />
            )}
            {modalSelected === 'delivery' && (
              <OrderTypeSelectorContent
                onClose={() => setModalIsOpen(false)}
                configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
              />
            )}
          </Modal>
        )}
        {isCustomerMode && customerModalOpen && (
          <Modal
            open={customerModalOpen}
            width='80%'
            onClose={() => setCustomerModalOpen(false)}
            padding='20px'
            hideCloseDefault
          >
            <UserEdit>
              {!customerState?.loading && (
                <>
                  <UserDetails
                    isAddressFormOpen={isAddressFormOpen}
                    userData={customerState?.user}
                    userId={customerState?.user?.id}
                    isOpenUserData={isOpenUserData}
                    isCustomerMode
                    isModal
                    setIsOpenUserData={setIsOpenUserData}
                    onClose={() => setCustomerModalOpen(false)}
                  />
                  <AddressList
                    isModal
                    userId={customerState?.user?.id}
                    changeOrderAddressWithDefault
                    userCustomerSetup={customerState.user}
                    isOpenUserData={isOpenUserData}
                    setCustomerModalOpen={setCustomerModalOpen}
                    setIsOpenUserData={setIsOpenUserData}
                    setIsAddressFormOpen={setIsAddressFormOpen}
                    isHeader
                    isCustomerMode={isCustomerMode}
                  />
                </>
              )}
            </UserEdit>
          </Modal>
        )}
        {authModalOpen && !auth && (
          <Modal
            open={authModalOpen}
            onRemove={() => closeAuthModal(true)}
            onClose={() => closeAuthModal(true)}
            width='50%'
            authModal
          >
            {modalPageToShow === 'login' && (
              <LoginFormComponent
                handleSuccessLogin={handleSuccessLogin}
                elementLinkToSignup={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'signup' })
                    } href='#'
                  >{t('CREATE_ACCOUNT', theme?.defaultLanguages?.CREATE_ACCOUNT || 'Create account')}
                  </a>
                }
                elementLinkToForgotPassword={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                    } href='#'
                  >{t('RESET_PASSWORD', theme?.defaultLanguages?.RESET_PASSWORD || 'Reset password')}
                  </a>
                }
                useLoginByCellphone
                isPopup
                defaultLoginTab={isloginSignupLayoutPF && 'otp'}
                setOtpDataUser={setOtpDataUser}
                handleOpenSignup={() => setModalPageToShow('signup')}
              />
            )}
            {modalPageToShow === 'signup' && (
              <SignFormComponent
                elementLinkToLogin={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'login' })
                    } href='#'
                  >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
                  </a>
                }
                useLoginByCellphone
                useChekoutFileds
                handleSuccessSignup={handleSuccessSignup}
                isPopup
                closeModal={() => closeAuthModal()}
                otpDataUser={otpDataUser}
              />
            )}
            {modalPageToShow === 'forgotpassword' && (
              <ForgotPasswordForm
                elementLinkToLogin={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'login' })
                    } href='#'
                  >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
                  </a>
                }
                isPopup
              />
            )}
          </Modal>
        )}
        {auth && authModalOpen && modalPageToShow === 'user_update' && (
          <Modal
            open={authModalOpen}
            width='50%'
            hideCloseDefault
          >
            <UserDetails
              useSessionUser
              // userData={customerState?.user}
              // userId={customerState?.user?.id}
              isUserDetailsEdit
              isOpenUserData={isOpenUserData}
              setIsOpenUserData={setIsOpenUserData}
              isMissedData
              onClose={() => closeAuthModal()}
              handleSuccessLogin={handleSuccessLogin}
              setOtpDataUser={setOtpDataUser}
              handleOpenSignup={() => setModalPageToShow('signup')}
              handleCustomModalClick={handleCustomModalClick}
              LoginFormComponent={LoginFormComponent}
            />
          </Modal>
        )}
        <ConfirmComponent
          title={t('CUSTOMER', theme?.defaultLanguages?.CUSTOMER || 'Customer')}
          content={confirm.content}
          acceptText={t('ACCEPT', theme?.defaultLanguages?.ACCEPT || 'Accept')}
          open={isCustomerMode && confirm.open}
          onClose={() => setConfirm({ ...confirm, open: false })}
          onCancel={() => setConfirm({ ...confirm, open: false })}
          onAccept={confirm.handleOnAccept}
          closeOnBackdrop={false}
        />
        <Modal
          open={!!preorderBusiness}
          width='760px'
          onClose={() => handleClosePreorder()}
        >
          <BusinessPreorder
            business={preorderBusiness}
            handleClick={handleBusinessClick}
            showButton
          />
        </Modal>
      </HeaderContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

Header.defaultProps = {
  isShowOrderOptions: true
}
