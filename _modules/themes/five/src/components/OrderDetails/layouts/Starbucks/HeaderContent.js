"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _styles2 = require("../../styles");
var _moment = _interopRequireDefault(require("moment"));
var _Simple = require("../../../ReviewOrder/layouts/Simple");
var _Simple2 = require("../../../ReviewDriver/layouts/Simple");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var HeaderContent = exports.HeaderContent = function HeaderContent(props) {
  var _theme$defaultLanguag;
  var order = props.order,
    hashKey = props.hashKey,
    orderId = props.orderId,
    showReview = props.showReview,
    changeIdToExternalId = props.changeIdToExternalId,
    enabledPoweredByOrdering = props.enabledPoweredByOrdering,
    orderStatus = props.orderStatus,
    percentage = props.percentage,
    googleMapsUrl = props.googleMapsUrl;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)({
      order: false,
      driver: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    reviewState = _useState2[0],
    setReviewState = _useState2[1];
  var getDelayMinutes = function getDelayMinutes(order) {
    var _order$fechaHoraAmasT;
    var defaultDate = (_order$fechaHoraAmasT = order === null || order === void 0 ? void 0 : order.fechaHoraAmasTardar) !== null && _order$fechaHoraAmasT !== void 0 ? _order$fechaHoraAmasT : order === null || order === void 0 ? void 0 : order.delivery_datetime;
    var offset = 300;
    var cdtToutc = (0, _moment.default)(defaultDate).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    var _delivery = order !== null && order !== void 0 && order.delivery_datetime_utc && !(order !== null && order !== void 0 && order.fechaHoraAmasTardar) ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
      outputFormat: 'YYYY-MM-DD HH:mm:ss'
    }) : parseDate(cdtToutc, {
      outputFormat: 'YYYY-MM-DD HH:mm:ss'
    });
    var _eta = order === null || order === void 0 ? void 0 : order.eta_time;
    var diffTimeAsSeconds = (0, _moment.default)(_delivery).add(_eta, 'minutes').diff((0, _moment.default)().utc(), 'seconds');
    return Math.ceil(diffTimeAsSeconds / 60);
  };
  var displayDelayedTime = function displayDelayedTime(order) {
    var tagetedMin = getDelayMinutes(order);
    // get day, hour and minutes
    var sign = tagetedMin >= 0 ? '' : '- ';
    tagetedMin = Math.abs(tagetedMin);
    var day = Math.floor(tagetedMin / 1440);
    var restMinOfTargetedMin = tagetedMin - 1440 * day;
    var restHours = Math.floor(restMinOfTargetedMin / 60);
    var restMins = restMinOfTargetedMin - 60 * restHours;
    // make standard time format
    day = day === 0 ? '' : "".concat(day + ' ' + t('DAY', 'day') + ' ');
    restHours = restHours < 10 ? '0' + restHours : restHours;
    restMins = restMins < 10 ? '0' + restMins : restMins;
    var finalTaget = sign + day + restHours + ':' + restMins;
    return finalTaget;
  };
  (0, _react.useEffect)(function () {
    setReviewState({
      order: !!(order !== null && order !== void 0 && order.review),
      driver: !!(order !== null && order !== void 0 && order.driver && order !== null && order !== void 0 && order.user_review)
    });
  }, [order]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTitle, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDER) || 'Order'), changeIdToExternalId && orderId.external_id || "#".concat(orderId.id)), enabledPoweredByOrdering && /*#__PURE__*/_react.default.createElement(_styles2.PoweredByOrdering, null, t('POWERED_BY', 'Powered by'), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.ordering.co"
  }, t('ORDERING_CO', 'Ordering.co')))), /*#__PURE__*/_react.default.createElement(_styles.DelayedTime, {
    className: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ring1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ring2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "time"
  }, /*#__PURE__*/_react.default.createElement("p", null, t('DELAYED_TIME_MESSAGE', 'Arriving in')), /*#__PURE__*/_react.default.createElement("span", null, displayDelayedTime(order))))))), /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, orderStatus), /*#__PURE__*/_react.default.createElement(_styles.StatusBarContainer, {
    percentage: percentage
  }, /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    position: 0,
    bgColor: percentage >= 0 && theme.colors.primary
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.store
  })), /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    position: 33.33,
    bgColor: percentage >= 33.33 && theme.colors.primary
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.driver
  })), /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    position: 66.66,
    bgColor: percentage >= 66.66 && theme.colors.primary
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.home
  })), /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    position: 100,
    bgColor: percentage === 100 && theme.colors.primary
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.delivered
  }))), showReview && !reviewState.order && !(order !== null && order !== void 0 && order.review) && /*#__PURE__*/_react.default.createElement(_Simple.ReviewOrder, {
    order: order,
    hashKey: hashKey,
    defaultStar: 5,
    setIsReviewed: function setIsReviewed() {
      return setReviewState(_objectSpread(_objectSpread({}, reviewState), {}, {
        order: true
      }));
    }
  }), reviewState.order && !reviewState.driver && (order === null || order === void 0 ? void 0 : order.driver) && !(order !== null && order !== void 0 && order.user_review) && /*#__PURE__*/_react.default.createElement(_Simple2.ReviewDriver, {
    order: order,
    hashKey: hashKey,
    defaultStar: 5,
    setIsReviewed: function setIsReviewed() {
      return setReviewState(_objectSpread(_objectSpread({}, reviewState), {}, {
        driver: true
      }));
    }
  }), ((order === null || order === void 0 ? void 0 : order.review) || reviewState.order) && ((order === null || order === void 0 ? void 0 : order.driver) && ((order === null || order === void 0 ? void 0 : order.user_review) || reviewState.driver) || !(order !== null && order !== void 0 && order.driver)) && /*#__PURE__*/_react.default.createElement(_styles.ReviewedText, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_ALREADY_REVIEWED_MESSAGE', 'This order has already been attended to, thank you for your preference.'))), googleMapsUrl && /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Map, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: googleMapsUrl,
    id: "google-maps-image",
    alt: "google-maps-location",
    width: "100%",
    height: "100%",
    loading: "lazy"
  }))));
};