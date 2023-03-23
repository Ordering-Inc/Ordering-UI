"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOptionTabs = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersOptionTabs = function OrdersOptionTabs(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var ordersTotal = props.ordersTotal,
    ordersOption = props.ordersOption,
    handleOrdersOption = props.handleOrdersOption,
    onOrderDetailsRedirect = props.onOrderDetailsRedirect,
    setOrderDetailOpen = props.setOrderDetailOpen;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleOption = function handleOption(option) {
    setOrderDetailOpen(false);
    onOrderDetailsRedirect({});
    handleOrdersOption(option);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDERS', 'Orders')), /*#__PURE__*/_react.default.createElement(_styles.Option, {
    active: ordersOption === 'activeOrders',
    onClick: function onClick() {
      return handleOption('activeOrders');
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('ACTIVE_ORDERS', 'Active Orders')), ordersTotal > 0 && ordersOption === 'activeOrders' && /*#__PURE__*/_react.default.createElement("span", null, ordersTotal, " ", t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.Option, {
    active: ordersOption === 'previousOrders',
    onClick: function onClick() {
      return handleOption('previousOrders');
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PREVIOUS_ORDERS', 'Previous Orders')), ordersTotal > 0 && ordersOption === 'previousOrders' && /*#__PURE__*/_react.default.createElement("span", null, ordersTotal, " ", t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.Option, {
    active: ordersOption === 'preOrders',
    onClick: function onClick() {
      return handleOption('preOrders');
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PREORDERS', 'Preorders')), ordersTotal > 0 && ordersOption === 'preOrders' && /*#__PURE__*/_react.default.createElement("span", null, ordersTotal, " ", t('ORDERS', 'Orders')))), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.OrdersOptionTabs = OrdersOptionTabs;