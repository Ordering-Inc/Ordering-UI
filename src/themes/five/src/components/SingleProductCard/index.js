import React, { useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils, SingleProductCard as SingleProductCardController } from 'ordering-components'
import { shape } from '../../../../../utils'
import { useIntersectionObserver } from '../../../../../hooks/useIntersectionObserver'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo,
  SoldOut,
  PriceWrapper,
  QuantityContainer,
  RibbonBox,
  TitleWrapper
} from './styles'

const SingleProductCardUI = (props) => {
  const {
    product,
    isSoldOut,
    isSkeleton,
    onProductClick,
    isCartOnProductsList,
    useCustomFunctionality,
    onCustomClick,
    customText,
    customStyle,
    productAddedToCartLength,
    handleFavoriteProduct
  } = props

  const [, t] = useLanguage()
  const [$element, isObserved] = useIntersectionObserver()
  const [stateConfig] = useConfig()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const theme = useTheme()
  const favoriteRef = useRef(null)

  const editMode = typeof product?.code !== 'undefined'

  const removeToBalance = editMode ? product?.quantity : 0

  const cartProducts = Object.values(orderState.carts).reduce((products, _cart) => [...products, ..._cart?.products], [])
  const productBalance = cartProducts.reduce((sum, _product) => sum + (_product.id === product?.id ? _product.quantity : 0), 0)

  const totalBalance = (productBalance || 0) - removeToBalance

  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  let maxCartProductInventory = (product?.inventoried ? product?.quantity : undefined) - totalBalance
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  const handleClickProduct = (e) => {
    if (favoriteRef?.current?.contains(e.target)) return

    (!isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product, product?.business?.slug)) ||
    (useCustomFunctionality && onCustomClick && onCustomClick())
  }

  const handleChangeFavorite = () => {
    handleFavoriteProduct && handleFavoriteProduct(!product?.favorite)
  }

  return (
    <CardContainer
      ref={$element}
      soldOut={isSoldOut || maxProductQuantity <= 0}
      onClick={handleClickProduct}
      isCartOnProductsList={isCartOnProductsList}
      style={useCustomFunctionality && customStyle}
      className='product-card'
    >
      {isObserved && (
        <>
          {!useCustomFunctionality && (
            <>
              {!isSkeleton && productAddedToCartLength > 0 && (
                <QuantityContainer>
                  <span>{productAddedToCartLength}</span>
                </QuantityContainer>
              )}
              <CardInfo soldOut={isSoldOut || maxProductQuantity <= 0}>
                <TitleWrapper>
                  {!isSkeleton ? (<h1>{product?.name}</h1>) : (<Skeleton width={100} />)}
                  {!isSkeleton ? (
                    <span onClick={() => handleChangeFavorite()} ref={favoriteRef}>
                      {product?.favorite ? <Like /> : <DisLike />}
                    </span>
                  ) : (<Skeleton width={16} height={16} />)}
                </TitleWrapper>
                {!isSkeleton ? (
                  <PriceWrapper>
                    <span>{product?.price ? parsePrice(product?.price) : ''}</span>
                    {!(isSoldOut || maxProductQuantity <= 0) && (
                      <span className='off-price'>{product?.offer_price && product?.in_offer ? parsePrice(product?.offer_price) : ''}</span>
                    )}
                  </PriceWrapper>
                ) : (
                  <Skeleton width={100} />
                )}
                {!isSkeleton ? (<p>{product?.description}</p>) : (<Skeleton width={100} />)}
              </CardInfo>
              {!isSkeleton ? (
                <WrapLogo>
                  {product?.ribbon?.enabled && (
                    <RibbonBox
                      bgColor={product?.ribbon?.color}
                      isRoundRect={product?.ribbon?.shape === shape?.rectangleRound}
                      isCapsule={product?.ribbon?.shape === shape?.capsuleShape}
                    >
                      {product?.ribbon?.text}
                    </RibbonBox>
                  )}
                  <CardLogo
                    className='image'
                    soldOut={isSoldOut || maxProductQuantity <= 0}
                    bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_200,c_limit')}
                  />
                </WrapLogo>
              ) : (
                <Skeleton height={75} width={75} />
              )}
              {(isSoldOut || maxProductQuantity <= 0) && <SoldOut isBottom={product?.ribbon?.enabled}>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
            </>
          )}
          {useCustomFunctionality && customText && (
            <span style={{ fontSize: 16, fontWeight: 500 }}>{customText}</span>
          )}
        </>
      )}
    </CardContainer>
  )
}

export const SingleProductCard = (props) => {
  const singleProductCardProps = {
    ...props,
    UIComponent: SingleProductCardUI
  }
  return <SingleProductCardController {...singleProductCardProps} />
}
