import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components'

export const BusinessMenuListing = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [ordering] = useApi()
  /**
   * Object to save products, loading and error values
   */
  const [businessMenuList, setBusinessMenuList] = useState({ menus: [], loading: true, error: false })

  /**
   * Method to get products from API
   */
  const getBusinessMenus = async () => {
    try {
      setBusinessMenuList({
        ...businessMenuList,
        loading: true
      })
      let where = null
      if (businessId) where = [{ attribute: 'business_id', value: businessId }]
      const fetchEndpoint = where
        ? ordering.businesses(businessId).menus().where(where)
        : ordering.businesses(businessId).menus()
      const { content: { result: menus } } = await fetchEndpoint.get()

      setBusinessMenuList({
        ...businessMenuList,
        loading: false,
        menus: menus
      })
    } catch (error) {
      setBusinessMenuList({
        ...businessMenuList,
        loading: false,
        error
      })
    }
  }

  useEffect(() => {
    getBusinessMenus()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessMenuList={businessMenuList}
        />
      )}
    </>
  )
}

BusinessMenuListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: PropTypes.number,
  /**
   * Enable/disable search by name
   */
  isSearchByName: PropTypes.bool,
  /**
   * Enable/disable search by description
   */
  isSearchByDescription: PropTypes.bool,
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

BusinessMenuListing.defaultProps = {
  isSearchByName: true,
  isSearchByDescription: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
