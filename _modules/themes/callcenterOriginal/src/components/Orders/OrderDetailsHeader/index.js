"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailsHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsHeader = exports.OrderDetailsHeader = function OrderDetailsHeader(props) {
  var _order$payment_events, _order$payment_events2, _order$paymethod, _order$paymethod2;
  var order = props.order,
    handleShowOption = props.handleShowOption,
    actionSidebar = props.actionSidebar,
    setIsTourOpen = props.setIsTourOpen,
    isTourOpen = props.isTourOpen,
    currentTourStep = props.currentTourStep,
    showOption = props.showOption,
    openMessage = props.openMessage,
    printRef = props.printRef,
    isServiceOrder = props.isServiceOrder,
    extraOpen = props.extraOpen,
    printTicketRef = props.printTicketRef,
    isExpand = props.isExpand,
    setIsExpand = props.setIsExpand;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPrinterOptions = _useState2[0],
    setShowPrinterOptions = _useState2[1];
  var dropdownReference = (0, _react.useRef)();
  var stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect'];
  var walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  };
  var closeSideBar = function closeSideBar() {
    actionSidebar(false);
    if (isTourOpen && currentTourStep === 1) setIsTourOpen(false);
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('orderDetails');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  var closeSelect = function closeSelect(e) {
    if (showPrinterOptions) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        setShowPrinterOptions(false);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!showPrinterOptions) {
      return;
    }
    document.addEventListener('click', closeSelect);
    return function () {
      return document.removeEventListener('click', closeSelect);
    };
  }, [showPrinterOptions]);
  return /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsHeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, isServiceOrder ? t('APPOINTMENT_NO', 'Appointment No.') : t('INVOICE_ORDER_NO', 'Order No'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.chat,
    onClick: function onClick() {
      return handleShowOption('chat');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.UreadMessageAlert, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null))), /*#__PURE__*/_react.default.createElement(_styles2.PrinterSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    isDisabled: isTourOpen && currentTourStep === 1,
    onClick: function onClick() {
      return setShowPrinterOptions(!showPrinterOptions);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Printer, null)), showPrinterOptions && /*#__PURE__*/_react.default.createElement(_styles2.PrinterSelect, {
    ref: dropdownReference
  }, /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
        color: "black",
        isDisabled: isTourOpen && currentTourStep === 1,
        onClick: function onClick() {
          return setShowPrinterOptions(false);
        }
      }, t('NORMAL', 'Normal'));
    },
    content: function content() {
      return printRef.current;
    },
    removeAfterPrint: true
  }), /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
        color: "black",
        isDisabled: isTourOpen && currentTourStep === 1,
        onClick: function onClick() {
          return setShowPrinterOptions(false);
        }
      }, t('TICKET', 'Ticket'));
    },
    content: function content() {
      return printTicketRef.current;
    },
    removeAfterPrint: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.history,
    onClick: function onClick() {
      return handleShowOption('history');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Diagram3, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: showOption === 'metafields',
    onClick: function onClick() {
      return handleShowOption('metafields');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null)), width > 576 && !extraOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSideBar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return closeSideBar();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), (order === null || order === void 0 ? void 0 : order.external_id) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXTERNAL_ID', 'External ID :'), " ", order === null || order === void 0 ? void 0 : order.external_id)), /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 || (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 ? order === null || order === void 0 || (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.filter(function (item) {
    return item.event === 'payment';
  }).map(function (event, i) {
    var _walletName$event$wal, _event$wallet_event, _event$paymethod, _event$paymethod2, _event$data, _event$paymethod3, _event$data2, _event$data3, _event$data4, _event$data5;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 || (_event$wallet_event = _event$wallet_event.wallet) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : t(event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 || (_event$paymethod = _event$paymethod.gateway) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.toUpperCase(), event === null || event === void 0 || (_event$paymethod2 = event.paymethod) === null || _event$paymethod2 === void 0 ? void 0 : _event$paymethod2.name)), stripePaymethods.includes((event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.gateway) || (event === null || event === void 0 || (_event$paymethod3 = event.paymethod) === null || _event$paymethod3 === void 0 ? void 0 : _event$paymethod3.gateway)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
      href: "https://dashboard.stripe.com/payments/".concat((event === null || event === void 0 || (_event$data2 = event.data) === null || _event$data2 === void 0 || (_event$data2 = _event$data2.result) === null || _event$data2 === void 0 ? void 0 : _event$data2.pay_data) || (event === null || event === void 0 || (_event$data3 = event.data) === null || _event$data3 === void 0 || (_event$data3 = _event$data3.extra) === null || _event$data3 === void 0 ? void 0 : _event$data3.pay_data)),
      target: "_blank"
    }, (event === null || event === void 0 || (_event$data4 = event.data) === null || _event$data4 === void 0 || (_event$data4 = _event$data4.result) === null || _event$data4 === void 0 ? void 0 : _event$data4.pay_data) || (event === null || event === void 0 || (_event$data5 = event.data) === null || _event$data5 === void 0 || (_event$data5 = _event$data5.extra) === null || _event$data5 === void 0 ? void 0 : _event$data5.pay_data)), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), stripePaymethods.includes(order === null || order === void 0 || (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.gateway) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
    href: "https://dashboard.stripe.com/payments/".concat(order === null || order === void 0 ? void 0 : order.pay_data),
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : order.pay_data), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), !isServiceOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement("span", null, t('EAT_IN', 'Eat in')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement("span", null, t('CURBSIDE', 'Curbside')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement("span", null, t('DRIVE_THRU', 'Drive thru')))));
};