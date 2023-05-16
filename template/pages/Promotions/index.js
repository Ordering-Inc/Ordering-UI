import React from 'react'
import { Promotions as PromotionsController } from '../../../src/themes/five/src/components/Promotions'
import HelmetTags from '../../components/HelmetTags'

export const Promotions = (props) => {
  const promotionsProps = {
    ...props
  }
  return (
    <>
      <HelmetTags page='promotions' />
      <PromotionsController {...promotionsProps} />
    </>
  )
}

export default Promotions
