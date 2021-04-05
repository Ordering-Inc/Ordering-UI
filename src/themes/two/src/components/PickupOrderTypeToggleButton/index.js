import React, { useEffect } from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'

import { Button } from '../../styles/Buttons'

const PickupOrderTypeToggleButtonUI = (props) => {
  const {
    initialOrderType,
    handleChangeOrderType,
    typeSelected,
    handleCustomClick
  } = props
  const [, t] = useLanguage()

  const handlePickupToggle = () => {
    handleCustomClick && handleCustomClick()
    if (typeSelected !== 2) {
      handleChangeOrderType(2)
    } else if (typeSelected === 2) {
      handleChangeOrderType(1)
    }
  }

  useEffect(() => {
    if (!initialOrderType) return
    handleChangeOrderType(initialOrderType)
  }, [initialOrderType])

  return (
    typeSelected !== undefined && (
      <>
        <Button
          color={typeSelected === 2 ? 'dark' : 'secondary'}
          onClick={() => handlePickupToggle()}
        >
          {t('PICKUP', 'Pickup')}
        </Button>
      </>
    )
  )
}

export const PickupOrderTypeToggleButton = (props) => {
  const [, t] = useLanguage()
  const orderTypeProps = {
    ...props,
    UIComponent: PickupOrderTypeToggleButtonUI,
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
