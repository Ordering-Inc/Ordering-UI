"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _pfchangs = require("../../styles/Buttons/theme/pfchangs");
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartPopover = function CartPopover(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$layouts$header4, _theme$layouts$header5, _theme$layouts2, _theme$layouts2$heade, _theme$layouts2$heade2, _theme$layouts2$heade3, _theme$layouts2$heade4, _theme$layouts2$heade5, _theme$layouts3, _theme$layouts3$heade, _theme$layouts3$heade2, _theme$layouts3$heade3, _theme$layouts3$heade4, _theme$layouts3$heade5, _theme$layouts3$heade6, _props$carts, _props$carts$0$produc, _props$beforeElements, _props$beforeComponen, _props$carts3, _props$carts4, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _props$afterComponent, _props$afterElements;
  var open = props.open,
    auth = props.auth,
    location = props.location,
    isCustomerMode = props.isCustomerMode,
    setPreorderBusiness = props.setPreorderBusiness;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    clearCart = _useOrder2[1].clearCart;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
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
  var isSlideBar = 'slide' || (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.header) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.cart) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.open_strategy) === null || _orderingTheme$theme$4 === void 0 ? void 0 : _orderingTheme$theme$4.type) === 'slide'; // cambiar
  var isCartButtonPF = (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.cart) === null || _theme$layouts$header3 === void 0 ? void 0 : (_theme$layouts$header4 = _theme$layouts$header3.components) === null || _theme$layouts$header4 === void 0 ? void 0 : (_theme$layouts$header5 = _theme$layouts$header4.layout) === null || _theme$layouts$header5 === void 0 ? void 0 : _theme$layouts$header5.type) === 'pfchangs';
  var showCartText = !(theme !== null && theme !== void 0 && (_theme$layouts2 = theme.layouts) !== null && _theme$layouts2 !== void 0 && (_theme$layouts2$heade = _theme$layouts2.header) !== null && _theme$layouts2$heade !== void 0 && (_theme$layouts2$heade2 = _theme$layouts2$heade.components) !== null && _theme$layouts2$heade2 !== void 0 && (_theme$layouts2$heade3 = _theme$layouts2$heade2.cart) !== null && _theme$layouts2$heade3 !== void 0 && (_theme$layouts2$heade4 = _theme$layouts2$heade3.components) !== null && _theme$layouts2$heade4 !== void 0 && (_theme$layouts2$heade5 = _theme$layouts2$heade4.text) !== null && _theme$layouts2$heade5 !== void 0 && _theme$layouts2$heade5.hidden);
  var cartButtonIcon = theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$heade = _theme$layouts3.header) === null || _theme$layouts3$heade === void 0 ? void 0 : (_theme$layouts3$heade2 = _theme$layouts3$heade.components) === null || _theme$layouts3$heade2 === void 0 ? void 0 : (_theme$layouts3$heade3 = _theme$layouts3$heade2.cart) === null || _theme$layouts3$heade3 === void 0 ? void 0 : (_theme$layouts3$heade4 = _theme$layouts3$heade3.components) === null || _theme$layouts3$heade4 === void 0 ? void 0 : (_theme$layouts3$heade5 = _theme$layouts3$heade4.icon) === null || _theme$layouts3$heade5 === void 0 ? void 0 : (_theme$layouts3$heade6 = _theme$layouts3$heade5.components) === null || _theme$layouts3$heade6 === void 0 ? void 0 : _theme$layouts3$heade6.image;
  var numProductsFirstCart = (props === null || props === void 0 ? void 0 : props.carts) && (props === null || props === void 0 ? void 0 : (_props$carts = props.carts) === null || _props$carts === void 0 ? void 0 : _props$carts.length) > 0 && (props === null || props === void 0 ? void 0 : props.carts[0].valid) && (props === null || props === void 0 ? void 0 : (_props$carts$0$produc = props.carts[0].products) === null || _props$carts$0$produc === void 0 ? void 0 : _props$carts$0$produc.length);
  (0, _react.useEffect)(function () {
    var _props$carts2, _props$carts$, _props$carts$0$produc2;
    if (!(orderState !== null && orderState !== void 0 && orderState.loading) && props !== null && props !== void 0 && props.carts && (props === null || props === void 0 ? void 0 : (_props$carts2 = props.carts) === null || _props$carts2 === void 0 ? void 0 : _props$carts2.length) > 0 && !(props !== null && props !== void 0 && (_props$carts$ = props.carts[0]) !== null && _props$carts$ !== void 0 && _props$carts$.valid) && props !== null && props !== void 0 && (_props$carts$0$produc2 = props.carts[0].products) !== null && _props$carts$0$produc2 !== void 0 && _props$carts$0$produc2.length) {
      var _props$carts$2;
      clearCart(props === null || props === void 0 ? void 0 : (_props$carts$2 = props.carts[0]) === null || _props$carts$2 === void 0 ? void 0 : _props$carts$2.uuid);
    }
  }, [props === null || props === void 0 ? void 0 : props.carts, orderState]);
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
    isHideCartText: !showCartText
  }, isCartButtonPF ? /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: "primary",
    className: "no-shadow",
    style: {
      height: '50px',
      display: location.pathname.includes('/checkout/') ? 'none' : 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCartText && /*#__PURE__*/_react.default.createElement("p", null, t('CART', 'Cart')), numProductsFirstCart > 0 && auth ? /*#__PURE__*/_react.default.createElement(_styles.CartLength, null, /*#__PURE__*/_react.default.createElement("p", null, numProductsFirstCart > 9 ? '9+' : numProductsFirstCart)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cartButtonIcon && /*#__PURE__*/_react.default.createElement("img", {
    alt: "cart-icon",
    width: "14px",
    height: "17px",
    src: cartButtonIcon,
    loading: "lazy"
  })))) : /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), ((_props$carts3 = props.carts) === null || _props$carts3 === void 0 ? void 0 : _props$carts3.length) > 0 && /*#__PURE__*/_react.default.createElement("span", null, (_props$carts4 = props.carts) === null || _props$carts4 === void 0 ? void 0 : _props$carts4.length))), isSlideBar ? /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: open,
    onClose: props.onClose,
    hideCloseDefault: true,
    isSlideBar: true,
    slideBarPosition: orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.header) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.cart) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.open_strategy) === null || _orderingTheme$theme6 === void 0 ? void 0 : _orderingTheme$theme6.position,
    padding: isCartButtonPF && '0'
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, isCartButtonPF ? /*#__PURE__*/_react.default.createElement(_styles.CloseButton, {
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('MY_CART', 'My cart')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null), " ", t('CLOSE', 'Close')))), /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    isCartPopover: true,
    carts: props.carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: props.onClose,
    setPreorderBusiness: setPreorderBusiness,
    isOpenCart: open,
    onClick: props.onClick,
    isSlideBar: isSlideBar
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
    onClick: props.onClick
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
exports.CartPopover = CartPopover;