import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { ToastType, useToast } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, ToastType, useToast, useLanguage } from 'ordering-components'

export const OrderReview = (props) => {
  const { UIComponent, order, onSaveReview, handleCustomSendReview } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [stars, setStars] = useState({ quality: 1, punctiality: 1, service: 1, packaging: 1, comments: '' })
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  /**
   * Function that load and send the review order to ordering
   */
  const handleSendReview = async () => {
    if (handleCustomSendReview) {
      handleCustomSendReview && handleCustomSendReview(stars)
    }
    setFormState({ ...formState, loading: true })
    try {
      const body = {
        order_id: order.id,
        quality: stars.quality,
        delivery: stars.punctiality,
        service: stars.service,
        package: stars.packaging,
        comment: stars.comments,
        user_id: session?.user?.id,
        business_id: order.business_id
      }
      const response = await fetch(`${ordering.root}/business/${order.business_id}/reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const { result, error } = await response.json()
      onSaveReview && onSaveReview(response)
      setFormState({ loading: false, result: result, error: error })
      if (!error) showToast(ToastType.Success, t('ORDER_REVIEW_SUCCESS_CONTENT', 'Thank you, Order review successfully submitted!'))
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }
  /**
   * Rating the product
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeRating = (e) => {
    setStars({
      ...stars,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  /**
   * Rating the product with comments
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setStars({
      ...stars,
      comments: e.target.value
    })
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          stars={stars}
          order={order}
          formState={formState}
          handleSendReview={handleSendReview}
          handleChangeInput={handleChangeInput}
          handleChangeRating={handleChangeRating}
          setStars={setStars}
        />
      )}
    </>
  )
}

OrderReview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Getting the order that can be review
  */
  order: PropTypes.object,
  /**
    * Response of ordering that contains de review
   */
  onSaveReview: PropTypes.func,
  /**
   * function that saves the order that will be reviewed
   */
  handleSendReview: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return scores without default behavior
   */
  handleCustomSendReview: PropTypes.func
}

OrderReview.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
