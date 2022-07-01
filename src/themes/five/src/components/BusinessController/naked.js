import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useOrder } from '../../contexts/OrderContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useUtils } from '../../contexts/UtilsContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useOrder, useApi, useUtils, useSession, useToast, ToastType, useLanguage } from 'ordering-components'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(timezone)
dayjs.extend(isBetween)

export const BusinessController = (props) => {
  const {
    business,
    businessId,
    businessAttributes,
    onBusinessClick,
    handleCustomClick,
    isDisabledInterval,
    minutesToCloseSoon,
    UIComponent,
    handleUpdateBusinessList
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  /**
   * This must be containt business object data
   */
  const [businessState, setBusinessState] = useState({ business, loading: false, error: null })
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */
  const [isBusinessClose, setIsBusinessClose] = useState(false)
  /**
   * Order context data
   */
  const [orderState] = useOrder()
  /**
   * formatPrice function
   */
  const [{ parsePrice }] = useUtils()
  /**
   * timer in minutes when the business is going to close
   */
  const [businessWillCloseSoonMinutes, setBusinessWillCloseSoonMinutes] = useState(null)
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    setBusinessState({ ...businessState, loading: true })
    try {
      const { content: { result, error } } = await ordering.businesses(businessId).select(businessAttributes).get()
      if (!error) {
        setBusinessState({ ...businessState, business: result, loading: false })
      } else {
        setBusinessState({ ...businessState, business: result[0], loading: false, error })
      }
    } catch (err) {
      setBusinessState({ ...businessState, loading: false, error: err.message })
    }
  }
  /**
   * Method to return business offert to show
   * @param {object} offer
   */
  const getBusinessOffer = (offers) => {
    if (!offers || !offers.length) return null
    const maxOffer = offers.reduce((acc, cur) => (acc.rate > cur.rate) ? acc : cur)
    return maxOffer?.rate_type === 1 ? `${maxOffer?.rate}%` : parsePrice(maxOffer?.rate)
  }
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */
  const getBusinessMaxOffer = (offers) => {
    if (!offers || !offers.length) return null
    const maxOffer = offers.reduce((acc, cur) => (acc.rate > cur.rate) ? acc : cur)
    return maxOffer
  }
  /**
   * Method to format date
   * @param {object} time
   */
  const formatDate = (time) => {
    const formatHour = time?.hour < 10 ? `0${time?.hour}` : time?.hour
    const formatMinute = time?.minute < 10 ? `0${time?.minute}` : time?.minute
    return time ? `${formatHour}:${formatMinute}` : 'none'
  }

  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */
  const formatNumber = (num) => {
    return Math.round(num * 1e2) / 1e2
  }

  /**
   * Method to add favorite info for user from API
   */
  const addFavoriteBusiness = async () => {
    if (!businessState?.business || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))

    try {
      setActionState({ ...actionState, loading: true, error: null })
      const changes = { object_id: businessState?.business?.id }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/users/${user?.id}/favorite_businesses`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateBusinessList && handleUpdateBusinessList(businessState?.business?.id, { favorite: true })
        setBusinessState({
          ...businessState,
          business: {
            ...businessState?.business,
            favorite: true
          }
        })
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
  const deleteFavoriteBusiness = async () => {
    if (!businessState?.business || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))

    try {
      setActionState({ ...actionState, loading: true })
      const response = await fetch(`${ordering.root}/users/${user.id}/favorite_businesses/${businessState?.business?.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateBusinessList && handleUpdateBusinessList(businessState?.business?.id, { favorite: false })
        setBusinessState({
          ...businessState,
          business: {
            ...businessState?.business,
            favorite: false
          }
        })
        showToast(ToastType.Success, t('FAVORITE_REMOVED', 'Favorite removed'))
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
        loading: false,
        error: [error.message]
      })
      showToast(ToastType.Error, [error.message])
    }
  }

  useEffect(() => {
    if (!isDisabledInterval) {
      let timeout = null
      let timeoutCloseSoon = null
      const currentDate = dayjs().tz(businessState.business?.timezone)
      let lapse = null

      if (businessState.business?.today?.enabled) {
        lapse = businessState.business?.today?.lapses?.find(lapse => {
          const from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute)
          const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
          return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix()
        })
      }

      if (lapse) {
        const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
        const timeToClose = (to.unix() - currentDate.unix()) * 1000

        if (timeToClose <= minutesToCloseSoon * 60000 && timeToClose > 0) {
          setBusinessWillCloseSoonMinutes(timeToClose / 60000)
        } else if (timeToClose > minutesToCloseSoon * 60000) {
          timeoutCloseSoon = setTimeout(() => {
            setBusinessWillCloseSoonMinutes(minutesToCloseSoon)
          }, (timeToClose - (minutesToCloseSoon * 60000)))
        }

        timeout = setTimeout(() => {
          setBusinessState({
            ...businessState,
            business: {
              ...businessState.business,
              open: false
            }
          })
          setIsBusinessClose(true)
        }, timeToClose)
      }
      return () => {
        timeout && clearTimeout(timeout)
        timeoutCloseSoon && clearTimeout(timeoutCloseSoon)
      }
    }
  }, [])

  useEffect(() => {
    let timeout = null

    if (businessWillCloseSoonMinutes) {
      timeout = setTimeout(() => {
        setBusinessWillCloseSoonMinutes(businessWillCloseSoonMinutes - 1)
      }, 60000)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [businessWillCloseSoonMinutes])

  useEffect(() => {
    if (business && business?.id !== businessState?.business?.id) {
      setBusinessState({ ...businessState, business })
    } else if (!business) {
      getBusiness()
    }
  }, [])

  const updateBusiness = async (businessId, updateParams = {}) => {
    setBusinessState({ ...businessState, loading: true })
    try {
      const { content: { result, error } } = await ordering.businesses(businessId).save(updateParams)

      if (!error) {
        setBusinessState({ ...businessState, business: result, loading: false })
      } else {
        setBusinessState({ ...businessState, business: result[0], loading: false, error })
      }
    } catch (err) {
      setBusinessState({ ...businessState, loading: false, error: err.message })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          updateBusiness={updateBusiness}
          orderState={orderState}
          isBusinessClose={isBusinessClose}
          businessState={businessState}
          business={businessState.business}
          formatDate={formatDate}
          formatNumber={formatNumber}
          getBusinessOffer={getBusinessOffer}
          getBusinessMaxOffer={getBusinessMaxOffer}
          handleClick={handleCustomClick || onBusinessClick}
          businessWillCloseSoonMinutes={businessWillCloseSoonMinutes}
          addFavoriteBusiness={addFavoriteBusiness}
          deleteFavoriteBusiness={deleteFavoriteBusiness}
        />
      )}
    </>
  )
}

BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business, contains a object with all business properties
   */
  business: PropTypes.object,
  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: PropTypes.number,
  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: PropTypes.arrayOf(PropTypes.string),
  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: PropTypes.func,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  minutesToCloseSoon: 30
}
