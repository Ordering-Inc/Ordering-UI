import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { ToastType, useToast } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, ToastType, useToast, useLanguage } from 'ordering-components'

export const ReviewDriver = (props) => {
  const { UIComponent, order, isToast } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [reviews, setReviews] = useState({ qualification: 0, comment: '' })
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  /**
   * Function that load and send the driver review to ordering
   */
  const handleSendDriverReview = async () => {
    setFormState({ ...formState, loading: true })
    try {
      const response = await fetch(`${ordering.root}/users/${order?.driver?.id}/user_reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...reviews, order_id: order?.id, user_id: order?.driver?.id })
      })
      const { result, error } = await response.json()
      if (!error) {
        setFormState({
          loading: false,
          result: {
            result: result,
            error: false
          }
        })
        if (isToast) showToast(ToastType.Success, t('DRIVER_REVIEW_SUCCESS_CONTENT', 'Thank you, Driver review successfully submitted!'))
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
          handleSendDriverReview={handleSendDriverReview}
          dirverReviews={reviews}
          setDriverReviews={setReviews}
        />
      )}
    </>
  )
}

ReviewDriver.propTypes = {
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

ReviewDriver.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
