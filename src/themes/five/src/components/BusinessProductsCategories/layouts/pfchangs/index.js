import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../../../../../../../components/AutoScroll'

import { CategoriesContainer, CategoriesWrapper, CategoryPFChangs, Diviver } from './styles'
import { Tabs, Tab } from '../../../../styles/Tabs'
import { Tabs as TabsPF, Tab as TabPF } from '../../../../styles/Tabs/theme/pfchangs'
import { useTheme } from 'styled-components'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    featured,
    openBusinessInformation,
    business,
    handlerClickCategory,
    categorySelected,
    PFChangsCategoriesLayout,
    setSubcategorySelected,
    subcategorySelected,
    subcategoriesLayout
  } = props

  const [selectedCategory, setSelectedCategory] = useState({ id: null })
  const theme = useTheme()
  const handleChangeCategory = (category) => {
    const isBlockScroll = window.location.search.includes('category') &&
      window.location.search.includes('product')

    if (business?.lazy_load_products_recommended || PFChangsCategoriesLayout) {
      handlerClickCategory({ ...category })
      return
    }
    let topPos = 0
    if (!category?.id) topPos = document.getElementById('businessProductList')?.offsetTop
    else topPos = document.getElementById(`category${category.id}`)?.offsetTop
    if (!isBlockScroll) {
      window.scroll({
        top: topPos - 120,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const TabsComponent = (props) => {
    return (
      <>
        {props.pfchangs ? (
          <TabsPF {...props}>{props.children}</TabsPF>
        ) : (
          <Tabs {...props}>{props.children}</Tabs>
        )}
      </>
    )
  }
  const TabComponent = (props) => {
    return (
      <>
        {props.pfchangs ? (
          <TabPF {...props}>{props.children}</TabPF>
        ) : (
          <Tab {...props}>{props.children}</Tab>
        )}
      </>
    )
  }

  const Category = ({ category, pfchangs }) => {
    return (
      <TabComponent
        className={`category${subcategoriesLayout ? category?.id : category.id === ' featured' ? ' special' : ''}`}
        active={
          subcategoriesLayout
            ? subcategorySelected?.id === category?.id
            : business?.lazy_load_products_recommended
              ? (categorySelected?.id === category.id)
              : (selectedCategory?.id === category.id)
        }
        onClick={() => handleChangeCategory(category)}
        borderBottom
        pfchangs={pfchangs}
        activeColor={theme.colors?.gold}
        color={theme.colors?.gold}
        hover={subcategoriesLayout}
      >
        {category.name}
      </TabComponent>
    )
  }

  const ProductCategories = ({ pfchangs }) => {
    return (
      categories && categories.length && categories.map((category, i) => (
        <React.Fragment key={category?.id}>
          {pfchangs ? (
            <CategoryPFChangs hover active={business?.lazy_load_products_recommended || PFChangsCategoriesLayout ? (categorySelected?.id === category.id) : (selectedCategory?.id === category.id)}>
              <Category category={category} pfchangs />
              <span />
            </CategoryPFChangs>
          ) : (
            <Category category={category} />
          )}
        </React.Fragment>
      ))
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      if (business?.lazy_load_products_recommended || PFChangsCategoriesLayout) return
      const featuredElement = document.getElementById('categoryfeatured')
      const _categories = featuredElement ? [...categories] : categories.filter(category => category.id !== 'featured')
      _categories?.length && _categories.forEach(category => {
        const windowTop = window.scrollY
        let topPos = 0
        if (!category?.id) topPos = document.getElementById('businessProductList')?.offsetTop
        else topPos = document.getElementById(`category${category.id}`)?.offsetTop

        if (windowTop >= (topPos - 120)) {
          subcategoriesLayout ? setSubcategorySelected(category) : setSelectedCategory(category)
        }
      })

      const navbar = document.getElementById('category-lists')
      const cart = document.getElementById('BusinessCartContainer')
      const search = document.getElementById('WrapperSearchAbsolute')
      const wrapperCategories = document.getElementById('wrapper-categories')

      const styleSheet = document.getElementById('styles').sheet

      let style0 = '.sticky-prod-cat {'
      style0 += 'position: fixed !important;'
      style0 += 'top: 80px !important;'
      style0 += 'width: 100% !important;'
      style0 += '}'

      let style1 = '.sticky-prod-cart {'
      style1 += 'position: fixed !important;'
      style1 += 'top: 80px !important;'
      style1 += 'right: 2.5% !important;'
      style1 += 'width: 28.5% !important;'
      style1 += '}'

      let style2 = '.sticky-search {'
      style2 += 'position: fixed !important;'
      style2 += 'top: 10px !important;'
      style2 += 'right: 32% !important;'
      style2 += 'height: 70px !important;'
      style2 += 'z-index: 9999 !important;'
      style2 += '}'

      styleSheet.insertRule(style0, 0)
      styleSheet.insertRule(style1, 1)
      styleSheet.insertRule(style2, 2)

      const limit = window.pageYOffset >= wrapperCategories?.offsetTop && window.pageYOffset > 0

      if (limit) {
        navbar && navbar.classList.add('sticky-prod-cat')
        cart && cart.classList.add('sticky-prod-cart')
        search && search.classList.add('sticky-search')
      } else {
        navbar && navbar.classList.remove('sticky-prod-cat')
        cart && cart.classList.remove('sticky-prod-cart')
        search && search.classList.remove('sticky-search')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categorySelected])

  return (
    <>
      <CategoriesWrapper hide={categories?.length === 0}>
        {PFChangsCategoriesLayout ? (
          <>
            <CategoriesContainer pfchangs>
              <TabsComponent>
                <ProductCategories pfchangs />
              </TabsComponent>
            </CategoriesContainer>
            <Diviver />
          </>
        ) : (
          <CategoriesContainer
            id='category-lists'
            className='category-lists'
            featured={featured}
            w={props.wContainerStyle}
            pfchangs
            subcategoriesLayout={subcategoriesLayout}
          >
            {!isSkeleton ? (
              <Tabs variant='primary'>
                {openBusinessInformation ? (
                  <ProductCategories />
                ) : (
                  <AutoScroll>
                    <ProductCategories isPfchangsLayout />
                  </AutoScroll>
                )}
              </Tabs>
            ) : (
              <Tabs variant='primary'>
                {[...Array(4).keys()].map(i => (
                  <Tab key={i}>
                    <Skeleton width={300} height={70} />
                  </Tab>
                ))}
              </Tabs>
            )}
          </CategoriesContainer>
        )}

      </CategoriesWrapper>
    </>
  )
}

export const BusinessProductsCategories = (props) => {
  const businessProductsCategoriesProps = {
    ...props,
    UIComponent: BusinessProductsCategoriesUI
  }

  return (
    <ProductsCategories {...businessProductsCategoriesProps} />
  )
}
