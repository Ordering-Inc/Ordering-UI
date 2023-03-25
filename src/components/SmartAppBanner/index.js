import React from 'react'
import { useLanguage, SmartAppBanner as SmartAppBannerController } from 'ordering-components'
import SmartBanner from 'react-smartbanner'
import { useTheme } from 'styled-components'

const SmartAppBanneUI = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <>
      <SmartBanner
        title={t('MOBILE_APPNAME', theme?.defaultLanguages?.MOBILE_APPNAME || 'Ordering app')}
        author={t('MOBILE_APPNAME_AUTHOR', theme?.defaultLanguages?.MOBILE_APPNAME_AUTHOR || 'Ordering, Inc.')}
        daysHidden={7}
        daysReminder={15}
        button={t('VIEW', 'View')}
        storeText={{
          ios: t('ON_THE_APP_STORE', 'On the App Store'),
          android: t('IN_GOOGLE_PLAY', 'In Google Play'),
          windows: t('IN_WINDOWS_STORE', 'In Windows store'),
          kindle: t('IN_AMAZON_APPSTORE', 'In Amazon Appstore')
        }}
        price={{
          ios: t('FREE', 'Free'),
          android: t('FREE', 'Free'),
          windows: t('FREE', 'Free'),
          kindle: t('FREE', 'Free')
        }}
        ignoreIosVersion
      />
    </>
  )
}

export const SmartAppBanner = (props) => {
  const smartAppBannerProps = {
    ...props,
    UIComponent: SmartAppBanneUI
  }
  return <SmartAppBannerController {...smartAppBannerProps} />
}

export default SmartAppBanner
