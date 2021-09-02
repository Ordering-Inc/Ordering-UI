import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder,
  useSession,
  useUtils,
  useConfig
} from 'ordering-components'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { ProductForm } from '../../../../../components/ProductForm'
import { FloatingButton } from '../../../../../components/FloatingButton'
import { Modal } from '../../../../../components/Modal'
import { UpsellingPage } from '../../../../../components/UpsellingPage'

import { Cart } from '../Cart'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { NavBar } from '../NavBar'

import {
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrappLayout
} from './styles'

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

  const [{ configs }] = useConfig()
  const addProductWithOneClick = configs?.add_product_with_one_click?.value
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }, { addProduct }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const location = useLocation()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [isMenuShow, setIsMenuShow] = useState(true)

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  const onProductClick = (product) => {
    if (product.extras.length === 0 && !product.inventoried && !Object.is(auth, null) && addProductWithOneClick) {
      addProduct(product, currentCart)
    } else {
      onProductRedirect({
        slug: business?.slug,
        product: product.id,
        category: product.category_id
      })
      setCurProduct(product)
      setModalIsOpen(true)
      events.emit('product_clicked', product)
    }
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

  const onClickCategory = (category) => {
    handleChangeCategory(category)
    setIsMenuShow(false)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {!isMenuShow && (
        <NavBar
          title={categorySelected?.name}
          handleGoBack={() => setIsMenuShow(true)}
        />
      )}
      <ProductsContainer>
        {
          !loading && business?.id && (
            <WrappLayout
              isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
            >
              <div className='bp-list'>
                {isMenuShow ? (
                  <>
                    {!(business?.categories?.length === 0 && !categoryId) && (
                      <BusinessProductsCategories
                        categories={[...business?.categories.sort((a, b) => a.rank - b.rank)]}
                        categorySelected={categorySelected}
                        onClickCategory={onClickCategory}
                        featured={featuredProducts}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <WrapContent>
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
                  </>
                )}
              </div>
              {isCartOnProductsList && currentCart?.products?.length > 0 && (
                <Cart
                  isForceOpenCart
                  cart={currentCart}
                  isCartPending={currentCart?.status === 2}
                  isProducts={currentCart.products.length}
                  isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                  handleCartOpen={(val) => setIsCartOpen(val)}
                />
              )}
            </WrappLayout>
          )
        }

        {loading && !error && (
          <>
            {isMenuShow ? (
              <BusinessProductsCategories
                categories={[]}
                isSkeleton
              />
            ) : (
              <WrapContent>
                <BusinessProductsList
                  categories={[]}
                  category={categorySelected}
                  categoryState={categoryState}
                  isBusinessLoading={loading}
                  errorQuantityProducts={errorQuantityProducts}
                />
              </WrapContent>
            )}
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

      {currentCart?.products?.length > 0 && auth && !isCartOpen && (
        <FloatingButton
          btnText={
            !currentCart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', theme?.defaultLanguages?.MAXIMUM_SUBTOTAL_ORDER || 'Maximum subtotal order')}: ${parsePrice(currentCart?.maximum)}`
            ) : (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100)) ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', theme?.defaultLanguages?.MINIMUN_SUBTOTAL_ORDER || 'Minimum subtotal order:')} ${parsePrice(currentCart?.minimum)}`
            ) : !openUpselling ^ canOpenUpselling ? t('VIEW_ORDER', theme?.defaultLanguages?.VIEW_ORDER || 'View Order') : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')
          }
          isSecondaryBtn={!currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
          btnValue={currentCart?.products?.length}
          handleClick={() => setOpenUpselling(true)}
          disabled={openUpselling || !currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
        />
      )}

      <Modal
        width='70%'
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
