import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Banner,
  BannerContainer,
  BannerClose,
  BannerIcon,
  BannerInfo,
  Title,
  AppAuthor,
  Description,
  BannerWrapper
} from './styles'

const isClient = typeof window !== 'undefined'
const expiredDateInUTC = additionalDays => {
  const expiredDate = new Date()
  expiredDate.setDate(expiredDate.getDate() + additionalDays)
  return expiredDate.toUTCString()
}

export const SmartAppBanner = (props) => {
  const theme = useTheme()
  const position = props.position
  const [type, setType] = useState(null)
  const [appId, setAppId] = useState('')
  const [settings, setSettings] = useState({})

  const show = () => {
    if (isClient) {
      window.document.querySelector('html').classList.add('smartbanner-show')
    }
  }

  const hide = () => {
    if (isClient) {
      window.document.querySelector('html').classList.remove('smartbanner-show')
    }
  }

  const close = () => {
    hide()
    document.cookie = 'smartbanner-closed=true;' + 'expires=' + expiredDateInUTC(props.daysHidden) + ';' + 'path = /'
    if (props.onClose && typeof props.onClose === 'function') {
      props.onClose()
    }
  }

  const install = () => {
    hide()
    document.cookie = 'smartbanner-installed=true;' + 'expires=' + expiredDateInUTC(props.daysReminder) + ';' + 'path = /'
    if (props.onInstall && typeof props.onInstall === 'function') {
      props.onInstall()
    }
  }

  const SettingsByType = (type) => {
    const mixins = {
      ios: {
        appMeta: props.appMeta.ios,
        storeLink: `https://apps.apple.com/${props.appStoreLanguage}/app/id`
      },
      android: {
        appMeta: props.appMeta.android,
        storeLink: 'http://play.google.com/store/apps/details?id='
      }
    }

    const _settings = mixins[type]
    setSettings(_settings)

    if (type) {
      parseAppId(type)
    }
  }

  const parseAppId = (type) => {
    if (!isClient) {
      return ''
    }

    const meta = window.document.querySelector(
      `meta[name="${props.appMeta[type]}"]`
    )

    if (!meta) {
      return ''
    }

    const content = /app-id=([^\s,]+)/.exec(meta.getAttribute('content'))
    const _appId = content && content[1] && content[1]
    setAppId(_appId)

    return _appId
  }

  const retrieveInfo = () => {
    const link = `${props.url[type]}` || settings.storeLink + appId
    const inStore = `${props.price[type]} - ${props.storeText[type]}`

    return {
      link,
      inStore
    }
  }

  /**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or null.
 *
 * @returns {String}
 */

  const getMobileOperatingSystem = () => {
    let device = null
    var userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/windows phone/i.test(userAgent)) {
      device = 'windows phone'
    }

    if (/android/i.test(userAgent)) {
      device = 'android'
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      device = 'ios'
    }
    setType(device)
  }

  useEffect(() => {
    getMobileOperatingSystem()
  }, [])

  useEffect(() => {
    if (type) {
      console.log('Detected device: ' + type)
      SettingsByType(type)
    }
  }, [type])

  /*
  * Render Smart Banner.
  * This will refer of 'iOS', 'Android', Cookie state.
  *
  * Don't show banner when:
  * 1) if device isn't iOS or Android
  * 2) website is loaded in app,
  * 3) user dismissed banner,
  * 4) or we have no app id in meta
  */

  if (!isClient) {
    return <div />
  }

  const getCookie = (name) => {
    var cookieArr = document.cookie.split(';')
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split('=')
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1])
      }
    }
    return null
  }

  if (
    !type ||
    window.navigator.standalone ||
    getCookie('smartbanner-closed') ||
    getCookie('smartbanner-installed')
  ) {
    return <div />
  }

  if (!appId) {
    return <div />
  }

  show()
  const { link, inStore } = retrieveInfo()
  const wrapperClassName = `smartbanner smartbanner-${type} smartbanner-${position}`

  return (
    <Banner id='smart-app-banner' className={wrapperClassName}>
      <BannerContainer>
        <BannerClose className='banner-close' onClick={() => close()}>&times;</BannerClose>
        <BannerIcon
          className='banner-icon'
          bgImg={theme.images?.general?.orderingAppIcon}
        />
        <BannerInfo className='banner-info'>
          <Title className='banner-title'>{props.title}</Title>
          <AppAuthor>{props.author}</AppAuthor>
          <Description className='banner-description'>{inStore}</Description>
        </BannerInfo>
        <BannerWrapper>
          <a
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => install()}
            href={link}
            className='banner-button'
          >
            <span className='banner-button-text'>
              View
            </span>
          </a>
        </BannerWrapper>
      </BannerContainer>
    </Banner>
  )
}

SmartAppBanner.propTypes = {
  daysHidden: PropTypes.number,
  daysReminder: PropTypes.number,
  appStoreLanguage: PropTypes.string,
  button: PropTypes.node,
  storeText: PropTypes.objectOf(PropTypes.string),
  price: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
  url: PropTypes.objectOf(PropTypes.string),
  appMeta: PropTypes.shape({
    android: PropTypes.string,
    ios: PropTypes.string
  }),
  onClose: PropTypes.func,
  onInstall: PropTypes.func
}

SmartAppBanner.defaultProps = {
  daysHidden: 7,
  daysReminder: 30,
  appStoreLanguage: isClient
    ? (window.navigator.language || window.navigator.userLanguage).slice(
      -2
    ) || 'us'
    : 'us',
  button: 'View',
  storeText: {
    ios: 'On the App Store',
    android: 'In Google Play'
  },
  price: {
    ios: 'Free',
    android: 'Free'
  },
  title: 'Ordering App',
  author: 'Ordering, Inc.',
  position: 'top',
  url: {
    ios: '',
    android: ''
  },
  appMeta: {
    ios: 'apple-itunes-app',
    android: 'google-play-app'
  }
}
