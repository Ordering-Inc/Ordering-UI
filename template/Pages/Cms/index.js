import React from 'react'
import { Cms as CmsController } from '../../../src/components/Cms'
import { useParams, useHistory } from 'react-router-dom'

export const Cms = (props) => {
  const { pageSlug } = useParams()
  const history = useHistory()

  const cmsProps = {
    ...props,
    pageSlug,
    handleCmsRedirect: () => {
      history.push('/pages/OrderingPages')
      window.location.reload()
    }
  }

  return (
    <CmsController {...cmsProps} />
  )
}
