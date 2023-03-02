import React, { useEffect, useState } from 'react'
import PWAPrompt from 'react-ios-pwa-prompt'
import { useTheme, ThemeProvider } from 'styled-components'
import loadable from '@loadable/component'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'

import {
  useSession,
  useApi,
  useLanguage,
  useOrder,
  Analytics,
  FacebookPixel,
  useConfig,
  AnalyticsSegment,
  useEvent,
  useOrderingTheme,
  useSite
} from 'ordering-components'

import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { useWindowSize } from '../src/hooks/useWindowSize'

import settings from './config'
import { orderingThemeUpdated } from './components/OrderingThemeUpdated'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { Input } from '../src/themes/five/src/styles/Inputs'
import { QueryLoginSpoonity } from '../src/themes/five/src/components/QueryLoginSpoonity'

const Header = loadable(() => import('../src/themes/five/src/components/Header'))
const HeaderKiosk = loadable(() => import('../src/themes/five/src/components/Header/layouts/Kiosk'))
const NotNetworkConnectivity = loadable(() => import('../src/themes/five/src/components/NotNetworkConnectivity'))
const Footer = loadable(() => import('../src/themes/five/src/components/Footer'))
const NavigationBar = loadable(() => import('../src/themes/five/src/components/NavigationBar'))
const Modal = loadable(() => import('../src/themes/five/src/components/Modal'))
const ReviewTrigger = loadable(() => import('../src/themes/five/src/components/ReviewTrigger'))
const ReviewOrder = loadable(() => import('../src/themes/five/src/components/ReviewOrder'))
const ReviewProduct = loadable(() => import('../src/themes/five/src/components/ReviewProduct'))
const ReviewDriver = loadable(() => import('../src/themes/five/src/components/ReviewDriver'))
const SignUpApproval = loadable(() => import('../src/themes/five/src/components/SignUpApproval'))
const Button = loadable(() => import('../src/themes/five/src/styles/Buttons'))

const Alert = loadable(() => import('../src/components/Confirm'))
const HeaderOld = loadable(() => import('../src/components/Header'))

const SmartAppBanner = loadable(() => import('../src/components/SmartAppBanner'))
const CancellationComponent = loadable(() => import('../src/components/CancellationComponent'))

const HeaderRed = loadable(() => import('../src/themes/seven/src/components/Header'))
const HeaderStarbucks = loadable(() => import('../src/themes/six/src/components/Header'))

const AddressList = loadable(() => import('./pages/AddressList'))
const BusinessesList = loadable(() => import('./pages/BusinessesList'))
const CheckoutPage = loadable(() => import('./pages/Checkout'))
const Cms = loadable(() => import('./pages/Cms'))
const HomePage = loadable(() => import('./pages/Home'))
const MyOrders = loadable(() => import('./pages/MyOrders'))
const OrderDetailsPage = loadable(() => import('./pages/OrderDetails'))
const PageNotFound = loadable(() => import('./pages/PageNotFound'))
const PagesList = loadable(() => import('./pages/PagesList'))
const Profile = loadable(() => import('./pages/Profile'))
const Wallets = loadable(() => import('./pages/Wallets'))
const MessagesList = loadable(() => import('./pages/MessagesList'))
const Help = loadable(() => import('./pages/Help'))
const Favorite = loadable(() => import('./pages/Favorite'))
const SessionsList = loadable(() => import('./pages/SessionsList'))
const SignUpBusiness = loadable(() => import('./pages/SignUpBusiness'))
const SignUpDriver = loadable(() => import('./pages/SignUpDriver'))
const UserVerification = loadable(() => import('./pages/UserVerification'))
const BusinessListingSearch = loadable(() => import('./pages/BusinessListingSearch'))
const ResetPassword = loadable(() => import('./pages/ResetPassword'))
const Promotions = loadable(() => import('./pages/Promotions'))
const MultiCheckout = loadable(() => import('./pages/MultiCheckout'))
const MultiCart = loadable(() => import('./pages/MultiCart'))
const MultiOrdersDetails = loadable(() => import('./pages/MultiOrdersDetails'))
const BusinessProductsList = loadable(() => import('./pages/BusinessProductsList'))

