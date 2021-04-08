import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent } from 'ordering-components'
import { Container, NotCarts, ModalContainer } from './styles'
import { Cart } from '../Cart'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'

export const CartContent = (props) => {
  const {
    carts,
    isOrderStateCarts,
    isCartPopover,
    isForceOpenCart
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [currentCartUuid, setCurrentCartUuid] = useState(null)
  const [cartsRemoved, setCartsRemoved] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleAddProduct = (product, cart) => {
    setCurrentCartUuid(cart?.uuid)
  }

  const handleSetCurrentCartUuid = () => {
    setCurrentCartUuid(null)
  }

  useEffect(() => {
    events.on('cart_popover_closed', handleSetCurrentCartUuid)
    events.on('cart_product_added', handleAddProduct)
    return () => {
      events.off('cart_popover_closed', handleSetCurrentCartUuid)
      events.off('cart_product_added', handleAddProduct)
    }
  }, [])

  const handleRemoveProduct = () => {
    setCartsRemoved(true)
  }

  const handleGoToPage = (data) => {
    setOpenModal(false)
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    events.on('cart_product_removed', handleRemoveProduct)
    return () => events.off('cart_product_removed', handleRemoveProduct)
  }, [])

  useEffect(() => {
    if (!cartsRemoved) return
    if (!carts || carts.length === 0) {
      setCartsRemoved(false)
      setOpenModal(true)
    }
  }, [carts, cartsRemoved])

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
      <Container>
        {carts?.length > 0 && (
          <h1>{t('YOUR_ORDER', 'Your order')}</h1>
        )}
        {isOrderStateCarts && carts?.length > 0 &&
          carts.map(cart => (
            <React.Fragment key={cart.uuid}>
              {cart.products.length > 0 && (
                <Cart
                  isCartPending={cart?.status === 2}
                  cart={cart}
                  isCartPopover={isCartPopover}
                  isCheckout={window.location.pathname === `/checkout/${cart?.uuid}`}
                  isForceOpenCart={isForceOpenCart}
                  currentCartUuid={currentCartUuid}
                  isProducts={cart.products.length}
                  onClickCheckout={props.onClose}
                  handleRemoveAllProducts={() => setCartsRemoved(true)}
                />
              )}
            </React.Fragment>
          ))}
        {(!carts || carts?.length === 0) && (
          <NotCarts>
            <img src={theme.images?.general?.notFound} alt='Not Found' width='200px' height='122px' loading='lazy' />
            <h1>{t('CARTS_NOT_FOUND', 'You don\'t have carts available')}</h1>
          </NotCarts>
        )}
      </Container>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalContainer>
          <h1>{t('ALL_ITEMS_REMOVED', 'All items removed')}</h1>
          <p>{t('NOT_PICKY', 'You are not picky, you only have a delicate taste')}</p>
          <Button
            rectangle
            color='primary'
            onClick={() => handleGoToPage({ page: 'search' })}
          >
            {t('SEE_BUSINESSES', 'See businesses')}
          </Button>
        </ModalContainer>
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
