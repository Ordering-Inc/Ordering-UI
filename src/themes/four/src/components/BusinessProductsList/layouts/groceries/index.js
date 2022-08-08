import React from 'react'
import { ProductsList, useLanguage, useConfig } from 'ordering-components'

import { Button } from '../../../../styles/Buttons'
import { SingleProductCard } from '../../../SingleProductCard'
import { NotFoundSource } from '../../../NotFoundSource'

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
    business,
    businessId,
    category,
    categories,
    categoryState,
    isBusinessLoading,
    onProductClick,
    handleSearchRedirect,
    searchValue,
    isCartOnProductsList,
    handleClearSearch,
    errorQuantityProducts,
    categoriesState,
    onClickCategory,
    currentCart
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'

  return (
    <ProductsContainer>
      {category?.id && (
        <WrapAllCategories id='container'>
          <div className='category-title'>
            {
              category?.image && (
                <img src={category.image} />
              )
            }
            <h3>{category.name}</h3>
          </div>
          <ProductsListing>
            {
              categoryState?.products?.map(product => (
                <SingleProductCard
                  key={product?.id}
                  isLayoutOne
                  isSoldOut={(product?.inventoried && !product?.quantity)}
                  product={product}
                  businessId={businessId}
                  onProductClick={onProductClick}
                  isCartOnProductsList={isCartOnProductsList}
                  productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                />
              ))
            }
          </ProductsListing>
        </WrapAllCategories>
      )}

      {
        !category?.id && categories.filter(category => category?.id === 'featured').map((category) => {
          const featProducts = business?.lazy_load_products_recommended
            ? categoriesState?.featured?.products?.some(product => product.featured) ? categoriesState?.featured?.products : []
            : categoryState?.products?.filter(product => product.featured) ?? []
          return (
            featProducts?.length > 0 && (
              <WrapAllCategories key={category?.id}>
                <div className='wrap-header'>
                  <div className='category-title'>
                    <h3>{t('FEATURED', 'Featured')}</h3>
                  </div>
                  <Button
                    color='primary'
                    onClick={() => onClickCategory(category)}
                  >
                    {t('MORE', 'More')}
                  </Button>
                </div>
                <ProductsListing>
                  {featProducts?.map(product => product.featured && (
                    <SingleProductCard
                      key={product?.id}
                      isLayoutOne
                      isSoldOut={(product?.inventoried && !product?.quantity)}
                      product={product}
                      businessId={businessId}
                      onProductClick={onProductClick}
                      isCartOnProductsList={isCartOnProductsList}
                      productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                    />
                  ))}
                  {!categoryState?.loading && featProducts?.length && (
                    <SingleProductCard
                      useCustomFunctionality
                      onCustomClick={() => onClickCategory(category)}
                      isCartOnProductsList={isCartOnProductsList}
                      customText={t('MORE', 'More')}
                      customStyle={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    />
                  )}
                </ProductsListing>
              </WrapAllCategories>
            )
          )
        })
      }

      {
        !category?.id && categories.filter(category => category?.id !== null).map((category, i, _categories) => {
          const products = !isUseParentCategory
            ? categoryState?.products?.filter(product => product?.category_id === category?.id) ?? []
            : categoryState?.products?.filter(product => category?.children?.some(cat => cat.category_id === product?.category_id)) ?? []
          return (
            <React.Fragment key={category?.id}>
              {
                products.length > 0 && (
                  <WrapAllCategories id='container'>
                    <div className='wrap-header'>
                      <div className='category-title'>
                        {
                          category?.image && (
                            <img src={category.image} />
                          )
                        }
                        <h3>{category.name}</h3>
                      </div>
                      <Button
                        onClick={() => onClickCategory(category)}
                        color='primary'
                      >
                        {t('MORE', 'More')}
                      </Button>
                    </div>
                    <ProductsListing>
                      {
                        products.map(product => (
                          <SingleProductCard
                            key={product?.id}
                            isLayoutOne
                            isSoldOut={product?.inventoried && !product?.quantity}
                            businessId={businessId}
                            product={product}
                            onProductClick={onProductClick}
                            isCartOnProductsList={isCartOnProductsList}
                            productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                          />
                        ))
                      }
                      {!categoryState?.loading && products?.length && (
                        <SingleProductCard
                          useCustomFunctionality
                          onCustomClick={() => onClickCategory(category)}
                          isCartOnProductsList={isCartOnProductsList}
                          customText={t('MORE', 'More')}
                          customStyle={{
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        />
                      )}
                      {
                        categoryState?.loading && (i + 1) === _categories.length && [...Array(categoryState?.pagination?.nextPageItems).keys()].map(i => (
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
        (categoryState?.loading || isBusinessLoading) && (
          <ProductsListing>
            {[...Array(categoryState?.pagination.nextPageItems).keys()].map(i => (
              <SingleProductCard
                key={`skeleton:${i}`}
                isSkeleton
              />
            ))}
          </ProductsListing>
        )
      }

      {
        !categoryState?.loading && !isBusinessLoading && categoryState?.products?.length === 0 && !((searchValue && errorQuantityProducts) || (!searchValue && !errorQuantityProducts)) && (
          <WrapperNotFound>
            <NotFoundSource
              content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
              btnTitle={!searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters')}
              onClickButton={() => !searchValue ? handleSearchRedirect() : handleClearSearch('')}
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
