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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartContent = function CartContent(props) {
  var _configs$checkout_mul, _carts$filter, _configs$multi_busine4, _configs$multi_busine5, _theme$images, _theme$images$general;
  var carts = props.carts,
    isOrderStateCarts = props.isOrderStateCarts,
    isCartPopover = props.isCartPopover,
    isForceOpenCart = props.isForceOpenCart,
    setPreorderBusiness = props.setPreorderBusiness,
    isOpenCart = props.isOpenCart,
    isSlideBar = props.isSlideBar,
    isCustomerMode = props.isCustomerMode;
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
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentCartUuid = _useState2[0],
    setCurrentCartUuid = _useState2[1];
  var checkoutMultiBusinessEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var totalCartsPrice = (carts === null || carts === void 0 ? void 0 : carts.length) && carts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var totalCartsFee = (carts === null || carts === void 0 ? void 0 : carts.length) && (carts === null || carts === void 0 ? void 0 : (_carts$filter = carts.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.valid);
  })) === null || _carts$filter === void 0 ? void 0 : _carts$filter.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount);
  }, 0));
  var handleAddProduct = function handleAddProduct(product, cart) {
    setCurrentCartUuid(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };
  var handleSetCurrentCartUuid = function handleSetCurrentCartUuid() {
    setCurrentCartUuid(null);
    props.onClose && props.onClose();
  };
  var handleClickCheckout = function handleClickCheckout() {
    var _Object$values;
    var cartsAvailable = (_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
      return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2;
    });
    if (cartsAvailable.length === 1) {
      var _cartsAvailable$;
      events.emit('go_to_page', {
        page: 'checkout',
        params: {
          cartUuid: (_cartsAvailable$ = cartsAvailable[0]) === null || _cartsAvailable$ === void 0 ? void 0 : _cartsAvailable$.uuid
        }
      });
    } else {
      var groupKeys = {};
      cartsAvailable.forEach(function (_cart) {
        var _cart$group, _cart$group2, _cart$group$uuid, _cart$group3;
        groupKeys[_cart === null || _cart === void 0 ? void 0 : (_cart$group = _cart.group) === null || _cart$group === void 0 ? void 0 : _cart$group.uuid] ? groupKeys[_cart === null || _cart === void 0 ? void 0 : (_cart$group2 = _cart.group) === null || _cart$group2 === void 0 ? void 0 : _cart$group2.uuid] += 1 : groupKeys[(_cart$group$uuid = _cart === null || _cart === void 0 ? void 0 : (_cart$group3 = _cart.group) === null || _cart$group3 === void 0 ? void 0 : _cart$group3.uuid) !== null && _cart$group$uuid !== void 0 ? _cart$group$uuid : 'null'] = 1;
      });
      if (Object.keys(groupKeys).length === 1 && Object.keys(groupKeys)[0] === 'null' || Object.keys(groupKeys).length > 1) {
        events.emit('go_to_page', {
          page: 'multi_cart'
        });
      } else {
        var _cartsAvailable$2, _cartsAvailable$2$gro;
        events.emit('go_to_page', {
          page: 'multi_checkout',
          params: {
            cartUuid: (_cartsAvailable$2 = cartsAvailable[0]) === null || _cartsAvailable$2 === void 0 ? void 0 : (_cartsAvailable$2$gro = _cartsAvailable$2.group) === null || _cartsAvailable$2$gro === void 0 ? void 0 : _cartsAvailable$2$gro.uuid
          }
        });
      }
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, !isSlideBar && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), checkoutMultiBusinessEnabled && (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleClickCheckout,
    color: "primary"
  }, t('CHECKOUT', 'Checkout'))), isOrderStateCarts && (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, carts.map(function (cart) {
    var _cart$business, _configs$multi_busine, _configs$multi_busine2, _configs$multi_busine3;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: cart.uuid
    }, cart.products.length > 0 && /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
      cart: cart,
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      isOpenCart: isOpenCart,
      isCartPopover: isCartPopover,
      isCheckout: window.location.pathname === "/checkout/".concat(cart === null || cart === void 0 ? void 0 : cart.uuid) && !isCartPopover,
      isForceOpenCart: isForceOpenCart,
      currentCartUuid: currentCartUuid,
      isProducts: cart.products.length,
      onClickCheckout: props.onClose,
      setPreorderBusiness: setPreorderBusiness,
      businessConfigs: cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.configs,
      hideCouponInput: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine = configs.multi_business_checkout_coupon_input_style) === null || _configs$multi_busine === void 0 ? void 0 : _configs$multi_busine.value) === 'group',
      hideDeliveryFee: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine2 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine2 === void 0 ? void 0 : _configs$multi_busine2.value) === '1',
      hideDriverTip: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine3 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine3 === void 0 ? void 0 : _configs$multi_busine3.value) === '1',
      isCustomerMode: isCustomerMode
    }));
  }), checkoutMultiBusinessEnabled && !!carts.length && /*#__PURE__*/_react.default.createElement(_styles.MultiCartPriceContainer, null, !!totalCartsFee && (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine4 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine4 === void 0 ? void 0 : _configs$multi_busine4.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('TOTAL_DELIVERY_FEE', 'Total delivery fee')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(totalCartsFee))), carts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0) > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine5 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine5 === void 0 ? void 0 : _configs$multi_busine5.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_TIP', 'Driver tip')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(carts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')), /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(totalCartsPrice))), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('CART_GROUP_MESSAGE_ALERT', 'Discounts may be applied at the time of payment for this group.'))))), (!carts || (carts === null || carts === void 0 ? void 0 : carts.length) === 0) && /*#__PURE__*/_react.default.createElement(_styles.NotCarts, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound,
    alt: "Not Found",
    width: "200px",
    height: "122px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('NO_PRODUCTS_TO_CART', 'You have no products added to the cart')))));
};
exports.CartContent = CartContent;