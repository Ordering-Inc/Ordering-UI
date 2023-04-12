import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import AiFillMinusCircle from '@meronex/icons/ai/AiFillMinusCircle'
import MdClose from '@meronex/icons/md/MdClose'

import { LinkableText } from '../../../LinkableText'

import {
  ProductForm as ProductOptions,
  useSession,
  useLanguage,
  useOrder,
  useUtils,
  useApi,
  useConfig
} from 'ordering-components'

import { scrollTo } from '../../../../../../../utils'
import { useWindowSize } from '../../../../../../../hooks/useWindowSize'

import { ProductIngredient } from '../../../ProductIngredient/layouts/pfchangs'
import { ProductOption } from '../../../ProductOption/layouts/pfchangs'
import { ProductOptionSubOption } from '../../../ProductOptionSubOption/layouts/pfchangs'
import { LoginForm } from '../../../LoginForm/layouts/pfchangs'
import { SignUpForm } from '../../../SignUpForm/layouts/pfchangs'
import { ForgotPasswordForm } from '../../../ForgotPasswordForm'
import { AddressList } from '../../../AddressList'

import { Modal } from '../../../Modal'
import { Alert } from '../../../Confirm/layouts/pfchangs'
import { Button } from '../../../../styles/Buttons'

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
  ProductName,
  Properties,
  ProductMeta,
  EstimatedPersons,
  ProductDescription,
  ProductTagsListContainer,
  ProductTagWrapper,
  ModalIcon,
  SwiperWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { Input, TextArea } from '../../../../styles/Inputs'
