import React, { useEffect, useRef, useState } from 'react'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'
import MdClose from '@meronex/icons/md/MdClose'
import { Button } from '../Buttons'

import {
  Select as SelectInput,
  Selected,
  Options,
  OptionsInner,
  MultiOption,
  Chevron,
  Header,
  MultiSelectOption
} from '../DashboardSelects'

import {
  CheckBox
} from './styles'

export const MultiSelect = (props) => {
  const { placeholder, options, onChange, defaultValue, className } = props

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    const isInvalid = e.target.closest('.remove_option')
    if (isInvalid) return
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
    const _defaultOption = options?.filter(
      (option) => defaultValue.includes(option.value)
    )
    setSelectedOptions(_defaultOption)
    setValues(defaultValue)
  }, [defaultValue, options])

  useEffect(() => {
    if (!open) return
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [open])

  const handleSelectOption = (option) => {
    if (option.value === null || option.value === 'default') return
    const _selectedOptions = [...selectedOptions]
    const _values = [...values]
    if (!_values.includes(option.value)) {
      _values.push(option.value)
      _selectedOptions.push(option)
    } else {
      for (let i = 0; i < _values.length; i++) {
        if (_values[i] === option.value) {
          _values.splice(i, 1)
          _selectedOptions.splice(i, 1)
          i--
        }
      }
    }
    setSelectedOptions(_selectedOptions)
    setValues(_values)
    onChange && onChange(option.value)
  }

  return (
    <SelectInput className={className || 'multi-select'}>
      {selectedOptions.length === 0 ? (
        <Selected onClick={(e) => handleSelectClick(e)}>
          {placeholder || ''}
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      ) : (
        <Selected onClick={(e) => handleSelectClick(e)}>
          <Header>
            {selectedOptions.map((selectedOption) => (
              <React.Fragment key={selectedOption.value}>
                <MultiSelectOption>
                  {selectedOption.showOnSelected || selectedOption.content}
                  <Button
                    circle
                    outline
                    color='primary'
                    type='reset'
                    className='remove_option'
                    onClick={() => onChange && onChange(selectedOption.value)}
                  >
                    <MdClose />
                  </Button>
                </MultiSelectOption>
              </React.Fragment>
            ))}
          </Header>
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      )}
      {open && options && (
        <Options
          isAbsolute
          position='right'
          ref={dropdownReference}
        >
          <OptionsInner
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight}
          >
            {options.map((option, i) => (
              <MultiOption
                key={i}
                color={option.color}
                onClick={() => handleSelectOption(option)}
                optionBottomBorder={props.optionBottomBorder}
              >
                {option.value !== 'default' && (
                  <CheckBox>
                    {values.includes(option.value)
                      ? <CheckSquareFill />
                      : <Square />}
                  </CheckBox>
                )}
                {option.content}
              </MultiOption>
            ))}
          </OptionsInner>
        </Options>
      )}
    </SelectInput>
  )
}
