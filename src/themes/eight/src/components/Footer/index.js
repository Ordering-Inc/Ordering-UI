import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useApi } from 'ordering-components'

import {
  FooterContainer
} from './styles'

export const Footer = () => {
  const location = useLocation()
  const [footerState, setfooterState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}

  const getPage = async () => {
    setfooterState({ ...footerState, loading: true })
    try {
      let footerPage
      if (location.pathname === '/' || location.pathname === '/home') {
        footerPage = 'chickFillAFooter'
      } else {
        footerPage = 'chickFillAPrivacyFooter'
      }
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(`${footerPage}`).get({ cancelToken: source })
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
  }, [location.pathname])

  return (
    <FooterContainer>
      {
        footerState.body && (
          <div
            dangerouslySetInnerHTML={{
              __html: footerState.body
            }}
            id='page-footer'
          />
        )
      }
    </FooterContainer>
  )
}
