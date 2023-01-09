import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories, useOrderingTheme } from 'ordering-components'
import { AutoScroll } from '../../../../../components/AutoScroll'
import { useTheme } from 'styled-components'

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
    categorySelected,
    useKioskApp,
    isProfessional
  } = props

  const theme = useTheme()
  const [orderingTheme] = useOrderingTheme()
  const [selectedCategory, setSelectedCateogry] = useState({ id: null })
  const scrollTopSpan = 60

  const isChew = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'

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
        top: topPos - scrollTopSpan,
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
          id={`category-menu${category?.id || '-all'}`}
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

  const handleScroll = () => {
    if (business?.lazy_load_products_recommended) return
    const featuredElement = document.getElementById('categoryfeatured')
    const _categories = featuredElement ? [...categories] : categories.filter(category => category.id !== 'featured')

    const windowTop = window.scrollY
    const categoryListsElement = document.getElementById('category-lists')
    const categoryAreaWidth = categoryListsElement?.clientWidth || 0
    const categoryScrollChange = categoryListsElement?.scrollLeft

    const _diff = -50
    const _moveDiff = 30
    const _paddDiff = scrollTopSpan + 10

    _categories?.length && _categories.some(category => {
      const topPos = category?.id ? document.getElementById(`category${category.id}`)?.offsetTop
        : document.getElementById('businessProductList')?.offsetTop
      const HeightOfEle = category?.id ? document.getElementById(`category${category.id}`)?.clientHeight : 0
      if ((windowTop > topPos - _paddDiff && windowTop < topPos + HeightOfEle - _paddDiff) &&
        category?.id) {
        const choosedCategory = document.getElementById(`category-menu${category?.id || '-all'}`)
        const choosedCategoryLeft = choosedCategory?.offsetLeft || 0

        if (choosedCategoryLeft - categoryAreaWidth - categoryScrollChange > _diff || categoryScrollChange - choosedCategoryLeft > 0) {
          const moveAmount = (choosedCategoryLeft < 100) ? 0 : choosedCategoryLeft - _moveDiff
          categoryListsElement.scrollTo({
            top: 0,
            left: moveAmount,
            behavior: 'smooth'
          })
        }
        setSelectedCateogry(category)
        return true
      }
    })

    const navbar = document.getElementById('category-lists')
    const search = document.getElementById('WrapperSearchAbsolute')
    const wrapperCategories = document.getElementById('wrapper-categories')
    const limit = window.pageYOffset >= wrapperCategories?.offsetTop && window.pageYOffset > 0

    if (limit) {
      const classAdded = navbar.classList.contains('sticky-prod-cat')
      if (!classAdded) {
        navbar && navbar.classList.add('sticky-prod-cat')
        search && search.classList.add('sticky-search')
      }
    } else {
      navbar && navbar.classList.remove('sticky-prod-cat')
      search && search.classList.remove('sticky-search')
    }
  }

  useEffect(() => {
    if (typeof useKioskApp === 'undefined') return
    const styleSheet = document.getElementById('styles').sheet

    const disabledCustomWidth = isChew

    let style0 = '.sticky-prod-cat {'
    style0 += 'position: fixed !important;'
    style0 += 'top: 0px !important;'
    style0 += 'left: 0px !important;'
    style0 += 'padding: 5px 5px 0px 5px !important;'
    !disabledCustomWidth && (style0 += `width: calc(100% - ${useKioskApp ? '50px' : '155px'}) !important;`)
    style0 += '}'

    let style1 = '.sticky-search {'
    style1 += 'position: fixed !important;'
    style1 += 'top: 0px !important;'
    style1 += 'right: 0% !important;'
    style1 += 'z-index: 9999 !important;'
    style1 += 'width: 50px !important;'
    style1 += `background-color: ${theme.colors.backgroundPage} !important;`
    style1 += '}'

    styleSheet.insertRule(style0, 0)
    styleSheet.insertRule(style1, 1)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [useKioskApp, isChew])

  useEffect(() => {
    if (business?.professionals?.length > 0 && !useKioskApp) {
      const element = document.getElementById('category-lists')
      element.setAttribute('style', 'width: 100% !important')
    }
  }, [business?.professionals, useKioskApp])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CategoriesContainer id='category-lists' className='category-lists' featured={featured} w={props.wContainerStyle} isProfessional={isProfessional}>
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
