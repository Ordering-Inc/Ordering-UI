import React, { useState, useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { VscTrash } from 'react-icons/vsc'
import { TiPencil } from 'react-icons/ti'
import { useLanguage, useOrder } from 'ordering-components'

import { Button } from '../../styles/Buttons'

import { formatPrice } from '../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperProductImage,
  ProductImage,
  ContentInfo,
  ProductActions
} from './styles'

export const ProductItemAccordion = (props) => {
  const {
    isCartProduct,
    product,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    onDeleteProduct
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

  const handleChangeQuantity = (value) => {
    if (parseInt(value) === 0) {
      onDeleteProduct(product)
    } else {
      changeQuantity(product, parseInt(value))
    }
  }

  const onEditProduct = () => {
    // put here code for show productForm component for edit the product
  }

  return (
    <AccordionSection isValid={product?.valid ?? true}>
      <Accordion className={`accordion ${setActive}`}>
        <div className='info' onClick={toggleAccordion}>
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
              <div>
                <span
                  className='edit'
                  onClick={() => onEditProduct()}
                  disabled={orderState.loading}
                >
                  <TiPencil />
                </span>
                <span
                  className='delete'
                  onClick={() => onDeleteProduct(product)}
                  disabled={orderState.loading}
                >
                  <VscTrash />
                </span>
              </div>
            )}
            <div style={{ width: '100%', justifyContent: 'flex-end' }} onClick={toggleAccordion}>
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
            <ProductActions>
              <Button
                color='primary'
                circle
                onClick={() => handleChangeQuantity(product.quantity - 1)}
                disabled={orderState.loading || !product.valid}
              >-
              </Button>
              <select
                value={product.quantity}
                onChange={(e) => handleChangeQuantity(Number(e.target.value))}
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
            </ProductActions>
            {Object.keys(product.ingredients).length > 0 && (
              <ul>
                {Object.values(product.ingredients).map(ingredient => (
                  <li key={ingredient.id}>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            )}
            {Object.values(product.options).length > 0 && (
              <ul>
                {Object.values(product.options).map(option => (
                  <li key={option.id}>
                    <span style={{ fontWeight: 'bold' }}>{option.name}:</span>&nbsp;
                    {Object.values(option.suboptions).map(suboption => (
                      <span key={suboption.id}>
                        {suboption.name} {`[${suboption.position}]`}
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
