import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig } from 'ordering-components'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'

import { Cart } from '../Cart'
import { Button } from '../../styles/Buttons'

import {
  Title,
  WrappLayout,
  WrapContent,
  BusinessContent,
  BusinessCategoryProductWrapper,
  BusinessCategoriesContainer,
  BusinessCartContainer,
  BusinessCartContent,
  EmptyCart,
  EmptyBtnWrapper
} from './styles'

const layoutOne = 'groceries'

export const RenderProductsLayout = (props) => {
  const {
    errors,
    isError,
    isLoading,
    business,
    categoryId,
    searchValue,
    sortByValue,
    currentCart,
    businessState,
    sortByOptions,
    categoryState,
    categorySelected,
    openCategories,
    openBusinessInformation,
    isCartOnProductsList,
    handleChangeSortBy,
    errorQuantityProducts,
    handler,
    onClickCategory,
    featuredProducts,
    onProductClick,
    handleSearchRedirect,
    handleChangeSearch,
    setOpenBusinessInformation,
    handleCartOpen
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }

  const BusinessLayout = (props) => {
    const components = {
      categories: businessLayout.layoutOne
        ? CategoriesLayoutGroceries
        : BusinessProductsCategories,
      products_list: businessLayout.layoutOne
        ? ProductListLayoutGroceries
        : BusinessProductsList
    }

    const ComponentToRender = props?.component && components[props?.component]

    return (
      props?.component && (
        <ComponentToRender {...props} />
      )
    )
  }

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout isCartOnProductsList={isCartOnProductsList}>
          <div className='bp-list'>
            <BusinessBasicInformation
              businessState={businessState}
              setOpenBusinessInformation={setOpenBusinessInformation}
              openBusinessInformation={openBusinessInformation}
              handleChangeSearch={handleChangeSearch}
              searchValue={searchValue}
              sortByOptions={sortByOptions}
              handleChangeSortBy={handleChangeSortBy}
              categoryState={categoryState}
              errorQuantityProducts={errorQuantityProducts}
              sortByValue={sortByValue}
            />
            {!businessLayout.layoutOne && (
              <BusinessContent>
                <BusinessCategoryProductWrapper>
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessLayout
                      component='categories'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      categorySelected={categorySelected}
                      onClickCategory={onClickCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                    />
                  )}

                  <WrapContent id='businessProductList'>
                    <BusinessLayout
                      component='products_list'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      category={categorySelected}
                      categoryState={categoryState}
                      businessId={business?.id}
                      errors={errors}
                      onProductClick={onProductClick}
                      handleSearchRedirect={handleSearchRedirect}
                      featured={featuredProducts}
                      searchValue={searchValue}
                      isCartOnProductsList={isCartOnProductsList}
                      handleClearSearch={handleChangeSearch}
                      errorQuantityProducts={errorQuantityProducts}
                    />
                  </WrapContent>
                </BusinessCategoryProductWrapper>
                <BusinessCartContainer>
                  <BusinessCartContent>
                    {currentCart?.products?.length > 0 ? (
                      <>
                        <Title>{t('YOUR_CART', 'Your cart')}</Title>
                        <Cart
                          isStore
                          isCustomMode
                          isForceOpenCart
                          cart={currentCart}
                          isCartPending={currentCart?.status === 2}
                          isProducts={currentCart.products.length}
                          isCartOnProductsList={isCartOnProductsList}
                          handleCartOpen={handleCartOpen}
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
              </BusinessContent>
            )}

            {businessLayout.layoutOne && (
              <BusinessContent>
                <BusinessCategoriesContainer>
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessLayout
                      component='categories'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      categorySelected={categorySelected}
                      onClickCategory={onClickCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                      openCategories={openCategories}
                    />
                  )}
                </BusinessCategoriesContainer>
                <BusinessCategoryProductWrapper>
                  <WrapContent>
                    <BusinessLayout
                      component='products_list'
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      category={categorySelected}
                      categoriesState={props.categoriesState}
                      categoryState={categoryState}
                      businessId={business?.id}
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
            )}
          </div>
        </WrappLayout>
      )}

      {isLoading && !isError && (
        <>
          <BusinessBasicInformation
            isSkeleton
            handler={handler}
            businessState={{ business: {}, loading: true }}
            openBusinessInformation={openBusinessInformation}
          />
          <BusinessProductsCategories
            isSkeleton
            categories={[]}
            openBusinessInformation={openBusinessInformation}
          />
          <WrapContent>
            <BusinessProductsList
              categories={[]}
              category={categorySelected}
              categoryState={categoryState}
              isBusinessLoading={isLoading}
              errorQuantityProducts={errorQuantityProducts}
            />
          </WrapContent>
        </>
      )}
    </>
  )
}
