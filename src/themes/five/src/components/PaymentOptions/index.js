import React from 'react'
import { useConfig } from 'ordering-components'
import { DropListPaymentOptions } from './layouts/DropListPaymentOptions'
import { OptionPaymentOptions } from './layouts/OptionPaymentOptions'

export const PaymentOptions = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  const layout = props?.AdminSettings?.checkout_settings?.information_show_status?.payments_options ?? 'options'
  /**
  */

  const homeLayoutProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'dropList') && <DropListPaymentOptions {...homeLayoutProps} />}
      {(layout === 'options') && <OptionPaymentOptions {...homeLayoutProps} />}
    </>
  )
}
