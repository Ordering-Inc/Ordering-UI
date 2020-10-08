import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApi, getLanguage } from 'ordering-components'
import { CancelToken } from 'ordering-api-sdk'
import { CmsError } from './styles'

export const Cms = (props) => {
  const {
    onNotFound
  } = props
  const { pageSlug } = useParams()
  /**
   * Array to save the body of the page
   */
  const [body, setBody] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [ordering] = useApi()
  const requestsState = {}
  const [, t] = getLanguage()
  /**
   * Method used to get the page by slug
   */
  const getPage = async (slug) => {
    setLoading(true)
    try {
      const source = CancelToken.source()
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(slug).get({ cancelToken: source.token })
      setLoading(false)
      if (!error) {
        setBody(result.body)
        setError(null)
      } else {
        setError(result)
        onNotFound && onNotFound(pageSlug)
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setLoading(false)
        setError([error.message])
      }
    }
  }

  useEffect(() => {
    getPage(pageSlug)
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

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
          <CmsError>
            <h2>
              {t('404', '404')}
            </h2>
            <p>
              {error}
            </p>
          </CmsError>
      }
    </div>
  )
}
