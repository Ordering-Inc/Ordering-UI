import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../../../AutoScroll/theme/two'
import { Conatiner, CategoriesContainer } from './styles'
import { Tabs, Tab } from '../../../../styles/Tabs/theme/two'
import { CategoryMenuPopover } from '../../../CategoryMenuPopover/theme/two'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    openBusinessInformation,
    allTime
  } = props

  const [openPopover, setOpenPopover] = useState({})

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }
  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <Tab
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          borderBottom
          onClick={() => handlerClickCategory(category)}
        >
          {category.name}
        </Tab>
      ))
    )
  }

  return (
    <Conatiner>
      {!isSkeleton && (
        <CategoryMenuPopover
          open={openPopover.menulist}
          onClick={() => handleTogglePopover('menulist')}
          onClose={() => handleClosePopover('menulist')}
          categories={categories}
          categorySelected={categorySelected}
          allTime={allTime}
          handlerClickCategory={handlerClickCategory}
        />
      )}
      <CategoriesContainer featured={featured}>
        {!isSkeleton ? (
          <Tabs variant='primary'>
            {openBusinessInformation ? (
              <>
                <ProductCategories />
              </>
            ) : (
              <AutoScroll innerScroll>
                <ProductCategories />
              </AutoScroll>
            )}
          </Tabs>
        ) : (
          <>
            <Tabs variant='primary'>
              {[...Array(4).keys()].map(i => (
                <Tab key={i}>
                  <Skeleton width={100} />
                </Tab>
              ))}
            </Tabs>
          </>
        )}
      </CategoriesContainer>
    </Conatiner>
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
