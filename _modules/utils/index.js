"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyDecimals = exports.sortInputFields = exports.shape = exports.scrollTo = exports.reviewCommentList = exports.priceList = exports.orderTypeList = exports.lightenDarkenColor = exports.getUniqueId = exports.getTraduction = exports.getTimes = exports.getStarWidth = exports.getOrderStatus = exports.getOrderStatuPickUp = exports.getLocale = exports.getIconCard = exports.getHourMin = exports.getGoogleMapImage = exports.getDistance = exports.getCurrenySymbol = exports.getCateringValues = exports.formatUrlVideo = exports.formatSeconds = exports.flatArray = exports.findExitingCode = exports.fieldsToSort = exports.convertToRadian = exports.convertHoursToMinutes = exports.checkSiteUrl = exports.capitalize = exports.calendarLanguages = exports.bytesConverter = void 0;
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _currency = require("../config/currency.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getIconCard = function getIconCard() {
  var _theme$images$general, _theme$images, _theme$images2;
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand.toLowerCase();
  var theme = (0, _styledComponents.useTheme)();
  return (_theme$images$general = (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images[value]) !== null && _theme$images$general !== void 0 ? _theme$images$general : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.credit;
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
  if (!time) return "0 ".concat(t('TIME_MIN', 'min'));
  var _time$split = time.split(':'),
    _time$split2 = _slicedToArray(_time$split, 2),
    hour = _time$split2[0],
    minute = _time$split2[1];
  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result).concat(t('TIME_MIN', 'min'));
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
  return "https://maps.googleapis.com/maps/api/staticmap?size=".concat((_mapConfigs$size$w = mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$size = mapConfigs.size) === null || _mapConfigs$size === void 0 ? void 0 : _mapConfigs$size.w) !== null && _mapConfigs$size$w !== void 0 ? _mapConfigs$size$w : 500, "x").concat((_mapConfigs$size$h = mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$size2 = mapConfigs.size) === null || _mapConfigs$size2 === void 0 ? void 0 : _mapConfigs$size2.h) !== null && _mapConfigs$size$h !== void 0 ? _mapConfigs$size$h : 190, "&center=").concat(lat, ",").concat(lng, "&zoom=").concat((_mapConfigs$zoom = mapConfigs === null || mapConfigs === void 0 ? void 0 : mapConfigs.zoom) !== null && _mapConfigs$zoom !== void 0 ? _mapConfigs$zoom : 17, "&scale=").concat((_mapConfigs$scale = mapConfigs === null || mapConfigs === void 0 ? void 0 : mapConfigs.scale) !== null && _mapConfigs$scale !== void 0 ? _mapConfigs$scale : 2, "&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_75,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C").concat(lat, ",").concat(lng, "&key=").concat(apiKey);
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
    ERROR_PLACE_GROUP_PAY_WITH_CARD: 'An Error place group pay with card',
    ERROR_PLACE_GROUP_CART_TOTAL_DIFFERENT: 'Error, place group cart total different',
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
 * Function to get brightness of color.
 */
exports.bytesConverter = bytesConverter;
var lightenDarkenColor = function lightenDarkenColor(color) {
  var r, g, b, hsp;
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 197) {
    return true; //is light color
  } else {
    return false;
  }
};

/**
 * Function to get time in 12 hours format.
 */
