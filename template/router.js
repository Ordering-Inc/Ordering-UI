import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Redirect,
  Link
} from 'react-router-dom'
import { useSession, useLanguage } from 'ordering-components'
import { Header } from '../src/components/Header'
import { createGlobalStyle } from 'styled-components'
import { LoginForm } from '../src/components/LoginForm'
import { Ordering } from 'ordering-api-sdk'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #333;
  }
`

const ordering = new Ordering()

export const Router = () => {
  const [{ auth }] = useSession()
  const [, t] = useLanguage()
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
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
                <LoginForm
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
                <LoginForm
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
          Password forgot
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
