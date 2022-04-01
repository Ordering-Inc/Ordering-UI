import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import MdClose from '@meronex/icons/md/MdClose'

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
import { FloatingButton } from '../../../../../components/FloatingButton'
import { UpsellingPage } from '../../../../../components/UpsellingPage'

import { ProductForm } from '../ProductForm'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { NavBar } from '../NavBar'

import {
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrappLayout,
  ProductDetailsHeader,
  WrapperNotFound
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
    errorQuantityProducts,
    onBusinessCartRedirect,
    onCategoryRedirect
  } = props

  const [{ configs }] = useConfig()
  const isQuickAddProduct = configs?.add_product_with_one_click?.value === '1'
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }, { addProduct, updateProduct }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const location = useLocation()

  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)

  const [showOption, setShowOption] = useState('categories')
  const [previousShowOption, setPreviousShowOption] = useState('categories')
  const [categorySearchValue, setCategorySearchValue] = useState('')

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  const handleBackShowOption = () => {
    setShowOption(previousShowOption)
  }

  const handleShowOption = (option) => {
    setPreviousShowOption(showOption)
    setShowOption(option)
  }

  const onProductClick = (product) => {
    if (product.extras.length === 0 && !product.inventoried && auth && isQuickAddProduct) {
      const isProductAddedToCart = currentCart?.products?.find(Cproduct => Cproduct.id === product.id)
      const productQuantity = isProductAddedToCart?.quantity
      const addCurrentProduct = {
        ...product,
        quantity: 1
      }
      const updateCurrentProduct = {
        businessid: business.id,
        id: product.id,
        code: isProductAddedToCart?.code,
        quantity: productQuantity + 1
      }
      if (isProductAddedToCart) {
        updateProduct(updateCurrentProduct, currentCart)
      } else {
        addProduct(addCurrentProduct, currentCart, isQuickAddProduct)
      }
    } else {
      onProductRedirect({
        slug: business?.slug,
        product: product.id,
        category: product.category_id
      })
      setCurProduct(product)
      handleShowOption('productForm')
      events.emit('product_clicked', product)
    }
  }
  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      handleBackShowOption()
      onCategoryRedirect({
        slug: business?.slug,
        category: categoryId,
        replace: false
      })
    }
  }

  const closeModalProductForm = () => {
    handleBackShowOption()
    handleUpdateInitialRender(false)
    updateProductModal(null)
    setCurProduct(null)
    onCategoryRedirect({
      slug: business?.slug,
      category: categoryId,
      replace: false
    })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore || loading) return
    getNextProducts()
  }, [categoryState])

  const handleChangePage = (data) => {
    if (Object.entries(data.query).length === 0 && showOption === 'productForm') {
      handleBackShowOption()
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
      handleShowOption('productForm')
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
    if (showOption !== 'productForm') return
    events.on('change_view', handleChangePage)
    return () => {
      events.off('change_view', handleChangePage)
    }
  }, [showOption, events])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const onClickCategory = (category) => {
    onCategoryRedirect({
      slug: business?.slug,
      category: category.id,
      replace: false
    })
    handleChangeCategory(category)
    handleShowOption('products')
  }

  useEffect(() => {
    if (loading) return
    if (categoryId && productId) {
      if (!curProduct) {
        handleUpdateInitialRender(true)
        handleShowOption('productForm')
      }
      return
    }
    if (!categoryId) {
      handleShowOption('categories')
    } else {
      setCurProduct(null)
      updateProductModal(null)
      if (showOption !== 'products') {
        const selectedCategory = business?.categories.find(category => category.id.toString() === categoryId)
        onCategoryRedirect({
          slug: business?.slug,
          category: selectedCategory.id,
          replace: true
        })
        handleChangeCategory(selectedCategory)
        handleShowOption('products')
      }
    }
  }, [categoryId, productId, loading, curProduct])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {showOption === 'categories' && (
        <NavBar
          title={t('MENU_V21', 'Menu')}
          handleGoBack={() => handleSearchRedirect()}
          isSearchShow
          searchValue={categorySearchValue}
          handleChangeSearch={val => setCategorySearchValue(val)}
        />
      )}
      {showOption === 'products' && (
        <NavBar
          title={categorySelected?.name}
          handleGoBack={() => onProductRedirect({ slug: business.slug })}
          isSearchShow
          searchValue={searchValue}
          handleChangeSearch={handleChangeSearch}
          lazyLoad={businessState?.business?.lazy_load_products_recommended}
        />
      )}
      {(showOption === 'categories' || showOption === 'products') && (
        <ProductsContainer>
          {
            !loading && business?.id && (
              <WrappLayout
                isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
              >
                <div className='bp-list'>
                  {showOption === 'categories' && (
                    <>
                      {!(business?.categories?.length === 0 && !categoryId) ? (
                        <BusinessProductsCategories
                          categories={
                            [...business?.categories]
                              .filter(category => category?.name.toLowerCase().includes(categorySearchValue.toLowerCase()))
                              .sort((a, b) => a.rank - b.rank)
                          }
                          categorySelected={categorySelected}
                          onClickCategory={onClickCategory}
                          featured={featuredProducts}
                          searchValue={categorySearchValue}
                          handleClearSearch={val => setCategorySearchValue(val)}
                          handleSearchRedirect={handleSearchRedirect}
                        />
                      ) : (
                        <WrapperNotFound>
                          <NotFoundSource
                            content={t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time')}
                            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
                            onClickButton={() => handleSearchRedirect()}
                          />
                        </WrapperNotFound>
                      )}
                    </>
                  )}
                  {showOption === 'products' && (
                    <WrapContent>
                      <BusinessProductsList
                        categories={[
                          { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                          { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                          ...business?.categories.sort((a, b) => a.rank - b.rank)
                        ]}
                        isOpen={showOption === 'products'}
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
                        currentCart={currentCart}
                      />
                    </WrapContent>
                  )}
                </div>
              </WrappLayout>
            )
          }

          {loading && !error && (
            <>
              {showOption === 'categories' && (
                <BusinessProductsCategories
                  categories={[]}
                  isSkeleton
                />
              )}
              {showOption === 'products' && (
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
      )}

      {currentCart?.products?.length > 0 && auth && currentCart?.valid_schedule && currentCart?.valid_products && showOption !== 'productForm' && showOption !== 'cart' && (
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
          handleClick={() => onBusinessCartRedirect(business?.slug)}
          disabled={openUpselling || !currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
        />
      )}

      {showOption === 'productForm' && (
        <>
          <ProductDetailsHeader>
            <p>{productModal.product?.name || curProduct?.name}</p>
            <MdClose
              onClick={() => closeModalProductForm()}
            />
          </ProductDetailsHeader>
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
        </>
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