exports.lightenDarkenColor = lightenDarkenColor;
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
  var fieldsArray = Array.isArray(values) ? values : values && Object.values(values);
  if (!fieldsBase) {
    fieldsBase = fieldsToSort;
  }
  fieldsBase.forEach(function (f) {
    fieldsArray && fieldsArray.forEach(function (field) {
      var _field$validation_fie;
      if (f === field.code || f === (field === null || field === void 0 || (_field$validation_fie = field.validation_field) === null || _field$validation_fie === void 0 ? void 0 : _field$validation_fie.code)) {
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
 * Function to get formatted time list
 * @param {*} selectedDate = selected Date
 * @param {*} schedule = schedule list
 * @param {*} is12Hours = variable for time format
 */
exports.shape = shape;
var getTimes = function getTimes(selectedDate, schedule, is12Hours) {
  var date = new Date();
  var times = [];
  for (var k = 0; k < schedule[selectedDate.getDay()].lapses.length; k++) {
    var open = {
      hour: schedule[selectedDate.getDay()].lapses[k].open.hour,
      minute: schedule[selectedDate.getDay()].lapses[k].open.minute
    };
    var close = {
      hour: schedule[selectedDate.getDay()].lapses[k].close.hour,
      minute: schedule[selectedDate.getDay()].lapses[k].close.minute
    };
    for (var i = open.hour; i <= close.hour; i++) {
      if (date.getDate() !== selectedDate.getDate() || i >= date.getHours()) {
        var hour = '';
        var meridian = '';
        if (is12Hours) {
          if (i === 0) {
            hour = '12';
            meridian = ' ' + 'AM';
          } else if (i > 0 && i < 12) {
            hour = i < 10 ? '0' + i : i;
            meridian = ' ' + 'AM';
          } else if (i === 12) {
            hour = '12';
            meridian = ' ' + 'PM';
          } else {
            hour = i - 12 < 10 ? '0' + (i - 12) : "".concat(i - 12);
            meridian = ' ' + 'PM';
          }
        } else {
          hour = i < 10 ? '0' + i : i;
        }
        for (var j = i === open.hour ? open.minute : 0; j <= (i === close.hour ? close.minute : 59); j += 15) {
          if (i !== date.getHours() || j >= date.getMinutes() || date.getDate() !== selectedDate.getDate()) {
            times.push({
              text: hour + ':' + (j < 10 ? '0' + j : j) + meridian,
              value: (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j)
            });
          }
        }
      }
    }
  }
  return times;
};

/**
 * List of price to filter businesses
 */
exports.getTimes = getTimes;
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
 * List of order type
 */
exports.priceList = priceList;
var orderTypeList = ['delivery', 'pickup', 'eatin', 'curbside', 'drivethru', 'seatdelivery'];

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
exports.orderTypeList = orderTypeList;
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
    professional: {
      1: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_1', 'Poor communication')
        }, {
          key: 2,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('PROFESSIONAL_QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_1', 'Poor communication')
        }, {
          key: 2,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('PROFESSIONAL_QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_1', 'Poor communication')
        }, {
          key: 2,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('PROFESSIONAL_QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_1', 'Poor communication')
        }, {
          key: 2,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_3', 'Didn\'t follow instructions')
        }, {
          key: 4,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('PROFESSIONAL_QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('PROFESSIONAL_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('PROFESSIONAL_QUICK_COMMENT_5_0', 'Perfect service')
        }, {
          key: 1,
          content: t('PROFESSIONAL_QUICK_COMMENT_5_1', 'Excellent communication')
        }, {
          key: 2,
          content: t('PROFESSIONAL_QUICK_COMMENT_5_2', 'Cordial service')
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

/**
 * Function to convert star rate in width to display
 * @param {int} qualification star rate or qualification
 */
exports.reviewCommentList = reviewCommentList;
var getStarWidth = function getStarWidth(qualification) {
  if (qualification) {
    return qualification / 5 * 100 + '%';
  } else {
    return '0%';
  }
};
exports.getStarWidth = getStarWidth;
var getOrderStatus = function getOrderStatus(s) {
  var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;
  var _useLanguage7 = (0, _orderingComponents.useLanguage)(),
    _useLanguage8 = _slicedToArray(_useLanguage7, 2),
    t = _useLanguage8[1];
  var theme = (0, _styledComponents.useTheme)();
  var status = parseInt(s);
  var orderStatus = [{
    key: 0,
    value: t('PENDING', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending'),
    slug: 'PENDING',
    percentage: 10
  }, {
    key: 1,
    value: t('COMPLETED', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed'),
    slug: 'COMPLETED',
    percentage: 100
  }, {
    key: 2,
    value: t('REJECTED', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected'),
    slug: 'REJECTED',
    percentage: 0
  }, {
    key: 3,
    value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business'),
    slug: 'DRIVER_IN_BUSINESS',
    percentage: 60
  }, {
    key: 4,
    value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed'),
    slug: 'PREPARATION_COMPLETED',
    percentage: 20
  }, {
    key: 5,
    value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business'),
    slug: 'REJECTED_BY_BUSINESS',
    percentage: 0
  }, {
    key: 6,
    value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver'),
    slug: 'REJECTED_BY_DRIVER',
    percentage: 0
  }, {
    key: 7,
    value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
    slug: 'ACCEPTED_BY_BUSINESS',
    percentage: 15
  }, {
    key: 8,
    value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver'),
    slug: 'ACCEPTED_BY_DRIVER',
    percentage: 40
  }, {
    key: 9,
    value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver'),
    slug: 'PICK_UP_COMPLETED_BY_DRIVER',
    percentage: 70
  }, {
    key: 10,
    value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver'),
    slug: 'PICK_UP_FAILED_BY_DRIVER',
    percentage: 0
  }, {
    key: 11,
    value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver'),
    slug: 'DELIVERY_COMPLETED_BY_DRIVER',
    percentage: 100
  }, {
    key: 12,
    value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver'),
    slug: 'DELIVERY_FAILED_BY_DRIVER',
    percentage: 0
  }, {
    key: 13,
    value: t('PREORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder'),
    slug: 'PREORDER',
    percentage: 0
  }, {
    key: 14,
    value: t('ORDER_NOT_READY', (theme === null || theme === void 0 || (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready'),
    slug: 'ORDER_NOT_READY',
    percentage: 15
  }, {
    key: 15,
    value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
    slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
    percentage: 100
  }, {
    key: 16,
    value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
    slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 17,
    value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
    slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 18,
    value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business'),
    slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
    percentage: 50
  }, {
    key: 19,
    value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer'),
    slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
    percentage: 90
  }, {
    key: 20,
    value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
    slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
    percentage: 90
  }, {
    key: 21,
    value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
    slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
    percentage: 90
  }, {
    key: 22,
    value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
    slug: 'ORDER_LOOKING_FOR_DRIVER',
    percentage: 30
  }, {
    key: 23,
    value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 || (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
    slug: 'ORDER_DRIVER_ON_WAY',
    percentage: 80
  }];
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};
exports.getOrderStatus = getOrderStatus;
var getOrderStatuPickUp = function getOrderStatuPickUp(s) {
  var _theme$defaultLanguag25, _theme$defaultLanguag26, _theme$defaultLanguag27, _theme$defaultLanguag28, _theme$defaultLanguag29, _theme$defaultLanguag30, _theme$defaultLanguag31, _theme$defaultLanguag32, _theme$defaultLanguag33, _theme$defaultLanguag34, _theme$defaultLanguag35, _theme$defaultLanguag36, _theme$defaultLanguag37;
  var _useLanguage9 = (0, _orderingComponents.useLanguage)(),
    _useLanguage10 = _slicedToArray(_useLanguage9, 2),
    t = _useLanguage10[1];
  var theme = (0, _styledComponents.useTheme)();
  var status = parseInt(s);
  var orderStatus = [{
    key: 0,
    value: t('PENDING', (theme === null || theme === void 0 || (_theme$defaultLanguag25 = theme.defaultLanguages) === null || _theme$defaultLanguag25 === void 0 ? void 0 : _theme$defaultLanguag25.PENDING) || 'Pending'),
    slug: 'PENDING',
    percentage: 10
  }, {
    key: 1,
    value: t('COMPLETED', (theme === null || theme === void 0 || (_theme$defaultLanguag26 = theme.defaultLanguages) === null || _theme$defaultLanguag26 === void 0 ? void 0 : _theme$defaultLanguag26.COMPLETED) || 'Completed'),
    slug: 'COMPLETED',
    percentage: 100
  }, {
    key: 2,
    value: t('REJECTED', (theme === null || theme === void 0 || (_theme$defaultLanguag27 = theme.defaultLanguages) === null || _theme$defaultLanguag27 === void 0 ? void 0 : _theme$defaultLanguag27.REJECTED) || 'Rejected'),
    slug: 'REJECTED',
    percentage: 0
  }, {
    key: 4,
    value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 || (_theme$defaultLanguag28 = theme.defaultLanguages) === null || _theme$defaultLanguag28 === void 0 ? void 0 : _theme$defaultLanguag28.PREPARATION_COMPLETED) || 'Preparation Completed'),
    slug: 'PREPARATION_COMPLETED',
    percentage: 50
  }, {
    key: 5,
    value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag29 = theme.defaultLanguages) === null || _theme$defaultLanguag29 === void 0 ? void 0 : _theme$defaultLanguag29.REJECTED_BY_BUSINESS) || 'Rejected by business'),
    slug: 'REJECTED_BY_BUSINESS',
    percentage: 0
  }, {
    key: 7,
    value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag30 = theme.defaultLanguages) === null || _theme$defaultLanguag30 === void 0 ? void 0 : _theme$defaultLanguag30.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
    slug: 'ACCEPTED_BY_BUSINESS',
    percentage: 30
  }, {
    key: 13,
    value: t('PREORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag31 = theme.defaultLanguages) === null || _theme$defaultLanguag31 === void 0 ? void 0 : _theme$defaultLanguag31.PREORDER) || 'PreOrder'),
    slug: 'PREORDER',
    percentage: 0
  }, {
    key: 14,
    value: t('ORDER_NOT_READY', (theme === null || theme === void 0 || (_theme$defaultLanguag32 = theme.defaultLanguages) === null || _theme$defaultLanguag32 === void 0 ? void 0 : _theme$defaultLanguag32.ORDER_NOT_READY) || 'Order not ready'),
    slug: 'ORDER_NOT_READY',
    percentage: 30
  }, {
    key: 15,
    value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag33 = theme.defaultLanguages) === null || _theme$defaultLanguag33 === void 0 ? void 0 : _theme$defaultLanguag33.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
    slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
    percentage: 100
  }, {
    key: 16,
    value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag34 = theme.defaultLanguages) === null || _theme$defaultLanguag34 === void 0 ? void 0 : _theme$defaultLanguag34.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
    slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 17,
    value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag35 = theme.defaultLanguages) === null || _theme$defaultLanguag35 === void 0 ? void 0 : _theme$defaultLanguag35.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
    slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 20,
    value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag36 = theme.defaultLanguages) === null || _theme$defaultLanguag36 === void 0 ? void 0 : _theme$defaultLanguag36.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
    slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
    percentage: 70
  }, {
    key: 21,
    value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag37 = theme.defaultLanguages) === null || _theme$defaultLanguag37 === void 0 ? void 0 : _theme$defaultLanguag37.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
    slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
    percentage: 90
  }];
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};
exports.getOrderStatuPickUp = getOrderStatuPickUp;
var calendarLanguages = {
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
};
exports.calendarLanguages = calendarLanguages;
var getCateringValues = function getCateringValues(cateringTypeString, configs) {
  var splitCateringValue;
  if (configs !== null && configs !== void 0 && configs.preorder_slot_interval) {
    splitCateringValue = function splitCateringValue(configName) {
      var _configs$configName;
      return (_configs$configName = configs[configName]) === null || _configs$configName === void 0 || (_configs$configName = _configs$configName.value) === null || _configs$configName === void 0 || (_configs$configName = _configs$configName.split('|')) === null || _configs$configName === void 0 || (_configs$configName = _configs$configName.find(function (val) {
        return val.includes(cateringTypeString);
      })) === null || _configs$configName === void 0 ? void 0 : _configs$configName.split(',')[1];
    };
  } else {
    splitCateringValue = function splitCateringValue(configName) {
      var _Object$values;
      return (_Object$values = Object.values(configs || {})) === null || _Object$values === void 0 || (_Object$values = _Object$values.find(function (config) {
        return (config === null || config === void 0 ? void 0 : config.key) === configName;
      })) === null || _Object$values === void 0 || (_Object$values = _Object$values.value) === null || _Object$values === void 0 || (_Object$values = _Object$values.split('|')) === null || _Object$values === void 0 || (_Object$values = _Object$values.find(function (val) {
        return val.includes(cateringTypeString);
      })) === null || _Object$values === void 0 ? void 0 : _Object$values.split(',')[1];
    };
  }
  var preorderSlotInterval = parseInt(splitCateringValue('preorder_slot_interval'));
  var preorderLeadTime = parseInt(splitCateringValue('preorder_lead_time'));
  var preorderTimeRange = parseInt(splitCateringValue('preorder_time_range'));
  var preorderMaximumDays = parseInt(splitCateringValue('preorder_maximum_days'));
  var preorderMinimumDays = parseInt(splitCateringValue('preorder_minimum_days'));
  return {
    preorderSlotInterval: preorderSlotInterval,
    preorderLeadTime: preorderLeadTime,
    preorderTimeRange: preorderTimeRange,
    preorderMaximumDays: preorderMaximumDays,
    preorderMinimumDays: preorderMinimumDays
  };
};
exports.getCateringValues = getCateringValues;
var getCurrenySymbol = function getCurrenySymbol(code) {
  var _CURRENCY$code$symbol, _CURRENCY$code;
  return (_CURRENCY$code$symbol = _currency.CURRENCY === null || _currency.CURRENCY === void 0 || (_CURRENCY$code = _currency.CURRENCY[code]) === null || _CURRENCY$code === void 0 ? void 0 : _CURRENCY$code.symbol) !== null && _CURRENCY$code$symbol !== void 0 ? _CURRENCY$code$symbol : code;
};

/**
 * Function to get unique id
 */
exports.getCurrenySymbol = getCurrenySymbol;
var getUniqueId = function getUniqueId() {
  var dateString = Date.now().toString(36);
  var randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

/**
 * Function to get language settins by language code
 * @param {string} code // language code
 * @param {any} locales // language settings
 */
exports.getUniqueId = getUniqueId;
var getLocale = function getLocale(code, locales) {
  var locale = locales === null || locales === void 0 ? void 0 : locales[code];
  if (code === 'es-419-1' || code === 'es-419-2') locale = locales === null || locales === void 0 ? void 0 : locales.es;
  if (code === 'zh-CN') locale = locales === null || locales === void 0 ? void 0 : locales.zhCN;
  if (code === 'ar') locale = locales === null || locales === void 0 ? void 0 : locales.arSA;
  if (code === 'kn') locale = locales === null || locales === void 0 ? void 0 : locales.ta;
  if (code === 'km') locale = locales === null || locales === void 0 ? void 0 : locales.th;
  if (!locale) return locales === null || locales === void 0 ? void 0 : locales.enUS;
  return locale;
};
exports.getLocale = getLocale;
var findExitingCode = function findExitingCode(countryCode) {
  var code = _orderingComponents.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.countryCode;
};
exports.findExitingCode = findExitingCode;