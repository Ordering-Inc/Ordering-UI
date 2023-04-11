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
    notAsync,
    notReload,
    autoCloseWhenScroll,
    zIndex
  } = props

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'
  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()
  const [orderState] = useOrder()
  const isOneOption = options?.length === 1
  const handleSelectClick = (e) => {
    !open && setOpen(true)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    const handleCloseSelect = () => setOpen(false)
    document.addEventListener('mouseup', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    if (autoCloseWhenScroll) {
      window.addEventListener('scroll', handleCloseSelect)
    }
    return () => {
      if (autoCloseWhenScroll) {
        window.removeEventListener('scroll', handleCloseSelect)
      }
      document.removeEventListener('mouseup', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
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
    setOpen(false)
  }

  return (
    isOneOption ? (
      <SelectInput isHome={isHome}>
        <Selected>
          <Header>
            {options[0].content}
          </Header>
        </Selected>
      </SelectInput>
    ) : (
      <SelectInput
        id='select-input'
        isHome={isHome}
        disabled={orderState.loading && !notReload}
        onMouseUp={handleSelectClick}
      >
        {!selectedOption && <Selected><Header>{placeholder || ''}</Header><Chevron><BsChevronDown /></Chevron></Selected>}
        {selectedOption && (
          <Selected>
            <Header>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
            <Chevron>
              <BsChevronDown />
            </Chevron>
          </Selected>
        )}
        {open && options && (
          <Options id='list' position='right' ref={dropdownReference} zIndex={zIndex}>
            {
              options.map(option => (
                <Option
                  id='item'
                  key={option.value}
                  selected={value === option.value}
                  onClick={() => handleChangeOption(option)}
                >
                  {option.content}
                </Option>
              ))
            }
          </Options>
        )}
      </SelectInput>
    )
  )
}
