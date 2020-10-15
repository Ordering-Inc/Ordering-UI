import React from 'react'
import { CmsContent, useLanguage } from 'ordering-components'
import { PageNotFound } from '../PageNotFound'
const CmsUI = (props) => {
  const {
    loading,
    error,
    body
  } = props
  const [, t] = useLanguage()

  return (
    <div>
      {
        loading && t('LOADING', 'Loading...')
      }
      {
        body && (
          <div dangerouslySetInnerHTML={{
            __html: body
          }}
          />
        )
      }
      {
        (!loading && error) &&
          <PageNotFound />
      }
    </div>
  )
}

export const Cms = (props) => {
  const CmsProps = {
    ...props,
    UIComponent: CmsUI
  }
  return <CmsContent {...CmsProps} />
}
