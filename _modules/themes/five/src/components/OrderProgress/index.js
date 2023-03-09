"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderProgressUI = function OrderProgressUI(props) {
  var _theme$header, _theme$header$compone, _theme$header$compone2, _theme$header$compone3, _orderList$orders, _lastOrder$business, _theme$images, _theme$images$dummies, _getOrderStatus, _getOrderStatus2;
  var orderList = props.orderList,
    isCustomerMode = props.isCustomerMode;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseTime = _useUtils2$.parseTime;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    lastOrder = _useState2[0],
    setLastOrder = _useState2[1];
  var statusToShow = [0, 3, 4, 7, 8, 9, 14, 18, 19, 20, 21];
  var isChew = (theme === null || theme === void 0 ? void 0 : (_theme$header = theme.header) === null || _theme$header === void 0 ? void 0 : (_theme$header$compone = _theme$header.components) === null || _theme$header$compone === void 0 ? void 0 : (_theme$header$compone2 = _theme$header$compone.layout) === null || _theme$header$compone2 === void 0 ? void 0 : (_theme$header$compone3 = _theme$header$compone2.type) === null || _theme$header$compone3 === void 0 ? void 0 : _theme$header$compone3.toLowerCase()) === 'chew';
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
      var sortedOrders = orderList.orders.sort(function (a, b) {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderList === null || orderList === void 0 ? void 0 : orderList.loading) && /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, {
    isChew: props.isChew
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })), !(orderList !== null && orderList !== void 0 && orderList.loading) && (orderList === null || orderList === void 0 ? void 0 : (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.length) > 0 && lastOrder && /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, {
    isChew: props.isChew
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderProgressContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressLogo, {
    bgimage: (orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) === 1 ? optimizeImage((lastOrder === null || lastOrder === void 0 ? void 0 : (_lastOrder$business = lastOrder.business) === null || _lastOrder$business === void 0 ? void 0 : _lastOrder$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_91,c_limit') : isChew ? theme.images.logos.chewLogoReverse : theme.images.logos.logotype
  }), /*#__PURE__*/_react.default.createElement(_styles.ProgressDescriptionWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, statusToShow.includes(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status) ? t('ORDER_IN_PROGRESS', 'Order in progress') : t('ORDER', 'Order')), statusToShow.includes(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status) && /*#__PURE__*/_react.default.createElement("p", null, t('RESTAURANT_PREPARING_YOUR_ORDER', 'The restaurant is preparing your order')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryContrast",
    naked: true,
    onClick: function onClick() {
      return handleGoToPage(isCustomerMode ? 'order_detail' : 'orders');
    }
  }, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('GO_TO_THE_ORDER', 'Go to the order')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('GO_TO_MY_ORDERS', 'Go to my orders')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.ProgressBarWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressBar, {
    style: {
      width: (_getOrderStatus = (0, _utils.getOrderStatus)(lastOrder.status)) !== null && _getOrderStatus !== void 0 && _getOrderStatus.percentage ? "".concat((0, _utils.getOrderStatus)(lastOrder.status).percentage, "%") : '0%'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ProgressTextWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.StatusWrapper, null, (_getOrderStatus2 = (0, _utils.getOrderStatus)(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value), /*#__PURE__*/_react.default.createElement(_styles.TimeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, (lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_type) === 1 ? t('ESTIMATED_DELIVERY', 'Estimated delivery') : t('ESTIMATED_TIME', 'Estimated time'), ":\xA0"), /*#__PURE__*/_react.default.createElement("span", null, lastOrder !== null && lastOrder !== void 0 && lastOrder.delivery_datetime_utc ? parseTime(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_datetime_utc, {
    outputFormat: 'hh:mm A'
  }) : parseTime(lastOrder === null || lastOrder === void 0 ? void 0 : lastOrder.delivery_datetime, {
    utc: false
  }), "\xA0-\xA0", /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: lastOrder,
    outputFormat: "hh:mm A"
  }))))))));
};
var OrderProgress = function OrderProgress(props) {
  var orderProgressProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderProgressUI,
    orderStatus: [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderProgressProps);
};
exports.OrderProgress = OrderProgress;