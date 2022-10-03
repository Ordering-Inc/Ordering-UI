import React from 'react'
import { Help as HelpController } from '../../../src/themes/five/src/components/Help'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'

export const Help = (props) => {
  const helpProps = {
    ...props,
    franchiseId: settings?.franchiseSlug
  }
  return (
    <>
      <HelmetTags page='help' />
      <HelpController {...helpProps} />
    </>
  )
}
