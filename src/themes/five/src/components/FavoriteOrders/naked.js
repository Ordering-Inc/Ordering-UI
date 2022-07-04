import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components'

export const FavoriteOrders = (props) => {
  const {
    UIComponent,
    paginationSettings,
    asDashboard
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()

  const [favoriteOrderList, setFavoriteOrderList] = useState({ loading: false, orders: [], error: null })
  const [requestsState, setRequestsState] = useState({})
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    total: null
  })

  /**
   * Method to update order list
   * @param {number} orderId order id
   * @param {object} changes orderInfo info
   */
  const handleUpdateOrderList = (orderId, changes) => {
    if (changes?.favorite) return

    const updatedProducts = favoriteOrderList?.orders.filter(order => order?.id !== orderId)
    setFavoriteOrderList({
      ...favoriteOrderList,
      orders: updatedProducts
    })
  }

  /**
   * Function to get favorite product list from API
   */
  const getFavoriteOrderList = async (page, pageSize = paginationSettings.pageSize) => {
    if (!user) return

    try {
      setFavoriteOrderList({ ...favoriteOrderList, loading: true, error: null })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = `${ordering.root}/users/${user?.id}/favorite_orders?page=${page}&page_size=${pageSize}`
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
        const orderIds = content?.result?.reduce((ids, order) => [...ids, order?.object_id], [])
        const { content: { error, result } } = await getOrderList(orderIds)
        if (!error) {
          setFavoriteOrderList({
            loading: false,
            orders: [...favoriteOrderList?.orders, ...result],
            error: null
          })
        } else {
          setFavoriteOrderList({
            ...favoriteOrderList,
            loading: false,
            error: result
          })
        }
      } else {
        setFavoriteOrderList({
          ...favoriteOrderList,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setFavoriteOrderList({
        ...favoriteOrderList,
        loading: false,
        error: [error.message]
      })
    }
  }

  const getOrderList = async (ids) => {
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

    const source = {}
    requestsState.orders = source
    setRequestsState({ ...requestsState })
    const functionFetch = asDashboard
      ? ordering.setAccessToken(token).orders().where(where).asDashboard()
      : ordering.setAccessToken(token).orders().where(where)
    return await functionFetch.get({ cancelToken: source })
  }

  /**
   * Cancel businesses request
   */
  useEffect(() => {
    const request = requestsState.orders
    return () => {
      request && request.cancel()
    }
  }, [requestsState.orders])

  useEffect(() => {
    getFavoriteOrderList(1)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          favoriteOrderList={favoriteOrderList}
          handleUpdateOrderList={handleUpdateOrderList}
          pagination={pagination}
          getFavoriteOrderList={getFavoriteOrderList}
        />
      )}
    </>
  )
}

FavoriteOrders.propTypes = {
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

FavoriteOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