import { NotFoundSource } from '../../../NotFoundSource'
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
    handleChangeCommentState,
    closeModalProductForm,
    handleCustomSave,
    brand_id
  } = props

  const { product, loading, error } = productObject

  const windowSize = useWindowSize()
  const [{ auth, user }, { login }] = useSession()
  const [, t] = useLanguage()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [orderState] = useOrder()
  const [{ optimizeImage, parsePrice }] = useUtils()
  const theme = useTheme()
  const [ordering] = useApi()
  const [{ configs }] = useConfig()

  const [modalPageToShow, setModalPageToShow] = useState('login')
  const productContainerRef = useRef(null)
  const [gallery, setGallery] = useState([])
  const [isScrollAvailable, setIsScrollAvailable] = useState(false)
  const [otpDataUser, setOtpDataUser] = useState(null)
  const [showRedFlags, setShowRedFlags] = useState(false)
  const [isShowCommentsByBrand, setShowCommentsByBrand] = useState(true)

  const isAlsea = ordering.project === 'alsea'

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const closeModal = (deleteUser) => {
    setModalIsOpen(false)
    setModalPageToShow('login')
    setOtpDataUser(null)
    if (otpDataUser && deleteUser) {
      deleteOtpUser()
    }
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
      handleCustomSave && handleCustomSave()
      return
    }
    setShowRedFlags(true)
    scrollDown()
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token || otpDataUser?.token
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
    const adjustHeight = windowSize?.width > 768 ? 90 : 100
    const isErrors = Object.values(errors).length > 0
    if (!isErrors) {
      return
    }
    const productContainer = document.getElementsByClassName('popup-dialog')[0]
    const unselectedFirstSubOption = document.getElementsByClassName('error')?.[0]

    if (unselectedFirstSubOption) {
      const top = unselectedFirstSubOption.offsetTop
      productContainer.scrollTo({
        top: top - adjustHeight,
        behavior: 'smooth'
      })
    }
  }

  const deleteOtpUser = async () => {
    try {
      await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-temp'}.ordering.co/alseaplatform/delete_new_user.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: otpDataUser.id,
          token: otpDataUser.token
        })
      })
    } catch (err) {
      setAlertState({
        ...alertState,
        content: err.message,
        open: true
      })
    }
  }

  useEffect(() => {
    if (isScrollAvailable) {
      setIsScrollAvailable(false)
      scrollDown()
    }
  }, [errors])

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
  }, [product])

  useEffect(() => {
    if (!otpDataUser && modalPageToShow === 'signup') {
      setModalPageToShow(null)
    }
  }, [otpDataUser, modalPageToShow])

  useEffect(() => {
    if (auth) {
      setOtpDataUser(null)
    }
  }, [auth])

  useEffect(() => {
    if (!configs && !configs?.special_notes_per_brand && !configs?.special_notes_per_brand?.value) return
    const snpbDictionary = JSON.parse(configs?.special_notes_per_brand?.value);
    const specialNotesPerBrand = {}
    snpbDictionary.forEach((brandNote) => {
      specialNotesPerBrand['brand_' + brandNote.brand_id] = brandNote.enabled;
    })
    setShowCommentsByBrand(!!specialNotesPerBrand[`brand_${brand_id}`])
  }, [configs?.special_notes_per_brand])

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

      {!loading && !error && product && (
        <>
          <ModalIcon>
            <MdClose onClick={() => closeModalProductForm()} />
          </ModalIcon>
          <WrapperImage>
            <SwiperWrapper isSoldOut={isSoldOut}>
              <Swiper
                spaceBetween={10}
                navigation
                watchOverflow
                observer
                observeParents
                parallax
                className='mySwiper2'
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
              </ProductName>
              <Properties>
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
            <ProductEdition>
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
              <div>
                {
                  product?.extras.sort((a, b) => a.rank - b.rank).map(extra => extra.options.sort((a, b) => a.rank - b.rank).map(option => {
                    const currentState = productCart.options[`id:${option?.id}`] || {}
                    return (
                      <div key={option?.id} id={`id_${option?.id}`}>
                        {
                          showOption(option) && (
                            <ProductOption
                              option={option}
                              currentState={currentState}
                              error={errors[`id:${option?.id}`]}
                              pfchangs
                              showRedFlags={showRedFlags}
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
                            </ProductOption>
                          )
                        }
                      </div>
                    )
                  }))
                }
              </div>
              {isShowCommentsByBrand && (
                <ProductComment>
                  <SectionTitle>{t('NAME', 'Name')} ({t('NO_SPECIAL_INSTRUCTIONS', 'no special instructions')}):</SectionTitle>
                  <TextArea
                    rows={1}
                    placeholder={`${t('ENTER_RECIPIENT', 'Enter recipient')} (32 ${t('CHARACTER_LIMIT', 'Character limit')})`}
                    defaultValue={productCart.comment}
                    onChange={handleChangeCommentState}
                    disabled={!(productCart && !isSoldOut && maxProductQuantity)}
                    maxLength={60}
                  />
                </ProductComment>
              )}
            </ProductEdition>
            <ProductActions>
              <div className='price-amount-block'>
                {
                  productCart && !isSoldOut && maxProductQuantity > 0 && (
                    <>
                      <div className='price'>
                        {product?.minimum_per_order && productCart?.quantity < product?.minimum_per_order && <span>{t('MINIMUM_TO_ORDER', 'Minimum _number_ to order').replace('_number_', product?.minimum_per_order)}</span>}
                        {product?.maximum_per_order && productCart?.quantity > product?.maximum_per_order && <span>{t('MAXIMUM_TO_ORDER', 'Max. _number_ to order'.replace('_number_', product?.maximum_per_order))}</span>}
                      </div>
                      <div className='incdec-control'>
                        {product?.calories && (
                          <>
                            <span className='calories'>{product?.calories}{' '}cals</span><span>|</span>
                          </>
                        )}
                        <span className='qtyby'>{t('QTY', 'QTY')}.</span>
                        <AiFillMinusCircle
                          onClick={decrement}
                          className={`${productCart.quantity === 1 || !productCart.quantity || isSoldOut ? 'disabled' : ''}`}
                        />
                        <p className='qtyval'>
                          {productCart?.quantity}
                        </p>
                        <AiFillPlusCircle
                          onClick={increment}
                          className={`${maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : ''}`}
                        />
                      </div>
                    </>
                  )
                }
              </div>

              {productCart && !isSoldOut && maxProductQuantity > 0 && auth && orderState.options?.address_id && (
                <Button
                  className={`add ${maxProductQuantity === 0 ? 'disabled' : ''}`}
                  color='primary'
                  onClick={() => handleSaveProduct()}
                  disabled={orderState.loading || productCart?.quantity === 0 || (product?.minimum_per_order && (productCart?.quantity < product?.minimum_per_order)) || (product?.maximum_per_order && (productCart?.quantity > product?.maximum_per_order))}
                >
                  {orderState.loading ? (
                    <span>{t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')}</span>
                  ) : (
                    <span>
                      {editMode ? t('UPDATE', theme?.defaultLanguages?.UPDATE || 'Update') : t('ADD', theme?.defaultLanguages?.ADD || 'Add')} - {productCart.total && parsePrice(productCart.total)}
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
          onClose={() => closeModal(true)}
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
              defaultLoginTab='otp'
              setOtpDataUser={setOtpDataUser}
              handleOpenSignup={() => setModalPageToShow('signup')}
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
              otpDataUser={otpDataUser}
              closeModal={() => closeModal()}
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
