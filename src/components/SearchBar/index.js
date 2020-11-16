import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'

import {
  BusinessSearch
} from './styles'

export const SearchBar = ({ onSearch, search, placeholder }) => {
  let timeout = null

  const el = useRef()

  const onChangeSearch = e => {
    if (e.keyCode === 13) return

    clearTimeout(timeout)

    timeout = setTimeout(function () {
      onSearch(e.target.value)
    }, 1000)
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
    <BusinessSearch>
      <Input
        ref={el}
        name='search'
        aria-label='search'
        placeholder={placeholder}
      />
    </BusinessSearch>
  )
}
