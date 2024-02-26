import React, { useEffect, useState } from 'react'
import PWAPrompt from 'react-ios-pwa-prompt'
import { useTheme } from 'styled-components'
import { ThemeProvider } from '../src/contexts/ThemeContext'
import loadable from '@loadable/component'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'

import {
  useSession,
  useApi,
  useLanguage,
  useOrder,
  Analytics,
  FacebookPixel,
  useConfig,
  AnalyticsSegment,
  useEvent,
  useOrderingTheme,
  useSite
} from 'ordering-components'

import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { useWindowSize } from '../src/hooks/useWindowSize'

import settings from './config'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { Input } from '../src/themes/five/src/styles/Inputs'
import { QueryLoginSpoonity } from '../src/themes/five/src/components/QueryLoginSpoonity'
import { orderTypeList } from '../src/utils'
import { WebsocketStatus } from '../src/themes/five'

const Header = loadable(() => import('../src/themes/callcenterOriginal/src/components/Header'))
const NotNetworkConnectivity = loadable(() => import('../src/themes/five/src/components/NotNetworkConnectivity'))

const Alert = loadable(() => import('../src/components/Confirm'))


const BusinessesList = loadable(() => import('./pages/BusinessesList'))
const CheckoutPage = loadable(() => import('./pages/Checkout'))
const Cms = loadable(() => import('./pages/Cms'))
const HomePage = loadable(() => import('./pages/Home'))
const OrderDetailsPage = loadable(() => import('./pages/OrderDetails'))
const PageNotFound = loadable(() => import('./pages/PageNotFound'))
const PagesList = loadable(() => import('./pages/PagesList'))
const Profile = loadable(() => import('./pages/Profile'))

const Help = loadable(() => import('./pages/Help'))

const ResetPassword = loadable(() => import('./pages/ResetPassword'))
const MultiCheckout = loadable(() => import('./pages/MultiCheckout'))
const MultiCart = loadable(() => import('./pages/MultiCart'))
const MultiOrdersDetails = loadable(() => import('./pages/MultiOrdersDetails'))
const BusinessProductsList = loadable(() => import('./pages/BusinessProductsList'))
const PhoneUrl = loadable(() => import('./pages/PhoneUrl'))
const Login = loadable(() => import('./pages/Login'))
const ConfirmAddress = loadable(() => import('./pages/ConfirmAddress'))

const ScrollToTop = loadable(() => import('./components/ScrollToTop'))
const ListenPageChanges = loadable(() => import('./components/ListenPageChanges'))
const HelmetTags = loadable(() => import('./components/HelmetTags'))

