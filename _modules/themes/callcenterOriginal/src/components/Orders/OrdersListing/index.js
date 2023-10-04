"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _OrdersTable = require("../OrdersTable");
var _OrdersCards = require("../OrdersCards");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersListing = exports.OrdersListing = function OrdersListing(props) {
  var _theme$images;
  var hidePhoto = props.hidePhoto,
    isSelectedOrders = props.isSelectedOrders,
    orderList = props.orderList,
    selectedOrderIds = props.selectedOrderIds,
    orderListView = props.orderListView,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    pagination = props.pagination,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    handleOpenMessage = props.handleOpenMessage,
    handleOrderCardClick = props.handleOrderCardClick,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation,
    messageOrder = props.messageOrder,
    selectedOrderCard = props.selectedOrderCard,
    messageListView = props.messageListView,
    messageType = props.messageType,
    loadMoreOrders = props.loadMoreOrders,
    getPageOrders = props.getPageOrders,
    ordersStatusGroup = props.ordersStatusGroup,
    groupStatus = props.groupStatus,
    orderDetailId = props.orderDetailId,
    filterValues = props.filterValues,
    setFilterModalOpen = props.setFilterModalOpen,
    isMessagesView = props.isMessagesView,
    setSelectedOrderIds = props.setSelectedOrderIds,
    handleOpenTour = props.handleOpenTour,
    currentTourStep = props.currentTourStep,
    isTourOpen = props.isTourOpen,
    setIsTourOpen = props.setIsTourOpen,
    slaSettingTime = props.slaSettingTime,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    handleDrop = props.handleDrop,
    isDelivery = props.isDelivery,
    saveUserSettings = props.saveUserSettings;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterApplied = _useState2[0],
    setFilterApplied = _useState2[1];
  (0, _react.useEffect)(function () {
    if (orderList.loading || !messageListView) return;
    if (orderList.orders.length === 0 || messageOrder) return;
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType);
  }, [orderList.loading, messageListView]);
  (0, _react.useEffect)(function () {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return;
    if ((orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) > 0) {
      handleOrderCardClick(orderList.orders[0]);
    }
  }, [isMessagesView, orderList, selectedOrderCard]);
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      var _filterValues$groupTy, _filterValues$busines, _filterValues$cityIds, _filterValues$deliver, _filterValues$driverI, _filterValues$paymeth, _filterValues$statuse;
      _filterApplied = (filterValues === null || filterValues === void 0 || (_filterValues$groupTy = filterValues.groupTypes) === null || _filterValues$groupTy === void 0 ? void 0 : _filterValues$groupTy.length) || (filterValues === null || filterValues === void 0 || (_filterValues$busines = filterValues.businessIds) === null || _filterValues$busines === void 0 ? void 0 : _filterValues$busines.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$cityIds = filterValues.cityIds) === null || _filterValues$cityIds === void 0 ? void 0 : _filterValues$cityIds.length) > 0 || (filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime) !== null || (filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime) !== null || (filterValues === null || filterValues === void 0 || (_filterValues$deliver = filterValues.deliveryTypes) === null || _filterValues$deliver === void 0 ? void 0 : _filterValues$deliver.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$paymeth = filterValues.paymethodIds) === null || _filterValues$paymeth === void 0 ? void 0 : _filterValues$paymeth.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$statuse = filterValues.statuses) === null || _filterValues$statuse === void 0 ? void 0 : _filterValues$statuse.length) > 0;
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (ordersStatusGroup === groupStatus || isMessagesView) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && (pagination === null || pagination === void 0 ? void 0 : pagination.total) === 0 ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperNoneOrders, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerNoneOrdersContainer, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.noOrders,
    alt: "none"
  }), filterApplied ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, t('NOT_FOUND_FILTERED_ORDERS', 'No orders with the current filters applied.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return setFilterModalOpen(true);
    }
  }, t('FILTERS', 'Filters'))) : /*#__PURE__*/_react.default.createElement("p", null, t('MOBILE_NO_ORDERS', 'No Orders yet.')))) : /*#__PURE__*/_react.default.createElement(_styles2.WrapperOrderListContent, {
    maxHeight: orderListView !== 'table'
  }, orderListView === 'table' ? /*#__PURE__*/_react.default.createElement(_OrdersTable.OrdersTable, {
    hidePhoto: hidePhoto,
    setSelectedOrderIds: setSelectedOrderIds,
    isSelectedOrders: isSelectedOrders,
    orderList: orderList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    orderDetailId: orderDetailId,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    currentTourStep: currentTourStep,
    isTourOpen: isTourOpen,
    handleOpenTour: handleOpenTour,
    setIsTourOpen: setIsTourOpen,
    slaSettingTime: slaSettingTime,
    groupStatus: groupStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    handleDrop: handleDrop,
    saveUserSettings: saveUserSettings
  }) : /*#__PURE__*/_react.default.createElement(_OrdersCards.OrdersCards, {
    isMessagesView: isMessagesView,
    orderList: orderList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    selectedOrderCard: selectedOrderCard,
    handleOrderCardClick: handleOrderCardClick,
    handleUpdateDriverLocation: handleUpdateDriverLocation,
    slaSettingTime: slaSettingTime,
    isDelivery: isDelivery
  }))));
};