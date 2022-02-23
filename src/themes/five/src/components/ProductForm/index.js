import React, { useState, useEffect, useRef } from 'react'
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

import { ProductIngredient } from '../ProductIngredient'
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../ProductOptionSubOption'
import { ProductShare } from '../../../../../components/ProductShare'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { AddressList } from '../AddressList'

import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import { Tabs, Tab } from '../../styles/Tabs'

import {
  ProductContainer,
  WrapperImage,
  SwiperWrapper,
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
  ProductTabContainer,
  Divider,
  ProductShareWrapper,
  ProductName,
  Properties,
  ProductMeta,
  EstimatedPersons,
  ProductDescription,
  PriceContent,
  ProductTagsListContainer,
  ProductTagWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { TextArea } from '../../styles/Inputs'
import { NotFoundSource } from '../NotFoundSource'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Thumbs
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Thumbs])

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
  const [{ optimizeImage, parsePrice }] = useUtils()
  const theme = useTheme()
  const [modalPageToShow, setModalPageToShow] = useState('login')
  const [tabValue, setTabValue] = useState('all')
  const productContainerRef = useRef(null)
  const [gallery, setGallery] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

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

  const handleChangeTabValue = (value) => {
    setTabValue(value)
  }

  useEffect(() => {
    if (document.getElementById(`${tabValue}`)) {
      const extraHeight = windowSize.width < 769 ? 100 : 42
      const top = (tabValue === 'all') ? 0 : document.getElementById(`${tabValue}`).offsetTop - extraHeight
      console.log(top, 'this is top')
      let scrollElement = document.querySelector('.popup-dialog')
      if (windowSize.width >= 1200) {
        scrollElement = productContainerRef.current
      }
      scrollElement.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    }
  }, [tabValue])

  useEffect(() => {
    const imageList = []
    imageList.push(product?.images || theme.images?.dummies?.product)
    if (product?.gallery && product?.gallery?.length > 0) {
      for (const galleryItem of product?.gallery) {
        imageList.push(galleryItem?.file)
      }
    }
    setGallery(imageList)
  }, [product])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductContainer className='product-container' ref={productContainerRef}>
        {loading && !error && (
          <SkeletonBlock width={90}>
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={200} />
          </SkeletonBlock>
        )}

        {product && !loading && !error && (
          <ProductShareWrapper>
            <ProductShare
              slug={businessSlug}
              categoryId={product?.category_id}
              productId={product?.id}
            />
          </ProductShareWrapper>

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
              <SwiperWrapper isSoldOut={isSoldOut}>
                <Swiper
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }} className='mySwiper2'
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={5}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    300: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    400: {
                      slidesPerView: 5,
                      spaceBetween: 20
                    },
                    550: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    769: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    1000: {
                      slidesPerView: 5,
                      spaceBetween: 20
                    },
                    1400: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    1600: {
                      slidesPerView: 7,
                      spaceBetween: 20
                    }
                  }}
                  freeMode
                  watchSlidesProgress
                  className='product-thumb'
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperWrapper>
            </WrapperImage>
            <ProductInfo>
              <ProductFormTitle>
                <ProductName>
                  <span>{product?.name}</span>
                  {product?.calories && (<span className='calories'>{product?.calories}{' '}cal</span>)}
                </ProductName>
                <Properties>
                  <PriceContent>
                    {parsePrice(product?.price)}{' '}
                    {product?.in_offer && (<span className='offer-price'>{parsePrice(product?.offer_price)}</span>)}
                  </PriceContent>
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
              <ProductTagsListContainer>
                {product.tags.map(tag => (
                  <ProductTagWrapper key={tag.id}>
                    <img src={optimizeImage(tag?.image || theme.images?.dummies?.product, 'h_40,c_limit')} alt='' />
                    <span>{tag.name}</span>
                  </ProductTagWrapper>
                ))}
              </ProductTagsListContainer>
              <Divider />
              <ProductEdition>
                {
                  (product?.ingredients.length > 0 || product?.extras.length > 0) && (
                    <ProductTabContainer id='all'>
                      <Tabs variant='primary'>
                        <Tab
                          key='all'
                          active={tabValue === 'all'}
                          onClick={() => handleChangeTabValue('all')}
                          borderBottom
                        >
                          {t('ALL', 'All')}
                        </Tab>
                        {
                          product?.ingredients.length > 0 && (
                            <Tab
                              key='ingredients'
                              active={tabValue === 'ingredients'}
                              onClick={() => handleChangeTabValue('ingredients')}
                              borderBottom
                            >
                              {t('INGREDIENTS', 'ingredients')}
                            </Tab>
                          )
                        }
                        {
                          product?.extras.length > 0 && (
                            <Tab
                              key='extra'
                              active={tabValue === 'extra'}
                              onClick={() => handleChangeTabValue('extra')}
                              borderBottom
                            >
                              {t('EXTRA', 'Extra')}
                            </Tab>
                          )
                        }
                      </Tabs>
                    </ProductTabContainer>
                  )
                }

                <div id='ingredients'>
                  {product?.ingredients.length > 0 && (<SectionTitle>{t('INGREDIENTS', theme?.defaultLanguages?.INGREDIENTS || 'Ingredients')}</SectionTitle>)}
                  <WrapperIngredients isProductSoldout={isSoldOut || maxProductQuantity <= 0}>
                    {product?.ingredients.map(ingredient => (
                      <ProductIngredient
                        key={ingredient?.id}
                        ingredient={ingredient}
                        state={productCart.ingredients[`id:${ingredient?.id}`]}
                        onChange={handleChangeIngredientState}
                        isSoldOut={isSoldOut}
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
                                          isSoldOut={isSoldOut}
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
              <ProductActions>
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
                      <span>{t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')}</span>
                    ) : (
                      <span>
                        {editMode ? t('UPDATE', theme?.defaultLanguages?.UPDATE || 'Update') : t('ADD', theme?.defaultLanguages?.ADD || 'Add')}
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
              </ProductActions>
            </ProductInfo>
          </>
        )}

        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='50%'
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
