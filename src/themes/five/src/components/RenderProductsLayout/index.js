import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils, useOrderingTheme } from 'ordering-components'
import CgSearch from '@meronex/icons/cg/CgSearch'
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
  ProfessionalFilterWrapper,
  WrapperSearchAbsolute
} from './styles'

import { SearchProducts as SearchProductsOriginal } from '../../../../../themes/five/src/components/SearchProducts'
import { SearchProducts as SearchProductsOld } from '../../../../../components/RenderProductsLayout/SearchProducts'
import { SearchProducts as SearchProductsStarbucks } from '../../../../six/src/components/BusinessProductsListing/SearchProducts'
import { ProfessionalFilter } from '../ProfessionalFilter'
import { SearchIconWrapper } from '../BusinessBasicInformation/styles'

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
    useKioskApp,
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
  const [orderingTheme] = useOrderingTheme()
  const [isCartModal, setisCartModal] = useState(false)
  const [openSearchProducts, setOpenSearchProducts] = useState(false)

  const isUseParentCategory = (configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1') && !useKioskApp
  const BusinessBasicInformationComponent =
    orderingTheme?.theme?.business_view?.components?.header?.components?.layout?.type === 'red'
      ? BusinessBasicInformationRed
      : orderingTheme?.theme?.business_view?.components?.header?.components?.layout?.type === 'starbucks'
        ? BusinessBasicInformationStarbucks
        : orderingTheme?.theme?.business_view?.components?.header?.components?.layout?.type === 'old'
          ? BusinessBasicInformationOld
          : BusinessBasicInformation

  const SearchProductsComponent =
    orderingTheme?.theme?.business_view?.components?.product_search?.components?.layout?.type === 'old'
      ? SearchProductsOld
      : orderingTheme?.theme?.business_view?.components?.product_search?.components?.layout?.type === 'starbucks'
        ? SearchProductsStarbucks
        : null

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }
  const showCartOnProductList = !orderingTheme?.theme?.business_view?.components?.cart?.components?.hidden

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
            {!isCustomLayout && !useKioskApp && (
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
            {!errorQuantityProducts && SearchProductsComponent && !useKioskApp && (
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
              <BusinessContent isCustomLayout={isCustomLayout || useKioskApp}>
                <BusinessCategoryProductWrapper showCartOnProductList={showCartOnProductList}>
                  <div style={{ position: 'relative' }}>
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
                        useKioskApp={useKioskApp}
                        openBusinessInformation={openBusinessInformation}
                        business={business}
                        currentCart={currentCart}
                        wContainerStyle={useKioskApp && 'calc(100% - 50px)'}
                      />
                    )}
                    {useKioskApp && (
                      <WrapperSearchAbsolute id='WrapperSearchAbsolute'>
                        <SearchIconWrapper
                          onClick={() => setOpenSearchProducts(true)}
                        >
                          <CgSearch />
                        </SearchIconWrapper>
                        {openSearchProducts && (
                          <SearchProductsOriginal
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
                            onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                            business={businessState.business}
                            onClose={() => {
                              handleChangeSearch('')
                              setOpenSearchProducts(false)
                            }}
                          />
                        )}
                      </WrapperSearchAbsolute>
                    )}
                  </div>
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
                      useKioskApp={useKioskApp}
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
                  <BusinessCartContainer id='BusinessCartContainer'>
                    <BusinessCartContent maxHeight={window.innerHeight - 100}>
                      {currentCart?.products?.length > 0 ? (
                        <>
                          <Title>{t('YOUR_CART', 'Your cart')}</Title>
                          <Cart
                            isStore
                            isCustomMode
                            isForceOpenCart
                            useKioskApp={useKioskApp}
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
          {!isCustomLayout && !useKioskApp && (
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
              useKioskApp={useKioskApp}
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
                useKioskApp={useKioskApp}
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
