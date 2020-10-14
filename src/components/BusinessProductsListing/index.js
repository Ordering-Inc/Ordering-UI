import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessAndProductList,
  useLanguage
} from 'ordering-components'

import {
  ProductsContainer,
  WrapContent,
  ProductsNotFound,
  ProductLoading,
  SkeletonItem,
  WrapperSearch
} from './styles'

import { NotFoundSource } from '../NotFoundSource'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'
import { SearchBar } from '../SearchBar'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
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
    productRedirect,
    handleChangeSearch
  } = props

  const { business, loading, error } = businessState
  const [, t] = useLanguage()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)

  const onProductClick = (product) => {
    productRedirect({
      slug: business?.slug,
      product: product.id,
      category: product.category_id
    })
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  const closeModalProductForm = () => {
    setModalIsOpen(false)
    handleUpdateInitialRender(false)
    updateProductModal(null)
    productRedirect({
      slug: business?.slug
    })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (categoryId && productId && isInitialRender) {
      if (productModal?.product?.id) {
        setCurProduct(productModal.product)
      }
      setModalIsOpen(true)
    }
  }, [productModal])

  useEffect(() => {
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
  }, [])

  return (
    <ProductsContainer>
      {
        !loading && business?.id && (
          <>
            <BusinessBasicInformation
              businessState={businessState}
            />
            <WrapperSearch>
              <SearchBar
                onSearch={handleChangeSearch}
                search={searchValue}
                placeholder={t('SEARCH_PRODUCTS', 'Search Products')}
              />
            </WrapperSearch>
            <BusinessProductsCategories
              categories={[{ id: null, name: t('ALL', 'All') }, ...business.categories.sort((a, b) => a.rank - b.rank)]}
              categorySelected={categorySelected}
              onClickCategory={handleChangeCategory}
            />
            <WrapContent>
              <BusinessProductsList
                categories={[{ id: null, name: t('ALL', 'All') }, ...business.categories.sort((a, b) => a.rank - b.rank)]}
                category={categorySelected}
                categoryState={categoryState}
                businessId={business.id}
                onProductClick={onProductClick}
              />
            </WrapContent>
          </>
        )
      }

      <Modal
        width='70%'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
      >

        {productModal.loading && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} />
            </SkeletonItem>
            <SkeletonItem>
              <Skeleton height={45} />
            </SkeletonItem>
            <SkeletonItem>
              <Skeleton height={45} />
            </SkeletonItem>
          </ProductLoading>
        )}

        {productModal.error && productModal.error.length > 0 && (
          productModal.error.map((e, i) => (
            <p key={i}>ERROR: [{e.message}]</p>
          ))
        )}

        {isInitialRender && !productModal.loading && !productModal.error && !productModal.product && (
          <NotFoundSource
            content={t('ERROR_GET_PRODUCT', 'Sorry, we couldn\'t find the requested product.')}
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
      {loading && (
        <>
          <BusinessBasicInformation
            businessState={{ business: {}, loading: true }}
            isSkeleton
          />
          <BusinessProductsCategories
            categories={[]}
            isSkeleton
          />
          <WrapContent>
            <BusinessProductsList
              categories={[]}
              category={categorySelected}
              categoryState={categoryState}
            />
          </WrapContent>
        </>
      )}

      {
        !loading && business && !Object.keys(business).length && (
          <NotFoundSource
            content={t('NOT_FOUND_BUSINESS_PRODUCTS', 'No products to show at this business, please try with other business.')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={props.handleSearchRedirect}
          />
        )
      }

      {
        !loading && !business && (
          <NotFoundSource
            content={t('ERROR_NOT_FOUND_STORE', 'Sorry, an error has occurred with business selected.')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={props.handleSearchRedirect}
          />
        )
      }

      {error && error.length > 0 && (
        <ProductsNotFound>
          {error.map((e, i) => (
            <p key={i}>ERROR: [{e.message}]</p>
          ))}
        </ProductsNotFound>
      )}
    </ProductsContainer>
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
