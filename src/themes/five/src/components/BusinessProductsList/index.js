import React, { useState, useRef } from 'react'
import { ProductsList, useConfig, useLanguage } from 'ordering-components'

import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'
import { Modal } from '../Modal'
import { shape } from '../../../../../utils'

import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage,
  WrapperNotFound,
  HeaderWrapper,
  DescriptionModalContainer,
  RibbonBox,
  SubCategoriesContainer,
  ContainerButton,
  CategoryDescription,
  DescriptionContainer,
  SubcategorySearchContainer
} from './styles'
import { Button } from '../../styles/Buttons'

const BusinessProductsListUI = (props) => {
  const {
    errors,
    businessId,
    isLazy,
    category,
    categories,
    categoryState,
    isBusinessLoading,
    onProductClick,
    handleSearchRedirect,
    featured,
    useKioskApp,
    searchValue,
    isCartOnProductsList,
    handleClearSearch,
    errorQuantityProducts,
    currentCart,
    setSubcategoriesSelected,
    subcategoriesSelected,
    onClickCategory,
    handleUpdateProducts,
    isSearchMode
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'
  const [openDescription, setOpenDescription] = useState(null)
  const headerRef = useRef()
  const onClickSubcategory = (subCategory, parentCategory) => {
    if (parentCategory && isLazy) {
      onClickCategory(parentCategory)
    }
    if (!subCategory) {
      setSubcategoriesSelected(subcategoriesSelected.filter(_subcategory => _subcategory?.parent_category_id !== parentCategory?.id))
      return
    }
    const categoryFounded = subcategoriesSelected.find(_subcategory => subCategory?.id === _subcategory?.id)
    if (categoryFounded) {
      setSubcategoriesSelected(subcategoriesSelected.filter(_subcategory => subCategory?.id !== _subcategory?.id))
    } else {
      setSubcategoriesSelected([...subcategoriesSelected, subCategory])
    }
  }

  const SubcategoriesComponent = ({ category }) => {
    const allsubcategorySelected = !subcategoriesSelected?.some(subcategory => category?.id === subcategory?.parent_category_id)

    return (
      <SubCategoriesContainer>
        <ContainerButton
          isSelected={allsubcategorySelected}
        >
          <Button
            onClick={() => onClickSubcategory(null, category)}
            color={allsubcategorySelected ? 'primary' : 'secondary'}
          >
            {t('ALL', 'All')} {allsubcategorySelected && 'X'}
          </Button>
        </ContainerButton>
        {category?.subcategories?.map(subcategory => {
          const isSubcategorySelected = subcategoriesSelected?.find(_subcategory => _subcategory?.id === subcategory?.id)
          return (
            <ContainerButton
              key={subcategory?.id}
              isSelected={isSubcategorySelected}
            >
              <Button
                onClick={() => onClickSubcategory(subcategory, category)}
                color={isSubcategorySelected ? 'primary' : 'secondary'}
              >
                {subcategory?.name} {isSubcategorySelected && 'X'}
              </Button>
            </ContainerButton>
          )
        }
        )}
      </SubCategoriesContainer>
    )
  }

  const productsCategorySelected = categoryState.products
    ?.filter(product =>
      !subcategoriesSelected.find(subcategory => subcategory?.parent_category_id === category?.id) ||
      subcategoriesSelected?.some(subcategory => subcategory.id === product?.category_id))

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        {category?.id && (
          <>
            <HeaderWrapper>
              {category?.subcategories?.length > 0 && !isSearchMode && (
                <SubcategoriesComponent category={category} />
              )}
            </HeaderWrapper>
            <ProductsListing>
              {
                productsCategorySelected
                  ?.filter(product => product?.category_id === category?.id)
                  ?.map((product, i) => (
                    <SingleProductCard
                      key={i}
                      isSoldOut={(product.inventoried && !product.quantity)}
                      product={product}
                      useKioskApp={useKioskApp}
                      businessId={businessId}
                      onProductClick={onProductClick}
                      isCartOnProductsList={isCartOnProductsList}
                      handleUpdateProducts={handleUpdateProducts}
                      productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                    />
                  ))
              }
            </ProductsListing>
            {isSearchMode && category?.subcategories?.length > 0 && category?.subcategories?.filter(subcategory => productsCategorySelected?.some(product => product?.category_id === subcategory?.id))?.map(subcategory => (
              <SubcategorySearchContainer key={subcategory?.id}>
                <h4>{subcategory?.name}</h4>
                <ProductsListing isSubcategorySearch>
                  {productsCategorySelected?.filter(product => product?.category_id === subcategory?.id)?.map((product, i) => (
                    <SingleProductCard
                      key={i}
                      isSoldOut={product.inventoried && !product.quantity}
                      businessId={businessId}
                      product={product}
                      onProductClick={onProductClick}
                      isCartOnProductsList={isCartOnProductsList}
                      handleUpdateProducts={handleUpdateProducts}
                      useKioskApp={useKioskApp}
                      productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                    />
                  ))}
                </ProductsListing>
              </SubcategorySearchContainer>
            ))}
          </>
        )}

        {
          !category?.id && (
            <>
              {
                featured && categoryState?.products?.find(product => product.featured) && (
                  <WrapAllCategories id='categoryfeatured'>
                    <h3>{t('FEATURED', 'Featured')}</h3>
                    <ProductsListing>
                      {categoryState.products?.map((product, i) => product.featured && (
                        <SingleProductCard
                          key={i}
                          isSoldOut={(product.inventoried && !product.quantity)}
                          product={product}
                          useKioskApp={useKioskApp}
                          businessId={businessId}
                          onProductClick={onProductClick}
                          isCartOnProductsList={isCartOnProductsList}
                          handleUpdateProducts={handleUpdateProducts}
                          productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                        />
                      ))}
                    </ProductsListing>
                  </WrapAllCategories>
                )
              }
            </>
          )
        }

        {
          !category?.id && categories.filter(category => category?.id !== null).map((category, i, _categories) => {
            const _products = !isUseParentCategory
              ? categoryState?.products?.filter(product => product?.category_id === category?.id) ?? []
              : categoryState?.products?.filter(product => category?.children?.some(cat => cat.category_id === product?.category_id)) ?? []
            const products = subcategoriesSelected?.length > 0
              ? _products?.filter(product =>
                !subcategoriesSelected.find(subcategory => subcategory?.parent_category_id === category?.id) ||
                subcategoriesSelected?.some(subcategory => subcategory.id === product?.category_id))
              : _products
            const shortCategoryDescription = category?.description?.length > 200 ? `${category?.description?.substring(0, 200)}...` : category?.description
            const isSubcategorySearch = isSearchMode && category?.subcategories?.length > 0 && category?.subcategories?.some(subcategory => products?.some(product => product?.category_id === subcategory?.id))
            return (
              <React.Fragment key={i}>
                {
                  products.length > 0 && (
                    <WrapAllCategories id={`category${category?.id}`}>
                      <HeaderWrapper ref={headerRef}>
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
                          <CategoryDescription maxWidth={headerRef?.current?.clientWidth}>
                            <p>
                              {shortCategoryDescription}
                            </p>
                            {category?.description?.length > 200 && (
                              <span onClick={() => setOpenDescription(category)}>{t('VIEW_MORE', 'View more')}</span>
                            )}
                          </CategoryDescription>
                        )}
                        {category?.subcategories?.length > 0 && !isSearchMode && (
                          <SubcategoriesComponent category={category} />
                        )}
                      </HeaderWrapper>
                      <ProductsListing isSubcategorySearch={isSubcategorySearch}>
                        {isSearchMode && category?.subcategories?.length > 0 ? (
                          <>
                            {products?.filter(product => product?.category_id === category?.id)?.map((product, i) => (
                              <SingleProductCard
                                key={i}
                                isSoldOut={product.inventoried && !product.quantity}
                                businessId={businessId}
                                product={product}
                                onProductClick={onProductClick}
                                useKioskApp={useKioskApp}
                                isCartOnProductsList={isCartOnProductsList}
                                handleUpdateProducts={handleUpdateProducts}
                                productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                              />
                            ))}
                          </>
                        ) : (
                          <>
                            {
                              products.map((product, i) => (
                                <SingleProductCard
                                  key={i}
                                  isSoldOut={product.inventoried && !product.quantity}
                                  businessId={businessId}
                                  product={product}
                                  onProductClick={onProductClick}
                                  useKioskApp={useKioskApp}
                                  isCartOnProductsList={isCartOnProductsList}
                                  handleUpdateProducts={handleUpdateProducts}
                                  productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                                />
                              ))
                            }
                          </>
                        )}
                        {
                          categoryState.loading && (i + 1) === _categories.length && [...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                            <SingleProductCard
                              key={`skeleton:${i}`}
                              isSkeleton
                            />
                          ))
                        }
                      </ProductsListing>
                      {isSearchMode && category?.subcategories?.length > 0 && category?.subcategories?.filter(subcategory => products?.some(product => product?.category_id === subcategory?.id))?.map(subcategory => (
                        <SubcategorySearchContainer key={subcategory?.id}>
                          <h4>{subcategory?.name}</h4>
                          <ProductsListing isSubcategorySearch={isSubcategorySearch}>
                            {products?.filter(product => product?.category_id === subcategory?.id)?.map((product, i) => (
                              <SingleProductCard
                                key={i}
                                isSoldOut={product.inventoried && !product.quantity}
                                businessId={businessId}
                                product={product}
                                onProductClick={onProductClick}
                                isCartOnProductsList={isCartOnProductsList}
                                handleUpdateProducts={handleUpdateProducts}
                                useKioskApp={useKioskApp}
                                productAddedToCartLength={currentCart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === product?.id ? Cproduct?.quantity : 0) }, 0)}
                              />
                            ))}
                          </ProductsListing>
                        </SubcategorySearchContainer>
                      ))}
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
            <DescriptionContainer>
              <div>
                <p>{openDescription?.description}</p>
              </div>
            </DescriptionContainer>
          </DescriptionModalContainer>
        </Modal>
      </ProductsContainer>
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
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
