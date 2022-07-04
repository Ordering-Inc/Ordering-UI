import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components'

export const SingleOrderCard = (props) => {
  const {
    UIComponent,
    order,
    handleUpdateOrderList
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to add favorite info for user from API
   */
  const addFavoriteOrder = async () => {
    if (!order || !user) return

    try {
      showToast(ToastType.Info, t('LOADING', 'loading'))
      setActionState({ ...actionState, loading: true, error: null })
      const changes = { object_id: order?.id }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/users/${user?.id}/favorite_orders`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateOrderList && handleUpdateOrderList(order?.id, { favorite: true })
        showToast(ToastType.Success, t('FAVORITE_ADDED', 'Favorite added'))
      } else {
        setActionState({
          ...actionState,
          loading: false,
          error: content.result
        })
        showToast(ToastType.Error, content.result)
      }
    } catch (error) {
      setActionState({
        ...actionState,
        loading: false,
        error: [error.message]
      })
      showToast(ToastType.Error, [error.message])
    }
  }

  /**
   * Method to delete favorite info for user from API
   */
  const deleteFavoriteOrder = async () => {
    if (!order || !user) return

    try {
      setActionState({ ...actionState, loading: true })
      const response = await fetch(`${ordering.root}/users/${user.id}/favorite_orders/${order?.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateOrderList && handleUpdateOrderList(order?.id, { favorite: false })
      } else {
        setActionState({
          ...actionState,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          addFavoriteOrder={addFavoriteOrder}
          deleteFavoriteOrder={deleteFavoriteOrder}
          actionState={actionState}
        />
      )}
    </>
  )
}

SingleOrderCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Order details to render
   */
  order: PropTypes.object.isRequired,
  /**
   * Components types before Single order card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Single order card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleOrderCard.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
