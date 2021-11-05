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
    openBusinessInformation
  } = props

  const [categorySelected, setCategorySelected] = useState({ id: null })

  const handlerClickCategory = (category) => {
    setCategorySelected(category)
    let topPos = 0
    if (!category?.id) topPos = document.getElementById('businessProductList').offsetTop
    else topPos = document.getElementById(`category${category.id}`).offsetTop
    window.scrollTo({
      top: topPos - 60,
      left: 100,
      behavior: 'smooth'
    })
  }

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <Tab
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          onClick={() => handlerClickCategory(category)}
          borderBottom
        >
          {category.name}
        </Tab>
      ))
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      categories && categories.length && categories.forEach(category => {
        const windowTop = window.scrollY
        let topPos = 0
        if (!category?.id) topPos = document.getElementById('businessProductList').offsetTop
        else topPos = document.getElementById(`category${category.id}`).offsetTop
        if (windowTop >= (topPos - 60)) {
          setCategorySelected(category)
          return
        }
      })
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
