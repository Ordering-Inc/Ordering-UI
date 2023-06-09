import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'

export const getIconCard = (brand = '') => {
  const value = brand.toLowerCase()
  const theme = useTheme()
  return theme.images?.general?.[value] ?? theme.images?.general?.credit
}

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */
export const scrollTo = (element, to, duration) => {
  if (!element) return
  const start = element.scrollTop
  const change = to - start
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
export const formatUrlVideo = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  const id = (match && match[7].length === 11) ? match[7] : false
  return `https://www.youtube-nocookie.com/embed/${id}`
}

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
export const convertHoursToMinutes = (time) => {
  const [, t] = useLanguage()
  if (!time) return `0 ${t('TIME_MINUTES', 'min')}`
  const [hour, minute] = time.split(':')
  const result = (parseInt(hour, 10) * 60) + parseInt(minute, 10)
  return `${result}${t('TIME_MINUTES', 'min')}`
}

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Function to return a static google maps image based in location
 * @param {object} param object with latitude and logitude
 */
export const getGoogleMapImage = (location, apiKey, mapConfigs) => {
  const lat = location?.lat
  const lng = location?.lng
  return `https://maps.googleapis.com/maps/api/staticmap?size=${mapConfigs?.size?.w ?? 500}x${mapConfigs?.size?.h ?? 190}&center=${lat},${lng}&zoom=${mapConfigs?.zoom ?? 17}&scale=${mapConfigs?.scale ?? 2}&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_75,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${lat},${lng}&key=${apiKey}`
}

/**
 * _Function to flat array of one level
 * @param {Array} arr to flat
 */
export const flatArray = arr => [].concat(...arr)

/**
 * Function to return the traduction depending of a key 't'
 * @param {string} key for traduction
 */
export const getTraduction = key => {
  const [, t] = useLanguage()
  const keyList = {
    // Add the key and traduction that you need below
    ERROR_ORDER_WITHOUT_CART: 'The order was placed without a cart',
    ERROR_INVALID_COUPON: 'The coupon doesn\'t exist',
    ERROR_IVALID_COUPON_MINIMUM: 'You must have more products in your cart to use the coupon',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_PICKUP: 'The business is too far for order type pickup',
    ERROR_PLACE_PAY_WITH_CARD2: 'An error occurred while trying to pay by card',
    ERROR_ADD_PRODUCT_BUSINESS_CLOSED: 'The business is closed at the moment',
    INTERNAL_ERROR: 'Server Error, please wait, we are working to fix it',
    PREPARED_IN: 'Preparation time',
    DELIVERY_DATETIME: 'Delivery datetime',
    ERROR_MISSING_PAYMETHOD_HOOK: 'Missing payment method hook',
    INVALID_CODE: 'Invalid verify code',
    ERROR_YOU_HAVE_NOT_CART: 'Cart not found',
    ERROR_PLACE_GROUP_PAY_WITH_CARD: 'An Error place group pay with card',
    ERROR_PLACE_GROUP_CART_TOTAL_DIFFERENT: 'Error, place group cart total different',
    ERROR_PLACE_PAY_WITH_REDIRECT: 'An error occurred while trying to pay by redirect',
    ERROR_PLACE_PAY_WITH_CARD1: 'An error occurred while trying to pay by card',
    ERROR_PLACE_PAY_WITH_PAYPAL_CAPTURE: 'An error occurred while trying to pay by PayPal',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_DELIVERY: 'Error adding product, very far for delivery',
    ERROR_INVALID_OFFER: 'The offer doesn\'t exist',
    ERROR_CASH_WALLET_FEATURE_DISABLED: 'Cash wallet feature is disabled',
  }

  return keyList[key] ? t(key, keyList[key]) : t(key)
}
/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */
export const bytesConverter = bytes => {
  return Math.floor(bytes / 1024)
}

/**
 * Function to get brightness of color.
 */
