import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop ({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (!window.location.pathname.includes('/store')) {
        window.scrollTo(0, 0)
      }
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
}

export default withRouter(ScrollToTop)
