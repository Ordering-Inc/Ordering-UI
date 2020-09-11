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
// import { Header } from '../src/components/Header'
import { createGlobalStyle } from 'styled-components'
// import { LoginForm } from '../src/components/LoginForm'
import { ForgotPass } from './pages/ForgotPassword'
import { Ordering } from 'ordering-api-sdk'

const fontName = 'Montserrat'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: '${fontName}', sans-serif;
    margin: 0;
    color: #333;
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
    return () => {
      fontTheme.remove()
    }
  })
  return children
}

const ordering = new Ordering()

export const Router = () => {
  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FontTheme fontName={fontName}>
        <Switch>
          <Route exact path='/home'>
            Home
          </Route>
          <Route exact path='/'>
            Home
          </Route>
          <Route exact path='/signin'>
            {
              !auth
                ? (
                  <ForgotPass
                    ordering={ordering}
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/signup'>{t('RESET_PASSWORD')}</Link>}
                    useLoginByCellphone
                  />
                )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/login'>
            {
              !auth
                ? (
                  <ForgotPass
                    ordering={ordering}
                    elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT')}</Link>}
                    elementLinkToForgotPassword={<Link to='/signup'>{t('RESET_PASSWORD')}</Link>}
                    useLoginByCellphone
                  />
                )
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path='/signup'>
            Signup
          </Route>
          <Route exact path='/password/forgot'>
            {
              !auth ? (
                <ForgotPass ordering={ordering} />
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
          <Route exact path='/search'>
            Search
          </Route>
          <Route exact path='/store/:store'>
            <Store />
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
