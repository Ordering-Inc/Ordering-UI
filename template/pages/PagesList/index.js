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
    { name: 'Main Businesses', slug: '/search' },
    { name: 'Pickup Businesses', slug: '/pickup' },
    { name: 'filter Businesses', slug: '/filter' },
    { name: 'Checkout', slug: '/checkout' },
    { name: 'Pages', slug: '/pages' }
  ]
  return <PagesListController {...props} routes={routes} />
}
