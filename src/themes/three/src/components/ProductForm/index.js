import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'

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
import { ProductOption } from '../ProductOption'
import { ProductOptionSubOption } from '../../../../../components/ProductOptionSubOption'
import { ProductShare } from '../../../../../components/ProductShare'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { AddressList } from '../AddressList'

import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'

import {
  ProductContainer,
  WrapperImage,
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
  IngredientHeader,
  ProductName,
  Properties,
  PriceContent,
  ProductMeta,
  EstimatedPersons,
  ProductDescription,
  ProductTagsListContainer,
  ProductTagWrapper
} from './styles'
import { TextArea } from '../../styles/Inputs'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

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
  const theme = useTheme()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const windowSize = useWindowSize()
  const [{ auth, user }, { login }] = useSession()
  const [, t] = useLanguage()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()
  const [{ optimizeImage, parsePrice }] = useUtils()
  const [modalPageToShow, setModalPageToShow] = useState('login')

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [setActive, setActiveState] = useState('active')
  const [setRotate, setRotateState] = useState('accordion__icon rotate')
  const [gallery, setGallery] = useState([])

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

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

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
      <ProductContainer className='product-container'>
        {loading && !error && (
          <SkeletonBlock width={90}>
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={200} />
          </SkeletonBlock>
        )}

        {product && !loading && !error && (
          <ProductShare
            slug={businessSlug}
            categoryId={product?.category_id}
            productId={product?.id}
          />
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
                    slidesPerView: 6,
                    spaceBetween: 20
                  },
                  1000: {
                    slidesPerView: 7,
                    spaceBetween: 20
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  1300: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  },
                  1600: {
                    slidesPerView: 6,
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
            </WrapperImage>
            <ProductInfo>
              <ProductFormTitle>
                <ProductName>{product?.name}</ProductName>
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
              <ProductTagsListContainer>
                {product.tags.map(tag => (
                  <ProductTagWrapper key={tag.id}>
                    <img src={optimizeImage(tag?.image || theme.images?.dummies?.product, 'h_40,c_limit')} alt='' />
                    <span>{tag.name}</span>
                  </ProductTagWrapper>
                ))}
              </ProductTagsListContainer>
              <ProductEdition>
                {product?.ingredients.length > 0 && (
                  <IngredientHeader
                    className={`accordion ${setActive}`}
                    onClick={() => toggleAccordion()}
                  >
                    <SectionTitle>{t('INGREDIENTS', 'Ingredients')}</SectionTitle>
                    <span>
                      <IosArrowDown className={`${setRotate}`} />
                    </span>
                  </IngredientHeader>
                )}
                <WrapperIngredients
                  isProductSoldout={isSoldOut || maxProductQuantity <= 0}
                  style={{ maxHeight: !setActive && '0px' }}
                >
                  {product?.ingredients.map(ingredient => (
                    <ProductIngredient
                      key={ingredient.id}
                      ingredient={ingredient}
                      state={productCart.ingredients[`id:${ingredient.id}`]}
                      onChange={handleChangeIngredientState}
                    />
                  ))}
                </WrapperIngredients>
                {
                  product?.extras.map(extra => extra.options.map(option => {
                    const currentState = productCart.options[`id:${option.id}`] || {}
                    return (
                      <div key={option.id}>
                        {
                          showOption(option) && (
                            <ProductOption
                              option={option}
                              currentState={currentState}
                              error={errors[`id:${option.id}`]}
                            >
                              <WrapperSubOption className={isError(option.id)}>
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
                    <SectionTitle>{t('SPECIAL_COMMENT', 'Special comment')}</SectionTitle>
                    <TextArea
                      rows={4}
                      placeholder={t('SPECIAL_COMMENT', 'Special comment')}
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
                    rectangle
                    className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                    color='primary'
                    onClick={() => handleSaveProduct()}
                    disabled={orderState.loading}
                  >
                    {orderState.loading ? (
                      <span>{t('LOADING', 'Loading')}</span>
                    ) : (
                      <span>
                        {editMode ? t('UPDATE', 'Update') : t('ADD_TO_CART', 'Add to Cart')}
                      </span>
                    )}
                    <span>{productCart.total && parsePrice(productCart.total)}</span>
                  </Button>
                )}

                {auth && !orderState.options?.address_id && (
                  orderState.loading ? (
                    <Button
                      rectangle
                      className='add'
                      color='primary'
                      disabled
                    >
                      {t('LOADING', 'Loading')}
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
                    rectangle
                    className={`add ${!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''}`}
                    color='primary'
                    outline
                    disabled={isSoldOut || maxProductQuantity <= 0}
                    onClick={() => setModalIsOpen(true)}
                  >
                    {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up')}
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
                  >{t('CREATE_ACCOUNT', 'Create account')}
                  </a>
                }
                elementLinkToForgotPassword={
                  <a
                    onClick={
                      (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                    } href='#'
                  >{t('RESET_PASSWORD', 'Reset password')}
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
                  >{t('LOGIN', 'Login')}
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
                  >{t('LOGIN', 'Login')}
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
