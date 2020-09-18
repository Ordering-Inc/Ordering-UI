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

  const [categoryValue, setCategoryValue] = useState(null)
  const [business, setBusiness] = useState({ business: {}, categories: [], loading: true, error: null })
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })
  const [paginationProps, setPaginationProps] = useState({ currentPage: 0, pageSize: 10, totalItems: null, totalPages: 0, isPagination: false })

  const [orderState] = useOrder()

  const isMatchCategory = (categoryId) => {
    if (!categoryValue) return true
    return Number(categoryId) === Number(categoryValue)
  }

  const getProducts = async (newFetch) => {
    const businessId = business.business?.id
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const parameters = {
        ...businessParams
        // page: newFetch ? 1 : paginationProps.currentPage + 1,
        // page_size: paginationProps.pageSize
      }
      const { content: { result, pagination } } = categoryValue
        ? await ordering
          .businesses(businessId)
          .categories(categoryValue)
          .products()
          .parameters(parameters)
          .get()
        : await ordering
          .businesses(businessId)
          .products()
          .parameters(parameters)
          .get()

      const productsFiltered = categoryValue
        ? result.filter(product => isMatchCategory(product.category_id))
        : result

      productsList.products = newFetch
        ? productsFiltered
        : [...productsList.products, ...productsFiltered]

      setProductsList({
        ...productsList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination && pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - productsList.products.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        nextPageItems,
        isPagination: !!pagination
      })
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  const getBusiness = async () => {
    try {
      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(businessParams)
        .get()
      const categories = [
        { id: null, name: 'All' },
        ...result.categories
      ]
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
    }
  }

  const handleScroll = useCallback(() => {
    const badScrollPosition = window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight
    const hasMore = !paginationProps.isPagination && !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || productsList.loading || !hasMore) return
    getProducts()
  }, [productsList, paginationProps])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (orderState.loading || !orderState.options?.address?.location) return
    getProducts(true)
  }, [orderState, categoryValue])

  useEffect(() => {
    if (business.business?.id) {
      getProducts()
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
          isAllCategory={!!categoryValue}
          categorySelected={categoryValue}
          business={business}
          productsList={productsList}
          paginationProducts={paginationProps}
          handlerClickCategory={(val) => setCategoryValue(val)}
          // handlerChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}
