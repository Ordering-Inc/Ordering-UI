"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesUI = exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AiOutlineInfoCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineInfoCircle"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactBootstrap = require("react-bootstrap");
var _styles = require("./styles");
var _Shared = require("../../Shared");
var _styles2 = require("../../../styles");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _Logistics = require("../Logistics");
var _OrderLogisticInformation = require("../OrderLogisticInformation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var filterSpecialStatus = ['prepared_in', 'delivered_in', 'delivery_datetime'];
var MessagesUI = function MessagesUI(props) {
  var _order$business, _order$customer, _order$driver, _theme$images, _theme$images$icons, _order$business6, _order$business7, _order$customer6, _order$customer7, _order$customer8, _order$driver6, _order$driver7, _order$driver8;
  var isChat = props.isChat,
    order = props.order,
    messages = props.messages,
    handleSend = props.handleSend,
    image = props.image,
    message = props.message,
    sendMessage = props.sendMessage,
    setImage = props.setImage,
    setMessage = props.setMessage,
    canRead = props.canRead,
    setCanRead = props.setCanRead,
    history = props.history,
    messageDashboardView = props.messageDashboardView,
    handleMessageOrderDetail = props.handleMessageOrderDetail,
    handleReadMessages = props.handleReadMessages,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    orderDetailClose = props.orderDetailClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    errors = _useForm.errors,
    control = _useForm.control;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    getTimeAgo = _useUtils2$.getTimeAgo,
    optimizeImage = _useUtils2$.optimizeImage;
  var buttonRef = (0, _react.useRef)(null);
  var messageInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      orderHistory: true,
      logistics: false,
      logistic_information: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    tabActive = _useState4[0],
    setTabActive = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    messageSearchValue = _useState6[0],
    setMessageSearchValue = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredMessages = _useState8[0],
    setFilteredMessages = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    load = _useState10[0],
    setLoad = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    messageList = _useState12[0],
    setMessageList = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isChatDisabled = _useState14[0],
    setIsChatDisabled = _useState14[1];
  var adminMessageList = [{
    key: 'message_1',
    text: t('ADMIN_MESSAGE_1', 'admin_message_1')
  }, {
    key: 'message_2',
    text: t('ADMIN_MESSAGE_2', 'admin_message_2')
  }, {
    key: 'message_3',
    text: t('ADMIN_MESSAGE_3', 'admin_message_3')
  }, {
    key: 'message_4',
    text: t('ADMIN_MESSAGE_4', 'admin_message_4')
  }];
  var storeMessageList = [{
    key: 'message_1',
    text: t('STORE_MESSAGE_1', 'store_message_1')
  }, {
    key: 'message_2',
    text: t('STORE_MESSAGE_2', 'store_message_2')
  }, {
    key: 'message_3',
    text: t('STORE_MESSAGE_3', 'store_message_3')
  }, {
    key: 'message_4',
    text: t('STORE_MESSAGE_4', 'store_message_4')
  }];
  var handleClickQuickMessage = function handleClickQuickMessage(msg) {
    var quickMsg = message ? "".concat(message, " ").concat(msg) : msg;
    setValue('message', quickMsg);
    setMessage(quickMsg);
  };
  (0, _react.useEffect)(function () {
    var msgElement = messageInputRef === null || messageInputRef === void 0 ? void 0 : messageInputRef.current;
    if (msgElement) {
      msgElement.focus();
      msgElement.selectionStart = msgElement.selectionEnd = msgElement.value.length;
      msgElement.scrollLeft = msgElement.scrollWidth;
    }
  }, [message]);
  (0, _react.useEffect)(function () {
    if (user.level === 0) setMessageList(adminMessageList);else if (user.level === 2) setMessageList(storeMessageList);else setMessageList([]);
  }, [user]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    setMessageSearchValue('');
  }, [order.id]);
  (0, _react.useEffect)(function () {
    if (!sendMessage.loading && sendMessage !== null && sendMessage !== void 0 && sendMessage.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR')]
      });
    }
    if (sendMessage.loading) {
      clearInputs();
    }
  }, [sendMessage]);
  (0, _react.useEffect)(function () {
    if (history) return;
    if (load < 3) {
      var chat = document.getElementById('chat');
      if (chat) {
        chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
      }
    }
  }, [load]);
  (0, _react.useEffect)(function () {
    if (history) return;
    var chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
    }
  }, [messages.messages.length, filteredMessages]);
  (0, _react.useEffect)(function () {
    if (history) return;
    setTimeout(function () {
      var chat = document.getElementById('chat');
      if (chat) {
        chat.scrollTop = chat === null || chat === void 0 ? void 0 : chat.scrollHeight;
      }
    }, 10);
  }, [isChat]);
  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };
  var removeImage = function removeImage(e) {
    setImage(null);
  };
  var onChangeImage = function onChangeImage(e) {
    var files = e.target.files[0];
    var reader = new window.FileReader();
    reader.readAsDataURL(files);
    reader.onload = function () {
      setImage(reader.result);
      buttonRef.current.focus();
    };
    reader.onerror = function (error) {
      console.log(error);
    };
  };
  var getStatus = function getStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('COMPLETED_BY_ADMIN', 'Completed by admin');
      case 2:
        return t('REJECTED_BY_ADMIN', 'Rejected by admin');
      case 3:
        return t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business');
      case 4:
        return t('PREPARATION_COMPLETED', 'Preparation Completed');
      case 5:
        return t('REJECTED_BY_BUSINESS', 'Rejected by business');
      case 6:
        return t('REJECTED_BY_DRIVER', 'Rejected by driver');
      case 7:
        return t('ACCEPTED_BY_BUSINESS', 'Accepted by Business');
      case 8:
        return t('ACCEPTED_BY_DRIVER', 'Accepted by Driver');
      case 9:
        return t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver');
      case 10:
        return t('PICK_UP_FAILED_BY_DRIVER', 'Pick up failed by driver');
      case 11:
        return t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver');
      case 12:
        return t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver');
      case 13:
        return t('PREORDER', 'Preorder');
      case 14:
        return t('ORDER_NOT_READY', 'Order not ready');
      case 15:
        return t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer');
      case 16:
        return t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer');
      case 17:
        return t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer');
      case 18:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business');
      case 19:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer');
      case 20:
        return t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business');
      case 21:
        return t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business');
      case 22:
        return t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver');
      case 23:
        return t('ORDER_DRIVER_ON_WAY', 'Driver on way');
      default:
        return status;
    }
  };
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
  var getLevel = function getLevel(level) {
    switch (level) {
      case 0:
        return t('ADMIN', 'Admin');
      case 1:
        return t('CITY_MANAGER', 'City Manager');
      case 2:
        return t('BUSINESS', 'Business');
      case 3:
        return t('CUSTOMER', 'Customer');
      case 4:
        return t('DRIVER', 'Driver');
      case 5:
        return t('DRIVER_MANAGER', 'Driver Manager');
    }
  };
  var getVehicleSmmary = function getVehicleSmmary(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.car_registration) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.color);
  };
  var clearInputs = function clearInputs() {
    var input = messageInputRef === null || messageInputRef === void 0 ? void 0 : messageInputRef.current;
    if (input) {
      input.value = '';
      setValue('message', '');
    }
    removeImage();
    setMessage('');
  };
  var onSubmit = function onSubmit(values) {
    handleSend();
    if (isTourOpen && setCurrentTourStep && orderDetailClose) {
      orderDetailClose();
      setCurrentTourStep(4);
    }
  };
  var handleChangeTour = function handleChangeTour(evt) {
    if (isTourOpen && !evt.target.closest('.message-footer')) {
      orderDetailClose();
      setCurrentTourStep(4);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var unreadMessageControl = function unreadMessageControl() {
    if (messages.loading || messages.messages.length === 0) return;
    if (messages.messages[messages.messages.length - 1].read) return;
    handleReadMessages(messages.messages[messages.messages.length - 1].id);
  };
  (0, _react.useEffect)(function () {
    if (!isChat) return;
    if (order !== null && order !== void 0 && order.driver) {
      setCanRead({
        administrator: true,
        business: true,
        customer: true,
        driver: true
      });
    } else {
      setCanRead({
        administrator: true,
        business: true,
        customer: true,
        driver: false
      });
    }
  }, [isChat, order]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;
    var _filteredMessages = messages.messages.filter(function (message) {
      if (message.type === 2) {
        return message.comment.toLocaleLowerCase().includes(messageSearchValue.toLocaleLowerCase());
      }
      return true;
    });
    setFilteredMessages(_filteredMessages);
  }, [messages, messageSearchValue]);
  (0, _react.useEffect)(function () {
    if ((user === null || user === void 0 ? void 0 : user.level) !== 2) {
      if (!(canRead !== null && canRead !== void 0 && canRead.business) && !(canRead !== null && canRead !== void 0 && canRead.customer) && !(canRead !== null && canRead !== void 0 && canRead.driver)) setIsChatDisabled(true);else setIsChatDisabled(false);
    } else {
      if (!(canRead !== null && canRead !== void 0 && canRead.customer) && !(canRead !== null && canRead !== void 0 && canRead.driver)) setIsChatDisabled(true);else setIsChatDisabled(false);
    }
  }, [canRead]);
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    onClick: handleChangeTour
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperHeader, {
    messageDashboardView: messageDashboardView,
    historyView: history
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, null, isChat && /*#__PURE__*/_react.default.createElement(_styles.ChatHeader, null, /*#__PURE__*/_react.default.createElement(_styles.OrderNumber, null, t('INVOICE_ORDER_NO', 'Order No'), " ", order.id), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo, 'h_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
  }), /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  }))), history && /*#__PURE__*/_react.default.createElement(_styles.WrapperHitoryHeader, null, /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.orderHistory,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: true,
        logistics: false,
        logistic_information: false
      });
    }
  }, t('MOBILE_ORDER_HISTORY', 'Order History')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.logistics,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: false,
        logistics: true,
        logistic_information: false
      });
    }
  }, t('LOGISTICS', 'Logistics')), /*#__PURE__*/_react.default.createElement(_styles.TabItem, {
    active: tabActive.logistic_information,
    onClick: function onClick() {
      return setTabActive({
        orderHistory: false,
        logistics: false,
        logistic_information: true
      });
    }
  }, t('LOGISTIC_INFORMATION', 'Logistics information')))), messageDashboardView && /*#__PURE__*/_react.default.createElement(_styles.SearchAndDetailControlContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesSearch, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.search,
    alt: "search"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "search",
    placeholder: "Search",
    value: messageSearchValue,
    onChange: function onChange(e) {
      return setMessageSearchValue(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDetailIconButton, {
    onClick: function onClick() {
      return handleMessageOrderDetail(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineInfoCircle.default, null))))), /*#__PURE__*/_react.default.createElement(_styles.Chat, {
    id: "chat"
  }, messages.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !history ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 100
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 100
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 50
    }));
  }))), !messages.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !tabActive.logistic_information && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'via'), " ", /*#__PURE__*/_react.default.createElement("strong", null, order.app_id), ' ', /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "top",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(order.created_at))
  }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(order.created_at))))), history && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tabActive.logistics && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogistics, null, /*#__PURE__*/_react.default.createElement(_Logistics.Logistics, {
    orderId: order.id
  })), tabActive.logistic_information && /*#__PURE__*/_react.default.createElement(_styles.WrapperLogisticInformation, null, /*#__PURE__*/_react.default.createElement(_OrderLogisticInformation.OrderLogisticInformation, {
    orderId: order.id
  }))), filteredMessages.length > 0 && filteredMessages.map(function (message) {
    var _message$change, _message$change2, _message$change3, _message$change4, _message$change5, _message$author, _message$author2, _message$author$name, _message$author3, _message$author$lastn, _message$author4, _message$driver, _message$driver2, _message$change6, _message$change7, _message$change8, _message$change9, _message$change10, _message$change11, _message$change12, _message$change13, _message$change14, _message$author5, _message$author6, _message$author$name2, _message$author7, _message$author$lastn2, _message$author8, _message$driver3, _message$driver4, _order$business2, _order$customer2, _order$driver2, _order$business3, _order$customer3, _order$driver3, _order$business4, _order$customer4, _order$driver4, _order$business5, _order$customer5, _order$driver5;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: message.id
    }, history && tabActive.orderHistory && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id,
      style: {
        display: "".concat(tabActive.orderHistory ? 'inline-flex' : 'none')
      }
    }, ((_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute)), " ", ' ', t('CHANGED_FROM', 'Changed from'), " ", ' ', message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, ((_message$change2 = message.change) === null || _message$change2 === void 0 ? void 0 : _message$change2.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.old, 10)) : getStatus(parseInt(message.change.old, 10))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('TO', 'to'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : ((_message$change3 = message.change) === null || _message$change3 === void 0 ? void 0 : _message$change3.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.new, 10)) : getStatus(parseInt(message.change.new, 10))), message !== null && message !== void 0 && (_message$change4 = message.change) !== null && _message$change4 !== void 0 && _message$change4.comment ? "\n'".concat(message === null || message === void 0 ? void 0 : (_message$change5 = message.change) === null || _message$change5 === void 0 ? void 0 : _message$change5.comment, "'") : '', ((message === null || message === void 0 ? void 0 : (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.name) || (message === null || message === void 0 ? void 0 : (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.lastname)) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Author: "), ((_message$author$name = message === null || message === void 0 ? void 0 : (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.name) !== null && _message$author$name !== void 0 ? _message$author$name : '') + ' ' + ((_message$author$lastn = message === null || message === void 0 ? void 0 : (_message$author4 = message.author) === null || _message$author4 === void 0 ? void 0 : _message$author4.lastname) !== null && _message$author$lastn !== void 0 ? _message$author$lastn : ''))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.new !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname), t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'The driver was unnasigned'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))))), isChat && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 1 && ((_message$change6 = message.change) === null || _message$change6 === void 0 ? void 0 : _message$change6.attribute) !== 'comment' && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
      key: message.id
    }, ((_message$change7 = message.change) === null || _message$change7 === void 0 ? void 0 : _message$change7.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute)), " ", ' ', t('CHANGED_FROM', 'Changed from'), " ", ' ', filterSpecialStatus.includes(message.change.attribute) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old === null ? /*#__PURE__*/_react.default.createElement("strong", null, "0") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, message.change.old), " ", ' '), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        whiteSpace: 'pre'
      }
    }, t('TO', 'to'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.new), " ", ' ', t('MINUTES', 'Minutes'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, ((_message$change8 = message.change) === null || _message$change8 === void 0 ? void 0 : _message$change8.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.old, 10)) : ((_message$change9 = message.change) === null || _message$change9 === void 0 ? void 0 : _message$change9.attribute) === 'vehicle' ? getVehicleSmmary(message.change.old) : getStatus(parseInt(message.change.old, 10))), ' '), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        whiteSpace: 'pre'
      }
    }, t('TO', 'to'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : ((_message$change10 = message.change) === null || _message$change10 === void 0 ? void 0 : _message$change10.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.new, 10)) : ((_message$change11 = message.change) === null || _message$change11 === void 0 ? void 0 : _message$change11.attribute) === 'vehicle' ? getVehicleSmmary(message.change.new) : getStatus(parseInt(message.change.new, 10))), /*#__PURE__*/_react.default.createElement("strong", null, message !== null && message !== void 0 && (_message$change12 = message.change) !== null && _message$change12 !== void 0 && _message$change12.comment ? "\n".concat(t('COMMENT', 'Comment:')) : ''), message !== null && message !== void 0 && (_message$change13 = message.change) !== null && _message$change13 !== void 0 && _message$change13.comment ? " ".concat(message === null || message === void 0 ? void 0 : (_message$change14 = message.change) === null || _message$change14 === void 0 ? void 0 : _message$change14.comment) : '', ((message === null || message === void 0 ? void 0 : (_message$author5 = message.author) === null || _message$author5 === void 0 ? void 0 : _message$author5.name) || (message === null || message === void 0 ? void 0 : (_message$author6 = message.author) === null || _message$author6 === void 0 ? void 0 : _message$author6.lastname)) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Author: "), ((_message$author$name2 = message === null || message === void 0 ? void 0 : (_message$author7 = message.author) === null || _message$author7 === void 0 ? void 0 : _message$author7.name) !== null && _message$author$name2 !== void 0 ? _message$author$name2 : '') + ' ' + ((_message$author$lastn2 = message === null || message === void 0 ? void 0 : (_message$author8 = message.author) === null || _message$author8 === void 0 ? void 0 : _message$author8.lastname) !== null && _message$author$lastn2 !== void 0 ? _message$author$lastn2 : '')))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.new !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver3 = message.driver) === null || _message$driver3 === void 0 ? void 0 : _message$driver3.name, " ", ' ', " ", ((_message$driver4 = message.driver) === null || _message$driver4 === void 0 ? void 0 : _message$driver4.lastname) && message.driver.lastname), t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'The driver was unnasigned'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))), message.type === 2 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), message.comment, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 2 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), message.comment, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, {
      isReceived: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true,
      isReceived: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    }))))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.MessageSender, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")"), /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onLoad: function onLoad() {
        return setLoad(load + 1);
      },
      alt: "chat-image"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(message.created_at))
    }, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), /*#__PURE__*/_react.default.createElement(_styles.SendToContainer, {
      isReceived: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO', 'Send to'), ":"), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      isCircle: true,
      isReceived: true
    }, message.can_see.includes(2) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo,
      fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
    }), message.can_see.includes(3) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
    }), message.can_see.includes(4) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_Shared.Image, {
      src: (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo,
      fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
    })))))));
  }))), !history && /*#__PURE__*/_react.default.createElement(_styles.SendForm, {
    className: "message-footer"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.business),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        business: !(canRead !== null && canRead !== void 0 && canRead.business)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo, 'h_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.name), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS', 'Business')))), /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.customer),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        customer: !(canRead !== null && canRead !== void 0 && canRead.customer)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.name, " ", (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER', 'Customer')))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles.ChatContactInfoContainer, {
    disabled: !(canRead !== null && canRead !== void 0 && canRead.driver),
    onClick: function onClick() {
      return setCanRead(_objectSpread(_objectSpread({}, canRead), {}, {
        driver: !(canRead !== null && canRead !== void 0 && canRead.driver)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.Image, {
    src: optimizeImage((_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo, 'w_40,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))))), messageList.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.QuickMessageWrapper, null, messageList.map(function (quickMessage, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Button, {
      key: i,
      color: "secundaryDark",
      onClick: function onClick() {
        return handleClickQuickMessage(quickMessage.text);
      }
    }, quickMessage.text);
  })), /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSendInput, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "message",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles2.Input, {
        placeholder: t('WRITE_A_MESSAGE', 'Write a message...'),
        value: value,
        onChange: function onChange(e) {
          _onChange(e.target.value);
          onChangeMessage(e);
        },
        onFocus: unreadMessageControl,
        name: "message",
        ref: messageInputRef,
        autoComplete: "off",
        readOnly: isChatDisabled
      });
    },
    rules: {
      required: !image
    },
    defaultValue: ""
  }), !image && /*#__PURE__*/_react.default.createElement(_styles.SendImage, {
    htmlFor: "chat_image"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "image",
    id: "chat_image",
    accept: "image/png,image/jpg,image/jpeg",
    onChange: onChangeImage,
    disabled: isChatDisabled
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: sendMessage.loading || message === '' && !image || messages.loading,
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_IosSend.default, null), sendMessage.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('SENDING_MESSAGE', 'Sending...')) : /*#__PURE__*/_react.default.createElement("span", null, t('SEND', 'send')))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR', 'error'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  })));
};
exports.MessagesUI = MessagesUI;
var Messages = function Messages(props) {
  var MessagesProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: MessagesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MessagesDasboard, MessagesProps);
};
exports.Messages = Messages;