export const lightenDarkenColor = (color) => {

  let r, g, b, hsp
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If RGB --> Convert it to HEX
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = color >> 8 & 255
    b = color & 255
  }

  // HSP (Highly Sensitive Poo) equation
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 197) {
    return true //is light color
  } else {
    return false
  }
}

/**
 * Function to get time in 12 hours format.
 */
export const getHourMin = (hour, min) => {
  let _hour
  if (hour < 12) {
    _hour = hour < 10 ? `0${hour}` : `${hour}`
  } else {
    _hour = (hour - 12) < 10 ? `0${hour - 12}` : `${hour - 12}`
  }
  const _min = min < 10 ? `0${min}` : `${min}`
  if (hour < 12) {
    return `${_hour} : ${_min} AM`
  } else {
    return `${_hour} : ${_min} PM`
  }
}
/**
 * List of fields with correct order
 */
export const fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email']
/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
export const sortInputFields = ({ fields, values }) => {
  let fieldsBase = fields
  const fieldsSorted = []
  const fieldsArray = Array.isArray(values) ? values : Object.values(values)

  if (!fieldsBase) {
    fieldsBase = fieldsToSort
  }

  fieldsBase.forEach(f => {
    fieldsArray.forEach(field => {
      if (f === field.code) {
        fieldsSorted.push(field)
      }
    })
  })
  return fieldsSorted
}

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
export const verifyDecimals = (value, parser) => {
  if (value % 1 === 0) {
    return value
  } else {
    return parser(value)
  }
}
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
export const formatSeconds = (seconds) => {
  // Hours, minutes and seconds
  var hrs = ~~(seconds / 3600)
  var mins = ~~((seconds % 3600) / 60)
  var secs = ~~seconds % 60

  // Output like '1:01' or '4:03:59' or '123:03:59'
  var ret = ''
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '')
  ret += '' + secs
  return ret
}

/**
 * Function to transform degree to radian
 * @param {number} value for transform
 *
 */
export const convertToRadian = (value) => {
  return value * Math.PI / 180
}

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
export const checkSiteUrl = (url, fallback) => {
  if (!url) return fallback
  return url[0] === '/' ? url : `/${url}`
}

/**
 * Function to calculate distance
 * @param {*} lat1 lat from fist point
 * @param {*} lon1 lon from fist point
 * @param {*} lat2 lat from second point
 * @param {*} lon2 lon from second point
 */

export const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // km
  const dLat = convertToRadian(lat2 - lat1)
  const dLon = convertToRadian(lon2 - lon1)
  const curLat1 = convertToRadian(lat1)
  const curLat2 = convertToRadian(lat2)
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(curLat1) * Math.cos(curLat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * List shape for ribbon
 */
export const shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
}

/**
 * Function to get formatted time list
 * @param {*} selectedDate = selected Date
 * @param {*} schedule = schedule list
 * @param {*} is12Hours = variable for time format
 */
export const getTimes = (selectedDate, schedule, is12Hours) => {
  const date = new Date()
  const times = []
  for (let k = 0; k < schedule[selectedDate.getDay()].lapses.length; k++) {
    const open = {
      hour: schedule[selectedDate.getDay()].lapses[k].open.hour,
      minute: schedule[selectedDate.getDay()].lapses[k].open.minute
    }
    const close = {
      hour: schedule[selectedDate.getDay()].lapses[k].close.hour,
      minute: schedule[selectedDate.getDay()].lapses[k].close.minute
    }
    for (let i = open.hour; i <= close.hour; i++) {
      if (date.getDate() !== selectedDate.getDate() || i >= date.getHours()) {
        let hour = ''
        let meridian = ''
        if (is12Hours) {
          if (i === 0) {
            hour = '12'
            meridian = ' ' + 'AM'
          } else if (i > 0 && i < 12) {
            hour = (i < 10 ? '0' + i : i)
            meridian = ' ' + 'AM'
          } else if (i === 12) {
            hour = '12'
            meridian = ' ' + 'PM'
          } else {
            hour = ((i - 12 < 10) ? '0' + (i - 12) : `${(i - 12)}`)
            meridian = ' ' + 'PM'
          }
        } else {
          hour = i < 10 ? '0' + i : i
        }
        for (let j = (i === open.hour ? open.minute : 0); j <= (i === close.hour ? close.minute : 59); j += 15) {
          if (i !== date.getHours() || j >= date.getMinutes() || date.getDate() !== selectedDate.getDate()) {
            times.push({
              text: hour + ':' + (j < 10 ? '0' + j : j) + meridian,
              value: (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j)
            })
          }
        }
      }
    }
  }
  return times
}

