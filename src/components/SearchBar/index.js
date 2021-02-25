import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from 'ordering-components'

import {
  BusinessSearch,
  DeleteContent
} from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    isEnterKeyLoad,
    isCustomMode,
    externalBusinessMap
  } = props
  const [theme] = useTheme()
  const [, t] = useLanguage()
  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (isEnterKeyLoad) {
      if (e.keyCode === 13) {
        onSearch(e.target.value)
      }
    } else {
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
    }
    previousSearch = e.target.value
  }

  const handleClear = () => {
    onSearch('')
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  return (
    <BusinessSearch className={!externalBusinessMap && 'search-bar'} externalBusinessMap={externalBusinessMap} hasValue={el.current?.value}>
      <Input
        ref={el}
        name='search'
        aria-label='search'
        placeholder={placeholder}
        autoComplete='off'
        maxLength='500'
      />
      <DeleteContent>
        {isCustomMode ? (
          <img src={theme?.images?.general?.searchIcon} />
        ) : (
          <>
            {el.current?.value ? <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span> : <img src={theme?.images?.general?.searchIcon} />}
          </>
        )}
      </DeleteContent>

    </BusinessSearch>
  )
}
