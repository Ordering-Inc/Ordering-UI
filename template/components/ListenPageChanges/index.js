import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useEvent } from 'ordering-components'

export const ListenPageChanges = ({ children }) => {
  const history = useHistory()
  const [events] = useEvent()

  const handleGoToPage = ({ page, params, replace = false }) => {
    console.log(page, params, replace)
    if (page === 'home') {
      history[replace ? 'reaplce' : 'push']('/')
    } else if (page === 'search') {
      history[replace ? 'reaplce' : 'push']('/search')
    } else if (page === 'signin') {
      history[replace ? 'reaplce' : 'push']('/signin')
    } else if (page === 'signup') {
      history[replace ? 'reaplce' : 'push']('/signup')
    }
  }

  useEffect(() => {
    events.on('go_to_page', handleGoToPage)
    return () => {
      events.off('go_to_page', handleGoToPage)
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
