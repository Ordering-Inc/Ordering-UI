import React, { useState, useRef, useEffect } from 'react'
import TiArrowSortedUp from '@meronex/icons/ti/TiArrowSortedUp'
import { useOrder, useLanguage, useEvent, useUtils, useConfig } from 'ordering-components'
import { useTheme } from 'styled-components'
import FiClock from '@meronex/icons/fi/FiClock'
import {
  AccordionSection,
  Accordion,
  AccordionContent,
  ContentInfo,
  BusinessInfo,
  BusinessTotal,
  BusinessActions,
  PriceContainer,
  WrapperBusinessLogo,
  BusinessLogo,
  TimeContainer
} from './styles'
import { Button } from '../../styles/Buttons'
import { convertHoursToMinutes } from '../../../../../utils'

export const BusinessItemAccordion = (props) => {
  const {
    uuid,
    isCartPending,
    currentCartUuid,
    isCheckout,
    isClosed,
    moment,
    business,
    isProducts,
    isForceOpenAccordion,
    isCartOnProductsList,
    handleClearProducts,
    handleStoreRedirect,
    handleCartOpen,
    isStore,
    total,
    handleClickCheckout,
    checkoutButtonDisabled,
    setPreorderBusiness,
    handleChangeStore,
    isMultiCheckout
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ parsePrice }] = useUtils()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [cartProductUpdated, setCartProductUpdated] = useState(null)
  const isBusinessChangeEnabled = configs?.cart_change_business_validation?.value === '1'

  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)
  const changeStore = useRef(null)

  const viewString = isStore ? 'business_view' : 'header'
  const showBusinessLogo = !theme?.layouts?.[viewString]?.components?.cart?.components?.business?.components?.logo?.hidden
  const showBusinessTime = !theme?.layouts?.[viewString]?.components?.cart?.components?.business?.components?.time?.hidden

  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e?.target) || businessDelete.current?.contains(e?.target) || changeStore.current?.contains(e?.target)
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

  const handleOpenBusinessMenu = (business) => {
    setPreorderBusiness && setPreorderBusiness(business)
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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection isClosed={isClosed} isCartOnProductsList={isCartOnProductsList}>
        {
          !isCheckout && (
            <Accordion
              isClosed={isClosed}
              className={`accordion ${setActive}`}
              onClick={(e) => toggleAccordion(e)}
            >
              <BusinessInfo>
                {!showBusinessLogo && (
                  <WrapperBusinessLogo>
                    <BusinessLogo bgimage={business?.logo || theme.images?.dummies?.businessLogo} />
                  </WrapperBusinessLogo>
                )}
                <ContentInfo className='info' isStore={isStore}>
                  <h2>{business?.name}</h2>
                  {!showBusinessTime && (
                    <TimeContainer>
                      {orderState?.options?.type === 1 ? (
                        <span>
                          <FiClock />
                          {convertHoursToMinutes(business?.delivery_time)}
                        </span>
                      ) : (
                        <span>
                          <FiClock />
                          {convertHoursToMinutes(business?.pickup_time)}
                        </span>
                      )}
                    </TimeContainer>
                  )}
                  <div>
                    {handleStoreRedirect && !isCartOnProductsList && !isStore && (
                      <span
                        ref={businessStore}
                        onClick={() => isClosed ? handleOpenBusinessMenu(business) : handleStoreRedirect(business?.slug)}
                        className='go-store'
                      >
                        {t('GO_TO_STORE', 'Go to store')}
                      </span>
                    )}
                    {!isClosed && !!isProducts && !isCartPending && (
                      <>
                        {!isStore && <span>•</span>}
                        <span
                          ref={businessDelete}
                          onClick={() => handleClearProducts()}
                          className='clear-cart'
                        >
                          {t('CLEAR_CART', 'Clear cart')}
                        </span>
                      </>
                    )}
                  </div>
                  {isBusinessChangeEnabled && handleChangeStore && (
                    <span
                      ref={changeStore}
                      onClick={handleChangeStore}
                      className='change-store'
                    >
                      {t('CHANGE_STORE', 'Change store')}
                    </span>
                  )}
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
        <AccordionContent
          ref={content}
          style={{ minHeight: `${setHeight}`, maxHeight: !setActive && '0px' }}
        >
          {isBusinessChangeEnabled && isCheckout && handleChangeStore && (
            <BusinessInfo>
              <ContentInfo className='info'>
                <span
                  ref={changeStore}
                  onClick={handleChangeStore}
                  className='change-store'
                >
                  {t('CHANGE_STORE', 'Change store')}
                </span>
              </ContentInfo>
            </BusinessInfo>
          )}
          {props.children}
        </AccordionContent>
        {!setActive && !isClosed && !!isProducts && !checkoutButtonDisabled && !isMultiCheckout && (
          <PriceContainer>
            <h4>{parsePrice(total)}</h4>
            <Button onClick={handleClickCheckout} color='primary'>{t('CHECKOUT', 'Checkout')}</Button>
          </PriceContainer>
        )}
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
