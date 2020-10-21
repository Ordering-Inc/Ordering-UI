import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  Header
} from '../Selects'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync
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
        selectedOption && (
          <Selected>
            <Header>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
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
                  selected={value === option.value}
                  onClick={() => handleChangeOption(option)}
                >
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
