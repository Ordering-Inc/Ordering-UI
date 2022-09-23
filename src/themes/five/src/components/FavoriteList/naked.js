import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useOrder } from '../../contexts/OrderContext'
import { useApi, useSession, useOrder } from 'ordering-components'

export const FavoriteList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    favoriteURL,
    originalURL,
    location,
    propsToFetch,
    isProduct,
    isProfessional
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, { reorder }] = useOrder()

  const [favoriteList, setFavoriteList] = useState({ loading: false, favorites: [], error: null })
  const [reorderState, setReorderState] = useState({ loading: false, result: [], error: null })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    total: null
  })

  /**
   * Method to update favorite list
   * @param {number} id business, order, product id
   * @param {object} changes favorite info
   */
  const handleUpdateFavoriteList = (id, changes) => {
    if (changes?.favorite) return

    const updatedFavorites = favoriteList?.favorites.filter(item => item?.id !== id)
    setFavoriteList({
      ...favoriteList,
      favorites: updatedFavorites
    })
  }

  /**
   * Function to get favorite list from API
   */
  const getFavoriteList = async (page, pageSize = paginationSettings.pageSize) => {
    if (!user || !favoriteURL || !originalURL) return

    try {
      setFavoriteList({ ...favoriteList, loading: true, error: null })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = `${ordering.root}/users/${user?.id}/${favoriteURL}?page=${page}&page_size=${pageSize}`
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
        if (isProduct) {
          const updatedProducts = content?.result.map(item => {
            return item?.product
          })
          setFavoriteList({
            loading: false,
            favorites: [...favoriteList?.favorites, ...updatedProducts],
            error: null
          })
        } else if (isProfessional) {
          const updatedUsers = content?.result.map(item => {
            return item?.user
          })
          setFavoriteList({
            loading: false,
            favorites: [...favoriteList?.favorites, ...updatedUsers],
            error: null
          })
        } else {
          const idList = content?.result?.reduce((ids, product) => [...ids, product?.object_id], [])
          const { error, result } = await getOriginalList(idList)
          if (!error) {
            setFavoriteList({
              loading: false,
              favorites: [...favoriteList?.favorites, ...result],
              error: null
            })
          } else {
            setFavoriteList({
              ...favoriteList,
              loading: false,
              error: result
            })
          }
        }
      } else {
        setFavoriteList({
          ...favoriteList,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setFavoriteList({
        ...favoriteList,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Function to get business, product, order list from API
   */
  const getOriginalList = async (ids) => {
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

    let fetchEndpoint = `${ordering.root}/${originalURL}?where=${JSON.stringify(where)}`
    if (location) fetchEndpoint = `${fetchEndpoint}&location=${location}`
    if (propsToFetch) fetchEndpoint = `${fetchEndpoint}&params=${propsToFetch}`

    const response = await fetch(fetchEndpoint, requestOptions)
    return await response.json()
  }

  const handleReorder = async (orderId) => {
    if (!orderId) return
    try {
      setReorderState({
        ...reorderState,
        loading: true
      })
      const { error, result } = await reorder(orderId)
      if (!error) {
        setReorderState({
          ...reorderState,
          loading: false,
          result: { ...result, orderId: orderId }
        })
      } else {
        const choosedOrder = favoriteList.favorites.find(_order => _order?.id === orderId)
        const _businessId = choosedOrder?.business_id ?? choosedOrder?.original?.business_id
        const _businessData = await ordering.businesses(_businessId).select(['slug']).get()
        const _businessSlug = await _businessData?.content?.result?.slug

        setReorderState({
          ...reorderState,
          loading: false,
          error: true,
          result: { ...result, orderId: orderId, business_id: _businessId, business: { slug: _businessSlug } }
        })
      }
    } catch (err) {
      setReorderState({
        ...reorderState,
        loading: false,
        error: true,
        result: [err?.message]
      })
    }
  }

  useEffect(() => {
    getFavoriteList(1)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          favoriteList={favoriteList}
          handleUpdateFavoriteList={handleUpdateFavoriteList}
          pagination={pagination}
          getFavoriteList={getFavoriteList}
          handleReorder={handleReorder}
          reorderState={reorderState}
        />
      )}
    </>
  )
}

FavoriteList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Default URL to get favorite list
   */
  favoriteURL: PropTypes.string.isRequired,
  /**
   * Default URL to get business, product, order list
   */
  originalURL: PropTypes.string.isRequired,
  /**
   * Info of location
   */
  location: PropTypes.string,
  /**
   * Components types before favorite listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after favorite listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before favorite listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after favorite listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

FavoriteList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
