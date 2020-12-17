import React, { useEffect, useState } from 'react'

export const WrapperGoogleMaps = (Child) => (props) => {
  const {
    apiKey
  } = props

  if (!apiKey) {
    console.warn('Prop `apiKey` is required to use Google Maps components.')
  }

  const [googleReady, setGoogleReady] = useState(false)

  useEffect(() => {
    if (!apiKey) {
      return
    }

    let checker = null

    if (window.document.getElementById('google-maps-sdk')) {
      if (typeof google !== 'undefined') {
        setGoogleReady(true)
      } else {
        checker = setInterval(() => {
          if (typeof google !== 'undefined') {
            setGoogleReady(true)
            clearInterval(checker)
          }
        }, 100)
      }
      return
    }

    window.googleAsyncInit = () => {
      setGoogleReady(true)
    }

    const js = window.document.createElement('script')
    const mjs = window.document.getElementsByTagName('script')[0]
    js.id = 'google-maps-sdk'
    js.async = true
    js.defer = true
    js.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&callback=googleAsyncInit`
    mjs.parentNode.insertBefore(js, mjs)
    return () => {
      if (checker) {
        clearInterval(checker)
      }
    }
  }, [apiKey])

  return (
    <Child {...props} googleReady={googleReady} />
  )
}
