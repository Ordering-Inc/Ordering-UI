import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
// import { useOrder } from '../../contexts/OrderContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useConfig } from '../../contexts/ConfigContext'
import { useOrder, useLanguage, useConfig } from 'ordering-components'
dayjs.extend(utc)

export const BusinessAndProductList = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isInitialRender,
    ordering,
    businessProps,
    menusProps,
    isGetMenus,
    UIComponent,
    location
  } = props

  const [orderState, { removeProduct }] = useOrder()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ configs }] = useConfig()
  const [languageState, t] = useLanguage()

  const [categorySelected, setCategorySelected] = useState({ id: null, name: t('ALL', 'All') })
  const [searchValue, setSearchValue] = useState(null)
  const [sortByValue, setSortByValue] = useState(null)
  const [filterByMenus, setFilterByMenus] = useState(null)
  const [professionalSelected, setProfessionalSelected] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, menus: null, loading: !props.avoidBusinessLoading, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [orderOptions, setOrderOptions] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })
  const [featuredProducts, setFeaturedProducts] = useState(false)
  const [openCategories, setOpenCategories] = useState({ values: [] })
  const requestsState = {}

  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  let [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)
  const [errorQuantityProducts, setErrorQuantityProducts] = useState(false)

  const categoryKey = searchValue
    ? 'search'
    : categorySelected.id === 'featured'
      ? 'featured'
      : categorySelected.id
        ? `categoryId:${categorySelected.id}`
        : 'all'

  const isUseParentCategory = configs?.use_parent_category?.value === 'true' ||
    configs?.use_parent_category?.value === '1'

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (category) => {
    if (category?.subcategories?.length) {
      if (!category?.parent_category_id) {
        openCategories.values = []
      }
      if (openCategories.values.includes(category.id)) {
        openCategories.values = openCategories.values.filter(categoryId => categoryId !== category.id)
      } else {
        openCategories.values.push(category.id)
      }
      setOpenCategories({
        ...openCategories,
        values: openCategories.values
      })
    }
    if (category?.id === null) {
      setOpenCategories({ ...openCategories, values: [] })
    }
    setCategorySelected(category)
  }

  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const handleChangeSortBy = (val) => {
    setSortByValue(val)
  }

  const handleChangeFilterByMenus = (val) => {
    setFilterByMenus(val)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (
      name && (name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName)
    ) ||
      (
        description && (description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription)
      )
  }

  const isValidMoment = (date, format) => dayjs.utc(date, format).format(format) === date

  const isFeaturedSearch = (product) => {
    if (product.featured) {
      if (!searchValue) return true
      return (
        product.name && (product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName)
      ) ||
        (
          product.description && (product.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription)
        )
    }
    return false
  }

  const sortProductsArray = (option, array) => {
    if (option === 'rank' || option === null) {
      return array.sort((a, b) => a.rank - b.rank)
    }
    if (option === 'rank_desc') {
      return array.sort((a, b) => b.rank - a.rank)
    }
    if (option === 'a-z') {
      return array.sort((a, b) =>
        (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      )
    }
    return array
  }

  const subCategoriesList = []

  const iterateCategories = (categories) => {
    return (
      categories?.length > 0 && categories?.forEach(category => {
        subCategoriesList.push(category)
        iterateCategories(category.subcategories)
      })
    )
  }

  /**
   * Method to change professional
   * @param {object} professional a professional info
   */
  const handleChangeProfessionalSelected = (professional) => {
    setProfessionalSelected(professional)
  }

  const handleUpdateProducts = (productId, changes) => {
    const updatedProducts = categoryState?.products.map(product => {
      if (product?.id === productId) {
        return {
          ...product,
          ...changes
        }
      }
      return product
    })
    setCategoryState({
      ...categoryState,
      products: updatedProducts
    })
    if (categoriesState?.featured?.products) {
      const updatedFeaturedProducts = categoriesState?.featured?.products.map(product => {
        if (product?.id === productId) {
          return {
            ...product,
            ...changes
          }
        }
        return product
      })
      setCategoriesState({
        ...categoriesState,
        featured: {
          ...categoriesState.featured,
          products: updatedFeaturedProducts
        }
      })
    }
    const updatedCategories = businessState?.business?.categories?.map(_category => {
      const updatedProducts = _category?.products.map(_product => {
        if (_product?.id === productId) {
          return {
            ..._product,
            ...changes
          }
        }
        return _product
      })
      return {
        ..._category,
        products: updatedProducts
      }
    })
    setBusinessState({
      ...businessState,
      business: {
        ...businessState?.business,
        categories: updatedCategories
      }
    })
  }

  const getProducts = async () => {
    for (let i = 0; i < businessState?.business?.categories?.length ?? 0; i++) {
      const category = businessState?.business?.categories[i]
      const isFeatured = category?.products?.some((product) => product.featured)
      if (isFeatured) {
        setFeaturedProducts(isFeatured)
        break
      }
    }
    const categoryState = {
      ...categoryStateDefault,
      loading: false
    }
    if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
      iterateCategories(businessState?.business?.categories)
      const categoriesList = [].concat(...businessState?.business?.categories.map(category => category.children))
      const categories = isUseParentCategory ? categoriesList : businessState?.business?.categories
      const parentCategory = categories?.find(category => category.category_id === categorySelected.id) ?? {}
      const categoryFinded = subCategoriesList.find(subCat => subCat.id === parentCategory.category_id) ?? {}

      const productsFiltered = businessState?.business?.categories
        ?.find(category => category.id === (isUseParentCategory ? parentCategory?.parent_category_id : categorySelected.id))
        ?.products
        .filter(product => isUseParentCategory
          ? (categoryFinded?.children?.some(cat => cat.category_id === product?.category_id) && isMatchSearch(product.name, product.description))
          : isMatchSearch(product.name, product.description))

      categoryState.products = productsFiltered || []
    } else if (categorySelected.id === 'featured') {
      const productsFiltered = businessState?.business?.categories?.reduce(
        (products, category) => [...products, ...category.products], []
      ).filter(
        product => isFeaturedSearch(product)
      )
      categoryState.products = productsFiltered || []
    } else {
      const productsFiltered = businessState?.business?.categories?.reduce(
        (products, category) => [...products, ...category.products], []
      ).filter(
        product => isMatchSearch(product.name, product.description)
      )
      categoryState.products = productsFiltered || []
    }
    categoryState.products = sortProductsArray(sortByValue, categoryState.products)
    setErrorQuantityProducts(!categoryState.products?.length)
    setCategoryState({ ...categoryState })
  }

  const getLazyProducts = async ({ page, pageSize = categoryStateDefault.pagination.pageSize }) => {
    const parameters = {
      type: orderState.options?.type ?? 1,
      page,
      page_size: pageSize
    }

    if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
      const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
      parameters.timestamp = moment
    }

    if (sortByValue) {
      parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue
    }

    let where = null
    const searchConditions = []
    if (searchValue) {
      if (isSearchByName) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: props?.isForceSearch ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      if (isSearchByDescription) {
        searchConditions.push(
          {
            attribute: 'description',
            value: {
              condition: 'ilike',
              value: props?.isForceSearch ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
    }

    where = {
      conditions: searchConditions,
      conector: 'OR'
    }

    if (categorySelected.id === 'featured') {
      parameters.params = 'features'
    }

    if (categorySelected.id === 'featured' && searchValue) {
      parameters.params = 'features'
      where = {
        conditions: [
          {
            conditions: searchConditions,
            conector: 'OR'
          }
        ],
        conector: 'AND'
      }
    }

    const source = {}
    requestsState.products = source
    const promises = []

    const functionFetch = categorySelected.id && categorySelected.id !== 'featured'
      ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products()
      : !isUseParentCategory
        ? ordering.businesses(businessState.business.id).products()
        : ordering.businesses(businessState.business.id).categories()

    let productEndpoint = where?.conditions?.length > 0
      ? functionFetch.parameters(parameters).where(where)
      : functionFetch.parameters(parameters)

    promises.push(await productEndpoint.get({ cancelToken: source }))

    if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
      parameters.params = 'features'
      productEndpoint = where?.conditions?.length > 0
        ? ordering.businesses(businessState.business.id).products().parameters(parameters).where(where)
        : ordering.businesses(businessState.business.id).products().parameters(parameters)

      promises.push(await productEndpoint.get({ cancelToken: source }))
    }

    return promises
  }

  const loadProducts = async ({ newFetch } = {}) => {
    const curCategoryState = categoriesState[categoryKey] ?? categoryStateDefault
    if (
      !newFetch &&
      ((curCategoryState.pagination.currentPage > 0 &&
        curCategoryState.pagination.currentPage === curCategoryState.pagination.totalPages) ||
        (curCategoryState?.products?.length > 0 && curCategoryState.pagination.totalPages > 0))
    ) {
      setCategoryState({ ...curCategoryState, loading: false })
      return
    }

    const isLazy = !!businessState?.business?.lazy_load_products_recommended

    if (!isLazy) {
      getProducts()
      return
    }

    const pageSize = categoryStateDefault.pagination.pageSize

    try {
      setCategoryState({ ...curCategoryState, loading: true })
      const [lazyRes, featuredRes] = await getLazyProducts({ page: 1, pageSize })

      const { content: { error, result, pagination } } = lazyRes

      const errorsList = []

      if (error) {
        errorsList.push(result[0])
      }
      if (featuredRes?.content?.error) {
        errorsList.push(featuredRes?.content?.result[0])
      }
      if (errorsList?.length) {
        setErrors(errorsList[0])
        setCategoryState({ ...curCategoryState, loading: false })
        return
      }

      if (featuredRes?.content?.result?.length) {
        const oldFeatured = categoriesState?.featured
        const featureState = {
          pagination: {
            ...oldFeatured?.pagination,
            currentPage: featuredRes?.content?.pagination?.current_page,
            totalItems: featuredRes?.content?.pagination?.total,
            totalPages: featuredRes?.content?.pagination?.total_pages
          },
          loading: false,
          products: newFetch
            ? [...featuredRes?.content?.result]
            : oldFeatured?.products?.concat(featuredRes?.content?.result)
        }
        setErrorQuantityProducts(!featureState.products?.length)
        categoriesState.featured = featureState
      }

      if ((categorySelected.id && categorySelected.id !== 'featured') || !isUseParentCategory) {
        const newcategoryState = {
          pagination: {
            ...curCategoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: result
        }
        setErrorQuantityProducts(!newcategoryState.products?.length)
        categoriesState[categoryKey] = newcategoryState
        categoryState = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured) ||
          categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      }

      if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
        const productsList = [].concat(...result.map(category => category?.products)).filter(item => item)
        const productsListFeatured = featuredRes?.content?.result ?? []
        const paginationData = categorySelected.id === 'featured'
          ? categoriesState?.featured?.pagination ?? {}
          : curCategoryState?.pagination ?? {}
        const newcategoryState = {
          pagination: {
            ...paginationData,
            currentPage: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.current_page
              : pagination.current_page,
            totalItems: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.total
              : pagination.total,
            totalPages: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.total_pages
              : pagination.total_pages
          },
          loading: false,
          products: categorySelected.id === 'featured'
            ? productsListFeatured
            : [...productsListFeatured, ...curCategoryState.products.concat(productsList)]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured) ||
          categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      }
    } catch (err) {
      if (err?.constructor?.name !== 'Cancel') {
        setErrors([err?.message ?? 'ERROR'])
        setCategoryState({ ...curCategoryState, loading: false })
      }
    }
  }

  const loadMoreProducts = async () => {
    const curCategoryState = categoriesState[categoryKey] ?? categoryStateDefault
    setCategoryState({ ...curCategoryState, loading: true })

    try {
      const [lazyRes, featuredRes] = await getLazyProducts({
        page: curCategoryState.pagination.currentPage + 1
      })

      const { content: { error, result, pagination } } = lazyRes

      const errorsList = []

      if (error) {
        errorsList.push(result[0])
      }
      if (featuredRes?.content?.error) {
        errorsList.push(featuredRes?.content?.result[0])
      }
      if (errorsList?.length) {
        setErrors(errorsList[0])
        setCategoryState({ ...curCategoryState, loading: false })
        return
      }

      if (featuredRes) {
        const oldFeatured = categoriesState?.featured
        const featureState = {
          pagination: {
            ...oldFeatured.pagination,
            currentPage: featuredRes?.content?.pagination?.current_page,
            totalItems: featuredRes?.content?.pagination?.total,
            totalPages: featuredRes?.content?.pagination?.total_pages
          },
          loading: false,
          products: [...oldFeatured.products, ...featuredRes?.content?.result]
        }
        categoriesState.featured = featureState
      }

      if ((categorySelected.id && categorySelected.id !== 'featured') || !isUseParentCategory) {
        const newcategoryState = {
          pagination: {
            ...curCategoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: [...curCategoryState.products, ...result]
        }

        categoriesState[categoryKey] = newcategoryState
        categoryState = { ...categoryState, ...newcategoryState }
        setCategoryState({ ...categoryState, ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured) ||
          categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      }

      if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
        const productsList = [].concat(...result.map(category => category?.products)).filter(item => item)
        const productsListFeatured = featuredRes?.content?.result ?? []
        const paginationData = categorySelected.id === 'featured'
          ? categoriesState?.featured?.pagination ?? {}
          : curCategoryState.pagination ?? {}
        const newcategoryState = {
          pagination: {
            ...paginationData,
            currentPage: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.current_page
              : pagination.current_page,
            totalItems: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.total
              : pagination.total,
            totalPages: categorySelected.id === 'featured'
              ? featuredRes?.content?.pagination?.total_pages
              : pagination.total_pages
          },
          loading: false,
          products: categorySelected.id === 'featured'
            ? productsListFeatured
            : [...productsListFeatured, ...curCategoryState.products.concat(productsList)]
        }

        categoriesState[categoryKey] = newcategoryState
        categoryState = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured) ||
          categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      }

      setCategoryState({ ...categoryState, loading: false })
    } catch (err) {
      if (err?.constructor?.name !== 'Cancel') {
        setErrors([err?.message ?? 'ERROR'])
        setCategoryState({ ...curCategoryState, loading: false })
      }
    }
  }

  const getProduct = async () => {
    if ((categoryId && productId && businessState.business.id) || (props.product?.businessId && props.product?.categoryId && props.product?.id)) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = {}
        requestsState.product = source
        const parameters = {
          type: orderState.options?.type || 1,
          moment: orderState.options?.moment || null
        }

        if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
          const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
          parameters.timestamp = moment
        }

        const { content: { result } } = await ordering
          .businesses(businessState.business.id || props.product?.businessId)
          .categories(categoryId || props.product?.categoryId)
          .products(productId || props.product?.id)
          .parameters(parameters)
          .get({ cancelToken: source })
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
  }, [JSON.stringify(businessState.business?.id), isInitialRender])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = {}
      requestsState.business = source
      const parameters = {
        type: orderState.options?.type || 1,
        location: location
          ? `${location?.lat},${location?.lng}`
          : orderState.options?.address?.location
            ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
            : null
      }
      if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
        const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
        parameters.timestamp = moment
      }

      if (filterByMenus) {
        parameters.menu_id = filterByMenus
      }

      if (professionalSelected) {
        parameters.professional_id = professionalSelected?.id
      }

      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(parameters)
        .get({ cancelToken: source })

      setErrorQuantityProducts(!result?.categories || result?.categories?.length === 0)

      const data = {
        ...businessState,
        business: result,
        loading: false
      }

      if (menusProps && isGetMenus) {
        const { content: { result: menus } } = await ordering
          .businesses(result.id)
          .menus()
          .select(menusProps)
          .get()

        data.menus = menus
      }

      setBusinessState(data)
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  const multiRemoveProducts = async (unavailableProducts, carts) => {
    const allPromise = []
    unavailableProducts.forEach(product => {
      allPromise.push(new Promise((resolve, reject) => {
        resolve(removeProduct(product, carts))
      }))
    })
    await Promise.all(allPromise) && setAlertState({ open: true, content: [t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.')] })
  }

  useEffect(() => {
    if (!businessState.loading) {
      loadProducts({ newFetch: true })
    }
  }, [businessState.loading])

  useEffect(() => {
    loadProducts({ newFetch: !!searchValue })
  }, [searchValue])

  useEffect(() => {
    loadProducts({ newFetch: !!searchValue })
  }, [categorySelected.id])

  useEffect(() => {
    loadProducts({ newFetch: !!searchValue })
  }, [sortByValue])

  useEffect(() => {
    loadProducts()
  }, [slug])

  useEffect(() => {
    if (!orderState.loading && orderOptions && !languageState.loading && !props.avoidBusinessLoading) {
      getBusiness()
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus, professionalSelected])

  useEffect(() => {
    if (!orderState.loading && orderOptions && !languageState.loading && !businessState.loading && props.avoidBusinessLoading) {
      getBusiness()
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus, professionalSelected])

  /**
   * getBusiness if orderState is loading the first time when is rendered
   */
  useEffect(() => {
    if (props.product && !orderState.loading && !Object.keys(businessState.business)?.length) {
      getBusiness()
    }
  }, [orderState.loading])

  /**
   * getProduct when login after guest
   */
  useEffect(() => {
    if (props.product?.businessId && props.product?.categoryId && props.product?.id && !orderState.loading) {
      getProduct()
    }
  }, [props.product])

  useEffect(() => {
    if (!orderState.loading) {
      setOrderOptions({
        type: orderState?.options?.type,
        moment: orderState?.options?.moment,
        location: orderState?.options?.address?.location
      })
    }
  }, [orderState?.options?.type, orderState?.options?.moment, JSON.stringify(orderState?.options?.address?.location)])

  /**
   * Cancel business request
   */
  useEffect(() => {
    const request = requestsState.business
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.business])

  /**
   * Cancel products request on unmount and pagination
   */
  useEffect(() => {
    const request = requestsState.products
    return () => {
      request && request.cancel && request.cancel()
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
          sortByValue={sortByValue}
          filterByMenus={filterByMenus}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          openCategories={openCategories.values}
          featuredProducts={featuredProducts}
          errorQuantityProducts={errorQuantityProducts}
          categoriesState={categoriesState}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          handleChangeSortBy={handleChangeSortBy}
          handleChangeFilterByMenus={handleChangeFilterByMenus}
          getNextProducts={loadMoreProducts}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
          multiRemoveProducts={multiRemoveProducts}
          setAlertState={setAlertState}
          alertState={alertState}
          handleUpdateProducts={handleUpdateProducts}
          professionalSelected={professionalSelected}
          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
        />
      )}
    </>
  )
}

BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

BusinessAndProductList.defaultProps = {
}
