import React, { useEffect, useState } from 'react'
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
import { HomePage } from './Pages/Home'
import { PagesList } from './Pages/PagesList'
import { ResetPassword } from './pages/ResetPassword'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'

export const App = () => {
  const [{ auth, user, loading }, { login }] = useSession()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()

  const isHome = location.pathname === '/' || location.pathname === '/home'

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user.session.access_token
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
                  <Route exact path='/reset_password' component={ResetPassword} />
                  <Route exact path='/profile'>
                    {auth
                      ? (<Profile userId={user.id} accessToken={user.session.access_token} useValidationFields />)
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
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? <CheckoutPage />
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {auth
                      ? <OrderDetailsPage />
                      : <Redirect to='/login' />}
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
            <Footer />
          </>
        )
      }
    </>
  )
}
