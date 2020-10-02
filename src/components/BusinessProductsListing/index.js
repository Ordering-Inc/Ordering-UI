import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { VscWarning } from 'react-icons/vsc'
import {
  useApi,
  useLanguage
} from 'ordering-components'

import { ProductsListing } from '../ProductsListing' // Replace this component in ordering-components

import {
  ProductsContainer,
  WrapContent,
  ProductsNotFound
} from './styles'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'

const BusinessProductsListingUI = (props) => {
  const {
    businessState,
    categorySelected,
    categoryState,
    getNextProducts,
    handleChangeCategory
  } = props

  const { business, loading, error } = businessState
  const [, t] = useLanguage()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)

  const onProductClick = (product) => {
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    const badScrollPosition = window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ProductsContainer>
      {
        !loading && business.id && (
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
        onClose={() => setModalIsOpen(false)}
      >
        <ProductForm
          product={curProduct}
          businessId={businessState?.business?.id}
          // ordering={props.ordering}
          onSave={handlerProductAction}
        />
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
        !loading && !Object.keys(business).length && (
          <ProductsNotFound>
            <h1>{t('NOT_FOUND_BUSINESS')}</h1>
            <VscWarning />
          </ProductsNotFound>
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
  const { store } = useParams()
  const [ordering] = useApi()

  const businessProps = ['id', 'name', 'header', 'logo', 'name', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'products']

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    slug: store,
    ordering: ordering,
    businessProps: businessProps,
    handlerClickCategory: (e) => { console.log(e) }
  }

  return (
    <ProductsListing {...businessProductslistingProps} />
  )
}
