import React, { useState, useEffect } from 'react'
import { useEvent, useSession, useOrder, useLanguage, useConfig, useUtils } from 'ordering-components'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import HiOutlineShoppingBag from '@meronex/icons/hi/HiOutlineShoppingBag'
import {
  HeaderContainer,
  InnerHeader,
  LeftHeader,
  RightHeader,
  LogoHeader,
  Menu,
  DeliverDetailsContainer,
  DeliveryDetailsInfoWrap,
  DeliveryDetailsInfo,
  CartContainer
} from './styles'
import { DeliveryDetailsPopover } from '../DeliveryDetailsPopover'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { SidebarMenu } from '../SidebarMenu'
import { CartPopover } from '../CartPopover'

import { useTheme } from 'styled-components'
import {
  Button
} from '../../../../../styles/Buttons/theme/three'
import { Modal } from '../../../../../components/Modal'
import { DeliveryDetailsContent } from '../DeliveryDetailsContent'
import { CartContent } from '../CartContent'
export const Header = (props) => {
  const {
    isHome,
    location,
    closeCartPopover
  } = props
  const [events] = useEvent()
  const theme = useTheme()
  const [{ auth, user }] = useSession()
  const [orderState] = useOrder()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  const [configState] = useConfig()
  const onlineStatus = useOnlineStatus()
  const windowSize = useWindowSize()

  const cartsWithProducts = (orderState?.carts && Object.values(orderState?.carts).filter(cart => cart.products.length > 0)) || null
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isBusinessListPage = location.pathname === '/search'
  const isSearchBarVisiable = location.pathname === '/search' || location.pathname === '/filter'
  const [openPopover, setOpenPopover] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalSelected, setModalSelected] = useState(null)

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleAddProduct = () => {
    if (!closeCartPopover) {
      handleTogglePopover('cart')
    }
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const openModal = (opt) => {
    setModalSelected(opt)
    setModalIsOpen(true)
  }

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [])
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <HeaderContainer>
        <InnerHeader>
          <LeftHeader>
            <SidebarMenu
              auth={auth}
              user={user}
            />
            <LogoHeader
              onClick={() => handleGoToPage({ page: orderState?.options?.address?.location ? 'search' : 'home' })}
            >
              <img alt='Logotype' width='170px' height='45px' src={theme?.images?.logos?.logotype} loading='lazy' />
              <img alt='Isotype' width='35px' height='45px' src={theme?.images?.logos?.isotype} loading='lazy' />
            </LogoHeader>
          </LeftHeader>
          {onlineStatus && (
            <RightHeader>
              {!configState?.loading && configTypes.length > 0 && isBusinessListPage && windowSize.width > 992 && (
                <OrderTypeSelectorHeader configTypes={configTypes} />
              )}
              {!isHome && onlineStatus && windowSize.width > 992 && (
                <DeliverDetailsContainer
                  isSearchBarVisiable={isSearchBarVisiable}
                >
                  <DeliveryDetailsPopover
                    auth={auth}
                    open={openPopover.deliveryDetails}
                    addressState={orderState?.options?.address}
                    onClick={() => handleTogglePopover('deliveryDetails')}
                    onClose={() => handleClosePopover('deliveryDetails')}
                  />
                </DeliverDetailsContainer>
              )}
              {isHome && (
                <Menu>
                  {
                    !auth && (
                      <>
                        <Button
                          color='secundary'
                          onClick={() => handleGoToPage({ page: 'signin' })}
                        >
                          {t('SIGN_IN', 'Sign in')}
                        </Button>
                      </>
                    )
                  }
                </Menu>
              )}
              {
                auth && (
                  <>
                    {windowSize.width > 768 ? (
                      <CartPopover
                        open={openPopover.cart}
                        carts={cartsWithProducts}
                        onClick={() => handleTogglePopover('cart')}
                        onClose={() => handleClosePopover('cart')}
                        auth={auth}
                        location={location}
                      />
                    ) : (
                      <CartContainer onClick={() => openModal('cart')}>
                        <HiOutlineShoppingBag />
                        <p>{cartsWithProducts?.length}</p>
                      </CartContainer>
                    )}
                  </>
                )
              }
            </RightHeader>
          )}
        </InnerHeader>
        {onlineStatus && windowSize.width <= 992 && (
          <DeliveryDetailsInfoWrap>
            {!configState?.loading && configTypes.length > 0 && isBusinessListPage && (
              <OrderTypeSelectorHeader configTypes={configTypes} />
            )}
            {!isHome && (
              <DeliveryDetailsInfo onClick={() => openModal('deliveryDetails')}>
                <p>
                  {orderState.options?.address?.address?.split(',')?.[0] || t('SELECT_AN_ADDRESS', 'Select an address')}
                </p>
                <span> - </span>
                <p>
                  {orderState.options?.moment
                    ? parseDate(orderState.options?.moment, { outputFormat: configState.configs?.format_time?.value === '12' ? 'MM/DD hh:mma' : 'MM/DD HH:mm' })
                    : t('ASAP_ABBREVIATION', 'ASAP')}
                </p>
              </DeliveryDetailsInfo>
            )}
          </DeliveryDetailsInfoWrap>
        )}
      </HeaderContainer>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width='70%'
      >
        {modalSelected === 'deliveryDetails' && (
          <DeliveryDetailsContent
            auth={auth}
            addressState={orderState?.options?.address}
            onClose={() => setModalIsOpen(false)}
          />
        )}
        {modalSelected === 'cart' && (
          <CartContent
            carts={cartsWithProducts}
            isOrderStateCarts={!!orderState.carts}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </Modal>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
