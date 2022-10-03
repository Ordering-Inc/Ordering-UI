import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSite } from 'ordering-components'
import { checkSiteUrl } from '../../Utils'

export const ScrollToTop = withRouter(({ history, children }) => {
  const [{ site }] = useSite()
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')
  useEffect(() => {
    const unlisten = history.listen((data) => {
      if (!window.location.pathname.includes('/store/')) {
        window.scrollTo(0, 0)
      }
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
})
