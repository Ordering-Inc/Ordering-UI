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
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
var _Image = require("../../../../../components/Image");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));
var _utils = require("../../../../../utils");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var filterSpecialStatus = ['prepared_in', 'delivered_in'];
var MessagesUI = function MessagesUI(props) {
  var _messages$messages, _order$business, _theme$images, _order$driver, _order$business2, _order$driver2, _messagesToShow$messa2, _theme$images2;
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
    onClose = props.onClose;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
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
  var _useState3 = (0, _react.useState)({
      open: false,
      src: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    modalImage = _useState4[0],
    setModalImage = _useState4[1];
  var imageRef = (0, _react.useRef)(null);
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
  var MapMessages = function MapMessages(_ref) {
    var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
    var messages = _ref.messages;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, BeforeElement);
    }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
      return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
        key: i
      }, props));
    }), messages === null || messages === void 0 ? void 0 : messages.messages.map(function (message) {
      var _message$change, _message$driver, _message$driver2, _messagesToShow$messa, _message$can_see, _message$can_see2;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: message.id
      }, message.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, {
        key: message.id
      }, ((_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute.toUpperCase(), message.change.attribute.replace('_', ' '))), " ", t('CHANGED_FROM', 'Changed from'), " ", ' ', filterSpecialStatus.includes(message.change.attribute) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old === null ? /*#__PURE__*/_react.default.createElement("strong", null, "0") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, message.change.old), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", t('TO', 'to'), " ", ' ', " ", /*#__PURE__*/_react.default.createElement("strong", null, message.change.new), " ", t('MINUTES', 'Minutes'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, t(getStatus(parseInt(message.change.old, 10)))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", t('TO', 'to'), " ", ' ', " ", /*#__PURE__*/_react.default.createElement("strong", null, t(getStatus(parseInt(message.change.new, 10)))), " ")), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, message.change.new ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname, " "), t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'Driver unassigned')), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), ((messagesToShow === null || messagesToShow === void 0 || (_messagesToShow$messa = messagesToShow.messages) === null || _messagesToShow$messa === void 0 ? void 0 : _messagesToShow$messa.length) || (message === null || message === void 0 || (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes('2')) && business || (message === null || message === void 0 || (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes('4')) && driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, {
        white: true
      }, getTimeAgo(message.created_at)))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
        name: "image"
      }, /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
        src: optimizeImage(message.source, 'h_300,c_limit'),
        onClick: function onClick() {
          return handleModalImage(message.source);
        },
        alt: "chat-image",
        width: "168px",
        height: "300px"
      })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, {
        white: true
      }, getTimeAgo(message.created_at)))), message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at)))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
        name: "image"
      }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
        src: optimizeImage(message.source, 'h_300,c_limit'),
        onClick: function onClick() {
          return handleModalImage(message.source);
        },
        alt: "chat-image",
        width: "168px",
        height: "300px"
      })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(message.created_at))))));
    }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
      return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
        key: i
      }, props));
    }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, AfterElement);
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.ModalIconHeader, null, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, {
    size: 20,
    onClick: onClose,
    color: theme.colors.arrowColor
  }), business && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_300,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, {
      className: "fallback"
    })
  }), driver && /*#__PURE__*/_react.default.createElement(_Image.Image, {
    src: optimizeImage((_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.photo, 'h_300,c_limit'),
    fallback: /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, {
      className: "fallback"
    })
  }), business && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online'))), driver && /*#__PURE__*/_react.default.createElement(_styles.HeaderOnline, null, /*#__PURE__*/_react.default.createElement("h1", null, (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.name), /*#__PURE__*/_react.default.createElement("span", null, t('ONLINE', 'Online')))), /*#__PURE__*/_react.default.createElement(_styles.MessagesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Chat, {
    id: "chat"
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
  })))), !(messages !== null && messages !== void 0 && messages.loading) && order && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER_PLACED_FOR', 'Order placed for'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, parseDate(order.created_at)), " ", ' ', t('VIA', 'Via'), ' ', /*#__PURE__*/_react.default.createElement("strong", null, order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other')), ' ', /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(order.created_at)))), /*#__PURE__*/_react.default.createElement(MapMessages, {
    messages: messagesToShow !== null && messagesToShow !== void 0 && (_messagesToShow$messa2 = messagesToShow.messages) !== null && _messagesToShow$messa2 !== void 0 && _messagesToShow$messa2.length ? messagesToShow : messages
  }))), /*#__PURE__*/_react.default.createElement(_styles.SendForm, null, /*#__PURE__*/_react.default.createElement(_styles.Send, {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('TYPE_YOUR_MESSAGE_HERE', 'Type your message here'),
    onChange: onChangeMessage,
    name: "message",
    id: "message",
    ref: register({
      required: !image
    }),
    style: {
      borderColor: '#F8F9FA',
      background: '#F8F9FA',
      fontSize: '12px',
      color: theme.colors.darkTextColor
    },
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
  }), /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), image && /*#__PURE__*/_react.default.createElement(_styles.WrapperDeleteImage, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    circle: true,
    onClick: removeImage,
    type: "reset"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperSendMessageButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: (sendMessage === null || sendMessage === void 0 ? void 0 : sendMessage.loading) || message === '' && !image || (messages === null || messages === void 0 ? void 0 : messages.loading),
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.arrowSend
  }))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  })))));
};
var Messages = exports.Messages = function Messages(props) {
  var MessagesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MessagesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Messages, MessagesProps);
};