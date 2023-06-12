import React from 'react'
import { DateContainer } from './styles'
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export const DatePickerUI = props => {

  const { value, onChange, name} = props

  return (
    <DateContainer>
      <Calendar
        date={value}
        name={name}
        onChange={onChange}
      />
    </DateContainer>
  )
}

DatePickerUI.defaultProps = {
  name: 'date',
}
