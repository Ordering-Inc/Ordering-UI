import React, { useState, useRef, useEffect } from 'react'
import TiArrowSortedDown from '@meronex/icons/ti/TiArrowSortedDown'
import { useOrder, useLanguage, useUtils, useEvent } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import AiOutlineDelete from '@meronex/icons/ai/AiOutlineDelete'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  ContentInfo,
  BusinessInfo,
  BusinessTotal,
  BusinessActions
} from './styles'

export const BusinessItemAccordion = (props) => {
  const {
    uuid,
    isCartPending,
    currentCartUuid,
    isCheckout,
    isClosed,
    moment,
    business,
    orderTotal,
    isProducts,
    isValidProducts,
    isForceOpenAccordion,
    isCartOnProductsList,
    handleClearProducts,
    handleStoreRedirect,
    handleCartOpen,
    isStore
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [cartProductUpdated, setCartProductUpdated] = useState(null)

  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)
  const windowSize = useWindowSize()

  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e?.target) || businessDelete.current?.contains(e?.target)
    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const activeAccordion = (value) => {
    setActiveState(value ? 'active' : '')
    // setHeightState(value ? `${content.current.scrollHeight}px` : '0px')
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

  const handleChangeStore = () => {
    events.emit('go_to_page', { page: 'search' })
  }

  useEffect(() => {
    handleCartOpen && handleCartOpen(!!setActive)
  }, [setActive])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection isClosed={isClosed} isCartOnProductsList={isCartOnProductsList}>
        {
          !isCheckout && (
            <>
              {!(windowSize.width < 576 && isStore) && (
                <Accordion
                  isClosed={isClosed}
                  className={`accordion ${setActive}`}
                  onClick={(e) => toggleAccordion(e)}
                >
                  <BusinessInfo>
                    <ContentInfo className='info'>
                      <h2>{business?.name}</h2>
                      <div>
                        {handleStoreRedirect && !isCartOnProductsList && !isStore && (
                          <span
                            ref={businessStore}
                            onClick={() => handleStoreRedirect(business?.slug)}
                            className='go-store'
                          >
                            {(windowSize.width < 576) ? (
                              <BiStoreAlt />
                            ) : (
                              <>{t('GO_TO_STORE', 'Go to store')}</>
                            )}
                          </span>
                        )}
                        {!isClosed && !!isProducts && !isCartPending && !isStore && (
                          <span
                            ref={businessDelete}
                            onClick={() => handleClearProducts()}
                            className='clear-cart'
                          >
                            {(windowSize.width < 576) ? (
                              <AiOutlineDelete />
                            ) : (
                              <>{t('CLEAR_CART', 'Clear cart')}</>
                            )}
                          </span>
                        )}
                        {isStore && (
                          <span onClick={handleChangeStore} className='change-store'>{t('CHANGE_STORE', 'Change store')}</span>
                        )}
                      </div>
                    </ContentInfo>
                  </BusinessInfo>
                  {!isClosed && !!isProducts && (
                    <BusinessTotal className='total' isCartOnProductsList={isCartOnProductsList}>
                      {isValidProducts && orderTotal > 0 && <p>{parsePrice(orderTotal)}</p>}
                      <p>{t('CART_TOTAL', 'Total')}</p>
                    </BusinessTotal>
                  )}
                  {isClosed && (
                    <BusinessTotal className='closed'>
                      <p>{t('CLOSED', 'Closed')} {moment}</p>
                    </BusinessTotal>
                  )}

                  {!isClosed && !isProducts && (
                    <BusinessTotal>
                      <p>{t('NO_PRODUCTS', 'No products')}</p>
                    </BusinessTotal>
                  )}

                  <BusinessActions>
                    {!isClosed && !!isProducts && (
                      <span>
                        <TiArrowSortedDown className={`${setRotate}`} />
                      </span>
                    )}
                  </BusinessActions>
                </Accordion>
              )}
            </>

          )
        }
        <AccordionContent
          ref={content}
          style={{ minHeight: `${setHeight}`, maxHeight: !setActive && '0px' }}
        >
          {props.children}
        </AccordionContent>
      </AccordionSection>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
