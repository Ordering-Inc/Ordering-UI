import React from 'react'
import { Helmet } from 'react-helmet'
import helmetData from '../../helmetdata.json'
import settings from '../../config'
import { useDefaultTheme } from 'ordering-components'

export const HelmetTags = (props) => {
  const {
    page
  } = props
  const [{ theme }] = useDefaultTheme()

  const metaTag = page ? helmetData[page] : helmetData.app
  return (
    <Helmet titleTemplate={!page ? '' : `${theme?.website_settings?.components?.values?.name || settings.app_name} - %s`}>
      <title id={`route-${page}`}>{props.helmetMetaTags?.title || metaTag.title}</title>
      <meta name='description' content={theme?.website_settings?.components?.values?.description || props.helmetMetaTags?.description || metaTag.description} />
      <meta name='keywords' content={props.helmetMetaTags?.keywords || metaTag.keywords} />
      {props.robots ? (
        <meta name='robots' content={props.robots} />
      ) : (
        metaTag.robots && <meta name='robots' content={metaTag.robots} />
      )}
      {props.canonicalUrl ? (
        <link rel='canonical' href={props.canonicalUrl} />
      ) : (
        metaTag.canonicalUrl && <link rel='canonical' href={metaTag.canonicalUrl} />
      )}
    </Helmet>
  )
}
