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
var _Buttons = require("../../styles/Buttons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartContent = function CartContent(props) {
  var _configs$checkout_mul, _Object$values, _theme$images, _theme$images$general;
  var carts = props.carts,
    isOrderStateCarts = props.isOrderStateCarts,
    isCartPopover = props.isCartPopover,
    isForceOpenCart = props.isForceOpenCart,
    setPreorderBusiness = props.setPreorderBusiness,
    isOpenCart = props.isOpenCart,
    isSlideBar = props.isSlideBar;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentCartUuid = _useState2[0],
    setCurrentCartUuid = _useState2[1];
  var checkoutMultiBusinessEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var openCarts = ((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (cart === null || cart === void 0 ? void 0 : cart.valid_schedule) && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.valid_maximum) && (cart === null || cart === void 0 ? void 0 : cart.valid_minimum) && !(cart !== null && cart !== void 0 && cart.wallets);
  })) || null || [];
  var handleAddProduct = function handleAddProduct(product, cart) {
    setCurrentCartUuid(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };
  var handleSetCurrentCartUuid = function handleSetCurrentCartUuid() {
    setCurrentCartUuid(null);
    props.onClose && props.onClose();
  };
  var handleClickCheckout = function handleClickCheckout() {
    var _cart$group2, _Object$values$filter, _Object$values$filter2;
    var cart = carts.find(function (cart) {
      var _cart$group;
      return cart === null || cart === void 0 ? void 0 : (_cart$group = cart.group) === null || _cart$group === void 0 ? void 0 : _cart$group.uuid;
    });
    var cartSelectedHasGroup = cart === null || cart === void 0 ? void 0 : (_cart$group2 = cart.group) === null || _cart$group2 === void 0 ? void 0 : _cart$group2.uuid;
    var cartFilterValidation = function cartFilterValidation(cart) {
      return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2;
    };
    var cartsGroupLength = cartSelectedHasGroup ? (_Object$values$filter = Object.values(orderState.carts).filter(function (_cart) {
      var _cart$group3;
      return (_cart === null || _cart === void 0 ? void 0 : (_cart$group3 = _cart.group) === null || _cart$group3 === void 0 ? void 0 : _cart$group3.uuid) === cartSelectedHasGroup && cartFilterValidation(_cart);
    })) === null || _Object$values$filter === void 0 ? void 0 : _Object$values$filter.length : 0;
    if (cartsGroupLength > 1 && checkoutMultiBusinessEnabled) {
      var _cart$group4;
      events.emit('go_to_page', {
        page: 'multi_checkout',
        params: {
          cartUuid: cart === null || cart === void 0 ? void 0 : (_cart$group4 = cart.group) === null || _cart$group4 === void 0 ? void 0 : _cart$group4.uuid
        }
      });
      events.emit('cart_popover_closed');
      return;
    }
    var cartGroupsCount = {};
    // eslint-disable-next-line no-unused-expressions
    (_Object$values$filter2 = Object.values(orderState.carts).filter(function (_cart) {
      return cartFilterValidation(_cart);
    })) === null || _Object$values$filter2 === void 0 ? void 0 : _Object$values$filter2.forEach(function (_cart) {
      var _cart$group5;
      if (cartGroupsCount[_cart === null || _cart === void 0 ? void 0 : (_cart$group5 = _cart.group) === null || _cart$group5 === void 0 ? void 0 : _cart$group5.uuid]) {
        var _cart$group6;
        cartGroupsCount[_cart === null || _cart === void 0 ? void 0 : (_cart$group6 = _cart.group) === null || _cart$group6 === void 0 ? void 0 : _cart$group6.uuid] += 1;
      } else {
        var _cart$group7;
        cartGroupsCount[_cart === null || _cart === void 0 ? void 0 : (_cart$group7 = _cart.group) === null || _cart$group7 === void 0 ? void 0 : _cart$group7.uuid] = 1;
      }
    });
    var groupForTheCart;
    var groupForAddCartArray = Object.keys(cartGroupsCount).filter(function (cartGroupUuid) {
      return cartGroupsCount[cartGroupUuid] > 0 && cartGroupsCount[cartGroupUuid] < 5;
    });
    var max = Math.max.apply(Math, _toConsumableArray(groupForAddCartArray.map(function (uuid) {
      return cartGroupsCount[uuid];
    })));
    var indexes = groupForAddCartArray.filter(function (uuid) {
      return cartGroupsCount[uuid] === max;
    });
    if ((indexes === null || indexes === void 0 ? void 0 : indexes.length) > 1) {
      groupForTheCart = indexes.find(function (uuid) {
        return uuid !== 'undefined';
      });
    } else {
      groupForTheCart = indexes[0];
    }
    if (checkoutMultiBusinessEnabled && (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) > 1 && groupForTheCart) {
      events.emit('go_to_page', {
        page: 'multi_cart',
        params: {
          cartUuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
          cartGroup: groupForTheCart === 'undefined' ? 'create' : groupForTheCart
        }
      });
    } else {
      events.emit('go_to_page', {
        page: 'checkout',
        params: {
          cartUuid: cart === null || cart === void 0 ? void 0 : cart.uuid
        }
      });
    }
    events.emit('cart_popover_closed');
    props.onClose && props.onClose();
  };
  (0, _react.useEffect)(function () {
    events.on('cart_popover_closed', handleSetCurrentCartUuid);
    events.on('cart_product_added', handleAddProduct);
    return function () {
      events.off('cart_popover_closed', handleSetCurrentCartUuid);
      events.off('cart_product_added', handleAddProduct);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, !isSlideBar && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), checkoutMultiBusinessEnabled && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleClickCheckout,
    color: "primary"
  }, t('CHECKOUT', 'Checkout'))), isOrderStateCarts && (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && carts.map(function (cart) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: cart.uuid
    }, cart.products.length > 0 && /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      cart: cart,
      isCartPopover: isCartPopover,
      isCheckout: window.location.pathname === "/checkout/".concat(cart === null || cart === void 0 ? void 0 : cart.uuid) && !isCartPopover,
      isForceOpenCart: isForceOpenCart,
      currentCartUuid: currentCartUuid,
      isProducts: cart.products.length,
      onClickCheckout: props.onClose,
      setPreorderBusiness: setPreorderBusiness,
      isOpenCart: isOpenCart
    }));
  }), (!carts || (carts === null || carts === void 0 ? void 0 : carts.length) === 0) && /*#__PURE__*/_react.default.createElement(_styles.NotCarts, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound,
    alt: "Not Found",
    width: "200px",
    height: "122px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('NO_PRODUCTS_TO_CART', 'You have no products added to the cart')))));
};
exports.CartContent = CartContent;