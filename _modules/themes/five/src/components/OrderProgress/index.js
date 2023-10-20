"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderProgress = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../styles/Buttons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _OrderEta = require("../OrderDetails/OrderEta");
var _styles = require("./styles");
var _utils = require("../../../../../utils");
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
var OrderProgressUI = function OrderProgressUI(props) {
  var _theme$header, _orderList$orders, _lastOrder$business, _theme$images, _progressBarObjt, _progressBarObjt2, _configs$general_hour, _configs$general_hour2, _lastOrder$reporting_, _configs$general_hour3;
  var orderList = props.orderList,
    isCustomerMode = props.isCustomerMode;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseTime = _useUtils2$.parseTime,
    parseDate = _useUtils2$.parseDate;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    lastOrder = _useState2[0],
    setLastOrder = _useState2[1];
  var statusToShow = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23];
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var handleGoToPage = function handleGoToPage(index) {
    events.emit('go_to_page', {
      page: index,
      params: {
        orderId: lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.uuid
      }
    });
  };
  (0, _react.useEffect)(function () {
    if ((orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) > 0) {
      var sortedOrders = orderList.orders.filter(function (order) {
        return !!(order !== null && order !== void 0 && order.business);
      }).sort(function (a, b) {
        return a.id > b.id ? -1 : 1;
      });
      var orderInProgress = sortedOrders.find(function (_ref) {
        var status = _ref.status;
        return statusToShow.includes(status);
      });
      var _lastOrder = null;
      if (orderInProgress) {
        _lastOrder = orderInProgress;
      } else {
        _lastOrder = sortedOrders[0];
      }
      setLastOrder(_lastOrder);
    }
  }, [orderList === null || orderList === void 0 ? void 0 : orderList.orders]);
  var progressBarObjt = lastOrder !== null && lastOrder !== void 0 && lastOrder.delivery_type && (lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_type) === 2 ? _utils.getOrderStatuPickUp : _utils.getOrderStatus;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderList === null || orderList === void 0 ? void 0 : orderList.loading) && /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, {
    isChew: props.isChew
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })), !(orderList !== null && orderList !== void 0 && orderList.loading) && (orderList === null || orderList === void 0 || (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.length) > 0 && lastOrder && /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, {
    isChew: props.isChew
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderProgressContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressLogo, {
    bgimage: (orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) === 1 ? optimizeImage((lastOrder === null || lastOrder === void 0 || (_lastOrder$business = lastOrder.business) === null || _lastOrder$business === void 0 ? void 0 : _lastOrder$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_91,c_limit') : isChew ? theme.images.logos.chewLogoReverse : theme.images.logos.logotype
  }), /*#__PURE__*/_react.default.createElement(_styles.ProgressDescriptionWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, statusToShow.includes(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status) ? t('ORDER_IN_PROGRESS', 'Order in progress') : t('ORDER', 'Order')), statusToShow.includes(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status) && /*#__PURE__*/_react.default.createElement("p", null, t('RESTAURANT_PREPARING_YOUR_ORDER', 'The restaurant is preparing your order')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryContrast",
    naked: true,
    onClick: function onClick() {
      return handleGoToPage(isCustomerMode ? 'order_detail' : 'orders');
    }
  }, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('GO_TO_THE_ORDER', 'Go to the order')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('GO_TO_MY_ORDERS', 'Go to my orders')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.ProgressBarWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressBar, {
    style: {
      width: (_progressBarObjt = progressBarObjt(lastOrder.status)) !== null && _progressBarObjt !== void 0 && _progressBarObjt.percentage ? "".concat(progressBarObjt(lastOrder.status).percentage, "%") : '0%'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ProgressTextWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.StatusWrapper, null, (_progressBarObjt2 = progressBarObjt(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status)) === null || _progressBarObjt2 === void 0 ? void 0 : _progressBarObjt2.value), /*#__PURE__*/_react.default.createElement(_styles.TimeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, (lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_type) === 1 ? t('ESTIMATED_DELIVERY', 'Estimated delivery') : t('ESTIMATED_TIME', 'Estimated time'), ":\xA0"), /*#__PURE__*/_react.default.createElement("span", null, lastOrder !== null && lastOrder !== void 0 && lastOrder.delivery_datetime_utc ? parseTime(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_datetime_utc, {
    outputFormat: (configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value) || 'HH:mm'
  }) : parseTime(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_datetime, {
    utc: false
  }), "\xA0-\xA0", statusToShow.includes(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status) ? /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: lastOrder,
    outputFormat: (configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value) || 'HH:mm'
  }) : parseDate(lastOrder === null || lastOrder === void 0 || (_lastOrder$reporting_ = lastOrder.reporting_data) === null || _lastOrder$reporting_ === void 0 ? void 0 : _lastOrder$reporting_.at["status:".concat(lastOrder.status)], {
    outputFormat: configs === null || configs === void 0 || (_configs$general_hour3 = configs.general_hour_format) === null || _configs$general_hour3 === void 0 ? void 0 : _configs$general_hour3.value
  }))))))));
};
var OrderProgress = exports.OrderProgress = function OrderProgress(props) {
  var propsToFetchBusiness = ['name', 'logo', 'slug', 'id'];
  var propsToFetch = ['cart', 'business', 'status', 'id', 'uuid', 'cart_group_id', 'business_id', 'delivery_datetime', 'delivery_datetime_utc', 'total', 'summary', 'eta_current_status_time', 'eta_previous_status_times', 'eta_time', 'delivered_in', 'prepared_in', 'eta_drive_time'];
  var orderProgressProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderProgressUI,
    orderStatus: [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    noGiftCardOrders: true,
    propsToFetchBusiness: propsToFetchBusiness,
    propsToFetch: propsToFetch,
    paginationSettings: {
      initialPage: 1,
      pageSize: props.isCustomerMode ? 1 : 10,
      controlType: 'infinity'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderProgressProps);
};