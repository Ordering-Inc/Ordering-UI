import React from 'react'
import { useLanguage } from 'ordering-components'
import { SingleProductCard } from '../SingleProductCard'
import { TaxInformationContainer, ProductContainer } from './styles'

export const TaxInformation = (props) => {
  const {
    tax,
    products
  } = props

  const [, t] = useLanguage()

  return (
    <TaxInformationContainer>
      <h2>{t('OTHER_PRODUCTS_WITH_SAME_TAX', 'Other products with the same Tax')}</h2>
      <ProductContainer>
        {products.filter(product => product.tax?.id ? product.tax?.id === tax.id : tax.id === null).map(product => (
          <SingleProductCard
            key={product.id}
            product={product}
            isModal
          />
        ))}
      </ProductContainer>
    </TaxInformationContainer>
  )
}
