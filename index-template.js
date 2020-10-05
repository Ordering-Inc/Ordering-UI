import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Alert } from './src/components/Confirm'

// const configFile = {
//   project: 'luisv4',
//   api: {
//     url: 'https://apiv4-dev.ordering.co',
//     language: 'en',
//     version: 'v400'
//   },
//   socket: {
//     url: 'https://socket-dev.ordering.co'
//   }
// }

const configFile = {
  project: 'development',
  api: {
    url: 'http://localhost:8080',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'http://localhost:1337'
  }
}

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider Alert={Alert} settings={configFile}>
    <Router />
  </OrderingProvider>
  , wrapper)
