import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Alert } from './src/components/Confirm'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ThemeProvider } from './src/contexts/ThemeContext'
import theme from './template/theme.json'

import logotype from './template/assets/images/logotype.svg'
import logotypeInvert from './template/assets/images/logotype-invert.svg'
import isotype from './template/assets/images/isotype.svg'
import isotypeInvert from './template/assets/images/isotype-invert.svg'

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

const logos = {
  logotype,
  logotypeInvert,
  isotype,
  isotypeInvert
}

theme.images = {
  logos
}

const wrapper = document.getElementById('app')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <OrderingProvider Alert={Alert} settings={configFile}>
      <Router />
    </OrderingProvider>
  </ThemeProvider>
  , wrapper)