export const App = () => {
  const [{ auth, user, loading }] = useSession()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const [languageState, t] = useLanguage()
  const [orderingTheme] = useOrderingTheme()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null
  const unaddressedTypes = configs?.unaddressed_order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const isAllowUnaddressOrderType = unaddressedTypes.includes(orderState?.options?.type)
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const acceptAlert = () => {
    window.localStorage.setItem('front_version', configs?.front_version?.value)
    window.location.reload()
  }

  const isHome = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/phone/:phone'

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const themeUpdated = {
    ...theme,
    ...orderingTheme?.theme,
    colors: {
      ...theme.colors,
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color && { primary: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_btn_color }),
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color && { links: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.primary_link_color }),
      ...(orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.background_page && { backgroundPage: orderingTheme?.theme?.my_products?.components?.theme_settings?.components?.style?.background_page })
    },
    images: {
      ...theme.images,
      general: {
        ...theme.images.general,
        homeHero: orderingTheme?.theme?.homepage_view?.components?.homepage_header?.components?.image || theme.images?.general?.homeHero,
        businessHero: orderingTheme?.theme?.business_listing_view?.components?.business_hero?.components?.image || theme.images?.general?.businessHero,
        notFound: orderingTheme?.theme?.business_listing_view?.components?.not_found_source?.components?.image || theme.images?.general?.notFound,
        emptyActiveOrders: orderingTheme?.theme?.orders?.components?.active_orders?.components?.not_found_source?.components?.image || theme.images?.general?.emptyActiveOrders,
        emptyPastOrders: orderingTheme?.theme?.orders?.components?.past_orders?.components?.not_found_source?.components?.image,
        notNetwork: orderingTheme?.theme?.no_internet?.components?.image || theme.images?.general?.notNetwork,
        businessSignUpHero: orderingTheme?.theme?.business_signup?.components?.icon?.components?.image || theme.images?.general?.businessSignUpHero,
        driverSignUpHero: orderingTheme?.theme?.driver_signup?.components?.icon?.components?.image || theme.images?.general?.driverSignUpHero
      },
      categories: {
        ...theme.images.categories,
        food: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.food?.image || theme.images.categories.categoryFood,
        groceries: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.groceries?.image || theme.images.categories.categoryGroceries,
        alcohol: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.alcohol?.image || theme.images.categories.categoryAlcohol,
        laundry: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.laundry?.image || theme.images.categories.categoryLaundry,
        all: orderingTheme?.theme?.business_listing_view?.components?.categories?.components?.all?.image || theme.images.categories.categoryAll
      },
      dummies: {
        ...theme.images.dummies,
        businessHeader: orderingTheme?.theme?.business_view?.components?.header?.components?.dummy_image || theme.images.dummies.businessHeader,
        businessLogo: orderingTheme?.theme?.business_view?.components?.header?.components?.logo?.dummy_image || theme.images.dummies.businessLogo,
        product: orderingTheme?.theme?.business_view?.components?.products?.components?.photo?.components?.dummy_image || theme.images.dummies.product
      },
      logos: {
        ...theme.images.logos,
        logotype: orderingTheme?.theme?.header?.components?.logo?.components?.image || theme.images.logos.logotype
      }
    }
  }

  useEffect(() => {
    if (!loaded && !orderState.loading) {
      setLoaded(true)
    }
  }, [orderState])

  useEffect(() => {
    if (!loading) {
      setLoaded(!auth)
    }
  }, [loading])

  useEffect(() => {
    if (configs?.front_version?.value && loaded) {
      const localStorageFrontVersion = window.localStorage.getItem('front_version')
      if (localStorageFrontVersion && localStorageFrontVersion !== configs?.front_version?.value) {
        setAlertState({
          open: true,
          content: [t('RELOAD_FRONT_QUESTION', 'There is a new version of Ordering! Do you want to update it?')]
        })
      }
    }
  }, [configs, loaded])

  return (
    <>
      {configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader />
        )
      }
      {
        loaded && (
          <ThemeProvider theme={themeUpdated}>
            <Header
              isHome={isHome}
              location={location}
              isShowOrderOptions={!!userCustomer?.id}
              isShowRedirectButton={!!settings.show_header_redirect_button}
              isCustomerMode
              isHideSignup
              franchiseId={settings?.franchiseId}
            />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {auth
                      ? <HomePage />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/'>
                    {auth
                      ? <HomePage />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/phone/:phone'>
                    {auth
                      ? <PhoneUrl />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/phone'>
                    {auth
                      ? <PhoneUrl />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/login'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                          userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType) &&
                            userCustomer?.id === orderState?.options?.user_id
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        )
                    }
                  </Route>
                  <Route exact path='/signin'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                          userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType) &&
                            userCustomer?.id === orderState?.options?.user_id
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        )
                    }
                  </Route>

                  <Route exact path='/password/reset' component={ResetPassword} />
                  <Route exact path='/profile'>
                    {auth ? (
                      <Profile
                        userId={user.id}
                        accessToken={user?.session?.access_token}
                        useValidationFields
                        isHiddenAddress
                      />
                    ) : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/search'>
                    {userCustomer?.id &&
                      (orderState?.options?.address?.address || isAllowUnaddressOrderType) &&
                      userCustomer?.id === orderState?.options?.user_id
                      ? <BusinessesList />
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/store/:store'>
                    {userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType)
                      ? <BusinessProductsList />
                      : <Redirect to='/' />}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType)
                        ? <CheckoutPage />
                        : <Redirect to='/' />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {(auth || hashKey)
                      ? <OrderDetailsPage />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-checkout/:cartUuid?'>
                    {auth
                      ? userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType)
                        ? <MultiCheckout />
                        : <Redirect to='/' />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-cart'>
                    {auth
                      ? userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType)
                        ? <MultiCart />
                        : <Redirect to='/' />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/multi-orders/:orderId'>
                    {auth
                      ? userCustomer?.id && (orderState?.options?.address?.address || isAllowUnaddressOrderType)
                        ? <MultiOrdersDetails />
                        : <Redirect to='/' />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/confirm-address'>
                    {auth
                      ? <ConfirmAddress />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    <Cms />
                  </Route>
                  <Route exact path='/pages'>
                    <PagesList />
                  </Route>
                  <Route exact path='/help'>
                    {auth
                      ? <Help />
                      : <Redirect to='/' />}
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            <Alert
              title={t('INFORMATION', 'Information')}
              content={alertState.content}
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => closeAlert()}
              onCancel={() => closeAlert()}
              onAccept={() => acceptAlert()}
              closeOnBackdrop={false}
            />
          </ThemeProvider>
        )
      }
    </>
  )
}
