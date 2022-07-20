import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils } from 'ordering-components'
import { Cart3 } from 'react-bootstrap-icons'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessBasicInformation as BusinessBasicInformationRed } from '../../../../seven'
import { BusinessBasicInformation as BusinessBasicInformationStarbucks } from '../../../../six'
import { BusinessBasicInformation as BusinessBasicInformationOld } from '../../../../../components/BusinessBasicInformation'

import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'
import { Modal } from '../Modal'

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
  EmptyBtnWrapper,
  WrapperSearch,
  ProfessionalFilterWrapper
} from './styles'

import { SearchProducts as SearchProductsOld } from '../../../../../components/RenderProductsLayout/SearchProducts'
import { SearchProducts as SearchProductsStarbucks } from '../../../../six/src/components/BusinessProductsListing/SearchProducts'
import { ProfessionalFilter } from '../ProfessionalFilter'

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
    handleCartOpen,
    isCustomLayout,
    setSubcategoriesSelected,
    subcategoriesSelected,
    isLazy,
    handleUpdateProducts,
    handleChangeProfessionalSelected,
    professionalSelected
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [isCartModal, setisCartModal] = useState(false)

  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'
  const BusinessBasicInformationComponent =
    theme?.layouts?.business_view?.components?.basic_information?.components?.layout?.type === 'red'
      ? BusinessBasicInformationRed
      : theme?.layouts?.business_view?.components?.basic_information?.components?.layout?.type === 'starbucks'
        ? BusinessBasicInformationStarbucks
        : theme?.layouts?.business_view?.components?.basic_information?.components?.layout?.type === 'old'
          ? BusinessBasicInformationOld
          : BusinessBasicInformation

  const SearchProductsComponent =
    theme?.layouts?.business_view?.components?.product_search?.components?.layout?.type === 'old'
      ? SearchProductsOld
      : theme?.layouts?.business_view?.components?.product_search?.components?.layout?.type === 'starbucks'
        ? SearchProductsStarbucks
        : null

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }
  const showCartOnProductList = !theme?.layouts?.business_view?.components?.cart?.hidden

  const BusinessLayoutCategories = businessLayout.layoutOne
    ? CategoriesLayoutGroceries
    : BusinessProductsCategories

  const BusinessLayoutProductsList = businessLayout.layoutOne
    ? ProductListLayoutGroceries
    : BusinessProductsList

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout isCartOnProductsList={isCartOnProductsList}>
          <div className='bp-list'>
            {!isCustomLayout && (
              <BusinessBasicInformationComponent
                {...props}
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
            )}
            {!errorQuantityProducts && SearchProductsComponent && (
              <>
                <WrapperSearch>
                  <SearchProductsComponent
                    handleChangeSearch={handleChangeSearch}
                    searchValue={searchValue}
                    sortByOptions={sortByOptions}
                    sortByValue={sortByValue}
                    onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                    businessState={businessState}
                  />
                </WrapperSearch>
              </>
            )}
            {!businessLayout.layoutOne && (
              <BusinessContent isCustomLayout={isCustomLayout}>
                <BusinessCategoryProductWrapper showCartOnProductList={showCartOnProductList}>
                  {business?.professionals?.length > 0 && (
                    <ProfessionalFilterWrapper>
                      <ProfessionalFilter
                        professionals={business?.professionals}
                        professionalSelected={professionalSelected}
                        handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                      />
                    </ProfessionalFilterWrapper>
                  )}
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessLayoutCategories
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      categorySelected={categorySelected}
                      onClickCategory={onClickCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                      business={business}
                      currentCart={currentCart}
                    />
                  )}
                  {/* {windowSize.width < 500 && (
                    <MobileCartViewWrapper>
                      <span>{currentCart?.products?.length > 0 ? parsePrice(currentCart?.total) : parsePrice(0)}</span>
                      <Button color='primary' onClick={() => setisCartModal(true)}>{t('VIEW_CART', 'View cart')}</Button>
                    </MobileCartViewWrapper>
                  )} */}
                  <WrapContent id='businessProductList'>
                    <BusinessLayoutProductsList
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      isLazy={isLazy}
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
                      business={business}
                      currentCart={currentCart}
                      setSubcategoriesSelected={setSubcategoriesSelected}
                      subcategoriesSelected={subcategoriesSelected}
                      onClickCategory={onClickCategory}
                      handleUpdateProducts={handleUpdateProducts}
                      professionalSelected={professionalSelected}
                      handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                    />
                  </WrapContent>
                </BusinessCategoryProductWrapper>
                {showCartOnProductList && (
                  <BusinessCartContainer>
                    <BusinessCartContent maxHeight={window.innerHeight - 100}>
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
                            <Cart3 />
                            <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
                          </div>
                          <EmptyBtnWrapper>
                            <span>{parsePrice(0)}</span>
                            <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
                          </EmptyBtnWrapper>
                        </EmptyCart>
                      )}
                    </BusinessCartContent>
                  </BusinessCartContainer>
                )}
              </BusinessContent>
            )}

            {businessLayout.layoutOne && (
              <BusinessContent>
                <BusinessCategoriesContainer>
                  {!(business?.categories?.length === 0 && !categoryId) && (
                    <BusinessLayoutCategories
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
                      business={business}
                      currentCart={currentCart}
                    />
                  )}
                </BusinessCategoriesContainer>
                <BusinessCategoryProductWrapper>
                  <WrapContent>
                    <BusinessLayoutProductsList
                      categories={[
                        { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                        { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                        ...business?.categories.sort((a, b) => a.rank - b.rank)
                      ]}
                      category={categorySelected}
                      onClickCategory={onClickCategory}
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
                      business={business}
                      currentCart={currentCart}
                      handleUpdateProducts={handleUpdateProducts}
                      professionalSelected={professionalSelected}
                      handleChangeProfessionalSelected={handleChangeProfessionalSelected}
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
          {!isCustomLayout && (
            <BusinessBasicInformationComponent
              isSkeleton
              handler={handler}
              businessState={{ business: {}, loading: true }}
              openBusinessInformation={openBusinessInformation}
            />
          )}
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
      <Modal
        width='40%'
        open={isCartModal}
        onClose={() => setisCartModal(false)}
        padding='0'
      >
        <BusinessCartContent isModal>
          <Title style={{ textAlign: 'center', marginTop: '5px' }}>{t('YOUR_CART', 'Your cart')}</Title>
          {currentCart?.products?.length > 0 ? (
            <>
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
                <Cart3 />
                <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
              </div>
              <EmptyBtnWrapper>
                <span>{parsePrice(0)}</span>
                <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
              </EmptyBtnWrapper>
            </EmptyCart>
          )}
        </BusinessCartContent>
      </Modal>
    </>
  )
}
