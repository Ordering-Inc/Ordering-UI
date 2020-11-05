import React, { useEffect, useRef, useState } from 'react'
import { useOrder } from 'ordering-components'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown'

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

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'
  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()
  const [orderState] = useOrder()

  const handleSelectClick = (e) => {
    setOpen(!open)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', closeSelect)
    return () => document.removeEventListener('mouseup', closeSelect)
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
    <SelectInput
      isHome={isHome}
      disabled={orderState.loading}
      onClick={handleSelectClick}
    >
      {
        !selectedOption && <Selected>{placeholder || ''}<Chevron><BsChevronDown /></Chevron></Selected>
      }
      {
        selectedOption && (
          <Selected>
            <Header>
              {!orderState.loading ? selectedOption.showOnSelected || selectedOption.content : '...'}
            </Header>
            <Chevron>
              <BsChevronDown />
            </Chevron>
          </Selected>
        )
      }
      {
        open && options && (
          <Options position='right' ref={dropdownReference}>
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
