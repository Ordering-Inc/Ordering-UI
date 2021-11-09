import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { CategoriesContainer } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    isVerticalList
  } = props

  const windowSize = useWindowSize()
  const handleChnageCategory = (category) => {
    if (windowSize.width > 768) {
      window.scrollTo({ top: 335, behavior: 'smooth' })
    }
    handlerClickCategory(category)
  }

  const ProductCategories = () => {
    return (
      <>
        {
          categories && categories.length && categories.map(category => (
            <Tab
              key={category.name}
              className={`category ${category.id === 'featured' ? 'special' : ''}`}
              active={categorySelected?.id === category.id}
              onClick={() => handleChnageCategory(category)}
              isVerticalList={isVerticalList}
              style={{ textTransform: 'uppercase' }}
            >
              <span>{category.name}</span>
              {categorySelected?.id === category.id && (
                <svg width={12} height={40} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <defs>
                    <path d='m0,490l240,0l10,20.12l-10,19.88l-240,0l0,-40z' id='a' />
                    <clipPath id='b'>
                      <use id='svg_1' x='2.857142' y='-442.65308' xlinkHref='#a' fill='#fff' />
                    </clipPath>
                  </defs>
                  <g>
                    <title>background</title>
                    <rect fill='none' id='canvas_background' height={42} width={12} y={-1} x={-1} />
                  </g>
                  <g>
                    <title>Layer 1</title>
                    <g stroke='null' id='svg_2'>
                      <use stroke='#DD0031' id='svg_3' x='-239.999995' y='-490.000015' xlinkHref='#a' fill='#fff' />
                    </g>
                  </g>
                </svg>
              )}
            </Tab>
          ))
        }
        <Tab style={{ borderBottom: 'none' }}>
          <span>{' '}</span>
        </Tab>
      </>

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
      <CategoriesContainer featured={featured} isVerticalList={isVerticalList}>
        {!isSkeleton ? (
          <Tabs variant='primary' isVerticalList={isVerticalList}>
            <ProductCategories />
          </Tabs>
        ) : (
          <Tabs variant='primary' isVerticalList={isVerticalList}>
            {[...Array(4).keys()].map(i => (
              <Tab key={i}>
                <Skeleton width={150} />
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
