import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils } from 'ordering-components'
import { shape } from '../../../../../../../utils'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import { useTheme } from 'styled-components'

import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo,
  SoldOut,
  PriceWrapper,
  QuantityContainer,
  RibbonBox
} from './styles'

export const OriginalSingleProductCard = (props) => {
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
    AdminSettings
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
        informationPosition={AdminSettings?.products_listening_settings?.product_section?.information_position}
        imageShowed={AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image}
        className='product-card'
      >
        {!useCustomFunctionality && (
          <>
            {!isSkeleton && productAddedToCartLength > 0 && (
              <QuantityContainer>
                <span>{productAddedToCartLength}</span>
              </QuantityContainer>
            )}
            <CardInfo
              soldOut={isSoldOut || maxProductQuantity <= 0}
              informationPosition={AdminSettings?.products_listening_settings?.product_section?.information_position}
            >
              {!isSkeleton ? (<h1>{product?.name}</h1>) : (<Skeleton width={100} />)}
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
              {!isSkeleton ? ((AdminSettings?.products_listening_settings?.product_section?.information_show_status?.description ||
                              AdminSettings?.products_listening_settings?.product_section?.information_show_status?.description === undefined)
                ? <p>{product?.description}</p> : '') : (<Skeleton width={100} />)}
              {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.add_icon ||
                AdminSettings?.products_listening_settings?.product_section?.information_show_status?.add_icon === undefined) && <FiPlusCircle stroke={theme?.colors?.primary} />}
            </CardInfo>
            {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image ||
            AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image === undefined) && (
              <>
                {!isSkeleton ? (
                  <WrapLogo
                    imgSize='86'
                    imgScale={AdminSettings?.products_listening_settings?.product_section?.image_scale}
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
                    {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image ||
                        AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image === undefined) &&
                          <CardLogo
                            className='image'
                            soldOut={isSoldOut || maxProductQuantity <= 0}
                            imgSize='86'
                            imgScale={AdminSettings?.products_listening_settings?.product_section?.image_scale}
                            bgimage={optimizeImage(product?.images || (AdminSettings?.products_listening_settings?.product_section?.information_show_status?.dummy_product_images ? theme.images?.dummies?.product : ''), 'h_200,c_limit')}
                          />}
                  </WrapLogo>
                ) : (
                  <Skeleton height={75} width={75} />
                )}
              </>
            )}
            {(isSoldOut || maxProductQuantity <= 0) && <SoldOut isBottom={product?.ribbon?.enabled}>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
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
