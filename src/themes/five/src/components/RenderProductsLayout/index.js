import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils, useOrderingTheme } from 'ordering-components'
import CgSearch from '@meronex/icons/cg/CgSearch'
import { Cart3 } from 'react-bootstrap-icons'
import EnChevronThinUp from '@meronex/icons/en/EnChevronThinUp'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessBasicInformation as BusinessBasicInformationRed } from '../../../../seven'
import { BusinessBasicInformation as BusinessBasicInformationStarbucks } from '../../../../six'
import { BusinessBasicInformation as BusinessBasicInformationOld } from '../../../../../components/BusinessBasicInformation'

import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsCategories as CategoriesLayoutPFChangs } from '../BusinessProductsCategories/layouts/pfchangs'

import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'
import { BusinessProductsList as ProductListLayoutPFChangs } from '../BusinessProductsList/layouts/pfchangs'
import { Modal } from '../Modal'
import { BusinessesListing } from '../BusinessesListing'
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
  WrapperSearchAbsolute,
  NearBusiness,
  BackToTop
} from './styles'

import { SearchProducts as SearchProductsOriginal } from '../../../../../themes/five/src/components/SearchProducts'
import { SearchProducts as SearchProductsOld } from '../../../../../components/RenderProductsLayout/SearchProducts'
import { SearchProducts as SearchProductsStarbucks } from '../../../../six/src/components/BusinessProductsListing/SearchProducts'
import { ProfessionalFilter } from '../ProfessionalFilter'
import { SearchIconWrapper } from '../BusinessBasicInformation/styles'
import { BusinessBasicInformationPFChangs } from '../BusinessBasicInformation/layouts/pfchangs'
import { OrderItAgain } from '../OrderItAgain'

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
    professionalSelected,
    onBusinessClick,
    pfChangsCategories,
    enabledCatering
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [orderingTheme] = useOrderingTheme()
  const [isCartModal, setisCartModal] = useState(false)
  const [openSearchProducts, setOpenSearchProducts] = useState(false)
  const [subcategorySelected, setSubcategorySelected] = useState(null)
  const [showGoTopButton, setShowGoTopButton] = useState(false)
  const isUseParentCategory = (configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1') && !useKioskApp
  const headerType = theme?.business_view?.components?.header?.components?.layout?.type
  const showPrincipalCategories = headerType === 'pfchangs'
    ? !(business?.categories?.length === 0 && !categoryId) && enabledCatering && headerType === 'pfchangs'
    : !(business?.categories?.length === 0 && !categoryId)
  const BusinessBasicInformationComponent =
    headerType === 'red'
      ? BusinessBasicInformationRed
      : headerType === 'starbucks'
        ? BusinessBasicInformationStarbucks
        : headerType === 'old'
          ? BusinessBasicInformationOld
          : headerType === 'pfchangs'
            ? BusinessBasicInformationPFChangs
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
  const showCartOnProductList = !theme?.business_view?.components?.cart?.hidden
  const hideBusinessNearCity = theme?.business_view?.components?.near_business?.hidden ?? true
  const categoriesMode = theme?.business_view?.components?.categories?.components?.layout?.type

  const pfchangsSubcategories = business?.categories?.filter(category => categorySelected?.name === t('CATERING_MENU', 'Catering Menu') ? category?.name?.toLowerCase()?.includes(t('CATERING', 'catering')) : !category?.name?.toLowerCase()?.includes(t('CATERING', 'catering')))?.sort((a, b) => a.rank - b.rank)

  const BusinessLayoutCategories = headerType === 'pfchangs'
    ? CategoriesLayoutPFChangs : businessLayout.layoutOne
      ? CategoriesLayoutGroceries
      : BusinessProductsCategories

  const BusinessLayoutProductsList = headerType === 'pfchangs'
    ? ProductListLayoutPFChangs
    : businessLayout.layoutOne
      ? ProductListLayoutGroceries
      : BusinessProductsList

  const BusinessLayoutCategoriesSkeleton = headerType === 'pfchangs'
    ? CategoriesLayoutPFChangs
    : BusinessProductsCategories

  const BusinessLayoutProductsListSkeleton = headerType === 'pfchangs'
    ? ProductListLayoutPFChangs
    : BusinessProductsList

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 300)
  }

  const handleShowGoTopButton = () => {
    if (window.scrollY > 500) {
      setShowGoTopButton(true)
    } else {
      setShowGoTopButton(false)
    }
  }

  useEffect(() => {
    if (headerType === 'pfchangs') {
      window.addEventListener('scroll', handleShowGoTopButton)
      return () =>
        window.removeEventListener('scroll', handleShowGoTopButton)
    }
  }, [headerType])

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout isCartOnProductsList={isCartOnProductsList}>
          {!hideBusinessNearCity && !useKioskApp && (
            <NearBusiness>
              <BusinessesListing
                logosLayout
                propsToFetch={['id', 'logo', 'location', 'timezone', 'schedule', 'open', 'slug']}
                cityId={businessState?.business?.city_id}
                onBusinessClick={onBusinessClick}
                actualSlug={businessState?.business?.slug}
              />
            </NearBusiness>
          )}
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
            {(!businessLayout.layoutOne || headerType === 'pfchangs') && (
              <BusinessContent isCustomLayout={isCustomLayout || useKioskApp} id='wrapper-categories'>
                <BusinessCategoryProductWrapper showCartOnProductList={showCartOnProductList}>
                  <div style={{ position: 'relative' }}>
                    {
                      business?.professionals?.length > 0 && headerType !== 'pfchangs' && (
                        <ProfessionalFilterWrapper>
                          <ProfessionalFilter
                            professionals={business?.professionals}
                            professionalSelected={professionalSelected}
                            handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                          />
                        </ProfessionalFilterWrapper>
                      )
                    }
                    {
                      showPrincipalCategories && (
                        <BusinessLayoutCategories
                          categories={
                            categoriesMode === 'twocategories'
                              ? pfChangsCategories
                              : headerType === 'pfchangs'
                                ? business?.categories.filter(category => category?.subcategories?.length > 0).sort((a, b) => a.rank - b.rank)
                                : [
                                  { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                                  { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                                  ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                          categorySelected={categorySelected?.id === null && categoriesMode === 'twocategories' ? pfChangsCategories[0] : categorySelected}
                          onClickCategory={onClickCategory}
                          featured={featuredProducts}
                          useKioskApp={useKioskApp}
                          openBusinessInformation={openBusinessInformation}
                          business={business}
                          currentCart={currentCart}
                          wContainerStyle={useKioskApp && 'calc(100% - 50px)'}
                          setSubcategoriesSelected={setSubcategoriesSelected}
                          subcategoriesSelected={subcategoriesSelected}
                          PFChangsCategoriesLayout={headerType === 'pfchangs'}
                          setSubcategorySelected={setSubcategorySelected}
                        />
                      )
                    }
                    {
                      ((categorySelected?.subcategories?.length > 0 && headerType === 'pfchangs') || categoriesMode === 'twocategories') && (
                        <BusinessLayoutCategories
                          categories={
                            categoriesMode === 'twocategories'
                              ? pfchangsSubcategories
                              : categorySelected?.subcategories?.sort((a, b) => a.rank - b.rank)
                          }
                          categorySelected={categorySelected}
                          onClickCategory={onClickCategory}
                          featured={featuredProducts}
                          useKioskApp={useKioskApp}
                          openBusinessInformation={openBusinessInformation}
                          business={business}
                          currentCart={currentCart}
                          wContainerStyle={useKioskApp && 'calc(100% - 50px)'}
                          subcategoriesLayout
                          subcategorySelected={subcategorySelected}
                          setSubcategorySelected={setSubcategorySelected}
                        />
                      )
                    }
                    {
                      useKioskApp && (
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
                      )
                    }
                  </div>
                  {/* {windowSize.width < 500 && (
                    <MobileCartViewWrapper>
                      <span>{currentCart?.products?.length > 0 ? parsePrice(currentCart?.total) : parsePrice(0)}</span>
                      <Button color='primary' onClick={() => setisCartModal(true)}>{t('VIEW_CART', 'View cart')}</Button>
                    </MobileCartViewWrapper>
                  )} */}
                  <WrapContent id='businessProductList' pfchangs={headerType === 'pfchangs'}>
                    {business?.professionals?.length > 0 && headerType !== 'pfchangs' && (
                      <ProfessionalFilterWrapper>
                        <ProfessionalFilter
                          professionals={business?.professionals}
                          professionalSelected={professionalSelected}
                          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                        />
                      </ProfessionalFilterWrapper>
                    )}
                    {!business?.loading && business?.previously_products?.length > 0 && headerType !== 'pfchangs' && (
                      <OrderItAgain
                        onProductClick={onProductClick}
                        productList={business?.previously_products}
                        businessId={business?.id}
                      />
                    )}
                    {headerType === 'pfchangs' ? (
                      <BusinessLayoutProductsList
                        categories={categoriesMode !== 'twocategories'
                          ? categorySelected?.id
                            ? [
                              ...categorySelected?.sort((a, b) => a.rank - b.rank)?.map(category => ({
                                ...category,
                                products: categorySelected?.products?.filter(product => product?.category_id === category?.id)
                              }))
                            ]
                            : business?.categories.sort((a, b) => a.rank - b.rank)
                          : pfchangsSubcategories.map(category => ({
                            ...category,
                            products: category.products
                          }))}
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
                    ) : (
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
                    )}
                  </WrapContent>
                </BusinessCategoryProductWrapper>
                {
                  showCartOnProductList && (
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
                  )
                }
              </BusinessContent>
            )}

            {
              businessLayout.layoutOne && headerType !== 'pfchangs' && (
                <>
                  {business?.professionals?.length > 0 && (
                    <ProfessionalFilterWrapper isTop>
                      <ProfessionalFilter
                        professionals={business?.professionals}
                        professionalSelected={professionalSelected}
                        handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                      />
                    </ProfessionalFilterWrapper>
                  )}
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
                          useKioskApp={useKioskApp}
                        />
                      )}
                    </BusinessCategoriesContainer>
                    <BusinessCategoryProductWrapper>
                      <WrapContent isGroceries>
                        {!business?.loading && business?.previously_products?.length > 0 && (
                          <OrderItAgain
                            onProductClick={onProductClick}
                            productList={business?.previously_products}
                            businessId={business?.id}
                            isGroceries
                          />
                        )}
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
                          subcategorySelected={subcategorySelected}
                        />
                      </WrapContent>
                    </BusinessCategoryProductWrapper>
                  </BusinessContent>
                </>

              )
            }
          </div>
          {showGoTopButton && (
            <BackToTop onClick={() => handleScrollToTop()}>
              <EnChevronThinUp />
              {t('BACK_TO_TOP', 'Back to top')}
            </BackToTop>
          )}
        </WrappLayout>
      )}

      {
        isLoading && !isError && (
          <>
            {!isCustomLayout && !useKioskApp && (
              <BusinessBasicInformationComponent
                isSkeleton
                handler={handler}
                businessState={{ business: {}, loading: true }}
                openBusinessInformation={openBusinessInformation}
              />
            )}
            <BusinessLayoutCategoriesSkeleton
              isSkeleton
              categories={[]}
              openBusinessInformation={openBusinessInformation}
            />
            <WrapContent>
              <BusinessLayoutProductsListSkeleton
                categories={[]}
                useKioskApp={useKioskApp}
                category={categorySelected}
                categoryState={categoryState}
                isBusinessLoading={isLoading}
                errorQuantityProducts={errorQuantityProducts}
              />
            </WrapContent>
          </>
        )
      }
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
