import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'

import {
  BackFilterView
} from './styles'

const FilterViewBackButtonUI = (props) => {
  const {
    handleChangeOrderType,
    typeSelected,
    handleCustomClick
  } = props
  const [, t] = useLanguage()

  const handleFilterViewBack = () => {
    handleCustomClick && handleCustomClick()
    if (typeSelected !== 1) {
      handleChangeOrderType(1)
    }
  }

  return (
    typeSelected !== undefined && (
      <BackFilterView>
        <span onClick={() => handleFilterViewBack()}>
          <EnChevronLeft />
          {t('BACK', ' Back')}
        </span>
      </BackFilterView>
    )
  )
}

export const FilterViewBackButton = (props) => {
  const [, t] = useLanguage()
  const orderTypeProps = {
    ...props,
    UIComponent: FilterViewBackButtonUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        content: t('PICKUP', 'Pickup')
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}
