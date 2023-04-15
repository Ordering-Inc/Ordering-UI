import React, { useState, useRef, useEffect } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import { useUtils, useLanguage, useOrder } from 'ordering-components'
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
  ProductPrice,
  ProductNotAvailable,
  ProductOptionsList,
  ProductQuantity,
  CartActions
} from './styles'
export const ProductItemAccordion = (props) => {
  const {
    isCartPending,
    isCartProduct,
    isSidebar,
    product,
    changeQuantity,
    getProductMax,
    onDeleteProduct,
    onEditProduct
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [productQuantity, setProductQuantity] = useState(1)
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
    if (parseInt(value) <= 0) {
      onDeleteProduct(product)
    } else {
      changeQuantity(product, parseInt(value))
    }
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    const pos = position ? `(${position})` : ''
    return `${quantity} x ${name} ${pos} +${price}`
  }

  const Increment = () => {
    let _productQuantity = productQuantity
    _productQuantity++
    setProductQuantity(_productQuantity)
    handleChangeQuantity(_productQuantity)
  }

  const Decrement = () => {
    let _productQuantity = productQuantity
    _productQuantity--
    setProductQuantity(_productQuantity)
    handleChangeQuantity(_productQuantity)
  }

  useEffect(() => {
    setProductQuantity(product.quantity)
  }, [product])

  useEffect(() => {
    if (props?.individualBusinessCart || props?.isOrderPage) {
      setActiveState('active')
      setHeightState(`${content.current.scrollHeight}px`)
      setRotateState('accordion__icon rotate')
    } else {
      setActiveState('')
      setHeightState('0px')
      setRotateState('accordion__icon')
    }
  }, [props?.individualBusinessCart, props?.isOrderPage])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection>
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
            <ContentInfo isSidebar={isSidebar}>
              <h3>
                {!(isCartProduct && !isCartPending && getProductMax) && (
                  <ProductQuantity>
                    {product?.quantity}
                  </ProductQuantity>
                )}
                {product.name}
              </h3>
              {(product?.valid || !isCartProduct) && (
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
              )}
            </ContentInfo>
          </ProductInfo>
          {isCartProduct && !isCartPending && product?.valid_menu && !product?.valid_quantity && (
            <ProductError>
              <ProductActions>
                <ProductActionsEdit
                  ref={productActionsEdit}
                  onClick={() => onEditProduct(product)}
                  disabled={orderState.loading}
                >
                  <TiPencil color='#6C757D' />
                </ProductActionsEdit>
                <ProductActionsDelete
                  ref={productActionsDelete}
                  onClick={() => onDeleteProduct(product)}
                  disabled={orderState.loading}
                >
                  <VscTrash color='#6C757D' />
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
                  <VscTrash color='#6C757D' />
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
              <span>{product.comment}</span>
            </ProductComment>
          )}
        </AccordionContent>
        <CartActions>
          {isCartProduct && !isCartPending && getProductMax && (
            <>
              {
                product && getProductMax(product) > 0 && (
                  <div className='incdec-control'>
                    <FiMinusCircle
                      onClick={Decrement}
                      className={`${productQuantity <= 1 ? 'disabled' : ''}`}
                    />
                    <span>{productQuantity}</span>
                    <FiPlusCircle
                      onClick={Increment}
                      className={`${getProductMax(product) <= 0 || product.quantity >= getProductMax(product) ? 'disabled' : ''}`}
                    />
                  </div>
                )
              }
            </>
          )}
          {isCartProduct && !isCartPending && (
            <ProductActions>
              <ProductActionsEdit
                ref={productActionsEdit}
                onClick={() => onEditProduct(product)}
                disabled={orderState.loading}
              >
                <TiPencil color='#6C757D' />
              </ProductActionsEdit>
              <ProductActionsDelete
                ref={productActionsDelete}
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              >
                <VscTrash color='#6C757D' />
              </ProductActionsDelete>
            </ProductActions>
          )}
        </CartActions>
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
