import React from 'react'
import { CmsContent, useLanguage } from 'ordering-components'
import { NotFoundSource } from '../NotFoundSource'
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
          <NotFoundSource
            content={t('NOT_FOUND_PAGE', 'Sorry, we couldn\'t find the requested page.')}
            btnTitle={t('PROFILE_PAGES_REDIRECT', 'Go to Pages')}
          />
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
