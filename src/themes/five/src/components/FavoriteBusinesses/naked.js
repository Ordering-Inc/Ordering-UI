import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useOrder } from '../../contexts/OrderContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession, useOrder } from 'ordering-components'

export const FavoriteBusinesses = (props) => {
  const {
    UIComponent,
    propsToFetch,
    asDashboard,
    customLocation,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [orderState] = useOrder()
  const [{ user, token }] = useSession()
  const [requestsState, setRequestsState] = useState({})
  const [favoriteBusinessList, setFavoriteBusinessList] = useState({ loading: false, businesses: [], error: null })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    total: null
  })

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  const handleUpdateBusinessList = (businessId, changes) => {
    if (changes?.favorite) return

    const updatedBusinesses = [...favoriteBusinessList?.businesses]
    const index = favoriteBusinessList?.businesses.findIndex(business => business.id === businessId)
    updatedBusinesses.splice(index, 1)
    setFavoriteBusinessList({
      ...favoriteBusinessList,
      businesses: updatedBusinesses
    })
  }

  /**
   * Function to get favorite business list from API
   */
  const getFavoriteBusinessList = async (page, pageSize = paginationSettings.pageSize) => {
    if (!user) return

    try {
      setFavoriteBusinessList({ ...favoriteBusinessList, loading: true, error: null })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = `${ordering.root}/users/${user?.id}/favorite_businesses?page=${page}&page_size=${pageSize}`
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
        const businessIds = content?.result?.reduce((ids, business) => [...ids, business?.object_id], [])
        const response = await getBusinessList(businessIds)
        if (!response?.content?.error) {
          setFavoriteBusinessList({
            loading: false,
            businesses: [...favoriteBusinessList?.businesses, ...response?.content?.result],
            error: null
          })
        } else {
          setFavoriteBusinessList({
            ...favoriteBusinessList,
            loading: false,
            error: response?.content?.result
          })
        }
      } else {
        setFavoriteBusinessList({
          ...favoriteBusinessList,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setFavoriteBusinessList({
        ...favoriteBusinessList,
        loading: false,
        error: [error.message]
      })
    }
  }

  const getBusinessList = async (ids) => {
    const parameters = {
      location: !customLocation
        ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
        : `${customLocation.lat},${customLocation.lng}`
    }
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
    requestsState.businesses = source
    setRequestsState({ ...requestsState })

    const fetchEndpoint = asDashboard
      ? ordering.setAccessToken(token).businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard()
      : ordering.setAccessToken(token).businesses().select(propsToFetch).parameters(parameters).where(where)
    return await fetchEndpoint.get({ cancelToken: source })
  }

  /**
   * Cancel businesses request
   */
  useEffect(() => {
    const request = requestsState.businesses
    return () => {
      request && request.cancel()
    }
  }, [requestsState.businesses])

  useEffect(() => {
    getFavoriteBusinessList(1)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          favoriteBusinessList={favoriteBusinessList}
          handleUpdateBusinessList={handleUpdateBusinessList}
          pagination={pagination}
          getFavoriteBusinessList={getFavoriteBusinessList}
        />
      )}
    </>
  )
}

FavoriteBusinesses.propTypes = {
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

FavoriteBusinesses.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
