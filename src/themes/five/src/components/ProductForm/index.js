import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'
import MdcPlayCircleOutline from '@meronex/icons/mdc/MdcPlayCircleOutline'
import { LinkableText } from '../LinkableText'
import { AutoScroll } from '../AutoScroll'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils,
  useSite,
  useConfig
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
  const [{ site }] = useSite()
  const productUrlTemplate = site?.product_url_template
  const [urlToShare, setUrlToShare] = useState(null)
  const [modalPageToShow, setModalPageToShow] = useState('login')
  const [tabValue, setTabValue] = useState('all')
  const productContainerRef = useRef(null)
  const [gallery, setGallery] = useState([])
  const [videoGallery, setVideoGallery] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isHaveWeight, setIsHaveWeight] = useState(false)
  const [isScrollAvailable, setIsScrollAvailable] = useState(false)
  const [qtyBy, setQtyBy] = useState({
    weight_unit: false,
    pieces: true
  })
  const [pricePerWeightUnit, setPricePerWeightUnit] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const galleryLength = gallery?.length + videoGallery?.length

  const [{ configs }] = useConfig()
  const unaddressedTypes = configs?.unaddressed_order_types_allowed?.value.split('|').map(value => Number(value)) || []

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
    if (document.getElementById(`${value}`)) {
      const extraHeight = 55
      const top = document.getElementById(`${value}`).offsetTop - extraHeight
      const scrollElement = document.querySelector('.popup-dialog')

      scrollElement.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    }
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

  const scrollDown = () => {
    const adjustHeight = windowSize?.width > 768 ? 50 : 55
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      return
    }
    const productContainer = document.getElementsByClassName('popup-dialog')[0]
    const unselectedFirstSubOption = document.getElementsByClassName('error')?.[0]?.parentNode

    if (unselectedFirstSubOption) {
      const top = unselectedFirstSubOption.offsetTop
      productContainer.scrollTo({
        top: top - adjustHeight,
        behavior: 'smooth'
      })
    }
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

  useEffect(() => {
    if (isScrollAvailable) {
      setIsScrollAvailable(false)
      scrollDown()
    }
  }, [errors])

  useEffect(() => {
    const scrollElement = document.querySelector('.popup-dialog')
    const handleScroll = () => {
      const extraHeight = 60
      if (product?.ingredients.length > 0 || product?.extras.length > 0) {
        const menuList = []
        if (product?.ingredients?.length > 0) menuList.push('ingredients')
        product?.extras?.length > 0 && product.extras.sort((a, b) => a.rank - b.rank).forEach(extra => {
          extra.options?.length > 0 && extra.options.sort((a, b) => a.rank - b.rank).forEach(option => {
            showOption(option) && menuList.push(`id_${option?.id}`)
          })
        })
        menuList.forEach(menu => {
          const elementTop = scrollElement.scrollTop
          const topPos = document.getElementById(menu).offsetTop
          if (Math.abs(elementTop - topPos) < extraHeight) {
            setTabValue(menu)
            const elementLeft = document.getElementById(`menu_${menu}`).offsetLeft
            const scrollLeft = document.getElementById('all').scrollLeft
            if (elementLeft < scrollLeft) {
              document.getElementById('all').scrollTo({
                left: elementLeft,
                behavior: 'smooth'
              })
            }
            if (elementLeft < scrollLeft + scrollElement.clientWidth) {
              document.getElementById('all').scrollTo({
                left: elementLeft - scrollElement.clientWidth / 2,
                behavior: 'smooth'
              })
            }
          }
        })
      }
    }
    scrollElement && scrollElement.addEventListener('scroll', handleScroll)

    return () => scrollElement && scrollElement.removeEventListener('scroll', handleScroll)
  }, [showOption])

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

  useEffect(() => {
    let _urlToShare = null
    const productSlug = product?.slug
    const categorySlug = product?.category?.slug
    const categoryId = product?.category_id
    const productId = product?.id
    if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug') {
      _urlToShare = `${window.location.origin}/store/${businessSlug}/${categorySlug}/${productSlug}`
    }
    if (/\/store\/:category_slug\/:product_slug\?[a-zA-Z]+=:business_slug/.test(productUrlTemplate)) {
      const businessParameter = productUrlTemplate.replace('/store/:category_slug/:product_slug?', '').replace('=:business_slug', '')
      _urlToShare = `${window.location.origin}/store/${categorySlug}/${productSlug}?${businessParameter}=${businessSlug}`
    }
    if (/\/store\/:business_slug\?[a-zA-Z]+=:category_id&[a-zA-Z]+=:product_id/.test(productUrlTemplate)) {
      const ids = productUrlTemplate.split('?')[1].split('&')
      const categoryParameter = ids[0].replace('=:category_id', '')
      const productParameter = ids[1].replace('=:product_id', '')
      _urlToShare = `${window.location.origin}/store/${businessSlug}?${categoryParameter}=${categoryId}&${productParameter}=${productId}`
    }
    if (/\/:business_slug\/:category_slug\/:product_slug/.test(productUrlTemplate) && productUrlTemplate.indexOf('/store') !== 0) {
      _urlToShare = `${window.location.origin}/${businessSlug}/${categorySlug}/${productSlug}`
    }
    if (/\/:business_slug\?[a-zA-Z]+=:category_id&[a-zA-Z]+=:product_id/.test(productUrlTemplate) && productUrlTemplate.indexOf('/store') !== 0) {
      const ids = productUrlTemplate.split('?')[1].split('&')
      const categoryParameter = ids[0].replace('=:category_id', '')
      const productParameter = ids[1].replace('=:product_id', '')
      _urlToShare = `${window.location.origin}/${businessSlug}?${categoryParameter}=${categoryId}&${productParameter}=${productId}`
    }
    setUrlToShare(_urlToShare)
  }, [])

  return (
    <ProductContainer
      className='product-container'
      ref={productContainerRef}
      useKioskApp={props.useKioskApp}
    >
      {loading && !error && (
        <SkeletonBlock width={90}>
          <Skeleton variant='rect' height={50} />
          <Skeleton variant='rect' height={50} />
          <Skeleton variant='rect' height={200} />
        </SkeletonBlock>
      )}

      {product && !loading && !error && (
        <ProductShareWrapper>
          {!props.useKioskApp ? (
            <ProductShare
              defaultUrl={urlToShare}
              slug={businessSlug}
              categoryId={product?.category_id}
              productId={product?.id}
            />
          ) : (
            <div style={{ height: 30 }} />
          )}
        </ProductShareWrapper>
      )}

      {!loading && !error && product && (
        <>
          <WrapperImage>
            <SwiperWrapper isSoldOut={isSoldOut}>
              <Swiper
                spaceBetween={10}
                navigation
                watchOverflow
                observer
                observeParents
                parallax
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
              {galleryLength > 2 && (
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
                  observer
                  observeParents
                  parallax
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
              )}
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
              {product?.description && (
                <ProductDescription>
                  <LinkableText
                    text={product?.description}
                  />
                </ProductDescription>
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
            <Divider />
            <ProductEdition>
              {
                (product?.ingredients.length > 0 || product?.extras.length > 0) && (
                  <ProductTabContainer id='all'>
                    <Tabs>
                      <AutoScroll scrollId='optionList'>
                        {
                          product?.ingredients.length > 0 && (
                            <Tab
                              key='ingredients'
                              id='menu_ingredients'
                              active={tabValue === 'ingredients'}
                              onClick={() => handleChangeTabValue('ingredients')}
                              borderBottom
                            >
                              {t('INGREDIENTS', 'ingredients')}
                            </Tab>
                          )
                        }
                        {
                          product?.extras.sort((a, b) => a.rank - b.rank).map(extra => extra.options.sort((a, b) => a.rank - b.rank).map(option => {
                            return (
                              showOption(option) && (
                                <Tab
                                  key={option?.id}
                                  id={`menu_id_${option?.id}`}
                                  active={tabValue === `id_${option?.id}`}
                                  onClick={() => handleChangeTabValue(`id_${option?.id}`)}
                                  borderBottom
                                >
                                  {option?.name}
                                </Tab>
                              )
                            )
                          }))
                        }
                      </AutoScroll>
                    </Tabs>
                  </ProductTabContainer>
                )
              }
              {product?.ingredients.length > 0 && (
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
              )}
              <div>
                {
                  product?.extras.sort((a, b) => a.rank - b.rank).map(extra => extra.options.sort((a, b) => a.rank - b.rank).map(option => {
                    const currentState = productCart.options[`id:${option?.id}`] || {}
                    return (
                      <React.Fragment key={option?.id}>
                        {showOption(option) && (
                          <ProductOption
                            option={option}
                            currentState={currentState}
                            error={errors[`id:${option?.id}`]}
                          >
                            <WrapperSubOption className={isError(option?.id)}>
                              {
                                option.suboptions.filter(suboptions => suboptions.enabled).sort((a, b) => a.rank - b.rank).map(suboption => {
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
                                      setIsScrollAvailable={setIsScrollAvailable}
                                    />
                                  )
                                })
                              }
                            </WrapperSubOption>
                          </ProductOption>)}
                      </React.Fragment>
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
              <div className='price-amount-block'>
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
                        <Input className='qty' value={(productCart.quantity * product?.weight).toFixed(2)} />
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
              </div>

              {productCart && !isSoldOut && maxProductQuantity > 0 && auth && (orderState.options?.address_id || unaddressedTypes.includes(orderState?.options?.type)) && (
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

              {auth && !(orderState.options?.address_id || unaddressedTypes.includes(orderState?.options?.type)) && (
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
          width='760px'
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
              useKioskApp={props.useKioskApp}
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
