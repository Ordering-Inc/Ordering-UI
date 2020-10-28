import React from 'react'
import { useOrder } from 'ordering-components'

import { Container, Layer } from './styles'

import { MomentControl } from '../MomentControl'
import { SpinnerLoader } from '../SpinnerLoader'
import { useWindowSize } from '../../hooks/useWindowSize'

export const MomentContent = (props) => {
  const [orderState] = useOrder()
  const currentDate = new Date()
  currentDate.setTime(currentDate.getTime() + (6 * 24 * 60 * 60 * 1000))
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
          <SpinnerLoader
            style={{
              top: width <= 768 ? '50%' : '40%',
              position: width <= 768 ? 'absolute' : 'sticky',
              height: 'auto'
            }}
          />
        </Layer>
      )}
    </Container>
  )
}
