"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _Messages = require("../Messages");
var _OrderMetaFields = require("../OrderMetaFields");
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
var _OrderDetailsHeader = require("../OrderDetailsHeader");
var _OrderBill = require("../OrderBill");
var _OrderContactInformation = require("../OrderContactInformation");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _OrderToPrint = require("../OrderToPrint");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$place, _getOrderStatus, _order$products;
  var isSelectedOrders = props.isSelectedOrders,
    open = props.open,
    handleBackRedirect = props.handleBackRedirect,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    isTourOpen = props.isTourOpen,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount,
    messages = props.messages,
    setCurrentTourStep = props.setCurrentTourStep,
    currentTourStep = props.currentTourStep,
    isTourFlag = props.isTourFlag,
    setIsTourFlag = props.setIsTourFlag,
    setIsTourOpen = props.setIsTourOpen,
    actionStatus = props.actionStatus,
    handleRefundOrder = props.handleRefundOrder,
    isServiceOrder = props.isServiceOrder;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      chat: false,
      history: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openMessages = _useState2[0],
    setOpenMessages = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    showOption = _useState4[0],
    setShowOption = _useState4[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var printRef = (0, _react.useRef)();
  var _useState5 = (0, _react.useState)({
      business: false,
      driver: false,
      customer: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    unreadAlert = _useState6[0],
    setUnreadAlert = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isMenuOpen = _useState8[0],
    setIsMenuOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    extraOpen = _useState10[0],
    setExtraOpen = _useState10[1];
  var placeSpotEnabled = [3, 4];
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading;
  var rejectResonStatuses = [6, 9, 10, 11, 12, 14];
  var getOrderStatus = function getOrderStatus(status) {
    var orderStatus = [{
      key: 0,
      value: 'Pending Order',
      slug: 'PENDING_ORDER',
      percentage: 25
    }, {
      key: 1,
      value: 'Completed by admin',
      slug: 'COMPLETED_BY_ADMIN',
      percentage: 100
    }, {
      key: 2,
      value: 'Reject by admin',
      slug: 'REJECT_BY_ADMIN',
      percentage: 0
    }, {
      key: 3,
      value: 'Driver arrived by business',
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: 'Preparation Completed',
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: 'Reject by business',
      slug: 'REJECT_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: 'Reject by driver',
      slug: 'REJECT_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: 'Accepted by business',
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: 'Accepted by driver',
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: 'Pick up completed by driver',
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: 'Pick up Failed by driver',
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: 'Delivery completed by driver',
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: 'Delivery Failed by driver',
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: 'Preorder',
      slug: 'PREORDER',
      percentage: 25
    }, {
      key: 14,
      value: 'Order not ready',
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: 'Pickup completed by customer',
      slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: 'Canceled by customer',
      slug: 'CANCELED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: 'Not picked by customer',
      slug: 'NOT_PICKED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: 'Driver almost arrived to business',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 19,
      value: 'Driver almost arrived to customer',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: 'Customer almost arrived to business',
      slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 21,
      value: 'Customer arrived to business',
      slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
      percentage: 60
    }, {
      key: 22,
      value: 'Looking for driver',
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: 'Driver on way',
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In progress');
      case 2:
        return t('IN_QUEUE', 'In queue');
      case 3:
        return t('EXPIRED', 'Expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');
      case 0:
        return t('NORMAL', 'Normal');
      case 1:
        return t('HIGH', 'High');
      case 2:
        return t('URGENT', 'Urgent');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var unreadMessages = function unreadMessages() {
    var unreadedMessages = messages === null || messages === void 0 ? void 0 : messages.messages.filter(function (message) {
      var _message$can_see;
      return !(message !== null && message !== void 0 && message.read) && (message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(0)) && (message === null || message === void 0 ? void 0 : message.author_id) !== user.id;
    });
    var customer = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author;
      return (message === null || message === void 0 ? void 0 : (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.level) === 3;
    });
    var business = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author2;
      return (message === null || message === void 0 ? void 0 : (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.level) === 2;
    });
    var driver = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author3;
      return (message === null || message === void 0 ? void 0 : (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.level) === 4;
    });
    setUnreadAlert({
      business: business,
      driver: driver,
      customer: customer
    });
  };
  var handleOpenMessages = function handleOpenMessages(openMessage) {
    if (openMessage === 'chat') {
      setOpenMessages({
        chat: true,
        history: false
      });
      setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        customer: false
      }));
    }
    if (openMessage === 'history') {
      setOpenMessages({
        chat: false,
        history: true
      });
    }
    setShowOption(null);
    setExtraOpen(true);
  };
  var handleCloseMessages = function handleCloseMessages() {
    setOpenMessages({
      chat: false,
      history: false
    });
  };
  var handleShowOption = function handleShowOption(option) {
    handleCloseMessages();
    setExtraOpen(true);
    setShowOption(option);
  };
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderDetails').style.width = '100vw';
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('orderDetails').style.width = '1000px';
        } else {
          document.getElementById('orderDetails').style.width = '500px';
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (extraOpen) {
      document.getElementById('orderDetails').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraOpen]);
  var handleChangeTour = function handleChangeTour(evt) {
    if (!isTourOpen) return;
    if (isTourOpen && (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && currentTourStep !== 2) {
      setCurrentTourStep(2);
      return;
    }
    if (evt.target.closest('.driver-select')) return;
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 1);
    }
  };
  var handleChangeKeyboard = function handleChangeKeyboard(evt) {
    if (evt.keyCode === 37 && currentTourStep === 2) setCurrentTourStep(1);
    if (evt.keyCode === 39 && currentTourStep === 1 && (order === null || order === void 0 ? void 0 : order.delivery_type) === 1) setCurrentTourStep(2);
    if (evt.keyCode === 39 && currentTourStep === 1 && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) {
      handleOpenMessages('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 1);
    }
    if (evt.keyCode === 37 && currentTourStep === 3) {
      handleCloseMessages();
      setExtraOpen(false);
      (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 ? setCurrentTourStep(2) : setCurrentTourStep(1);
      setIsTourFlag(false);
    }
    if (evt.keyCode === 39 && currentTourStep === 2) {
      handleOpenMessages('chat');
      setCurrentTourStep(3);
    }
    if (evt.keyCode === 39 && currentTourStep === 3) {
      setExtraOpen(false);
      props.onClose();
      setCurrentTourStep(4);
    }
  };
  (0, _react.useEffect)(function () {
    if (!isTourOpen) return;
    document.addEventListener('keydown', handleChangeKeyboard);
    return function () {
      return document.removeEventListener('keydown', handleChangeKeyboard);
    };
  }, [isTourOpen, currentTourStep]);
  (0, _react.useEffect)(function () {
    if (!isTourFlag) return;
    handleOpenMessages('chat');
    setTimeout(function () {
      setCurrentTourStep(3);
    }, 1);
  }, [isTourFlag]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose();
      setIsTourOpen && setIsTourOpen(false);
    }
  };
  var handleCloseMoreDetails = function handleCloseMoreDetails() {
    setExtraOpen(false);
    setOpenMessages({
      chat: false,
      history: false
    });
    setShowOption(null);
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isSelectedOrders: isSelectedOrders,
    id: "orderDetails",
    isSkeleton: loading,
    noAnimation: isTourOpen
  }, loading && /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '10px'
    }
  })), order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsContent, {
    "data-tour": "tour_detail",
    noScroll: isTourOpen && currentTourStep === 2,
    onClick: function onClick(e) {
      return handleChangeTour(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetailsHeader.OrderDetailsHeader, {
    isServiceOrder: isServiceOrder,
    order: order,
    extraOpen: extraOpen,
    actionSidebar: actionSidebar,
    showOption: showOption,
    openMessage: openMessages,
    handleShowOption: handleShowOption,
    handleOpenMessages: handleOpenMessages,
    isTourOpen: isTourOpen,
    currentTourStep: currentTourStep,
    setIsTourOpen: setIsTourOpen,
    printRef: printRef
  }), (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement(_styles2.TicketContainer, null, /*#__PURE__*/_react.default.createElement("h5", null, t('TICKET', 'Ticket'), ":"), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.integration_id)), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatus, {
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_STATUS_TEXT', 'Order status')), /*#__PURE__*/_react.default.createElement("p", null, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    isFirstSelect: true,
    noPadding: true,
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    defaultValue: parseInt(order.status),
    handleUpdateOrderStatus: handleUpdateOrderStatus
  }))), (order === null || order === void 0 ? void 0 : order.place) && placeSpotEnabled.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement(_styles2.PlaceSpotContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPOT', 'Spot'), ": ", order === null || order === void 0 ? void 0 : (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name)), /*#__PURE__*/_react.default.createElement(_styles2.StatusBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), /*#__PURE__*/_react.default.createElement(_styles2.AdvancedLogistic, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), rejectResonStatuses.includes(order === null || order === void 0 ? void 0 : order.status) && (order === null || order === void 0 ? void 0 : order.reject_reason) && /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonsContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('REJECT_REASONS', 'Reject reasons')), /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonsList, null, /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonWrapper, null, t("REJECT_REASON_".concat(order === null || order === void 0 ? void 0 : order.reject_reason.toUpperCase()), order === null || order === void 0 ? void 0 : order.reject_reason.replace(/_/g, ' '))))), /*#__PURE__*/_react.default.createElement("div", {
    "data-tour": "tour_driver"
  }, /*#__PURE__*/_react.default.createElement(_OrderContactInformation.OrderContactInformation, {
    isServiceOrder: isServiceOrder,
    order: order,
    extraOpen: extraOpen,
    unreadAlert: unreadAlert,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrderProducts, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPORT_SUMMARY', 'Summary')), (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      currency: order === null || order === void 0 ? void 0 : order.currency
    });
  }))), /*#__PURE__*/_react.default.createElement(_OrderBill.OrderBill, {
    order: order,
    actionStatus: actionStatus,
    handleRefundOrder: handleRefundOrder
  }))), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleCloseMoreDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), (openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, {
    "data-tour": "tour_message"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    isChat: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    onClose: function onClose() {
      return handleCloseMessages();
    },
    messages: messages,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    orderDetailClose: function orderDetailClose() {
      return props.onClose();
    }
  })), (openMessages === null || openMessages === void 0 ? void 0 : openMessages.history) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    messages: messages
  })), showOption === 'metafields' && /*#__PURE__*/_react.default.createElement(_OrderMetaFields.OrderMetaFields, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    onClose: function onClose() {
      return handleCloseMessages();
    }
  }, (openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, {
    "data-tour": "tour_message"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    isChat: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    onClose: function onClose() {
      return handleCloseMessages();
    },
    messages: messages,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    orderDetailClose: function orderDetailClose() {
      return props.onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "70vh",
    open: openMessages.history,
    onClose: function onClose() {
      return handleCloseMessages();
    }
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    messages: messages
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "70vh",
    open: !!showOption,
    onClose: function onClose() {
      return setShowOption(null);
    }
  }, showOption === 'metafields' && /*#__PURE__*/_react.default.createElement(_OrderMetaFields.OrderMetaFields, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  })))), !loading && !order && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('PROFILE_ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleBackRedirect
  }), order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_OrderToPrint.OrderToPrint, {
    ref: printRef,
    order: order,
    placeSpotEnabled: placeSpotEnabled,
    getOrderStatus: getOrderStatus,
    getLogisticTag: getLogisticTag,
    getPriorityTag: getPriorityTag
  }));
};
var OrderDetails = function OrderDetails(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    isDisableLoadMessages: true,
    UIComponent: OrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetailsDashboard, orderDetailsProps);
};
exports.OrderDetails = OrderDetails;