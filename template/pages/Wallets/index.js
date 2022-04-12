import React from 'react'
import { Wallets as WalletsController } from '../../../src/themes/five/src/components/Wallets'
import { HelmetTags } from '../../components/HelmetTags'

export const Wallets = (props) => {
  return (
    <>
      <HelmetTags page='wallets' />
      <WalletsController {...props} />
    </>
  )
}
