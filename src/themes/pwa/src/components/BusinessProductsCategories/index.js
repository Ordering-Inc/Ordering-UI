import React, { useState, useEffect } from 'react'
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
    if (business?.lazy_load_products_recommended) {
      handlerClickCategory({ ...category })
      return
    }
    let topPos = 0
    if (!category?.id) topPos = document.getElementById('businessProductList').offsetTop
    else topPos = document.getElementById(`category${category.id}`).offsetTop
    window.scroll({
      top: topPos - 60,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (business?.lazy_load_products_recommended) return
      const featuredElement = document.getElementById('categoryfeatured')
      const _categories = featuredElement ? [...categories] : categories.filter(category => category.id !== 'featured')
      _categories?.length && _categories.forEach(category => {
        const windowTop = window.scrollY
        let topPos = 0
        if (!category?.id) topPos = document.getElementById('businessProductList').offsetTop
        else topPos = document.getElementById(`category${category.id}`).offsetTop

        if (windowTop >= (topPos - 60)) {
          setSelectedCateogry(category)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CategoriesContainer className='category-lists' featured={featured}>
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
