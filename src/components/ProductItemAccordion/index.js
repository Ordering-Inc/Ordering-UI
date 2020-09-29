import React, { useState, useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperProductImage,
  ProductImage,
  ContentInfo
} from './styles'

export const ProductItemAccordion = (props) => {
  const {
    product,
    formatPrice
  } = props

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <AccordionSection>
      <Accordion className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className='info'>
          <p>{product.quantity}</p>
          <p>
            <BiCaretDown className={`${setRotate}`} />
          </p>
          <WrapperProductImage>
            <ProductImage bgimage={product.images} />
          </WrapperProductImage>
          <ContentInfo>
            <h1>{product.name}</h1>
            {product.ingredients.length > 0 && <span>{product.ingredients[0].name}</span>}
          </ContentInfo>
        </div>
        <div className='price'>
          <span>{formatPrice(product.price)}</span>
        </div>
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {product.ingredients.length > 0 && (
          <div>
            <h3>Ingredients</h3>
            {product.ingredients.map(ingredient => (
              <span key={ingredient.id}>{ingredient.name}</span>
            ))}
          </div>
        )}
        {product.options.length > 0 && (
          <div>
            <h3>Options</h3>
            <ul>
              {product.options.map(option => (
                <li key={option.id}>
                  <span>{option.name}:</span>&nbsp;
                  {option.suboptions.map(suboption => (
                    <span key={suboption.id}>
                      {suboption.name} {'->'} {suboption.position}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}
