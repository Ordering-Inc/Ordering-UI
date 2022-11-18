"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _FaSignOutAlt = _interopRequireDefault(require("@meronex/icons/fa/FaSignOutAlt"));

var _styles = require("../SidebarMenu/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LogoutButtonUI = function LogoutButtonUI(props) {
  var onCustomClick = props.onCustomClick,
      hideText = props.hideText;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var isHome = window.location.pathname === '/' || window.location.pathname === '/home';

  var handleLogOutClick = function handleLogOutClick() {
    var _window, _window$gapi, _window$gapi$auth;

    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.logout();
      }
    });
    var GoogleAuth = (_window = window) === null || _window === void 0 ? void 0 : (_window$gapi = _window.gapi) === null || _window$gapi === void 0 ? void 0 : (_window$gapi$auth = _window$gapi.auth2) === null || _window$gapi$auth === void 0 ? void 0 : _window$gapi$auth.getAuthInstance();

    if (GoogleAuth) {
      var signedIn = GoogleAuth.isSignedIn.get();

      if (signedIn) {
        GoogleAuth.signOut().then(function () {
          GoogleAuth.disconnect();
        });
      }
    }

    props.handleLogoutClick();
    onCustomClick && onCustomClick();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    id: "logoutbtn",
    onClick: handleLogOutClick,
    isHome: isHome,
    style: props.styleContainer
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, {
    style: props.styleWrappContent
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome
  }, /*#__PURE__*/_react.default.createElement(_FaSignOutAlt.default, null)), !hideText && /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome
  }, t('LOGOUT', 'Logout'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null)))));
};

var LogoutButton = function LogoutButton(props) {
  var logoutButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LogoutButtonUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutButtonProps);
};

exports.LogoutButton = LogoutButton;