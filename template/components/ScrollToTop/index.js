import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

export const ScrollToTop = withRouter(({ history, children }) => {
  useEffect(() => {
    const elements = document.getElementsByTagName('title')
    const elementsToAvoid = []
    const routesToMatch = ['route-business']
    for (const item of elements) {
      elementsToAvoid.push(routesToMatch.includes(item?.id))
    }
    const unlisten = history.listen((data) => {
      if (!window.location.pathname.includes('/store/') && !elementsToAvoid.some(e => e)) {
        window.scrollTo(0, 0)
      }
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
})
