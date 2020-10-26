import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Alert } from './src/components/Confirm'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ThemeProvider } from './src/contexts/ThemeContext'
import theme from './template/theme.json'

/**
 * Theme images
 */
import logotype from './template/assets/images/logotype.svg'
import logotypeInvert from './template/assets/images/logotype-invert.svg'
import isotype from './template/assets/images/isotype.svg'
import isotypeInvert from './template/assets/images/isotype-invert.svg'

import homeHero from './template/assets/images/home-hero.png'
import notFound from './template/assets/images/not-found.svg'
import notNetwork from './template/assets/images/not-network.svg'
import notFound404 from './template/assets/images/not-found-404.svg'
import notFoundLighting from './template/assets/images/not-found-lighting.svg'
import searchIcon from './template/assets/images/search-icon.svg'
import orderDetailsHeader from './template/assets/images/order-details-header.png'

import orderStatus0 from './template/assets/images/order/status-0.svg'
import orderStatus1 from './template/assets/images/order/status-1.svg'
import orderStatus2 from './template/assets/images/order/status-2.svg'
import orderStatus3 from './template/assets/images/order/status-3.svg'
import orderStatus4 from './template/assets/images/order/status-4.svg'
import orderStatus5 from './template/assets/images/order/status-5.svg'
import orderStatus6 from './template/assets/images/order/status-6.svg'
import orderStatus7 from './template/assets/images/order/status-7.svg'
import orderStatus8 from './template/assets/images/order/status-8.svg'
import orderStatus9 from './template/assets/images/order/status-9.svg'
import orderStatus10 from './template/assets/images/order/status-10.svg'
import orderStatus11 from './template/assets/images/order/status-11.svg'
import orderStatus12 from './template/assets/images/order/status-12.svg'

import categoryFood from './template/assets/images/categories/category-food.png'
import categoryGroceries from './template/assets/images/categories/category-groceries.png'
import categoryAlcohol from './template/assets/images/categories/category-alcohol.png'
import categoryLaundry from './template/assets/images/categories/category-laundry.png'
import categoryAll from './template/assets/images/categories/category-all.png'

import productDummy from './template/assets/images/dummies/product.png'

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
  logos,
  general: {
    homeHero,
    notFound,
    notFound404,
    notFoundLighting,
    searchIcon,
    notNetwork,
    orderDetailsHeader
  },
  order: {
    status0: orderStatus0,
    status1: orderStatus1,
    status2: orderStatus2,
    status3: orderStatus3,
    status4: orderStatus4,
    status5: orderStatus5,
    status6: orderStatus6,
    status7: orderStatus7,
    status8: orderStatus8,
    status9: orderStatus9,
    status10: orderStatus10,
    status11: orderStatus11,
    status12: orderStatus12
  },
  categories: {
    food: categoryFood,
    groceries: categoryGroceries,
    alcohol: categoryAlcohol,
    laundry: categoryLaundry,
    all: categoryAll
  },
  dummies: {
    product: productDummy
  }
}

const wrapper = document.getElementById('app')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <OrderingProvider Alert={Alert} settings={configFile}>
      <Router />
    </OrderingProvider>
  </ThemeProvider>
  , wrapper)
