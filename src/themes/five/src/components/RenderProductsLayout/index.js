import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils, useOrderingTheme } from 'ordering-components'
import CgSearch from '@meronex/icons/cg/CgSearch'
import { Cart3, ArrowLeft } from 'react-bootstrap-icons'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessBasicInformation as BusinessBasicInformationRed } from '../../../../seven'
import { BusinessBasicInformation as BusinessBasicInformationStarbucks } from '../../../../six'
import { BusinessBasicInformation as BusinessBasicInformationOld } from '../../../../../components/BusinessBasicInformation'

import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'
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
  PageBannerWrapper,
  BackButton
} from './styles'

import { SearchProducts as SearchProductsOriginal } from '../../../../../themes/five/src/components/SearchProducts'
import { SearchProducts as SearchProductsOld } from '../../../../../components/RenderProductsLayout/SearchProducts'
import { SearchProducts as SearchProductsStarbucks } from '../../../../six/src/components/BusinessProductsListing/SearchProducts'
import { ProfessionalFilter } from '../ProfessionalFilter'
import { SearchIconWrapper } from '../BusinessBasicInformation/styles'
import { OrderItAgain } from '../OrderItAgain'
import { ProfessionalBusinessFilter } from '../ProfessionalBusinessFilter'
import { PageBanner } from '../PageBanner'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { scrollTo } from '../../../../../utils'

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
    handleChangePriceFilterValues,
    priceFilterValues,
    handleUpdateProfessionals,
    isCustomerMode,
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [orderingTheme] = useOrderingTheme()
  const windowSize = useWindowSize()
  const [isCartModal, setisCartModal] = useState(false)
  const [openSearchProducts, setOpenSearchProducts] = useState(false)
  const [categoryClicked, setCategoryClicked] = useState(false)
  const isUseParentCategory = (configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1') && !useKioskApp
  const BusinessBasicInformationComponent =
    theme?.business_view?.components?.header?.components?.layout?.type === 'red'
      ? BusinessBasicInformationRed
      : theme?.business_view?.components?.header?.components?.layout?.type === 'starbucks'
        ? BusinessBasicInformationStarbucks
        : theme?.business_view?.components?.header?.components?.layout?.type === 'old'
          ? BusinessBasicInformationOld
          : BusinessBasicInformation

  const SearchProductsComponent =
    theme?.business_view?.components?.product_search?.components?.layout?.type === 'old'
      ? SearchProductsOld
      : theme?.business_view?.components?.product_search?.components?.layout?.type === 'starbucks'
        ? SearchProductsStarbucks
        : null

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }
  const showCartOnProductList = !orderingTheme?.theme?.business_view?.components?.cart?.components?.hidden
  const hideBusinessNearCity = theme?.business_view?.components?.near_business?.hidden ?? true
  const hidePreviousOrdered = theme?.business_view?.components?.products_ordered?.hidden

  const BusinessLayoutCategories = businessLayout.layoutOne
    ? CategoriesLayoutGroceries
    : BusinessProductsCategories

  const BusinessLayoutProductsList = businessLayout.layoutOne
    ? ProductListLayoutGroceries
    : BusinessProductsList

  const handleSaveProduct = () => {
    if (windowSize.width < 993) {
      return
    }
    const productContainer = document.getElementsByClassName('bp-list')[0]
    scrollTo(productContainer, 500, 1250)
  }

  useEffect(() => {
    handleSaveProduct()
  }, [categorySelected])

  useEffect(() => {
    if (windowSize.width < 993 && categoryClicked && document.getElementsByClassName('category-title')) {
      const extraHeight = 80
      const top = document.getElementsByClassName('category-title')[0].offsetTop - extraHeight
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    } else {
      window.scroll(0, 0)
    }
  }, [categoryClicked])

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout isCartOnProductsList={isCartOnProductsList}>
          {((!hideBusinessNearCity && !useKioskApp) || props.forceShowNearBusiness) && !isCustomLayout && (
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
            {!useKioskApp && (
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
                categoryClicked={categoryClicked}
                categorySelected={categorySelected}
                setCategoryClicked={setCategoryClicked}
              />
            )}

            {businessState?.business?.id && (
              <PageBannerWrapper>
                <PageBanner
                  position='web_business_page'
                  businessId={businessState?.business?.id}
                  isCustomerMode={isCustomerMode}
                />
              </PageBannerWrapper>
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
            {!business?.loading && business?.previously_products?.length > 0 && !hidePreviousOrdered && windowSize.width < 993 && !categoryClicked && (
              <OrderItAgain
                onProductClick={onProductClick}
                productList={business?.previously_products}
                businessId={business?.id}
              />
            )}
            {!businessLayout.layoutOne && (
              <BusinessContent isCustomLayout={isCustomLayout || useKioskApp} id='wrapper-categories'>
                <BusinessCategoryProductWrapper showCartOnProductList={showCartOnProductList}>
                  {business?.professionals?.length > 0 && !useKioskApp && (
                    <>
                      <ProfessionalBusinessFilter
                        sortByOptions={sortByOptions}
                        handleChangeSortBy={handleChangeSortBy}
                        sortByValue={sortByValue}
                        handleChangeSearch={handleChangeSearch}
                        business={business}
                        handleChangePriceFilterValues={handleChangePriceFilterValues}
                        priceFilterValues={priceFilterValues}
                      />
                      <ProfessionalFilterWrapper>
                        <ProfessionalFilter
                          professionals={business?.professionals}
                          professionalSelected={professionalSelected}
                          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                          handleUpdateProfessionals={handleUpdateProfessionals}
                        />
                      </ProfessionalFilterWrapper>
                    </>
                  )}
                  <div style={{ position: 'relative' }}>
                    {!(business?.categories?.length === 0 && !categoryId) && !categorySelected?.id && (
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
                        isProfessional={business?.professionals?.length > 0 && !useKioskApp}
                      />
                    )}
                    {!(business?.categories?.length === 0 && !categoryId) && categorySelected?.id && (
                      <BackButton>
                        <Button
                          color='primary'
                          initialIcon
                          onClick={() => onClickCategory({ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') })}
                        >
                          <ArrowLeft />
                          <div>{t('GO_TO_ALL_CATEGORIES', 'Go to all categories')}</div>
                        </Button>
                      </BackButton>
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
                {(windowSize.width >= 1000 && windowSize.height >= 600) && showCartOnProductList && (
                  <BusinessCartContainer isProfessional={business?.professionals?.length > 0 && !useKioskApp}>
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
                            businessConfigs={business?.configs}
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
              <>
                {business?.professionals?.length > 0 && (
                  <ProfessionalFilterWrapper isTop>
                    <ProfessionalFilter
                      professionals={business?.professionals}
                      professionalSelected={professionalSelected}
                      handleChangeProfessionalSelected={handleChangeProfessionalSelected}
                      handleUpdateProfessionals={handleUpdateProfessionals}
                    />
                  </ProfessionalFilterWrapper>
                )}
                <BusinessContent>
                  <BusinessCategoriesContainer offSticky>
                    {!(business?.categories?.length === 0 && !categoryId) && (
                      <>
                        {(!categoryClicked || windowSize.width >= 993) && (
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
                            setCategoryClicked={setCategoryClicked}
                          />
                        )}
                      </>
                    )}
                  </BusinessCategoriesContainer>
                  {(categoryClicked || windowSize.width >= 993) && (
                    <BusinessCategoryProductWrapper>
                      <WrapContent isGroceries id='groceries'>
                        {!business?.loading && !hidePreviousOrdered && business?.previously_products?.length > 0 && windowSize.width >= 993 && (
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
                        />
                      </WrapContent>
                    </BusinessCategoryProductWrapper>
                  )}
                </BusinessContent>
              </>

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
          <BusinessContent isCustomLayout={isCustomLayout || useKioskApp} id='wrapper-categories'>
            <BusinessCategoryProductWrapper showCartOnProductList={showCartOnProductList}>
              <div style={{ position: 'relative' }}>
                <BusinessProductsCategories
                  isSkeleton
                  categories={[]}
                  openBusinessInformation={openBusinessInformation}
                  isCustomerMode={isCustomerMode}
                />
              </div>
            </BusinessCategoryProductWrapper>
          </BusinessContent>
          {(categoryClicked || windowSize.width >= 993) && (
            <WrapContent>
              <BusinessProductsList
                categories={[]}
                useKioskApp={useKioskApp}
                category={categorySelected}
                categoryState={categoryState}
                isBusinessLoading={isLoading}
                handleUpdateProducts={handleUpdateProducts}
                errorQuantityProducts={errorQuantityProducts}
              />
            </WrapContent>
          )}
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
                businessConfigs={business?.configs}
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
