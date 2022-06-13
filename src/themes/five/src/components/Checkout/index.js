import React from 'react'
import { useConfig } from 'ordering-components'
// import { RedHomeHero } from './layouts/RedHomeHero'
import { OriginalCheckout } from './layouts/OriginalCheckout'
import { StarbucksCheckout } from './layouts/StarbucksCheckout'

export const Checkout = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  const layout = props?.AdminSettings?.checkout_settings?.layout ?? 'original'
  /**
  */
  const checkoutLayoutProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'original') && <OriginalCheckout {...checkoutLayoutProps} />}
      {(layout === 'starbucks') && <StarbucksCheckout {...checkoutLayoutProps} />}
      {/* {(layout === 'red') && <RedHomeHero {...homeLayoutProps} />} */}
    </>
  )
}
