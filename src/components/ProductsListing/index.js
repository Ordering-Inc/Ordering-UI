import React, { useEffect, useState, useCallback } from 'react'
import { useOrder } from 'ordering-components'

export const ProductsListing = (props) => {
  const {
    slug,
    ordering,
    businessProps,
    businessParams,
    UIComponent
  } = props

  const [orderState] = useOrder()

  const [categorySelected, setCategorySelecategorySelected] = useState(null)
  const [business, setBusiness] = useState({ business: {}, categories: [], loading: true, error: null })

  const [isProductsLimit, setIsProductsLimit] = useState(null)

  const [categoriesToShow, setCategoriesToShow] = useState({ loading: true, error: null, data: {}, productsToShow: {} })

  const [paginationProps, setPaginationProps] = useState({ currentPage: 0, pageSize: 10, totalItems: null, totalPages: 0 })

  const getProductsFromCategories = () => {
    let categoryToSave = {}
    return business?.business?.categories?.forEach(category => {
      categoryToSave = {
        ...categoryToSave,
        [`categoryId:${category.id}`]: {
          categoryId: category.id,
          products: category.products
        }
      }
      setCategoriesToShow({
        ...categoriesToShow,
        data: categoryToSave,
        productsToShow: categoryToSave
      })
    })
  }

  const productsFormatted = (products = [], pagination = {}) => {
    const categoryToSave = {}
    products.forEach(product => {
      if (categoryToSave[`categoryId:${product.category_id}`]) {
        categoryToSave[`categoryId:${product.category_id}`].products.push(product)
      } else {
        categoryToSave[`categoryId:${product.category_id}`] = {
          categoryId: product.category_id,
          products: [product],
          pagination
        }
      }
    })
    return categoryToSave
  }

  const getProducts = async (newFetch) => {
    const parameters = {
      ...businessParams,
      page: newFetch ? 1 : paginationProps.currentPage + 1,
      page_size: paginationProps.pageSize
    }
    let _result = []
    let _pagination = []

    try {
      if (!categoriesToShow.data[`categoryId:${categorySelected}`] && categorySelected) {
        const { content: { result, pagination } } = await ordering
          .businesses(business.business?.id)
          .categories(categorySelected)
          .products()
          .parameters(parameters)
          .get()
        _result = result
        _pagination = pagination
      }
      if (isProductsLimit && !categorySelected) {
        const { content: { result, pagination } } = await ordering
          .businesses(business.business?.id)
          .products()
          .parameters(parameters)
          .get()
        _result = result
        _pagination = pagination
      }
      categoriesToShow.loading = false
    } catch (e) {
      setCategoriesToShow({
        ...categoriesToShow,
        loading: false,
        error: [e]
      })
    }
    // setCategoriesToShow({
    //   ...categoriesToShow,
    //   productsToShow: productsFormatted(_result, _pagination)
    // })

    console.log(_result)

    const products = categorySelected
      ? { [`categoryId:${categorySelected}`]: categoriesToShow.data[`categoryId:${categorySelected}`] }
      : isProductsLimit ? productsFormatted(_result) : categoriesToShow.data

    setCategoriesToShow({
      ...categoriesToShow,
      data: products,
      productsToShow: products
    })
  }

  // const [productsList, setProductsList] = useState({ products: [], loading: false, error: false })

  // const productsRecommended = business.business.lazy_load_products_recommended

  // const isMatchCategory = (categoryId) => {
  //   if (!categorySelected) return true
  //   return Number(categoryId) === Number(categorySelected)
  // }

  // const getProductsFromCategories = (categories) => {
  //   const products = []
  //   categories.map(category => products.push(category.products))
  //   return products
  // }

  // const getProducts = async (newFetch) => {
  //   console.log(newFetch, categorySelected)
  //   const businessId = business.business?.id
  //   try {
  //     setProductsList({
  //       ...productsList,
  //       loading: true
  //     })
  //     const parameters = {
  //       ...businessParams,
  //       page: newFetch ? 1 : paginationProps.currentPage + 1,
  //       page_size: paginationProps.pageSize
  //     }
  //     let resultApi = []
  //     let paginationApi = {}

  //     if (categorySelected) {
  //       const { content: { result, pagination } } = await ordering
  //         .businesses(businessId)
  //         .categories(categorySelected)
  //         .products()
  //         .parameters(parameters)
  //         .get()
  //       resultApi = result
  //       paginationApi = pagination
  //     }
  //     if (productsRecommended && !categorySelected) {
  //       const { content: { result, pagination } } = await ordering
  //         .businesses(businessId)
  //         .products()
  //         .parameters(parameters)
  //         .get()
  //       resultApi = result
  //       paginationApi = pagination
  //     }
  //     if (!productsRecommended && !categorySelected) {
  //       const products = [].concat(...getProductsFromCategories(business.business.categories))
  //       console.log('products', products)
  //       setProductsList({
  //         ...productsList,
  //         products,
  //         loading: false
  //       })
  //       return
  //     }
  //     const productsFiltered = categorySelected
  //       ? resultApi?.filter(product => isMatchCategory(product.category_id))
  //       : resultApi

  //     productsList.products = newFetch
  //       ? productsFiltered
  //       : [...productsList.products, ...productsFiltered]

  //     setProductsList({
  //       ...productsList,
  //       loading: false
  //     })
  //     let nextPageItems = 0
  //     if (paginationApi.current_page !== paginationApi.total_pages) {
  //       const remainingItems = paginationApi.total - productsList.products.length
  //       nextPageItems = remainingItems < paginationApi.page_size ? remainingItems : paginationApi.page_size
  //     }
  //     setPaginationProps({
  //       ...paginationProps,
  //       currentPage: paginationApi.current_page,
  //       totalPages: paginationApi.total_pages,
  //       nextPageItems
  //     })
  //   } catch (error) {
  //     setProductsList({
  //       ...productsList,
  //       loading: false,
  //       error
  //     })
  //   }
  // }

  const getBusiness = async () => {
    try {
      setBusiness({
        ...business,
        loading: true
      })
      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(businessParams)
        .get()
      const categories = [
        { id: null, name: 'All' },
        ...result.categories
      ]
      setIsProductsLimit(result.lazy_load_products_recommended)
      setBusiness({
        ...business,
        business: result,
        categories,
        loading: false
      })
    } catch (e) {
      setBusiness({
        ...business,
        loading: false,
        error: [e]
      })
      categoriesToShow.loading = false
      categoriesToShow.error = [e]
    }
  }

  // const handleScroll = useCallback(() => {
  //   const badScrollPosition = window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight
  //   const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
  //   if (badScrollPosition || productsList.loading || !hasMore) return
  //   getProducts()
  // }, [productsList, paginationProps])

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [handleScroll])

  useEffect(() => {
    if (orderState.loading || !orderState.options?.address?.location) return
    getProducts(true)
  }, [orderState, categorySelected])

  useEffect(() => {
    if (!isProductsLimit) {
      getProductsFromCategories()
    }
  }, [business])

  useEffect(() => {
    getBusiness()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isAllCategory={!!categorySelected}
          categorySelected={categorySelected}
          business={business}
          categoriesToShow={categoriesToShow}
          // productsList={productsList}
          // paginationProducts={paginationProps}
          handlerClickCategory={(val) => setCategorySelecategorySelected(val)}
        />
      )}
    </>
  )
}
