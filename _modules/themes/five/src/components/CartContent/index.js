"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Cart = require("../Cart");
var _pfchangs = require("../Cart/layouts/pfchangs");
var _Buttons = require("../../styles/Buttons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartContent = function CartContent(props) {
  var _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$layouts$header4, _theme$layouts$header5, _theme$images, _theme$images$general;
  var carts = props.carts,
    isOrderStateCarts = props.isOrderStateCarts,
    isCartPopover = props.isCartPopover,
    isForceOpenCart = props.isForceOpenCart,
    setPreorderBusiness = props.setPreorderBusiness,
    isOpenCart = props.isOpenCart,
    isSlideBar = props.isSlideBar,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var cartLayout = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.cart) === null || _theme$layouts$header3 === void 0 ? void 0 : (_theme$layouts$header4 = _theme$layouts$header3.components) === null || _theme$layouts$header4 === void 0 ? void 0 : (_theme$layouts$header5 = _theme$layouts$header4.layout) === null || _theme$layouts$header5 === void 0 ? void 0 : _theme$layouts$header5.type;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentCartUuid = _useState2[0],
    setCurrentCartUuid = _useState2[1];
  var showCarts = cartLayout === 'pfchangs' ? auth && isOrderStateCarts && (carts === null || carts === void 0 ? void 0 : carts.length) > 0 : isOrderStateCarts && (carts === null || carts === void 0 ? void 0 : carts.length) > 0;
  var handleAddProduct = function handleAddProduct(product, cart) {
    setCurrentCartUuid(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };
  var handleSetCurrentCartUuid = function handleSetCurrentCartUuid() {
    setCurrentCartUuid(null);
  };
  var CartComponents = cartLayout === 'pfchangs' ? _pfchangs.Cart : _Cart.Cart;
  (0, _react.useEffect)(function () {
    events.on('cart_popover_closed', handleSetCurrentCartUuid);
    events.on('cart_product_added', handleAddProduct);
    return function () {
      events.off('cart_popover_closed', handleSetCurrentCartUuid);
      events.off('cart_product_added', handleAddProduct);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, !isSlideBar && cartLayout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), showCarts && carts.map(function (cart) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: cart.uuid
    }, cart.products.length > 0 && /*#__PURE__*/_react.default.createElement(CartComponents, {
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      cart: cart,
      isCartPopover: isCartPopover,
      isCheckout: window.location.pathname === "/checkout/".concat(cart === null || cart === void 0 ? void 0 : cart.uuid) && !isCartPopover,
      isForceOpenCart: isForceOpenCart,
      currentCartUuid: currentCartUuid,
      isProducts: cart.products.length,
      onClickCheckout: props.onClose,
      onClose: props.onClose,
      setPreorderBusiness: setPreorderBusiness,
      isOpenCart: isOpenCart
    }));
  }), (!carts || (carts === null || carts === void 0 ? void 0 : carts.length) === 0 || !auth && cartLayout === 'pfchangs') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cartLayout === 'pfchangs' ? /*#__PURE__*/_react.default.createElement(_styles.NotCartsPFChangs, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_CART_IS_EMPTY', 'Your cart is empty')), /*#__PURE__*/_react.default.createElement("h2", null, t('GET_STARTED_ADD_TASTY_FOOD', 'Get started and add some tasty food')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: onClose
  }, t('BACK', 'Back'))) : /*#__PURE__*/_react.default.createElement(_styles.NotCarts, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound,
    alt: "Not Found",
    width: "200px",
    height: "122px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('NO_PRODUCTS_TO_CART', 'You have no products added to the cart')))), (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && isSlideBar && /*#__PURE__*/_react.default.createElement(_styles.BackToMenuButton, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("p", null, t('BACK_TO_MENU', 'Back to menu')))));
};
exports.CartContent = CartContent;