import React, { useState, useEffect } from 'react'
import { useApi } from 'ordering-components'

export const BusinessTypeFilter = (props) => {
  const {
    businessTypes,
    onChangeBusinessType,
    defaultBusinessType,
    UIComponent
  } = props

  const [ordering] = useApi()

  /**
   * This property is used to set in state the current value
   */
  const [typeSelected, setTypeSelected] = useState(defaultBusinessType)
  const [typesState, setTypesState] = useState({ loading: true, error: null, types: [], pagination: null })

  /**
   * Handle when select value changes
   */
  const handleChangeBusinessType = (businessType) => {
    setTypeSelected(businessType)
    onChangeBusinessType(businessType)
  }

  const getBusinessTypes = async () => {
    try {
      const response = await fetch(`${ordering.root}/business_types`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const { error, result, pagination } = await response.json()
      if (!error) {
        result.unshift({ id: null, enabled: true, image: null, name: 'All' })
        setTypesState({
          ...typesState,
          loading: false,
          types: result,
          pagination
        })
        return
      }
      setTypesState({
        ...typesState,
        loading: false,
        error: result
      })
    } catch (error) {
      setTypesState({
        ...typesState,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    if (businessTypes) {
      setTypesState({
        ...typesState,
        loading: false,
        types: businessTypes
      })
    } else {
      getBusinessTypes()
    }
  }, [businessTypes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          typesState={typesState}
          businessTypes={businessTypes}
          currentTypeSelected={typeSelected}
          handleChangeBusinessType={handleChangeBusinessType}
        />
      )}
    </>
  )
}

BusinessTypeFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
