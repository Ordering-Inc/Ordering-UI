import React from 'react'
import { useLanguage, useConfig, useOrder, useUtils, SingleProductCard as SingleProductCardController } from 'ordering-components'
import { shape } from '../../../../../../../utils'
import { useTheme } from 'styled-components'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  WrapTags,
  CardLogo,
  SoldOut,
  PriceWrapper,
  RibbonBox,
  TitleWrapper
} from './styles'

const SingleProductCardUI = (props) => {
  const {
    product
  } = props

  const [, t] = useLanguage()
  const [stateConfig] = useConfig()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const theme = useTheme()

  const editMode = typeof product?.code !== 'undefined'

  const removeToBalance = editMode ? product?.quantity : 0

  const cartProducts = Object.values(orderState.carts).reduce((products, _cart) => [...products, ..._cart?.products], [])
  const productBalance = cartProducts.reduce((sum, _product) => sum + (_product.id === product?.id ? _product.quantity : 0), 0)

  const totalBalance = (productBalance || 0) - removeToBalance

  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  let maxCartProductInventory = (product?.inventoried ? product?.quantity : undefined) - totalBalance
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  return (
    <>
      <CardContainer
        soldOut={maxProductQuantity <= 0}
        className='product-card'
      >
        <div>
          <CardInfo soldOut={maxProductQuantity <= 0} isBgimage={optimizeImage(product?.images || theme?.images?.dummies?.product, 'h_86,c_limit')}>
            <TitleWrapper>
              <h1>{product?.name}</h1>
            </TitleWrapper>
            <PriceWrapper isOffPrice={product?.offer_price && product?.in_offer}>
              <span className='current-price'>{product?.price ? parsePrice(product?.price) : ''}</span>
              {!(maxProductQuantity <= 0) && (
                <span className='off-price'>{product?.offer_price && product?.in_offer ? parsePrice(product?.offer_price) : ''}</span>
              )}
              {product?.tags && product?.tags.length > 0 && (
                <WrapTags>
                  {product?.tags.map((tag, i) => (
                    <div key={i}>
                      <img src={tag.image ?? ''} />
                    </div>
                  ))}
                </WrapTags>
              )}
            </PriceWrapper>

            <p>{product?.description}</p>
          </CardInfo>
          <WrapLogo
            isBgimage={optimizeImage(product?.images || theme?.images?.dummies?.product, 'h_86,c_limit')}
          >
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
              soldOut={maxProductQuantity <= 0}
              bgimage={optimizeImage(product?.images || theme?.images?.dummies?.product, 'h_86,c_limit')}
            />
          </WrapLogo>
          {(maxProductQuantity <= 0) && <SoldOut isBottom={product?.ribbon?.enabled}>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
        </div>
      </CardContainer>
    </>
  )
}

export const SingleProductCard = (props) => {
  const singleProductCardProps = {
    ...props,
    UIComponent: SingleProductCardUI
  }
  return <SingleProductCardController {...singleProductCardProps} />
}
