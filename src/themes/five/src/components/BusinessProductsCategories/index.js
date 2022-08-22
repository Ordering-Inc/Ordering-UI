import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../../../../../components/AutoScroll'

import { CategoriesContainer } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    featured,
    openBusinessInformation,
    business,
    handlerClickCategory,
    categorySelected
  } = props

  const [selectedCategory, setSelectedCateogry] = useState({ id: null })

  const handleChangeCategory = (category) => {
    const isBlockScroll = window.location.search.includes('category') &&
      window.location.search.includes('product')

    if (business?.lazy_load_products_recommended) {
      handlerClickCategory({ ...category })
      return
    }
    let topPos = 0
    if (!category?.id) topPos = document.getElementById('businessProductList')?.offsetTop
    else topPos = document.getElementById(`category${category.id}`)?.offsetTop
    if (!isBlockScroll) {
      window.scroll({
        top: topPos - 60,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map((category, i) => (
        <Tab
          key={i}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={business?.lazy_load_products_recommended ? (categorySelected?.id === category.id) : (selectedCategory?.id === category.id)}
          onClick={() => handleChangeCategory(category)}
          borderBottom
        >
          {category.name}
        </Tab>
      ))
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      if (business?.lazy_load_products_recommended) return
      const featuredElement = document.getElementById('categoryfeatured')
      const _categories = featuredElement ? [...categories] : categories.filter(category => category.id !== 'featured')
      _categories?.length && _categories.forEach(category => {
        const windowTop = window.scrollY
        let topPos = 0
        if (!category?.id) topPos = document.getElementById('businessProductList')?.offsetTop
        else topPos = document.getElementById(`category${category.id}`)?.offsetTop

        if (windowTop >= (topPos - 60)) {
          setSelectedCateogry(category)
        }
      })

      const navbar = document.getElementById('category-lists')
      const cart = document.getElementById('BusinessCartContainer')
      const search = document.getElementById('WrapperSearchAbsolute')
      const wrapperCategories = document.getElementById('wrapper-categories')

      const styleSheet = document.getElementById('styles').sheet

      let style0 = '.sticky-prod-cat {'
      style0 += 'position: fixed !important;'
      style0 += 'top: 0 !important;'
      style0 += 'width: 97% !important;'
      style0 += 'padding: 15px 5px 0px 0px;'
      style0 += '}'

      let style1 = '.sticky-prod-cart {'
      style1 += 'position: fixed !important;'
      style1 += 'top: 0 !important;'
      style1 += 'right: 2.5% !important;'
      style1 += 'width: 28.5% !important;'
      style1 += '}'

      let style2 = '.sticky-search {'
      style2 += 'position: fixed !important;'
      style2 += 'top: 10px !important;'
      style2 += 'right: 32% !important;'
      style2 += 'height: 50px !important;'
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
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CategoriesContainer id='category-lists' className='category-lists' featured={featured} w={props.wContainerStyle}>
        {!isSkeleton ? (
          <Tabs variant='primary'>
            {openBusinessInformation ? (
              <>
                <ProductCategories />
              </>
            ) : (
              <AutoScroll>
                <ProductCategories />
              </AutoScroll>
            )}
          </Tabs>
        ) : (
          <Tabs variant='primary'>
            {[...Array(4).keys()].map(i => (
              <Tab key={i}>
                <Skeleton width={100} />
              </Tab>
            ))}
          </Tabs>
        )}
      </CategoriesContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
