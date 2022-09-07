import React from 'react'
import { useLanguage } from 'ordering-components'
import { SingleProductCard } from '../SingleProductCard'
import {
  Container,
  ContentHeader,
  ProductListWrapper,
  ProductList
} from './styles'
import { AutoScroll } from '../AutoScroll'

export const OrderItAgain = (props) => {
  const {
    onProductClick,
    isGroceries,
    productList,
    businessId
  } = props

  const [, t] = useLanguage()

  return (
    <Container isGroceries={isGroceries}>
      <ContentHeader isGroceries={isGroceries}>
        <h2>{t('ORDER_IT_AGAIN', 'Order it again')}</h2>
        <p>{t('ORDER_IT_AGAIN_DESC', 'Quickly add items from your past orders.')}</p>
      </ContentHeader>
      <ProductListWrapper>
        <ProductList>
          <AutoScroll scrollId='orderItAgain'>
            {productList.map((product, i) => (
              <SingleProductCard
                key={i}
                isSoldOut={product.inventoried && !product.quantity}
                businessId={businessId}
                product={product}
                onProductClick={onProductClick}
                isPreviously
              />
            ))}
          </AutoScroll>
        </ProductList>
      </ProductListWrapper>
    </Container>
  )
}
