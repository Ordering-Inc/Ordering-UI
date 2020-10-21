import React, { useState, useRef } from 'react'
import { TiPencil, IoIosArrowDown, VscTrash } from 'react-icons/all'
import { useLanguage, useOrder } from 'ordering-components'
import { useWindowSize } from '../../hooks/useWindowSize'

import { formatPrice } from '../../utils'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  WrapperProductImage,
  ProductImage,
  ContentInfo,
  ProductComment,
  ProductInfo,
  ProductError,
  ProductActions,
  ProductActionsEdit,
  ProductActionsDelete,
  ProductPriceSection,
  ProductPrice,
  ProductNotAvailable,
  ProductSelect,
  ProductOptionsList,
  ProductQuantity
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
  const windowSize = useWindowSize()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const productInfo = () => {
    if (isCartProduct) {
      const ingredients = JSON.parse(JSON.stringify(Object.values(product.ingredients ?? {})))
      let options = JSON.parse(JSON.stringify(Object.values(product.options ?? {})))

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

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    const pos = position ? `(${position})` : ''
    return `${quantity} x ${name} ${pos} +${price}`
  }

  return (
    <AccordionSection>
      <Accordion isValid={product?.valid ?? true} className={`accordion ${setActive}`}>
        <ProductInfo>
          {isCartProduct ? (
            <ProductSelect
              value={product.quantity}
              onChange={(e) => handleChangeQuantity(Number(e.target.value))}
            >
              {[...Array(getProductMax(product) + 1)].map((v, i) => (
                <option
                  key={i}
                  value={i}
                  disabled={offsetDisabled(product) < i && i !== 0}
                >
                  {i === 0 ? t('REMOVE', 'Remove') : i}
                </option>
              ))}
            </ProductSelect>
          ) : (
            <ProductQuantity>
              {product?.quantity}
            </ProductQuantity>
          )}
          <WrapperProductImage onClick={toggleAccordion}>
            <ProductImage bgimage={product.images || 'https://picsum.photos/78/80'} />
          </WrapperProductImage>
          <ContentInfo>
            <h3 onClick={toggleAccordion}>{product.name}</h3>
            {windowSize.width <= 410 && (
              <span>
                <p onClick={toggleAccordion}>{formatPrice(product.total || product.price)}</p>
                <div>
                  <TiPencil color='#F2BB40' onClick={() => onEditProduct(product)} />
                  <VscTrash color='#D81212' onClick={() => onDeleteProduct(product)} />
                </div>
              </span>
            )}
          </ContentInfo>
        </ProductInfo>

        {(product?.valid || !isCartProduct) && windowSize.width > 410 && (
          <ProductPriceSection>
            <ProductPrice onClick={toggleAccordion}>
              <span>
                {formatPrice(product.total || product.price)}
              </span>
              {(productInfo().ingredients.length > 0 || productInfo().options.length > 0 || product.comment) && (
                <p onClick={toggleAccordion}>
                  <IoIosArrowDown className={`${setRotate}`} />
                </p>
              )}
            </ProductPrice>
            {isCartProduct && (
              <ProductActions>
                <ProductActionsEdit
                  onClick={() => onEditProduct(product)}
                  disabled={orderState.loading}
                >
                  <TiPencil color='#F2BB40' />
                </ProductActionsEdit>
                <ProductActionsDelete
                  onClick={() => onDeleteProduct(product)}
                  disabled={orderState.loading}
                >
                  <VscTrash color='#D81212' />
                </ProductActionsDelete>
              </ProductActions>
            )}
          </ProductPriceSection>
        )}

        {isCartProduct && product?.valid_menu && !product?.valid_quantity && (
          <ProductError>
            <ProductActions>
              <ProductActionsEdit
                onClick={() => onEditProduct(product)}
                disabled={orderState.loading}
              >
                <TiPencil color='#F2BB40' />
              </ProductActionsEdit>
              <ProductActionsDelete
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              >
                <VscTrash color='#D81212' />
              </ProductActionsDelete>
            </ProductActions>
            <ProductNotAvailable>
              {t('PRODUCT_QUANTITY_ERROR', 'Not available')}
            </ProductNotAvailable>
          </ProductError>
        )}

        {!product?.valid_menu && isCartProduct && (
          <ProductError>
            <ProductActions>
              <ProductActionsDelete
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              >
                <VscTrash color='#D81212' />
              </ProductActionsDelete>
            </ProductActions>
            <ProductNotAvailable>
              {t('PRODUCT_QUANTITY_ERROR', 'Not available')}
            </ProductNotAvailable>
          </ProductError>
        )}
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {productInfo().ingredients.length > 0 && productInfo().ingredients.some(ingredient => !ingredient.selected) && (
          <ProductOptionsList>
            <p>{t('INGREDIENTS', 'Ingredients')}</p>
            {productInfo().ingredients.map(ingredient => !ingredient.selected && (
              <li className='ingredient' key={ingredient.id}>
                <span>{t('NO', 'No')} {ingredient.name}</span>
              </li>
            ))}
          </ProductOptionsList>
        )}
        {productInfo().options.length > 0 && (
          <ProductOptionsList>
            {productInfo().options.map(option => (
              <li key={option.id}>
                <p>{option.name}</p>
                <ProductOptionsList className='suboption'>
                  {option.suboptions.map(suboption => (
                    <li key={suboption.id}>
                      <span>
                        {getFormattedSubOptionName({
                          quantity: suboption.quantity,
                          name: suboption.name,
                          position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                          price: formatPrice(suboption.price)
                        })}
                      </span>
                    </li>
                  ))}
                </ProductOptionsList>
              </li>
            ))}
          </ProductOptionsList>
        )}
        {product.comment && (
          <ProductComment>
            <p>{t('SPECIAL_COMMENT', 'Special Comment')}</p>
            <h3>{product.comment}</h3>
          </ProductComment>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}
