import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { ToastType, useToast } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, ToastType, useToast, useLanguage } from 'ordering-components'

export const ReviewProduct = (props) => {
  const { UIComponent, order } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [formState, setFormState] = useState({ loading: false, changes: [], result: { error: false } })

  const handleChangeFormState = (changes) => {
    const _changes = [...changes]
    setFormState({ ...formState, changes: _changes })
  }

  /**
   * Function that load and send the product review to ordering
   */
  const handleSendProductReview = async () => {
    setFormState({ ...formState, loading: true })
    try {
      const response = await fetch(`${ordering.root}/orders/${order?.id}/product_reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reviews: JSON.stringify(formState?.changes) })
      })
      const { result, error } = await response.json()
      if (!error) {
        setFormState({
          loading: false,
          changes: [],
          result: {
            result: result,
            error: false
          }
        })
        showToast(ToastType.Success, t('PRODUCT_REVIEW_SUCCESS_CONTENT', 'Thank you, Product review successfully submitted!'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            result: result,
            error: true
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleChangeFormState={handleChangeFormState}
          handleSendProductReview={handleSendProductReview}
        />
      )}
    </>
  )
}

ReviewProduct.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Getting the order that can be review
  */
  order: PropTypes.object,
  /**
   * Components types before payment option cash
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option cash
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReviewProduct.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
