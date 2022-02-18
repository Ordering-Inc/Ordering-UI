import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import MdClose from '@meronex/icons/md/MdClose'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils
} from 'ordering-components'

import { scrollTo } from '../../../../../utils'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { AddressList } from '../../../../../components/AddressList'

import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
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
  WrapperIngredients,
  ProductTabContainer,
  ModalIcon,
  ProductFormTitle,
  SkuContent,
  ProductName,
  Properties,
  ProductMeta,
  EstimatedPersons,
  ProductDescription,
  PriceContent
} from './styles'
import { useTheme } from 'styled-components'
import { TextArea } from '../../styles/Inputs'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

const ProductOptionsUI = (props) => {
  const {
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
    onClose,
    productName
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
  const [tabValue, setTabValue] = useState('all')

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const isIOS = window.navigator.userAgent.includes('iPhone')

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

  const handleChangeTabValue = (value) => {
    const categoryTitle = document.getElementById(value)
    const container = document.getElementsByClassName('popup-dialog')[0]
    if (categoryTitle) {
      container.scroll({
        top: categoryTitle.offsetTop + 300,
        behavior: 'smooth'
      })
    } else {
      container.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const container = document.getElementsByClassName('popup-dialog')[0]
    if (container) {
      container.addEventListener('scroll', () => {
        const extrasContainer = document.getElementById('extra')
        const ingredientsContainer = document.getElementById('ingredients')
        if (container.scrollTop < ingredientsContainer?.offsetTop + 290 || container.scrollTop < 200) {
          setTabValue('all')
        } else if (ingredientsContainer && container.scrollTop < extrasContainer?.offsetTop + 290) {
          setTabValue('ingredients')
        } else {
          extrasContainer ? setTabValue('extra') : ingredientsContainer ? setTabValue('ingredients') : setTabValue('all')
        }
      })
    }
    return () => {
      container && container.removeEventListener('scroll')
    }
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}

      <ProductContainer className='product-container'>
        <ModalIcon>
          <MdClose onClick={() => onClose()} color='#748194' />
        </ModalIcon>
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
            <ProductFormTitle>
              <ProductName>{productName || product?.name}</ProductName>
              <Properties>
                <PriceContent>{parsePrice(product?.price)}</PriceContent>
                <ProductMeta>
                  {product?.sku && product?.sku !== '-1' && product?.sku !== '1' && (
                    <SkuContent>
                      <span>{t('SKU', theme?.defaultLanguages?.SKU || 'Sku')}&nbsp;</span>
                      <span>{product?.sku}</span>
                    </SkuContent>
                  )}
                  {product?.sku && product?.sku !== '-1' && product?.sku !== '1' && product?.estimated_person && (
                    <span>&nbsp;&#183;&nbsp;</span>
                  )}
                  {product?.estimated_person && (
                    <EstimatedPersons>
                      <span>{product?.estimated_person}&nbsp;</span>
                      <span>{t('ESTIMATED_PERSONS', 'persons')}</span>
                    </EstimatedPersons>
                  )}
                </ProductMeta>
              </Properties>
              {product?.description && <ProductDescription>{product?.description}</ProductDescription>}
            </ProductFormTitle>
            <ProductInfo>
              <ProductEdition>
                <ProductTabContainer>
                  <Tabs variant='primary'>
                    <Tab
                      key='all'
                      active={tabValue === 'all'}
                      onClick={() => handleChangeTabValue('all')}
                      borderBottom
                    >
                      {t('ALL', 'All')}
                    </Tab>
                    {product?.ingredients?.length > 0 && (
                      <Tab
                        key='ingredients'
                        active={tabValue === 'ingredients'}
                        onClick={() => handleChangeTabValue('ingredients')}
                        borderBottom
                      >
                        {t('INGREDIENTS', 'ingredients')}
                      </Tab>
                    )}
                    {product?.extras?.length > 0 && (
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

                {product?.ingredients.length > 0 && (<SectionTitle id='ingredients'>{t('INGREDIENTS', theme?.defaultLanguages?.INGREDIENTS || 'Ingredients')}</SectionTitle>)}
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
                  product?.extras.map(extra => extra.options.map((option, i) => {
                    const currentState = productCart.options[`id:${option?.id}`] || {}
                    return (
                      <div key={option?.id} id={i === 0 ? 'extra' : ''}>
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
                    <SectionTitle>{t('COMMENTS', theme?.defaultLanguages?.SPECIAL_COMMENT || 'COMMENTS')}</SectionTitle>
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
              <ProductActions isIOS={isIOS}>
                <div className='price'>{productCart.total && parsePrice(productCart.total)}</div>
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
                      <>{t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')}</>
                    ) : (
                      <>
                        {editMode ? t('UPDATE', theme?.defaultLanguages?.UPDATE || 'Update') : t('ADD', theme?.defaultLanguages?.ADD || 'Add')}
                      </>
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
              </ProductActions>
            </ProductInfo>
          </>
        )}

        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='50%'
            hideCloseDefault
            padding='30px 40px'
            customModal
            isProductForm
          >
            {modalPageToShow === 'login' && (
              <LoginForm
                handleSuccessLogin={handleSuccessLogin}
                onClose={() => closeModal()}
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
                  >{t('FORGOT_YOUR_PASSWORD', theme?.defaultLanguages?.RESET_PASSWORD || 'Forgot your password?')}
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
                onClose={() => closeModal()}
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
                onClose={() => closeModal()}
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
