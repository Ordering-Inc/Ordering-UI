"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiOrdersDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Image = require("../../../../../components/Image");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _Confirm = require("../Confirm");
var _SingleOrderCard = require("./SingleOrderCard");
var _styles = require("./styles");
var _NotFoundSource = require("../NotFoundSource");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var MultiOrdersDetailsUI = function MultiOrdersDetailsUI(props) {
  var _configs$multi_busine, _getOrderStatus, _orders$, _getOrderStatus2, _orders$2, _theme$defaultLanguag, _theme$defaultLanguag2;
  var customer = props.customer,
    paymentEvents = props.paymentEvents,
    ordersSummary = props.ordersSummary,
    handleOrderRedirect = props.handleOrderRedirect;
  var _props$ordersList = props.ordersList,
    loading = _props$ordersList.loading,
    orders = _props$ordersList.orders,
    error = _props$ordersList.error;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var progressBarStyle = (_configs$multi_busine = configs.multi_business_checkout_progress_bar_style) === null || _configs$multi_busine === void 0 ? void 0 : _configs$multi_busine.value;
  var showBarInOrder = ['group', 'both'];
  var showBarInIndividual = ['individual', 'both'];
  var isTaxIncludedOnPrice = orders.every(function (_order) {
    var _order$taxes, _order$taxes2;
    return (_order$taxes = _order.taxes) !== null && _order$taxes !== void 0 && _order$taxes.length ? (_order$taxes2 = _order.taxes) === null || _order$taxes2 === void 0 ? void 0 : _order$taxes2.every(function (_tax) {
      return _tax.type === 1;
    }) : true;
  });
  var walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  };
  (0, _react.useEffect)(function () {
    if (error) {
      setAlertState({
        open: true,
        content: error
      });
    }
  }, [error]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, ((orders === null || orders === void 0 ? void 0 : orders.length) > 0 || loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 36,
    width: 250,
    style: {
      marginBottom: '6px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 21
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, t('HEY', 'Hey')), /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, customer === null || customer === void 0 ? void 0 : customer.name, " ", customer === null || customer === void 0 ? void 0 : customer.lastname)), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_MESSAGE_HEADER_TEXT', 'Once business accepts your order, we will send you an email, thank you!')))), loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 220,
    style: {
      margin: '50px 0'
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.CustomerInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerDetails, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CUSTOMER_DETAILS', 'Customer details')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: customer === null || customer === void 0 ? void 0 : customer.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  })), /*#__PURE__*/_react.default.createElement(_styles.CustomerData, null, /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.name, " ", customer === null || customer === void 0 ? void 0 : customer.lastname), /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.email), /*#__PURE__*/_react.default.createElement("p", null, (customer === null || customer === void 0 ? void 0 : customer.cellphone) || (customer === null || customer === void 0 ? void 0 : customer.phone))))), /*#__PURE__*/_react.default.createElement(_styles.PaymentDetails, null, /*#__PURE__*/_react.default.createElement("h3", null, t('PAYMETHOD', 'Payment method')), paymentEvents.map(function (event) {
    var _walletName$event$wal, _event$wallet_event, _event$paymethod;
    return /*#__PURE__*/_react.default.createElement("p", {
      key: event.id
    }, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 || (_event$wallet_event = _event$wallet_event.wallet) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.name);
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "address"
  }, t('DELIVERYA_V21', 'Delivery address')), /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.address))), loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 250,
    style: {
      marginBottom: '50px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.OrderSummary, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_SUMMARY', 'Order summary')), showBarInOrder.includes(progressBarStyle) && /*#__PURE__*/_react.default.createElement(_styles.StatusBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = (0, _utils.getOrderStatus)((_orders$ = orders[0]) === null || _orders$ === void 0 ? void 0 : _orders$.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, (_getOrderStatus2 = (0, _utils.getOrderStatus)((_orders$2 = orders[0]) === null || _orders$2 === void 0 ? void 0 : _orders$2.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value)), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, orders.map(function (order) {
    var _order$summary$total, _order$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER', 'Order'), " #", order.id), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total)));
  }))), !isTaxIncludedOnPrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL_BEFORE_TAX', 'Total before tax'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.subtotal))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ESTIMATED_TAX_TO_BE_COLLECTED', 'Estimated tax to be collected'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.tax)))))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('PAYMENT_TOTAL', 'Payment total'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.total))))))), loading ? _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleOrderContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 330
    }));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.map(function (order) {
    return /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      key: order.id,
      isMultiOrders: true,
      getOrderStatus: _utils.getOrderStatus,
      order: order,
      showProgressBar: showBarInIndividual.includes(progressBarStyle)
    });
  })), !loading && (error || (orders === null || orders === void 0 ? void 0 : orders.length) === 0) && (error !== null && error !== void 0 && error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var MultiOrdersDetails = exports.MultiOrdersDetails = function MultiOrdersDetails(props) {
  var MultiOrdersDetails = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MultiOrdersDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MultiOrdersDetails, MultiOrdersDetails);
};