import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Redirect,
  Link
} from 'react-router-dom'
import { useSession, useLanguage } from 'ordering-components'
import { createGlobalStyle } from 'styled-components'
import { ForgotPassword } from './pages/ForgotPassword'
import { SignUp } from './pages/SignUp'
import { BusinessesList } from './Pages/BusinessesList'
import { Login } from './Pages/Login'

import { HomePage } from '../template/Pages/Home'

const fontName = 'Montserrat'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: '${fontName}', sans-serif;
    margin: 0;
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

export const Router = ({ ordering }) => {
  const [{ auth }, sessionDispatch] = useSession()
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
        <Switch>
          <Route exact path='/home'>
            <HomePage ordering={ordering} />
          </Route>
          <Route exact path='/'>
            <HomePage ordering={ordering} />
          </Route>
          <Route exact path='/signup'>
            {
              !auth
                ? (
                  <SignUp
                    ordering={ordering}
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
                    ordering={ordering}
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/signup'>{t('RESET_PASSWORD')}</Link>}
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
                    ordering={ordering}
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/signup'>{t('RESET_PASSWORD')}</Link>}
                    useLoginByCellphone
                  />
                )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/password/forgot'>
            {
              !auth ? (
                <ForgotPassword ordering={ordering} />
              )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/password/reset'>
            Password reset
          </Route>
          <Route exact path='/profile'>
            Profile
          </Route>
          <Route exact path='/p/:page'>
            <Page />
          </Route>
          {/* <Route exact path='/search'>
            Search
          </Route> */}
          <Route exact path='/store/:store'>
            <Store />
          </Route>
          <Route exact path='/checkout'>
            Checkout
          </Route>
          <Route exact path='/order/:orderId'>
            <Order />
          </Route>
          <Route exact path='/search'>
            <BusinessesList ordering={ordering} />
          </Route>
          <Route path='*'>
            404
          </Route>
        </Switch>
      </FontTheme>
      {/* <Footer /> */}
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

function Store () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { store } = useParams()

  return (
    <div>
      <h3>Store: {store}</h3>
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
