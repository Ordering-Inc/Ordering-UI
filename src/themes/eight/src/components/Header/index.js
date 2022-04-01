import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import MdClose from '@meronex/icons/md/MdClose'
import SuLocation from '@meronex/icons/su/SuLocation'
import FaRegClock from '@meronex/icons/fa/FaRegClock'

import { MomentContent } from '../MomentContent'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { LanguageSelector } from '../LanguageSelector'
import { SidebarMenu } from '../SidebarMenu'
import { HeaderOption } from '../HeaderOption'
import { CartPopover } from '../CartPopover'
import { CartContent } from '../CartContent'
import { Button } from '../../styles'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { capitalize } from '../../../../../utils'
import { UserPopover } from '../../../../../components/UserPopover'
import { Modal } from '../../../../../components/Modal'
import { AddressList } from '../../../../../components/AddressList'
import { AddressForm } from '../../../../../components/AddressForm'
import { UserDetails } from '../../../../../components/UserDetails'
import { Confirm } from '../../../../../components/Confirm'

import {
  Header as HeaderContainer,
  InnerHeader,
  AddressItem,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  CustomerInfo,
  UserEdit,
  VerticalBorderLine,
  MomentItem
} from './styles'

export const Header = (props) => {
  const {
    isHome,
    location,
    closeCartPopover,
    isShowOrderOptions,
    isHideSignup,
    isCustomerMode
  } = props

  const { pathname } = useLocation()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [orderState, { refreshOrderOptions }] = useOrder()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const [configState] = useConfig()
  const [customerState, { deleteUserCustomer }] = useCustomer()
  const [{ parseDate }] = useUtils()

  const clearCustomer = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null

  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

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

  const handleAddProduct = () => {
    if (!closeCartPopover) {
      handleTogglePopover('cart')
    }
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true)
      refreshOrderOptions()
    }
  }

  const handleAddress = () => {
    if (auth) {
      handleGoToPage({ page: 'address_list' })
    } else {
      handleGoToPage({ page: 'address' })
    }
  }

  const handleMoment = () => {
    if (configState?.configs?.max_days_preorder?.value === -1 || configState?.configs?.max_days_preorder?.value === 0 || window.location.pathname === '/moment') return
    handleGoToPage({ page: 'moment' })
  }

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [events])

  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [customerState?.user?.address])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderContainer home={isHome}>
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
            {isShowOrderOptions && (
              <Menu className='left-header'>
                {isCustomerMode && windowSize.width > 450 && (
                  <CustomerInfo
                    isHome={isHome}
                    onClick={(e) => handleClickUserCustomer(e)}
                  >
                    <span>
                      <FaUserCircle />
                      <p>{userCustomer?.name} {userCustomer?.lastname}</p>
                    </span>
                    <span
                      style={styles.headCustomer}
                      ref={clearCustomer}
                    >
                      <MdClose style={styles.clearCustomer} />
                    </span>
                  </CustomerInfo>
                )}
                {onlineStatus && windowSize.width > 860 && (
                  <>
                    <VerticalBorderLine />
                    <AddressItem onClick={() => handleAddress()}>
                      <SuLocation /> {orderState.options?.address?.address?.split(',')?.[0] || t('FIND_RESTAURANT', 'Find a restaurant')}
                    </AddressItem>
                    {!isCustomerMode && (isPreOrderSetting || configState?.configs?.preorder_status_enabled?.value === undefined) && (
                      <>
                        <VerticalBorderLine />
                        <MomentItem
                          onClick={() => handleMoment()}
                        >
                          <FaRegClock />
                          {orderState.options?.moment
                            ? parseDate(orderState.options?.moment, { outputFormat: configState?.configs?.dates_moment_format?.value })
                            : t('ASAP_ABBREVIATION', 'ASAP')}
                        </MomentItem>
                      </>
                    )}
                  </>
                )}
                <VerticalBorderLine />
                <OrderTypeSelectorHeader
                  configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                  defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
                />
              </Menu>
            )}
          </LeftHeader>
          {onlineStatus && (
            <RightHeader>
              <Menu>
                {
                  !auth && windowSize.width > 870 && (
                    <>
                      <MenuLink onClick={() => handleGoToPage({ page: 'signin' })} name='signin'>{t('SIGN_IN', theme?.defaultLanguages?.SIGN_IN || 'Sign in')}</MenuLink>
                      {!isHideSignup && (
                        <Button
                          color='primaryGradient'
                          onClick={() => handleGoToPage({ page: 'signup' })}
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
                      {windowSize.width > 768 && (
                        <UserPopover
                          withLogout
                          isCustomerMode={isCustomerMode}
                          open={openPopover.user}
                          isHome={isHome}
                          onClick={() => handleTogglePopover('user')}
                          onClose={() => handleClosePopover('user')}
                        />
                      )}
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
                          />
                        ) : (
                          <HeaderOption
                            auth={auth}
                            variant='cart'
                            totalCarts={cartsWithProducts?.length}
                            onClick={(variant) => openModal(variant)}
                          />
                        )
                      )}
                    </>
                  )
                }
                <LanguageSelector />
              </Menu>
            </RightHeader>
          )}
        </InnerHeader>
        {modalIsOpen && (
          <Modal
            title={t(modalSelected.toUpperCase(), capitalize(modalSelected))}
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
            padding={modalSelected === 'address' ? '20px' : '5px'}
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
              <MomentContent />
            )}
          </Modal>
        )}
        {isCustomerMode && customerModalOpen && (
          <Modal
            open={customerModalOpen}
            width='60%'
            onClose={() => setCustomerModalOpen(false)}
          >
            <UserEdit>
              {!customerState?.loading && (
                <>
                  <UserDetails
                    userData={customerState?.user}
                    userId={customerState?.user?.id}
                    isCustomerMode
                  />
                  <AddressList
                    isModal
                    userId={customerState?.user?.id}
                    changeOrderAddressWithDefault
                    userCustomerSetup={customerState.user}
                    setCustomerModalOpen={setCustomerModalOpen}
                  />
                </>
              )}
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

const styles = {
  headCustomer: {
    margin: 0,
    height: 20,
    width: 20,
    backgroundColor: '#CCCCCC',
    borderRadius: '100%',
    marginLeft: 5
  },
  clearCustomer: {
    margin: 0,
    fontSize: 20
  }
}

Header.defaultProps = {
  isShowOrderOptions: true
}
