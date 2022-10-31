import React, { useState, useEffect, useRef } from 'react'
import TiArrowSortedUp from '@meronex/icons/ti/TiArrowSortedUp'
import { useOrder, useLanguage, useEvent, useUtils } from 'ordering-components'
import {
  AccordionSection,
  Accordion,
  AccordionContent,
  ContentInfo,
  BusinessInfo,
  BusinessTotal,
  BusinessActions,
  PriceContainer,
  Divider
} from './styles'
import { Button } from '../../../../styles/Buttons'

export const BusinessItemAccordion = (props) => {
  const {
    uuid,
    currentCartUuid,
    isCheckout,
    isClosed,
    moment,
    business,
    isProducts,
    isForceOpenAccordion,
    isCartOnProductsList,
    handleStoreRedirect,
    handleCartOpen,
    isStore,
    total,
    handleClickCheckout,
    checkoutButtonDisabled,
    isMultiCheckout,
    setActive,
    setActiveState,
    isCartPending,
    handleClearProducts,
    onClose
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ parsePrice }] = useUtils()
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [cartProductUpdated, setCartProductUpdated] = useState(null)
  const businessDelete = useRef(null)

  const toggleAccordion = (e) => {
    const isActionsClick = businessDelete.current?.contains(e?.target)

    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const activeAccordion = (value) => {
    setActiveState(value ? 'active' : '')
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon')
  }

  const handleCloseCartPopover = () => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false)
    }
  }

  const handleCartProductUpdated = (product, cart) => {
    setCartProductUpdated(cart?.uuid)
  }

  const handleGoToStore = (e, slug) => {
    e.stopPropagation()
    onClose && onClose()
    handleStoreRedirect(slug)
  }

  const handleGoToHome = (e) => {
    e.stopPropagation()
    onClose && onClose()
    events.emit('go_to_page', { page: 'home' })
  }

  useEffect(() => {
    if (cartProductUpdated === uuid || (currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid))) {
      activeAccordion(true)
    } else {
      activeAccordion(false)
    }
  }, [cartProductUpdated, currentCartUuid])

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true)
    }
  }, [orderState?.carts])

  useEffect(() => {
    if (isForceOpenAccordion) {
      activeAccordion(true)
    }
  }, [isForceOpenAccordion])

  useEffect(() => {
    events.on('cart_popover_closed', handleCloseCartPopover)
    events.on('cart_product_updated', handleCartProductUpdated)
    return () => {
      events.off('cart_popover_closed', handleCloseCartPopover)
      events.off('cart_product_updated', handleCartProductUpdated)
    }
  }, [])

  useEffect(() => {
    handleCartOpen && handleCartOpen(!!setActive)
  }, [setActive])

  return (
    <>
      <AccordionSection isClosed={isClosed} isCartOnProductsList={isCartOnProductsList}>
        {
          !isCheckout && (
            <Accordion
              isClosed={isClosed}
              className={`accordion ${setActive}`}
              onClick={(e) => toggleAccordion(e)}
            >
              <BusinessInfo>
                <ContentInfo className='info' isStore={isStore}>
                  <h3>{t('ORDERING_FROM', 'Ordering from')}:</h3>
                  <h2 onClick={(e) => handleGoToStore(e, business?.slug)}>{business?.name}</h2>
                  {(business?.cellphone || business?.phone) && (
                    <h3>{business?.cellphone || business?.phone}</h3>
                  )}
                  <div>
                    <h4 onClick={(e) => handleGoToHome(e)}>{t('CHANGE_LOCATION', 'Change location')}</h4>
                    {!isClosed && !!isProducts && !isCartPending && (
                      <h4
                        ref={businessDelete}
                        onClick={() => handleClearProducts()}
                        className='clear-cart'
                      >
                        {t('CLEAR_CART', 'Clear cart')}
                      </h4>
                    )}
                  </div>
                </ContentInfo>
              </BusinessInfo>
              {isClosed && !isStore && (
                <BusinessTotal className='closed'>
                  <p>{t('CLOSED', 'Closed')} {moment}</p>
                </BusinessTotal>
              )}

              {!isClosed && !isProducts && !isStore && (
                <BusinessTotal>
                  <p>{t('NO_PRODUCTS', 'No products')}</p>
                </BusinessTotal>
              )}

              <BusinessActions>
                {!isClosed && !!isProducts && (
                  <span>
                    <TiArrowSortedUp className={`${setRotate}`} />
                  </span>
                )}
              </BusinessActions>
            </Accordion>
          )
        }
        {setActive && !isCheckout && (
          <Divider />
        )}
        <AccordionContent
          style={{ minHeight: '0px', maxHeight: !setActive && '0px' }}
        >
          {props.children}
        </AccordionContent>
        {!setActive && !isClosed && !!isProducts && !checkoutButtonDisabled && !isMultiCheckout && (
          <PriceContainer>
            <h4>{parsePrice(total)}</h4>
            <Button onClick={handleClickCheckout} color='primary'>{t('CHECKOUT', 'Checkout')}</Button>
          </PriceContainer>
        )}
        {!setActive && (
          <Divider />
        )}
      </AccordionSection>
    </>
  )
}
