import React, { useState, useRef, useEffect } from 'react'
import {
  useUtils,
  useApi,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { Checkbox } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import {
  Container,
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  WrapperImage,
  Image,
  SkeletonWrapper
} from './styles'

const CategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedProductsIds,
    setSelectedProductsIds,
    include,
    subCategoriesList
  } = props

  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  const content = useRef(null)
  const checkboxRef = useRef(null)
  const categoryRef = useRef(null)

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const toggleAccordion = (e) => {
    const isActionsClick = categoryRef.current?.contains(e.target) || checkboxRef.current?.contains(e.target)
    if (isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const isCheckedCategory = () => {
    if (category?.products) {
      const productsIds = category.products?.filter(product => product?.enabled).reduce((ids, product) => [...ids, product.id], [])
      return productsIds.every(id => !!selectedProductsIds[id] && selectedProductsIds[id].include === include)
    } else {
      return false
    }
  }

  const handleClickProduct = (product, include) => {
    if (!!selectedProductsIds[product.id] && selectedProductsIds[product.id].include === include) {
      const _selectedProductsIds = { ...selectedProductsIds }
      delete _selectedProductsIds[product.id]
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      setSelectedProductsIds({ ...selectedProductsIds, [product.id]: { id: product.id, include: include } })
    }
  }

  const handleChangeSelectCategory = (include) => {
    const productsIds = category.products?.filter(product => product?.enabled).reduce((ids, product) => [...ids, product.id], [])
    const everyContain = productsIds.every(id => !!selectedProductsIds[id] && selectedProductsIds[id].include === include)
    let _selectedProductsIds = {}
    _selectedProductsIds = {
      ...selectedProductsIds
    }
    if (!everyContain) {
      productsIds.forEach(id => {
        _selectedProductsIds[id] = { id: id, include }
      })
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      const _keys = Object.keys(selectedProductsIds)?.reduce((ids, id) => {
        ids.push(parseInt(id))
        return ids
      }, [])
      const _keysFiltered = _keys.filter(id => productsIds.includes(id))
      _keysFiltered.forEach(id => delete _selectedProductsIds[id])
      setSelectedProductsIds(_selectedProductsIds)
    }
  }

  return (
    <>
      {subCategoriesList.find(_category => _category.id === category.id)?.productIds?.length > 0 && (
        <AccordionSection>
          <Accordion
            onClick={(e) => toggleAccordion(e, category.id)}
          >
            <AccordionItem
              margin={20 * index}
            >
              <GoTriangleDown className={setRotate} />
              <div>
                <Checkbox
                  ref={categoryRef}
                  checked={isCheckedCategory()}
                  onChange={() => handleChangeSelectCategory(include)}
                />
                <span>{category.name}</span>
              </div>
            </AccordionItem>
          </Accordion>
          <AccordionContent
            ref={content}
            style={{
              maxHeight: !setActive && '0px'
            }}
          >
            {category?.products.filter(product => product?.enabled).map(product => (
              <AccordionItem
                key={product.id}
                margin={20 * (index + 1)}
                isProduct
              >
                <div>
                  <Checkbox
                    ref={checkboxRef}
                    checked={!!selectedProductsIds[product.id] && selectedProductsIds[product.id].include === include}
                    onChange={() => handleClickProduct(product, include)}
                  />
                  <WrapperImage>
                    <Image bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_50,c_limit')} />
                  </WrapperImage>
                  <span>{product.name}</span>
                </div>
              </AccordionItem>
            ))}
            {(category?.subcategories && category?.subcategories?.length > 0) && (
              category.subcategories.map(subCategory => (
                <CategoryTreeNode
                  {...props}
                  key={subCategory.id}
                  category={subCategory}
                  index={index + 1}
                />
              ))
            )}
          </AccordionContent>
        </AccordionSection>
      )}
    </>
  )
}

const SelectBusinessProductsUI = (props) => {
  const {
    businessState,
    selectedProductsIds,
    setSelectedProductsIds,
    include
  } = props

  const [subCategoriesList, setSubCategoriesList] = useState([])

  useEffect(() => {
    if (businessState.loading) return
    const _subCategoriesList = []
    const iterateCategories = (categories) => {
      return (
        categories?.length > 0 && categories?.forEach(category => {
          let productIds = []
          const _productIds = category.products?.reduce((ids, product) => [...ids, product.id], [])
          productIds = [...productIds, ..._productIds]
          if (category?.subcategories?.length) {
            category.subcategories.forEach(function iterate (category) {
              const _productIds = category.products?.reduce((ids, product) => [...ids, product.id], [])
              productIds = [...productIds, ..._productIds]
              Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
            })
          }

          _subCategoriesList.push({
            id: category.id,
            name: category.name,
            productIds: productIds
          })
          iterateCategories(category.subcategories)
        })
      )
    }
    iterateCategories(businessState.business?.categories)
    setSubCategoriesList(_subCategoriesList)
  }, [businessState.business?.categories])

  return (
    <Container>
      {businessState?.loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <SkeletonWrapper key={i}>
              <Skeleton width={16} height={16} />
              <Skeleton width={16} height={16} />
              <Skeleton width={120} height={20} />
            </SkeletonWrapper>
          ))}
        </>
      ) : (
        businessState.business?.categories?.filter(category => category?.enabled).sort((a, b) => a.rank - b.rank).map(category => (
          <CategoryTreeNode
            subCategoriesList={subCategoriesList}
            key={category.id}
            index={0}
            category={category}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            include={include}
          />
        ))
      )}
    </Container>
  )
}

export const SelectBusinessProducts = (props) => {
  const [ordering] = useApi()
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    ordering,
    UIComponent: SelectBusinessProductsUI,
    isInitialRender,
    isAllCategoryProducts: true,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessProductsListingController {...businessProductslistingProps} />
  )
}
