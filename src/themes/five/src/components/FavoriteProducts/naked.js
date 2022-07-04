import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components'

export const FavoriteProducts = (props) => {
  const {
    UIComponent,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()

  const [favoriteProductList, setFavoriteProductList] = useState({ loading: false, products: [], error: null })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    total: null
  })

  /**
   * Method to update product list
   * @param {number} productId product id
   * @param {object} changes product info
   */
  const handleUpdateProducts = (productId, changes) => {
    if (changes?.favorite) return

    const updatedProducts = favoriteProductList?.products.filter(product => product?.id !== productId)
    setFavoriteProductList({
      ...favoriteProductList,
      products: updatedProducts
    })
  }

  /**
   * Function to get favorite product list from API
   */
  const getFavoriteProductList = async (page, pageSize = paginationSettings.pageSize) => {
    if (!user) return

    try {
      setFavoriteProductList({ ...favoriteProductList, loading: true, error: null })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = `${ordering.root}/users/${user?.id}/favorite_products?page=${page}&page_size=${pageSize}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setPagination({
          currentPage: content.pagination.current_page,
          pageSize: content.pagination.page_size,
          totalPages: content.pagination.total_pages,
          total: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
        const productIds = content?.result?.reduce((ids, product) => [...ids, product?.object_id], [])
        const { error, result } = await getProductList(productIds)
        if (!error) {
          const updatedResult = result.map(item => { return { ...item, favorite: true } })
          setFavoriteProductList({
            loading: false,
            products: [...favoriteProductList?.products, ...updatedResult],
            error: null
          })
        } else {
          setFavoriteProductList({
            ...favoriteProductList,
            loading: false,
            error: result
          })
        }
      } else {
        setFavoriteProductList({
          ...favoriteProductList,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setFavoriteProductList({
        ...favoriteProductList,
        loading: false,
        error: [error.message]
      })
    }
  }

  const getProductList = async (ids) => {
    let where = null
    const conditions = []
    conditions.push({
      attribute: 'id',
      value: ids
    })
    if (conditions.length) {
      where = {
        conditions,
        conector: 'AND'
      }
    }
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await fetch(`${ordering.root}/products?where=${JSON.stringify(where)}`, requestOptions)
    return await response.json()
  }

  useEffect(() => {
    getFavoriteProductList(1)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          favoriteProductList={favoriteProductList}
          handleUpdateProducts={handleUpdateProducts}
          pagination={pagination}
          getFavoriteProductList={getFavoriteProductList}
        />
      )}
    </>
  )
}

FavoriteProducts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: PropTypes.number,
  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

FavoriteProducts.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
