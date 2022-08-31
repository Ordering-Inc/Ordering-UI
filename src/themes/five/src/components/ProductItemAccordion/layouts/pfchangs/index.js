import React from 'react'
import { useUtils, useLanguage, useOrder } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import BsFillPersonFill from '@meronex/icons/bs/BsFillPersonFill';
import {
  AccordionSection,
  ContentInfo,
  ProductComment,
  ProductInfo,
  ProductError,
  ProductPrice,
  ProductNotAvailable,
  ProductOptionsList,
  ProductOptionsContainer,
  ProductTitle,
  PriceContainer
} from './styles'

export const ProductItemAccordion = (props) => {
  const {
    isCartPending,
    isCartProduct,
    product,
    onDeleteProduct,
    onEditProduct,
    isCheckout
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ parsePrice }] = useUtils()

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

  const getFormattedSubOptionName = ({ quantity, name, position, price, isLast }) => {
    const pos = position ? `(${position})` : ''
    return `${quantity} x ${name} ${pos} +${price}${isLast ? '' : ','}`
  }

  return (
    <AccordionSection isCheckout={isCheckout}>
      <ProductInfo className='info'>
        <ContentInfo>
          <ProductTitle>
            <div>
              {product?.quantity}
              <h3
                onClick={() => onEditProduct(product)}
              >
                {product.name}
              </h3>
            </div>
            <PriceContainer>
              <ProductPrice>{parsePrice(product.total || product.price)}</ProductPrice>
              <MdClose
                onClick={() => onDeleteProduct(product)}
                disabled={orderState.loading}
              />
            </PriceContainer>
          </ProductTitle>
          <ProductOptionsContainer>
            {productInfo().ingredients.length > 0 && productInfo().ingredients.some(ingredient => !ingredient.selected) && (
              <ProductOptionsList>
                <p>{t('INGREDIENTS', 'Ingredients')}:{' '}
                  {productInfo().ingredients.map(ingredient => !ingredient.selected && (
                    <React.Fragment key={ingredient.id}>
                      <span>{t('NO', 'No')} {ingredient.name}</span>
                    </React.Fragment>
                  ))}
                </p>
              </ProductOptionsList>
            )}
            {productInfo().options.length > 0 && (
              <ProductOptionsList>
                {productInfo().options.map(option => (
                  <p key={option.id}>
                    {option.suboptions.map(suboption => (
                      <React.Fragment key={suboption.id}>
                        {getFormattedSubOptionName({
                          quantity: suboption.quantity,
                          name: suboption.name,
                          position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                          price: parsePrice(suboption.price)
                        })}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
              </ProductOptionsList>
            )}
          </ProductOptionsContainer>
        </ContentInfo>
      </ProductInfo>

      {product.comment && (
        <ProductComment>
          <BsFillPersonFill />
          <p>{product.comment}</p>
        </ProductComment>
      )}

      {isCartProduct && !isCartPending && product?.valid_menu && !product?.valid_quantity && (
        <ProductError>
          <ProductNotAvailable>
            {t('NOT_AVAILABLE', 'Not available')}
          </ProductNotAvailable>
        </ProductError>
      )}

      {!product?.valid_menu && isCartProduct && !isCartPending && (
        <ProductError>
          <ProductNotAvailable>
            {t('NOT_AVAILABLE', 'Not available')}
          </ProductNotAvailable>
        </ProductError>
      )}
    </AccordionSection>
  )
}
