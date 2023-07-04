"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalOrdersLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _styles2 = require("../OrdersOption/styles");
var _SingleOrderCard = require("../SingleOrderCard");
var _Pagination = require("../Pagination");
var _AutoScroll = require("../AutoScroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var HorizontalOrdersLayout = function HorizontalOrdersLayout(props) {
  var pagination = props.pagination,
    isBusinessesPage = props.isBusinessesPage,
    customArray = props.customArray,
    businessesIds = props.businessesIds,
    isCustomerMode = props.isCustomerMode,
    handleChangePage = props.handleChangePage,
    titleContent = props.titleContent;
  var orders = customArray || props.orders;
  var ordersToShow = businessesIds && isCustomerMode ? orders.filter(function (order) {
    return businessesIds === null || businessesIds === void 0 ? void 0 : businessesIds.includes(order === null || order === void 0 ? void 0 : order.business_id);
  }) : businessesIds ? orders.filter(function (order) {
    var _order$business;
    return (businessesIds === null || businessesIds === void 0 ? void 0 : businessesIds.includes(order === null || order === void 0 ? void 0 : order.business_id)) || JSON.stringify(businessesIds.sort(function (a, b) {
      return a - b;
    })) === JSON.stringify(order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.map(function (business) {
      return business === null || business === void 0 ? void 0 : business.id;
    }).sort(function (a, b) {
      return a - b;
    }));
  }) : orders;
  return orders.length > 0 && ordersToShow.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    id: isBusinessesPage && titleContent ? "".concat(titleContent, "-container") : 'orders-container',
    activeOrders: true,
    ordersLength: (orders === null || orders === void 0 ? void 0 : orders.length) <= 1,
    isBusinessesPage: isBusinessesPage
  }, /*#__PURE__*/_react.default.createElement(_styles.CardWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CardsContainerWrapper, {
    isBusinessesPage: isBusinessesPage
  }, /*#__PURE__*/_react.default.createElement(_styles.CardsContainer, {
    isBusinessesPage: isBusinessesPage
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: isBusinessesPage && titleContent ? "".concat(titleContent, "Scroll") : 'orderScroll'
  }, orders.length > 0 && ordersToShow.map(function (order, i) {
    var _order$id;
    return /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, _extends({}, props, {
      key: order.id || ((_order$id = order.id) === null || _order$id === void 0 ? void 0 : _order$id[0]) || i,
      order: order
    }));
  })))), orders.length > 0 && ordersToShow.length > 0 && Math.ceil(pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) > 1 && /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil(pagination === null || pagination === void 0 ? void 0 : pagination.totalPages),
    handleChangePage: handleChangePage
  }))) : null;
};
exports.HorizontalOrdersLayout = HorizontalOrdersLayout;