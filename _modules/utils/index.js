"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyDecimals = exports.sortInputFields = exports.shape = exports.scrollTo = exports.reviewCommentList = exports.priceList = exports.getTraduction = exports.getIconCard = exports.getHourMin = exports.getGoogleMapImage = exports.getDistance = exports.formatUrlVideo = exports.formatSeconds = exports.flatArray = exports.fieldsToSort = exports.convertToRadian = exports.convertHoursToMinutes = exports.checkSiteUrl = exports.capitalize = exports.bytesConverter = void 0;
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getIconCard = function getIconCard() {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera;
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand.toLowerCase();
  var theme = (0, _styledComponents.useTheme)();
  switch (value) {
    case 'visa':
      return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.visa;
    case 'mastercard':
      return (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.mastercard;
    default:
      return (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.credit;
  }
};

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
exports.getIconCard = getIconCard;
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */
var scrollTo = function scrollTo(element, to, duration) {
  if (!element) return;
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;
  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
exports.scrollTo = scrollTo;
var formatUrlVideo = function formatUrlVideo(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var id = match && match[7].length === 11 ? match[7] : false;
  return "https://www.youtube-nocookie.com/embed/".concat(id);
};

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
exports.formatUrlVideo = formatUrlVideo;
var convertHoursToMinutes = function convertHoursToMinutes(time) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  if (!time) return '0min';
  var _time$split = time.split(':'),
    _time$split2 = _slicedToArray(_time$split, 2),
    hour = _time$split2[0],
    minute = _time$split2[1];
  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result).concat(t('MIN', 'min'));
};

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
exports.convertHoursToMinutes = convertHoursToMinutes;
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Function to return a static google maps image based in location
 * @param {object} param object with latitude and logitude
 */
exports.capitalize = capitalize;
var getGoogleMapImage = function getGoogleMapImage(location, apiKey, mapConfigs) {
  var _mapConfigs$size$w, _mapConfigs$size, _mapConfigs$size$h, _mapConfigs$size2, _mapConfigs$zoom, _mapConfigs$scale;
  var lat = location === null || location === void 0 ? void 0 : location.lat;
  var lng = location === null || location === void 0 ? void 0 : location.lng;
  return "https://maps.googleapis.com/maps/api/staticmap?size=".concat((_mapConfigs$size$w = mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$size = mapConfigs.size) === null || _mapConfigs$size === void 0 ? void 0 : _mapConfigs$size.w) !== null && _mapConfigs$size$w !== void 0 ? _mapConfigs$size$w : 500, "x").concat((_mapConfigs$size$h = mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$size2 = mapConfigs.size) === null || _mapConfigs$size2 === void 0 ? void 0 : _mapConfigs$size2.h) !== null && _mapConfigs$size$h !== void 0 ? _mapConfigs$size$h : 190, "&center=").concat(lat, ",").concat(lng, "&zoom=").concat((_mapConfigs$zoom = mapConfigs === null || mapConfigs === void 0 ? void 0 : mapConfigs.zoom) !== null && _mapConfigs$zoom !== void 0 ? _mapConfigs$zoom : 17, "&scale=").concat((_mapConfigs$scale = mapConfigs === null || mapConfigs === void 0 ? void 0 : mapConfigs.scale) !== null && _mapConfigs$scale !== void 0 ? _mapConfigs$scale : 2, "&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_75,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C").concat(lat, ",").concat(lng, "&key=").concat(apiKey);
};

/**
 * _Function to flat array of one level
 * @param {Array} arr to flat
 */
exports.getGoogleMapImage = getGoogleMapImage;
var flatArray = function flatArray(arr) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
};

/**
 * Function to return the traduction depending of a key 't'
 * @param {string} key for traduction
 */
exports.flatArray = flatArray;
var getTraduction = function getTraduction(key) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var keyList = {
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
    ERROR_PLACE_PAY_WITH_REDIRECT: 'An error occurred while trying to pay by redirect',
    ERROR_PLACE_PAY_WITH_CARD1: 'An error occurred while trying to pay by card',
    ERROR_PLACE_PAY_WITH_PAYPAL_CAPTURE: 'An error occurred while trying to pay by PayPal',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_DELIVERY: 'Error adding product, very far for delivery',
    ERROR_INVALID_OFFER: 'The offer doesn\'t exist',
    ERROR_CASH_WALLET_FEATURE_DISABLED: 'Cash wallet feature is disabled'
  };
  return keyList[key] ? t(key, keyList[key]) : t(key);
};
/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */
exports.getTraduction = getTraduction;
var bytesConverter = function bytesConverter(bytes) {
  return Math.floor(bytes / 1024);
};

