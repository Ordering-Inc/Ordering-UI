import React from 'react'
import { useTheme } from 'styled-components'
import { SingleProductCard as SingleProductCardOriginal } from './layouts/original'
import { SingleProductCard as SingleProductCardStarbucks } from './layouts/starbucks'

export const SingleProductCard = (props) => {
  const theme = useTheme()
  const layout = theme?.business_view?.components?.products?.components?.layout?.type || 'original'
  console.log(layout)
  return (
    <>
      {layout === 'original' && <SingleProductCardOriginal {...props} />}
      {layout === 'starbucks' && <SingleProductCardStarbucks {...props} />}
    </>
  )
}
