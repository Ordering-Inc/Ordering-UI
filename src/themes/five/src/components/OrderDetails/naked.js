import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import {
  useSession,
  useApi,
  useWebsocket,
  useToast,
  ToastType,
  useLanguage
} from 'ordering-components'

export const OrderDetails = (props) => {
  const {
    orderId,
    hashKey,
    UIComponent,
    userCustomerId,
    driverAndBusinessId,
    sendCustomMessage,
    isDisabledOrdersRoom
  } = props

  const [{ user, token, loading }] = useSession()
  const accessToken = props.accessToken || token
  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [orderState, setOrderState] = useState({ order: null, businessData: {}, driversGroupsData: [], loading: !props.order, error: null })
  const [messageErrors, setMessageErrors] = useState({ status: null, loading: false, error: null })
  const [messages, setMessages] = useState({ loading: true, error: null, messages: [] })
  const socket = useWebsocket()
  const [driverLocation, setDriverLocation] = useState(props.order?.driver?.location || orderState.order?.driver?.location || null)
  const [messagesReadList, setMessagesReadList] = useState(false)

  const propsToFetch = ['header', 'slug']

  const requestsState = {}

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => price && `$ ${price.toFixed(2)}`

  /**
   * Method to Load message for first time
   */
  const loadMessages = async () => {
    try {
      setMessages({ ...messages, loading: true })
      const url = (userCustomerId || driverAndBusinessId)
        ? `${ordering.root}/orders/${orderState.order?.id}/messages?mode=dashboard`
        : `${ordering.root}/orders/${orderState.order?.id}/messages`
      const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          messages: result,
          loading: false,
          error: null
        })
      } else {
        setMessages({
          ...messages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setMessages({ ...messages, loading: false, error: [error.Messages] })
    }
  }

  /**
   * Method to send a message
   * @param {string} spot
   */
  const sendMessage = async (spot) => {
    if (sendCustomMessage) {
      return sendCustomMessage(spot)
    }
    try {
      setMessageErrors({
        ...messageErrors,
        loading: true
      })
      const { status } = await fetch(`${ordering.root}/orders/${orderState.order?.id}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: orderState.order?.id,
          type: 2
        })
      })
      setMessageErrors({
        ...messageErrors,
        loading: false,
        status
      })
    } catch (e) {
      setMessageErrors({
        ...messageErrors,
        loading: false,
        error: [e.message]
      })
    }
  }

  /**
   * Method to update differents orders status
  */
  const handleChangeOrderStatus = async (status, isAcceptOrReject = {}) => {
    try {
      let bodyToSend
      if (Object.keys(isAcceptOrReject).length > 0) {
        bodyToSend = isAcceptOrReject
      } else {
        bodyToSend = { status }
      }
      setOrderState({ ...orderState, loading: true })
      const { content: { result, error } } = await ordering.setAccessToken(token).orders(orderId).save(bodyToSend)

      if (!error) {
        setOrderState({ ...orderState, order: result, loading: false })
      }

      if (error) {
        setOrderState({ ...orderState, error: result[0], loading: false })
        showToast(ToastType.Error, t(result[0], result[0]))
      }
    } catch (err) {
      setOrderState({ ...orderState, loading: false, error: err.message })
    }
  }

  /**
     * Method to assign a driver for order
  */
  const handleAssignDriver = async (e) => {
    try {
      const bodyToSend = { driver_id: e }
      setOrderState({ ...orderState, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(token).orders(orderId).save(bodyToSend)
      if (!error) {
        setOrderState({ ...orderState, order: result, loading: false })
      }

      if (error) {
        setOrderState({ ...orderState, error: result[0], loading: false })
        showToast(ToastType.Error, t(result[0], result[0]))
      }
    } catch (err) {
      setOrderState({ ...orderState, loading: false, error: err.message })
    }
  }

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    const source = {}
    requestsState.order = source
    requestsState.business = source
    const options = {}
    if (hashKey) {
      options.headers = {
        'X-uuid-access-X': hashKey
      }
    }
    if (userCustomerId || driverAndBusinessId) {
      options.query = {
        mode: 'dashboard'
      }
    }

    try {
      const { content: { error, result } } = await ordering.setAccessToken(token).orders(orderId).get({ ...options, cancelToken: source })
      const order = error ? null : result
      const err = error ? result : null
      let businessData = null
      let driversGroupsData = {}
      try {
        const { content } = await ordering.setAccessToken(token).businesses(order.business_id).select(propsToFetch).get({ cancelToken: source })
        businessData = content.result
        content.error && err.push(content.result[0])
      } catch (e) {
        err.push(e.message)
      }
      if (user.level === 2 && order.delivery_type === 1) {
        console.log(user)
        console.log(order)
        try {
          const { response: { data } } = await ordering.setAccessToken(token).controls(orderId).get()

          if (data.error) {
            showToast(ToastType.Error, t(`${data.result[0]}`, `${data.result[0]}`))
            return
          }
          driversGroupsData = data.result.drivers
        } catch (e) {
          err.push(e.message)
        }
      }
      setOrderState({
        ...orderState,
        loading: false,
        order,
        businessData,
        driversGroupsData,
        error: err
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: e.message ? orderState.error?.push(e?.message) : ['ERROR']
      })
    }
  }

  const readMessages = async () => {
    const messageId = messages?.messages[messages?.messages?.length - 1]?.id
    try {
      const response = await fetch(`${ordering.root}/orders/${orderState.order?.id}/messages/${messageId}/read`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const { result } = await response.json()

      setMessagesReadList(result)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    !orderState.loading && loadMessages()
  }, [orderId, orderState?.order?.status, orderState.loading])

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }

    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
      if (requestsState.business) {
        requestsState.business.cancel()
      }
    }
  }, [])

  useEffect(() => {
    if (orderState.loading || loading) return
    const handleUpdateOrder = (order) => {
      if (order?.id !== orderState.order?.id) return
      showToast(ToastType.Info, t('UPDATING_ORDER', 'Updating order...'))
      delete order.total
      delete order.subtotal
      setOrderState({
        ...orderState,
        order: Object.assign(orderState.order, order)
      })

      loadMessages()
    }
    const handleTrackingDriver = ({ location }) => {
      const newLocation = location ?? { lat: -37.9722342, lng: 144.7729561 }
      setDriverLocation(newLocation)
    }
    if(!isDisabledOrdersRoom) socket.join(`orders_${userCustomerId || user?.id}`)
    socket.join(`drivers_${orderState.order?.driver_id}`)
    socket.on('tracking_driver', handleTrackingDriver)
    socket.on('update_order', handleUpdateOrder)
    return () => {
      if(!isDisabledOrdersRoom)  socket.leave(`orders_${userCustomerId || user?.id}`)
      socket.leave(`drivers_${orderState.order?.driver_id}`)
      socket.off('update_order', handleUpdateOrder)
      socket.off('tracking_driver', handleTrackingDriver)
    }
  }, [orderState.order, socket, loading, userCustomerId])

  useEffect(() => {
    if (messages.loading) return
    const handleNewMessage = (message) => {
      const found = messages.messages.find(_message => _message.id === message.id)
      if (!found) {
        setMessages({
          ...messages,
          messages: [...messages.messages, message]
        })
      }
    }
    socket.on('message', handleNewMessage)
    return () => {
      socket.off('message', handleNewMessage)
    }
  }, [messages, socket, orderState.order?.status, userCustomerId])

  useEffect(() => {
    socket.join(`messages_orders_${userCustomerId || user?.id}`)
    return () => {
      socket.leave(`messages_orders_${userCustomerId || user?.id}`)
    }
  }, [socket, userCustomerId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          driverLocation={driverLocation}
          messageErrors={messageErrors}
          formatPrice={formatPrice}
          handleAssignDriver={handleAssignDriver}
          handlerSubmit={handlerSubmitSpotNumber}
          handleChangeOrderStatus={handleChangeOrderStatus}
          messages={messages}
          setMessages={setMessages}
          readMessages={readMessages}
          messagesReadList={messagesReadList}
        />
      )}
    </>
  )
}

OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
