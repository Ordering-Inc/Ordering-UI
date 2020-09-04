import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import { Header } from '../src/components/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #333;
  }
`

export const Router = () => {
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
          Login
        </Route>
        <Route exact path='/login'>
          Login
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
