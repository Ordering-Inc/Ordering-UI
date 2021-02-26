"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bytesConverter = exports.getTraduction = exports.flatArray = exports.getGoogleMapImage = exports.capitalize = exports.convertHoursToMinutes = exports.formatUrlVideo = exports.scrollTo = exports.DriverTipsOptions = exports.getIconCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));

var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));

var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getIconCard = function getIconCard() {
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand.toLowerCase();

  switch (value) {
    case 'visa':
      return /*#__PURE__*/_react.default.createElement(_FaCcVisa.default, null);

    case 'mastercard':
      return /*#__PURE__*/_react.default.createElement(_FaCcMastercard.default, null);

    default:
      return /*#__PURE__*/_react.default.createElement(_FaCreditCard.default, null);
  }
};

exports.getIconCard = getIconCard;
var DriverTipsOptions = [0, 10, 15, 20, 25];
/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */

exports.DriverTipsOptions = DriverTipsOptions;

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
  if (!time) return '0min';

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      minute = _time$split2[1];

  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result, "min");
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

var getGoogleMapImage = function getGoogleMapImage(location, apiKey) {
  return "https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng, "&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C").concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng, "&key=").concat(apiKey);
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
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var keyList = {
    // Add the key and traduction that you need below
    ERROR_ORDER_WITHOUT_CART: 'The order was placed without a cart',
    ERROR_INVALID_COUPON: "The coupon doesn't exist",
    ERROR_IVALID_COUPON_MINIMUM: 'You must have more products in your cart to use the coupon',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_PICKUP: 'The business is too far for order type pickup',
    ERROR_PLACE_PAY_WITH_CARD2: 'An error occurred while trying to pay by card',
    ERROR_ADD_PRODUCT_BUSINESS_CLOSED: 'The business is closed at the moment',
    INTERNAL_ERROR: 'Server Error, please wait, we are working to fix it',
    ERROR_NOT_FOUND_BUSINESSES: 'No businesses found near your location',
    YOU_DO_NOT_HAVE_PERMISSION: 'You do not have permission'
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

exports.bytesConverter = bytesConverter;