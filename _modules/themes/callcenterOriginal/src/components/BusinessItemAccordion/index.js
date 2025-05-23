"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TiArrowSortedUp = _interopRequireDefault(require("@meronex/icons/ti/TiArrowSortedUp"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessItemAccordion = exports.BusinessItemAccordion = function BusinessItemAccordion(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
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
    checkoutButtonDisabled = props.checkoutButtonDisabled,
    setPreorderBusiness = props.setPreorderBusiness;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
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
  var content = (0, _react.useRef)(null);
  var businessStore = (0, _react.useRef)(null);
  var businessDelete = (0, _react.useRef)(null);
  var toggleAccordion = function toggleAccordion(e) {
    var _businessStore$curren, _businessDelete$curre;
    var isActionsClick = ((_businessStore$curren = businessStore.current) === null || _businessStore$curren === void 0 ? void 0 : _businessStore$curren.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_businessDelete$curre = businessDelete.current) === null || _businessDelete$curre === void 0 ? void 0 : _businessDelete$curre.contains(e === null || e === void 0 ? void 0 : e.target));
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
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info",
    isStore: isStore
  }, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("div", null, handleStoreRedirect && !isCartOnProductsList && !isStore && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessStore,
    onClick: function onClick() {
      return isClosed ? handleOpenBusinessMenu(business) : handleStoreRedirect(business === null || business === void 0 ? void 0 : business.slug);
    },
    className: "go-store"
  }, t('GO_TO_STORE', 'Go to store')), !isClosed && !!isProducts && !isCartPending && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isStore && /*#__PURE__*/_react.default.createElement("span", null, "\u2022"), /*#__PURE__*/_react.default.createElement("span", {
    ref: businessDelete,
    onClick: function onClick() {
      return handleClearProducts();
    },
    className: "clear-cart"
  }, t('CLEAR_CART', 'Clear cart')))))), isClosed && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "closed"
  }, /*#__PURE__*/_react.default.createElement("p", null, t('CLOSED', 'Closed'), " ", moment)), !isClosed && !isProducts && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_PRODUCTS', 'No products'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessActions, null, !isClosed && !!isProducts && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_TiArrowSortedUp.default, {
    className: "".concat(setRotate)
  })))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      minHeight: "".concat(setHeight),
      maxHeight: !setActive && '0px'
    }
  }, props.children)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};