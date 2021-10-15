import React from 'react'
import { UserProfileForm } from '../../../src/themes/franchise/src/components/UserProfileForm'
// import { UserProfileForm } from '../../../src/components/UserProfileForm'
import { HelmetTags } from '../../components/HelmetTags'

export const Profile = (props) => {
  return (
    <>
      <HelmetTags page='profile' />
      <UserProfileForm {...props} />
    </>
  )
}
