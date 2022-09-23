import React from 'react'
import { Favorite as FavoriteController } from '../../../src/themes/five'
import { HelmetTags } from '../../components/HelmetTags'

export const Favorite = (props) => {
  return (
    <>
      <HelmetTags page='favorite' />
      <FavoriteController {...props} />
    </>
  )
}
