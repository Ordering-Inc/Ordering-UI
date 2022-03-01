import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils } from 'ordering-components'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo,
  SoldOut,
  PriceWrapper
} from './styles'
import { useTheme } from 'styled-components'

export const SingleProductCard = (props) => {
  const {
    businessId,
    product,
    isSoldOut,
    isSkeleton,
    onProductClick,
    isCartOnProductsList,
    useCustomFunctionality,
    onCustomClick,
    customText,
    customStyle
  } = props

  const [, t] = useLanguage()
  const [stateConfig] = useConfig()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const theme = useTheme()

  const editMode = typeof product?.code !== 'undefined'

  const removeToBalance = editMode ? product?.quantity : 0
  const cart = orderState.carts?.[`businessId:${businessId}`]
  const productCart = cart?.products?.find(prod => prod.id === product?.id)
  const totalBalance = (productCart?.quantity || 0) - removeToBalance

  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  const productBalance = (cart?.products?.reduce((sum, _product) => sum + (product && _product.id === product?.id ? _product.quantity : 0), 0) || 0) - removeToBalance
  let maxCartProductInventory = (product?.inventoried ? product?.quantity : undefined) - productBalance
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CardContainer
        soldOut={isSoldOut || maxProductQuantity <= 0}
        onClick={() => ((!isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product)) || (useCustomFunctionality && onCustomClick && onCustomClick()))}
        isCartOnProductsList={isCartOnProductsList}
        style={useCustomFunctionality && customStyle}
      >
        {!useCustomFunctionality && (
          <>
            <CardInfo soldOut={isSoldOut || maxProductQuantity <= 0}>
              {!isSkeleton ? (<h1>{product?.name}</h1>) : (<Skeleton width={100} />)}
              {!isSkeleton ? (
                <PriceWrapper>
                  <span>{parsePrice(product?.price)}</span>
                  {product?.in_offer && (
                    <span className='off-price'>{parsePrice(product?.offer_price)}</span>
                  )}
                </PriceWrapper>
              ) : (
                <Skeleton width={100} />
              )}
              {!isSkeleton ? (<p>{product?.description}</p>) : (<Skeleton width={100} />)}
            </CardInfo>
            {!isSkeleton ? (
              <WrapLogo>
                <CardLogo
                  className='image'
                  soldOut={isSoldOut || maxProductQuantity <= 0}
                  bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_200,c_limit')}
                />
              </WrapLogo>
            ) : (
              <Skeleton height={75} width={75} />
            )}
            {(isSoldOut || maxProductQuantity <= 0) && <SoldOut>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
          </>
        )}
        {useCustomFunctionality && customText && (
          <span style={{ fontSize: 16, fontWeight: 500 }}>{customText}</span>
        )}
      </CardContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
