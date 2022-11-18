import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useTheme, ThemeProvider } from 'styled-components'
import PWAPrompt from 'react-ios-pwa-prompt'

import { useSession, useApi, useLanguage, useOrder, Analytics, FacebookPixel, useConfig, AnalyticsSegment, useEvent, useOrderingTheme, useSite } from 'ordering-components'
import { Header } from '../src/themes/five/src/components/Header'
import { Header as HeaderKiosk } from '../src/themes/five/src/components/Header/layouts/Kiosk'
import { Footer } from '../src/themes/five/src/components/Footer'
import { NotNetworkConnectivity } from '../src/themes/five/src/components/NotNetworkConnectivity'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { Header as HeaderOld } from '../src/components/Header'
import { Header as HeaderRed } from '../src/themes/seven/src/components/Header'
import { Header as HeaderStarbucks } from '../src/themes/six/src/components/Header'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { useWindowSize } from '../src/hooks/useWindowSize'
import { Alert } from '../src/components/Confirm'
import { SmartAppBanner } from '../src/components/SmartAppBanner'

import { NavigationBar } from '../src/themes/five/src/components/NavigationBar'
import { Modal } from '../src/themes/five/src/components/Modal'

import { ReviewTrigger } from '../src/themes/five/src/components/ReviewTrigger'
import { ReviewOrder } from '../src/themes/five/src/components/ReviewOrder'
import { ReviewProduct } from '../src/themes/five/src/components/ReviewProduct'
import { ReviewDriver } from '../src/themes/five/src/components/ReviewDriver'
import { SignUpApproval } from '../src/themes/five/src/components/SignUpApproval'

import { AddressList } from './pages/AddressList'
import { BusinessesList } from './pages/BusinessesList'
import { BusinessProductsList } from './pages/BusinessProductsList'
import { CheckoutPage } from './pages/Checkout'
import { Cms } from './pages/Cms'
import { HomePage } from './pages/Home'
import { MyOrders } from './pages/MyOrders'
import { OrderDetailsPage } from './pages/OrderDetails'
import { PageNotFound } from './pages/PageNotFound'
import { PagesList } from './pages/PagesList'
import { Profile } from './pages/Profile'
import { Wallets } from './pages/Wallets'
import { MessagesList } from './pages/MessagesList'
import { Help } from './pages/Help'
import { Favorite } from './pages/Favorite'
import { SessionsList } from './pages/SessionsList'
import { SignUpBusiness } from './pages/SignUpBusiness'
import { SignUpDriver } from './pages/SignUpDriver'
import { UserVerification } from './pages/UserVerification'
import { BusinessListingSearch } from './pages/BusinessListingSearch'
import { ResetPassword } from './pages/ResetPassword'
import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'
import settings from './config'
import { Promotions } from './pages/Promotions'
import { MultiCheckout } from './pages/MultiCheckout'
import { MultiOrdersDetails } from './pages/MultiOrdersDetails'
import { CancellationComponent } from '../src/components/CancellationComponent'
import { Button } from '../src/themes/five/src/styles/Buttons'
import { Input } from '../src/themes/five/src/styles/Inputs'

export const App = () => {
  const [{ auth, user }, { login }] = useSession()
  const [events] = useEvent()
  const [ordering] = useApi()
  const theme = useTheme()
  const [orderStatus, { changeType, getLastOrderHasNoReview }] = useOrder()
  const [{ configs, loading: configLoading }] = useConfig()
  const [{ loading: siteLoading }] = useSite()
  const [, t] = useLanguage()
  const [orderingTheme] = useOrderingTheme()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const windowSize = useWindowSize()
  const [businessSignUpSuccessed, setBusinessSignUpSuccessed] = useState({ open: false, content: {} })
  const [lastOrderReview, setLastOrderReview] = useState({
    isReviewOpen: false,
    order: null,
    defaultStar: 5,
    reviewStatus: { trigger: false, order: false, product: false, driver: false },
    reviewed: { isOrderReviewed: false, isProductReviewed: false, isDriverReviewed: false }
  })
  const isShowReviewsPopupEnabled = configs?.show_reviews_popups_enabled?.value === '1'
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null
  const isKioskApp = settings?.use_kiosk

  const themeUpdated = {
    ...theme,
    ...orderingTheme?.theme,
    colors: {
      ...theme.colors,
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color && { primary: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color }),
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color && { links: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color })
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

  const isHome = location.pathname === '/' || location.pathname === '/home'
  const isFooterPage = location.pathname === '/pages/footer' || isKioskApp

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
            dashboardLoginUrl: `${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`
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
          dashboardLoginUrl: `${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`
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
      isReviewOpen: true,
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
    if (!orderStatus.loading) {
      const localCountryCode = orderStatus?.options?.address?.country_code ??
        window.localStorage.getItem('country-code')

      if (localCountryCode) {
        ordering.setCountryCode && ordering.setCountryCode(localCountryCode)
      }
    }
  }, [orderStatus])

  return settings.isCancellation ? (
    <CancellationComponent
      ButtonComponent={Button}
      InputComponent={Input}
    />
  )
    : (
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
            <ThemeProvider theme={themeUpdated}>
              <ListenPageChanges />
              {!(isKioskApp && isHome) && windowSize.width > 576 && (
                <HeaderComponent
                  isHome={isHome}
                  location={location}
                  isCustomLayout={singleBusinessConfig.isActive}
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
                          ? <HomePage />
                          : orderStatus.options?.address?.location
                            ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/search'} />
                            : singleBusinessConfig.isActive
                              ? <Redirect to={singleBusinessConfig.isActive ? '' : '/search'} />
                              : <HomePage />
                      )}
                    </Route>
                    <Route exact path='/'>
                      {isUserVerifyRequired ? (
                        <Redirect to='/verify' />
                      ) : (
                        isKioskApp
                          ? <HomePage />
                          : orderStatus.options?.address?.location
                            ? <Redirect to={singleBusinessConfig.isActive ? `/${singleBusinessConfig.businessSlug}` : '/search'} />
                            : <HomePage />
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
                          : (
                            orderStatus.loading && !orderStatus.options?.address?.location ? (
                              <SpinnerLoader />
                            ) : (
                              isUserVerifyRequired ? (
                                <Redirect to='/verify' />
                              ) : (
                              orderStatus.options?.address?.location
                                ? <BusinessesList />
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
                      orderStatus.options?.address?.location && !isKioskApp ? (
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
                    <Route path='/multi-checkout'>
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
                    <Route path='/multi-orders'>
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
                    <Route path='*'>
                      <PageNotFound />
                    </Route>
                  </Switch>
                </ScrollToTop>
              )}
              {!navigator.userAgent.match('CriOS') && (
                <PWAPrompt promptOnVisit={1} timesToShow={100} copyClosePrompt='Close' permanentlyHideOnDismiss={false} />
              )}
              {!isFooterPage && (
                <Footer />
              )}
              {windowSize.width < 576 && onlineStatus && (
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
