import React, { useEffect, useState } from 'react'

import { BsChevronDown } from 'react-icons/bs'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  TextContent
} from '../Selects'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    InitialIcon
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
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(option => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
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
        selectedOption && <Selected InitialIcon={InitialIcon}>{InitialIcon && <InitialIcon />} <TextContent>{selectedOption.showOnSelected || selectedOption.content}</TextContent> <Chevron><BsChevronDown /></Chevron></Selected>
      }
      {
        open && options && (
          <Options position='right'>
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
    </SelectInput>
  )
}
