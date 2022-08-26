"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderHistory = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Buttons = require("../../styles/Buttons");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderHistory = function OrderHistory(props) {
  var messages = props.messages,
      order = props.order,
      handleOpenReview = props.handleOpenReview,
      onClose = props.onClose,
      enableReview = props.enableReview;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var getLogisticTagStatus = function getLogisticTagStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');

      case 1:
        return t('IN_PROGRESS', 'In Progress');

      case 2:
        return t('IN_QUEUE', 'In Queue');

      case 3:
        return t('EXPIRED', 'Logistic expired');

      case 4:
        return t('RESOLVED', 'Resolved');

      default:
        return status;
    }
  };

  var handleReview = function handleReview() {
    onClose();
    setTimeout(function () {
      enableReview && handleOpenReview && handleOpenReview();
    }, 1);
  };

  var getStatus = function getStatus(s) {
    var status = parseInt(s);

    switch (status) {
      case 0:
        return 'ORDER_STATUS_PENDING';

      case 1:
        return 'ORDERS_COMPLETED';

      case 2:
        return 'ORDER_REJECTED';

      case 3:
        return 'ORDER_STATUS_IN_BUSINESS';

      case 4:
        return 'ORDER_READY';

      case 5:
        return 'ORDER_REJECTED_RESTAURANT';

      case 6:
        return 'ORDER_STATUS_CANCELLEDBYDRIVER';

      case 7:
        return 'ORDER_STATUS_ACCEPTEDBYRESTAURANT';

      case 8:
        return 'ORDER_CONFIRMED_ACCEPTED_BY_DRIVER';

      case 9:
        return 'ORDER_PICKUP_COMPLETED_BY_DRIVER';

      case 10:
        return 'ORDER_PICKUP_FAILED_BY_DRIVER';

      case 11:
        return 'ORDER_DELIVERY_COMPLETED_BY_DRIVER';

      case 12:
        return 'ORDER_DELIVERY_FAILED_BY_DRIVER';

      case 13:
        return 'PREORDER';

      case 14:
        return 'ORDER_NOT_READY';

      case 15:
        return 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER';

      case 16:
        return 'ORDER_STATUS_CANCELLED_BY_CUSTOMER';

      case 17:
        return 'ORDER_NOT_PICKEDUP_BY_CUSTOMER';

      case 18:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS';

      case 19:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER';

      case 20:
        return 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS';

      case 21:
        return 'ORDER_CUSTOMER_ARRIVED_BUSINESS';

      case 22:
        return 'ORDER_LOOKING_FOR_DRIVER';

      case 23:
        return 'ORDER_DRIVER_ON_WAY';

      default:
        return (0, _utils.getTraduction)(status);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.OrderHistoryContainer, null, !(messages !== null && messages !== void 0 && messages.loading) && order && /*#__PURE__*/_react.default.createElement(_styles.HistoryItemWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null), /*#__PURE__*/_react.default.createElement(_styles.DetailWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_PLACED', 'Order placed'), " ", ' ', t('VIA', 'Via'), ' ', order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')), /*#__PURE__*/_react.default.createElement("p", null, parseDate(order.created_at, {
    outputFormat: 'MMM DD, hh:mm A'
  })))), messages && (messages === null || messages === void 0 ? void 0 : messages.messages.map(function (message, i) {
    var _message$change, _message$change2, _message$driver, _message$driver2;

    return message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.HistoryItemWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null), /*#__PURE__*/_react.default.createElement(_styles.DetailWrapper, null, ((_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement("h3", null, ((_message$change2 = message.change) === null || _message$change2 === void 0 ? void 0 : _message$change2.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.new, 10)) : t(getStatus(parseInt(message.change.new, 10)))) : /*#__PURE__*/_react.default.createElement("h3", null, message.change.new ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname, " "), t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'Driver unassigned'))), /*#__PURE__*/_react.default.createElement("p", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, hh:mm A'
    }))));
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleReview,
    color: "primary"
  }, enableReview ? t('REVIEW_ORDER', 'Review order') : t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))));
};

exports.OrderHistory = OrderHistory;