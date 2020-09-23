import React, { useEffect, useState } from 'react'
import { useOrder, useLanguage } from 'ordering-components'

export const ProductsListing = (props) => {
  const {
    slug,
    ordering,
    businessProps,
    businessParams,
    UIComponent
  } = props

  const [orderState] = useOrder()
  const [, t] = useLanguage()

  const [categorySelected, setCategorySelected] = useState({ id: null, name: t('ALL', 'All') })
  const [businessState, setBusinessState] = useState({ business: {}, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})

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

  const getProducts = async (newFetch) => {
    if (!businessState.business.lazy_load_products_recommended) {
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected.id) {
        categoryState.products = businessState.business.categories?.find(category => category.id === categorySelected.id)?.products || []
      } else {
        categoryState.products = businessState.business.categories?.reduce((products, category) => [...products, ...category.products], []) || []
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
      const { content: { error, result, pagination } } = await functionFetch.parameters(parameters).get()
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
    } catch (e) {
      console.log(e)
      setErrors([e.message])
    }
  }

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(businessParams)
        .get()
      setBusinessState({
        ...businessState,
        business: result,
        loading: false
      })
    } catch (e) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [e]
      })
    }
  }

  useEffect(() => {
    if (orderState.loading || businessState.loading) return
    getProducts()
  }, [orderState, categorySelected, businessState])

  useEffect(() => {
    if (!orderState.loading) {
      getBusiness()
    }
  }, [orderState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categorySelected={categorySelected}
          categoryState={categoryState}
          business={businessState}
          handleChangeCategory={handleChangeCategory}
          getNextProducts={getProducts}
        />
      )}
    </>
  )
}
