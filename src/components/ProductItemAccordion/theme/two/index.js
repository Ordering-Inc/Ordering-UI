import React, { useState, useRef } from 'react'
import TiPencil from '@meronex/icons/ti/TiPencil'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import MdClose from '@meronex/icons/md/MdClose'
import { Cart as CartController, useUtils, useLanguage, useOrder } from 'ordering-components'
import { Confirm } from '../../../Confirm/theme/two'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  // WrapperProductImage,
  // ProductImage,
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
  // ProductSelect,
  ProductOptionsList,
  ProductQuantity
} from './styles'

const ProductItemAccordionUI = (props) => {
  const {
    isCartPending,
    isCartProduct,
    product,
    // changeQuantity,
    // getProductMax,
    // offsetDisabled,
    // onDeleteProduct,
    onEditProduct,
    removeProduct
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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

  const onDeleteProduct = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    const pos = position ? `(${position})` : ''
    return `${quantity} x ${name} ${pos} +${price}`
  }

  return (
    <AccordionSection>
      <Accordion
        isValid={product?.valid ?? true}
        className={`product accordion ${setActive}`}
        onClick={(e) => toggleAccordion(e)}
      >
        <ProductInfo className='info'>
          <ProductQuantity>
            {product?.quantity} x
          </ProductQuantity>
          <ContentInfo>
            <h3>{product.name}</h3>
          </ContentInfo>
        </ProductInfo>

        {(product?.valid || !isCartProduct) && (
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
                <TiPencil color='#F2BB40' />
              </ProductActionsEdit>
              <ProductActionsDelete
                ref={productActionsDelete}
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              >
                <MdClose color='#D81212' />
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
      {isCartProduct && !isCartPending && (
        <ProductActions>
          {!product?.valid_menu && (
            <ProductNotAvailable>
              {t('NOT_AVAILABLE', 'Not available')}
            </ProductNotAvailable>
          )}
          <ProductActionsDelete
            ref={productActionsDelete}
            onClick={() => onDeleteProduct(product)}
            disabled={orderState.loading}
          >
            {/* <VscTrash color='#D81212' /> */}
            {t('REMOVE', 'Remove')}
          </ProductActionsDelete>
        </ProductActions>
      )}
      <Confirm
        title={t('PRODUCT', 'Product')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </AccordionSection>
  )
}

export const ProductItemAccordion = (props) => {
  const cartProps = {
    ...props,
    UIComponent: ProductItemAccordionUI
  }

  return (
    <CartController {...cartProps} />
  )
}
