import { useLanguage } from 'ordering-components'
import React from 'react'
import { useTheme } from 'styled-components'
import { HeaderInfo } from './styles'

export const OrderHeaderInfoSection = (props) => {
  const {
    isService
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <HeaderInfo>
      <h1>{isService ? t('SERVICES', 'Services') : t('ORDER_MESSAGE_RECEIVED', theme?.defaultLanguages?.ORDER_MESSAGE_RECEIVED || 'Your order has been received')}</h1>
      <p>{!isService && t('ORDER_MESSAGE_HEADER_TEXT', theme?.defaultLanguages?.ORDER_MESSAGE_HEADER_TEXT || 'Once business accepts your order, we will send you an email, thank you!')}</p>
    </HeaderInfo>
  )
}
