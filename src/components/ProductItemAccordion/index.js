import React, { useState, useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { VscTrash } from 'react-icons/vsc'
import { useLanguage, useOrder } from 'ordering-components'

import { Button } from '../../styles/Buttons'

import { formatPrice } from '../../utils'

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
    isCartProduct,
    product,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()

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
    <AccordionSection isValid={product?.valid ?? true}>
      <Accordion className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className='info'>
          <p>{product.quantity}</p>
          <WrapperProductImage>
            <ProductImage bgimage={product.images || 'https://picsum.photos/1418/1422'} />
          </WrapperProductImage>
          <ContentInfo>
            <h1>{product.name}</h1>
            {product.comment && (<span>{product.comment}</span>)}
          </ContentInfo>
        </div>
        {product.valid === false ? (
          <div className='error'>
            <span>
              <VscTrash />
            </span>
            {(!product.valid_menu || !product.valid_quantity) && (
              !product.valid_menu ? (
                <span style={{ color: '#D81313' }}>{t('PRODUCT_MENU_ERROR', 'Menu error')}</span>
              ) : (
                <span style={{ color: '#D81313' }}>{t('PRODUCT_QUANTITY_ERROR', 'Not available')}</span>
              )
            )}
          </div>
        ) : (
          <div className='price'>
            {isCartProduct && (
              <span
                className='delete'
                onClick={() => removeProduct(product)}
                disabled={orderState.loading}
              >
                <VscTrash />
              </span>)}
            <div>
              <span>{formatPrice(product.total || product.price)}</span>
              <p>
                <BiCaretDown className={`${setRotate}`} />
              </p>
            </div>
          </div>
        )}
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {isCartProduct ? (
          <>
            <div>
              <Button
                color='primary'
                circle
                onClick={() => changeQuantity(product, product.quantity - 1)}
                disabled={orderState.loading || !product.valid}
              >-
              </Button>
              <select
                value={product.quantity}
                onChange={(e) => changeQuantity(product, parseInt(e.target.value))}
              >
                {[...Array(getProductMax(product) + 1).keys()].map((value, i) => (
                  <option
                    key={i}
                    value={i}
                    disabled={offsetDisabled(product) < i && i !== 0}
                  >
                    {i === 0 ? 'Remove' : i}
                  </option>
                ))}
              </select>
              <Button
                color='primary'
                circle
                onClick={() => changeQuantity(product, product.quantity + 1)}
                disabled={orderState.loading || !product.valid || getProductMax(product) === product.quantity}
              >+
              </Button>
            </div>
            {Object.keys(product.ingredients).length > 0 && (
              <ul>
                {Object.keys(product.ingredients).map(ingredient => (
                  <li key={product.ingredients[ingredient].id}>
                    <span>{product.ingredients[ingredient].name}</span>
                  </li>
                ))}
              </ul>
            )}
            {Object.keys(product.options).length > 0 && (
              <ul>
                {Object.keys(product.options).map(option => (
                  <li key={product.options[option].id}>
                    <span style={{ fontWeight: 'bold' }}>{product.options[option].name}:</span>&nbsp;
                    {Object.keys(product.options[option].suboptions).map(suboption => (
                      <span key={product.options[option].suboptions[suboption].id}>
                        {product.options[option].suboptions[suboption].name} {`[${product.options[option].suboptions[suboption].position}]`}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            {product.ingredients.length > 0 && (
              <ul>
                {product.ingredients.map(ingredient => (
                  <li key={ingredient.id}>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            )}
            {product.options.length > 0 && (
              <ul>
                {product.options.map(option => (
                  <li key={option.id}>
                    <span style={{ fontWeight: 'bold' }}>{option.name}:</span>&nbsp;
                    {option.suboptions.map(suboption => (
                      <span key={suboption.id}>
                        {suboption.name} {`[${suboption.position}]`}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}
