import React, { useState, useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'

import { formatPrice } from '../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperBusinessLogo,
  BusinessLogo,
  ContentInfo
} from './styles'

export const BusinessItemAccordion = (props) => {
  const {
    isClosed,
    moment,
    business,
    orderTotal
  } = props

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    if (isClosed) return
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : '500px'
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <AccordionSection isClosed={isClosed}>
      <Accordion isClosed={isClosed} className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className='info'>
          {business.logo && (
            <WrapperBusinessLogo>
              <BusinessLogo bgimage={business.logo} />
            </WrapperBusinessLogo>
          )}
          <ContentInfo>
            <h1>{business.name}</h1>
          </ContentInfo>
        </div>
        <div className='total'>
          <span>{formatPrice(orderTotal)}</span>
          <p>
            <BiCaretDown className={`${setRotate}`} />
          </p>
        </div>
        {isClosed && (<span className='closed'>Closed at {moment}</span>)}
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
