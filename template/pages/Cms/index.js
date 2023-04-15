import React from 'react'
import { Cms as CmsController } from '../../../src/components/Cms'
import { useParams, useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'

export const Cms = (props) => {
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
    <>
      <HelmetTags page='pages' />
      <CmsController {...cmsProps} />
    </>
  )
}

export default Cms
