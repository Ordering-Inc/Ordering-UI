import React, { useState } from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer, ImageContainer } from './styles'
import { AutoScroll } from '../AutoScroll'
import { useTheme } from 'styled-components'

const BusinessTypeFilterUI = (props) => {
  const {
    images,
    businessTypes,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const [, t] = useLanguage()
  const [load, setLoad] = useState(false)

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <TypeContainer id='container'>
        <Tabs variant='primary'>
          <AutoScroll>
            {businessTypes && businessTypes.length > 0 && businessTypes.map((type, i) => (
              <Tab className='category' active={type.value === currentTypeSelected} key={type.value}>
                {!type.value || i > (images.length - 1) ? (
                  <ImageContainer active={type.value === currentTypeSelected} load={load}>
                    <img
                      src={images[0].image}
                      alt='all'
                      onLoad={() => setLoad(true)}
                      onClick={() => handleChangeBusinessType(type.value)}
                      width='150px'
                      height='150px'
                      loading='lazy'
                    />
                  </ImageContainer>)
                  : ''}
                {images.map(image => (
                  <React.Fragment key={image.value}>
                    {image.value === type.value ? (
                      <ImageContainer active={type.value === currentTypeSelected} load={load}>
                        <img
                          src={image.image}
                          alt={type.value}
                          onClick={() => handleChangeBusinessType(type.value)}
                          width='150px'
                          height='150px'
                          loading='lazy'
                        />
                      </ImageContainer>)
                      : ''}
                  </React.Fragment>
                )
                )}
                {t(`BUSINESS_TYPE_${type.value ? type.value.toUpperCase() : 'ALL'}`, type.key)}
              </Tab>
            ))}
          </AutoScroll>
        </Tabs>
      </TypeContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

export const BusinessTypeFilter = (props) => {
  const theme = useTheme()
  const businessTypeFilterProps = {
    ...props,
    UIComponent: BusinessTypeFilterUI,
    businessTypes: props.businessTypes || [
      { key: 'All', value: null },
      { key: 'Food', value: 'food' },
      { key: 'Alcohol', value: 'alcohol' },
      { key: 'Groceries', value: 'groceries' },
      { key: 'Laundry', value: 'laundry' }
    ],
    images: props.images || [
      { image: theme.images?.categories?.all, value: 'all' },
      { image: theme.images?.categories?.food, value: 'food' },
      { image: theme.images?.categories?.groceries, value: 'groceries' },
      { image: theme.images?.categories?.alcohol, value: 'alcohol' },
      { image: theme.images?.categories?.laundry, value: 'laundry' }
    ],
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