/**
 * List of price to filter businesses
 */
export const priceList = [
  { level: '1', content: '$' },
  { level: '2', content: '$$' },
  { level: '3', content: '$$$' },
  { level: '4', content: '$$$$' },
  { level: '5', content: '$$$$$' }
]

/**
 * List of order type
 */
export const orderTypeList = ['delivery', 'pickup', 'eatin', 'curbside', 'drivethru', 'seatdelivery']

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
export const reviewCommentList = (type) => {
  const [, t] = useLanguage()

  const reviews = {
    order: {
      1: {
        title: t('QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [
          { key: 0, content: t('QUICK_COMMENT_1_0', 'Not handled with care') },
          { key: 1, content: t('QUICK_COMMENT_1_1', 'Poor communication') },
          { key: 2, content: t('QUICK_COMMENT_1_2', 'COVID-19 issue') },
          { key: 3, content: t('QUICK_COMMENT_1_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('QUICK_COMMENT_1_4', 'Rude') },
          { key: 5, content: t('QUICK_COMMENT_1_5', 'Not on-time') }
        ]
      },
      2: {
        title: t('QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [
          { key: 0, content: t('QUICK_COMMENT_2_0', 'Not handled with care') },
          { key: 1, content: t('QUICK_COMMENT_2_1', 'Poor communication') },
          { key: 2, content: t('QUICK_COMMENT_2_2', 'COVID-19 issue') },
          { key: 3, content: t('QUICK_COMMENT_2_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('QUICK_COMMENT_2_4', 'Rude') },
          { key: 5, content: t('QUICK_COMMENT_2_5', 'Not on-time') }
        ]
      },
      3: {
        title: t('QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [
          { key: 0, content: t('QUICK_COMMENT_3_0', 'Not handled with care') },
          { key: 1, content: t('QUICK_COMMENT_3_1', 'Poor communication') },
          { key: 2, content: t('QUICK_COMMENT_3_2', 'COVID-19 issue') },
          { key: 3, content: t('QUICK_COMMENT_3_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('QUICK_COMMENT_3_4', 'Rude') },
          { key: 5, content: t('QUICK_COMMENT_3_5', 'Not on-time') }
        ]
      },
      4: {
        title: t('QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [
          { key: 0, content: t('QUICK_COMMENT_4_0', 'Not handled with care') },
          { key: 1, content: t('QUICK_COMMENT_4_1', 'Poor communication') },
          { key: 2, content: t('QUICK_COMMENT_4_2', 'COVID-19 issue') },
          { key: 3, content: t('QUICK_COMMENT_4_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('QUICK_COMMENT_4_4', 'Rude') },
          { key: 5, content: t('QUICK_COMMENT_4_5', 'Not on-time') }
        ]
      },
      5: {
        title: t('QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [
          { key: 0, content: t('QUICK_COMMENT_5_0', 'Good communication') },
          { key: 1, content: t('QUICK_COMMENT_5_1', 'Followed instructions') },
          { key: 2, content: t('QUICK_COMMENT_5_2', 'Friendly') },
          { key: 3, content: t('QUICK_COMMENT_5_3', 'Handled with care') },
          { key: 4, content: t('QUICK_COMMENT_5_4', 'Above and beyond') }
        ]
      }
    },
    customer: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_1_0', 'Poor communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_1_1', 'Wrong address') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_1_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_1_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_1_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_1_5', 'Not on-time') }
        ]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_2_0', 'Poor communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_2_1', 'Wrong address') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_2_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_2_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_2_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_2_5', 'Not on-time') }
        ]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_3_0', 'Poor communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_3_1', 'Wrong address') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_3_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_3_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_3_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_3_5', 'Not on-time') }
        ]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_4_0', 'Poor communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_4_1', 'Wrong address') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_4_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_4_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_4_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_4_5', 'Not on-time') }
        ]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_5_0', 'Good communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_5_1', 'Friendly') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_5_2', 'Above and beyond') }
        ]
      }
    },
    driver: {
      1: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [
          { key: 0, content: t('DRIVER_QUICK_COMMENT_1_0', 'Not handled with care') },
          { key: 1, content: t('DRIVER_QUICK_COMMENT_1_1', 'Poor communication') },
          { key: 2, content: t('DRIVER_QUICK_COMMENT_1_2', 'COVID-19 issue') },
          { key: 3, content: t('DRIVER_QUICK_COMMENT_1_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('DRIVER_QUICK_COMMENT_1_4', 'Rude') },
          { key: 5, content: t('DRIVER_QUICK_COMMENT_1_5', 'Not on-time') }
        ]
      },
      2: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [
          { key: 0, content: t('DRIVER_QUICK_COMMENT_2_0', 'Not handled with care') },
          { key: 1, content: t('DRIVER_QUICK_COMMENT_2_1', 'Poor communication') },
          { key: 2, content: t('DRIVER_QUICK_COMMENT_2_2', 'COVID-19 issue') },
          { key: 3, content: t('DRIVER_QUICK_COMMENT_2_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('DRIVER_QUICK_COMMENT_2_4', 'Rude') },
          { key: 5, content: t('DRIVER_QUICK_COMMENT_2_5', 'Not on-time') }
        ]
      },
      3: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [
          { key: 0, content: t('DRIVER_QUICK_COMMENT_3_0', 'Not handled with care') },
          { key: 1, content: t('DRIVER_QUICK_COMMENT_3_1', 'Poor communication') },
          { key: 2, content: t('DRIVER_QUICK_COMMENT_3_2', 'COVID-19 issue') },
          { key: 3, content: t('DRIVER_QUICK_COMMENT_3_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('DRIVER_QUICK_COMMENT_3_4', 'Rude') },
          { key: 5, content: t('DRIVER_QUICK_COMMENT_3_5', 'Not on-time') }
        ]
      },
      4: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [
          { key: 0, content: t('DRIVER_QUICK_COMMENT_4_0', 'Not handled with care') },
          { key: 1, content: t('DRIVER_QUICK_COMMENT_4_1', 'Poor communication') },
          { key: 2, content: t('DRIVER_QUICK_COMMENT_4_2', 'COVID-19 issue') },
          { key: 3, content: t('DRIVER_QUICK_COMMENT_4_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('DRIVER_QUICK_COMMENT_4_4', 'Rude') },
          { key: 5, content: t('DRIVER_QUICK_COMMENT_4_5', 'Not on-time') }
        ]
      },
      5: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [
          { key: 0, content: t('DRIVER_QUICK_COMMENT_5_0', 'Good communication') },
          { key: 1, content: t('DRIVER_QUICK_COMMENT_5_1', 'Followed instructions') },
          { key: 2, content: t('DRIVER_QUICK_COMMENT_5_2', 'Friendly') },
          { key: 3, content: t('DRIVER_QUICK_COMMENT_5_3', 'Handled with care') },
          { key: 4, content: t('DRIVER_QUICK_COMMENT_5_4', 'Above and beyond') }
        ]
      }
    },
    professional: {
      1: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [
          { key: 0, content: t('PROFESSIONAL_QUICK_COMMENT_1_0', 'Not handled with care') },
          { key: 1, content: t('PROFESSIONAL_QUICK_COMMENT_1_1', 'Poor communication') },
          { key: 2, content: t('PROFESSIONAL_QUICK_COMMENT_1_2', 'COVID-19 issue') },
          { key: 3, content: t('PROFESSIONAL_QUICK_COMMENT_1_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('PROFESSIONAL_QUICK_COMMENT_1_4', 'Rude') },
          { key: 5, content: t('PROFESSIONAL_QUICK_COMMENT_1_5', 'Not on-time') }
        ]
      },
      2: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [
          { key: 0, content: t('PROFESSIONAL_QUICK_COMMENT_2_0', 'Not handled with care') },
          { key: 1, content: t('PROFESSIONAL_QUICK_COMMENT_2_1', 'Poor communication') },
          { key: 2, content: t('PROFESSIONAL_QUICK_COMMENT_2_2', 'COVID-19 issue') },
          { key: 3, content: t('PROFESSIONAL_QUICK_COMMENT_2_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('PROFESSIONAL_QUICK_COMMENT_2_4', 'Rude') },
          { key: 5, content: t('PROFESSIONAL_QUICK_COMMENT_2_5', 'Not on-time') }
        ]
      },
      3: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [
          { key: 0, content: t('PROFESSIONAL_QUICK_COMMENT_3_0', 'Not handled with care') },
          { key: 1, content: t('PROFESSIONAL_QUICK_COMMENT_3_1', 'Poor communication') },
          { key: 2, content: t('PROFESSIONAL_QUICK_COMMENT_3_2', 'COVID-19 issue') },
          { key: 3, content: t('PROFESSIONAL_QUICK_COMMENT_3_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('PROFESSIONAL_QUICK_COMMENT_3_4', 'Rude') },
          { key: 5, content: t('PROFESSIONAL_QUICK_COMMENT_3_5', 'Not on-time') }
        ]
      },
      4: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [
          { key: 0, content: t('PROFESSIONAL_QUICK_COMMENT_4_0', 'Not handled with care') },
          { key: 1, content: t('PROFESSIONAL_QUICK_COMMENT_4_1', 'Poor communication') },
          { key: 2, content: t('PROFESSIONAL_QUICK_COMMENT_4_2', 'COVID-19 issue') },
          { key: 3, content: t('PROFESSIONAL_QUICK_COMMENT_4_3', 'Didn\'t follow instructions') },
          { key: 4, content: t('PROFESSIONAL_QUICK_COMMENT_4_4', 'Rude') },
          { key: 5, content: t('PROFESSIONAL_QUICK_COMMENT_4_5', 'Not on-time') }
        ]
      },
      5: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [
          { key: 0, content: t('PROFESSIONAL_QUICK_COMMENT_5_0', 'Perfect service') },
          { key: 1, content: t('PROFESSIONAL_QUICK_COMMENT_5_1', 'Excellent communication') },
          { key: 2, content: t('PROFESSIONAL_QUICK_COMMENT_5_2', 'Cordial service') }
        ]
      }
    },
    product: {
      like: [
        { key: 0, content: t('QUICK_COMMENT_LIKE_0', 'Tasty') },
        { key: 1, content: t('QUICK_COMMENT_LIKE_1', 'Good price') },
        { key: 2, content: t('QUICK_COMMENT_LIKE_2', 'Good portion size') },
        { key: 3, content: t('QUICK_COMMENT_LIKE_3', 'Packed well') }
      ],
      dislike: [
        { key: 0, content: t('QUICK_COMMENT_DISLIKE_0', 'Not tasty') },
        { key: 1, content: t('QUICK_COMMENT_DISLIKE_1', 'High price') },
        { key: 2, content: t('QUICK_COMMENT_DISLIKE_2', 'Bad portion size') },
        { key: 3, content: t('QUICK_COMMENT_DISLIKE_3', 'Not packed well') }
      ]
    }
  }

  return reviews[type]
}

/**
 * Function to convert star rate in width to display
 * @param {int} qualification star rate or qualification
 */
export const getStarWidth = (qualification) => {
  if (qualification) {
    return qualification / 5 * 100 + '%'
  } else {
    return '0%'
  }
}

export const getOrderStatus = (s) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const status = parseInt(s)
  const orderStatus = [
    { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending'), slug: 'PENDING', percentage: 10 },
    { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed'), slug: 'COMPLETED', percentage: 100 },
    { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected'), slug: 'REJECTED', percentage: 0 },
    { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business'), slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
    { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 20 },
    { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
    { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver'), slug: 'REJECTED_BY_DRIVER', percentage: 0 },
    { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 15 },
    { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver'), slug: 'ACCEPTED_BY_DRIVER', percentage: 40 },
    { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 70 },
    { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver'), slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
    { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver'), slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
    { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver'), slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
    { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder'), slug: 'PREORDER', percentage: 0 },
    { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready'), slug: 'ORDER_NOT_READY', percentage: 15 },
    { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer'), slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
    { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer'), slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
    { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer'), slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
    { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', percentage: 50 },
    { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', percentage: 90 },
    { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business'), slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 90 },
    { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 90 },
    { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver'), slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 30 },
    { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way'), slug: 'ORDER_DRIVER_ON_WAY', percentage: 80 }
  ]
  const objectStatus = orderStatus.find((o) => o.key === status)
  return objectStatus && objectStatus
}

export const getOrderStatuPickUp = (s) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const status = parseInt(s)
  const orderStatus = [
    { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending'), slug: 'PENDING', percentage: 10 },
    { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed'), slug: 'COMPLETED', percentage: 100 },
    { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected'), slug: 'REJECTED', percentage: 0 },
    { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 50 },
    { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
    { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 30 },
    { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder'), slug: 'PREORDER', percentage: 0 },
    { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready'), slug: 'ORDER_NOT_READY', percentage: 30 },
    { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer'), slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
    { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer'), slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
    { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer'), slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
    { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business'), slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 70 },
    { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 90 },
  ]
  const objectStatus = orderStatus.find((o) => o.key === status)
  return objectStatus && objectStatus
}

export const calendarLanguages = {
  months: {
    January: 'MONTH1',
    February: 'MONTH2',
    March: 'MONTH3',
    April: 'MONTH4',
    May: 'MONTH5',
    June: 'MONTH6',
    July: 'MONTH7',
    August: 'MONTH8',
    September: 'MONTH9',
    October: 'MONTH10',
    November: 'MONTH11',
    December: 'MONTH12'
  },
  week: {
    Mo: 'DAYMIN1',
    Tu: 'DAYMIN2',
    We: 'DAYMIN3',
    Th: 'DAYMIN4',
    Fr: 'DAYMIN5',
    Sa: 'DAYMIN6',
    Su: 'DAYMIN7'
  }
}

export const getCateringValues = (cateringTypeString, configs) => {
  const splitCateringValue = (configName) => Object.values(configs || {})
    ?.find(config => config?.key === configName)
    ?.value?.split('|')
    ?.find(val => val.includes(cateringTypeString))?.split(',')[1]
  const preorderSlotInterval = parseInt(splitCateringValue('preorder_slot_interval'))
  const preorderLeadTime = parseInt(splitCateringValue('preorder_lead_time'))
  const preorderTimeRange = parseInt(splitCateringValue('preorder_time_range'))
  const preorderMaximumDays = parseInt(splitCateringValue('preorder_maximum_days'))
  const preorderMinimumDays = parseInt(splitCateringValue('preorder_minimum_days'))

  return {
    preorderSlotInterval,
    preorderLeadTime,
    preorderTimeRange,
    preorderMaximumDays,
    preorderMinimumDays
  }
}
