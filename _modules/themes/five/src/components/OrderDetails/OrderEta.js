"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderEta = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderEta = exports.OrderEta = function OrderEta(props) {
  var order = props.order,
    outputFormat = props.outputFormat;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    estimatedDeliveryTime = _useState2[0],
    setEstimatedDeliveryTime = _useState2[1];
  var getEstimatedDeliveryTime = function getEstimatedDeliveryTime() {
    var estimatedUtcTime = null;
    var totalEta = 0;
    if (order !== null && order !== void 0 && order.delivered_in) totalEta += order === null || order === void 0 ? void 0 : order.delivered_in;
    if (order !== null && order !== void 0 && order.prepared_in) totalEta += order === null || order === void 0 ? void 0 : order.prepared_in;
    if ((order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && order !== null && order !== void 0 && order.eta_drive_time) {
      totalEta += order === null || order === void 0 ? void 0 : order.eta_drive_time;
    }
    var _delivery = order !== null && order !== void 0 && order.delivery_datetime_utc ? order === null || order === void 0 ? void 0 : order.delivery_datetime_utc : order === null || order === void 0 ? void 0 : order.delivery_datetime;
    if (order !== null && order !== void 0 && order.eta_current_status_time) {
      var _order$reporting_data;
      var currentStatueEta = order === null || order === void 0 ? void 0 : order.eta_current_status_time;
      totalEta += currentStatueEta;
      var previousStatusTimes = 0;
      if (order !== null && order !== void 0 && order.eta_previous_status_times) {
        Object.keys(order.eta_previous_status_times).map(function (key) {
          if (!key.includes('status_penalty')) {
            previousStatusTimes += order.eta_previous_status_times[key];
          }
        });
      }
      totalEta += previousStatusTimes;
      var nextStatusTimes = 0;
      if (order !== null && order !== void 0 && order.eta_next_status_times) {
        Object.keys(order.eta_next_status_times).map(function (key) {
          if (!key.includes('status_penalty')) {
            nextStatusTimes += order.eta_next_status_times[key];
          }
        });
      }
      totalEta += nextStatusTimes;
      var diffTimeAsSeconds = _moment.default.utc(order === null || order === void 0 || (_order$reporting_data = order.reporting_data) === null || _order$reporting_data === void 0 ? void 0 : _order$reporting_data.at["status:".concat(order.status)]).add(order === null || order === void 0 ? void 0 : order.eta_current_status_time, 'minutes').diff((0, _moment.default)().utc(), 'seconds');
      var diffTimeAsMinutes = Math.ceil(diffTimeAsSeconds / 60);
      if (diffTimeAsMinutes <= 0) {
        totalEta += Math.floor(Math.abs(diffTimeAsMinutes / (order === null || order === void 0 ? void 0 : order.eta_current_status_time)) + 1) * (order === null || order === void 0 ? void 0 : order.eta_current_status_penalty_time);
      }
    } else {
      totalEta = (order === null || order === void 0 ? void 0 : order.eta_time) + totalEta;
    }
    estimatedUtcTime = _moment.default.utc(_delivery).add(totalEta, 'minutes');
    var _estimatedTime = outputFormat ? (0, _moment.default)(estimatedUtcTime).local().format(outputFormat) : parseDate(estimatedUtcTime, {
      utc: false
    });
    setEstimatedDeliveryTime((order === null || order === void 0 ? void 0 : order.status) === 13 ? parseDate(_delivery, {
      utc: !!(order !== null && order !== void 0 && order.delivery_datetime_utc),
      outputFormat: outputFormat
    }) : _estimatedTime);
  };
  (0, _react.useEffect)(function () {
    getEstimatedDeliveryTime();
    var interval = setInterval(function () {
      getEstimatedDeliveryTime();
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [order, outputFormat]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, estimatedDeliveryTime);
};