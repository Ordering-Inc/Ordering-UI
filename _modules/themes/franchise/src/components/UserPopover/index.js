"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPopover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactPopper = require("react-popper");
var _styles = require("./styles");
var _style = require("../../../../../components/Dropdown/style");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _utils = require("../../../../../utils");
var _AiOutlineMenu = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineMenu"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var optionsDefault = [{
  name: 'search',
  pathname: '/explore',
  displayName: 'explore',
  key: 'explore'
}, {
  name: 'orders',
  pathname: '/profile/orders',
  displayName: 'orders',
  key: 'orders'
}];
var extraOptions = [{
  name: 'profile',
  pathname: '/profile',
  displayName: 'view account',
  key: 'view_account'
}, {
  name: 'saved_places',
  pathname: '/saved_places',
  displayName: 'My saved places',
  key: 'MY_ADDRESSES'
}, {
  name: 'help',
  pathname: '/help',
  displayName: 'help',
  key: 'help'
}];
var UserPopover = exports.UserPopover = function UserPopover(props) {
  var _props$beforeElements, _props$beforeComponen, _sessionState$user, _sessionState$user2, _props$afterComponent, _props$afterElements;
  var open = props.open,
    isHome = props.isHome,
    optionsList = props.optionsList,
    withLogout = props.withLogout,
    isCustomerMode = props.isCustomerMode;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var options = isCustomerMode ? optionsDefault.filter(function (option) {
    return option.name === 'profile';
  }) : optionsList || optionsDefault;
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
    attributes = popper.attributes,
    forceUpdate = popper.forceUpdate;
  (0, _react.useEffect)(function () {
    // forceUpdate && forceUpdate()
  }, [open, sessionState]);
  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;
    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };
  var handleGoToPage = function handleGoToPage(page) {
    events.emit('go_to_page', {
      page: page
    });
    props.onClick && props.onClick();
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    minWidth: '150px'
  });
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    isPhoto: sessionState === null || sessionState === void 0 || (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    isHome: isHome,
    ref: referenceElement,
    isOpen: open,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineMenu.default, {
    className: "menu-list"
  }), /*#__PURE__*/_react.default.createElement(_styles.UserImgWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.RoundMark, null), /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, options && options.length > 0 && options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ExtraOptions, null, extraOptions && extraOptions.length > 0 && extraOptions.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), withLogout && /*#__PURE__*/_react.default.createElement(PopoverListItemLogout, {
    onClose: props.onClose
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var handleClick = function handleClick() {
    var _window;
    var GoogleAuth = (_window = window) === null || _window === void 0 || (_window = _window.gapi) === null || _window === void 0 || (_window = _window.auth2) === null || _window === void 0 ? void 0 : _window.getAuthInstance();
    if (GoogleAuth) {
      var signedIn = GoogleAuth.isSignedIn.get();
      if (signedIn) {
        GoogleAuth.signOut().then(function () {
          GoogleAuth.disconnect();
        });
      }
    }
    deleteUserCustomer(true);
    props.handleLogoutClick();
    props.onClose && props.onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.PopoverListItem, {
    onClick: handleClick
  }, t('LOGOUT', 'Logout'));
};
var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};