import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils
} from 'ordering-components'

import { scrollTo } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { ProductShare } from '../../../../../components/ProductShare'
import { Modal } from '../../../../../components/Modal'
import { ForgotPasswordForm } from '../../../../../components/ForgotPasswordForm'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { AddressList } from '../AddressList'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'

import { Button, TextArea } from '../../styles'
import { useTheme } from 'styled-components'
import { Tabs, Tab } from '../../styles/Tabs'

import {
  ProductContainer,
  WrapperImage,
  ProductImage,
  ProductInfo,
  ProductEdition,
  SectionTitle,
  ProductActions,
  ProductComment,
  SkeletonBlock,
  WrapperSubOption,
  SkuContent,
  ProductFormTitle,
  WrapperIngredients,
  ProductOptionInfo,
  ProductInnerContainer,
  ProductCartTotalPrice,
  IncDecActions,
  ProductActionHeaderContainer,

  ProductTabContainer,
  ProductTagsListContainer,
  ProductTagWrapper
} from './styles'

const ProductOptionsUI = (props) => {
  const {
    businessSlug,
    editMode,
    isSoldOut,
    productObject,
    productCart,
    increment,
    decrement,
    showOption,
    maxProductQuantity,
    errors,
    handleSave,
    handleChangeIngredientState,
    handleChangeSuboptionState,
    handleChangeCommentState
  } = props

  const { product, loading, error } = productObject

  const windowSize = useWindowSize()
  const [{ auth, user }, { login }] = useSession()
  const [, t] = useLanguage()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const theme = useTheme()
  const [modalPageToShow, setModalPageToShow] = useState('login')
  const [tabValue, setTabValue] = useState(null)
  const productContainerRef = useRef(null)
  const productInfoRef = useRef(null)
  const [isShowExtra, setIsShowExtra] = useState(false)

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const closeModal = () => {
    setModalIsOpen(false)
    setModalPageToShow('login')
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
    }
  }

  const handleSaveProduct = () => {
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      handleSave && handleSave()
      return
    }
    const myElement = document.getElementsByClassName('error')[0]
    const productContainer = document.getElementsByClassName('product-container')[0]
    if (!myElement || !productContainer) {
      return
    }
    let topPos = myElement.offsetTop - productContainer.offsetTop
    if (windowSize.width <= 768) {
      const productImage = document.getElementById('product_image')
      topPos = topPos + (myElement.offsetTop < productImage?.clientHeight ? productImage?.clientHeight : 0)
    }
    scrollTo(productContainer, topPos, 1250)
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
    closeModal()
  }

  const isError = (id) => {
    let classnames = ''
    if (errors[`id:${id}`]) {
      classnames = 'error'
    }
    if (isSoldOut || maxProductQuantity <= 0) {
      classnames += ' soldout'
    }
    return classnames
  }

  const handleChangeTabValue = (value) => {
    setTabValue(value)
  }

  useEffect(() => {
    if (!tabValue) return
    if (document.getElementById(`${tabValue}`)) {
      const TabOffset = (tabValue === 'all') ? 0 : document.getElementById(`${tabValue}`).offsetTop
      let totalOffset = 0
      if (tabValue === 'all') {
        totalOffset = productContainerRef.current.offsetTop
      } else {
        totalOffset = productContainerRef.current.offsetTop + productInfoRef.current.offsetTop + TabOffset - 64
      }
      window.scroll({
        top: totalOffset,
        behavior: 'smooth'
      })
    }
  }, [tabValue])

  useEffect(() => {
    let valid = false
    product?.extras && product.extras.forEach(extra => extra.options.forEach(option => {
      if (showOption(option)) valid = true
    }))
    setIsShowExtra(valid)
  }, [product?.extras])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductContainer
        className='product-container'
        isExistBottom={document.getElementById('page-footer')}
        ref={productContainerRef}
      >
        {loading && !error && (
          <SkeletonBlock width={90}>
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={200} />
          </SkeletonBlock>
        )}

        {
        props.beforeMidElements?.map((BeforeMidElements, i) => (
          <React.Fragment key={i}>
            {BeforeMidElements}
          </React.Fragment>))
        }
        {
        props.beforeMidComponents?.map((BeforeMidComponents, i) => (
          <BeforeMidComponents key={i} {...props} />))
        }
        {!loading && !error && product && (
          <>
            <WrapperImage>
              <ProductImage id='product_image'>
                {product && !loading && !error && (
                  <ProductShare
                    slug={businessSlug}
                    categoryId={product?.category_id}
                    productId={product?.id}
                  />
                )}
                <img
                  src={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_300,c_limit')}
                  alt='product'
                  width='300px'
                  height='300px'
                  loading='lazy'
                  onError={(e) => { e.target.onerror = null; e.target.src = theme.images?.dummies?.product }}
                />
              </ProductImage>
            </WrapperImage>
            <ProductInfo ref={productInfoRef}>
              <ProductFormTitle>
                <ProductInnerContainer>
                  <h1>{product?.name}</h1>
                  <h4>{parsePrice(product?.price)}</h4>
                  {product?.description && <p>{product?.description}</p>}
                  {product?.sku && product?.sku !== '-1' && product?.sku !== '1' && (
                    <SkuContent>
                      <h2>{t('SKU', theme?.defaultLanguages?.SKU || 'Sku')}</h2>
                      <p>{product?.sku}</p>
                    </SkuContent>
                  )}
                  <ProductTagsListContainer>
                    {product.tags.map(tag => (
                      <ProductTagWrapper key={tag.id}>
                        <img src={optimizeImage(tag?.image || theme.images?.dummies?.product, 'h_40,c_limit')} alt='' />
                        <span>{tag.name}</span>
                      </ProductTagWrapper>
                    ))}
                  </ProductTagsListContainer>
                </ProductInnerContainer>
              </ProductFormTitle>
              <ProductEdition>
                {(product?.ingredients.length > 0 || isShowExtra) && (
                  <ProductTabContainer id='all'>
                    <Tabs variant='primary'>
                      <Tab
                        key='all'
                        active={tabValue === 'all' || !tabValue}
                        onClick={() => handleChangeTabValue('all')}
                        borderBottom
                      >
                        {t('ALL', 'All')}
                      </Tab>
                      {product?.ingredients.length > 0 && (
                        <Tab
                          key='ingredients'
                          active={tabValue === 'ingredients'}
                          onClick={() => handleChangeTabValue('ingredients')}
                          borderBottom
                        >
                          {t('INGREDIENTS', 'ingredients')}
                        </Tab>
                      )}
                      {isShowExtra && (
                        <Tab
                          key='extra'
                          active={tabValue === 'extra'}
                          onClick={() => handleChangeTabValue('extra')}
                          borderBottom
                        >
                          {t('EXTRA', 'Extra')}
                        </Tab>
                      )}
                    </Tabs>
                  </ProductTabContainer>
                )}
                {(product?.ingredients.length > 0 || product?.extras.length > 0) && (
                  <ProductOptionInfo>
                    <ProductInnerContainer>
                      <div id='ingredients'>
                        {product?.ingredients.length > 0 && (<SectionTitle>{t('INGREDIENTS', theme?.defaultLanguages?.INGREDIENTS || 'Ingredients')}</SectionTitle>)}
                        <WrapperIngredients isProductSoldout={isSoldOut || maxProductQuantity <= 0}>
                          {product?.ingredients.map(ingredient => (
                            <ProductIngredient
                              key={ingredient?.id}
                              ingredient={ingredient}
                              state={productCart.ingredients[`id:${ingredient?.id}`]}
                              onChange={handleChangeIngredientState}
                            />
                          ))}
                        </WrapperIngredients>
                      </div>
                      <div id='extra'>
                        {
                          product?.extras.map(extra => extra.options.map(option => {
                            const currentState = productCart.options[`id:${option?.id}`] || {}
                            return (
                              <div key={option?.id}>
                                {
                                  showOption(option) && (
                                    <ProductOption
                                      option={option}
                                      currentState={currentState}
                                      error={errors[`id:${option?.id}`]}
                                    >
                                      <WrapperSubOption className={isError(option?.id)}>
                                        {
                                          option.suboptions.filter(suboptions => suboptions.enabled).map(suboption => {
                                            const currentState = productCart.options[`id:${option?.id}`]?.suboptions[`id:${suboption?.id}`] || {}
                                            const balance = productCart.options[`id:${option?.id}`]?.balance || 0
                                            return (
                                              <ProductOptionSubOption
                                                key={suboption?.id}
                                                onChange={handleChangeSuboptionState}
                                                balance={balance}
                                                option={option}
                                                suboption={suboption}
                                                state={currentState}
                                              />
                                            )
                                          })
                                        }
                                      </WrapperSubOption>
                                    </ProductOption>
                                  )
                                }
                              </div>
                            )
                          }))
                        }
                      </div>
                    </ProductInnerContainer>
                  </ProductOptionInfo>
                )}
                {!product?.hide_special_instructions && (
                  <ProductInnerContainer>
                    <ProductComment>
                      <SectionTitle>{t('SPECIAL_COMMENT', theme?.defaultLanguages?.SPECIAL_COMMENT || 'Special comment')}</SectionTitle>
                      <TextArea
                        rows={4}
                        placeholder={t('SPECIAL_COMMENT', theme?.defaultLanguages?.SPECIAL_COMMENT || 'Special comment')}
                        defaultValue={productCart.comment}
                        onChange={handleChangeCommentState}
                        disabled={!(productCart && !isSoldOut && maxProductQuantity)}
                      />
                    </ProductComment>
                  </ProductInnerContainer>
                )}
                {
                props.afterMidElements?.map((MidElement, i) => (
                  <React.Fragment key={i}>
                    {MidElement}
                  </React.Fragment>))
                }
                {
                props.afterMidComponents?.map((MidComponent, i) => (
                  <MidComponent key={i} {...props} />))
                }
              </ProductEdition>
              {productCart.total && (
                <ProductCartTotalPrice>
                  <span>{t('Price_V2', 'Price')}</span>
                  <span>{parsePrice(productCart.total)}</span>
                </ProductCartTotalPrice>
              )}
              <ProductActions>
                <ProductInnerContainer>
                  <ProductActionHeaderContainer>
                    {
                      productCart && !isSoldOut && maxProductQuantity > 0 && (
                        <IncDecActions>
                          <button
                            className='decrease'
                            onClick={decrement}
                            disabled={productCart.quantity === 1 || isSoldOut}
                          >
                            -
                          </button>
                          <span>{productCart.quantity}</span>
                          <button
                            className='increase'
                            onClick={increment}
                            disabled={maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut}
                          >
                            +
                          </button>
                        </IncDecActions>
                      )
                    }

                    {productCart.total && (
                      <ProductCartTotalPrice isMobile>
                        <span>{t('Price_V2', 'Price')}</span>
                        <span>{parsePrice(productCart.total)}</span>
                      </ProductCartTotalPrice>
                    )}
                  </ProductActionHeaderContainer>

                  {productCart && !isSoldOut && maxProductQuantity > 0 && auth && orderState.options?.address_id && (
                    <Button
                      className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                      color='primaryGradient'
                      onClick={() => handleSaveProduct()}
                      disabled={orderState.loading}
                    >
                      {orderState.loading ? (
                        <span>{t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')}</span>
                      ) : (
                        <span>
                          {editMode ? t('UPDATE', theme?.defaultLanguages?.UPDATE || 'Update') : t('ADD_TO_CART', theme?.defaultLanguages?.ADD_TO_CART || 'Add to Cart')}
                        </span>
                      )}
                    </Button>
                  )}

                  {auth && !orderState.options?.address_id && (
                    orderState.loading ? (
                      <Button
                        className='add'
                        color='primary'
                        disabled
                      >
                        {t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')}
                      </Button>
                    ) : (
                      <AddressList
                        isModal
                        userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
                        addressList={isNaN(userCustomer?.id) ? user.addresses : null}
                        isProductForm
                      />
                    )
                  )}

                  {(!auth || isSoldOut || maxProductQuantity <= 0) && (
                    <Button
                      className={`add ${!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''}`}
                      color='primary'
                      outline
                      disabled={isSoldOut || maxProductQuantity <= 0}
                      onClick={() => setModalIsOpen(true)}
                    >
                      {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', theme?.defaultLanguages?.SOLD_OUT || 'Sold out') : t('LOGIN_SIGNUP', theme?.defaultLanguages?.LOGIN_SIGNUP || 'Login / Sign Up')}
                    </Button>
                  )}
                </ProductInnerContainer>
              </ProductActions>
            </ProductInfo>
          </>
        )}

        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='70%'
            padding='0'
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
        )}

        {error && error.length > 0 && (
          <NotFoundSource
            content={error[0]?.message || error[0]}
          />
        )}
      </ProductContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ProductForm = (props) => {
  const productOptionsProps = {
    ...props,
    UIComponent: ProductOptionsUI
  }

  return (
    <ProductOptions {...productOptionsProps} />
  )
}
