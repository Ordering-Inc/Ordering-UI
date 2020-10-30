import React, { useEffect, useState, Suspense, lazy } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder } from 'ordering-components'

import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'

// import { Home } from './Pages/Home'
// import { SignUp } from './pages/SignUp'
// import { Login } from './Pages/Login'
// import { ForgotPassword } from './pages/ForgotPassword'
// import { Profile } from './Pages/Profile'
// import { MyOrders } from './Pages/MyOrders'
// import { BusinessesList } from './Pages/BusinessesList'
// import { BusinessProductsList } from './Pages/BusinessProductsList'
// import { Checkout } from './Pages/Checkout'
// import { OrderDetails } from './Pages/OrderDetails'
// import { Cms } from './Pages/Cms'
// import { PagesList } from './Pages/PagesList'
// import { PageNotFound } from './Pages/PageNotFound'

const Home = lazy(() => import('./Pages/Home'))
const SignUp = lazy(() => import('./Pages/SignUp'))
const Login = lazy(() => import('./Pages/Login'))
const ForgotPassword = lazy(() => import('./Pages/ForgotPassword'))
const Profile = lazy(() => import('./Pages/Profile'))
const MyOrders = lazy(() => import('./Pages/MyOrders'))
const BusinessesList = lazy(() => import('./Pages/BusinessesList'))
const BusinessProductsList = lazy(() => import('./Pages/BusinessProductsList'))
const Checkout = lazy(() => import('./Pages/Checkout'))
const OrderDetails = lazy(() => import('./Pages/OrderDetails'))
const Cms = lazy(() => import('./Pages/Cms'))
const PagesList = lazy(() => import('./Pages/PagesList'))
const PageNotFound = lazy(() => import('./Pages/PageNotFound'))

export const App = () => {
  const [{ auth, user }, sessionDispatch] = useSession()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(!auth)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()

  const isHome = location.pathname === '/' || location.pathname === '/home'

  const handleSuccessSignup = (user) => {
    sessionDispatch({
      type: 'login',
      user,
      token: user.session.access_token
    })
  }

  useEffect(() => {
    if (!loaded && !orderStatus.loading) {
      setLoaded(true)
    }
  }, [orderStatus])

  return (
    <>
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
        )
      }
      {
        loaded && (
          <>
            <Header isHome={isHome} />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <Suspense
                  fallback={<SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />}
                >
                  <Switch>
                    <Route
                      exact
                      path='/home'
                      render={() => {
                        return (
                          orderStatus.options?.address?.location
                            ? <Redirect to='/search' />
                            : <Home />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/'
                      render={() => {
                        return (
                          orderStatus.options?.address?.location
                            ? <Redirect to='/search' />
                            : <Home />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/signup'
                      render={() => {
                        return (
                          !auth ? (
                            <SignUp
                              elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                              useLoginByCellphone
                              useChekoutFileds
                              handleSuccessSignup={handleSuccessSignup}
                            />)
                            : <Redirect to='/' />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/login'
                      render={() => {
                        return (
                          !auth ? (
                            <Login
                              elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                              elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                              useLoginByCellphone
                            />
                          ) : (
                            orderStatus?.options?.user_id && !orderStatus?.loading ? (
                              orderStatus.options?.address?.location
                                ? <Redirect to='/search' />
                                : <Redirect to='/' />
                            ) : (
                              <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
                            ))
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/signin'
                      render={() => {
                        return (
                          !auth ? (
                            <Login
                              elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                              elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                              useLoginByCellphone
                            />
                          ) : (
                            orderStatus?.options?.user_id && !orderStatus?.loading ? (
                              orderStatus.options?.address?.location
                                ? <Redirect to='/search' />
                                : <Redirect to='/' />
                            ) : (
                              <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
                            ))
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/password/forgot'
                      render={() => {
                        return (
                          !auth
                            ? <ForgotPassword elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>} />
                            : <Redirect to='/' />
                        )
                      }}
                    />
                    <Route exact path='/password/reset'>
                      Password reset
                    </Route>
                    <Route
                      exact
                      path='/profile'
                      render={() => {
                        return (
                          auth ? (
                            <Profile
                              userId={user.id}
                              accessToken={user.session.access_token}
                              useChekoutFileds
                              useValidationFileds
                            />
                          ) : (<Redirect to='/' />)
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/profile/orders'
                      render={() => {
                        return (
                          auth
                            ? <MyOrders />
                            : <Redirect to='/login' />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/search'
                      render={() => {
                        return (
                          orderStatus.options?.address?.location
                            ? <BusinessesList />
                            : <Redirect to='/' />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/store/:store'
                      render={() => <BusinessProductsList />}
                    />
                    <Route
                      exact
                      path='/checkout/:cartUuid?'
                      render={() => {
                        return (
                          auth
                            ? <Checkout />
                            : <Redirect to='/login' />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/:store'
                      render={() => <BusinessProductsList />}
                    />
                    <Route
                      exact
                      path='/orders/:orderId'
                      render={() => {
                        return (
                          auth
                            ? <OrderDetails />
                            : <Redirect to='/login' />
                        )
                      }}
                    />
                    <Route
                      exact
                      path='/pages/:pageSlug'
                      render={() => <Cms />}
                    />
                    <Route
                      exact
                      path='/pages'
                      render={() => <PagesList />}
                    />
                    <Route path='*' render={() => <PageNotFound />} />
                  </Switch>
                </Suspense>
              </ScrollToTop>
            )}
            <Footer />
          </>
        )
      }
    </>
  )
}
