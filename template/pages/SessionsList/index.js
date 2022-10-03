import React from 'react'
import { SessionsList as SessionsListController } from '../../../src/themes/five/src/components/SessionsList'
import { HelmetTags } from '../../components/HelmetTags'

export const SessionsList = (props) => {
  return (
    <>
      <HelmetTags page='sessions' />
      <SessionsListController {...props} />
    </>
  )
}
