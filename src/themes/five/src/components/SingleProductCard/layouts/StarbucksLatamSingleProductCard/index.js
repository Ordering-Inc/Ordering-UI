import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils } from 'ordering-components'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import {
  CardContainer,
  CardInfo,
  WrapLogo,
  CardLogo,
  PriceWrapper,
  SoldOut
} from './styles'
import { useTheme } from 'styled-components'

export const StarbucksLatamSingleProductCard = (props) => {
  const {
    businessId,
    product,
    isSoldOut,
    isSkeleton,
    onProductClick,
    isCartOnProductsList,
    AdminSettings
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
        onClick={() => !isSkeleton && onProductClick(product)}
        isCartOnProductsList={isCartOnProductsList}
        informationPosition={AdminSettings?.products_listening_settings?.product_section?.information_position}
        imageShowed={AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image}
      >
        {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image ||
        AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image === undefined) && (
          <>
            {!isSkeleton ? (
              <WrapLogo
                imgSize='75'
                imgScale={AdminSettings?.products_listening_settings?.product_section?.image_scale}
              >
                {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image ||
                  AdminSettings?.products_listening_settings?.product_section?.information_show_status?.image === undefined) &&
                    <CardLogo
                      imgSize='75'
                      imgScale={AdminSettings?.products_listening_settings?.product_section?.image_scale}
                      soldOut={isSoldOut || maxProductQuantity <= 0}
                      bgimage={optimizeImage(product?.images || (AdminSettings?.products_listening_settings?.product_section?.information_show_status?.dummy_product_images ? theme.images?.dummies?.product : ''), 'h_200,c_limit')}
                    />}
              </WrapLogo>
            ) : (
              <Skeleton height={75} width={75} />
            )}
          </>
        )}
        <CardInfo
          soldOut={isSoldOut || maxProductQuantity <= 0}
          informationPosition={AdminSettings?.products_listening_settings?.product_section?.information_position}
        >
          {!isSkeleton ? (<h1>{product?.name}</h1>) : (<Skeleton width={100} />)}
          {!isSkeleton ? ((AdminSettings?.products_listening_settings?.product_section?.information_show_status?.description ||
            AdminSettings?.products_listening_settings?.product_section?.information_show_status?.description === undefined)
            ? <p>{product?.description}</p> : '') : (<Skeleton width={100} />)}
          {!isSkeleton ? (
            <PriceWrapper
              informationPosition={AdminSettings?.products_listening_settings?.product_section?.information_position}
            >
              <span>{parsePrice(product?.price)}</span>
              {(AdminSettings?.products_listening_settings?.product_section?.information_show_status?.add_icon ||
                AdminSettings?.products_listening_settings?.product_section?.information_show_status?.add_icon === undefined) && <FiPlusCircle stroke={theme?.colors?.primary} />}
            </PriceWrapper>
          ) : (
            <Skeleton width={100} />
          )}
        </CardInfo>
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
