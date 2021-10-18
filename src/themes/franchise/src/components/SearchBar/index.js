import React, { useRef, useEffect, useState } from 'react'

import { Input } from '../../styles/Inputs'
import { useTheme } from '../../../../../contexts/ThemeContext'
import { useLanguage } from 'ordering-components'
import BsFunnel from '@meronex/icons/bs/BsFunnel'

import {
  BusinessSearch,
  DeleteContent,
  SortList,
  SortItem,
  SortWrapper
} from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    isCustomLayout,
    isFilter,
    handleChangeSortBy,
    sortByOptions,
    defaultValue
  } = props
  const [theme] = useTheme()
  const [, t] = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (e.keyCode === 13) return

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  const handleClear = () => {
    onSearch('')
  }

  const handleClickOutside = (e) => {
    if (!isOpen) return
    const outsideCalendar = !document.getElementById('sortIcon').contains(e.target)
    if (outsideCalendar) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {
        props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessSearch
        className={!isCustomLayout && 'search-bar'}
        isCustomLayout={isCustomLayout}
        hasValue={el.current?.value}
      >
        <Input
          ref={el}
          name='search'
          aria-label='search'
          placeholder={placeholder}
          autoComplete='off'
          maxLength='500'
          style={{ backgroundImage: `url(${theme?.images?.general?.searchIcon})` }}
        />
        <DeleteContent>
          {el.current?.value && !isFilter && <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span>}
          {isFilter && (
            <SortWrapper>
              <BsFunnel onClick={() => setIsOpen(!isOpen)} id='sortIcon' />
              {isOpen && (
                <SortList>
                  {sortByOptions && sortByOptions.map((item, i) => (
                    <SortItem
                      key={i}
                      onClick={() => handleChangeSortBy(item.value)}
                      active={defaultValue === item.value}
                    >
                      {item.content}
                    </SortItem>
                  ))}
                </SortList>
              )}

            </SortWrapper>
          )}
        </DeleteContent>
      </BusinessSearch>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
