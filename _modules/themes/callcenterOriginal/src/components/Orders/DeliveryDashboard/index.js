"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDashboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DeliveriesLocation = require("../DeliveriesLocation");
var _OrdersDashboardList = require("../OrdersDashboardList");
var _OrderStatusFilterBar = require("../OrderStatusFilterBar");
var _OrderStatusSubFilter = require("../OrderStatusSubFilter");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var DeliveryDashboard = function DeliveryDashboard(props) {
  var driversList = props.driversList,
    ordersStatusGroup = props.ordersStatusGroup,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleOrdersStatusGroupFilter = props.handleOrdersStatusGroupFilter,
    handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus,
    numberOfOrdersByStatus = props.numberOfOrdersByStatus,
    numberOfOrdersBySubstatus = props.numberOfOrdersBySubstatus;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    interActionMapOrder = _useState2[0],
    setInterActionMapOrder = _useState2[1];
  var handleUpdateDriverLocation = function handleUpdateDriverLocation(order) {
    setInterActionMapOrder(_objectSpread({}, order));
  };
  var handleLocation = function handleLocation(order) {
    if ((interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) === (order === null || order === void 0 ? void 0 : order.id)) {
      setInterActionMapOrder(null);
    } else {
      setInterActionMapOrder(_objectSpread({}, order));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DeliveryDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_OrderStatusFilterBar.OrderStatusFilterBar, {
    selectedOrderStatus: ordersStatusGroup,
    changeOrderStatus: handleOrdersStatusGroupFilter,
    numberOfOrdersByStatus: numberOfOrdersByStatus
  }), /*#__PURE__*/_react.default.createElement(_OrderStatusSubFilter.OrderStatusSubFilter, {
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: handleSelectedSubOrderStatus,
    numberOfOrdersBySubstatus: numberOfOrdersBySubstatus
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    id: "cardOrders"
  }, /*#__PURE__*/_react.default.createElement(_OrdersDashboardList.OrdersDashboardList, _extends({}, props, {
    orderListView: "card",
    selectedOrderCard: interActionMapOrder,
    handleOrderCardClick: handleLocation,
    handleUpdateDriverLocation: handleUpdateDriverLocation,
    isDelivery: true
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDeliveriesLocation, null, /*#__PURE__*/_react.default.createElement(_DeliveriesLocation.DeliveriesLocation, {
    driversList: driversList,
    interActionMapOrder: interActionMapOrder
  })));
};
exports.DeliveryDashboard = DeliveryDashboard;