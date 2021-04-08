import React from 'react'
import {
  useConfig,
  useLanguage,
  useOrder
} from 'ordering-components'
import { OrderTypeSelectorHeader } from '../OrderTypeSelectorHeader'
import { AddressForm } from '../AddressForm'
import {
  EditDeliveryContainer
} from './styles'

export const CheckoutDeliveryDetails = (props) => {
  const {
    onCancel
  } = props
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <OrderTypeSelectorHeader
        configTypes={configTypes}
        isButtonStyle
      />
      <EditDeliveryContainer>
        <h3>{t('EDIT_DELIVERY_DETAILS', 'Edit delivery details')}</h3>
        <AddressForm
          isSchedule
          addressesList={[]}
          address={orderState?.options?.address || {}}
          onCancel={() => onCancel()}
        />
      </EditDeliveryContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
