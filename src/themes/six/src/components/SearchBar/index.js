import React, { useRef, useEffect } from 'react'
import { Input } from '../../styles/Inputs'
import { useLanguage } from 'ordering-components'
import AiOutlineSearch from '@meronex/icons/ai/AiOutlineSearch'
import { Funnel } from 'react-bootstrap-icons'
import {
  BusinessSearch,
  DeleteContent,
  SearchWrapper,
  FunnelWrapper
} from './styles'
export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    isCustomLayout,
    isStarbucks
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
        {el.current?.value && (
          <DeleteContent
            isHome={props.isHome}
            isClear
          >
            <span onClick={handleClear}>{t('CLEAR', 'Clear')}</span>
          </DeleteContent>
        )}
        <SearchWrapper
          isHome={props.isHome}
        >
          <AiOutlineSearch />
        </SearchWrapper>
        {isStarbucks &&
          <FunnelWrapper>
            <Funnel />
          </FunnelWrapper>
        }
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
