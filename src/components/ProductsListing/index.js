import React, { useEffect, useState } from 'react'
import { useOrder, useLanguage } from 'ordering-components'
import { CancelToken } from 'ordering-api-sdk'
import { isADateValid } from '../../utils'

export const ProductsListing = (props) => {
  console.log('Move ProductsListing to ordering-componenets')
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isInitialRender,
    ordering,
    businessProps,
    UIComponent
  } = props

  const [orderState] = useOrder()
  const [languageState, t] = useLanguage()

  const [categorySelected, setCategorySelected] = useState({ id: null, name: t('ALL', 'All') })
  const [searchValue, setSearchValue] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [orderOptions, setOrderOptions] = useState()
  const [requestsState, setRequestsState] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })

  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  const [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (category) => {
    if (category?.id === categorySelected?.id) return
    setCategorySelected(category)
  }

  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName) ||
      (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription)
  }

  const getProducts = async (newFetch) => {
    if (!businessState?.business?.lazy_load_products_recommended) {
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected.id) {
        const productsFiltered = businessState.business.categories?.find(
          category => category.id === categorySelected.id
        )?.products.filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      } else {
        const productsFiltered = businessState.business.categories?.reduce(
          (products, category) => [...products, ...category.products], []
        ).filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      }
      setCategoryState({ ...categoryState })
      return
    }

    const categoryKey = categorySelected.id ? `categoryId:${categorySelected.id}` : 'all'
    const categoryState = categoriesState[categoryKey] || categoryStateDefault

    const pagination = categoryState.pagination
    if (pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages) {
      setCategoryState({ ...categoryState, loading: false })
      return
    }

    setCategoryState({ ...categoryState, loading: true })

    const parameters = {
      type: orderState.options?.type || 1,
      page: newFetch ? 1 : pagination.currentPage + 1,
      page_size: pagination.pageSize
    }

    try {
      const functionFetch = categorySelected.id ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : ordering.businesses(businessState.business.id).products()
      const source = CancelToken.source()
      requestsState.products = source
      setRequestsState({ ...requestsState })
      const { content: { error, result, pagination } } = await functionFetch.parameters(parameters).get({ cancelToken: source.token })
      if (!error) {
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: [...categoryState.products, ...result]
        }
        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })
      } else {
        setErrors(result)
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setErrors([err.message])
      }
    }
  }

  const getProduct = async () => {
    if (categoryId && productId && businessState.business.id) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = CancelToken.source()
        requestsState.product = source
        const parameters = {
          type: orderState.options?.type || 1
        }

        const { content: { result } } = await ordering
          .businesses(businessState.business.id)
          .categories(categoryId)
          .products(productId)
          .parameters(parameters)
          .get({ cancelToken: source.token })
        const product = Array.isArray(result) ? null : result
        setProductModal({
          ...productModal,
          product,
          loading: false
        })
      } catch (e) {
        setProductModal({
          ...productModal,
          loading: false,
          error: [e]
        })
      }
    }
  }

  useEffect(() => {
    if (isInitialRender) {
      getProduct()
    }
  }, [JSON.stringify(businessState.business?.id)])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = CancelToken.source()
      requestsState.business = source
      setRequestsState({ ...requestsState })
      const parameters = {
        type: orderState.options?.type || 1,
        location: orderState.options?.address?.location
          ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
          : null
      }
      if (orderState.options?.moment && isADateValid(orderState.options?.moment)) {
        const parts = orderState.options?.moment.split(' ')
        const dateParts = parts[0].split('-')
        const timeParts = parts[1].split(':')
        const moment = Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]) / 1000
        parameters.timestamp = moment
      }
      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(parameters)
        .get({ cancelToken: source.token })
      setBusinessState({
        ...businessState,
        business: result,
        loading: false
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessState({
          ...businessState,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  useEffect(() => {
    if (!orderState.loading && !businessState.loading) {
      getProducts()
    }
  }, [orderState, categorySelected, businessState, searchValue])

  useEffect(() => {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness()
    }
  }, [orderOptions, languageState])

  useEffect(() => {
    if (!orderState.loading) {
      setOrderOptions({
        type: orderState?.options?.type,
        moment: orderState?.options?.moment,
        location: orderState?.options?.address?.location
      })
    }
  }, [JSON.stringify(orderState?.options)])

  /**
   * Cancel business request
   */
  useEffect(() => {
    const request = requestsState.business
    return () => {
      request && request.cancel()
    }
  }, [requestsState.business])

  /**
   * Cancel products request on unmount and pagination
   */
  useEffect(() => {
    const request = requestsState.products
    return () => {
      request && request.cancel()
    }
  }, [requestsState.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errors={errors}
          categorySelected={categorySelected}
          searchValue={searchValue}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          getNextProducts={getProducts}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
        />
      )}
    </>
  )
}
