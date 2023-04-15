import React from 'react'
import { Promotions as PromotionsController } from '../../../src/themes/five/src/components/Promotions'

export const Promotions = (props) => {
  const promotionsProps = {
    ...props
  }
  return (
    <>
      <PromotionsController {...promotionsProps} />
    </>
  )
}

export default Promotions
