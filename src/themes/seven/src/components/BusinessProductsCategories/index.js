import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import {
  CategoriesContainer,
  Accordion,
  AccordionPanel
} from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    isVerticalList
  } = props

  const updatedCategories = []

  if (categories.length > 0) {
    categories.forEach((item, i) => {
      if (item.name.indexOf('/') > -1) {
        const categoryName = item.name.split('/')[0]
        const name = item.name.split('/')[1]
        const existIndex = updatedCategories.findIndex((c) => c.categoryName === categoryName)
        if (existIndex > -1) {
          updatedCategories[existIndex].data.push({ ...item, name })
        } else {
          updatedCategories.push({
            _id: i,
            categoryName: categoryName,
            data: [{ ...item, name }],
            subCategory: true,
            listOpen: false
          })
        }
      } else {
        updatedCategories.push({
          _id: i,
          categoryName: item.name,
          data: [item],
          subCategory: false
        })
      }
    })
  }

  const CategoryAccordion = (props) => {
    const category = props.category

    const handleChnageCategory = (category) => {
      handlerClickCategory(category?.data[0])
    }

    return (
      <>
        <Accordion className='accordion' onClick={(e) => handleChnageCategory(category)}>
          {category?.categoryName}
        </Accordion>
        {category?.subCategory && (
          <AccordionPanel className='accordion-content'>
            <ul>
              {category?.data.map(item => {
                return (
                  <li key={item?.id} className={categorySelected?.id === item.id ? 'active' : ''} onClick={() => handlerClickCategory(item)}>{item.name}</li>
                )
              })}
            </ul>
          </AccordionPanel>
        )}
        {categorySelected && <ActiveMarker />}
      </>
    )
  }

  const ProductCategories = () => {
    const getActive = (category) => {
      let _className = ''
      if (categorySelected) {
        const existIndex = category.data.findIndex((c) => c.id === categorySelected.id)
        if (existIndex > -1) {
          _className = 'active'
        }
      }
      return _className
    }

    return (
      <>
        {
          categories && updatedCategories.length > 0 && updatedCategories.map((category, i) => (
            <Tab
              key={category?.categoryName}
              className={`category ${getActive(category)} ${category?.data[0]?.id === 'featured' ? 'special' : ''}`}
              isVerticalList={isVerticalList}
            >
              <CategoryAccordion category={category} />
            </Tab>
          ))
        }
        <Tab className='category' style={{ borderBottom: 'none' }} />
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
          <Tabs isVerticalList={isVerticalList}>
            <ProductCategories />
          </Tabs>
        ) : (
          <Tabs variant='primary' isVerticalList={isVerticalList}>
            {[...Array(7).keys()].map(i => (
              <Tab key={i} isVerticalList={isVerticalList}>
                <Skeleton width={150} style={{ padding: '5px', marginBottom: '7px' }} />
              </Tab>
            ))}
            <Tab className='category' style={{ borderBottom: 'none' }} />
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

export const ActiveMarker = () => {
  return (
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
  )
}
