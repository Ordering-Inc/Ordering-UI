import React from 'react'
import { useOrder, useConfig } from 'ordering-components'

import { Container, Layer } from './styles'

import { MomentControl } from '../../../MomentControl/theme/two'
import { SpinnerLoader } from '../../../SpinnerLoader'
import { useWindowSize } from '../../../../hooks/useWindowSize'

export const MomentContent = (props) => {
  const [{ configs }] = useConfig()
  const limitDays = configs?.max_days_preorder?.value
  const [orderState] = useOrder()

  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const momentProps = {
    maxDate: currentDate
  }

  const { width } = useWindowSize()
  const momentControl = document?.getElementById('moment_control')?.getBoundingClientRect()

  return (
    <Container isLoading={orderState?.loading}>
      <MomentControl {...momentProps} />
      {orderState?.loading && (
        <Layer height={momentControl?.height && `${momentControl?.height}px`}>
          {(window.location.pathname !== '/search' || orderState?.options?.address?.location) && (
            <SpinnerLoader
              style={{
                top: width <= 768 ? '50%' : '40%',
                position: width <= 768 ? 'absolute' : 'sticky',
                height: 'auto'
              }}
            />
          )}
        </Layer>
      )}
    </Container>
  )
}
