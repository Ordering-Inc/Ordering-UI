import React, { useState } from 'react'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components'

import { Tabs, Tab } from '../../styles/Tabs'

import { TypeContainer, ImageContainer } from './styles'
import food from '../../../template/assets/category-food.png'
import groceries from '../../../template/assets/category-groceries.png'
import alcohol from '../../../template/assets/category-alcohol.png'
import laundry from '../../../template/assets/category-laundry.png'
import all from '../../../template/assets/category-all.png'
import { AutoScroll } from '../AutoScroll'

const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const [, t] = useLanguage()
  const images = [{ image: all, value: 'all' }, { image: food, value: 'food' }, { image: groceries, value: 'groceries' }, { image: alcohol, value: 'alcohol' }, { image: laundry, value: 'laundry' }]
  const [load, setLoad] = useState(false)

  return (
    <TypeContainer id='container'>
      <Tabs variant='primary' id='categories'>
        <AutoScroll categories='categories' container='container'>
          {businessTypes && businessTypes.length > 0 && businessTypes.map((type, i) => (
            <Tab className='category' active={type.value === currentTypeSelected} key={type.value}>
              {!type.value || i > (images.length - 1) ? <ImageContainer active={type.value === currentTypeSelected} load={load}><img src={images[0].image} onLoad={() => setLoad(true)} onClick={() => handleChangeBusinessType(type.value)} /></ImageContainer> : ''}
              {images.map(image => (
                <React.Fragment key={image.value}>
                  {image.value === type.value ? <ImageContainer active={type.value === currentTypeSelected} load={load}><img src={image.image} onClick={() => handleChangeBusinessType(type.value)} /></ImageContainer> : ''}
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
