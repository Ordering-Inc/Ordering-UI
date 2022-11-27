import React, { useState, useEffect } from 'react'
import { useApi, useConfig, useLanguage, useOrderingTheme } from 'ordering-components'

import { Container, PoweredByOrdering } from './styles'

export const Footer = ({ isFooterPage }) => {
  const [footerState, setfooterState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const [{ theme }] = useOrderingTheme()
  const requestsState = {}
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const footerContent = theme?.my_products?.components?.theme_settings?.components?.values?.footer_content
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value
  const getPage = async () => {
    setfooterState({ ...footerState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages('footer').get({ cancelToken: source })
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
    <Container>
      {
        ((footerContent || footerState.body) && !isFooterPage) && (
          <div
            style={{ wordBreak: 'break-all', padding: '0px 10px' }}
            dangerouslySetInnerHTML={{
              __html: (footerContent || footerState.body)
            }}
          />
        )
      }
      {enabledPoweredByOrdering && (
        <PoweredByOrdering>
          {t('POWERED_BY', 'Powered by')}
          <a href='https://www.ordering.co'>
            {' '}{t('ORDERING_CO', 'Ordering.co')}
          </a>
        </PoweredByOrdering>
      )}
    </Container>
  )
}
