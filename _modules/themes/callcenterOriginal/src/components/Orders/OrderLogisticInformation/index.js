"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderLogisticInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LogisticInformationUI = function LogisticInformationUI(props) {
  var _logisticInformation$;
  var logisticInformation = props.logisticInformation,
    getLogistics = props.getLogistics;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parseDistance = _useUtils2$.parseDistance;
  var getOrderStatus = function getOrderStatus(status) {
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED_BY_ADMIN', 'Completed by admin')
    }, {
      key: 2,
      value: t('REJECTED_BY_ADMIN', 'Rejected by admin')
    }, {
      key: 3,
      value: t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
    }, {
      key: 13,
      value: t('PREORDER', 'Preorder')
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', 'Order not ready')
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer')
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business')
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business')
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business')
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver')
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', 'Driver on way')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 40
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error === null ? /*#__PURE__*/_react.default.createElement(_styles2.WraaperLogs, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    rectangle: true,
    color: "primary",
    onClick: function onClick() {
      return getLogistics();
    }
  }, t('RELOAD', 'Reload')), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, /*#__PURE__*/_react.default.createElement("strong", null, t('DISTANCE_CUSTOMER_FROM_BUSINESS', 'DISTANCE FROM CUSTOMER TO BUSINESS'))), ": ", parseDistance((logisticInformation === null || logisticInformation === void 0 || (_logisticInformation$ = logisticInformation.data) === null || _logisticInformation$ === void 0 ? void 0 : _logisticInformation$.distance_customer_from_business) / 1000)), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, {
    title: "title"
  }, t('QUEUES', 'Queues'))), logisticInformation.data.queues.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.queues.map(function (queue, i) {
    var _getOrderStatus;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: queue.id
    }, (queue === null || queue === void 0 ? void 0 : queue.name) && /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("span", null, i + 1, ". ", queue.name)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('AVAILABLE_DRIVERS', 'Available drivers'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.drivers.length)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('PRIORITY', 'Priority'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.priority)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('START_IN', 'Start in'), ": "), /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus = getOrderStatus(queue.orders_group_start_in_status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), queue.orders.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, queue.orders.map(function (order, i) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: order.id
      }, i + 1, ". ", order.id, " ", (order === null || order === void 0 ? void 0 : order.waiting_for_preorder) && /*#__PURE__*/_react.default.createElement("span", null, "(", t('WAITING_FOR_PREORDER', 'waiting for preorder'), ")"));
    })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, t('WITHOUT_ORDERS', 'without orders')));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, t('WITHOUT_QUEUES', 'Without Queues')))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, {
    title: "title"
  }, t('HISTORY_ATTEMPTS', 'Attempts history'))), logisticInformation.data.logistic_attempts.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.logistic_attempts.map(function (attempt) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, {
      key: attempt.id
    }, /*#__PURE__*/_react.default.createElement("strong", null, t('DRIVER_GROUP', 'Driver group')), ": ", /*#__PURE__*/_react.default.createElement("strong", null, attempt === null || attempt === void 0 ? void 0 : attempt.driver_group_id), " ", t('AT', 'at'), " ", parseDate(attempt === null || attempt === void 0 ? void 0 : attempt.created_at, {
      utc: false
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, t('WITHOUT_HISTORY_ATTEMPTS', 'without history attempts'))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error)));
};
var OrderLogisticInformation = exports.OrderLogisticInformation = function OrderLogisticInformation(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticInformationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogisticInformation, logisticsProps);
};