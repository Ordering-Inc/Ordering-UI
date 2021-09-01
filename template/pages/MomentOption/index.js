import React from 'react'
import { MomentContent } from '../../../src/themes/eight/src/components/MomentContent'
import { HelmetTags } from '../../components/HelmetTags'

export const MomentOption = (props) => {
  return (
    <>
      <HelmetTags page='moment' />
      <MomentContent {...props} />
    </>
  )
}
