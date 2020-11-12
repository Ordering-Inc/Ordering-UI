import React, { useState, useRef, useEffect } from 'react'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import FiClock from '@meronex/icons/fi/FiClock'
import BiStoreAlt from '@meronex/icons/bi/BiStoreAlt'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import { useOrder, useLanguage, useUtils } from 'ordering-components'

import { convertHoursToMinutes } from '../../utils'

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
    uuid,
    currentCartUuid,
    isCheckout,
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
  const [{ parsePrice }] = useUtils()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)

  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e?.target) || businessDelete.current?.contains(e?.target)
    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const activeAccordion = (value) => {
    setActiveState(value ? 'active' : '')
    setHeightState(value ? `${content.current.scrollHeight}px` : '0px')
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon')
  }

  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength === 1 || currentCartUuid === uuid || isCheckout) {
      activeAccordion(true)
    } else {
      activeAccordion(false)
    }
  }, [orderState?.carts, currentCartUuid])

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
            <h2>{business?.name}</h2>
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
            {isValidProducts && orderTotal > 0 && <p>{parsePrice(orderTotal)}</p>}
            <p>{t('CART_TOTAL', 'Total')}</p>
          </BusinessTotal>
        )}

        {isClosed && (
          <BusinessTotal className='closed'>
            <p>{t('CLOSED', 'Cloed')} {moment}</p>
          </BusinessTotal>
        )}

        {!isClosed && !isProducts && (
          <BusinessTotal>
            <p>{t('NO_PRODUCTS', 'No products')}</p>
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
                <IosArrowDown className={`${setRotate}`} />
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
