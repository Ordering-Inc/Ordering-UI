
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer, useUtils, useBusiness } from 'ordering-components'
import { useTheme } from 'styled-components'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'
import { LanguageSelector } from '../../../../../components/LanguageSelector'

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
  AddressFormWrapper,
  LanguageSelectorWrapper,
  HeaderSearchMode,
  LeftSide
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
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { getDistance, getCateringValues } from '../../../../../utils'
import { BusinessPreorder } from '../BusinessPreorder'
import { SearchBar } from '../SearchBar'
import { Button } from '../../styles/Buttons'
import { WebsocketStatus } from '../WebsocketStatus'

export const Header = (props) => {
  const {
    isHome,
    location,
    isShowOrderOptions,
    isHideSignup,
    isCustomerMode,
    searchValue,
    setSearchValue,
    businessSlug,
    notificationState
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
  const [customerState, { deleteUserCustomer }] = useCustomer()
  const [{ business }] = useBusiness()

  const clearCustomer = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [modalPageToShow, setModalPageToShow] = useState(null)
  const [preorderBusiness, setPreorderBusiness] = useState(null)
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isFarAway, setIsFarAway] = useState(false)

  const isMulticheckoutPage = window.location.pathname?.includes('/multi-checkout')

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null
  const carts = businessSlug
    ? cartsWithProducts.filter((cart) => cart?.business?.slug === businessSlug || businessSlug === cart?.business_id)
    : cartsWithProducts

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru'), '', t('CATERING_DELIVERY', 'Catering Delivery'), t('CATERING_PICKUP', 'Catering pickup')]
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isPreOrderSetting = configState?.configs?.preorder_status_enabled?.value === '1'
  const isChew = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const isHideLanguages = theme?.header?.components?.language_selector?.hidden
  const cateringTypeString = orderState?.options?.type === 7
    ? 'catering_delivery'
    : orderState?.options?.type === 8
      ? 'catering_pickup'
      : null

  const cateringValues = getCateringValues(cateringTypeString, pathname.includes('store') && Object?.keys(business || {})?.length > 0 ? business?.configs : configState?.configs)

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
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

  const closeAuthModal = () => {
    setAuthModalOpen(false)
    setModalPageToShow(null)
  }

  const handleSuccessLogin = (user) => {
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

  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [customerState?.user?.address])

  useEffect(() => {
    if (!(pathname.includes('/search') || pathname.includes('/checkout'))) {
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

  return (
    <HeaderContainer isChew={isChew}>
      <InnerHeader auth={auth}>
        <LeftSide>
          <LeftHeader id='left-side'>
            <SidebarMenu
              notificationState={notificationState}
              auth={auth}
              isHideSignup={isHideSignup}
              userCustomer={userCustomer}
              isCustomerMode={isCustomerMode}
            />
            <LogoHeader
              onClick={() => handleGoToPage({ page: orderState?.options?.address?.location && !isCustomerMode ? 'search' : 'home' })}
              isChew={isChew}
            >
              <img alt='Logotype' width='170px' height={isChew ? '35px' : '45px'} src={isChew ? theme?.images?.logos?.chewLogo : theme?.my_products?.components?.images?.components?.logo?.components?.image || theme?.images?.logos?.logotype} loading='lazy' />
              <img alt='Isotype' width={isChew ? '70px' : '35px'} height={isChew ? '20px' : '45px'} src={isChew ? theme?.images?.logos?.chewLogo : (windowSize.width <= 768 ? theme?.images?.logos?.isotypeInvert : theme?.my_products?.components?.images?.components?.logo?.components?.image || theme?.images?.logos?.isotype)} loading='lazy' />
            </LogoHeader>
          </LeftHeader>
          {isShowOrderOptions && windowSize.width >= 576 && (
            <Menu id='center-side' className='left-header' isCustomerMode={isCustomerMode} isChew={isChew}>
              {windowSize.width > 850 && isFarAway && (
                <FarAwayMessage>
                  <TiWarningOutline />
                  <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
                </FarAwayMessage>
              )}
              {isCustomerMode && (
                <>
                  <AddressMenu
                    isCustomerMode={isCustomerMode}
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <GeoAlt />
                    <span>{orderState.options?.address?.address || t('LANG_WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}</span>
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
                  {!isCustomerMode && (
                    <AddressMenu
                      onClick={() => openModal('address')}
                    >
                      <GeoAlt />
                      <span>
                        <p>
                          {orderState.options?.address?.address || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
                        </p>
                      </span>
                    </AddressMenu>
                  )}
                  {!isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
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
            </Menu>
          )}
          {windowSize.width < 1200 && windowSize.width >= 480 && auth && (
            <WebsocketStatus />
          )}
        </LeftSide>
        {windowSize.width >= 1200 && window.location.pathname === '/search' && (
          <HeaderSearchMode>
            <SearchBar
              lazyLoad
              search={searchValue}
              placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
              starbucksStyle
              onSearch={(value) => setSearchValue(value)}
              handleCustomEnter={() => configState?.configs?.advanced_business_search_enabled?.value === '0' || businessSlug
                ? null
                : events.emit('go_to_page', { page: 'business_search' })}
            />
          </HeaderSearchMode>
        )}
        {windowSize.width >= 1200 && auth && (
          <WebsocketStatus />
        )}
        {onlineStatus && (
          <RightHeader id='right-side'>
            <Menu isCustomerMode={isCustomerMode} auth={auth}>
              {
                !auth && windowSize.width > 920 && (
                  <>
                    <MenuLink
                      name='signin'
                      highlight={isChew && 1}
                      style={{ whiteSpace: 'nowrap' }}
                      onClick={() => handleOpenLoginSignUp('login')}
                    >
                      {t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
                    </MenuLink>
                    {!isHideSignup && (
                      <Button
                        type='button'
                        color='primary'
                        name='signup'
                        onClick={() => handleOpenLoginSignUp('signup')}
                      >
                        {t('SIGN_UP', theme?.defaultLanguages?.SIGN_UP || 'Sign up')}
                      </Button>
                    )}
                  </>
                )
              }
              {
                auth && (
                  <>
                    {isShowOrderOptions && (
                      windowSize.width > 768 ? (
                        <>
                          {!isMulticheckoutPage ? (
                            <CartPopover
                              open={openPopover.cart}
                              carts={carts}
                              onClick={() => handleTogglePopover('cart')}
                              onClose={() => handleClosePopover('cart')}
                              auth={auth}
                              location={location}
                              isCustomerMode={isCustomerMode}
                              setPreorderBusiness={setPreorderBusiness}
                            />
                          ) : null}
                        </>
                      ) : (
                        <HeaderOption
                          variant='cart'
                          totalCarts={carts?.length}
                          onClick={(variant) => openModal(variant)}
                        />
                      )
                    )}
                    {windowSize.width > 768 && (
                      <UserPopover
                        withLogout
                        isCustomerMode={isCustomerMode}
                        open={openPopover.user}
                        handleOpenAddressModal={() => openModal('address')}
                        onClick={() => handleTogglePopover('user')}
                        onClose={() => handleClosePopover('user')}
                      />
                    )}
                  </>
                )
              }
              {!isHideLanguages && (
                <LanguageSelectorWrapper>
                  <LanguageSelector />
                </LanguageSelectorWrapper>
              )}
            </Menu>
          </RightHeader>
        )}
      </InnerHeader>
      {onlineStatus && isShowOrderOptions && !props.isCustomLayout && !isCustomerMode && (
        windowSize.width > 768 && windowSize.width <= 820 ? (
          <SubMenu>
            {isFarAway && (
              <FarAwayMessage>
                <TiWarningOutline />
                <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
              </FarAwayMessage>
            )}
            <AddressMenu
              isChew={isChew}
              onClick={() => openModal('address')}
            >
              <GeoAlt /> {orderState.options?.address?.address || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
            </AddressMenu>
            {!isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
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
          windowSize.width >= 576 && (
            <SubMenu>
              {isFarAway && (
                <FarAwayMessage>
                  <TiWarningOutline />
                  <span>{t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')}</span>
                </FarAwayMessage>
              )}
              <HeaderOption
                variant='address'
                addressState={orderState?.options?.address?.address}
                onClick={(variant) => openModal(variant)}
                containerStyle={{ width: '80%' }}
              />
              {!isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
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
        )
      )}
      {modalIsOpen && (
        <Modal
          {...(!auth && modalSelected === 'address' && { title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?') })}
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width={modalSelected === 'address' ? orderState?.options?.user_id ? '70%' : '50%' : '700px'}
        >
          {modalSelected === 'cart' && (
            <CartContent
              carts={carts}
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
              <AddressFormWrapper>
                <AddressForm
                  useValidationFileds
                  address={orderState?.options?.address || {}}
                  onCancel={() => setModalIsOpen(false)}
                  onSaveAddress={() => setModalIsOpen(false)}
                  isCustomerMode={isCustomerMode}
                />
              </AddressFormWrapper>
            )
          )}
          {modalSelected === 'moment' && (
            <MomentContent
              onClose={() => setModalIsOpen(false)}
              cateringPreorder={!!cateringTypeString}
              isHeader
              business={pathname.includes('store') && business}
              {...cateringValues}
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
          onRemove={() => closeAuthModal()}
          onClose={() => closeAuthModal()}
          width='50%'
          authModal
          closeOnBackdrop
        >
          {modalPageToShow === 'login' && (
            <LoginForm
              notificationState={notificationState}
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
            />
          )}
          {modalPageToShow === 'signup' && (
            <SignUpForm
              notificationState={notificationState}
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
      <Confirm
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
  )
}

Header.defaultProps = {
  isShowOrderOptions: true
}

export default Header