/**
 * Function to get time in 12 hours format.
 */
exports.bytesConverter = bytesConverter;
var getHourMin = function getHourMin(hour, min) {
  var _hour;
  if (hour < 12) {
    _hour = hour < 10 ? "0".concat(hour) : "".concat(hour);
  } else {
    _hour = hour - 12 < 10 ? "0".concat(hour - 12) : "".concat(hour - 12);
  }
  var _min = min < 10 ? "0".concat(min) : "".concat(min);
  if (hour < 12) {
    return "".concat(_hour, " : ").concat(_min, " AM");
  } else {
    return "".concat(_hour, " : ").concat(_min, " PM");
  }
};
/**
 * List of fields with correct order
 */
exports.getHourMin = getHourMin;
var fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];
/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
exports.fieldsToSort = fieldsToSort;
var sortInputFields = function sortInputFields(_ref2) {
  var fields = _ref2.fields,
    values = _ref2.values;
  var fieldsBase = fields;
  var fieldsSorted = [];
  var fieldsArray = Array.isArray(values) ? values : Object.values(values);
  if (!fieldsBase) {
    fieldsBase = fieldsToSort;
  }
  fieldsBase.forEach(function (f) {
    fieldsArray.forEach(function (field) {
      if (f === field.code) {
        fieldsSorted.push(field);
      }
    });
  });
  return fieldsSorted;
};

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
exports.sortInputFields = sortInputFields;
var verifyDecimals = function verifyDecimals(value, parser) {
  if (value % 1 === 0) {
    return value;
  } else {
    return parser(value);
  }
};
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
exports.verifyDecimals = verifyDecimals;
var formatSeconds = function formatSeconds(seconds) {
  // Hours, minutes and seconds
  var hrs = ~~(seconds / 3600);
  var mins = ~~(seconds % 3600 / 60);
  var secs = ~~seconds % 60;

  // Output like '1:01' or '4:03:59' or '123:03:59'
  var ret = '';
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

/**
 * Function to transform degree to radian
 * @param {number} value for transform
 *
 */
exports.formatSeconds = formatSeconds;
var convertToRadian = function convertToRadian(value) {
  return value * Math.PI / 180;
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
exports.convertToRadian = convertToRadian;
var checkSiteUrl = function checkSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[0] === '/' ? url : "/".concat(url);
};

/**
 * Function to calculate distance
 * @param {*} lat1 lat from fist point
 * @param {*} lon1 lon from fist point
 * @param {*} lat2 lat from second point
 * @param {*} lon2 lon from second point
 */
exports.checkSiteUrl = checkSiteUrl;
var getDistance = function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = convertToRadian(lat2 - lat1);
  var dLon = convertToRadian(lon2 - lon1);
  var curLat1 = convertToRadian(lat1);
  var curLat2 = convertToRadian(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(curLat1) * Math.cos(curLat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * List shape for ribbon
 */
exports.getDistance = getDistance;
var shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
};

/**
 * List of price to filter businesses
 */
exports.shape = shape;
var priceList = [{
  level: '1',
  content: '$'
}, {
  level: '2',
  content: '$$'
}, {
  level: '3',
  content: '$$$'
}, {
  level: '4',
  content: '$$$$'
}, {
  level: '5',
  content: '$$$$$'
}];

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
exports.priceList = priceList;
var reviewCommentList = function reviewCommentList(type) {
  var _useLanguage5 = (0, _orderingComponents.useLanguage)(),
    _useLanguage6 = _slicedToArray(_useLanguage5, 2),
    t = _useLanguage6[1];
  var reviews = {
    order: {
      1: {
        title: t('QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('QUICK_COMMENT_1_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('QUICK_COMMENT_1_1', 'Poor communication')
        }, {
          key: 2,
          content: t('QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('QUICK_COMMENT_1_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('QUICK_COMMENT_2_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('QUICK_COMMENT_2_1', 'Poor communication')
        }, {
          key: 2,
          content: t('QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('QUICK_COMMENT_2_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('QUICK_COMMENT_3_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('QUICK_COMMENT_3_1', 'Poor communication')
        }, {
          key: 2,
          content: t('QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('QUICK_COMMENT_3_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('QUICK_COMMENT_4_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('QUICK_COMMENT_4_1', 'Poor communication')
        }, {
          key: 2,
          content: t('QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('QUICK_COMMENT_4_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('QUICK_COMMENT_5_0', 'Good communication')
        }, {
          key: 1,
          content: t('QUICK_COMMENT_5_1', 'Followed instructions')
        }, {
          key: 2,
          content: t('QUICK_COMMENT_5_2', 'Friendly')
        }, {
          key: 3,
          content: t('QUICK_COMMENT_5_3', 'Handled with care')
        }, {
          key: 4,
          content: t('QUICK_COMMENT_5_4', 'Above and beyond')
        }]
      }
    },
    customer: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_1_0', 'Poor communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_1_1', 'Wrong address')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_1_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_2_0', 'Poor communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_2_1', 'Wrong address')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_2_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_3_0', 'Poor communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_3_1', 'Wrong address')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_3_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_4_0', 'Poor communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_4_1', 'Wrong address')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_4_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_5_0', 'Good communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_5_1', 'Friendly')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_5_2', 'Above and beyond')
        }]
      }
    },
    driver: {
      1: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('DRIVER_QUICK_COMMENT_1_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('DRIVER_QUICK_COMMENT_1_1', 'Poor communication')
        }, {
          key: 2,
          content: t('DRIVER_QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('DRIVER_QUICK_COMMENT_1_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('DRIVER_QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('DRIVER_QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('DRIVER_QUICK_COMMENT_2_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('DRIVER_QUICK_COMMENT_2_1', 'Poor communication')
        }, {
          key: 2,
          content: t('DRIVER_QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('DRIVER_QUICK_COMMENT_2_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('DRIVER_QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('DRIVER_QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('DRIVER_QUICK_COMMENT_3_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('DRIVER_QUICK_COMMENT_3_1', 'Poor communication')
        }, {
          key: 2,
          content: t('DRIVER_QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('DRIVER_QUICK_COMMENT_3_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('DRIVER_QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('DRIVER_QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('DRIVER_QUICK_COMMENT_4_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('DRIVER_QUICK_COMMENT_4_1', 'Poor communication')
        }, {
          key: 2,
          content: t('DRIVER_QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('DRIVER_QUICK_COMMENT_4_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('DRIVER_QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('DRIVER_QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('DRIVER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('DRIVER_QUICK_COMMENT_5_0', 'Good communication')
        }, {
          key: 1,
          content: t('DRIVER_QUICK_COMMENT_5_1', 'Followed instructions')
        }, {
          key: 2,
          content: t('DRIVER_QUICK_COMMENT_5_2', 'Friendly')
        }, {
          key: 3,
          content: t('DRIVER_QUICK_COMMENT_5_3', 'Handled with care')
        }, {
          key: 4,
          content: t('DRIVER_QUICK_COMMENT_5_4', 'Above and beyond')
        }]
      }
    },
    product: {
      like: [{
        key: 0,
        content: t('QUICK_COMMENT_LIKE_0', 'Tasty')
      }, {
        key: 1,
        content: t('QUICK_COMMENT_LIKE_1', 'Good price')
      }, {
        key: 2,
        content: t('QUICK_COMMENT_LIKE_2', 'Good portion size')
      }, {
        key: 3,
        content: t('QUICK_COMMENT_LIKE_3', 'Packed well')
      }],
      dislike: [{
        key: 0,
        content: t('QUICK_COMMENT_DISLIKE_0', 'Not tasty')
      }, {
        key: 1,
        content: t('QUICK_COMMENT_DISLIKE_1', 'High price')
      }, {
        key: 2,
        content: t('QUICK_COMMENT_DISLIKE_2', 'Bad portion size')
      }, {
        key: 3,
        content: t('QUICK_COMMENT_DISLIKE_3', 'Not packed well')
      }]
    }
  };
  return reviews[type];
};
exports.reviewCommentList = reviewCommentList;