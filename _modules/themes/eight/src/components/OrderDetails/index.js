"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _FiPhone = _interopRequireDefault(require("@meronex/icons/fi/FiPhone"));

var _RiChat3Line = _interopRequireDefault(require("@meronex/icons/ri/RiChat3Line"));

var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));

var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));

var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Modal = require("../../../../../components/Modal");

var _Messages = require("../../../../../components/Messages");

var _ReviewOrder = require("../../../../../components/ReviewOrder");

var _ProductShare = require("../../../../../components/ProductShare");

var _styles = require("../../styles");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag25, _theme$defaultLanguag26, _getOrderStatus, _getOrderStatus2, _order$business3, _order$business4, _order$business5, _order$business6, _theme$defaultLanguag27, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _configs$guest_uuid_a, _theme$defaultLanguag28, _theme$defaultLanguag29, _theme$defaultLanguag30, _theme$defaultLanguag31, _order$driver3, _order$driver4, _theme$defaultLanguag32, _order$driver5, _order$driver6, _configs$google_maps_, _order$driver7, _theme$defaultLanguag33, _theme$defaultLanguag34, _theme$defaultLanguag35, _theme$defaultLanguag36, _order$products, _theme$defaultLanguag37, _order$summary, _order$summary2, _order$summary3, _order$summary4, _theme$defaultLanguag38, _theme$defaultLanguag39, _order$summary5, _order$summary6, _order$summary7, _order$summary8, _order$summary9, _order$summary10, _order$summary11, _theme$defaultLanguag40, _order$summary12, _order$summary13, _theme$defaultLanguag41, _order$summary14, _order$summary15, _theme$defaultLanguag42, _order$summary16, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary17, _theme$defaultLanguag43, _order$summary18, _theme$defaultLanguag44, _order$summary19, _theme$defaultLanguag45, _theme$defaultLanguag46, _theme$defaultLanguag47, _theme$defaultLanguag48, _props$afterComponent, _props$afterElements;

  var userCustomerId = props.userCustomerId,
      handleBusinessRedirect = props.handleBusinessRedirect,
      handleOrderRedirect = props.handleOrderRedirect,
      googleMapsControls = props.googleMapsControls,
      driverLocation = props.driverLocation,
      urlToShare = props.urlToShare,
      messages = props.messages,
      setMessages = props.setMessages,
      readMessages = props.readMessages,
      messagesReadList = props.messagesReadList,
      isCustomerMode = props.isCustomerMode;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber,
      parseDate = _useUtils2$.parseDate;

  var _useState = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openMessages = _useState2[0],
      setOpenMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openReview = _useState4[0],
      setOpenReview = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReviewed = _useState6[0],
      setIsReviewed = _useState6[1];

  var _useState7 = (0, _react.useState)({
    business: false,
    driver: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      unreadAlert = _useState8[0],
      setUnreadAlert = _useState8[1];

  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      businessData = _props$order.businessData,
      error = _props$order.error;

  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;

    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending'),
      slug: 'PENDING',
      percentage: 25
    }, {
      key: 1,
      value: t('COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder'),
      slug: 'PREORDER',
      percentage: 0
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready'),
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 55
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 90
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 95
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();

    if ((order === null || order === void 0 ? void 0 : order.unread_count) > 0) {
      data.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  };

  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;

      return message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;

      return message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };

  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleBar, null, t('BACK_BUTTON_CONFIRMATION', 'Confirmation')), order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapLeftInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderData, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag25 = theme.defaultLanguages) === null || _theme$defaultLanguag25 === void 0 ? void 0 : _theme$defaultLanguag25.ORDER) || 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), (order === null || order === void 0 ? void 0 : order.status) !== 0 && (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && !order.review && !isReviewed && /*#__PURE__*/_react.default.createElement(_styles2.ReviewsAction, {
    onClick: function onClick() {
      return setOpenReview(true);
    }
  }, t('REVIEW_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag26 = theme.defaultLanguages) === null || _theme$defaultLanguag26 === void 0 ? void 0 : _theme$defaultLanguag26.REVIEW_ORDER) || 'Review your Order')), /*#__PURE__*/_react.default.createElement(_styles2.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatus, null, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('FROM', 'From')), /*#__PURE__*/_react.default.createElement(_styles2.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.email), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.cellphone), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.address))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsBlock, null, (order === null || order === void 0 ? void 0 : order.driver) && (order === null || order === void 0 ? void 0 : order.driver.phone) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    onClick: function onClick() {
      return handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: false,
        business: true
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles2.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_RiChat3Line.default, null)))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('MENU_LIST_TO', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag27 = theme.defaultLanguages) === null || _theme$defaultLanguag27 === void 0 ? void 0 : _theme$defaultLanguag27.MENU_LIST_TO) || 'To')), /*#__PURE__*/_react.default.createElement(_styles2.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.lastname), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.address), (order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.cellphone) && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.cellphone))), parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value, 10) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles2.ShareOrder, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('SHARE_THIS_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag28 = theme.defaultLanguages) === null || _theme$defaultLanguag28 === void 0 ? void 0 : _theme$defaultLanguag28.SHARE_THIS_DELIVERY) || 'Share this delivery')), /*#__PURE__*/_react.default.createElement("p", null, t('LET_SOMEONE_FOLLOW_ALONG', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag29 = theme.defaultLanguages) === null || _theme$defaultLanguag29 === void 0 ? void 0 : _theme$defaultLanguag29.LET_SOMEONE_FOLLOW_ALONG) || 'Let someone follow along'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    withBtn: true,
    btnText: t('SHARE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag30 = theme.defaultLanguages) === null || _theme$defaultLanguag30 === void 0 ? void 0 : _theme$defaultLanguag30.SHARE) || 'Share'),
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key)
  }))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles2.WrapDriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('YOUR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag31 = theme.defaultLanguages) === null || _theme$defaultLanguag31 === void 0 ? void 0 : _theme$defaultLanguag31.YOUR_DRIVER) || 'Your Driver')), /*#__PURE__*/_react.default.createElement(_styles2.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperDriver, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag32 = theme.defaultLanguages) === null || _theme$defaultLanguag32 === void 0 ? void 0 : _theme$defaultLanguag32.DRIVER) || 'Driver')))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsBlock, null, order.driver && ((_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.phone) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: true,
        business: false
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && (unreadAlert === null || unreadAlert === void 0 ? void 0 : unreadAlert.driver) && /*#__PURE__*/_react.default.createElement(_styles2.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_RiChat3Line.default, null)))), (order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles2.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.location,
    locations: locations,
    mapControls: googleMapsControls
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.WrapRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapRightInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, null), t('GO_TO_BUSINESSLIST', 'Go to business list')), /*#__PURE__*/_react.default.createElement(_styles2.HeaderText, {
    column: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_MESSAGE_RECEIVED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag33 = theme.defaultLanguages) === null || _theme$defaultLanguag33 === void 0 ? void 0 : _theme$defaultLanguag33.ORDER_MESSAGE_RECEIVED) || 'Your order has been received')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_MESSAGE_HEADER_TEXT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag34 = theme.defaultLanguages) === null || _theme$defaultLanguag34 === void 0 ? void 0 : _theme$defaultLanguag34.ORDER_MESSAGE_HEADER_TEXT) || 'Once business accepts your order, we will send you an email, thank you!'))), !userCustomerId && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, t('MY_ORDERS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag35 = theme.defaultLanguages) === null || _theme$defaultLanguag35 === void 0 ? void 0 : _theme$defaultLanguag35.MY_ORDERS) || 'My Orders'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('YOUR_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag36 = theme.defaultLanguages) === null || _theme$defaultLanguag36 === void 0 ? void 0 : _theme$defaultLanguag36.YOUR_ORDER) || 'Your Order')), /*#__PURE__*/_react.default.createElement(_styles2.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles2.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag37 = theme.defaultLanguages) === null || _theme$defaultLanguag37 === void 0 ? void 0 : _theme$defaultLanguag37.SUBTOTAL) || 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, order.tax_type === 1 ? parsePrice(((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.subtotal) || (order === null || order === void 0 ? void 0 : order.subtotal)) + ((order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.tax) || (order === null || order === void 0 ? void 0 : order.tax)) || 0) : parsePrice((order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.subtotal) || (order === null || order === void 0 ? void 0 : order.subtotal) || 0))), ((order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) > 0 || (order === null || order === void 0 ? void 0 : order.discount) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag38 = theme.defaultLanguages) === null || _theme$defaultLanguag38 === void 0 ? void 0 : _theme$defaultLanguag38.DISCOUNT) || 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag39 = theme.defaultLanguages) === null || _theme$defaultLanguag39 === void 0 ? void 0 : _theme$defaultLanguag39.DISCOUNT) || 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.discount) || (order === null || order === void 0 ? void 0 : order.discount)))), (order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.subtotal_with_discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) + ((order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.tax) || (order === null || order === void 0 ? void 0 : order.tax)) || 0))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.subtotal_with_discount) || 0)))), (order === null || order === void 0 ? void 0 : order.tax_type) !== 1 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag40 = theme.defaultLanguages) === null || _theme$defaultLanguag40 === void 0 ? void 0 : _theme$defaultLanguag40.TAX) || 'Tax'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.tax) || (order === null || order === void 0 ? void 0 : order.totalTax)))), ((order === null || order === void 0 ? void 0 : (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.delivery_price) > 0 || (order === null || order === void 0 ? void 0 : order.deliveryFee) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag41 = theme.defaultLanguages) === null || _theme$defaultLanguag41 === void 0 ? void 0 : _theme$defaultLanguag41.DELIVERY_FEE) || 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.delivery_price) || (order === null || order === void 0 ? void 0 : order.deliveryFee)))), ((order === null || order === void 0 ? void 0 : (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag42 = theme.defaultLanguages) === null || _theme$defaultLanguag42 === void 0 ? void 0 : _theme$defaultLanguag42.DRIVER_TIP) || 'Driver tip'), ' ', ((order === null || order === void 0 ? void 0 : (_order$summary16 = order.summary) === null || _order$summary16 === void 0 ? void 0 : _order$summary16.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary17 = order.summary) === null || _order$summary17 === void 0 ? void 0 : _order$summary17.driver_tip) || (order === null || order === void 0 ? void 0 : order.totalDriverTip)))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag43 = theme.defaultLanguages) === null || _theme$defaultLanguag43 === void 0 ? void 0 : _theme$defaultLanguag43.SERVICE_FEE) || 'Service Fee'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary18 = order.summary) === null || _order$summary18 === void 0 ? void 0 : _order$summary18.service_fee) || (order === null || order === void 0 ? void 0 : order.serviceFee) || 0))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag44 = theme.defaultLanguages) === null || _theme$defaultLanguag44 === void 0 ? void 0 : _theme$defaultLanguag44.TOTAL) || 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary19 = order.summary) === null || _order$summary19 === void 0 ? void 0 : _order$summary19.total) || (order === null || order === void 0 ? void 0 : order.total)))))))))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapLeftInnerContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      marginBottom: 30
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.WrapRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapRightInnerContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 500
  })))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag45 = theme.defaultLanguages) === null || _theme$defaultLanguag45 === void 0 ? void 0 : _theme$defaultLanguag45.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag46 = theme.defaultLanguages) === null || _theme$defaultLanguag46 === void 0 ? void 0 : _theme$defaultLanguag46.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openMessages.driver || openMessages.business,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    },
    padding: "0",
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages
  })), openReview && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openReview,
    onClose: function onClose() {
      return setOpenReview(false);
    },
    title: order ? "".concat(t('WRITE_A_REVIEW', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag47 = theme.defaultLanguages) === null || _theme$defaultLanguag47 === void 0 ? void 0 : _theme$defaultLanguag47.WRITE_A_REVIEW) || 'Write a Review'), " #").concat(order === null || order === void 0 ? void 0 : order.id) : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag48 = theme.defaultLanguages) === null || _theme$defaultLanguag48 === void 0 ? void 0 : _theme$defaultLanguag48.LOADING) || 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: function closeReviewOrder() {
      return setOpenReview(false);
    },
    setIsReviewed: setIsReviewed
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var OrderDetails = function OrderDetails(props) {
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));

  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetails, orderDetailsProps);
};

exports.OrderDetails = OrderDetails;