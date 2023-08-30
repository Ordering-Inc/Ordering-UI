"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _OrdersContentHeader = require("../OrdersContentHeader");
var _OrderDetails = require("../OrderDetails");
var _OrderNotification = require("../OrderNotification");
var _DeliveryDashboard = require("../DeliveryDashboard");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DeliveriesManagerUI = function DeliveriesManagerUI(props) {
  var _configState$configs;
  var searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    ordersStatusGroup = props.ordersStatusGroup,
    filterValues = props.filterValues,
    deletedOrderId = props.deletedOrderId,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOrdersStatusGroupFilter = props.handleOrdersStatusGroupFilter,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus,
    onOrderRedirect = props.onOrderRedirect,
    numberOfOrdersByStatus = props.numberOfOrdersByStatus,
    numberOfOrdersBySubstatus = props.numberOfOrdersBySubstatus,
    franchiseId = props.franchiseId;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenOrderDetail = _useState2[0],
    setIsOpenOrderDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderDetailId = _useState4[0],
    setOrderDetailId = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailsOrder = _useState6[0],
    setDetailsOrder = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    filterModalOpen = _useState8[0],
    setFilterModalOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    timeStatus = _useState10[0],
    setTimeStatus = _useState10[1];
  var _useState11 = (0, _react.useState)(60000),
    _useState12 = _slicedToArray(_useState11, 2),
    slaSettingTime = _useState12[0],
    setSlaSettingTime = _useState12[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenOrderDetail(false);
    onOrderRedirect();
  };
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    setDetailsOrder(order);
    setOrderDetailId(order.id);
    onOrderRedirect(order.id);
    setIsOpenOrderDetail(true);
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setIsOpenOrderDetail(false);else {
      setOrderDetailId(id);
      setIsOpenOrderDetail(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveriesContainer, {
    id: "deliveryDashboard"
  }, /*#__PURE__*/_react.default.createElement(_OrdersContentHeader.OrdersContentHeader, {
    isDisableControl: true,
    title: t('DELIVERY_DASHBOARD', 'Delivery dashboard'),
    isShowMapsKeySettingButton: !googleMapsApiKey,
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    filterValues: filterValues,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    filterModalOpen: filterModalOpen,
    setFilterModalOpen: setFilterModalOpen,
    setTimeStatus: setTimeStatus,
    setSlaSettingTime: setSlaSettingTime
  }), /*#__PURE__*/_react.default.createElement(_styles.OrdersContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, null, /*#__PURE__*/_react.default.createElement(_DeliveryDashboard.DeliveryDashboard, {
    searchValue: searchValue,
    filterValues: filterValues,
    driversList: driversList,
    deletedOrderId: deletedOrderId,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleSelectedSubOrderStatus: handleSelectedSubOrderStatus,
    isOnlyDelivery: true,
    setFilterModalOpen: setFilterModalOpen,
    slaSettingTime: slaSettingTime,
    timeStatus: timeStatus,
    numberOfOrdersByStatus: numberOfOrdersByStatus,
    numberOfOrdersBySubstatus: numberOfOrdersBySubstatus,
    franchiseId: franchiseId
  })))), isOpenOrderDetail && /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    open: isOpenOrderDetail,
    order: detailsOrder,
    orderId: orderDetailId,
    drivers: driversList.drivers,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), /*#__PURE__*/_react.default.createElement(_OrderNotification.OrderNotification, {
    isOnlyDelivery: true
  }));
};
var DeliveriesManager = function DeliveriesManager(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    isOnlyDelivery: true,
    UIComponent: DeliveriesManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrdersManage, OrdersListControlProps);
};
exports.DeliveriesManager = DeliveriesManager;