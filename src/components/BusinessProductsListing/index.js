import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'
import {
  useApi,
  useLanguage
} from 'ordering-components'

import { ProductsListing } from '../ProductsListing' // move this component in ordering-components

import {
  ProductsContainer,
  WrapContent,
  ProductsNotFound,
  ProductLoading,
  SkeletonItem
} from './styles'

import { NotFoundSource } from '../NotFoundSource'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    isInitialRender,
    businessState,
    categorySelected,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    productRedirect
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
          <ProductsNotFound>
            <h1>{t('NOT_FOUND_BUSINESS_PRODUCTS', 'No products to show at this business, please try with other business.')}</h1>
          </ProductsNotFound>
        )
      }

      {
        !loading && !business && (
          <NotFoundSource
            content={t('ERROR_STORE_PRODUCTS', 'Sorry, an error has occurred with business selected.')}
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
  const [ordering] = useApi()
  const { search } = useLocation()
  const [category, product] = search && search.substring(1).split('&')
  const categoryId = category && category.split('=')[1]
  const productId = product && product.split('=')[1]
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProps = [
    'id',
    'name',
    'header',
    'logo',
    'name',
    'open',
    'about',
    'description',
    'address',
    'location',
    'schedule',
    'service_fee',
    'delivery_price',
    'distance',
    'delivery_time',
    'gallery',
    'pickup_time',
    'reviews',
    'featured',
    'offers',
    'food',
    'laundry',
    'alcohol',
    'groceries',
    'slug',
    'products'
  ]

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    slug: props.store,
    categoryId,
    productId,
    isInitialRender,
    ordering: ordering,
    businessProps: businessProps,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }

  return (
    <ProductsListing {...businessProductslistingProps} />
  )
}
