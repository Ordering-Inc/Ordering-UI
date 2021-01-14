import React from 'react'
import { OrderingProvider } from 'ordering-components'
import { Alert } from '../components/Confirm'
import { ThemeProvider } from '../contexts/ThemeContext'
import theme from '../../template/theme.json'

const configFile = {
  app_id: 'ordering-react',
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

const ProviderMock = props => (
  <ThemeProvider theme={theme}>
    <OrderingProvider Alert={Alert} settings={configFile}>
      {props.children}
    </OrderingProvider>
  </ThemeProvider>
)

export default ProviderMock
