import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Alert } from './src/components/Confirm'
import { ThemeProvider } from './src/contexts/ThemeContext'
import { Toast } from './src/styles/Toast'
import theme from './template/theme.json'
import settings from './template/config.json'
import smoothscroll from 'smoothscroll-polyfill'

/**
 * Theme images
 */
import logotype from './template/assets/images/logotype.svg'
import logotypeInvert from './template/assets/images/logotype-invert.svg'
import isotype from './template/assets/images/isotype.svg'
import isotypeInvert from './template/assets/images/isotype-invert.svg'

import homeHero from './template/assets/images/home-hero.jpg'
import businessHero from './template/assets/images/business-hero.jpg'
import notFound from './template/assets/images/not-found.svg'
import notNetwork from './template/assets/images/not-network.svg'
import notFound404 from './template/assets/images/not-found-404.svg'
import notFoundLighting from './template/assets/images/not-found-lighting.svg'
import searchIcon from './template/assets/images/search-icon.svg'
import emptyActiveOrders from './template/assets/images/empty-active-orders.svg'
import emptyPastOrders from './template/assets/images/empty-past-orders.svg'
import visa from './template/assets/images/visa.png'
import mastercard from './template/assets/images/mastercard.png'
import credit from './template/assets/images/credit.png'
import businessSignUpHero from './template/assets/images/business_signup.png'
import driverSignUpHero from './template/assets/images/driver-signup-hero.png'
import loyaltyLevel from './template/assets/images/loyalty_level.png'

import orderStatus0 from './template/assets/images/order/status-0.svg'
import orderStatus1 from './template/assets/images/order/status-1.svg'
import orderStatus2 from './template/assets/images/order/status-2.svg'
import orderStatus3 from './template/assets/images/order/status-3.svg'
import orderStatus4 from './template/assets/images/order/status-4.svg'
import orderStatus5 from './template/assets/images/order/status-5.svg'
import orderStatus6 from './template/assets/images/order/status-6.svg'
import orderStatus7 from './template/assets/images/order/status-7.svg'
import orderStatus8 from './template/assets/images/order/status-8.svg'
import orderStatus9 from './template/assets/images/order/status-9.svg'
import orderStatus10 from './template/assets/images/order/status-10.svg'
import orderStatus11 from './template/assets/images/order/status-11.svg'
import orderStatus12 from './template/assets/images/order/status-12.svg'
import orderStatus13 from './template/assets/images/order/status-13.svg'
import orderStatus14 from './template/assets/images/order/status-14.svg'
import orderStatus15 from './template/assets/images/order/status-15.svg'
import orderStatus16 from './template/assets/images/order/status-16.svg'
import orderStatus17 from './template/assets/images/order/status-17.svg'
import orderStatus18 from './template/assets/images/order/status-18.svg'
import orderStatus19 from './template/assets/images/order/status-19.svg'
import orderStatus20 from './template/assets/images/order/status-20.svg'
import orderStatus21 from './template/assets/images/order/status-21.svg'

import categoryFood from './template/assets/images/categories/category-food.png'
import categoryGroceries from './template/assets/images/categories/category-groceries.png'
import categoryAlcohol from './template/assets/images/categories/category-alcohol.png'
import categoryLaundry from './template/assets/images/categories/category-laundry.png'
import categoryAll from './template/assets/images/categories/category-all.png'

import productDummy from './template/assets/images/dummies/product.png'
import storeDummy from './template/assets/images/dummies/store.png'

import leftArrow from './template/assets/left-arrow.svg'
import rightArrow from './template/assets/right-arrow.svg'

import delivery from './template/assets/images/delivery-types/delivery.jpg'
import curbside from './template/assets/images/delivery-types/curbside.jpg'
import driveThru from './template/assets/images/delivery-types/drive_thru.jpg'
import eatIn from './template/assets/images/delivery-types/eat_in.jpg'
import pickUp from './template/assets/images/delivery-types/pickup.jpg'

const logos = {
  logotype,
  logotypeInvert,
  isotype,
  isotypeInvert
}

theme.images = {
  logos,
  general: {
    homeHero,
    businessHero,
    notFound,
    notFound404,
    notFoundLighting,
    searchIcon,
    notNetwork,
    emptyActiveOrders,
    emptyPastOrders,
    visa,
    mastercard,
    credit,
    businessSignUpHero,
    driverSignUpHero,
    leftArrow,
    rightArrow
  },

  order: {
    status0: orderStatus0,
    status1: orderStatus1,
    status2: orderStatus2,
    status3: orderStatus3,
    status4: orderStatus4,
    status5: orderStatus5,
    status6: orderStatus6,
    status7: orderStatus7,
    status8: orderStatus8,
    status9: orderStatus9,
    status10: orderStatus10,
    status11: orderStatus11,
    status12: orderStatus12,
    status13: orderStatus13,
    status14: orderStatus14,
    status15: orderStatus15,
    status16: orderStatus16,
    status17: orderStatus17,
    status18: orderStatus18,
    status19: orderStatus19,
    status20: orderStatus20,
    status21: orderStatus21
  },
  categories: {
    food: categoryFood,
    groceries: categoryGroceries,
    alcohol: categoryAlcohol,
    laundry: categoryLaundry,
    all: categoryAll
  },
  dummies: {
    product: productDummy,
    driverPhoto: 'https://res.cloudinary.com/demo/image/fetch/c_thumb,g_face,r_max/https://www.freeiconspng.com/thumbs/driver-icon/driver-icon-14.png',
    businessLogo: storeDummy,
    customerPhoto: 'https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,r_max/d_avatar.png/non_existing_id.png',
    loyaltyLevel
  },
  deliveryTypes: {
    delivery: delivery,
    curbside: curbside,
    driveThru: driveThru,
    eatIn: eatIn,
    pickUp: pickUp
  }
}

smoothscroll.polyfill()

const wrapper = document.getElementById('app')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <OrderingProvider Alert={Alert} settings={settings}>
      <Router />
      <Toast />
    </OrderingProvider>
  </ThemeProvider>
  , wrapper)
