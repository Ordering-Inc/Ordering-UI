import React from 'react'
import Skeleton from 'react-loading-skeleton'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../AutoScroll'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  CategoriesContainer,
  Tabs,
  Tab
} from './styles'
const BusinessProductsCategoriesUI = (props) => {
  const {
    featured,
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    openBusinessInformation
  } = props

  const windowSize = useWindowSize()

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <Tab
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          onClick={() => handlerClickCategory(category)}
        >
          {category.name}
          {windowSize.width >= 768 && (
            <EnChevronRight />
          )}
        </Tab>
      ))
    )
  }

  return (
    <>
      <CategoriesContainer featured={featured}>
        {!isSkeleton ? (
          <>
            {windowSize.width < 768 ? (
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
              <ProductCategories />
            )}
          </>
        ) : (
          <>
            {windowSize.width < 768 ? (
              <Tabs variant='primary'>
                {[...Array(4).keys()].map(i => (
                  <Tab key={i}>
                    <Skeleton width={100} />
                  </Tab>
                ))}
              </Tabs>
            ) : (
              <>
                {[...Array(4).keys()].map(i => (
                  <Tab key={i}>
                    <Skeleton width={150} height={25} />
                  </Tab>
                ))}
              </>
            )}
          </>
        )}
      </CategoriesContainer>
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
