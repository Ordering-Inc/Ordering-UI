import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi, useSession } from 'ordering-components'

export const Help = (props) => {
  const {
    UIComponent,
    asDashboard,
    orderStatus
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [orderState, setOrderState] = useState({ loading: false, error: null, order: {} })
  const requestsState = {}

  /**
   * Function to get last order from API
   */
  const getLastOrder = async () => {
    try {
      setOrderState({
        ...orderState,
        loading: true
      })
      const options = {
        query: {
          orderBy: '-id',
          limit: 1
        }
      }
      if (orderStatus) {
        options.query.where = []
        options.query.where.push({ attribute: 'status', value: orderStatus })
      }
      const source = {}
      requestsState.orders = source
      options.cancelToken = source
      const functionFetch = asDashboard
        ? ordering.setAccessToken(session.token).orders().asDashboard()
        : ordering.setAccessToken(session.token).orders()
      const response = await functionFetch.get(options)
      setOrderState({
        loading: false,
        order: response.content.error ? {} : response.content.result[0],
        error: response.content.error ? response.content.result : null
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderState({ ...orderState, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    getLastOrder()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            orderState={orderState}
          />
        )
      }
    </>
  )
}

Help.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Help.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
