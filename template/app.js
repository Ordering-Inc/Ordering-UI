import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder } from 'ordering-components'

import { ForgotPassword } from './pages/ForgotPassword'
import { SignUp } from './pages/SignUp'
import { BusinessesList } from './Pages/BusinessesList'
import { BusinessProductsList } from './Pages/BusinessProductsList'
import { Login } from './Pages/Login'
import { OrderDetailsPage } from './Pages/OrderDetails'
import { CheckoutPage } from './Pages/Checkout'
import { Cms } from './Pages/Cms'
import { Profile } from './Pages/Profile'
import { MyOrders } from './Pages/MyOrders'
import { PageNotFound } from './Pages/PageNotFound'
import { HomePage } from '../template/Pages/Home'
import { Header } from '../src/components/Header'
import { Footer } from './components/Footer'
import ScrollToTop from '../src/utils/ScrollToTop'
import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { ListenPageChanges } from './components/ListenPageChanges'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { PagesList } from './Pages/PagesList'

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

  const routes = [
    { name: 'Home', slug: '/home' },
    { name: 'Sign Up', slug: '/signup' },
    { name: 'Login', slug: '/login' },
    { name: 'Sign In', slug: '/signin' },
    { name: 'Forgot Password', slug: '/password/forgot' },
    { name: 'Reset Password', slug: '/password/reset' },
    { name: 'Profile', slug: '/profile' },
    { name: 'My Orders', slug: '/profile/orders' },
    { name: 'Search Businesses', slug: '/search' },
    { name: 'Checkout', slug: '/checkout' },
    { name: 'Pages', slug: '/pages' }
  ]

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
                <Switch>
                  <Route exact path='/home'>
                    <HomePage />
                  </Route>
                  <Route exact path='/'>
                    {
                    orderStatus.options?.address?.location
                      ? <Redirect to='/search' />
                      : <HomePage />
                    }
                  </Route>
                  <Route exact path='/signup'>
                    {
                      !auth
                        ? (
                          <SignUp
                            elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                            useLoginByCellphone
                            useChekoutFileds
                            handleSuccessSignup={handleSuccessSignup}
                          />
                        )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/login'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                        orderStatus?.options?.user_id && !orderStatus?.loading ? (
                          orderStatus.options?.address?.location
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        ) : (
                          <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
                        )
                        )
                    }
                  </Route>
                  <Route exact path='/signin'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                        orderStatus?.options?.user_id && !orderStatus?.loading ? (
                          orderStatus.options?.address?.location
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        ) : (
                          <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
                        )
                        )
                    }
                  </Route>
                  <Route exact path='/password/forgot'>
                    {
                      !auth ? (
                        <ForgotPassword
                          elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                        />
                      )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/password/reset'>
                  Password reset
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? (<Profile userId={user.id} accessToken={user.session.access_token} useChekoutFileds useValidationFileds />)
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? (<MyOrders />)
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/search'>
                    {
                    orderStatus.options?.address?.location
                      ? <BusinessesList />
                      : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/store/:store'>
                    <BusinessProductsList />
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {auth
                      ? <OrderDetailsPage />
                      : <Redirect to='/login' />}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? <CheckoutPage />
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    <Cms />
                  </Route>
                  <Route exact path='/pages'>
                    <PagesList routes={routes} />
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            <Footer />
          </>
        )
      }
    </>
  )
}
