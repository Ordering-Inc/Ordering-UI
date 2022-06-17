import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder, Analytics, FacebookPixel, useConfig } from 'ordering-components'

import { Header } from '../src/themes/five/src/components/Header'
import { Footer } from '../src/themes/five/src/components/Footer'
import { NotNetworkConnectivity } from '../src/themes/five/src/components/NotNetworkConnectivity'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { Alert } from '../src/components/Confirm'
import { SmartAppBanner } from '../src/components/SmartAppBanner'

import { useTheme } from 'styled-components'

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
import { SignUpBusiness } from './pages/SignUpBusiness'
import { UserVerification } from './pages/UserVerification'
import { BusinessListingSearch } from './pages/BusinessListingSearch'
import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'
import settings from './config.json'

export const App = () => {
  const [{ auth, user, loading }, { login }] = useSession()
  const theme = useTheme()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null

  const isWalletEnabled = configs?.cash_wallet?.value === '1' &&
    configs?.wallet_enabled?.value === '1' &&
    (configs?.wallet_cash_enabled?.value === '1' || configs?.wallet_credit_point_enabled?.value === '1')
  const isEmailVerifyRequired = auth && configs?.verification_email_required?.value === '1' && !user?.email_verified
  const isPhoneVerifyRequired = auth && configs?.verification_phone_required?.value === '1' && !user?.phone_verified
  const isUserVerifyRequired = isEmailVerifyRequired || isPhoneVerifyRequired

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
  const isFooterPage = location.pathname === '/pages/footer'

  const handleSuccessSignup = (user) => {
    if (!user?.enabled && configs?.business_signup_enabled_default?.value === '0') {
      setAlertState({
        open: true,
        content: [t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')]
      })
      return
    }
    if (configs?.business_signup_enabled_default?.value === '1') {
      setAlertState({
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
    }
    login({
      user,
      token: user?.session?.access_token
    })
  }

  useEffect(() => {
    if (!loaded && !orderStatus.loading) {
      setLoaded(true)
    }
  }, [orderStatus])

  useEffect(() => {
    if (!loading) {
      setLoaded(!auth)
    }
  }, [loading])

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

  return (
    <>
      {!!configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      {!!configs?.facebook_id?.value && FacebookPixel && (
        <FacebookPixel trackId={configs?.facebook_id?.value} />
      )}
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader />
        )
      }
      <SmartAppBanner
        storeAndroidId={settings?.store_android_id !== '0' ? settings?.store_android_id : false}
        storeAppleId={settings?.store_apple_id !== '0' ? settings?.store_apple_id : false}
        storeKindleId={settings?.store_kindle_id !== '0' ? settings?.store_kindle_id : false}
      />
      {
        loaded && (
          <>
            <Header
              isHome={isHome}
              location={location}
              isCustomLayout={settings?.use_marketplace}
            />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location
                        ? <Redirect to={settings?.use_marketplace ? '/marketplace' : '/search'} />
                        : settings?.use_marketplace
                          ? <Redirect to={settings?.use_marketplace ? '' : '/search'} />
                          : <HomePage />
                    )}
                  </Route>
                  <Route exact path='/'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location
                        ? <Redirect to={settings?.use_marketplace ? '/marketplace' : '/search'} />
                        : <HomePage />
                    )}
                  </Route>
                  <Route exact path='/signup_business'>
                    {!auth ? (
                      <SignUpBusiness
                        elementLinkToLogin={<Link to='/'>{t('LOGIN', 'Login')}</Link>}
                        useLoginByCellphone
                        useChekoutFileds
                        handleSuccessSignup={handleSuccessSignup}
                        isRecaptchaEnable
                      />
                    ) : (
                      <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                    )}
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Profile userId={user?.id} accessToken={user?.session?.access_token} useValidationFields />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/verify'>
                    {isUserVerifyRequired
                      ? <UserVerification />
                      : <Redirect to={auth ? settings?.use_marketplace ? '/marketplace' : '/search' : '/'} />}
                  </Route>
                  <Route exact path='/wallets'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : isWalletEnabled
                          ? <Wallets />
                          : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<MyOrders />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/messages'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MessagesList />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/help'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Help />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/search'>
                    {orderStatus.loading && !orderStatus.options?.address?.location ? (
                      <SpinnerLoader />
                    ) : (
                      isUserVerifyRequired ? (
                        <Redirect to='/verify' />
                      ) : (
                        orderStatus.options?.address?.location
                          ? <BusinessesList />
                          : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      )
                    )}
                  </Route>
                  <Route exact path='/business_search'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location ? (
                        <BusinessListingSearch />
                      ) : (
                        <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      )
                    )}

                  </Route>
                  <Route exact path='/store/:store'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <CheckoutPage />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
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
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
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
                  <Route exact path='/:store'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <Redirect to={{
                        pathname: `/store${location.pathname}`,
                        state: { from: location.pathname || null }
                      }}
                      />
                    )}
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            {!isFooterPage && (
              <Footer />
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
          </>
        )
      }
    </>
  )
}
