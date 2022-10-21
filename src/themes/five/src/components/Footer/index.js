import React, { useState, useEffect } from 'react'
import { useApi } from 'ordering-components'
import { useTheme } from 'styled-components'

export const Footer = () => {
  const [footerState, setfooterState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}
  const theme = useTheme()
  const footerPageSlug = theme?.footer?.components?.slug
  const getPage = async () => {
    setfooterState({ ...footerState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(footerPageSlug || 'footer').get({ cancelToken: source })
      setfooterState({ ...footerState, loading: false })
      if (!error) {
        setfooterState({ ...footerState, body: result.body })
      } else {
        setfooterState({ ...footerState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setfooterState({ ...footerState, loading: false, error: [err.message] })
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
      {
        footerState.body && (
          <div style={{ wordBreak: 'break-all', padding: '0px 10px'}} dangerouslySetInnerHTML={{
            __html: footerState.body
          }}
          />
        )
      }
    </>
  )
}
