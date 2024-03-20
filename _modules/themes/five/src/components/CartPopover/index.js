"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartPopover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactPopper = require("react-popper");
var _styles = require("./styles");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _Buttons = require("../../styles/Buttons");
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var CartPopover = exports.CartPopover = function CartPopover(props) {
  var _theme$header, _theme$header2, _props$beforeElements, _props$beforeComponen, _props$carts, _props$carts2, _theme$header3, _props$afterComponent, _props$afterElements;
  var open = props.open,
    auth = props.auth,
    location = props.location,
    isCustomerMode = props.isCustomerMode,
    setPreorderBusiness = props.setPreorderBusiness;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: theme !== null && theme !== void 0 && theme.rtl ? 'bottom' : 'bottom-end',
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
    attributes = popper.attributes;
  var isSlideBar = (theme === null || theme === void 0 || (_theme$header2 = theme.header) === null || _theme$header2 === void 0 || (_theme$header2 = _theme$header2.components) === null || _theme$header2 === void 0 || (_theme$header2 = _theme$header2.cart) === null || _theme$header2 === void 0 || (_theme$header2 = _theme$header2.components) === null || _theme$header2 === void 0 || (_theme$header2 = _theme$header2.open_strategy) === null || _theme$header2 === void 0 ? void 0 : _theme$header2.type) === 'slide';
  (0, _react.useEffect)(function () {
    // forceUpdate && forceUpdate()
  }, [open, orderState]);
  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;
    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);
    if (outsidePopover && outsidePopoverMenu && outsideModal) {
      events.emit('cart_popover_closed');
      props.onClose && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    props.onClose();
  }, [auth]);
  (0, _react.useEffect)(function () {
    if (location && location.pathname.includes('/checkout/')) {
      props.onClose && props.onClose();
    }
  }, [location]);
  var getScrollTop = function getScrollTop() {
    var _document$documentEle;
    if (((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) > 80) {
      props.onClose && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (location && location.pathname.includes('/store/') && isCustomerMode) {
      window.addEventListener('scroll', getScrollTop);
    }
    return function () {
      window.removeEventListener('scroll', getScrollTop);
    };
  }, []);
  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    width: '450px',
    maxHeight: '70vh',
    overflowY: 'auto'
  });
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    onClick: props.onClick,
    name: "cart-popover",
    isChew: isChew
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), ((_props$carts = props.carts) === null || _props$carts === void 0 ? void 0 : _props$carts.length) > 0 && /*#__PURE__*/_react.default.createElement("span", null, (_props$carts2 = props.carts) === null || _props$carts2 === void 0 ? void 0 : _props$carts2.length))), isSlideBar ? /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: open,
    onClose: props.onClose,
    hideCloseDefault: true,
    isSlideBar: true,
    slideBarPosition: theme === null || theme === void 0 || (_theme$header3 = theme.header) === null || _theme$header3 === void 0 || (_theme$header3 = _theme$header3.components) === null || _theme$header3 === void 0 || (_theme$header3 = _theme$header3.cart) === null || _theme$header3 === void 0 || (_theme$header3 = _theme$header3.components) === null || _theme$header3 === void 0 || (_theme$header3 = _theme$header3.open_strategy) === null || _theme$header3 === void 0 ? void 0 : _theme$header3.position
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('MY_CART', 'My cart')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null), " ", t('CLOSE', 'Close'))), /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    isCartPopover: true,
    carts: props.carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: props.onClose,
    setPreorderBusiness: setPreorderBusiness,
    isOpenCart: open,
    onClick: props.onClick,
    isSlideBar: isSlideBar,
    isCustomerMode: isCustomerMode
  })) : /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    className: "cart-popover",
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    isCartPopover: true,
    carts: props.carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: props.onClose,
    setPreorderBusiness: setPreorderBusiness,
    isOpenCart: open,
    onClick: props.onClick,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.PopoverArrow, {
    key: "arrow",
    ref: arrowElement,
    style: styles.arrow
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};