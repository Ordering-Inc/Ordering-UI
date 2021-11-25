import React from 'react'
import { Help as HelpController } from '../../../src/themes/franchise'
import { HelmetTags } from '../../components/HelmetTags'

export const Help = (props) => {
  return (
    <>
      <HelmetTags page='help' />
      <HelpController {...props} />
    </>
  )
}
