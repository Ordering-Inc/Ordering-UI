import React, { useState } from 'react'
import { ProductsList, useLanguage, useConfig } from 'ordering-components'

import { Button } from '../../../../styles/Buttons'
import { SingleProductCard } from '../../../SingleProductCard'
import { NotFoundSource } from '../../../NotFoundSource'
import { Modal } from '../../../Modal'
import { shape } from '../../../../../../../utils'
import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage,
  WrapperNotFound,
  HeaderWrapper,
  DescriptionModalContainer,
  RibbonBox
} from './styles'

const BusinessProductsListUI = (props) => {
  const {
    errors,
    businessId,
    business,
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
  const [openDescription, setOpenDescription] = useState(null)
  const shortCategoryDescriptionSelected = category?.description?.length > 200 ? `${category?.description?.substring(0, 200)}...` : category?.description

  return (
    <ProductsContainer>
      {category?.id && (
        <WrapAllCategories id='container'>
          <HeaderWrapper>
            <div className='category-title'>
              {
                category?.image && (
                  <img src={category.image} />
                )
              }
              <h3>{category.name}</h3>
              {category?.ribbon?.enabled && (
                <RibbonBox
                  bgColor={category?.ribbon?.color}
                  isRoundRect={category?.ribbon?.shape === shape?.rectangleRound}
                  isCapsule={category?.ribbon?.shape === shape?.capsuleShape}
                >
                  {category?.ribbon?.text}
                </RibbonBox>
              )}
            </div>
            {category?.description && (
              <div className='category-description'>
                <p>
                  {shortCategoryDescriptionSelected}
                  {category?.description?.length > 200 && (
                    <span onClick={() => setOpenDescription(category)}>{t('SEE_MORE', 'See more')}</span>
                  )}
                </p>
              </div>
            )}
          </HeaderWrapper>
          <ProductsListing>
            {
              categoryState?.products?.map((product, i) => (
                <SingleProductCard
                  key={i}
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
        !category?.id && categories.filter(category => category?.id === 'featured').map((category, i) => {
          const featProducts = business?.lazy_load_products_recommended
            ? categoriesState?.featured?.products?.some(product => product.featured) ? categoriesState?.featured?.products : []
            : categoryState?.products?.filter(product => product.featured) ?? []
          return featProducts?.length > 0 ? (
            <WrapAllCategories key={i}>
              <div className='wrap-header'>
                <div className='category-title'>
                  <h3>{t('FEATURED', 'Featured')}</h3>
                </div>
                {featProducts?.length > 9 && (
                  <Button
                    onClick={() => onClickCategory(category)}
                  >
                    {t('MORE', 'More')}
                  </Button>
                )}
              </div>
              <ProductsListing>
                {featProducts?.filter((p, index) => index < 9)?.map((product, i) => product.featured && (
                  <SingleProductCard
                    key={i}
                    isSoldOut={(product?.inventoried && !product?.quantity)}
                    product={product}
                    businessId={businessId}
                    onProductClick={onProductClick}
                    isCartOnProductsList={isCartOnProductsList}
                    productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                  />
                ))}
                {!categoryState?.loading && featProducts?.length > 9 && (
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
          ) : null
        })
      }

      {
        !category?.id && categories.filter(category => category?.id !== null).map((category, i, _categories) => {
          const products = !isUseParentCategory
            ? categoryState?.products?.filter(product => product?.category_id === category?.id) ?? []
            : categoryState?.products?.filter(product => category?.children?.some(cat => cat.category_id === product?.category_id)) ?? []

          const shortCategoryDescription = category?.description?.length > 200 ? `${category?.description?.substring(0, 200)}...` : category?.description

          return (
            <React.Fragment key={i}>
              {
                products.length > 0 && (
                  <WrapAllCategories id='container'>
                    <div className='wrap-header'>
                      <HeaderWrapper>
                        <div className='category-title'>
                          {
                            category?.image && (
                              <img src={category.image} />
                            )
                          }
                          <h3>{category.name}</h3>
                          {category?.ribbon?.enabled && (
                            <RibbonBox
                              bgColor={category?.ribbon?.color}
                              isRoundRect={category?.ribbon?.shape === shape?.rectangleRound}
                              isCapsule={category?.ribbon?.shape === shape?.capsuleShape}
                            >
                              {category?.ribbon?.text}
                            </RibbonBox>
                          )}
                        </div>
                        {category?.description && (
                          <div className='category-description'>
                            <p>
                              {shortCategoryDescription}
                              {category?.description?.length > 200 && (
                                <span onClick={() => setOpenDescription(category)}>{t('SEE_MORE', 'See more')}</span>
                              )}
                            </p>
                          </div>
                        )}
                      </HeaderWrapper>
                      {products?.length > 9 && (
                        <Button
                          onClick={() => onClickCategory(category)}
                        >
                          {t('MORE', 'More')}
                        </Button>
                      )}
                    </div>
                    <ProductsListing>
                      {
                        products.filter((p, index) => index < 9).map((product, i) => (
                          <SingleProductCard
                            key={i}
                            isSoldOut={product?.inventoried && !product?.quantity}
                            businessId={businessId}
                            product={product}
                            onProductClick={onProductClick}
                            isCartOnProductsList={isCartOnProductsList}
                            productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                          />
                        ))
                      }
                      {!categoryState?.loading && products?.length > 9 && (
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
      <Modal
        open={openDescription}
        title={openDescription?.name}
        onClose={() => setOpenDescription(null)}
      >
        <DescriptionModalContainer>
          {
            openDescription?.image && (
              <img src={openDescription.image} />
            )
          }
          <p>{openDescription?.description}</p>
        </DescriptionModalContainer>
      </Modal>
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
