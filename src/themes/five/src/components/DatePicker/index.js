import React from 'react'
import DatePicker from 'react-datepicker'
import { DateContainer } from './styles'

export const DatePickerUI = props => {

  const { birthdate, handleChangeDate } = props

  return (
    <DateContainer>
      <DatePicker
        selected={birthdate}
        placeholderText='yyyy/mm/dd'
        className='date'
        name='birthdate'
        onChange={handleChangeDate}
      />
    </DateContainer>
  )
}
