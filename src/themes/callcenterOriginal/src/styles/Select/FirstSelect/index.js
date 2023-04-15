import React, { useEffect, useRef, useState } from 'react'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'
import BsTrash from '@meronex/icons/bs/BsTrash'
import {
  Select as SelectInput,
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header,
  FunctionalityContainer,
  SearchBarWrapper
} from '../../DashboardSelects'
import { Button } from '../../Buttons'
import { useLanguage } from 'ordering-components'
import { SearchBar } from '../../../components/Shared'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    type,
    noSelected,
    className,
    onEdit,
    onDelete,
    isShowSearchBar,
    searchValue,
    handleChangeSearch,
    searchBarIsCustomLayout,
    searchBarPlaceholder,
    searchBarIsNotLazyLoad,
    isDisabled,
    position
  } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(
    (option) => option.value === defaultValue
  )
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const [, t] = useLanguage()
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    if (e.target.closest('.react-datepicker-wrapper') || e.target.closest('.react-datepicker')) return
    setOpen(!open)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        if (isShowSearchBar) {
          handleChangeSearch('')
        }
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [open])

  useEffect(() => {
    if (isShowSearchBar && searchValue) return
    if (!notAsync) {
      const _defaultOption = options?.find(
        (option) => option.value === defaultValue
      )
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options, searchValue])

  const handleChangeOption = (e, option) => {
    if (e.target.closest('.disabled') === null) setOpen(!open)
    if (option.value === null || option.disabled || e.target.closest('.delete') !== null || e.target.closest('.edit') !== null) return
    if (!noSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
  }

  return (
    <SelectInput type={type} className={className || 'select'} isDisabled={isDisabled}>
      {!selectedOption && (
        <Selected onClick={handleSelectClick} isDisabled={isDisabled}>
          {placeholder || ''}
          <Chevron className='select-arrow'>
            <FiChevronDown />
          </Chevron>
        </Selected>
      )}
      {selectedOption && (
        <Selected onClick={handleSelectClick} isDisabled={isDisabled}>
          <Header>
            {selectedOption.showOnSelected || selectedOption.content}
          </Header>
          <Chevron>
            <FiChevronDown />
          </Chevron>
        </Selected>
      )}
      {open && options && (
        <Options
          className='list'
          isAbsolute
          position={position || 'right'}
          ref={dropdownReference}
        >
          {isShowSearchBar && (
            <SearchBarWrapper
              className='search-bar-container'
            >
              <SearchBar
                lazyLoad={!searchBarIsNotLazyLoad}
                isCustomLayout={searchBarIsCustomLayout}
                search={searchValue}
                onSearch={handleChangeSearch}
                placeholder={searchBarPlaceholder || ''}
              />
            </SearchBarWrapper>
          )}
          <OptionsInner
            className='list-wrapper'
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight || 'initial'}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                selected={value === option.value}
                color={option.color}
                onClick={(e) => handleChangeOption(e, option)}
                optionBottomBorder={props.optionBottomBorder}
                disabled={option.disabled}
                showDisable={option?.showDisable}
                className={option.disabled ? 'disabled' : null}
              >
                {option.content}
                {(option.editFunctionality || option.deleteFunctionality) && (
                  <FunctionalityContainer disabled={value === option.value}>
                    {option.editFunctionality && (
                      <Button
                        borderRadius='8px'
                        color='lightPrimary'
                        onClick={() => onEdit(option, i)}
                        className='edit'
                      >
                        {t('EDIT', 'Edit')}
                      </Button>
                    )}
                    {option.deleteFunctionality && (
                      <BsTrash className='delete' onClick={() => onDelete(option.value)} />
                    )}
                  </FunctionalityContainer>
                )}
              </Option>
            ))}
          </OptionsInner>
        </Options>
      )}
    </SelectInput>
  )
}
