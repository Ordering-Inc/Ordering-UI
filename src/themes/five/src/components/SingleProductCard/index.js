import React from 'react'
import { useConfig } from 'ordering-components'

import { OriginalSingleProductCard } from './layouts/OriginalSingleProductCard'
import { StarbucksLatamSingleProductCard } from './layouts/StarbucksLatamSingleProductCard'
import { StarbucksSingleProductCard } from './layouts/StarbucksSingleProductCard'

export const SingleProductCard = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  const layout = props?.AdminSettings?.products_listening_settings?.product_section?.elements_type !== undefined
    ? props?.AdminSettings?.products_listening_settings?.product_section?.elements_type : 'original'

  /**
   */
  const SingleProductCardTypeProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'original') && <OriginalSingleProductCard {...SingleProductCardTypeProps} />}
      {(layout === 'starbucks-latam') && <StarbucksLatamSingleProductCard {...SingleProductCardTypeProps} />}
      {(layout === 'starbucks') && <StarbucksSingleProductCard {...SingleProductCardTypeProps} />}
    </>
  )
}
