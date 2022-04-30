import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import MdcPlayCircleOutline from '@meronex/icons/mdc/MdcPlayCircleOutline'

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
import { Alert } from '../Confirm'
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
  WeightUnitSwitch,
  WeightUnitItem,
  ProductTagsListContainer,
  ProductTagWrapper,
  VideoGalleryWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { Input, TextArea } from '../../styles/Inputs'
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
    handleChangeProductCartQuantity,
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
  const [videoGallery, setVideoGallery] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isHaveWeight, setIsHaveWeight] = useState(false)
  const [qtyBy, setQtyBy] = useState({
    weight_unit: false,
    pieces: true
  })
  const [pricePerWeightUnit, setPricePerWeightUnit] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
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

  const handleSwitchQtyUnit = (val) => {
    setQtyBy({ [val]: true, [!val]: false })
  }

  const getOverFlowImage = (url) => {
    const keys = url.split('/')
    const _videoId = keys[keys.length - 1]
    const overFlowImg = 'http://img.youtube.com/vi/' + _videoId + '/0.jpg'
    return overFlowImg
  }

  const onChangeProductCartQuantity = (quantity) => {
    if (quantity > maxProductQuantity) {
      setAlertState({
        open: true,
        content: [t('MAX_QUANTITY', 'The max quantity is _number_').replace('_number_', maxProductQuantity)]
      })
      return
    }
    handleChangeProductCartQuantity(quantity)
  }

  useEffect(() => {
    if (document.getElementById(`${tabValue}`)) {
      const extraHeight = windowSize.width < 769 ? 100 : 42
      const top = (tabValue === 'all') ? 0 : document.getElementById(`${tabValue}`).offsetTop - extraHeight
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
    const videoList = []
    imageList.push(product?.images || theme.images?.dummies?.product)
    if (product?.gallery && product?.gallery?.length > 0) {
      for (const galleryItem of product?.gallery) {
        if (galleryItem?.file) {
          imageList.push(galleryItem?.file)
        }
        if (galleryItem?.video) {
          const _url = galleryItem?.video.split('/')
          let _videoId = _url[_url?.length - 1]
          if (_videoId.includes('watch')) {
            const __url = _videoId.split('=')[1]
            _videoId = __url
          }
          const embedURL = 'https://www.youtube.com/embed/' + _videoId
          videoList.push(embedURL)
        }
      }
    }
    setGallery(imageList)
    setVideoGallery(videoList)

    if (product?.weight && product?.weight_unit) {
      setIsHaveWeight(true)
      setPricePerWeightUnit(product?.price / product?.weight)
    }
  }, [product])

  const scrollDown = () => {
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      return
    }
    const productContainer = document.getElementsByClassName('popup-dialog')[0]
    const errorCount = document.getElementsByClassName('error').length
    let myElement = document.getElementsByClassName('error')[0]
    if (errorCount > 1) {
      myElement = document.getElementsByClassName('error')[1]
    }
    myElement.scrollIntoView(true)
    productContainer.scrollTop -= 100
  }

  const handleSlideChange = () => {
    var videos = document.querySelectorAll('iframe, video')
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === 'video') {
        video.pause()
      } else {
        var src = video.src
        video.src = src
      }
    })
  }

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
                  watchOverflow
                  thumbs={{ swiper: thumbsSwiper }} className='mySwiper2'
                  onSlideChange={() => handleSlideChange()}
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                  {videoGallery && videoGallery.length > 0 && (
                    <>
                      {videoGallery.map((video, j) => (
                        <SwiperSlide key={j}>
                          <iframe style={{ border: 'none', width: '100%', height: '100%' }} src={video} />
                        </SwiperSlide>
                      ))}
                    </>
                  )}
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
                    }
                  }}
                  freeMode
                  watchSlidesProgress
                  className='product-thumb'
                  watchOverflow
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                  {videoGallery && videoGallery.length > 0 && (
                    <>
                      {videoGallery.map((video, j) => (
                        <SwiperSlide key={j}>
                          <VideoGalleryWrapper>
                            <img src={getOverFlowImage(video)} alt='' />
                            <MdcPlayCircleOutline />
                          </VideoGalleryWrapper>
                        </SwiperSlide>
                      ))}
                    </>
                  )}
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
                  {isHaveWeight ? (
                    <PriceContent>{parsePrice(pricePerWeightUnit)} / {product?.weight_unit}</PriceContent>
                  ) : (
                    <PriceContent>
                      {product?.price ? parsePrice(product?.price) : ''}
                      {product?.in_offer && (<span className='offer-price'>{product?.offer_price ? parsePrice(product?.offer_price) : ''}</span>)}
                    </PriceContent>
                  )}
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
                                          scrollDown={scrollDown}
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
                <div className='price'>
                  <h4>{productCart.total && parsePrice(productCart.total)}</h4>
                  {product?.minimum_per_order && productCart?.quantity < product?.minimum_per_order && <span>{t('MINIMUM_TO_ORDER', 'Minimum _number_ to order').replace('_number_', product?.minimum_per_order)}</span>}
                  {product?.maximum_per_order && productCart?.quantity > product?.maximum_per_order && <span>{t('MAXIMUM_TO_ORDER', 'Max. _number_ to order'.replace('_number_', product?.maximum_per_order))}</span>}
                </div>
                {
                  productCart && !isSoldOut && maxProductQuantity > 0 && (
                    <div className={isHaveWeight ? 'incdec-control show-weight-unit' : 'incdec-control'}>
                      <FiMinusCircle
                        onClick={decrement}
                        className={`${productCart.quantity === 1 || !productCart.quantity || isSoldOut ? 'disabled' : ''}`}
                      />
                      {
                        qtyBy?.pieces && (
                          <Input
                            className='qty'
                            value={productCart?.quantity || ''}
                            onChange={e => onChangeProductCartQuantity(parseInt(e.target.value))}
                            onKeyPress={(e) => {
                              if (!/^[0-9.]$/.test(e.key)) {
                                e.preventDefault()
                              }
                            }}
                          />
                        )
                      }
                      {qtyBy?.weight_unit && (
                        <Input className='qty' value={productCart.quantity * product?.weight} />
                      )}
                      <FiPlusCircle
                        onClick={increment}
                        className={`${maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : ''}`}
                      />
                      {isHaveWeight && (
                        <WeightUnitSwitch>
                          <WeightUnitItem onClick={() => handleSwitchQtyUnit('pieces')} active={qtyBy?.pieces}>{t('PIECES', 'pcs')}</WeightUnitItem>
                          <WeightUnitItem onClick={() => handleSwitchQtyUnit('weight_unit')} active={qtyBy?.weight_unit}>{product?.weight_unit}</WeightUnitItem>
                        </WeightUnitSwitch>
                      )}
                    </div>
                  )
                }

                {productCart && !isSoldOut && maxProductQuantity > 0 && auth && orderState.options?.address_id && (
                  <Button
                    className={`add ${(maxProductQuantity === 0 || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                    color='primary'
                    onClick={() => handleSaveProduct()}
                    disabled={orderState.loading || productCart?.quantity === 0 || (product?.minimum_per_order && (productCart?.quantity < product?.minimum_per_order)) || (product?.maximum_per_order && (productCart?.quantity > product?.maximum_per_order))}
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
        <Alert
          title={t('SEARCH', 'Search')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => setAlertState({ open: false, content: [] })}
          onAccept={() => setAlertState({ open: false, content: [] })}
          closeOnBackdrop={false}
        />
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
