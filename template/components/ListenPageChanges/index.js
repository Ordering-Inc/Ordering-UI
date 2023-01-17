import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useEvent, useLanguage, useSite } from 'ordering-components'
import { useTheme } from '../../../src/contexts/ThemeContext'
import { checkSiteUrl } from '../../Utils'

export const ListenPageChanges = ({ children }) => {
  const history = useHistory()
  const [events] = useEvent()
  const [languageState] = useLanguage()
  const [theme, { merge }] = useTheme()
  const [{ site }] = useSite()

  const businessUrlChecked = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const businessUrl = businessUrlChecked.includes('?') ? businessUrlChecked.split('?')[0] : businessUrlChecked

  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')
  const productUrl = productUrlTemplate.includes('?') ? productUrlTemplate.split('?')[0] : productUrlTemplate

  const routes = {
    home: '/',
    search: '/search',
    profile: '/profile',
    messages: '/messages',
    verify: '/verify',
    wallets: '/wallets',
    help: '/help',
    signup_business: '/signup_business',
    signup_driver: '/signup-driver',
    orders: '/profile/orders',
    order_detail: '/orders/:orderId',
    checkout: '/checkout/:cartUuid',
    checkout_list: '/checkout',
    multi_checkout: '/multi-checkout/:cartUuid',
    multi_orders: '/multi-orders/:orderId',
    multi_cart: '/multi-cart',
    business: businessUrl,
    business_slug: '/:store',
    product: productUrl,
    business_search: '/business_search',
    reset_password: '/password/reset',
    sessions: '/sessions',
    promotions: '/promotions',
    addresses: '/profile/addresses',
    favorite: '/favorite'
  }

  const handleGoToPage = ({ page, params = {}, search, replace = false }) => {
    let path = routes[page]
    if (path) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value)
      })
      if (search) {
        path = `${path}${search}`
      }
      history[replace ? 'replace' : 'push'](path)
    }
  }

  const getCurrentPage = (pathname) => {
    Object.entries(routes).forEach(([key, value]) => {
      const regex = RegExp(value.replace(/:[a-zA-Z]+/i, '(.+)') + '$', 'gi')
      if (regex.test(pathname)) {
        const pathParts = value.split('/')
        const currentParts = pathname.split('/')
        const params = {}
        const paramRegex = /:[a-zA-Z]+/i
        pathParts.forEach((part, i) => {
          if (paramRegex.test(part)) {
            params[part.replace(':', '')] = currentParts[i]
          }
        })
        const query = {}
        const searchParams = new URLSearchParams(history.location.search)
        for (const [key, value] of searchParams.entries()) {
          query[key] = value
        }
        events.emit('change_view', { page: key, params, query })
      }
    })
  }

  const handleGetCurrentView = () => {
    getCurrentPage(history.location.pathname)
  }

  useEffect(() => {
    getCurrentPage(history.location.pathname)
    const unlisten = history.listen((data) => {
      getCurrentPage(data.pathname)
    })
    events.on('go_to_page', handleGoToPage)
    events.on('get_current_view', handleGetCurrentView)
    return () => {
      unlisten()
      events.off('go_to_page', handleGoToPage)
      events.off('get_current_view', handleGetCurrentView)
    }
  }, [])

  useEffect(() => {
    if (theme.rtl !== languageState?.language?.rtl) {
      merge({
        rtl: languageState?.language?.rtl
      })
    }
  }, [languageState?.language?.rtl])

  return (
    <>
      {children}
    </>
  )
}

export default ListenPageChanges
