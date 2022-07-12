import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'
import { useTheme } from '../../../../../contexts/ThemeContext'
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
    isCustomLayout,
    handleCustomEnter
  } = props
  const [theme] = useTheme()
  const [, t] = useLanguage()
  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (e.keyCode === 13) {
      handleCustomEnter && handleCustomEnter(e.target.value)
      return
    }

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
        if (el.current) {
          el.current.value = e.target.value
        }
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
          if (el.current) {
            el.current.value = e.target.value
          }
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
    if (!search || search === '') {
      el.current.value = ''
    }
  }, [search])

  useEffect(() => {
    if (props.forceFocus) {
      el.current.focus()
    }
  }, [props.forceFocus])

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
          defaultValue={search}
        />
        <DeleteContent className='clear'>
          {el.current?.value && <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span>}
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
