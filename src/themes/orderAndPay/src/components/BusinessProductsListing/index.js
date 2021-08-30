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
  useUtils
} from 'ordering-components'

import {
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrappLayout,
  BusinessContent,
  BusinessCategoryProductWrapper,
  ModalIcon
} from './styles'

import { NotFoundSource } from '../../../../../components/NotFoundSource'

import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'
import { FloatingButton } from '../FloatingButton'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    // sortByValue,
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
    // handleChangeSortBy,
    isCartOnProductsList,
    errorQuantityProducts,
    handleGoBack,
    handleGoToCart
  } = props

  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const [{ parsePrice }] = useUtils()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const location = useLocation()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)

  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  // const sortByOptions = [
  //   { value: null, content: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By'), showOnSelected: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By') },
  //   { value: 'rank', content: t('RANK', theme?.defaultLanguages?.RANK || 'Rank'), showOnSelected: t('RANK', theme?.defaultLanguages?.RANK || 'Rank') },
  //   { value: 'a-z', content: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z'), showOnSelected: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z') }
  // ]

  const onProductClick = (product) => {
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        <ModalIcon>
          <BsArrowLeft size={20} onClick={() => handleGoBack()} />
          <img src={business?.logo} />
          <h1>{business?.name}</h1>
        </ModalIcon>
        {
          !loading && business?.id && (
            <WrappLayout
              isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
            >
              <div className='bp-list'>
                <BusinessContent>
                  <BusinessCategoryProductWrapper>
                    {!(business?.categories?.length === 0 && !categoryId) && (
                      <BusinessProductsCategories
                        categories={[{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                        categorySelected={categorySelected}
                        onClickCategory={handleChangeCategory}
                        featured={featuredProducts}
                      />
                    )}

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
                  </BusinessCategoryProductWrapper>
                </BusinessContent>
              </div>
            </WrappLayout>
          )
        }

        {loading && !error && (
          <>
            <BusinessProductsCategories
              categories={[]}
              isSkeleton
            />
            <WrapContent>
              <BusinessProductsList
                categories={[]}
                category={categorySelected}
                categoryState={categoryState}
                isBusinessLoading={loading}
                errorQuantityProducts={errorQuantityProducts}
              />
            </WrapContent>
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

      {currentCart?.products?.length > 0 && auth && (
        <FloatingButton
          title={parsePrice(currentCart?.total)}
          btnText={
            !currentCart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', theme?.defaultLanguages?.MAXIMUM_SUBTOTAL_ORDER || 'Maximum subtotal order')}: ${parsePrice(currentCart?.maximum)}`
            ) : (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100)) ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', theme?.defaultLanguages?.MINIMUN_SUBTOTAL_ORDER || 'Minimum subtotal order:')} ${parsePrice(currentCart?.minimum)}`
            ) : !openUpselling ^ canOpenUpselling ? t('VIEW_ORDER', theme?.defaultLanguages?.VIEW_ORDER || 'View Order') : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading')
          }
          isSecondaryBtn={!currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
          btnValue={currentCart?.products?.length}
          handleClick={() => handleGoToCart(currentCart?.uuid)}
          disabled={openUpselling || !currentCart?.valid_maximum || (!currentCart?.valid_minimum && !(currentCart?.discount_type === 1 && currentCart?.discount_rate === 100))}
        />
      )}

      <Modal
        width='40%'
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

      {/* <Modal
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        padding='0'
        isProductForm
      >
        <BusinessCartContainer>
          <BusinessCartContent>
            {currentCart?.products?.length > 0 ? (
              <>
                <Title>{t('YOUR_CART', 'Your cart')}</Title>
                <Cart
                  isForceOpenCart
                  cart={currentCart}
                  isCartPending={currentCart?.status === 2}
                  isProducts={currentCart.products.length}
                  isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                  handleCartOpen={(val) => setIsCartOpen(val)}
                  isCustomMode
                />
              </>
            ) : (
              <EmptyCart>
                <div className='empty-content'>
                  <AiOutlineShoppingCart />
                  <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
                </div>
                <EmptyBtnWrapper>
                  <span>$0.00</span>
                  <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
                </EmptyBtnWrapper>
              </EmptyCart>
            )}
          </BusinessCartContent>
        </BusinessCartContainer>
      </Modal> */}

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
