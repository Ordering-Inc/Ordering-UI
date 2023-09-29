"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
var _Image = require("../../../../../components/Image");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _MdcCloseOctagonOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcCloseOctagonOutline"));
var _utils = require("../../../../../utils");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _MapMessages = require("./MapMessages");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var filterSpecialStatus = ['prepared_in', 'delivered_in', 'delivery_datetime'];
var MessagesUI = function MessagesUI(props) {
  var _messages$messages, _order$business, _theme$images, _order$business2, _order$driver, _order$driver2, _order$business3, _theme$images2, _order$driver3, _order$business4, _order$driver4, _order$business6, _theme$images3, _order$driver5, _messagesToShow$messa;
  var order = props.order,
    messages = props.messages,
    handleSend = props.handleSend,
    image = props.image,
    message = props.message,
    sendMessage = props.sendMessage,
    setImage = props.setImage,
    setMessage = props.setMessage,
    business = props.business,
    driver = props.driver,
    messagesToShow = props.messagesToShow,
    readMessages = props.readMessages,
    onClose = props.onClose,
    onMessages = props.onMessages,
    setCanRead = props.setCanRead,
    profileMessages = props.profileMessages;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    setValue = _useForm.setValue;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parseTime = _useUtils2$.parseTime;
  var buttonRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)({
      open: false,
      src: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    modalImage = _useState4[0],
    setModalImage = _useState4[1];
  var imageRef = (0, _react.useRef)(null);
  var previousStatus = [1, 2, 5, 6, 10, 11, 12, 16, 17];
  var chatDisabled = previousStatus.includes(order === null || order === void 0 ? void 0 : order.status);
  var quickMessageList = [{
    key: 'message_1',
    text: t('CUSTOMER_MESSAGE_1', 'Lorem ipsum 1')
  }, {
    key: 'message_2',
    text: t('CUSTOMER_MESSAGE_2', 'Lorem ipsum 2')
  }, {
    key: 'message_3',
    text: t('CUSTOMER_MESSAGE_3', 'Lorem ipsum 3')
  }, {
    key: 'message_4',
    text: t('CUSTOMER_MESSAGE_4', 'Lorem ipsum 4')
  }];
  var handleClickQuickMessage = function handleClickQuickMessage(index) {
    setValue('message', "".concat(message, " ").concat(index));
    setMessage("".concat(message, " ").concat(index));
  };
  var handleModalImage = function handleModalImage(src) {
    setModalImage({
      open: true,
      src: src
    });
  };
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
    if (!sendMessage.loading && sendMessage !== null && sendMessage !== void 0 && sendMessage.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR', 'Error')]
      });
    }
    if (sendMessage.loading) {
      clearInputs();
    }
  }, [sendMessage]);
  (0, _react.useEffect)(function () {
    if (business) setCanRead({
      business: true,
      administrator: true,
      customer: true,
      driver: false
    });else if (driver) setCanRead({
      business: false,
      administrator: true,
      customer: true,
      driver: true
    });
  }, [business, driver]);
  (0, _react.useEffect)(function () {
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
    readMessages && readMessages();
  }, [messages === null || messages === void 0 || (_messages$messages = messages.messages) === null || _messages$messages === void 0 ? void 0 : _messages$messages.length]);
  (0, _react.useEffect)(function () {
    setImage(null);
  }, [alertState.open]);
  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };
  var removeImage = function removeImage(e) {
    setImage(null);
    imageRef.current.value = '';
  };
  var onChangeImage = function onChangeImage(e) {
    var _files$;
    var files = e.target.files[0];
    var reader = new window.FileReader();
    reader.readAsDataURL(files);
    reader.onload = function () {
      setImage(reader.result);
    };
    var type = files.type.split('/')[0];
    if (type !== 'image') {
      setAlertState({
        open: true,
        content: t('ERROR_ONLY_IMAGES', 'Only images can be accepted')
      });
      return;
    }
    if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
      setAlertState({
        open: true,
        content: t('IMAGE_MESSAGES_MAXIMUM_SIZE', 'Images larger than 2 megabytes cannot be sent')
      });
      return;
    }
    buttonRef.current.focus();
    reader.onerror = function (error) {
      console.log(error);
      setAlertState({
        open: true,
        content: t('ERROR_READ_FILE', 'Failed to read file')
      });
    };
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
  var clearInputs = function clearInputs() {
    var input = document.getElementById('message');
    if (input) {
      input.value = '';
    }
    removeImage();
    setMessage('');
  };
  var onSubmit = function onSubmit(values) {
    handleSend();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var goToBusiness = function goToBusiness(slug) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        business_slug: slug
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, {
    profileMessages: profileMessages
  }, /*#__PURE__*/_react.default.createElement(_styles.MessagesLayoutWrapper, null, !profileMessages && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesClose, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MessagesLeftLayout, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MESSAGES', 'Messages'))), /*#__PURE__*/_react.default.createElement(_styles.CustomerList, null, order.business && /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, {
    active: business,
    onClick: function onClick() {
      return onMessages({
        business: true,
        driver: false
      });
    },
    isCursor: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: ((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("span", null, t('BUSINESS', 'Business')))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, {
    active: driver,
    onClick: function onClick() {
      return onMessages({
        business: false,
        driver: true
      });
    },
    isCursor: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.name), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER', 'Driver'))))))), /*#__PURE__*/_react.default.createElement(_styles.MessagesRightLayout, {
    profileMessages: profileMessages
  }, !profileMessages ? /*#__PURE__*/_react.default.createElement(_styles.HeaderProfile, null, /*#__PURE__*/_react.default.createElement(_styles.Image, null, business && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: ((_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), driver && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  })), business && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), /*#__PURE__*/_react.default.createElement("span", null, t('BUSINESS', 'Business'))), driver && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.name), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER', 'Driver')))) : /*#__PURE__*/_react.default.createElement(_styles.ProfileMessageHeader, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, null, /*#__PURE__*/_react.default.createElement("h2", null, t('INVOICE_ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessagesTypes, null, order.business && /*#__PURE__*/_react.default.createElement(_styles.MessageType, {
    active: business,
    onClick: function onClick() {
      return onMessages({
        business: true,
        driver: false
      });
    },
    isCursor: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    onClick: function onClick() {
      var _order$business5;
      return goToBusiness(order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.slug);
    }
  }, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: ((_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles.MessageType, {
    active: driver,
    onClick: function onClick() {
      return onMessages({
        business: false,
        driver: true
      });
    },
    isCursor: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)
  }))))), /*#__PURE__*/_react.default.createElement(_styles.Chat, {
    id: "chat",
    profileMessages: profileMessages
  }, (messages === null || messages === void 0 ? void 0 : messages.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBubbleBusiness, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  })))), !(messages !== null && messages !== void 0 && messages.loading) && order && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(order.created_at, {
    outputFormat: 'MMM DD, YYYY'
  }))), /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'Via'), ' ', /*#__PURE__*/_react.default.createElement("strong", null, order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')), ' ', /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(order.created_at)))), /*#__PURE__*/_react.default.createElement(_MapMessages.MapMessages, {
    messages: messagesToShow !== null && messagesToShow !== void 0 && (_messagesToShow$messa = messagesToShow.messages) !== null && _messagesToShow$messa !== void 0 && _messagesToShow$messa.length ? messagesToShow : messages,
    messagesToShow: messagesToShow,
    order: order,
    filterSpecialStatus: filterSpecialStatus,
    handleModalImage: handleModalImage,
    getLevel: getLevel,
    business: business,
    driver: driver,
    getLogisticTagStatus: getLogisticTagStatus,
    getStatus: getStatus
  }))), chatDisabled ? /*#__PURE__*/_react.default.createElement(_styles.NotSendMessage, null, /*#__PURE__*/_react.default.createElement(_MdcCloseOctagonOutline.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('NOT_SEND_MESSAGES', 'You can\'t send messages because the order has ended'))) : /*#__PURE__*/_react.default.createElement(_styles.SendForm, null, /*#__PURE__*/_react.default.createElement(_styles.QuickMessageWrapper, null, quickMessageList.map(function (quickMessage, i) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: i,
      color: "secundary",
      onClick: function onClick() {
        return handleClickQuickMessage(quickMessage.text);
      }
    }, quickMessage.text);
  })), /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('TYPE_YOUR_MESSAGE_HERE', 'Type your message here'),
    onChange: onChangeMessage,
    name: "message",
    id: "message",
    ref: register({
      required: !image
    }),
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.SendImage, {
    htmlFor: "chat_image",
    hidden: image
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "image",
    id: "chat_image",
    accept: "image/png,image/jpg,image/jpeg",
    onChange: onChangeImage,
    ref: imageRef
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: (sendMessage === null || sendMessage === void 0 ? void 0 : sendMessage.loading) || message === '' && !image || (messages === null || messages === void 0 ? void 0 : messages.loading),
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_IosSend.default, null), sendMessage.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('SENDING_MESSAGE', 'Sending...')) : /*#__PURE__*/_react.default.createElement("span", null, t('SEND', 'Send')))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    onClose: function onClose() {
      return setModalImage(_objectSpread(_objectSpread({}, modalImage), {}, {
        open: false
      }));
    },
    open: modalImage.open,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true,
    height: "auto"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return setModalImage(_objectSpread(_objectSpread({}, modalImage), {}, {
        open: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: modalImage.src,
    width: "320px",
    height: "180px",
    loading: "lazy"
  }))));
};
var Messages = exports.Messages = function Messages(props) {
  var MessagesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MessagesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Messages, MessagesProps);
};