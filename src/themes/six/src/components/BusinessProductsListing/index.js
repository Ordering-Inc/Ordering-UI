import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import MdClose from '@meronex/icons/md/MdClose'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder
} from 'ordering-components'
import {
  ProductsContainer,
  WrapContent,
  WrapperSearch,
  WrappLayout,
  WrapProductsCategroy,
  WrapBusinessList,
  ProductDetail,
  BackMenu
} from './styles'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { Cart } from '../../../../../components/Cart'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { ProductForm } from '../ProductForm'
import { CartFullPage } from '../CartFullPage'
import { FlotingStatusBar } from '../FlotingStatusBar'
import { SearchProducts } from './SearchProducts'
const PIXELS_TO_SCROLL = 300
const BusinessProductsListingUI = (props) => {
  const {
    errors,
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
    onProductRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    handleChangeSortBy,
    isCartOnProductsList,
    errorQuantityProducts
  } = props
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const [events] = useEvent()
  const location = useLocation()
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartFullPage, setCartFullPage] = useState(false)
  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}
  const windowSize = useWindowSize()
  const sortByOptions = [
    { value: null, content: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By'), showOnSelected: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By') },
    { value: 'rank', content: t('RANK', theme?.defaultLanguages?.RANK || 'Rank'), showOnSelected: t('RANK', theme?.defaultLanguages?.RANK || 'Rank') },
    { value: 'a-z', content: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z'), showOnSelected: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z') }
  ]
  const handler = () => {
    setOpenBusinessInformation(true)
  }
  const onProductClick = (product) => {
    onProductRedirect({
      slug: business?.slug,
      product: product.id,
      category: product.category_id
    })
    setCurProduct(product)
    events.emit('product_clicked', product)
  }
  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      onProductRedirect({
        slug: business?.slug
      })
    }
    closeModalProductForm()
  }
  const closeModalProductForm = () => {
    handleUpdateInitialRender(false)
    setCurProduct(null)
    onProductRedirect({
      slug: business?.slug
    })
  }
  const openFullCart = () => {
    setCartFullPage(true)
  }
  const handleGoBackPage = () => {
    closeModalProductForm()
    setCartFullPage(false)
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
    if (curProduct) {
      window.scrollTo(0, 0)
    }
  }, [curProduct])
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
          !loading && business?.id && !curProduct && !cartFullPage && (
            <WrappLayout
              isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
            >
              <div className='bp-list'>
                {windowSize.width < 850 &&
                  <>
                    <BusinessBasicInformation
                      businessState={businessState}
                      setOpenBusinessInformation={setOpenBusinessInformation}
                      openBusinessInformation={openBusinessInformation}
                    />
                  </>}
                {(categoryState.products.length !== 0 || searchValue) && !errorQuantityProducts && (
                  <WrapperSearch>
                    <SearchProducts
                      handleChangeSearch={handleChangeSearch}
                      searchValue={searchValue}
                      sortByOptions={sortByOptions}
                      sortByValue={sortByValue}
                      onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                      businessState={businessState}
                    />
                  </WrapperSearch>
                )}
                {!(business?.categories?.length === 0 && !categoryId) && (
                  <BusinessProductsCategories
                    categories={windowSize.width > 850
                      ? [{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }]
                      : [{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                    categorySelected={categorySelected}
                    onClickCategory={handleChangeCategory}
                    featured={featuredProducts}
                    openBusinessInformation={openBusinessInformation}
                  />
                )}
                <WrapContent className='wrap-content'>
                  <WrapProductsCategroy>
                    {!(business?.categories?.length === 0 && !categoryId) && windowSize.width > 850 && (
                      <BusinessProductsCategories
                        categories={[...business?.categories.sort((a, b) => a.rank - b.rank)]}
                        categorySelected={categorySelected}
                        onClickCategory={handleChangeCategory}
                        featured={featuredProducts}
                        openBusinessInformation={openBusinessInformation}
                        sideCategory
                      />
                    )}
                  </WrapProductsCategroy>
                  <WrapBusinessList className='right-list-panel'>
                    {windowSize.width > 850 &&
                      <>
                        <BusinessBasicInformation
                          businessState={businessState}
                          setOpenBusinessInformation={setOpenBusinessInformation}
                          openBusinessInformation={openBusinessInformation}
                        />
                      </>}
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
                  </WrapBusinessList>
                </WrapContent>
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
        {(!loading && business?.id && !cartFullPage && curProduct) && (
          <ProductDetail>
            <BackMenu className='productDetail-close'>
              <MdClose onClick={() => closeModalProductForm()} />
            </BackMenu>
            <ProductForm
              businessSlug={business?.slug}
              product={productModal.product || curProduct}
              businessId={business?.id}
              onSave={handlerProductAction}
            />
          </ProductDetail>
        )}
        {(!loading && business?.id && cartFullPage) &&
          (
            <CartFullPage
              goBack={handleGoBackPage}
              currentCart={currentCart}
              business={business}
              individualBusinessCart
            />
          )}
        {loading && !error && (
          <>
            <WrappLayout>
              <div className='bp-list'>
                {windowSize.width < 850 &&
                  <>
                    <BusinessBasicInformation
                      businessState={{ business: {}, loading: true }}
                      isSkeleton
                      handler={handler}
                      openBusinessInformation={openBusinessInformation}
                    />
                  </>}
                {
                  <WrapperSearch>
                    <Skeleton width={200} height={30} />
                    {'  '}
                    <Skeleton width={100} height={30} />
                  </WrapperSearch>
                }
                {!(business?.categories?.length === 0 && !categoryId) && (
                  <BusinessProductsCategories
                    categories={[]}
                    isSkeleton
                    openBusinessInformation={openBusinessInformation}
                  />
                )}
                <WrapContent className='wrap-content'>
                  <WrapProductsCategroy>
                    {windowSize.width > 850 && (
                      <BusinessProductsCategories
                        categories={[]}
                        isSkeleton
                        openBusinessInformation={openBusinessInformation}
                        sideCategory
                      />
                    )}
                  </WrapProductsCategroy>
                  <WrapBusinessList className='right-list-panel'>
                    {windowSize.width > 850 &&
                      <>
                        <BusinessBasicInformation
                          businessState={{ business: {}, loading: true }}
                          isSkeleton
                          handler={handler}
                          openBusinessInformation={openBusinessInformation}
                        />
                      </>}
                    <BusinessProductsList
                      categories={[]}
                      category={categorySelected}
                      categoryState={categoryState}
                      isBusinessLoading={loading}
                      errorQuantityProducts={errorQuantityProducts}
                    />
                  </WrapBusinessList>
                </WrapContent>
              </div>
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
      <FlotingStatusBar
        currentCart={currentCart}
        goToCart={openFullCart}
        businessName={business?.name}
      />
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
