
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import { GeoAlt } from 'react-bootstrap-icons'
import { OrderTypeSelectorContent } from '../OrderTypeSelectorContent'
import { LanguageSelector } from '../LanguageSelector'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'

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
  Divider
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
import { BusinessPreorder } from '../BusinessPreorder'
import { AdminAreaPopover } from '../AdminAreaPopover'

export const Header = (props) => {
  const {
    isHome,
    location,
    isShowOrderOptions,
    isHideSignup,
    isCustomerMode,
    isShowRedirectButton,
    franchiseId
  } = props

  const { pathname } = useLocation()
  const [events] = useEvent()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  const [{ auth, user }] = useSession()
  const [orderState, { refreshOrderOptions, changeType }] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()
  const [customerState, { deleteUserCustomer }] = useCustomer()

  const clearCustomer = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isOpenUserData, setIsOpenUserData] = useState(false)
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')]
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isPreOrderSetting = configState?.configs?.preorder_status_enabled?.value === '1'

  const handleClickUserCustomer = (e) => {
    const isActionsClick = clearCustomer.current?.contains(e?.target)
    if (isActionsClick) {
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', theme?.defaultLanguages?.QUESTION_CLEAR_CUSTOMER || 'Are you sure that you want to clear the customer?'),
        handleOnAccept: () => {
          deleteUserCustomer(true)
          changeType(1)
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

  const handleOpenLoginSignUp = (page) => {
    events.emit('go_to_page', { page: 'home' })
  }

  const handleClosePreorder = () => {
    setPreorderBusiness(null)
  }

  const handleBusinessClick = (business) => {
    events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
  }

  const cutCharactersName = ({ str, maxSize = 8 }) => str.length <= maxSize ? str : str.slice(0, maxSize) + '...'

  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [JSON.stringify(orderState?.options?.address?.address)])

  return (
    <HeaderContainer>
      <InnerHeader>
        <LeftHeader>
          <SidebarMenu
            auth={auth}
            isHideSignup={isHideSignup}
            userCustomer={userCustomer}
            isCustomerMode={isCustomerMode}
          />
          <LogoHeader
            onClick={() => handleGoToPage({ page: orderState?.options?.address?.location && !isCustomerMode ? 'search' : 'home' })}
          >
            <img alt='Logotype' width='170px' height='45px' src={theme?.images?.logos?.logotype} loading='lazy' />
            <img alt='Isotype' width='35px' height='45px' src={isHome ? theme?.images?.logos?.isotypeInvert : theme?.images?.logos?.isotype} loading='lazy' />
          </LogoHeader>
        </LeftHeader>
        {isShowOrderOptions && (
          <>
            <Menu className='left-header' id='center-side'>
              {windowSize.width > 820 && (
                <>
                  <AddressMenu
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <GeoAlt /> <span><p>{orderState.options?.address?.address?.split(',')?.[0] || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}</p></span>
                  </AddressMenu>
                  <Divider />
                </>
              )}
              {isCustomerMode && (
                <CustomerInfo
                  onClick={(e) => handleClickUserCustomer(e)}
                >
                  <span>
                    <p>
                      {windowSize.width > 1200 ? userCustomer?.name : cutCharactersName({ str: userCustomer?.name })}
                      {' '}{windowSize.width > 1200 ? userCustomer?.lastname : null}
                    </p>
                  </span>
                  <span
                    ref={clearCustomer}
                  >
                    <AiOutlineClose />
                  </span>
                </CustomerInfo>
              )}
              {onlineStatus && windowSize.width > 820 && (
                <>
                  {(isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
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
              {windowSize.width > 576 && (
                <OrderTypeSelectorHeader
                  orderTypeList={orderTypeList}
                  onClick={() => openModal('delivery')}
                />
              )}
            </Menu>
          </>
        )}
        <>
          {user?.level === 0 && windowSize.width > 1200 && (
            <>
              {!isShowOrderOptions && (
                <Menu className='left-header invisible' id='center-side' />
              )}
              <AdminAreaPopover
                open={openPopover.admin}
                onClick={() => handleTogglePopover('admin')}
                onClose={() => handleClosePopover('admin')}
              />
            </>
          )}
        </>
        {onlineStatus && (
          <RightHeader>
            <Menu>
              {isShowRedirectButton && (
                <MenuLink
                  onClick={() => window.open(`${t('CALL_CENTER_REDIRECT_URL', '#')}`)}
                  highlight={1}
                  style={{ whiteSpace: 'nowrap' }}
                  name='redirect'
                >
                  {t('CALL_CENTER_REDIRECT_BUTTON', 'Call Center')}
                </MenuLink>
              )}
              {
                !auth && windowSize.width > 920 && (
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
                auth && (
                  <>
                    {isShowOrderOptions && (
                      windowSize.width > 768 ? (
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
                      ) : (
                        <HeaderOption
                          variant='cart'
                          totalCarts={cartsWithProducts?.length}
                          onClick={(variant) => openModal(variant)}
                        />
                      )
                    )}
                    <LanguageSelector />
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
      {onlineStatus && isShowOrderOptions && (
        windowSize.width > 768 && windowSize.width <= 820 ? (
          <SubMenu>
            <AddressMenu
              onClick={() => openModal('address')}
            >
              <GeoAlt /> {orderState.options?.address?.address?.split(',')?.[0] || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')}
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
          <SubMenu>
            <HeaderOption
              variant='address'
              addressState={orderState?.options?.address?.address?.split(',')?.[0]}
              onClick={(variant) => openModal(variant)}
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
      )}
      {modalIsOpen && (
        <Modal
          title={(modalSelected === 'address') ? t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?') : null}
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width='700px'
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
                onAccept={() => setModalIsOpen(false)}
              />
            ) : (
              <AddressForm
                useValidationFileds
                address={orderState?.options?.address || {}}
                onCancel={() => setModalIsOpen(false)}
                onSaveAddress={() => setModalIsOpen(false)}
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
          <UserEdit isOpenUserData={isOpenUserData}>
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
                franchiseId={franchiseId}
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
                franchiseId={franchiseId}
                isHeader
              />
            </>
          </UserEdit>
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
