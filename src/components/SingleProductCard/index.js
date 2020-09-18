import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { optimizeImage, formatPrice } from '../../utils'

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
          <CardLogo bgimage={optimizeImage(product?.images, 'h_200,c_limit')} />
        </WrapLogo>
      ) : (
        <Skeleton height={75} width={75} />
      )}
    </CardContainer>
  )
}
