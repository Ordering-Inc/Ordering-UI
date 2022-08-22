import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {
  ArrowLeft,
  Cart3
} from 'react-bootstrap-icons'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder,
  useUtils,
  useSession,
  useSite,
  useOrderingTheme
} from 'ordering-components'

import {
  ProductsContainer,
  ProductLoading,
  SkeletonItem,
  MobileCartViewWrapper,
  BusinessCartContent,
  EmptyCart,
  EmptyBtnWrapper,
  Title
} from './styles'

import { NotFoundSource } from '../NotFoundSource'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { RenderProductsLayout } from '../RenderProductsLayout'
import { Cart } from '../Cart'
import { Alert } from '../../../../../components/Confirm'
import { FloatingButton } from '../../../../../components/FloatingButton'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { ServiceForm } from '../ServiceForm'
const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    errors,
    openCategories,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    sortByValue,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    onProductRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    handleChangeSortBy,
    isCartOnProductsList,
    errorQuantityProducts,
    multiRemoveProducts,
    setAlertState,
    alertState,
    onCheckoutRedirect,
    handleUpdateProducts,
    professionalSelected,
    handleChangeProfessionalSelected,
    onChangeMetaTag,
    onBusinessClick
  } = props

  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const location = useLocation()
  const windowSize = useWindowSize()
  const [{ auth }] = useSession()
  const [{ site }] = useSite()
  const [orderingTheme] = useOrderingTheme()
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCartModal, setisCartModal] = useState(false)
  const [subcategoriesSelected, setSubcategoriesSelected] = useState([])

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}
  const isLazy = businessState?.business?.lazy_load_products_recommended
  const showViewOrderButton = !orderingTheme?.theme?.business_view?.components?.order_view_button?.hidden
  const sortByOptions = [
    { value: null, content: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By'), showOnSelected: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By') },
    { value: 'rank', content: t('RANK', theme?.defaultLanguages?.RANK || 'Rank'), showOnSelected: t('RANK', theme?.defaultLanguages?.RANK || 'Rank') },
    { value: 'a-z', content: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z'), showOnSelected: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z') }
  ]

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const onProductClick = (product) => {
    if (!((product?.type === 'service') && professionalSelected)) {
      if (site?.product_url_template) {
        onProductRedirect({
          slug: business?.slug,
          product: site.product_url_template.includes('product_slug') ? product?.slug : product.id,
          category: site.product_url_template.includes('category_slug') ? product?.category?.slug : product.category_id
        })
      } else {
        onProductRedirect({
          slug: business?.slug,
          product: product.id,
          category: product.category_id
        })
      }
    }
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

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts({ isNextPage: true })
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

  const handleGoToBusinessList = () => {
    events.emit('go_to_page', { page: 'search' })
  }
  const adjustBusiness = async (adjustBusinessId) => {
    const _carts = carts?.[adjustBusinessId]
    const products = carts?.[adjustBusinessId]?.products
    const unavailableProducts = products.filter(product => product.valid !== true)
    const alreadyRemoved = sessionStorage.getItem('already-removed')
    sessionStorage.removeItem('already-removed')

    if (unavailableProducts.length > 0) {
      multiRemoveProducts && await multiRemoveProducts(unavailableProducts, _carts)
      return
    }

    if (alreadyRemoved === 'removed') {
      setAlertState({ open: true, content: [t('NOT_AVAILABLE_PRODUCT', 'This product is not available.')] })
    }
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
    if (loading) return
    if (openProduct) {
      onChangeMetaTag && onChangeMetaTag(curProduct?.seo_title, curProduct?.seo_description, curProduct?.seo_keywords)
    } else {
      onChangeMetaTag && onChangeMetaTag(business?.slug, business?.description, business?.name)
    }
  }, [openProduct, loading, business, curProduct])

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
    if (business?.schedule?.length) {
      window.localStorage.setItem('business_schedule', JSON.stringify(business?.schedule))
    }

    return () => {
      if (business?.schedule?.length) {
        window.localStorage.removeItem('business_schedule')
      }
    }
  }, [business?.schedule])

  useEffect(() => {
    const adjustBusinessId = sessionStorage.getItem('adjust-cart-products')
    if (currentCart && adjustBusinessId) {
      sessionStorage.removeItem('adjust-cart-products')
      adjustBusiness(adjustBusinessId)
    }
  }, [currentCart])

  return (
    <>
      <ProductsContainer>
        {!props.useKioskApp && (
          <ArrowLeft onClick={() => handleGoToBusinessList()} />
        )}
        <RenderProductsLayout
          errors={errors}
          isError={error}
          isLoading={loading}
          isLazy={isLazy}
          business={business}
          categoryId={categoryId}
          searchValue={searchValue}
          sortByValue={sortByValue}
          currentCart={currentCart}
          businessState={businessState}
          sortByOptions={sortByOptions}
          categoryState={categoryState}
          categoriesState={props.categoriesState}
          isCustomLayout={props.isCustomLayout}
          useKioskApp={props.useKioskApp}
          categorySelected={categorySelected}
          openCategories={openCategories}
          openBusinessInformation={openBusinessInformation}
          isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
          handleChangeSortBy={handleChangeSortBy}
          errorQuantityProducts={errorQuantityProducts}
          onClickCategory={handleChangeCategory}
          featuredProducts={featuredProducts}
          subcategoriesSelected={subcategoriesSelected}
          handler={handler}
          onProductClick={onProductClick}
          handleSearchRedirect={handleSearchRedirect}
          handleChangeSearch={handleChangeSearch}
          setOpenBusinessInformation={setOpenBusinessInformation}
          handleCartOpen={(val) => setIsCartOpen(val)}
          setSubcategoriesSelected={setSubcategoriesSelected}
          handleUpdateProducts={handleUpdateProducts}
          professionalSelected={professionalSelected}
          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
          onBusinessClick={onBusinessClick}
        />

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
      {currentCart?.products?.length > 0 && auth && !isCartOpen && showViewOrderButton && (
        <FloatingButton
          btnText={
            !currentCart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', theme?.defaultLanguages?.MAXIMUM_SUBTOTAL_ORDER || 'Maximum subtotal order')}: ${parsePrice(currentCart?.maximum)}`
            ) : (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100)) ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', theme?.defaultLanguages?.MINIMUN_SUBTOTAL_ORDER || 'Minimum subtotal order:')} ${parsePrice(currentCart?.minimum)}`
            ) : !openUpselling !== canOpenUpselling ? t('VIEW_ORDER', theme?.defaultLanguages?.VIEW_ORDER || 'View Order') : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')
          }
          isSecondaryBtn={!currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
          btnValue={currentCart?.products?.length}
          handleClick={() => setOpenUpselling(true)}
          disabled={openUpselling || !currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
        />
      )}
      {windowSize.width < 900 && currentCart?.products?.length > 0 && (
        <MobileCartViewWrapper>
          <span>{parsePrice(currentCart?.total)}</span>
          <Button color='primary' onClick={() => setisCartModal(true)}>{t('VIEW_CART', 'View cart')}</Button>
        </MobileCartViewWrapper>
      )}
      <Modal
        width='45%'
        open={isCartModal}
        onClose={() => setisCartModal(false)}
        padding='0'
      >
        <BusinessCartContent isModal>
          <Title style={{ textAlign: 'center', marginTop: '5px' }}>{t('YOUR_CART', 'Your cart')}</Title>
          {currentCart?.products?.length > 0 ? (
            <>
              <Cart
                isStore
                isCustomMode
                isForceOpenCart
                cart={currentCart}
                isCartPending={currentCart?.status === 2}
                isProducts={currentCart.products.length}
                isCartOnProductsList={isCartOnProductsList}
                handleCartOpen={(val) => setIsCartOpen(val)}
              />
            </>
          ) : (
            <EmptyCart>
              <div className='empty-content'>
                <Cart3 />
                <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
              </div>
              <EmptyBtnWrapper>
                <span>{parsePrice(0)}</span>
                <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
              </EmptyBtnWrapper>
            </EmptyCart>
          )}
        </BusinessCartContent>
      </Modal>

      <Modal
        width={props.useKioskApp ? '80%' : '760px'}
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
        disableOverflowX
      >

        {productModal.loading && !productModal.error && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} count={props.useKioskApp ? 12 : 8} />
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
          <>
            {(((productModal?.product?.type === 'service') || (curProduct?.type === 'service')) && professionalSelected) ? (
              <ServiceForm
                businessSlug={business?.slug}
                useKioskApp={props.useKioskApp}
                product={productModal.product || curProduct}
                businessId={business?.id}
                onSave={handlerProductAction}
                professionalList={business?.professionals}
                professionalSelected={professionalSelected}
                handleChangeProfessional={handleChangeProfessionalSelected}
              />
            ) : (
              <ProductForm
                businessSlug={business?.slug}
                useKioskApp={props.useKioskApp}
                product={productModal.product || curProduct}
                businessId={business?.id}
                onSave={handlerProductAction}
              />
            )}
          </>
        )}
      </Modal>
      <Alert
        title={t('ERROR', 'Error')}
        open={alertState?.open}
        content={t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.')}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
      />
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
