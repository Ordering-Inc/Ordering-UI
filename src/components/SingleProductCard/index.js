import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo
} from './styles'

export const SingleProductCard = (props) => {
  const {
    product,
    isSkeleton
  } = props

  const formatPrice = (price) => `$ ${price.toFixed(2)}`

  return (
    <CardContainer>
      <CardInfo>
        {product?.name ? (<h1>{product?.name}</h1>) : (<Skeleton width={100} />)}
        {(product?.description || isSkeleton) && <p>{product?.description || <Skeleton width={100} />}</p>}
        {product?.price ? (
          <span>{formatPrice(product?.price)}</span>
        ) : (
          <Skeleton width={100} />
        )}
      </CardInfo>
      {product?.images ? (
        <WrapLogo>
          <CardLogo image={product?.images} />
        </WrapLogo>
      ) : (
        <Skeleton height={75} width={75} />
      )}
    </CardContainer>
  )
}
