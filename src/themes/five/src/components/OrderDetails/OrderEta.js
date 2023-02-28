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
      ? order?.delivery_datetime_utc
      : order?.delivery_datetime
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

      const diffTimeAsSeconds = moment.utc(order?.reporting_data?.at[`status:${order.status}`]).add(order?.eta_current_status_time, 'minutes').diff(moment().utc(), 'seconds')
      const diffTimeAsMinutes = Math.ceil(diffTimeAsSeconds / 60)
      if (diffTimeAsMinutes <= 0) {
        totalEta += (Math.floor(Math.abs(diffTimeAsMinutes / order?.eta_current_status_time) + 1) * order?.eta_current_status_penalty_time)
      }
      _estimatedTime = moment.utc(_delivery).add(totalEta, 'minutes')
    } else {
      _estimatedTime = moment.utc(_delivery).add(order?.eta_time, 'minutes')
    }
    _estimatedTime = outputFormat ? moment(_estimatedTime).format(outputFormat) : parseDate(_estimatedTime, { utc: false })
    setEstimatedDeliveryTime(_estimatedTime)
  }

  useEffect(() => {
    getEstimatedDeliveryTime()
    const interval = setInterval(() => {
      getEstimatedDeliveryTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [order, outputFormat])

  return (
    <>
      {estimatedDeliveryTime}
    </>
  )
}
