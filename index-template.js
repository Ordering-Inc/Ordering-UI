import React from 'react'
import ReactDOM from 'react-dom'
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Alert } from './src/components/Confirm'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ThemeProvider } from './src/contexts/ThemeContext'
import theme from './template/theme.json'

const configFile = {
  project: 'luisv4',
  api: {
    url: 'https://apiv4-dev.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket-dev.ordering.co'
  }
}

Sentry.init({
  dsn: 'https://cc9905fc4bc84b098ac94811a89aa17f@o460529.ingest.sentry.io/5460911',
  integrations: [
    new Integrations.BrowserTracing()
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})

const wrapper = document.getElementById('app')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <OrderingProvider Alert={Alert} settings={configFile}>
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <Router />
      </DirectionProvider>
    </OrderingProvider>
  </ThemeProvider>
  , wrapper)
