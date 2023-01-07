import React from 'react'
import { Helmet } from 'react-helmet'
import helmetData from '../../helmetdata.json'
import settings from '../../config'
import { useConfig, useOrderingTheme } from 'ordering-components'

export const HelmetTags = (props) => {
  const {
    page
  } = props
  const [{ theme }] = useOrderingTheme()
  const [configs] = useConfig()
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value
  const metaTag = page ? helmetData[page] : helmetData.app
  return (
    <Helmet titleTemplate={!page ? '' : `${theme?.my_products?.components?.website_settings?.components?.values?.name || settings.app_name} - %s`}>
      <title id={`route-${page}`}>{props.helmetMetaTags?.title || metaTag.title} {enabledPoweredByOrdering ? '- Powered by Ordering.co' : ''}</title>
      <meta name='description' content={(theme?.my_products?.components?.website_settings?.components?.values?.description || props.helmetMetaTags?.description || metaTag.description) + (enabledPoweredByOrdering ? ' Powered by Ordering.co' : '')} />
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

export default HelmetTags
