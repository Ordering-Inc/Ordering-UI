import React from 'react'
import { useLanguage } from 'ordering-components'
import { SingleProductCard } from '../SingleProductCard'
import { TaxInformationContainer, ProductContainer } from './styles'

export const TaxInformation = (props) => {
  const {
    data,
    products
  } = props

  const [, t] = useLanguage()

  const isTax = typeof data?.rate === 'number'
  const TaxFeeString = isTax ? 'tax' : 'fee'
  const includedOnPriceString = data?.type === 1 ? `(${t('INCLUDED_ON_PRICE', 'Included on price')})` : `(${t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})`

  return (
    <TaxInformationContainer>
      {data?.description && (
        <h2>
          {t('DESCRIPTION', 'Description')}: {data?.description} {data?.type && includedOnPriceString}
        </h2>
      )}
      <h3>{t(`OTHER_PRODUCTS_WITH_THIS_${TaxFeeString.toUpperCase()}`, `Other products with this ${TaxFeeString}`)}:</h3>
      <ProductContainer>
        {
          products.filter(product => isTax ? (product.tax?.id ? product.tax?.id === data?.id : product.tax?.id === null && data?.id === null) : (product.fee?.id ? product.fee?.id === data?.id : (product.fee?.id === null && data?.id === null))).map(product => (
            <SingleProductCard
              key={product.id}
              product={product}
              isModal
            />
          ))
        }
      </ProductContainer>
    </TaxInformationContainer>
  )
}
