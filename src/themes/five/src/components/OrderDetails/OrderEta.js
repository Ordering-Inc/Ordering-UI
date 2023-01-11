import React, { useEffect, useState } from 'react'
import { useUtils } from 'ordering-components'
import moment from 'moment'

export const OrderEta = (props) => {
  const {
    order,
    outputFormat
  } = props

  const [{ parseDate }] = useUtils()
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState(null)

  const getEstimatedDeliveryTime = () => {
    let _estimatedTime
    let totalEta = 0
    const _delivery = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc)
      : parseDate(order?.delivery_datetime)
    if (order?.eta_current_status_time) {
      const currentStatueEta = order?.eta_current_status_time
      totalEta += currentStatueEta
      let nextStatusTimes = 0
      if (order?.eta_next_status_times) {
        Object.keys(order.eta_next_status_times).map(key => {
          if (!key.includes('status_penalty')) {
            nextStatusTimes += order.eta_next_status_times[key]
          }
        })
      }

      totalEta += nextStatusTimes

      const currentStatusUpdated = parseDate(order?.reporting_data?.at[`status:${order.status}`])

      const diffTimeAsMinutes = moment(currentStatusUpdated).add(order?.eta_current_status_time, 'minutes').diff(moment().utc(), 'minutes')
      if (diffTimeAsMinutes < 0) {
        totalEta += order?.eta_current_status_penalty_time
      }
      _estimatedTime = parseDate(moment(_delivery).add(totalEta, 'minutes'))
    } else {
      _estimatedTime = parseDate(moment(_delivery).add(order?.eta_time, 'minutes'))
    }
    setEstimatedDeliveryTime(_estimatedTime)
  }

  useEffect(() => {
    getEstimatedDeliveryTime()
    const interval = setInterval(() => {
      getEstimatedDeliveryTime()
    }, 60000)
    return () => clearInterval(interval)
  }, [order])

  return (
    <>
      {!outputFormat ? estimatedDeliveryTime : moment(estimatedDeliveryTime).format(outputFormat)}
    </>
  )
}
