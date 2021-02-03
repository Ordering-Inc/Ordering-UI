import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'

import {
  BusinessSearch
} from './styles'

export const SearchBar = ({ onSearch, search, placeholder, lazyLoad, externalBusinessMap }) => {
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

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  return (
    <BusinessSearch className={!externalBusinessMap && 'search-bar'} externalBusinessMap={externalBusinessMap}>
      <Input
        ref={el}
        name='search'
        aria-label='search'
        placeholder={placeholder}
        autoComplete='off'
        maxLength='500'
      />
    </BusinessSearch>
  )
}
