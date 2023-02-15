"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _OrdersListing = require("../OrdersListing");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var OrdersDashboardList = function OrdersDashboardList(props) {
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
exports.OrdersDashboardList = OrdersDashboardList;