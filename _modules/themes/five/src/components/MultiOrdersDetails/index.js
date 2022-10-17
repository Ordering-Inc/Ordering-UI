"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MultiOrdersDetailsUI = function MultiOrdersDetailsUI(props) {
  var customer = props.customer,
      paymentEvents = props.paymentEvents,
      ordersSummary = props.ordersSummary;
  var _props$ordersList = props.ordersList,
      loading = _props$ordersList.loading,
      orders = _props$ordersList.orders,
      error = _props$ordersList.error;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

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
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
    var _walletName$event$wal, _event$wallet_event, _event$wallet_event$w, _event$paymethod;

    return /*#__PURE__*/_react.default.createElement("p", {
      key: event.id
    }, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 ? void 0 : (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : (_event$wallet_event$w = _event$wallet_event.wallet) === null || _event$wallet_event$w === void 0 ? void 0 : _event$wallet_event$w.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.name);
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "address"
  }, t('DELIVERYA_V21', 'Delivery address')), /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.address))), loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 250,
    style: {
      marginBottom: '50px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.OrderSummary, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_SUMMARY', 'Order summary')), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, orders.map(function (order) {
    var _order$summary$total, _order$summary;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER', 'Order'), " #", order.id), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total)));
  }))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL_BEFORE_TAX', 'Total before tax'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.subtotal))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ESTIMATED_TAX_TO_BE_COLLECTED', 'Estimated tax to be collected'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.tax))))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('PAYMENT_TOTAL', 'Payment total'), ":"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(ordersSummary === null || ordersSummary === void 0 ? void 0 : ordersSummary.total)))))), loading ? _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleOrderContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 330
    }));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.map(function (order) {
    return /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      key: order.id,
      order: order
    });
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

var MultiOrdersDetails = function MultiOrdersDetails(props) {
  var MultiOrdersDetails = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MultiOrdersDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MultiOrdersDetails, MultiOrdersDetails);
};

exports.MultiOrdersDetails = MultiOrdersDetails;