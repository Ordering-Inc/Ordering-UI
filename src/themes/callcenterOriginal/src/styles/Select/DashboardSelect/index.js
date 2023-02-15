import React, { useRef, useEffect, useState } from 'react'
import { useSession } from 'ordering-components'
import { usePopper } from 'react-popper'
import { CaretDownFill } from 'react-bootstrap-icons'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'
import { SearchBar } from '../../../components/Shared'

import {
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header,
  SearchBarWrapper
} from '../../DashboardSelects'

import {
  HeaderItem,
  PopoverBody
} from './styles'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    noSelected,
    isSecondIcon,
    isShowSearchBar,
    searchValue,
    handleChangeSearch,
    searchBarIsCustomLayout,
    searchBarPlaceholder,
    searchBarIsNotLazyLoad,
    className
  } = props
  const defaultOption = options?.find(
    (option) => option.value === defaultValue
  )
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)

  const [open, setOpen] = useState(false)
  const [sessionState] = useSession()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, update } = popper

  useEffect(() => {
    update && update()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      if (isShowSearchBar) {
        handleChangeSearch('')
      }
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
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
    if (option.value === null || option.disabled) return
    if (!noSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
  }

  const handleClickHeader = (e) => {
    if (e.target.closest('.open-disabled')) return
    setOpen(!open)
  }

  const popStyle = { ...styles.popper, display: open ? 'block' : 'none', minWidth: referenceElement?.current?.offsetWidth || '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }} className={className || 'select-wrapper'}>
      <HeaderItem
        className='select'
        ref={referenceElement}
        onClick={(e) => handleClickHeader(e)}
      >
        {!selectedOption && (
          <Selected>
            {placeholder || ''}
            <Chevron>
              {isSecondIcon ? <FiChevronDown /> : <CaretDownFill />}
            </Chevron>
          </Selected>
        )}
        {selectedOption && (
          <Selected>
            <Header>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
            <Chevron>
              {isSecondIcon ? <FiChevronDown /> : <CaretDownFill />}
            </Chevron>
          </Selected>
        )}
      </HeaderItem>
      <PopoverBody className='list' ref={popperElement} style={popStyle} {...attributes.popper}>
        <Options className='options'>
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
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight}
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
              </Option>
            ))}
          </OptionsInner>
        </Options>
      </PopoverBody>
    </div>
  )
}
