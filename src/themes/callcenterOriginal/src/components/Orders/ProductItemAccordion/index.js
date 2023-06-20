import React, { useState, useRef } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import IosArrowUp from '@meronex/icons/ios/IosArrowUp'
import VscTrash from '@meronex/icons/vsc/VscTrash'
import { useUtils, useLanguage, useOrder, useConfig } from 'ordering-components'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

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
  ScheduleInfoWrapper,
  ScheduleInfo
} from './styles'

export const ProductItemAccordion = (props) => {
  const {
    isCartProduct,
    product,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    onDeleteProduct,
    onEditProduct,
    currency
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parsePrice, optimizeImage, parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const windowSize = useWindowSize()

  const [setActive, setActiveState] = useState('active')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon rotate')

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
      setActive === 'active' ? `${content.current.scrollHeight}px` : '0px'
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
    if (name !== 'No') {
      const pos = position ? `(${position})` : ''
      return price > 0 ? `${name} ${pos} ${parsePrice(quantity * price, { currency: currency })}` : `${name} ${pos}`
    } else {
      return 'No'
    }
  }

  const getProductPrice = (product) => {
    let subOptionPrice = 0
    if (Array.isArray(product.options)) {
      if (product.options?.length > 0) {
        for (const option of product.options) {
          for (const suboption of option.suboptions) {
            subOptionPrice += suboption.quantity * suboption.price
          }
        }
      }
    }

    const price = product.quantity * (product.price + subOptionPrice)
    return parseFloat(price.toFixed(2))
  }

  return (
    <AccordionSection>
      <Accordion
        isValid={product?.valid ?? true}
        className={`product accordion ${setActive}`}
        onClick={(e) => toggleAccordion(e)}
      >
        <ProductInfo>
          {product?.images && (
            <WrapperProductImage>
              <ProductImage bgimage={optimizeImage(product?.images, 'h_100,c_limit')} />
            </WrapperProductImage>
          )}
          {product?.calendar_event ? (
            <ScheduleInfoWrapper>
              <h3>{product.name}</h3>
              <ScheduleInfo>
                <span>
                  {parseDate(product?.calendar_event?.start, { outputFormat: (configs?.format_time?.value === '12') ? 'hh:mm a' : 'HH:mm' })}
                  {' '}-{' '}
                  {parseDate(product?.calendar_event?.end, { outputFormat: (configs?.format_time?.value === '12') ? 'hh:mm a' : 'HH:mm' })}
                </span>
              </ScheduleInfo>
            </ScheduleInfoWrapper>
          ) : (
            <>
              {isCartProduct ? (
                <ProductSelect
                  ref={productSelect}
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
              <ContentInfo>
                <h3>{product.name}</h3>
                {windowSize.width <= 410 && (
                  <span>
                    <p>{parsePrice(getProductPrice(product), { currency: currency })}</p>
                    {isCartProduct && (
                      <div>
                        {onEditProduct && (
                          <span ref={productActionsEdit}>
                            <TiPencil color='#F2BB40' onClick={() => onEditProduct(product)} />
                          </span>
                        )}
                        {onDeleteProduct && (
                          <span ref={productActionsDelete}>
                            <VscTrash color='#D81212' onClick={() => onDeleteProduct(product)} />
                          </span>
                        )}
                      </div>
                    )}
                  </span>
                )}
              </ContentInfo>
            </>
          )}
        </ProductInfo>

        {(product?.valid || !isCartProduct) && windowSize.width > 410 && (
          <ProductPriceSection>
            <ProductPrice>
              <span>
                {parsePrice(getProductPrice(product), { currency: currency })}
              </span>
              {(productInfo().ingredients?.length > 0 || productInfo().options?.length > 0 || product.comment) && (
                <p>
                  <IosArrowUp className={`${setRotate}`} />
                </p>
              )}
            </ProductPrice>
            {isCartProduct && (
              <ProductActions>
                <ProductActionsEdit
                  ref={productActionsEdit}
                  onClick={() => onEditProduct(product)}
                  disabled={orderState.loading}
                >
                  <TiPencil color='#F2BB40' />
                </ProductActionsEdit>
                <ProductActionsDelete
                  ref={productActionsDelete}
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
                ref={productActionsEdit}
                onClick={() => onEditProduct(product)}
                disabled={orderState.loading}
              >
                <TiPencil color='#F2BB40' />
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
              {t('PRODUCT_QUANTITY_ERROR', 'Not available')}
            </ProductNotAvailable>
          </ProductError>
        )}

        {!product?.valid_menu && isCartProduct && (
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
              {t('PRODUCT_QUANTITY_ERROR', 'Not available')}
            </ProductNotAvailable>
          </ProductError>
        )}
      </Accordion>

      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {productInfo().ingredients?.length > 0 && productInfo().ingredients.some(ingredient => !ingredient.selected) && (
          <ProductOptionsList>
            <p>{t('INGREDIENTS', 'Ingredients')}</p>
            {productInfo().ingredients.map((ingredient) => !ingredient.selected && (
              <li className='ingredient' key={ingredient.id}>
                <span>{t('NO', 'No')} {ingredient.name}</span>
              </li>
            ))}
          </ProductOptionsList>
        )}
        {productInfo().options?.length > 0 && (
          <ProductOptionsList>
            {Array.isArray(productInfo().options) && productInfo().options.map((option, i) => (
              <li key={i}>
                <p>{option.name}</p>
                <ProductOptionsList className='suboption'>
                  {option.suboptions.map(suboption => (
                    <React.Fragment key={suboption.id}>
                      <li>
                        <span>
                          {getFormattedSubOptionName({
                            quantity: suboption.quantity,
                            name: suboption.name,
                            position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                            price: suboption.price
                          })}
                        </span>
                      </li>
                    </React.Fragment>
                  ))}
                </ProductOptionsList>
              </li>
            ))}
          </ProductOptionsList>
        )}
        {product.comment && (
          <ProductComment>
            <p>{t('COMMENT', 'Comment')}</p>
            <h3>{product.comment}</h3>
          </ProductComment>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}
