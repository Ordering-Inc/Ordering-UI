import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useApi, useOrder } from 'ordering-components'

export const BusinessList = (props) => {
  const {
    UIComponent,
    initialOrderType,
    initialFilterKey,
    initialFilterValue,
    isOfferBusinesses,
    isSortByReview,
    isSearchByName,
    isSearchByDescription,
    isFeatured,
    paginationSettings,
    customLocation,
    propsToFetch,
    onBusinessClick
  } = props

  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [timeLimitValue, setTimeLimitValue] = useState(null)
  const [orderByValue, setOrderByValue] = useState(null)
  const [maxDeliveryFee, setMaxDeliveryFee] = useState(null)
  const [orderState] = useOrder()
  const [ordering] = useApi()
  const [requestsState, setRequestsState] = useState({})

  const isValidMoment = (date, format) => moment(date, format).format(format) === date
  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  const sortBusinesses = (array, option) => {
    if (option === 'review') {
      return array.sort((a, b) => b.reviews.total - a.reviews.total)
    }
    return array
  }
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  const getBusinesses = async (newFetch) => {
    try {
      setBusinessesList({ ...businessesList, loading: true })

      let parameters = {
        location: !customLocation
          ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
          : `${customLocation.lat},${customLocation.lng}`,
        type: !initialOrderType ? (orderState.options?.type || 1) : initialOrderType
      }
      if (orderByValue) {
        parameters = {
          ...parameters,
          orderBy: orderByValue
        }
      }
      if (!isSortByReview && !isOfferBusinesses) {
        const paginationParams = {
          page: newFetch ? 1 : paginationProps.currentPage + 1,
          page_size: paginationProps.pageSize
        }
        parameters = { ...parameters, ...paginationParams }
      }
      if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
        const momento = moment.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
        parameters.timestamp = momento
      }

      let where = null
      const conditions = []
      if (businessTypeSelected) {
        conditions.push({
          attribute: 'types',
          conditions: [{
            attribute: 'id',
            value: businessTypeSelected
          }]
        })
      }
      if (isFeatured) {
        conditions.push({ attribute: 'featured', value: true })
      }

      if (timeLimitValue) {
        if (orderState.options?.type === 1) {
          conditions.push({
            attribute: 'delivery_time',
            value: {
              condition: '<=',
              value: timeLimitValue
            }
          })
        }
        if (orderState.options?.type === 2) {
          conditions.push({
            attribute: 'pickup_time',
            value: {
              condition: '<=',
              value: timeLimitValue
            }
          })
        }
      }

      if (maxDeliveryFee) {
        conditions.push({
          attribute: 'delivery_price',
          value: {
            condition: '<=',
            value: maxDeliveryFee
          }
        })
      }

      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
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
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const source = {}
      requestsState.businesses = source
      setRequestsState({ ...requestsState })
      const fetchEndpoint = where
        ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where)
        : ordering.businesses().select(propsToFetch).parameters(parameters)
      const { content: { result, pagination } } = await fetchEndpoint.get({ cancelToken: source })
      if (isSortByReview) {
        const _result = sortBusinesses(result, 'review')
        businessesList.businesses = _result
      } else if (isOfferBusinesses) {
        const offerBuesinesses = result.filter(_business => _business?.offers.length > 0)
        businessesList.businesses = offerBuesinesses
      } else {
        businessesList.businesses = newFetch ? result : [...businessesList.businesses, ...result]
      }
      setBusinessesList({
        ...businessesList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - businessesList.businesses.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        nextPageItems
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessesList({
          ...businessesList,
          loading: false,
          error: [err.message]
        })
      }
    }
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

  /**
   * Listening order option and filter changes
   */
  useEffect(() => {
    if (orderState.loading || (!orderState.options?.address?.location && !customLocation)) return
    getBusinesses(true)
  }, [JSON.stringify(orderState.options), businessTypeSelected, searchValue, timeLimitValue, orderByValue, maxDeliveryFee])

  /**
   * Listening initial filter
   */
  useEffect(() => {
    if (!initialFilterKey && !initialFilterValue) return
    switch (initialFilterKey) {
      case 'category':
        handleChangeBusinessType(initialFilterValue)
        break
      case 'timeLimit':
        handleChangeTimeLimit(initialFilterValue)
        break
      case 'search':
        handleChangeSearch(initialFilterValue)
        break
      case 'orderBy':
        handleChangeOrderBy(initialFilterValue)
        break
      case 'maxDeliveryFee':
        handleChangeMaxDeliveryFee(initialFilterValue)
        break
    }
  }, [initialFilterKey, initialFilterValue])

  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */
  const handleBusinessClick = (business) => {
    onBusinessClick && onBusinessClick(business)
  }

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  const handleChangeBusinessType = (businessType) => {
    if (businessType !== businessTypeSelected) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
      setBusinessTypeSelected(businessType)
    }
  }

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    if (!!search !== !!searchValue) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
    } else {
      setBusinessesList({
        ...businessesList,
        loading: false
      })
    }
    setSearchValue(search)
  }

  /**
   * Change time limt value
   * @param {string} time time limt value (for example: 0:30)
   */
  const handleChangeTimeLimit = (time) => {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
    } else {
      setBusinessesList({
        ...businessesList,
        loading: false
      })
    }
    setTimeLimitValue(time)
  }

  /**
   * Change orderBy value
   * @param {string} orderBy orderBy value
   */
  const handleChangeOrderBy = (orderBy) => {
    if (orderBy !== orderByValue) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
    } else {
      setBusinessesList({
        ...businessesList,
        loading: false
      })
    }
    setOrderByValue(orderBy)
  }

  /**
   * Change max delivery fee
   * @param {number} deliveryFee max delivery fee
   */
  const handleChangeMaxDeliveryFee = (deliveryFee) => {
    if (maxDeliveryFee !== deliveryFee) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
    } else {
      setBusinessesList({
        ...businessesList,
        loading: false
      })
    }
    setMaxDeliveryFee(deliveryFee)
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessesList={businessesList}
            paginationProps={paginationProps}
            searchValue={searchValue}
            timeLimitValue={timeLimitValue}
            businessTypeSelected={businessTypeSelected}
            orderByValue={orderByValue}
            maxDeliveryFee={maxDeliveryFee}
            getBusinesses={getBusinesses}
            handleChangeSearch={handleChangeSearch}
            handleChangeTimeLimit={handleChangeTimeLimit}
            handleChangeOrderBy={handleChangeOrderBy}
            handleBusinessClick={handleBusinessClick}
            handleChangeBusinessType={handleChangeBusinessType}
            handleChangeMaxDeliveryFee={handleChangeMaxDeliveryFee}
          />
        )
      }
    </>
  )
}

BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug'],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
