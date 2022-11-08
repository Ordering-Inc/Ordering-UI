import React, { useRef, useEffect } from 'react'
import { Input } from '../../styles/Inputs'
import { useTheme } from '../../../../../contexts/ThemeContext'
import { useLanguage } from 'ordering-components'
import AiOutlineSearch from '@meronex/icons/ai/AiOutlineSearch'
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
        disablePadding={props.disablePadding}
      >
        <Input
          ref={el}
          name='search'
          aria-label='search'
          id='select-input'
          placeholder={placeholder}
          isCustomLayout={isCustomLayout}
          autoComplete='off'
          maxLength='500'
        />
        <DeleteContent
          isHome={props.isHome}
        >
          {el.current?.value
            ? <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span>
            : <AiOutlineSearch />}
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
