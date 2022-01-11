import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder,
  useSession
} from 'ordering-components'
import {
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrappLayout,
  BusinessProductsCategorieWrapper,
  CartegoryTitle,
  AgeConfirmContainer,
  UnderAge,
  UnderAgeButtons,
  BreackFastCheckModalContent,
  AgreeButtonWrapper
} from './styles'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { BusinessProductsList } from '../BusinessProductsList'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { Modal } from '../../../../../components/Modal'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { CustomModal } from '../CustomModal'
import { ProductForm } from '../ProductForm'
import { Alert } from '../../../../../components/Confirm'
import { Button } from '../../styles/Buttons'

const PIXELS_TO_SCROLL = 300
const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    onProductRedirect,
    onCheckoutRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    isCartOnProductsList,
    errorQuantityProducts
  } = props
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const [events] = useEvent()
  const [{ user }] = useSession()
  const location = useLocation()
  const [openProduct, setModalIsOpen] = useState(false)
  const [openAgeConfirm, setOpenAgeConfirm] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}
  const [isOver18Age, setIsOver18Age] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [ageError, setAgeError] = useState(false)
  const [isNestBreackFast, setIsNestBreackFast] = useState(false)
  const [businessOpentime, setBusinessOpentime] = useState('')

  const ageValidationCategorys = ['Vinos'.toUpperCase(), 'Cervezas'.toUpperCase()]
  const breakFastCategories = ['Desayunos'.toUpperCase(), 'Desayuno'.toUpperCase()]
  const url = window.location.pathname

  useEffect(() => {
    const urls = url.split('/')
    if (business?.categories && business?.categories.length > 0 && urls.length === 5 && urls[1] === 'store') {
      const _curCategory = business.categories.filter(c => c.id === parseInt(urls[3]))
      const _curProduct = _curCategory[0]?.products.filter(p => p.id === parseInt(urls[4]))
      setCurProduct(_curProduct[0])
      setModalIsOpen(true)
      events.emit('product_clicked', _curProduct[0])
    }
  }, [business, url])

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const checkIsHaveBreakFast = (product) => {
    const existIndex = Object.keys(product).findIndex((name) => name === 'breakfast')
    if (existIndex > -1) {
      return true
    }
    return false
  }

  const onProductClick = (product) => {
    let _categoryName = business?.categories.filter(category => category.id === product?.category_id)[0].name
    if (_categoryName.indexOf('/')) {
      _categoryName = _categoryName.split('/')[0]
      _categoryName.toUpperCase()
    } else {
      _categoryName.toUpperCase()
    }
    if (breakFastCategories.indexOf(_categoryName) > -1) {
      const hour = new Date().getHours()
      const businessOpenTime = scheduleFormatted(business.today.lapses[0].open)
      const _isHaveBreakFastMeta = checkIsHaveBreakFast(product)
      if (_isHaveBreakFastMeta && hour >= 12) {
        setBusinessOpentime(businessOpenTime)
        setIsNestBreackFast(true)
        return
      }
    }
    if (ageError && ageValidationCategorys.indexOf(_categoryName) > -1) {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('UNDERAGE_MESSAGE', 'We cannot add this product because you are a minor.')]
      })
      return
    }
    if (!isOver18Age && ageValidationCategorys.indexOf(_categoryName) > -1) {
      setOpenAgeConfirm(true)
      return
    }
    onProductRedirect({
      slug: business?.slug,
      product: product.id,
      category: product.category_id
    })
    setCurProduct(product)
    setModalIsOpen(true)
    events.emit('product_clicked', product)
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
      onProductRedirect({
        slug: business?.slug
      })
    }
  }

  const closeModalProductForm = () => {
    setModalIsOpen(false)
    handleUpdateInitialRender(false)
    updateProductModal(null)
    setCurProduct(null)
    onProductRedirect({
      slug: business?.slug
    })
  }

  const closeCustomModal = () => {
    setOpenAgeConfirm(false)
    setIsNestBreackFast(false)
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  const handleChangePage = (data) => {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false)
    }
  }

  const handleUpsellingPage = () => {
    onCheckoutRedirect(currentCart?.uuid)
    setOpenUpselling(false)
    setCanOpenUpselling(false)
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
  }

  useEffect(() => {
    if (categoryId && productId && isInitialRender) {
      if (productModal?.product?.id) {
        setCurProduct(productModal.product)
      }
      setModalIsOpen(true)
    }
  }, [productModal])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
    events.emit('get_current_view')
  }, [])

  useEffect(() => {
    events.on('change_view', handleChangePage)
    return () => {
      events.off('change_view', handleChangePage)
    }
  }, [openProduct])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (user?.birthdate) {
      const date = new Date()
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }).replace(/ /g, '-')
      const thisYear = parseInt(formattedDate.slice(-4))
      const birthDateYear = parseInt((user?.birthdate).slice(0, 4))
      const result = thisYear - birthDateYear
      if (result <= 18) {
        setAgeError(true)
      } else {
        setIsOver18Age(true)
      }
    }
  }, [user?.birthdate])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        {
          !loading && business?.id && (
            <>
              <BusinessBasicInformation
                businessState={businessState}
                setOpenBusinessInformation={setOpenBusinessInformation}
                openBusinessInformation={openBusinessInformation}
              />
              <WrappLayout
                isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
              >
                {!(business?.categories?.length === 0 && !categoryId) && (
                  <BusinessProductsCategorieWrapper>
                    <CartegoryTitle>
                      {t('OUR_MENU', 'Our Menu')}
                    </CartegoryTitle>
                    <BusinessProductsCategories
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      categorySelected={categorySelected}
                      onClickCategory={handleChangeCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                      isVerticalList
                    />
                  </BusinessProductsCategorieWrapper>
                )}
                <WrapContent id='productWrapper'>
                  <BusinessProductsList
                    categories={[
                      { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                      { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                      ...business?.categories.sort((a, b) => a.rank - b.rank)
                    ]}
                    category={categorySelected}
                    categoryState={categoryState}
                    businessId={business.id}
                    errors={errors}
                    onProductClick={onProductClick}
                    handleSearchRedirect={handleSearchRedirect}
                    featured={featuredProducts}
                    searchValue={searchValue}
                    isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                    handleClearSearch={handleChangeSearch}
                    errorQuantityProducts={errorQuantityProducts}
                  />
                </WrapContent>
              </WrappLayout>
            </>
          )
        }
        {loading && !error && (
          <>
            <BusinessBasicInformation
              businessState={{ business: {}, loading: true }}
              isSkeleton
              handler={handler}
              openBusinessInformation={openBusinessInformation}
            />
            <WrappLayout>
              <BusinessProductsCategorieWrapper>
                <SkeletonItem>
                  <Skeleton height={20} width={120} />
                </SkeletonItem>
                <BusinessProductsCategories
                  categories={[]}
                  isSkeleton
                  openBusinessInformation={openBusinessInformation}
                  isVerticalList
                />
              </BusinessProductsCategorieWrapper>
              <WrapContent>
                <BusinessProductsList
                  categories={[]}
                  category={categorySelected}
                  categoryState={categoryState}
                  isBusinessLoading={loading}
                  errorQuantityProducts={errorQuantityProducts}
                />
              </WrapContent>
            </WrappLayout>
          </>
        )}
        {
          !loading && business && !Object.keys(business).length && (
            <NotFoundSource
              content={t('NOT_FOUND_BUSINESS_PRODUCTS', theme?.defaultLanguages?.NOT_FOUND_BUSINESS_PRODUCTS || 'No products to show at this business, please try with other business.')}
              btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
              onClickButton={() => handleSearchRedirect()}
            />
          )
        }
        {
          !loading && !business && location.pathname.includes('/store/') && (
            <NotFoundSource
              content={t('ERROR_NOT_FOUND_STORE', theme?.defaultLanguages?.ERROR_NOT_FOUND_STORE || 'Sorry, an error has occurred with business selected.')}
              btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
              onClickButton={handleSearchRedirect}
            />
          )
        }
        {
          !loading && !business && !location.pathname.includes('/store/') && (
            <PageNotFound />
          )
        }
        {error && error.length > 0 && Object.keys(business).length && (
          <NotFoundSource
            content={error[0]?.message || error[0]}
            btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
            onClickButton={handleSearchRedirect}
          />
        )}
      </ProductsContainer>
      <Modal
        width='60%'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
      >
        {productModal.loading && !productModal.error && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} count={8} />
            </SkeletonItem>
          </ProductLoading>
        )}
        {productModal.error && productModal.error.length > 0 && (
          <NotFoundSource
            content={productModal.error[0]?.message || productModal.error[0]}
          />
        )}
        {isInitialRender && !productModal.loading && !productModal.error && !productModal.product && (
          <NotFoundSource
            content={t('ERROR_GET_PRODUCT', theme?.defaultLanguages?.ERROR_GET_PRODUCT || 'Sorry, we couldn\'t find the requested product.')}
          />
        )}
        {(productModal.product || curProduct) && (
          <ProductForm
            businessSlug={business?.slug}
            product={productModal.product || curProduct}
            businessId={business?.id}
            onSave={handlerProductAction}
          />
        )}
      </Modal>
      <CustomModal
        width='40%'
        padding='0'
        open={openAgeConfirm || isNestBreackFast}
        onClose={() => closeCustomModal()}
      >
        {openAgeConfirm && (
          <AgeCheckForm
            setIsOver18Age={setIsOver18Age}
            setOpenAgeConfirm={setOpenAgeConfirm}
            setAgeError={setAgeError}
          />
        )}
        {isNestBreackFast && (
          <BreackFastCheck
            businessOpentime={businessOpentime}
            closeCustomModal={closeCustomModal}
          />
        )}
      </CustomModal>
      {ageError && (
        <Alert
          title='Alsea Colombia'
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => handleCloseAlerts()}
          onAccept={() => handleCloseAlerts()}
          closeOnBackdrop={false}
        />
      )}
      {currentCart?.products && openUpselling && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          business={currentCart?.business}
          cartProducts={currentCart?.products}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)
  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessAndProductList {...businessProductslistingProps} />
  )
}

