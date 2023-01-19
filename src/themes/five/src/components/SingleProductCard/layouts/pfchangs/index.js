import React, { useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, useOrder, useUtils, useSession, SingleProductCard as SingleProductCardController } from 'ordering-components'
import { shape } from '../../../../../../../utils'
import { useIntersectionObserver } from '../../../../../../../hooks/useIntersectionObserver'
import { useTheme } from 'styled-components'
import { Modal } from '../../../Modal'
import { LoginForm } from '../../../LoginForm'
import { SignUpForm } from '../../../SignUpForm'
import { ForgotPasswordForm } from '../../../ForgotPasswordForm'

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
    useKioskApp,
    productAddedToCartLength,
    isFavorite
  } = props

  const [, t] = useLanguage()
  const [$element, isObserved] = useIntersectionObserver()
  const [stateConfig] = useConfig()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const [, { login }] = useSession()
  const theme = useTheme()
  const favoriteRef = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)

  const editMode = typeof product?.code !== 'undefined'
  const isObservedValidation = isObserved || useKioskApp

  const removeToBalance = editMode ? product?.quantity : 0

  const cartProducts = Object.values(orderState.carts).reduce((products, _cart) => [...products, ..._cart?.products], [])
  const productBalance = cartProducts.reduce((sum, _product) => sum + (_product.id === product?.id ? _product.quantity : 0), 0)

  const totalBalance = (productBalance || 0) - removeToBalance

  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  const productsRows = theme?.layouts?.business_view?.components?.products?.components?.layout?.rows

  let maxCartProductInventory = (product?.inventoried ? product?.quantity : undefined) - totalBalance
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  const handleClickProduct = (e) => {
    if (favoriteRef?.current?.contains(e.target)) return

    if (isFavorite) {
      onProductClick && onProductClick()
      return
    }
    (!isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product, product?.business?.slug)) ||
      (useCustomFunctionality && onCustomClick && onCustomClick())
  }

  const closeAuthModal = () => {
    setIsModalOpen(false)
    setModalPageToShow(null)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeAuthModal()
    }
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  return (
    <>
      <CardContainer
        ref={$element}
        soldOut={isSoldOut || maxProductQuantity <= 0}
        onClick={handleClickProduct}
        isCartOnProductsList={isCartOnProductsList}
        style={useCustomFunctionality && customStyle}
        className='product-card'
        productsRows={productsRows}
      >
        {isObservedValidation && (
          <>
            {!isSkeleton ? (
              <WrapLogo>
                {product?.ribbon?.enabled && (
                  <RibbonBox
                    bgColor={product?.ribbon?.color}
                    isRoundRect={product?.ribbon?.shape === shape?.rectangleRound}
                    isCapsule={product?.ribbon?.shape === shape?.capsuleShape}
                    hasProductCount={!useCustomFunctionality && productAddedToCartLength > 0}
                  >
                    {product?.ribbon?.text}
                  </RibbonBox>
                )}
                <CardLogo
                  className='image'
                  soldOut={isSoldOut || maxProductQuantity <= 0}
                  bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_300,c_limit')}
                />
              </WrapLogo>
            ) : (
              <Skeleton height={300} width='100%' />
            )}
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
                    {!isSkeleton ? (<p>{product?.description}</p>) : (<Skeleton width={100} />)}
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
                  </TitleWrapper>
                  {useCustomFunctionality && customText && (
                    <span style={{ fontSize: 16, fontWeight: 500 }}>{customText}</span>
                  )}
                </CardInfo>
                {(isSoldOut || maxProductQuantity <= 0) && <SoldOut isBottom={product?.ribbon?.enabled}>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
              </>
            )}
          </>
        )}
      </CardContainer>
      <Modal
        open={isModalOpen}
        onRemove={() => closeAuthModal()}
        onClose={() => closeAuthModal()}
        width='50%'
        authModal
      >
        {modalPageToShow === 'login' && (
          <LoginForm
            handleSuccessLogin={handleSuccessLogin}
            elementLinkToSignup={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'signup' })
                } href='#'
              >{t('CREATE_ACCOUNT', theme?.defaultLanguages?.CREATE_ACCOUNT || 'Create account')}
              </a>
            }
            elementLinkToForgotPassword={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                } href='#'
              >{t('RESET_PASSWORD', theme?.defaultLanguages?.RESET_PASSWORD || 'Reset password')}
              </a>
            }
            useLoginByCellphone
            isPopup
          />
        )}
        {modalPageToShow === 'signup' && (
          <SignUpForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            useLoginByCellphone
            useChekoutFileds
            handleSuccessSignup={handleSuccessSignup}
            isPopup
            closeModal={() => closeAuthModal()}
          />
        )}
        {modalPageToShow === 'forgotpassword' && (
          <ForgotPasswordForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            isPopup
          />
        )}
      </Modal>
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
