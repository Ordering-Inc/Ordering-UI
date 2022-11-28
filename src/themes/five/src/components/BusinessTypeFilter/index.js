import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { XLg as Close } from 'react-bootstrap-icons'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer, BusinessCategoryTitle, Divider, SearchTypeContainer } from './styles'
import { AutoScroll } from '../../../../../components/AutoScroll'
import { Button } from '../../styles/Buttons'

const BusinessTypeFilterUI = (props) => {
  const {
    typesState,
    currentTypeSelected,
    handleChangeBusinessType,
    isSearchMode,
    filters,
    handleChangeFilters,
    isAppoint
  } = props
  const { loading, error, types } = typesState
  const [, t] = useLanguage()
  const [load, setLoad] = useState(false)
  const theme = useTheme()
  const isCategoriesHidden = theme?.business_listing_view?.components?.categories?.hidden

  const handleChangeCategory = (category) => {
    if (isAppoint && category === currentTypeSelected && !isCategoriesHidden) {
      handleChangeBusinessType(null)
      return
    }
    handleChangeBusinessType && handleChangeBusinessType(category)
  }

  const handleChangeActiveBusinessType = (type) => {
    if (type?.id === null) {
      handleChangeFilters('business_types', [])
      return
    }
    if (filters?.business_types?.includes(type?.id)) {
      const arrayAux = filters?.business_types
      const index = arrayAux?.indexOf(type?.id)
      arrayAux.splice(index, 1)
      handleChangeFilters('business_types', arrayAux)
    } else {
      handleChangeFilters('business_types', [...filters?.business_types, type?.id])
    }
  }

  useEffect(() => {
    if (isCategoriesHidden && currentTypeSelected === null) {
      if (types && types?.length > 0) {
        (!isSearchMode && !isAppoint) && handleChangeCategory(types[1]?.id)
      }
    }
  }, [types, currentTypeSelected])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {isSearchMode && (
        <SearchTypeContainer id='container'>
          {types.map((type, i) => type.enabled && (
            <Button
              key={type?.id}
              color={(filters?.business_types?.includes(type?.id) || (type?.id === null && filters?.business_types?.length === 0)) ? 'primary' : 'lightGray'}
              onClick={() => handleChangeActiveBusinessType(type)}
            >
              {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)} {filters?.business_types?.includes(type?.id) && <Close />}
            </Button>
          ))}
        </SearchTypeContainer>
      )}
      {isAppoint && (
        <SearchTypeContainer id='container'>
          {loading ? (
            [...Array(6)].map((_, i) => (
              <Skeleton id='skeleton' key={i} height={28} width={70} />
            ))
          ) : (
            types.map((type, i) => type.enabled && (
              <Button
                key={type?.id}
                color={(type.id === currentTypeSelected) ? 'primary' : 'lightGray'}
                onClick={() => handleChangeCategory(type.id)}
              >
                {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)} {(currentTypeSelected && (type.id === currentTypeSelected)) && <Close />}
              </Button>
            ))
          )}
        </SearchTypeContainer>
      )}
      {(!isSearchMode && !isAppoint) && (
        <TypeContainer id='container'>
          {loading && (
            <Tabs variant='primary'>
              <AutoScroll>
                <Tab className='category' style={styles.wrapperSkeleton}>
                  {[...Array(4)].map((_, i) => (
                    <Skeleton id='skeleton' key={i} height={40} width={120} />
                  ))}
                </Tab>
              </AutoScroll>
            </Tabs>
          )}
          {!loading && !error && types && types.length > 0 && (
            <Tabs variant='primary'>
              <AutoScroll>
                {types.map((type, i) => (isCategoriesHidden ? type.enabled && type.name !== 'All' : type.enabled) && (
                  <Tab
                    key={type.id}
                    active={type.id === currentTypeSelected || i === 0}
                  >
                    <BusinessCategoryTitle
                      active={type.id === currentTypeSelected}
                      load={load}
                      onLoad={() => setLoad(true)}
                      onClick={() => handleChangeCategory(type.id)}
                    >
                      {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)}
                    </BusinessCategoryTitle>
                  </Tab>
                ))}
              </AutoScroll>
            </Tabs>
          )}
          <Divider />
        </TypeContainer>
      )}
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}

const styles = {
  wrapperSkeleton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}

export const BusinessTypeFilter = (props) => {
  const businessTypeFilterProps = {
    ...props,
    UIComponent: BusinessTypeFilterUI,
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
