import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import { GrDeliver } from 'react-icons/gr'
import { FaTruckPickup, FaCarSide } from 'react-icons/fa'
import { AiFillShop } from 'react-icons/ai'
import { GiFoodTruck } from 'react-icons/gi'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron
} from '../Selects'

export const Select = (props) => {
  const {
    withIcons,
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

  const getIconType = (name = '') => {
    switch (name) {
      case 'pickup':
        return <FaTruckPickup />
      case 'eatin':
        return <AiFillShop />
      case 'curbside':
        return <GiFoodTruck />
      case 'drivethru':
        return <FaCarSide />
      default:
        return <GrDeliver />
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeSelect)
    return () => document.removeEventListener('mousedown', closeSelect)
  }, [open])

  useEffect(() => {
    const _defaultOption = options?.find(option => option.value === defaultValue)
    setSelectedOption(_defaultOption)
    setValue(defaultValue)
  }, [defaultValue, options])

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
        selectedOption && (
          <Selected withIcons={withIcons}>
            {withIcons && getIconType(selectedOption.icon)}
            {selectedOption.showOnSelected || selectedOption.content}
            <Chevron>
              <BsChevronDown />
            </Chevron>
          </Selected>
        )
      }
      {
        open && options && (
          <Options position='right'>
            {
              options.map(option => (
                <Option
                  key={option.value}
                  withIcons={withIcons}
                  selected={value === option.value}
                  onClick={() => handleChangeOption(option)}
                >
                  {withIcons && getIconType(option.icon)}
                  {option.content}
                </Option>
              ))
            }
          </Options>
        )
      }
    </SelectInput>
  )
}
