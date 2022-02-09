import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder, Analytics, useConfig } from 'ordering-components'
import {Header} from '../src/themes/five/src/components/Header'
import {Footer} from '../src/themes/five/src/components/Footer'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { Alert } from '../src/components/Confirm'

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

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'

export const App = () => {
  const [{ auth, user, loading }, { login }] = useSession()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null

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
      {configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader />
        )
      }
      {
        loaded && (
          <>
            <Header
              isHome={isHome}
              location={location}
            />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {
                      orderStatus.options?.address?.location
                        ? <Redirect to='/search' />
                        : <HomePage />
                    }
                  </Route>
                  <Route exact path='/'>
                    {
                      orderStatus.options?.address?.location
                        ? <Redirect to='/search' />
                        : <HomePage />
                    }
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? (<Profile userId={user?.id} accessToken={user?.session?.access_token} useValidationFields />)
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/wallets'>
                    {auth
                      ? (<Wallets />)
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? (<MyOrders />)
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/messages'>
                    {auth
                      ? <MessagesList />
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
                      ? (<Help />)
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/search'>
                    {orderStatus.loading && !orderStatus.options?.address?.location ? (
                      <SpinnerLoader />
                    ) : (
                      orderStatus.options?.address?.location
                        ? <BusinessesList />
                        : <Redirect to='/' />
                    )}
                  </Route>
                  <Route exact path='/store/:store'>
                    <BusinessProductsList />
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? <CheckoutPage />
                      : (
                        <Redirect to={{
                          pathname: '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {(auth || hashKey)
                      ? <OrderDetailsPage />
                      : (
                        <Redirect to={{
                          pathname: '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    <Cms />
                  </Route>
                  <Route exact path='/pages'>
                    <PagesList />
                  </Route>
                  <Route exact path='/:store'>
                    <BusinessProductsList />
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
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => closeAlert()}
              onCancel={() => closeAlert()}
              onAccept={() => acceptAlert()}
              closeOnBackdrop={false}
            />
          </>
        )
      }
    </>
  )
}
