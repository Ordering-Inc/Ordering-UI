import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

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
    handleChangeFilters
  } = props
  const { loading, error, types } = typesState
  const [, t] = useLanguage()
  const [load, setLoad] = useState(false)

  const handleChangeCategory = (category) => {
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

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {isSearchMode ? (
        <SearchTypeContainer id='container'>
          {types.map((type, i) => type.enabled && (
            <Button
              key={type?.id}
              color={(filters?.business_types?.includes(type?.id) || (type?.id === null && filters?.business_types?.length === 0)) ? 'primary' : 'secondary'}
              onClick={() => handleChangeActiveBusinessType(type)}
            >
              {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)} {filters?.business_types?.includes(type?.id) && 'X'}
            </Button>
          ))}
        </SearchTypeContainer>
      ) : (
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
                {types.map((type, i) => type.enabled && (
                  <Tab
                    key={type.id}
                    active={type.id === currentTypeSelected}
                    className='category'
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
