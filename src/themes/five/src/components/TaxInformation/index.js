import React from 'react'
import { useLanguage } from 'ordering-components'
import { SingleProductCard } from '../SingleProductCard'
import { TaxInformationContainer, ProductContainer } from './styles'

export const TaxInformation = (props) => {
  const {
    data,
    products,
    type
  } = props

  const [, t] = useLanguage()

  const includedOnPriceString = data?.type === 1 ? `(${t('INCLUDED_ON_PRICE', 'Included on price')})` : `(${t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})`

  const getFilterValidation = (product) => {
    return (
      type === 'tax'
        ? (product.tax?.id ? product.tax?.id === data?.id : product.tax?.id === null && data?.id === null)
        : type === 'fee'
          ? (product.fee?.id ? product.fee?.id === data?.id : (product.fee?.id === null && data?.id === null))
          : Object.keys(data?.discounts ?? {}).find(code => code.includes(product?.code))
    )
  }

  const getTypeString = () => {
    return (
      type === 'offer_target_1'
        ? t('PRODUCT_DISCOUNT', 'Product discount')
        : type === 'tax'
          ? t('TAX', 'Tax')
          : t('Fee', 'Fee')
    )
  }

  return (
    <TaxInformationContainer>
      {data?.description ? (
        <h2>
          {t('DESCRIPTION', 'Description')}: {data?.description} {data?.type && !type.includes('offer') && includedOnPriceString}
        </h2>
      ) : (
        <h2>
          {t('WITHOUT_DESCRIPTION', 'Without description')}
        </h2>
      )}
      {!(type === 'offer_target_2' || type === 'offer_target_3') && (
        <>
          <h3>{t('OTHER_PRODUCTS_WITH_THIS', 'Other products with this')} {getTypeString()}:</h3>
          <ProductContainer>
            {
              products.filter(product => getFilterValidation(product)).map(product => (
                <SingleProductCard
                  key={product.id}
                  product={product}
                  isModal
                />
              ))
            }
          </ProductContainer>
        </>
      )}
    </TaxInformationContainer>
  )
}
