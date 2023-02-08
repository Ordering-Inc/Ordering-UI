import React, { useState, useEffect } from 'react'
import { useApi, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

export const Footer = () => {
  const [footerState, setfooterState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}
  const theme = useTheme()
  const [events] = useEvent()
  const footerPageSlug = theme?.footer?.components?.slug

  const getPage = async () => {
    setfooterState({ ...footerState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(footerPageSlug || 'footer').get({ cancelToken: source })
      setfooterState({ ...footerState, loading: false })
      if (!error) {
        setfooterState({ ...footerState, body: result.body })
      } else {
        setfooterState({ ...footerState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setfooterState({ ...footerState, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    if (!footerState.body) return

    const socialSharing = [...window.document.getElementsByClassName('social-icon')] ?? null

    const socialMedia = ['facebook', 'instagram', 'twitter']
    let socialMediaOuterContainers = []
    let socialMediaContainers = []
    if (socialSharing) {
      socialSharing.map((social) => {
        if (socialMedia.includes(social.ariaLabel)) {
          social.firstElementChild.ariaLabel = social.ariaLabel
          social.firstElementChild.firstElementChild.ariaLabel = social.ariaLabel
          socialMediaContainers.push(social.firstElementChild.firstElementChild)
          socialMediaOuterContainers.push(social.firstElementChild)
        }
      })
    }

    const handleClick = (e) => {
      if (socialMediaContainers.includes(e.target) || socialMediaOuterContainers.includes(e.target)) {
        events.emit('social_media_click', { social: e.target.ariaLabel })
      }
    }
    window.addEventListener('mouseup', handleClick)

    return () => {
      window.removeEventListener('mouseup', handleClick)
    }
  }, [footerState])

  useEffect(() => {
    getPage()
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

  return (
    <>
      {
        footerState.body && (
          <div style={{ wordBreak: 'break-all', padding: '0px 10px'}} dangerouslySetInnerHTML={{
            __html: footerState.body
          }}
          />
        )
      }
    </>
  )
}