const ScrollToTop = loadable(() => import('./components/ScrollToTop'))
const ListenPageChanges = loadable(() => import('./components/ListenPageChanges'))
const HelmetTags = loadable(() => import('./components/HelmetTags'))

export const App = () => {
  const [{ auth, user }, { login }] = useSession()
  const [events] = useEvent()
  const [ordering] = useApi()
  const theme = useTheme()
  const [orderStatus, { changeType, getLastOrderHasNoReview }] = useOrder()
  const [{ configs, loading: configLoading }] = useConfig()
  const [{ loading: siteLoading }] = useSite()
  const [languageState, t] = useLanguage()
  const [orderingTheme] = useOrderingTheme()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const windowSize = useWindowSize()
  const [businessSignUpSuccessed, setBusinessSignUpSuccessed] = useState({ open: false, content: {} })
  const [searchValue, setSearchValue] = useState('')
  const [lastOrderReview, setLastOrderReview] = useState({
    isReviewOpen: false,
    order: null,
    defaultStar: 5,
    reviewStatus: { trigger: false, order: false, product: false, driver: false },
    reviewed: { isOrderReviewed: false, isProductReviewed: false, isDriverReviewed: false }
  })
  const [oneSignalState, setOneSignalState] = useState({
    notification_app: settings.notification_app
  })
  const unaddressedTypes = configs?.unaddressed_order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isAllowUnaddressOrderType = unaddressedTypes.includes(orderStatus?.options?.type)
  const isShowReviewsPopupEnabled = configs?.show_reviews_popups_enabled?.value === '1'
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null
  const isKioskApp = settings?.use_kiosk
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value

  let queryIntegrationToken
  let queryIntegrationCode
  if (location.search) {
    const query = new URLSearchParams(location.search)
    queryIntegrationCode = query.get('integration_code')
    queryIntegrationToken = query.get('integration_token')
  }

  const themeUpdated = {
    ...theme,
    ...orderingTheme?.theme,
    colors: {
      ...theme.colors,
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color && { primary: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color }),
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color && { links: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color })
    },
    images: {
      ...theme.images,
      general: {
        ...theme.images.general,
        homeHero: orderingTheme?.theme?.homepage_view?.components?.homepage_header?.components?.image || theme.images?.general?.homeHero,
        businessHero: orderingTheme?.theme?.business_listing_view?.components?.business_hero?.components?.image || theme.images?.general?.businessHero,
        notFound: orderingTheme?.theme?.business_listing_view?.components?.not_found_source?.components?.image || theme.images?.general?.notFound,
        emptyActiveOrders: orderingTheme?.theme?.orders?.components?.active_orders?.components?.not_found_source?.components?.image || theme.images?.general?.emptyActiveOrders,
        emptyPastOrders: orderingTheme?.theme?.orders?.components?.past_orders?.components?.not_found_source?.components?.image,
        notNetwork: orderingTheme?.theme?.no_internet?.components?.image || theme.images?.general?.notNetwork,
        businessSignUpHero: orderingTheme?.theme?.business_signup?.components?.icon?.components?.image || theme.images?.general?.businessSignUpHero,
        driverSignUpHero: orderingTheme?.theme?.driver_signup?.components?.icon?.components?.image || theme.images?.general?.driverSignUpHero
      },
      categories: {
        ...theme.images.categories,
        food: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.food?.image || theme.images.categories.categoryFood,
        groceries: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.groceries?.image || theme.images.categories.categoryGroceries,
        alcohol: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.alcohol?.image || theme.images.categories.categoryAlcohol,
        laundry: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.laundry?.image || theme.images.categories.categoryLaundry,
        all: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.all?.image || theme.images.categories.categoryAll
      },
      dummies: {
        ...theme.images.dummies,
        businessHeader: orderingTheme?.theme?.business_view?.components?.header?.components?.dummy_image || theme.images.dummies.businessHeader,
        businessLogo: orderingTheme?.theme?.business_view?.components?.header?.components?.logo?.dummy_image || theme.images.dummies.businessLogo,
        product: orderingTheme?.theme?.business_view?.components?.products?.components?.photo?.components?.dummy_image || theme.images.dummies.product
      },
      logos: {
        ...theme.images.logos,
        logotype: orderingTheme?.theme?.header?.components?.logo?.components?.image || theme.images.logos.logotype
      }
    }
  }

  const businessesSlug = {
    marketplace: 'marketplace',
    kiosk: settings?.businessSlug
  }

  const singleBusinessConfig = {
    isActive: settings?.use_marketplace || isKioskApp,
    businessSlug: businessesSlug[isKioskApp ? 'kiosk' : 'marketplace']
  }

  const signUpBusinesslayout = orderingTheme?.theme?.business_signup?.components?.layout?.type === 'old'
    ? 'old'
    : 'new'

  const signUpDriverlayout = orderingTheme?.theme?.driver_signup?.components?.layout?.type === 'old'
    ? 'old'
    : 'new'

  const HeaderComponent =
    isKioskApp ? HeaderKiosk
      : orderingTheme?.theme?.header?.components?.layout?.type === 'old'
        ? HeaderOld
        : orderingTheme?.theme?.header?.components?.layout?.type === 'red'
          ? HeaderRed
          : orderingTheme?.theme?.header?.components?.layout?.type === 'starbucks'
            ? HeaderStarbucks
            : Header

  const orderTypeSearchParam = parseInt(new URLSearchParams(useLocation()?.search)?.get('order_type') ?? 0, 10)
  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const isWalletEnabled = (configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' && (configs?.wallet_cash_enabled?.value === '1' || configs?.wallet_credit_point_enabled?.value === '1')) && !isKioskApp
  const isEmailVerifyRequired = auth && configs?.verification_email_required?.value === '1' && !user?.email_verified
  const isPhoneVerifyRequired = auth && configs?.verification_phone_required?.value === '1' && !user?.phone_verified
  const isUserVerifyRequired = (isEmailVerifyRequired || isPhoneVerifyRequired) && !isKioskApp
  const isHideFooter = orderingTheme?.theme?.footer?.hidden

  const isHome = location.pathname === '/' || location.pathname === '/home'
  const isFooterPage = location.pathname === '/pages/footer' || isKioskApp || isHideFooter

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const acceptAlert = () => {
    window.localStorage.setItem('front_version', configs?.front_version?.value)
    window.location.reload()
  }

  const handleSuccessSignup = (user) => {
    if (!user?.enabled && (configs?.business_signup_enabled_default?.value === '0' || configs?.driver_signup_enabled_default?.value === '0')) {
      signUpBusinesslayout === 'new'
        ? setBusinessSignUpSuccessed({
          open: true,
          content: {
            approvalType: 'no_automatic',
            businessType: user?.level,
            project: settings.project,
            dashboardUrl: settings.url_dashboard,
            dashboardLoginUrl: `${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`,
            contactEmail: settings.contact_email
          }
        }) : setAlertState({
          open: true,
          content: [t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')]
        })
      return
    }

    if (configs?.business_signup_enabled_default?.value === '1' || configs?.driver_signup_enabled_default?.value === '1') {
      signUpBusinesslayout === 'new' ? setBusinessSignUpSuccessed({
        open: true,
        content: {
          approvalType: 'automatic',
          businessType: user?.level,
          project: settings.project,
          dashboardUrl: settings.url_dashboard,
          dashboardLoginUrl: `${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`,
          contactEmail: settings.contact_email
        }
      }) : setAlertState({
        open: true,
        content: [
          `${t('PROJECT', 'Project')}: ${settings.project}`
        ],
        links: [
          <span key='url dashboard'>
            {`${t('DASHBOARD_WEBPAGE_MESSAGE', 'Dashboard webpage')}: `}
            <a
              target='blank'
              href={`${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`}
            >
              <span style={{ color: theme.colors.links }}>{settings.url_dashboard}</span>
            </a>
          </span>
        ],
        isOnlyAlert: true
      })

      login({
        user,
        token: user?.session?.access_token
      })
    }
  }

  const goToPage = (page, params) => {
    events.emit('go_to_page', { page, params })
  }

  const _getLastOrderHasNoReview = async () => {
    const lastOrderHasNoReview = await getLastOrderHasNoReview()
    lastOrderHasNoReview && OrderReviewRequired(lastOrderHasNoReview)
  }

  const reviewModalTitle = () => {
    if (lastOrderReview?.reviewStatus?.trigger) return t('HOW_WAS_YOUR_ORDER', 'How was your order?')
    if (lastOrderReview?.reviewStatus?.order) return t('REVIEW_ORDER', 'Review order')
    if (lastOrderReview?.reviewStatus?.product) return t('REVIEW_PRODUCT', 'Review Product')
    return t('REVIEW_DRIVER', 'Review Driver')
  }

  const OrderReviewRequired = (order) => {
    setLastOrderReview({
      isReviewOpen: !!((location?.pathname === '/' || location?.pathname === '/search' || location?.pathname === '/home')),
      order: order,
      defaultStar: 5,
      reviewStatus: { trigger: true, order: false, product: false, driver: false },
      reviewed: { isOrderReviewed: false, isProductReviewed: false, isDriverReviewed: false }
    })
  }

  const handleOpenOrderReview = (star) => {
    setLastOrderReview({
      ...lastOrderReview,
      defaultStar: star,
      reviewStatus: { trigger: false, order: true, product: false, driver: false }
    })
  }

  const handleCloseReivew = () => {
    setLastOrderReview({
      ...lastOrderReview,
      isReviewOpen: false,
      reviewStatus: { trigger: false, order: false, product: false, driver: false }
    })
  }

  const setIsReviewed = (reviewType) => {
    const _reviewStatus = { ...lastOrderReview?.reviewed }
    setLastOrderReview({
      ...lastOrderReview,
      reviewed: { ..._reviewStatus, [reviewType]: true }
    })
  }

  const closeReviewOrder = () => {
    const enableProduct = lastOrderReview?.order?.products.some(product => !product?.deleted)
    if (!lastOrderReview?.reviewed?.isProductReviewed && enableProduct) setLastOrderReview({ ...lastOrderReview, reviewStatus: { order: false, product: true, driver: false } })
    else if ((lastOrderReview?.order?.driver || enableProduct) && !lastOrderReview?.order?.user_review && !lastOrderReview?.reviewed?.isDriverReviewed) setLastOrderReview({ ...lastOrderReview, reviewStatus: { order: false, product: false, driver: true } })
    else handleCloseReivew()
  }

  const closeReviewProduct = () => {
    if (lastOrderReview?.order?.driver && !lastOrderReview?.order?.user_review && !lastOrderReview?.reviewed?.isDriverReviewed) setLastOrderReview({ ...lastOrderReview, reviewStatus: { order: false, product: false, driver: true } })
    else {
      setIsReviewed('isDriverReviewed')
      handleCloseReivew()
    }
  }

  useEffect(() => {
    const link = document.createElement('link')
    const oldLink = document.getElementById('favicon')
    link.id = 'favicon'
    link.rel = 'icon'
    link.href = themeUpdated?.general?.components?.favicon?.components?.image || themeUpdated?.general?.components?.favicon
    if (oldLink) {
      document.head.removeChild(oldLink)
    }
    document.head.appendChild(link)
    const fonts = Object.entries(themeUpdated?.general?.components?.fonts || {})
    fonts.forEach(([name, fontFamily]) => {
      const fontElement = window.document.getElementById(`${name}-font-styles`)
      if (
        (fontElement?.name !== fontFamily.name && fontFamily.name) ||
        (fontElement?.href !== fontFamily?.href && fontFamily?.href) ||
        (JSON.stringify(fontElement?.weights) !== JSON.stringify(fontFamily?.weights) && fontFamily?.weights)
      ) {
        window.document.body.removeChild(window.document.getElementById(`${name}-font-styles`))
        const font = window.document.createElement('link')
        font.id = `${name}-font-styles`
        font.rel = 'stylesheet'
        font.async = true
        font.defer = true
        font.name = fontFamily.name
        const weights = typeof fontFamily?.weights === 'number' ? fontFamily?.weights : JSON.parse(fontFamily?.weights)?.join?.(';')
        font.href = fontFamily.href || `https://fonts.googleapis.com/css2?family=${fontFamily?.name}:wght@${weights || [400]}&display=swap`

        window.document.body.appendChild(font)
        if (name === 'primary') {
          window.document.body.style.fontFamily = fontFamily.name
        }
      }
    })
  }, [themeUpdated])

  useEffect(() => {
    if (!isShowReviewsPopupEnabled) return
    const _user = window.localStorage.getItem('user')
    const _token = window.localStorage.getItem('token')
    const _reviewRequired = window.sessionStorage.getItem('review-required')
    if (((_user || _token) && auth) && _reviewRequired !== '1') {
      window.sessionStorage.setItem('review-required', '1')
      _getLastOrderHasNoReview()
    }
    if (!(_user || _token)) {
      window.sessionStorage.removeItem('review-required')
    }
  }, [auth, isShowReviewsPopupEnabled])

  useEffect(() => {
    if (!loaded && !orderStatus.loading && !configLoading && !siteLoading && !orderingTheme?.loading) {
      if (orderTypeSearchParam && configTypes.includes(orderTypeSearchParam)) {
        changeType(parseInt(orderTypeSearchParam, 10))
        if (orderStatus?.options?.type === parseInt(orderTypeSearchParam, 10)) {
          setLoaded(true)
        }
        return
      }
      setLoaded(true)
    }
  }, [orderStatus, configLoading, siteLoading, orderingTheme])

  useEffect(() => {
    if (configs?.front_version?.value && loaded) {
      const localStorageFrontVersion = window.localStorage.getItem('front_version')
      if (localStorageFrontVersion && localStorageFrontVersion !== configs?.front_version?.value) {
        setAlertState({
          open: true,
          content: [t('RELOAD_FRONT_QUESTION', 'There is a new version of Ordering! Do you want to update it?')]
        })
      }
    }
  }, [configs, loaded])

  useEffect(() => {
    if (isHome && settings?.use_marketplace) {
      goToPage('business', { store: 'marketplace' })
    }
  }, [])

  useEffect(() => {
    if (
      languageState?.error &&
      languageState?.error?.includes('This project does not exist') &&
      settings?.use_project_subdomain
    ) {
      window.open('https://www.ordering.co', '_self')
    }
  }, [languageState])

  useEffect(() => {
    if (!orderStatus.loading) {
      const localCountryCode = orderStatus?.options?.address?.country_code ??
        window.localStorage.getItem('country-code')

      if (localCountryCode) {
        ordering.setCountryCode && ordering.setCountryCode(localCountryCode)
      }
    }
  }, [orderStatus])

  const oneSignalSetup = () => {
    const OneSignal = window.OneSignal || []
    const initConfig = {
      appId: configs?.onesignal_orderingweb_id?.value,
      // allowLocalhostAsSecureOrigin: true,
      notificationClickHandlerAction: 'navigate'
    }

    OneSignal.push(function () {
      OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' }
      OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
      OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
      OneSignal.init(initConfig)

      const onNotificationClicked = function (data) {
        if (data?.additionalData?.order_uuid) {
          history.push(`/orders/${data?.additionalData?.order_uuid}`)
        }
      }
      const handler = function (data) {
        onNotificationClicked(data)
        OneSignal.addListenerForNotificationOpened(handler)
      }
      OneSignal.addListenerForNotificationOpened(handler)

      OneSignal.on('subscriptionChange', function (isSubscribed) {
        console.log("The user's subscription state is now:", isSubscribed)
        if (isSubscribed) {
          OneSignal.getUserId((userId) => {
            const data = {
              ...oneSignalState,
              notification_token: userId
            }
            setOneSignalState(data)
          })
        }
      })

      OneSignal.getUserId((userId) => {
        const data = {
          ...oneSignalState,
          notification_token: userId
        }
        setOneSignalState(data)
      })
    })
  }

  useEffect(() => {
    if (configLoading) return
    oneSignalSetup()
  }, [configLoading])

  return settings.isCancellation ? (
    <CancellationComponent
      ButtonComponent={Button}
      InputComponent={Input}
    />
  ) : (
    <div style={{ marginBottom: windowSize.width < 576 && onlineStatus ? 80 : 0 }}>
      {!!configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      {!!configs?.segment_track_id?.value && (
        <AnalyticsSegment writeKey={configs?.segment_track_id?.value} />
      )}
      {!!configs?.facebook_id?.value && FacebookPixel && (
        <FacebookPixel trackId={configs?.facebook_id?.value} />
      )}
      {!loaded && <SpinnerLoader />}
      <SmartAppBanner
        storeAndroidId={settings?.store_android_id !== '0' ? settings?.store_android_id : false}
        storeAppleId={settings?.store_apple_id !== '0' ? settings?.store_apple_id : false}
        storeKindleId={settings?.store_kindle_id !== '0' ? settings?.store_kindle_id : false}
      />
      {
        loaded && (
          <ThemeProvider
            theme={orderingThemeUpdated(theme, orderingTheme)}
          >
            <ListenPageChanges />
            {!(isKioskApp && isHome) && (
              <HeaderComponent
                isHome={isHome}
                location={location}
                isCustomLayout={singleBusinessConfig.isActive}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                notificationState={oneSignalState}
              />
            )}
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      isKioskApp
                        ? <HomePage notificationState={oneSignalState} />
                        : (orderStatus.options?.address?.location || isAllowUnaddressOrderType)
                          ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/search'} />
                          : singleBusinessConfig.isActive
                            ? <Redirect to={`/${singleBusinessConfig.businessSlug}`} />
                            : <HomePage notificationState={oneSignalState} />
                    )}
                  </Route>
                  <Route exact path='/'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      isKioskApp
                        ? <HomePage notificationState={oneSignalState} />
                        : queryIntegrationToken && queryIntegrationCode === 'spoonity'
                          ? <QueryLoginSpoonity token={queryIntegrationToken} />
                          : (orderStatus.options?.address?.location || isAllowUnaddressOrderType)
                            ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/search'} />
                            : singleBusinessConfig.isActive
                              ? <Redirect to={`/${singleBusinessConfig.businessSlug}`} />
                              : <HomePage notificationState={oneSignalState} />
                    )}
                  </Route>
                  <Route exact path='/wallets'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : isWalletEnabled
                          ? <Wallets />
                          : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                      : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />}
                  </Route>
                  <Route exact path='/signup_business'>
                    {!auth && !isKioskApp ? (
                      <SignUpBusiness
                        elementLinkToLogin={<Link to='/'>{t('LOGIN', 'Login')}</Link>}
                        useLoginByCellphone
                        useChekoutFileds
                        handleSuccessSignup={handleSuccessSignup}
                        layout={signUpBusinesslayout}
                        isRecaptchaEnable
                      />
                    ) : (
                      <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                    )}
                  </Route>
                  <Route exact path='/signup-driver'>
                    {!auth && !isKioskApp ? (
                      <SignUpDriver
                        layout={signUpDriverlayout}
                        elementLinkToLogin={<Link to='/'>{t('LOGIN', 'Login')}</Link>}
                        useLoginByCellphone
                        useChekoutFileds
                        handleSuccessSignup={handleSuccessSignup}
                        isRecaptchaEnable
                      />
                    ) : (
                      <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                    )}
                  </Route>
                  <Route exact path='/password/reset'>
                    {auth ? (
                      <Redirect to='/' />
                    ) : (
                      isKioskApp
                        ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                        : <ResetPassword />
                    )}
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Profile userId={user?.id} accessToken={user?.session?.access_token} useValidationFields />)
                      : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />}
                  </Route>
                  <Route exact path='/verify'>
                    {isUserVerifyRequired
                      ? <UserVerification />
                      : <Redirect to={(auth || isKioskApp) ? singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/search' : '/'} />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<MyOrders />)
                      : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />}
                  </Route>
                  <Route exact path='/profile/addresses'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<AddressList />)
                      : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />}
                  </Route>
                  <Route exact path='/messages'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MessagesList />
                      : (
                        isKioskApp
                          ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                          : <Redirect to={{ pathname: '/search' }} />
                      )}
                  </Route>
                  <Route exact path='/help'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Help />)
                      : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />}
                  </Route>
                  <Route exact path='/search'>
                    {
                      isKioskApp
                        ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                        : queryIntegrationToken && queryIntegrationCode === 'spoonity'
                          ? <QueryLoginSpoonity token={queryIntegrationToken} />
                          : (
                            orderStatus.loading && !orderStatus.options?.address?.location ? (
                              <SpinnerLoader />
                            ) : (
                              isUserVerifyRequired ? (
                                <Redirect to='/verify' />
                              ) : (
                                (orderStatus.options?.address?.location || isAllowUnaddressOrderType)
                                  ? <BusinessesList searchValueCustom={searchValue} />
                                  : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                              )
                            )
                          )
                    }
                  </Route>
                  <Route exact path='/business_search'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      (orderStatus.options?.address?.location || isAllowUnaddressOrderType) && !isKioskApp ? (
                        <BusinessListingSearch />
                      ) : (
                        <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                      )
                    )}
                  </Route>
                  <Route exact path='/promotions'>
                    {orderStatus.loading && !orderStatus.options?.address?.location ? (
                      <SpinnerLoader />
                    ) : (
                      isUserVerifyRequired ? (
                        <Redirect to='/verify' />
                      ) : (
                        orderStatus.options?.address?.location && !isKioskApp
                          ? <Promotions />
                          : <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/'} />
                      )
                    )}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <CheckoutPage />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-checkout/:cartUuid?'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MultiCheckout />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-cart'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MultiCart />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-orders/:orderId'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MultiOrdersDetails />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {(auth || hashKey)
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <OrderDetailsPage />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/promotions'>
                    {(auth || hashKey)
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <Promotions />
                      : (
                        <Redirect to={{
                          pathname: singleBusinessConfig.isActive
                            ? `/${singleBusinessConfig.businessSlug}`
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <Cms />
                    )}
                  </Route>
                  <Route exact path='/pages'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <PagesList />
                    )}
                  </Route>
                  <Route exact path='/favorite'>
                    {auth && !isKioskApp
                      ? <Favorite />
                      : (
                        <Redirect to='/' />
                      )}
                  </Route>
                  <Route exact path='/sessions'>
                    {auth && !isKioskApp
                      ? <SessionsList />
                      : (
                        <Redirect to='/' />
                      )}
                  </Route>
                  <Route exact path='/store'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/store/:business_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/store/:business_slug/:category_slug/:product_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/store/:category_slug/:product_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/:business_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/:business_slug/:category_slug/:product_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route exact path='/:business_slug/:category_slug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            {!navigator.userAgent.match('CriOS') && (
              <PWAPrompt promptOnVisit={1} timesToShow={100} copyClosePrompt='Close' permanentlyHideOnDismiss={false} />
            )}
            {(!isFooterPage || enabledPoweredByOrdering) && (
              <Footer isFooterPage={isFooterPage} />
            )}
            {(windowSize.width < 576 && onlineStatus) && (
              <NavigationBar />
            )}
            <Alert
              title={t('INFORMATION', 'Information')}
              content={alertState.content}
              links={alertState.links}
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => closeAlert()}
              onCancel={() => closeAlert()}
              onAccept={() => alertState?.isOnlyAlert ? closeAlert() : acceptAlert()}
              closeOnBackdrop={false}
            />
            {lastOrderReview?.isReviewOpen && (
              <Modal
                open={lastOrderReview?.isReviewOpen}
                onClose={handleCloseReivew}
                title={lastOrderReview?.order && reviewModalTitle()}
                width={lastOrderReview?.reviewStatus?.trigger ? '680px' : null}
              >
                <div>
                  {
                    lastOrderReview?.reviewStatus?.trigger
                      ? <ReviewTrigger order={lastOrderReview?.order} handleOpenOrderReview={handleOpenOrderReview} />
                      : lastOrderReview?.reviewStatus?.order
                        ? <ReviewOrder order={lastOrderReview?.order} defaultStar={lastOrderReview?.defaultStar} closeReviewOrder={closeReviewOrder} setIsReviewed={() => setIsReviewed('isOrderReviewed')} />
                        : (lastOrderReview?.reviewStatus?.product
                          ? <ReviewProduct order={lastOrderReview?.order} closeReviewProduct={closeReviewProduct} setIsProductReviewed={() => setIsReviewed('isProductReviewed')} />
                          : <ReviewDriver order={lastOrderReview?.order} closeReviewDriver={handleCloseReivew} setIsDriverReviewed={() => setIsReviewed('isDriverReviewed')} />)
                  }
                </div>
              </Modal>
            )}
            <Modal
              open={businessSignUpSuccessed?.open}
              onClose={() => setBusinessSignUpSuccessed({ open: false, content: {} })}
              title={t('CONGRATULATIONS', 'Congratulations')}
              width='990px'
            >
              <SignUpApproval
                content={businessSignUpSuccessed?.content}
                onAccept={() => acceptAlert()}
                onCancel={() => setBusinessSignUpSuccessed({ open: false, content: {} })}
              />
            </Modal>
          </ThemeProvider>
        )
      }
    </div>
  )
}