export const AgeCheckForm = (props) => {
  const theme = useTheme()
  const windowSize = useWindowSize()
  const [, t] = useLanguage()
  const { setIsOver18Age, setOpenAgeConfirm, setAgeError } = props
  return (
    <AgeConfirmContainer
      bgimage={windowSize.width < 768 ? (theme.images?.alsea?.confirmBackMobile) : (theme.images?.alsea?.confirmBackDesktop)}
    >
      <UnderAge>
        <h2>{t('AGE_CONFIRM_TITLE', 'You are of age?')}</h2>
        <UnderAgeButtons>
          <Button
            color='primary'
            onClick={() => {
              setIsOver18Age(true)
              setOpenAgeConfirm(false)
            }}
          > {t('YES', 'Yes')}
          </Button>
          <Button
            color='primary'
            outline
            onClick={() => {
              setAgeError(true)
              setOpenAgeConfirm(false)
            }}
          > {t('NO', 'No')}
          </Button>
        </UnderAgeButtons>
      </UnderAge>
    </AgeConfirmContainer>
  )
}
export const BreackFastCheck = (props) => {
  const [, t] = useLanguage()
  const { businessOpentime, closeCustomModal } = props
  return (
    <BreackFastCheckModalContent>
      <p>{t('ARCHIES_BREAKFAST_ALERT').replaceAll('_schedule_open_', businessOpentime)}</p>
      <AgreeButtonWrapper>
        <Button
          color='primary'
          onClick={() => closeCustomModal()}
        > {t('OK', 'Ok')}
        </Button>
      </AgreeButtonWrapper>
    </BreackFastCheckModalContent>
  )
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
