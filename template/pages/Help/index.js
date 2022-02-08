import React from 'react'
import { Help as HelpController } from '../../../src/themes/five/src/components/Help'
import { HelmetTags } from '../../components/HelmetTags'

export const Help = (props) => {

  return (
    <>
      <HelmetTags page='help' />
      <HelpController {...props} />
    </>
  )
}
