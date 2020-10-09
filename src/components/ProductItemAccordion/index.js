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
    onDeleteProduct,
    onEditProduct
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const productInfo = () => {
    if (isCartProduct) {
      const ingredients = Object.values(product.ingredients ?? {})
      let options = Object.values(product.options ?? {})

      options = options.map(option => {
        option.suboptions = Object.values(option.suboptions ?? {})
        return option
      })
      return {
        ...productInfo,
        ingredients,
        options
      }
    }
    return product
  }

  const toggleAccordion = () => {
    if (!product?.valid_menu && isCartProduct) return
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

  return (
    <AccordionSection>
      <Accordion isValid={product?.valid ?? true} className={`accordion ${setActive}`}>
        <div className='info' onClick={toggleAccordion}>
          <p>{product.quantity}</p>
          <WrapperProductImage>
            <ProductImage bgimage={product.images || 'https://picsum.photos/78/80'} />
          </WrapperProductImage>
          <ContentInfo>
            <h1 className='name'>{product.name}</h1>
            {product.comment && (<span>{product.comment}</span>)}
          </ContentInfo>
        </div>
        {!product?.valid_menu && isCartProduct && (
          <div className='error'>
            <div className='actions'>
              <span
                className='delete'
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              >
                <VscTrash />
              </span>
            </div>
            <span style={{ color: '#D81313' }}>{t('PRODUCT_QUANTITY_ERROR', 'Not available')}</span>
          </div>
        )}
        {isCartProduct && product?.valid_menu && !product?.valid_quantity && (
          <div className='error'>
            <div className='actions'>
              <span
                className='edit'
                onClick={() => onEditProduct(product)}
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
            <span style={{ color: '#D81313' }}>{t('PRODUCT_QUANTITY_ERROR', 'Not available')}</span>
          </div>
        )}
        {(product?.valid || !isCartProduct) && (
          <div className='price'>
            {isCartProduct && (
              <div className='actions'>
                <span
                  className='edit'
                  onClick={() => onEditProduct(product)}
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
              <span className='product-price'>{formatPrice(product.total || product.price)}</span>
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
        {isCartProduct && (
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
        )}
        {productInfo().ingredients.length > 0 && (
          <ul>
            {productInfo().ingredients.map(ingredient => (
              <li key={ingredient.id}>
                <span>{ingredient.name}</span>
              </li>
            ))}
          </ul>
        )}
        {productInfo().options.length > 0 && (
          <ul>
            {productInfo().options.map(option => (
              <li key={option.id}>
                <span style={{ fontWeight: 'bold' }}>{option.name}</span>
                <ul>
                  {option.suboptions.map(suboption => (
                    <li key={suboption.id}>
                      {suboption.name} {`[${suboption.position}]`}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}
