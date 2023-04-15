import React, { useEffect, useState } from 'react'
import { ProductsList, useLanguage } from 'ordering-components'

import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../../../../../components/NotFoundSource'

import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage,
  WrapperNotFound
} from './styles'

const BusinessProductsListUI = (props) => {
  const {
    errors,
    businessId,
    categories,
    categoryState,
    isBusinessLoading,
    onProductClick,
    featured,
    searchValue,
    isCartOnProductsList,
    errorQuantityProducts,
    setCategorySelected,
    categorySelected
  } = props

  const [, t] = useLanguage()
  const [indexCategorySelected, setIndexCategorySelected] = useState(0)

  useEffect(() => {
    const categories = document.getElementsByClassName('category-lists')
    const categoriesOffset = getCategoriesOffset()

    if (categorySelected?.name && categorySelected?.name !== 'All') {
      const index = categoriesOffset.findIndex(category => category?.name === categorySelected?.name)
      setIndexCategorySelected(index)
      categories[0].scrollBy({
        top: 0,
        left: index > indexCategorySelected ? categoriesOffset?.length * 8 : -categoriesOffset?.length * 8,
        behavior: 'smooth'
      })
    }
  }, [categorySelected?.name])

  useEffect(() => {
    const goToCategory = () => {
      const categoriesOffset = getCategoriesOffset()
      if (categoriesOffset?.length > 0) {
        categoriesOffset.map((category, i, hash) => {
          if (window.scrollY + 75 > hash[categoriesOffset?.length - 1]?.offset || window.scrollY + 680 >= document.body.offsetHeight) { // last category
            setCategorySelected(hash[categoriesOffset?.length - 1])
          } else if (category.offset - 75 < window.scrollY && hash[i + 1]?.offset - 75 > window.scrollY) {
            setCategorySelected(category)
          } else if (window.scrollY > 100 && window.scrollY < hash[2]?.offset - 75 && category?.name === t('FEATURED', 'Featured')) {
            setCategorySelected(category)
          } else if (window.scrollY === 0) {
            setCategorySelected(hash[0])
          }
        })
      }
    }
    window.addEventListener('scroll', goToCategory)
    return () => {
      window.removeEventListener('scroll', goToCategory)
    }
  }, [])

  const getCategoriesOffset = () => {
    return categories.map(category => ({
      ...category,
      offset: document.getElementsByClassName(category.name)[0]?.offsetTop
    }
    ))
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        {/* {category?.id && (
          <ProductsListing>
            {
              categoryState.products?.map(product => (
                <SingleProductCard
                  key={product?.id}
                  isSoldOut={(product.inventoried && !product.quantity)}
                  product={product}
                  businessId={businessId}
                  onProductClick={onProductClick}
                  isCartOnProductsList={isCartOnProductsList}
                />
              ))
            }
          </ProductsListing>
        )} */}

        {
          featured && categoryState?.products?.find(product => product.featured) && (
            <WrapAllCategories>
              <h3 className='featured'>{t('FEATURED', 'Featured')}</h3>
              <ProductsListing>
                {categoryState.products?.map(product => product.featured && (
                  <SingleProductCard
                    key={product?.id}
                    isSoldOut={(product.inventoried && !product.quantity)}
                    product={product}
                    businessId={businessId}
                    onProductClick={onProductClick}
                    isCartOnProductsList={isCartOnProductsList}
                  />
                ))}
              </ProductsListing>
            </WrapAllCategories>
          )
        }

        {
          categories.map((category, i, _categories) => {
            const products = categoryState.products || []
            return (
              <React.Fragment key={category?.id}>
                {
                  products.length > 0 && (
                    <WrapAllCategories className={i === categories.length - 1 && 'last-category'} id={`container ${i === categories.length - 1 && 'last-category'}`}>
                      {category.name !== t('FEATURED', 'Featured') && (
                        <div className='category-title'>
                          {
                            category?.image && (
                              <img src={category.image} />
                            )
                          }
                          <h3 className={category.name}>{category.name}</h3>
                        </div>
                      )}
                      <ProductsListing>
                        {
                          products.filter(product => product?.category_id === category?.id).map(_product => {
                            return (
                              <SingleProductCard
                                key={_product?.id}
                                isSoldOut={_product.inventoried && !_product.quantity}
                                businessId={businessId}
                                product={_product}
                                onProductClick={onProductClick}
                                isCartOnProductsList={isCartOnProductsList}
                              />
                            )
                          })
                        }
                        {
                          categoryState.loading && (i + 1) === _categories.length && [...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                            <SingleProductCard
                              key={`skeleton:${i}`}
                              isSkeleton
                            />
                          ))
                        }
                      </ProductsListing>
                    </WrapAllCategories>
                  )
                }
              </React.Fragment>
            )
          })
        }

        {
          (categoryState.loading || isBusinessLoading) && (
            <ProductsListing>
              {[...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                <SingleProductCard
                  key={`skeleton:${i}`}
                  isSkeleton
                />
              ))}
            </ProductsListing>
          )
        }

        {
          !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && !((searchValue && errorQuantityProducts) || (!searchValue && !errorQuantityProducts)) && (
            <WrapperNotFound>
              <NotFoundSource
                content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
              />
            </WrapperNotFound>
          )
        }

        {errors && errors.length > 0 && (
          errors.map((e, i) => (
            <ErrorMessage key={i}>ERROR: [{e}]</ErrorMessage>
          ))
        )}
      </ProductsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsList = (props) => {
  const businessProductsListProps = {
    ...props,
    UIComponent: BusinessProductsListUI
  }

  return (
    <ProductsList {...businessProductsListProps} />
  )
}
