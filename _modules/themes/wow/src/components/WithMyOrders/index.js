"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithMyOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _AutoScroll = require("../AutoScroll");
var _OrdersOption = require("../OrdersOption");
var _OrderHelp = require("../OrderHelp");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WithMyOrders = exports.WithMyOrders = function WithMyOrders(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('activeOrders'),
    _useState2 = _slicedToArray(_useState, 2),
    ordersOption = _useState2[0],
    setOrdersOption = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedHelpOrder = _useState4[0],
    setSelectedHelpOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOrderHelpView = _useState6[0],
    setIsOrderHelpView = _useState6[1];
  var handleOrderHelp = function handleOrderHelp(order) {
    setSelectedHelpOrder(order);
    setIsOrderHelpView(true);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !isOrderHelpView ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersOptionTabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OptionInnerContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: ordersOption === 'activeOrders',
    onClick: function onClick() {
      return setOrdersOption('activeOrders');
    }
  }, t('ACTIVE_ORDERS', 'Active Orders')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: ordersOption === 'previousOrders',
    onClick: function onClick() {
      return setOrdersOption('previousOrders');
    }
  }, t('PREVIOUS_ORDERS', 'Previous Orders')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: ordersOption === 'preOrders',
    onClick: function onClick() {
      return setOrdersOption('preOrders');
    }
  }, t('PREORDERS', 'Preorders'))))), ordersOption === 'activeOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    activeOrders: true,
    isProfile: true,
    handleOrderHelp: handleOrderHelp
  }), ordersOption === 'previousOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    previousOrders: true,
    isProfile: true,
    handleOrderHelp: handleOrderHelp
  }), ordersOption === 'preOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    preOrders: true,
    isProfile: true,
    handleOrderHelp: handleOrderHelp
  })) : /*#__PURE__*/_react.default.createElement(_OrderHelp.OrderHelp, {
    order: selectedHelpOrder,
    handleCancel: function handleCancel() {
      return setIsOrderHelpView(false);
    }
  }));
};