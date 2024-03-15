import React, { useEffect, useState } from 'react'
import { AdditionalTypesContainer, IconTypeButton, Title, TypeButton, TypesContainer } from './styles'
import { useTheme } from 'styled-components'
import { useConfig, useLanguage, useOrder } from 'ordering-components'
import Button from '../../styles/Buttons'

export const OrderTypesSelectorNewController = (props) => {
  const {
    orderTypes,
    hideTitle
  } = props

  const theme = useTheme()
  const [orderState, { changeType }] = useOrder()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()

  const [orderTypeSelected, setOrderTypeSelected] = useState(orderState?.options?.type)

  const allOrderTypes = [1, 2, 3, 4, 5]
  const pickupTypes = [2, 4, 5]
  const eatInType = 3
  const configTypes = configs?.order_types_allowed?.value.split('|').filter(value => (allOrderTypes.includes(Number(value)))).map(value => Number(value)) || []

  const handleChangeType = (value) => {
    if (!orderState?.loading) {
      changeType(value)
      setOrderTypeSelected(value)
    }
  }

  const handleChangeToPickup = () => {
    const firstEnabledPickupType = orderTypes.find(type => configTypes?.includes(type.value) && type.value !== 1)?.value
    handleChangeType(firstEnabledPickupType)
    setOrderTypeSelected(firstEnabledPickupType)
  }

  useEffect(() => {
    setOrderTypeSelected(orderState?.options?.type)
  }, [orderState?.options?.type])

  const OrderTypesComponent = () => {
    return (
      <>
        {orderTypes && (configTypes ? orderTypes.filter(type => configTypes?.includes(type.value) && pickupTypes.includes(type?.value)) : orderTypes).map((item, i) => (
          <Button
            key={item.value}
            onClick={() => handleChangeType(item.value)}
            color={orderState?.options?.type === item?.value ? 'primary' : 'secondary'}
            disabled={orderState?.loading}
            className={orderState?.options?.type !== item?.value ? 'activated' : ''}
          >
            {item.text}
          </Button>
        ))}
      </>
    )
  }

  return (
    <>
      {!hideTitle && (configTypes.includes(1) || configTypes.some(type => pickupTypes.includes(type))) && (
        <Title>{t('DELIVERY_TYPE', 'Delivery Type')}</Title>
      )}
      <TypesContainer>
        {configTypes.includes(1) && (
          <TypeButton onClick={() => handleChangeType(1)} disabled={orderState?.loading} activated={orderTypeSelected === 1}>
            <IconTypeButton activated={orderTypeSelected === 1}>
              <img
                src={theme?.images?.general?.deliveryIco}
                width={20}
                height={20}
              />
            </IconTypeButton>
            <p>{t('DELIVERY', 'Delivery')}</p>
          </TypeButton>
        )}
        {configTypes.some(type => pickupTypes.includes(type)) && (
          <TypeButton
            disabled={orderState?.loading}
            activated={pickupTypes.includes(orderTypeSelected)}
            onClick={() => handleChangeToPickup()}
          >
            <IconTypeButton activated={pickupTypes.includes(orderTypeSelected)}>
              <img
                src={theme?.images?.general?.pickupIco}
                width={22}
                height={22}
              />
            </IconTypeButton>
            <p>{t('PICKUP', 'Pickup')}</p>
          </TypeButton>
        )}
        {configTypes.some(type => eatInType === type) && (
          <TypeButton
            disabled={orderState?.loading}
            activated={orderTypeSelected === 3}
            onClick={() => handleChangeType(3)}
          >
            <IconTypeButton activated={orderTypeSelected === 3}>
              <img
                src={theme?.images?.general?.eatinIco}
                width={22}
                height={22}
              />
            </IconTypeButton>
            <p>{t('EAT_IN', 'Eat in')}</p>
          </TypeButton>
        )}
      </TypesContainer>
      {pickupTypes.includes(orderTypeSelected) && (
        <>
          <p>{t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')}</p>
          <AdditionalTypesContainer>
            <OrderTypesComponent />
          </AdditionalTypesContainer>
        </>
      )}
    </>
  )
}

export const OrderTypesSelectorNew = (props) => {
  const [, t] = useLanguage()

  const OrderTypesSelectorNewProps = {
    ...props,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery'),
        description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')
      }
    ]
  }
  return <OrderTypesSelectorNewController {...OrderTypesSelectorNewProps} />
}
