"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _OrdersListing = require("../OrdersListing");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var OrdersDashboardList = exports.OrdersDashboardList = function OrdersDashboardList(props) {
  var selectedSubOrderStatus = props.selectedSubOrderStatus,
    isMessagesView = props.isMessagesView,
    orderByOption = props.orderByOption;
  var OrdersCommonControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: _OrdersListing.OrdersListing,
    useDefualtSessionManager: true,
    orderBy: isMessagesView ? orderByOption : 'id',
    orderDirection: isMessagesView ? orderByOption === 'id' ? 'desc' : 'asc' : 'desc',
    asDashboard: true,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    isSearchByBusinessName: true,
    isSearchByDriverName: true,
    driverId: props.driverId
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isMessagesView ? /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardOrdersList, _extends({
    isMessagesView: true
  }, OrdersCommonControlProps, {
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.all
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardOrdersList, _extends({
    groupStatus: "pending"
  }, OrdersCommonControlProps, {
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.pending
  })), /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardOrdersList, _extends({
    groupStatus: "inProgress"
  }, OrdersCommonControlProps, {
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.inProgress
  })), /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardOrdersList, _extends({
    groupStatus: "completed"
  }, OrdersCommonControlProps, {
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.completed
  })), /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardOrdersList, _extends({
    groupStatus: "cancelled"
  }, OrdersCommonControlProps, {
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.cancelled
  }))));
};