import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

export const ScrollToTop = withRouter(({ history, children }) => {

  useEffect(() => {
    const unlisten = history.listen((data) => {
      if (!window.location.search.includes('category')) {
        window.scrollTo(0, 0)
      }
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
})
