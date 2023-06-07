import React from 'react'
import DatePicker from 'react-datepicker'
import { DateContainer } from './styles'

export const DatePickerUI = props => {

  const { value, onChange, placeholderText, name} = props

  return (
    <DateContainer>
      <DatePicker
        selected={value}
        placeholderText={placeholderText}
        name={name}
        onChange={onChange}
      />
    </DateContainer>
  )
}

DatePickerUI.defaultProps = {
  placeholderText: 'yyyy/mm/dd',
  name: 'date',
}
