import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

export const ScrollToTop = withRouter(({ history, children }) => {
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
