"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmartAppBanner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isClient = typeof window !== 'undefined';

var expiredDateInUTC = function expiredDateInUTC(additionalDays) {
  var expiredDate = new Date();
  expiredDate.setDate(expiredDate.getDate() + additionalDays);
  return expiredDate.toUTCString();
};

var SmartAppBanner = function SmartAppBanner(props) {
  var _theme$images, _theme$images$general;

  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var position = props.position;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      appId = _useState4[0],
      setAppId = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      settings = _useState6[0],
      setSettings = _useState6[1];

  var show = function show() {
    if (isClient) {
      window.document.querySelector('html').classList.add('smartbanner-show');
    }
  };

  var hide = function hide() {
    if (isClient) {
      window.document.querySelector('html').classList.remove('smartbanner-show');
    }
  };

  var close = function close() {
    hide();
    document.cookie = 'smartbanner-closed=true;' + 'expires=' + expiredDateInUTC(props.daysHidden) + ';' + 'path = /';

    if (props.onClose && typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  var install = function install() {
    hide();
    document.cookie = 'smartbanner-installed=true;' + 'expires=' + expiredDateInUTC(props.daysReminder) + ';' + 'path = /';

    if (props.onInstall && typeof props.onInstall === 'function') {
      props.onInstall();
    }
  };

  var SettingsByType = function SettingsByType(type) {
    var mixins = {
      ios: {
        appMeta: props.appMeta.ios,
        storeLink: "https://apps.apple.com/".concat(props.appStoreLanguage, "/app/id")
      },
      android: {
        appMeta: props.appMeta.android,
        storeLink: 'http://play.google.com/store/apps/details?id='
      }
    };
    var _settings = mixins[type];
    setSettings(_settings);

    if (type) {
      parseAppId(type);
    }
  };

  var parseAppId = function parseAppId(type) {
    if (!isClient) {
      return '';
    }

    var meta = window.document.querySelector("meta[name=\"".concat(props.appMeta[type], "\"]"));

    if (!meta) {
      return '';
    }

    var content = /app-id=([^\s,]+)/.exec(meta.getAttribute('content'));

    var _appId = content && content[1] && content[1];

    setAppId(_appId);
    return _appId;
  };

  var retrieveInfo = function retrieveInfo() {
    var link = "".concat(props.url[type]) || settings.storeLink + appId;
    var inStore = "".concat(props.price[type], " - ").concat(props.storeText[type]);
    return {
      link: link,
      inStore: inStore
    };
  };
  /**
  * Determine the mobile operating system.
  * This function returns one of 'iOS', 'Android', 'Windows Phone', or null.
  *
  * @returns {String}
  */


  var getMobileOperatingSystem = function getMobileOperatingSystem() {
    var device = null;
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      device = 'windows phone';
    }

    if (/android/i.test(userAgent)) {
      device = 'android';
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      device = 'ios';
    }

    setType(device);
  };

  (0, _react.useEffect)(function () {
    getMobileOperatingSystem();
  }, []);
  (0, _react.useEffect)(function () {
    if (type) {
      console.log('Detected device: ' + type);
      SettingsByType(type);
    }
  }, [type]);
  /*
  * Render Smart Banner.
  * This will refer of 'iOS', 'Android', Cookie state.
  *
  * Don't show banner when:
  * 1) if device isn't iOS or Android
  * 2) website is loaded in app,
  * 3) user dismissed banner,
  * 4) or we have no app id in meta
  */

  if (!isClient) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  var getCookie = function getCookie(name) {
    var cookieArr = document.cookie.split(';');

    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split('=');

      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }

    return null;
  };

  if (!type || window.navigator.standalone || getCookie('smartbanner-closed') || getCookie('smartbanner-installed')) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  if (!appId) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  show();

  var _retrieveInfo = retrieveInfo(),
      link = _retrieveInfo.link,
      inStore = _retrieveInfo.inStore;

  var wrapperClassName = "smartbanner smartbanner-".concat(type, " smartbanner-").concat(position);
  return /*#__PURE__*/_react.default.createElement(_styles.Banner, {
    id: "smart-app-banner",
    className: wrapperClassName
  }, /*#__PURE__*/_react.default.createElement(_styles.BannerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BannerClose, {
    className: "banner-close",
    onClick: function onClick() {
      return close();
    }
  }, "\xD7"), /*#__PURE__*/_react.default.createElement(_styles.BannerIcon, {
    className: "banner-icon",
    bgImg: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.orderingAppIcon
  }), /*#__PURE__*/_react.default.createElement(_styles.BannerInfo, {
    className: "banner-info"
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, {
    className: "banner-title"
  }, props.title), /*#__PURE__*/_react.default.createElement(_styles.AppAuthor, null, props.author), /*#__PURE__*/_react.default.createElement(_styles.Description, {
    className: "banner-description"
  }, inStore)), /*#__PURE__*/_react.default.createElement(_styles.BannerWrapper, null, /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: function onClick() {
      return install();
    },
    href: link,
    className: "banner-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "banner-button-text"
  }, t('VIEW', 'View'))))));
};

exports.SmartAppBanner = SmartAppBanner;
SmartAppBanner.propTypes = {
  daysHidden: _propTypes.default.number,
  daysReminder: _propTypes.default.number,
  appStoreLanguage: _propTypes.default.string,
  button: _propTypes.default.node,
  storeText: _propTypes.default.objectOf(_propTypes.default.string),
  price: _propTypes.default.objectOf(_propTypes.default.string),
  title: _propTypes.default.string,
  author: _propTypes.default.string,
  position: _propTypes.default.string,
  url: _propTypes.default.objectOf(_propTypes.default.string),
  appMeta: _propTypes.default.shape({
    android: _propTypes.default.string,
    ios: _propTypes.default.string
  }),
  onClose: _propTypes.default.func,
  onInstall: _propTypes.default.func
}; // This props need to improve further

SmartAppBanner.defaultProps = {
  daysHidden: 7,
  daysReminder: 30,
  appStoreLanguage: isClient ? (window.navigator.language || window.navigator.userLanguage).slice(-2) || 'us' : 'us',
  button: 'View',
  storeText: {
    ios: 'On the App Store',
    android: 'In Google Play'
  },
  price: {
    ios: 'Free',
    android: 'Free'
  },
  title: 'Ordering App',
  author: 'Ordering, Inc.',
  position: 'top',
  url: {
    ios: '',
    android: ''
  },
  appMeta: {
    ios: 'apple-itunes-app',
    android: 'google-play-app'
  }
};