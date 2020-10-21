import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown, FiClock, BiStoreAlt, VscTrash } from 'react-icons/all'
import { useOrder, useLanguage, useEvent } from 'ordering-components'

import { formatPrice, convertHoursToMinutes } from '../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperBusinessLogo,
  BusinessLogo,
  ContentInfo,
  BusinessInfo,
  BusinessTotal,
  BusinessActions
} from './styles'

export const BusinessItemAccordion = (props) => {
  const {
    isClosed,
    moment,
    business,
    orderTotal,
    isProducts,
    isValidProducts,
    handleClearProducts,
    handleStoreRedirect
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)

  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e.target) || businessDelete.current?.contains(e.target)
    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const activeAccordion = () => {
    setActiveState('active')
    setHeightState(`${content.current.scrollHeight}px`)
    setRotateState('accordion__icon rotate')
  }

  const handleOpenPopoverByEvent = (product, cart) => {
    if (cart.business?.slug === business?.slug) {
      activeAccordion()
    }
  }

  useEffect(() => {
    events.on('cart_product_added', handleOpenPopoverByEvent)
    return () => events.off('cart_product_added', handleOpenPopoverByEvent)
  }, [])

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength === 1) {
      activeAccordion()
    }
  }, [orderState?.carts])

  return (
    <AccordionSection isClosed={isClosed}>
      <Accordion
        isClosed={isClosed}
        className={`accordion ${setActive}`}
        onClick={(e) => toggleAccordion(e)}
      >
        <BusinessInfo>
          {business?.logo && (
            <WrapperBusinessLogo>
              <BusinessLogo bgimage={business?.logo} />
            </WrapperBusinessLogo>
          )}
          <ContentInfo>
            <h1>{business?.name}</h1>
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
          </ContentInfo>
        </BusinessInfo>

        {!isClosed && !!isProducts && (
          <BusinessTotal>
            {isValidProducts && orderTotal > 0 && <p>{formatPrice(orderTotal)}</p>}
            <p>{t('CART_TOTAL', 'Total')}</p>
          </BusinessTotal>
        )}

        {isClosed && (
          <BusinessTotal>
            <p>Closed {moment}</p>
          </BusinessTotal>
        )}

        {!isClosed && !isProducts && (
          <BusinessTotal>
            <p>No Products</p>
          </BusinessTotal>
        )}

        <BusinessActions>
          <span
            ref={businessStore}
            onClick={() => handleStoreRedirect(business?.slug)}
          >
            <BiStoreAlt color='#CCC' />
          </span>
          {!isClosed && !!isProducts && (
            <>
              <span
                ref={businessDelete}
                onClick={() => handleClearProducts()}
              >
                <VscTrash color='#D81212' />
              </span>
              <span>
                <IoIosArrowDown className={`${setRotate}`} />
              </span>
            </>
          )}
        </BusinessActions>
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ minHeight: `${setHeight}`, maxHeight: !setActive && '0px' }}
      >
        {props.children}
      </AccordionContent>
    </AccordionSection>
  )
}
