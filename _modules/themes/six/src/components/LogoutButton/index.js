"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _FaSignOutAlt = _interopRequireDefault(require("@meronex/icons/fa/FaSignOutAlt"));
var _styles = require("../SidebarMenu/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LogoutButtonUI = function LogoutButtonUI(props) {
  var onCustomClick = props.onCustomClick,
    inSide = props.inSide;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleLogOutClick = function handleLogOutClick() {
    var _window;
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.logout();
      }
    });
    var GoogleAuth = (_window = window) === null || _window === void 0 || (_window = _window.gapi) === null || _window === void 0 || (_window = _window.auth2) === null || _window === void 0 ? void 0 : _window.getAuthInstance();
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
    onClick: handleLogOutClick,
    inSide: inSide
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    inSide: inSide
  }, !inSide && /*#__PURE__*/_react.default.createElement(_FaSignOutAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, null, t('LOGOUT', 'Logout')))));
};
var LogoutButton = exports.LogoutButton = function LogoutButton(props) {
  var logoutButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LogoutButtonUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutButtonProps);
};