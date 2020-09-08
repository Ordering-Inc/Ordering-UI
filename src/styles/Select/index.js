import React, { useEffect, useState } from 'react'

import { BsChevronDown } from 'react-icons/bs'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron
} from '../Selects'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange
  } = props
  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const handleSelectClick = (e) => {
    setOpen(!open)
  }

  const closeSelect = (e) => {
    if (open) {
      if (!e.target.classList.contains(Selected.styledComponentId) && !e.target.classList.contains(Option.styledComponentId)) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeSelect)
    return () => document.removeEventListener('mousedown', closeSelect)
  })

  const handleChangeOption = (option) => {
    setSelectedOption(option)
    setValue(option.value)
    onChange && onChange(option.value)
  }

  return (
    <SelectInput onClick={handleSelectClick}>
      {
        !selectedOption && <Selected>{placeholder || ''}<Chevron><BsChevronDown /></Chevron></Selected>
      }
      {
        selectedOption && <Selected>{selectedOption.showOnSelected || selectedOption.content}<Chevron><BsChevronDown /></Chevron></Selected>
      }
      {
        open && options && (
          <Options>
            {
              options.map(option => (
                <Option key={option.value} onClick={() => handleChangeOption(option)} selected={value === option.value}>
                  {option.content}
                </Option>
              ))
            }
          </Options>
        )
      }
      {/* {
        open && (
          <Options>
            <Option selected><FaMotorcycle /> Delivery</Option>
            <Option><FaCarSide /> Pickup</Option>
            <Option><FaStore /> Eat in</Option>
            <Option><FaParking /> Curbside</Option>
            <Option><FaRoad /> Drive thru</Option>
          </Options>
        )
      } */}
    </SelectInput>
  )
}
