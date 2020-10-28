import React from 'react'
import { Container } from './styles'
import { MomentControl } from '../MomentControl'

export const MomentContent = (props) => {
  const currentDate = new Date()
  currentDate.setTime(currentDate.getTime() + (6 * 24 * 60 * 60 * 1000))
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const momentProps = {
    maxDate: currentDate
  }

  return (
    <Container>
      <MomentControl {...momentProps} />
    </Container>
  )
}
