"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderEta = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderEta = function OrderEta(props) {
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
    var _estimatedTime;
    var totalEta = 0;
    var _delivery = order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime);
    if (order !== null && order !== void 0 && order.eta_current_status_time) {
      var _order$reporting_data;
      var currentStatueEta = order === null || order === void 0 ? void 0 : order.eta_current_status_time;
      totalEta += currentStatueEta;
      var nextStatusTimes = 0;
      if (order !== null && order !== void 0 && order.eta_next_status_times) {
        Object.keys(order.eta_next_status_times).map(function (key) {
          if (!key.includes('status_penalty')) {
            nextStatusTimes += order.eta_next_status_times[key];
          }
        });
      }
      totalEta += nextStatusTimes;
      var currentStatusUpdated = parseDate(order === null || order === void 0 ? void 0 : (_order$reporting_data = order.reporting_data) === null || _order$reporting_data === void 0 ? void 0 : _order$reporting_data.at["status:".concat(order.status)]);
      var diffTimeAsMinutes = (0, _moment.default)(currentStatusUpdated).add(order === null || order === void 0 ? void 0 : order.eta_current_status_time, 'minutes').diff((0, _moment.default)().utc(), 'minutes');
      if (diffTimeAsMinutes < 0) {
        totalEta += order === null || order === void 0 ? void 0 : order.eta_current_status_penalty_time;
      }
      _estimatedTime = parseDate((0, _moment.default)(_delivery).add(totalEta, 'minutes'));
    } else {
      _estimatedTime = parseDate((0, _moment.default)(_delivery).add(order === null || order === void 0 ? void 0 : order.eta_time, 'minutes'));
    }
    setEstimatedDeliveryTime(_estimatedTime);
  };
  (0, _react.useEffect)(function () {
    getEstimatedDeliveryTime();
    var interval = setInterval(function () {
      getEstimatedDeliveryTime();
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [order]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !outputFormat ? estimatedDeliveryTime : (0, _moment.default)(estimatedDeliveryTime).format(outputFormat));
};
exports.OrderEta = OrderEta;