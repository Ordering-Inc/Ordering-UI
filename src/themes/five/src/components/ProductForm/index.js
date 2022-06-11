import React from 'react'
import { useConfig } from 'ordering-components'
import { OriginalProductForm } from './layouts/OriginalProductForm'
import { BesideProductForm } from './layouts/BesideProductForm'
import { FullProductForm } from './layouts/FullProductForm'

export const ProductForm = (props) => {
  const [{ configs }] = useConfig()

  /**
   * Below section is test code
   * This section will be removed after backend ready.
   * props.AdminSettings = configs
   */
  const layout = props?.AdminSettings?.product_popup_settings?.layout ?? 'original'

  const productFormLayoutProps = {
    ...props,
    layout: layout
  }

  return (
    <>
      {(layout === 'original') && <OriginalProductForm {...productFormLayoutProps} />}
      {(layout === 'left' || layout === 'right') && <BesideProductForm {...productFormLayoutProps} />}
      {(layout === 'full') && <FullProductForm {...productFormLayoutProps} />}
    </>
  )
}
