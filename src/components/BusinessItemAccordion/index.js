import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown, FiClock, BiStoreAlt, VscTrash } from 'react-icons/all'
import { useOrder, useLanguage } from 'ordering-components'

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

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    if (isClosed || !isProducts) return
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : '500px'
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength === 1) {
      setActiveState('active')
      setHeightState('500px')
      setRotateState('accordion__icon rotate')
    }
  }, [orderState?.carts])

  return (
    <AccordionSection isClosed={isClosed}>
      <Accordion isClosed={isClosed} className={`accordion ${setActive}`}>
        <BusinessInfo onClick={toggleAccordion}>
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
          <BusinessTotal onClick={toggleAccordion}>
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
          <BiStoreAlt onClick={() => handleStoreRedirect(business?.slug)} />
          {!isClosed && !!isProducts && (
            <>
              <VscTrash onClick={() => handleClearProducts()} />
              <IoIosArrowDown onClick={toggleAccordion} className={`${setRotate}`} />
            </>
          )}
        </BusinessActions>
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {props.children}
      </AccordionContent>
    </AccordionSection>
  )
}
