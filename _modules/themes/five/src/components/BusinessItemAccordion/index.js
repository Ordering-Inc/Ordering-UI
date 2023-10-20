"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TiArrowSortedUp = _interopRequireDefault(require("@meronex/icons/ti/TiArrowSortedUp"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessItemAccordion = exports.BusinessItemAccordion = function BusinessItemAccordion(props) {
  var _configs$cart_change_, _configs$checkout_mul, _theme$viewString, _theme$viewString2, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _orderState$options, _props$afterComponent, _props$afterElements;
  var uuid = props.uuid,
    isCartPending = props.isCartPending,
    currentCartUuid = props.currentCartUuid,
    isCheckout = props.isCheckout,
    isClosed = props.isClosed,
    moment = props.moment,
    business = props.business,
    isProducts = props.isProducts,
    isForceOpenAccordion = props.isForceOpenAccordion,
    isCartOnProductsList = props.isCartOnProductsList,
    handleClearProducts = props.handleClearProducts,
    handleStoreRedirect = props.handleStoreRedirect,
    handleCartOpen = props.handleCartOpen,
    isStore = props.isStore,
    total = props.total,
    handleClickCheckout = props.handleClickCheckout,
    checkoutButtonDisabled = props.checkoutButtonDisabled,
    setPreorderBusiness = props.setPreorderBusiness,
    handleChangeStore = props.handleChangeStore,
    isMultiCheckout = props.isMultiCheckout,
    isGiftCart = props.isGiftCart;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    setHeight = _useState4[0],
    setHeightState = _useState4[1];
  var _useState5 = (0, _react.useState)('accordion__icon'),
    _useState6 = _slicedToArray(_useState5, 2),
    setRotate = _useState6[0],
    setRotateState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cartProductUpdated = _useState8[0],
    setCartProductUpdated = _useState8[1];
  var isBusinessChangeEnabled = (configs === null || configs === void 0 || (_configs$cart_change_ = configs.cart_change_business_validation) === null || _configs$cart_change_ === void 0 ? void 0 : _configs$cart_change_.value) === '1';
  var checkoutMultiBusinessEnabled = (configs === null || configs === void 0 || (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var content = (0, _react.useRef)(null);
  var businessStore = (0, _react.useRef)(null);
  var businessDelete = (0, _react.useRef)(null);
  var changeStore = (0, _react.useRef)(null);
  var viewString = isStore ? 'business_view' : 'header';
  var hideBusinessLogo = theme === null || theme === void 0 || (_theme$viewString = theme[viewString]) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.components) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.cart) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.components) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.business) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.components) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.logo) === null || _theme$viewString === void 0 ? void 0 : _theme$viewString.hidden;
  var hideBusinessTime = theme === null || theme === void 0 || (_theme$viewString2 = theme[viewString]) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.components) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.cart) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.components) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.business) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.components) === null || _theme$viewString2 === void 0 || (_theme$viewString2 = _theme$viewString2.time) === null || _theme$viewString2 === void 0 ? void 0 : _theme$viewString2.hidden;
  var toggleAccordion = function toggleAccordion(e) {
    var _businessStore$curren, _businessDelete$curre, _changeStore$current;
    var isActionsClick = ((_businessStore$curren = businessStore.current) === null || _businessStore$curren === void 0 ? void 0 : _businessStore$curren.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_businessDelete$curre = businessDelete.current) === null || _businessDelete$curre === void 0 ? void 0 : _businessDelete$curre.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_changeStore$current = changeStore.current) === null || _changeStore$current === void 0 ? void 0 : _changeStore$current.contains(e === null || e === void 0 ? void 0 : e.target));
    if (isClosed || !isProducts || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var activeAccordion = function activeAccordion(value) {
    setActiveState(value ? 'active' : '');
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon');
  };
  var handleCloseCartPopover = function handleCloseCartPopover() {
    var _Object$values$filter;
    var cartsLength = (_Object$values$filter = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter !== void 0 ? _Object$values$filter : 0;
    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false);
    }
  };
  var handleCartProductUpdated = function handleCartProductUpdated(product, cart) {
    setCartProductUpdated(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };
  var handleOpenBusinessMenu = function handleOpenBusinessMenu(business) {
    setPreorderBusiness && setPreorderBusiness(business);
  };
  (0, _react.useEffect)(function () {
    if (cartProductUpdated === uuid || currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid)) {
      activeAccordion(true);
    } else {
      activeAccordion(false);
    }
  }, [cartProductUpdated, currentCartUuid]);
  (0, _react.useEffect)(function () {
    var _Object$values$filter2;
    var cartsLength = (_Object$values$filter2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter2 !== void 0 ? _Object$values$filter2 : 0;
    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true);
    }
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.carts]);
  (0, _react.useEffect)(function () {
    if (isForceOpenAccordion) {
      activeAccordion(true);
    }
  }, [isForceOpenAccordion]);
  (0, _react.useEffect)(function () {
    events.on('cart_popover_closed', handleCloseCartPopover);
    events.on('cart_product_updated', handleCartProductUpdated);
    return function () {
      events.off('cart_popover_closed', handleCloseCartPopover);
      events.off('cart_product_updated', handleCartProductUpdated);
    };
  }, []);
  (0, _react.useEffect)(function () {
    handleCartOpen && handleCartOpen(!!setActive);
  }, [setActive]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    isClosed: isClosed,
    isCartOnProductsList: isCartOnProductsList
  }, !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isClosed: isClosed,
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    isOtherInfo: isClosed && !isStore || !isClosed && !isProducts && !isStore
  }, !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: !isGiftCart ? (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo) : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.isotype
  })), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info",
    isStore: isStore,
    isLogo: !hideBusinessLogo
  }, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), !hideBusinessTime && /*#__PURE__*/_react.default.createElement(_styles.TimeContainer, null, (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))), /*#__PURE__*/_react.default.createElement("div", null, handleStoreRedirect && !isCartOnProductsList && !isStore && !isGiftCart && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessStore,
    onClick: function onClick() {
      return isClosed ? handleOpenBusinessMenu(business) : handleStoreRedirect(business === null || business === void 0 ? void 0 : business.slug);
    },
    className: "go-store"
  }, t('GO_TO_STORE', 'Go to store')), !isClosed && !!isProducts && !isCartPending && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isStore && !isGiftCart && /*#__PURE__*/_react.default.createElement("span", null, "\u2022"), /*#__PURE__*/_react.default.createElement("span", {
    ref: businessDelete,
    onClick: function onClick() {
      return handleClearProducts();
    },
    className: "clear-cart"
  }, t('CLEAR_CART', 'Clear cart')))), isBusinessChangeEnabled && handleChangeStore && !isGiftCart && /*#__PURE__*/_react.default.createElement("span", {
    ref: changeStore,
    onClick: handleChangeStore,
    className: "change-store"
  }, t('CHANGE_STORE', 'Change store')))), isClosed && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "closed"
  }, /*#__PURE__*/_react.default.createElement("p", null, t('CLOSED', 'Closed'), " ", moment)), !isClosed && !isProducts && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_PRODUCTS', 'No products'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessActions, null, !isClosed && !!isProducts && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_TiArrowSortedUp.default, {
    className: "".concat(setRotate)
  })))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      minHeight: "".concat(setHeight),
      maxHeight: !setActive && '0px'
    }
  }, isBusinessChangeEnabled && isCheckout && handleChangeStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: changeStore,
    onClick: handleChangeStore,
    className: "change-store"
  }, t('CHANGE_STORE', 'Change store')))), props.children), !setActive && !isClosed && !!isProducts && !checkoutButtonDisabled && !isMultiCheckout && !checkoutMultiBusinessEnabled && /*#__PURE__*/_react.default.createElement(_styles.PriceContainer, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(total)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleClickCheckout(uuid);
    },
    color: "primary"
  }, t('CHECKOUT', 'Checkout')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};