import React from 'react'
import { useUtils, useConfig } from 'ordering-components'
import { PersonFill } from 'react-bootstrap-icons'
import {
  EventContainer,
  EventProfessionalPhoto
} from './styles'

export const EventComponent = (props) => {
  const {
    event
  } = props

  const [{ optimizeImage, parseDate }] = useUtils()
  const [{ configs }] = useConfig()

  const getTime = (time) => {
    return parseDate(time, { outputFormat: (configs?.format_time?.value === '12') ? 'hh:mm a' : 'HH:mm' })
  }

  return (
    <EventContainer>
      <EventProfessionalPhoto>
        {event?.professional?.photo ? (
          <img src={optimizeImage(event?.professional?.photo, 'h_40,c_limit')} alt='' />
        ) : (
          <PersonFill />
        )}
      </EventProfessionalPhoto>
      <div className='info'>
        <p className='name'>{event?.professional?.name} {event?.professional?.lastname}</p>
        <p className='date'>
          {getTime(event.start)} - {getTime(event.end)}
        </p>
      </div>
    </EventContainer>
  )
}
