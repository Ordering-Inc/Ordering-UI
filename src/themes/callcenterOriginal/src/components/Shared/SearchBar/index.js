import React, { useRef, useEffect } from 'react'
import { SearchContainer } from './styles'
import IosSearch from '@meronex/icons/ios/IosSearch'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    isCustomLayout,
    lazyLoad,
    customClass
  } = props
  let timeout = null
  let previousSearch
  const el = useRef()

  const onChangeSearch = (e) => {
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      onSearch && onSearch(e.target.value)
    }, 750)

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch && onSearch(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch && onSearch(e.target.value)
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
    <SearchContainer isCustomLayout={isCustomLayout} className={customClass || ''}>
      <IosSearch />
      <input type='text' ref={el} name='search' placeholder={placeholder} autoComplete='off' />
    </SearchContainer>
  )
}
