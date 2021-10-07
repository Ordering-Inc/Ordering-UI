import React, { useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils } from 'ordering-components'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo,
  SoldOut,
  ProductInfo,
  CartAction,
  ProductCost,
  Quantity
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { useTheme } from 'styled-components'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

export const SingleProductCard = (props) => {
  const {
    businessId,
    product,
    isSoldOut,
    isSkeleton,
    onProductClick,
    isCartOnProductsList
  } = props
  const [, t] = useLanguage()
  const [stateConfig] = useConfig()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const theme = useTheme()
  const el = useRef()
  const windowSize = useWindowSize()
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

  const checkProdcutImage = () => {
    let bgImage
    if (product?.images) {
      if (product?.images.indexOf('http') > -1) {
        bgImage = optimizeImage(product.images, 'h_200,c_limit')
      } else {
        bgImage = optimizeImage(theme.images?.dummies?.product, 'h_200,c_limit')
      }
      return bgImage
    }
  }

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
        onClick={() => !(isSkeleton || isSoldOut) && onProductClick(product)}
        isCartOnProductsList={isCartOnProductsList}
      >
        <ProductInfo>
          {!isSkeleton ? (
            <WrapLogo>
              <CardLogo
                className='image'
                soldOut={isSoldOut || maxProductQuantity <= 0}
                bgimage={checkProdcutImage()}
              />
            </WrapLogo>
          ) : (
            <WrapLogo>
              <Skeleton height={195} width={195} />
            </WrapLogo>
          )}
          {windowSize.width < 768 && (
            <ProductCost textLeft={(isSoldOut || maxProductQuantity <= 0)}>{parsePrice(product?.price)}</ProductCost>
          )}
          {!isSkeleton ? (
            <CardInfo soldOut={isSoldOut || maxProductQuantity <= 0}>
              <h1>{product?.name}</h1>
              <p>{product?.description ? product?.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus et, purus lorem quis eleifend id diam.'}</p>
            </CardInfo>
          ) : (
            <CardInfo>
              <h1><Skeleton width={100} /></h1>
            </CardInfo>
          )}
        </ProductInfo>
        <CartAction>
          {windowSize.width > 768 && (
            <ProductCost textLeft={(isSoldOut || maxProductQuantity <= 0)}>{parsePrice(product?.price)}</ProductCost>
          )}
          <Quantity isSoldOut={isSoldOut}>
            <span>{t('QUANTITY', 'Quantity')}</span>
            <Input
              ref={el}
              name='product-quantity'
              aria-label='product-quantity'
              autoComplete='off'
              defaultValue={1}
              maxLength='500'
            />
          </Quantity>
          {!(isSoldOut || maxProductQuantity <= 0) && <Button color='primary' outline>{t('ADD_TO_CART', 'ADD TO CART')}</Button>}
        </CartAction>
        {(isSoldOut || maxProductQuantity <= 0) && <SoldOut>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
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
