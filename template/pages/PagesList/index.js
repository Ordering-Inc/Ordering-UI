import React from 'react'
import { PagesList as PagesListController } from '../../../src/components/PagesList'

export const PagesList = (props) => {
  const routes = [
    { name: 'Home', slug: '/home' },
    { name: 'Sign Up', slug: '/signup' },
    { name: 'Login', slug: '/login' },
    { name: 'Sign In', slug: '/signin' },
    { name: 'Forgot Password', slug: '/password/forgot' },
    { name: 'Profile', slug: '/profile' },
    { name: 'My Orders', slug: '/profile/orders' },
    { name: 'Search Businesses', slug: '/search' },
    { name: 'Checkout', slug: '/checkout' },
    { name: 'Pages', slug: '/pages' }
  ]
  return <PagesListController {...props} routes={routes} />
}

export default PagesList
