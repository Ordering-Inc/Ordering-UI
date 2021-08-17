import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'
import { useLanguage } from 'ordering-components'
import BiFilterAlt from '@meronex/icons/bi/BiFilterAlt'
import BsSearch from '@meronex/icons/bs/BsSearch'

import {
  BusinessSearch,
  DeleteContent,
  SearchIcon
} from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    isCustomLayout
  } = props
  const [, t] = useLanguage()
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

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessSearch
        className={!isCustomLayout && 'search-bar'}
        isCustomLayout={isCustomLayout}
        hasValue={el.current?.value}
      >
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
        <Input
          ref={el}
          name='search'
          aria-label='search'
          placeholder={placeholder}
          autoComplete='off'
          maxLength='500'
        />
        <DeleteContent>
          {el.current?.value
            ? <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span>
            : <BiFilterAlt />}
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
