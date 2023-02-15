"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailsHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsHeader = function OrderDetailsHeader(props) {
  var _order$payment_events, _order$payment_events2, _order$paymethod, _order$paymethod2;
  var order = props.order,
    handleShowOption = props.handleShowOption,
    handleOpenMessages = props.handleOpenMessages,
    actionSidebar = props.actionSidebar,
    setIsTourOpen = props.setIsTourOpen,
    isTourOpen = props.isTourOpen,
    currentTourStep = props.currentTourStep,
    showOption = props.showOption,
    openMessage = props.openMessage,
    printRef = props.printRef,
    isServiceOrder = props.isServiceOrder;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
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
  return /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsHeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, isServiceOrder ? t('APPOINTMENT_NO', 'Appointment No.') : t('INVOICE_ORDER_NO', 'Order No'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.chat,
    onClick: function onClick() {
      return handleOpenMessages('chat');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.UreadMessageAlert, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null))), /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
        color: "black",
        isDisabled: isTourOpen && currentTourStep === 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Printer, null));
    },
    content: function content() {
      return printRef.current;
    },
    removeAfterPrint: true
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.history,
    onClick: function onClick() {
      return handleOpenMessages('history');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Diagram3, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: showOption === 'metafields',
    onClick: function onClick() {
      return handleShowOption('metafields');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return closeSideBar();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 ? order === null || order === void 0 ? void 0 : (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.map(function (event, i) {
    var _walletName$event$wal, _event$wallet_event, _event$wallet_event$w, _event$paymethod, _event$data, _event$data2, _event$data2$result, _event$data3, _event$data3$result;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 ? void 0 : (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : (_event$wallet_event$w = _event$wallet_event.wallet) === null || _event$wallet_event$w === void 0 ? void 0 : _event$wallet_event$w.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.name), stripePaymethods.includes(event === null || event === void 0 ? void 0 : (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.gateway) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
      href: "https://dashboard.stripe.com/payments/".concat(event === null || event === void 0 ? void 0 : (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : (_event$data2$result = _event$data2.result) === null || _event$data2$result === void 0 ? void 0 : _event$data2$result.pay_data),
      target: "_blank"
    }, event === null || event === void 0 ? void 0 : (_event$data3 = event.data) === null || _event$data3 === void 0 ? void 0 : (_event$data3$result = _event$data3.result) === null || _event$data3$result === void 0 ? void 0 : _event$data3$result.pay_data), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), stripePaymethods.includes(order === null || order === void 0 ? void 0 : (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.gateway) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
    href: "https://dashboard.stripe.com/payments/".concat(order === null || order === void 0 ? void 0 : order.pay_data),
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : order.pay_data), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), !isServiceOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement("span", null, t('EAT_IN', 'Eat in')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement("span", null, t('CURBSIDE', 'Curbside')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement("span", null, t('DRIVE_THRU', 'Drive thru')))));
};
exports.OrderDetailsHeader = OrderDetailsHeader;