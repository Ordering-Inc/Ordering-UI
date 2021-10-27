import React from 'react'
import { UserProfile } from '../../../src/themes/pwa/src/components/UserProfile'
import { HelmetTags } from '../../components/HelmetTags'

export const Profile = (props) => {
  return (
    <>
      <HelmetTags page='profile' />
      <UserProfile {...props} />
    </>
  )
}
