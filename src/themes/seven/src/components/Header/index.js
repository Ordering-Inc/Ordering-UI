import React, { useState, useEffect } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useSession, useLanguage, useOrder, useEvent, useConfig, useCustomer } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  Menu,
  MenuLink,
  SubMenu,
  UserEdit,
  OrderTypes,
  OptionsHeader,
  Navlinks,
  IconLinks
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { capitalize } from '../../../../../utils'
import { Modal } from '../../../../../components/Modal'
import { UserDetails } from '../../../../../components/UserDetails'
import { Confirm } from '../../../../../components/Confirm'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { LanguageSelector } from '../LanguageSelector'
import { HeaderOption } from '../HeaderOption'
import { UserPopover } from '../UserPopover'
import { CartPopover } from '../CartPopover'
import { CartContent } from '../CartContent'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { SidebarMenu } from '../SidebarMenu'

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
  // const clearCustomer = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products && cart.products?.length > 0)) || null
  const windowSize = useWindowSize()
  const onlineStatus = useOnlineStatus()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const [isSubmit, setIsSubmit] = useState(false)

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

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [])

  useEffect(() => {
    if (isCustomerMode) {
      setCustomerModalOpen(false)
    }
  }, [customerState?.user?.address])

  const history = useHistory()
  const handleGotoHome = () => {
    history.push('/home')
  }

  const handleSaveAdress = () => {
    setIsSubmit(true)
    setModalIsOpen(false)
  }

  useEffect(() => {
    if (orderState?.options?.address?.address && isSubmit && isHome) {
      history.push('/search')
    }
  }, [orderState, isSubmit])

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
              onClick={() => handleGotoHome()}
            >
              <img alt='Logotype' src={theme?.images?.logos?.logotype} loading='lazy' />
              <img alt='Isotype' width='35px' height='45px' src={theme?.images?.logos?.isotype} loading='lazy' />
            </LogoHeader>
            <OptionsHeader>
              {isShowOrderOptions && (
                <>
                  {onlineStatus && windowSize.width > 850 && (
                    <>
                      <HeaderOption
                        variant='address'
                        addressState={orderState?.options?.address?.address?.split(',')?.[0]}
                        onClick={(variant) => openModal(variant)}
                      />
                      <OrderTypes>
                        <OrderTypeSelectorHeader
                          configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                          defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
                        />
                      </OrderTypes>
                    </>
                  )}
                </>
              )}
            </OptionsHeader>
          </LeftHeader>
          {onlineStatus && (
            <RightHeader>
              {windowSize.width > 1023 && (
                <Navlinks>
                  <a href={t('ARCHIES_MENU_LINK', 'https://archies.cluvi.co')} target='_blank' rel='noopener noreferrer'><span className={window.location.pathname === '/menu' ? 'active' : ''}>{t('ARCHIES_MENU_TEXT', 'Menu')}</span></a>
                  <Link to='/location'><span className={window.location.pathname === '/location' ? 'active' : ''}>{t('ARCHIES_UBICATION_TEXT', 'Location')}</span></Link>
                  <Link to='/picoli'><span className={window.location.pathname === '/picoli' ? 'active' : ''}>{t('ARCHIES_PICOLI_TEXT ', 'Piccoli')}</span></Link>
                  <Link to='/promotions'><span className={window.location.pathname === '/promotions' ? 'active' : ''}>{t('ARCHIES_PROMOS_TEXT', 'Promotions')}</span></Link>
                  <a href={t('ARCHIES_CONTACT_LINK', 'https://contacto.miexperienciaarchies.com.co')} target='_blank' rel='noopener noreferrer'><span className={window.location.pathname === '/contact' ? 'active' : ''}>{t('ARCHIES_CONTACT_TEXT', 'Contact')}</span></a>
                </Navlinks>
              )}
              <Menu>
                {
                  !auth && windowSize.width > 1367 && (
                    <>
                      <MenuLink onClick={() => handleGoToPage({ page: 'signin' })} name='signin'>{t('SIGN_IN', theme?.defaultLanguages?.SIGN_IN || 'LogIn')}</MenuLink>
                      {!isHideSignup && (
                        <MenuLink onClick={() => handleGoToPage({ page: 'signup' })} highlight={1} name='signup'>{t('SIGN_UP', theme?.defaultLanguages?.SIGN_UP || 'Sign Up')}</MenuLink>
                      )}
                    </>
                  )
                }
                {
                  !auth && windowSize.width > 1023 && windowSize.width < 1367 && (
                    <IconLinks>
                      <span onClick={() => handleGoToPage({ page: 'signin' })}><SignInIcon /></span>
                      <span onClick={() => handleGoToPage({ page: 'signup' })}><SignUpIcon /></span>
                    </IconLinks>
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
        {onlineStatus && isShowOrderOptions && windowSize.width <= 850 && (
          <>
            <SubMenu>
              <HeaderOption
                variant='address'
                addressState={orderState?.options?.address?.address?.split(',')?.[0]}
                onClick={(variant) => openModal(variant)}
              />
              <OrderTypes>
                <OrderTypeSelectorHeader
                  configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
                  defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
                />
              </OrderTypes>
            </SubMenu>
          </>
        )}
        {modalIsOpen && (
          <Modal
            title={t(modalSelected.toUpperCase(), capitalize(modalSelected))}
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            width='70%'
            padding='20px'
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
                  // onSaveAddress={() => setModalIsOpen(false)}
                  onSaveAddress={() => handleSaveAdress()}
                />
              )
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

Header.defaultProps = {
  isShowOrderOptions: true
}

export const SignInIcon = () => {
  return (
    <svg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'><path d='m512 80v352c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v40c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-352c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80zm-286.085938 227.800781c-7.839843 7.78125-7.890624 20.445313-.113281 28.285157 3.910157 3.941406 9.054688 5.914062 14.199219 5.914062 5.09375 0 10.1875-1.933594 14.085938-5.800781l45.144531-44.789063c9.523437-9.449218 14.769531-22.023437 14.769531-35.410156s-5.246094-25.960938-14.769531-35.410156l-45.144531-44.789063c-7.839844-7.777343-20.503907-7.730469-28.285157.113281-7.777343 7.839844-7.726562 20.503907.113281 28.28125l32.054688 31.804688h-237.96875c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h237.96875zm0 0' /></svg>
  )
}

export const SignUpIcon = () => {
  return (
    <svg
      version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 512 512' xmlSpace='preserve'
    >
      <g>
        <g>
          <path d='M367.57,256.909c-9.839-4.677-19.878-8.706-30.093-12.081C370.56,219.996,392,180.455,392,136C392,61.01,330.991,0,256,0
            c-74.991,0-136,61.01-136,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069
            c-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.745,36.622,12.363,50.908C25.222,503.847,42.365,512,60.693,512
            H307c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H60.693c-8.538,0-13.689-4.766-15.999-7.606
            c-3.989-4.905-5.533-11.29-4.236-17.519c20.755-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102
            c1.793,0,3.578-0.035,5.354-0.104c31.12,0.73,61.05,7.832,89.044,21.14c9.977,4.74,21.907,0.499,26.649-9.478
            C381.789,273.582,377.547,261.651,367.57,256.909z M260.878,231.877c-1.623-0.029-3.249-0.044-4.878-0.044
            c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136c0-52.935,43.065-96,96-96s96,43.065,96,96
            C352,187.299,311.555,229.329,260.878,231.877z'
          />
        </g>
      </g>
      <g>
        <g>
          <path d='M492,397h-55v-55c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v55h-55c-11.046,0-20,8.954-20,20
            c0,11.046,8.954,20,20,20h55v55c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-55h55c11.046,0,20-8.954,20-20
            C512,405.954,503.046,397,492,397z'
          />
        </g>
      </g>
    </svg>
  )
}

export default Header
