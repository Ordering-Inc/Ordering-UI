import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AccordionDropdown } from '../../../AccordionDropdown'

import {
  CategoriesContainer,
  CategoriesWrap,
  CategoryTab
} from './styles'

const SPACE_CONTANT = 20

const categorySpace = {
  1: 0,
  2: 2 * SPACE_CONTANT,
  3: 3 * SPACE_CONTANT,
  4: 4 * SPACE_CONTANT,
  5: 5 * SPACE_CONTANT,
}

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    openCategories,
  } = props

  const IterateCategories = ({ list, isSub, currentCat }) => {
    return (
      <>
        {list?.length && list?.map(category => (
          <div key={category?.id ?? category?.name}>
            {(category?.subcategories?.length > 0 || isSub) ? (
              <>
                {category?.subcategories?.length > 0 && (
                  <>
                    <div className="accordion">
                      <AccordionDropdown
                        item={category}
                        isSelected={categorySelected?.id === category.id}
                        isOpen={openCategories?.includes(category.id)}
                        spaceTab={categorySpace[category?.level ?? 1]}
                        handleClickItem={() => handlerClickCategory(category)}
                        IterateCategories={IterateCategories}
                      />
                    </div>
                  </>
                )}
                {isSub && !category?.subcategories?.length && (
                  <CategoryTab
                    active={categorySelected?.id === category.id}
                    className={`${category.id === 'featured' ? 'special' : ''}`}
                    categorySpace={categorySpace[category?.level ?? 1]}
                    onClick={() => handlerClickCategory(category)}
                  >
                    <span>
                      {category.name}
                    </span>
                  </CategoryTab>
                )}
              </>
            ) : (
              <CategoryTab
                active={categorySelected?.id === category.id}
                className={`${category.id === 'featured' ? 'special' : ''}`}
                categorySpace={categorySpace[category?.level ?? 1]}
                onClick={() => handlerClickCategory(category)}
              >
                <span>
                  {category.name}
                </span>
              </CategoryTab>
            )}
          </div>
        ))}

        {list && list?.length === 0 && isSub && (
          <CategoryTab
            active={categorySelected?.id === category.id}
            className={`${category.id === 'featured' ? 'special' : ''}`}
            categorySpace={categorySpace[category?.level ?? 1]}
            onClick={() => handlerClickCategory(category)}
          >
            <span>
              {currentCat.name}
            </span>
          </CategoryTab>
        )}
      </>
    )
  }

  return (
    <CategoriesContainer className='category-lists' featured={featured}>
      {!isSkeleton ? (
        <CategoriesWrap variant='primary'>
          {categories?.length && <IterateCategories list={categories} />}
        </CategoriesWrap>
      ) : (
        <CategoriesWrap variant='primary'>
          {[...Array(4).keys()].map(i => (
            <div key={i}>
              <Skeleton width={100} />
            </div>
          ))}
        </CategoriesWrap>
      )}
    </CategoriesContainer>
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
