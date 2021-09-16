import React, { useState, useEffect } from 'react'
import { useApi } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'

export const HelpStaticPage = (props) => {
  const {
    slug
  } = props

  const [pageState, setPageState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}

  const getPage = async () => {
    setPageState({ ...pageState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(slug).get({ cancelToken: source })
      setPageState({ ...pageState, loading: false })
      if (!error) {
        setPageState({ ...pageState, body: result.body })
      } else {
        setPageState({ ...pageState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setPageState({ ...pageState, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    getPage()
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

  return (
    <>
      {pageState?.loading && <Skeleton height={300} />}
      {
        !pageState?.loading && pageState.body && (
          <div dangerouslySetInnerHTML={{
            __html: pageState.body
          }}
          />
        )
      }
    </>
  )
}
