import React, { useState, useRef } from 'react'
import BsPencil from '@meronex/icons/bs/BsPencil'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import { useUtils, useLanguage, useOrder } from 'ordering-components'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

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
  ProductQuantity,
  ProductSelectWrapper
} from './styles'

export const ProductItemAccordion = (props) => {
  const {
    isCartPending,
    isCartProduct,
    product,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    onDeleteProduct,
    onEditProduct,
    isCheckout
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parsePrice }] = useUtils()
  const windowSize = useWindowSize()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)
  const productSelect = useRef(null)
  const productActionsEdit = useRef(null)
  const productActionsDelete = useRef(null)

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

  const toggleAccordion = (e) => {
    const isActionsClick = productSelect.current?.contains(e.target) || productActionsEdit.current?.contains(e.target) || productActionsDelete.current?.contains(e.target)
    if ((!product?.valid_menu && isCartProduct) || isActionsClick) return
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
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection isCheckout={isCheckout}>
        <Accordion
          isValid={product?.valid ?? true}
          className={`product accordion ${setActive}`}
          onClick={(e) => toggleAccordion(e)}
        >
          <ProductInfo className='info'>
            {product?.images && (
              <WrapperProductImage>
                <ProductImage bgimage={product?.images} />
              </WrapperProductImage>
            )}
            {isCartProduct && !isCartPending && getProductMax ? (
              <ProductSelectWrapper>
                <IosArrowDown />
                <ProductSelect
                  ref={productSelect}
                  value={product.quantity}
                  isCheckout={isCheckout}
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
              </ProductSelectWrapper>
            ) : (
              <ProductQuantity>
                {product?.quantity}
              </ProductQuantity>
            )}

            <ContentInfo>
              <div>
                <h3>{product.name}</h3>
                {
                  product?.comment && (
                    <p>{product?.comment}</p>
                  )
                }
              </div>
              {windowSize.width <= 410 && (
                <span>
                  <p>{parsePrice(product.total || product.price)}</p>
                  {isCartProduct && !isCartPending && (
                    <div>
                      {onEditProduct && (
                        <span ref={productActionsEdit}>
                          <BsPencil color='#B1BCCC' onClick={() => onEditProduct(product)} />
                        </span>
                      )}
                      {onDeleteProduct && (
                        <span ref={productActionsDelete}>
                          <VscTrash color='#B1BCCC' onClick={() => onDeleteProduct(product)} />
                        </span>
                      )}
                    </div>
                  )}
                </span>
              )}
            </ContentInfo>
          </ProductInfo>

          {(product?.valid || !isCartProduct) && windowSize.width > 410 && (
            <ProductPriceSection>
              <ProductPrice className='prod-price'>
                <span>
                  {parsePrice(product.total || product.price)}
                </span>
                {(productInfo().ingredients.length > 0 || productInfo().options.length > 0 || product.comment) && (
                  <p>
                    <IosArrowDown className={`${setRotate}`} />
                  </p>
                )}
              </ProductPrice>
              {isCartProduct && !isCartPending && (
                <ProductActions>
                  <ProductActionsEdit
                    ref={productActionsEdit}
                    onClick={() => onEditProduct(product)}
                    disabled={orderState.loading}
                  >
                    <BsPencil color='#B1BCCC' />
                  </ProductActionsEdit>
                  <ProductActionsDelete
                    ref={productActionsDelete}
                    onClick={() => onDeleteProduct(product)}
                    disabled={orderState.loading}
                  >
                    <VscTrash color='#B1BCCC' />
                  </ProductActionsDelete>
                </ProductActions>
              )}
            </ProductPriceSection>
          )}

          {isCartProduct && !isCartPending && product?.valid_menu && !product?.valid_quantity && (
            <ProductError>
              <ProductActions>
                <ProductActionsEdit
                  ref={productActionsEdit}
                  onClick={() => onEditProduct(product)}
                  disabled={orderState.loading}
                >
                  <BsPencil color='#F2BB40' />
                </ProductActionsEdit>
                <ProductActionsDelete
                  ref={productActionsDelete}
                  onClick={() => onDeleteProduct(product)}
                  disabled={orderState.loading}
                >
                  <VscTrash color='#D81212' />
                </ProductActionsDelete>
              </ProductActions>
              <ProductNotAvailable>
                {t('NOT_AVAILABLE', 'Not available')}
              </ProductNotAvailable>
            </ProductError>
          )}

          {!product?.valid_menu && isCartProduct && !isCartPending && (
            <ProductError>
              <ProductActions>
                <ProductActionsDelete
                  ref={productActionsDelete}
                  onClick={() => onDeleteProduct(product)}
                  disabled={orderState.loading}
                >
                  <VscTrash color='#D81212' />
                </ProductActionsDelete>
              </ProductActions>
              <ProductNotAvailable>
                {t('NOT_AVAILABLE', 'Not available')}
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
                            price: parsePrice(suboption.price)
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
