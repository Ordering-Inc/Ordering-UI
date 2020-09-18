import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { VscWarning } from 'react-icons/vsc'
import {
  // ProductsListing,
  useApi,
  useOrder,
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
    isAllCategory,
    categorySelected,
    productsList,
    handlerClickCategory
  } = props

  const { business, categories, loading, error } = props.business
  const [, t] = useLanguage()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [product, setProduct] = useState(props.product)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const onProductClick = (product) => {
    setProduct(product)
    setModalIsOpen(true)
  }

  return (
    <ProductsContainer>
      {
        !loading && business.id && (
          <>
            <BusinessBasicInformation
              business={props.business}
            />
            <BusinessProductsCategories
              categories={categories}
              categorySelected={categorySelected}
              onClickCategory={handlerClickCategory}
            />
            <WrapContent>
              <BusinessProductsList
                categories={categories}
                productsList={productsList}
                isAllCategory={!isAllCategory}
                onProductClick={onProductClick}
              />
            </WrapContent>

            {modalIsOpen && (
              <Modal
                width='70%'
                open={modalIsOpen}
                onClose={() => closeModal()}
              >
                <ProductForm
                  product={product}
                />
              </Modal>)}
          </>
        )
      }
      {
        !loading && !business.id && (
          <ProductsNotFound>
            <h1>{t('NOT_FOUND_BUSINESS')}</h1>
            <VscWarning />
          </ProductsNotFound>
        )
      }
      {loading && (
        <>
          <BusinessBasicInformation
            business={{ business: {}, loading: true }}
            isSkeleton
          />
          <BusinessProductsCategories
            categories={[]}
            isSkeleton
          />
          <WrapContent>
            <BusinessProductsList
              categories={categories}
              productsList={productsList}
              isAllCategory={!isAllCategory}
              onProductClick={onProductClick}
            />
          </WrapContent>
        </>
      )}
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
  const [orderState] = useOrder()

  const businessProps = ['id', 'name', 'header', 'logo', 'name', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'categories']
  const businessParams = {
    type: orderState.options?.type || 1,
    location: `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}` || '40.7539143,-73.9810162'
    // time: asap,
  }

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    slug: store,
    ordering: ordering,
    businessProps: businessProps,
    businessParams: businessParams,
    handlerClickCategory: (e) => { console.log(e) }
  }

  return (
    <ProductsListing {...businessProductslistingProps} />
  )
}
