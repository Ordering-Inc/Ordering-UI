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
    business
  } = props

  const [, t] = useLanguage()
  console.log(business?.previously_products)
  return (
    <Container>
      <ContentHeader isGroceries={isGroceries}>
        <h2>{t('ORDER_IT_AGAIN', 'Order it again')}</h2>
        <p>{t('ORDER_IT_AGAIN_DESC', 'Quickly add items from your past orders.')}</p>
      </ContentHeader>
      <ProductListWrapper>
        <ProductList>
          <AutoScroll scrollId='orderItAgain'>
            {business?.loading ? (
              Array(5).keys().map(i => (
                <SingleProductCard
                  key={i}
                  isSkeleton
                  isPreviously
                />
              ))
            ) : (
              business?.previously_products?.length > 0 && business?.previously_products?.map((product, i) => (
                <SingleProductCard
                  key={i}
                  isSoldOut={product.inventoried && !product.quantity}
                  businessId={business?.id}
                  product={product}
                  onProductClick={onProductClick}
                  isPreviously
                />
              ))
            )}
          </AutoScroll>
        </ProductList>
      </ProductListWrapper>
    </Container>
  )
}
