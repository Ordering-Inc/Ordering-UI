import React from 'react'
import { Cms as CmsController } from '../../../src/components/Cms'
import { useParams } from 'react-router-dom'

export const Cms = (props) => {
  const { pageSlug } = useParams()

  return (
    <CmsController {...props} pageSlug={pageSlug} />
  )
}
