import React, { useEffect, useState } from 'react'

export const ProductsListing = (props) => {
  const {
    // isSearchByName,
    // isSearchByDescription,
    slug,
    ordering,
    businessProps,
    businessParams,
    UIComponent
  } = props

  /**
   * when search is used
   */
  // const [searchValue, setSearchValue] = useState(null)
  // const isMatchSearch = (name, description) => {
  //   if (!searchValue) return true
  //   return (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName) ||
  //     (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription)
  // }
  // const productsFiltered = searchValue || categoryValue
  //   ? result.filter(product => isMatchSearch(product.name, product.description) && isMatchCategory(product.category_id))
  //   : result
  // useEffect(() => {
  //   getProducts()
  // }, [searchValue, categoryValue])

  const [categoryValue, setCategoryValue] = useState(null)
  const [business, setBusiness] = useState({ business: {}, categories: [], loading: true, error: null })
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })

  const isMatchCategory = (categoryId) => {
    if (!categoryValue) return true
    return Number(categoryId) === Number(categoryValue)
  }

  const getProducts = async () => {
    const businessId = business.business?.id
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const { content: { result } } = categoryValue
        ? await ordering
          .businesses(businessId)
          .categories(categoryValue)
          .products()
          .parameters(businessParams)
          .get()
        : await ordering
          .businesses(businessId)
          .products()
          .parameters(businessParams)
          .get()

      const productsFiltered = categoryValue
        ? result.filter(product => isMatchCategory(product.category_id))
        : result

      setProductsList({
        ...productsList,
        loading: false,
        products: productsFiltered
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

  useEffect(() => {
    if (business.business?.id) {
      getProducts()
    }
  }, [categoryValue, business])

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
          handlerClickCategory={(val) => setCategoryValue(val)}
          // handlerChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}
