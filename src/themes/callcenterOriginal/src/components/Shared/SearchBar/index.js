import React, { useRef, useEffect } from 'react'
import { SearchContainer } from './styles'
import { Search, XCircle } from 'react-bootstrap-icons'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    customClass
  } = props

  let timeout = null
  let previousSearch
  const el = useRef()

  const onChangeSearch = (e) => {
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      onSearch(e.target.value)
    }, 750)

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
    el.current.value = ''
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
    <SearchContainer className={customClass || ''}>
      <input type='text' ref={el} name='search' placeholder={placeholder} autoComplete='off' />
      {el.current?.value
        ? <XCircle className='close' onClick={handleClear} />
        : <Search />}
    </SearchContainer>
  )
}
