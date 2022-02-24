import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils
} from 'ordering-components'
import { scrollTo } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { ProductIngredient } from '../../../../../components/ProductIngredient'
import { ForgotPasswordForm } from '../../../../../components/ForgotPasswordForm'
import { AddressList } from '../../../../../components/AddressList'
import { Button } from '../../../../../styles/Buttons'
import { TextArea } from '../../../../../styles/inputs'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../Modal'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ProductShare } from '../ProductShare'
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
  ShareWrapper,
  ProductTagsListContainer,
  ProductTagWrapper
} from './styles'
import { useTheme } from 'styled-components'
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
    handleChangeCommentState,
    isIndividualBusinessCart
  } = props
  const { product, loading, error } = productObject
  const windowSize = useWindowSize()
  const [{ auth, user }, { login }] = useSession()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()
  const theme = useTheme()
  const [modalPageToShow, setModalPageToShow] = useState('login')
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
      topPos = topPos + (myElement.offsetTop < productImage.clientHeight ? productImage.clientHeight : 0)
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
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductContainer className='product-container'>
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
                  <ShareWrapper>
                    <ProductShare
                      slug={businessSlug}
                      categoryId={product?.category_id}
                      productId={product?.id}
                    />
                  </ShareWrapper>
                )}
                <img
                  src={product?.images || theme.images?.dummies?.product}
                  alt='product'
                  width='300px'
                  height='300px'
                  loading='lazy'
                  onError={(e) => { e.target.onerror = null; e.target.src = theme.images?.dummies?.product }}
                />
              </ProductImage>
              <ProductFormTitle>
                <h2>{product?.name}</h2>
                {product?.description && <p>{product?.description}</p>}
                {product?.sku && product?.sku !== '-1' && product?.sku !== '1' && (
                  <SkuContent>
                    <h2>{t('SKU', theme?.defaultLanguages?.SKU || 'Sku')}</h2>
                    <p>{product?.sku}</p>
                  </SkuContent>
                )}
              </ProductFormTitle>
              <ProductTagsListContainer>
                {product.tags.map(tag => (
                  <ProductTagWrapper key={tag.id}>
                    <img src={optimizeImage(tag?.image || theme.images?.dummies?.product, 'h_40,c_limit')} alt='' />
                    <span>{tag.name}</span>
                  </ProductTagWrapper>
                ))}
              </ProductTagsListContainer>
            </WrapperImage>
            <ProductInfo>
              <ProductEdition>
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
                {!product?.hide_special_instructions && (
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
              <ProductActions className={isIndividualBusinessCart && 'isIndividualBusinessCart-ProductAction'}>
                {
                  productCart && !isSoldOut && maxProductQuantity > 0 && (
                    <div className='incdec-control'>
                      <FiMinusCircle
                        onClick={decrement}
                        className={`${productCart.quantity === 1 || isSoldOut ? 'disabled' : ''}`}
                      />
                      <span>{productCart.quantity}</span>
                      <FiPlusCircle
                        onClick={increment}
                        className={`${maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : ''}`}
                      />
                    </div>
                  )
                }
                {productCart && !isSoldOut && maxProductQuantity > 0 && auth && orderState.options?.address_id && (
                  <Button
                    className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                    color='primary'
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
                    color='secundary'
                    disabled={isSoldOut || maxProductQuantity <= 0}
                    onClick={() => setModalIsOpen(true)}
                  >
                    {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', theme?.defaultLanguages?.SOLD_OUT || 'Sold out') : t('LOGIN_SIGNUP', theme?.defaultLanguages?.LOGIN_SIGNUP || 'Login / Sign Up')}
                  </Button>
                )}
              </ProductActions>
            </ProductInfo>
          </>
        )}
        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='50%'
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
