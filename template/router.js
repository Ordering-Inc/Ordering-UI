import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Redirect,
  Link
} from 'react-router-dom'
import { useSession, useLanguage, useOrder } from 'ordering-components'
import { createGlobalStyle } from 'styled-components'
import { ForgotPassword } from './pages/ForgotPassword'
import { SignUp } from './pages/SignUp'
import { BusinessesList } from './Pages/BusinessesList'
import { BusinessProductsList } from './Pages/BusinessProductsList'
import { Login } from './Pages/Login'
import { Profile } from './Pages/Profile'
import { MyOrders } from './Pages/MyOrders'
import { HomePage } from '../template/Pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const fontName = 'Nunito'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: '${fontName}', sans-serif;
    margin: 0;
    background-color: #F8F8F8;
    color: #333;
  }
  
  .popup-backdrop {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .popup-component {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const FontTheme = ({ fontName, children }) => {
  useEffect(() => {
    if (window.document.getElementById('theme-font-styles')) {
      return
    }

    const fontTheme = window.document.createElement('link')
    fontTheme.id = 'theme-font-styles'
    fontTheme.rel = 'stylesheet'
    fontTheme.async = true
    fontTheme.defer = true
    fontTheme.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@200;300;400;500;700;800;900&display=swap`

    window.document.body.appendChild(fontTheme)
    // return () => {
    //   fontTheme.remove()
    // }
  }, [])
  return children
}

export const Router = () => {
  const [{ auth, user }, sessionDispatch] = useSession()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()

  const handleSuccessSignup = (user) => {
    sessionDispatch({
      type: 'login',
      user,
      token: user.session.access_token
    })
  }
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FontTheme fontName={fontName}>
        <Header />
        <Switch>
          <Route exact path='/home'>
            <HomePage />
            {/* {
              orderStatus.options?.address?.location
                ? <Redirect to='/search' />
                : <HomePage />
            } */}
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
                    elementLinkToLogin={<Link to='/login'>{t('LOGIN')}</Link>}
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
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD')}</Link>}
                    useLoginByCellphone
                  />
                )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/signin'>
            {
              !auth
                ? (
                  <Login
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD')}</Link>}
                    useLoginByCellphone
                  />
                )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/password/forgot'>
            {
              !auth ? (
                <ForgotPassword />
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
          <Route exact path='/p/:page'>
            <Page />
          </Route>
          <Route exact path='/search'>
            {
              orderStatus.options?.address?.location
                ? <BusinessesList />
                : <Redirect to='/home' />
            }
          </Route>
          <Route exact path='/store/:store'>
            <BusinessProductsList />
          </Route>
          <Route exact path='/checkout'>
            Checkout
          </Route>
          <Route exact path='/order/:orderId'>
            <Order />
          </Route>

          <Route path='*'>
            404
          </Route>
        </Switch>
      </FontTheme>
      <Footer />
    </BrowserRouter>
  )
}

function Page () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { page } = useParams()

  return (
    <div>
      <h3>Page: {page}</h3>
    </div>
  )
}

function Order () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { orderId } = useParams()

  return (
    <div>
      <h3>Order ID: {orderId}</h3>
    </div>
  )
}
