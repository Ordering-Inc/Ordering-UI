import React from 'react'
import { Cms as CmsController } from '../../../src/components/Cms'
import { useParams, useHistory } from 'react-router-dom'

const Cms = (props) => {
  const { pageSlug } = useParams()
  const history = useHistory()

  const cmsProps = {
    ...props,
    pageSlug,
    handleCmsRedirect: () => {
      history.push('/pages')
    }
  }

  return (
    <CmsController {...cmsProps} />
  )
}

export default Cms
