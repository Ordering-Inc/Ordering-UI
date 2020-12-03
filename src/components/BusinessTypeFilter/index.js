import React, { useState } from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer, ImageContainer } from './styles'
import { AutoScroll } from '../AutoScroll'
import { useTheme } from 'styled-components'

const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const images = [
    { image: theme.images?.categories?.all, value: 'all' },
    { image: theme.images?.categories?.food, value: 'food' },
    { image: theme.images?.categories?.groceries, value: 'groceries' },
    { image: theme.images?.categories?.alcohol, value: 'alcohol' },
    { image: theme.images?.categories?.laundry, value: 'laundry' }
  ]
  const [load, setLoad] = useState(false)

  return (
    <TypeContainer id='container'>
      <Tabs variant='primary' id='categories'>
        <AutoScroll categories='categories' container='container'>
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
  )
}

export const BusinessTypeFilter = (props) => {
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
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
