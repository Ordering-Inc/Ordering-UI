"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewestOrderList = exports.MessagesListing = exports.MessageControler = exports.IdOrderList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Buttons = require("../../styles/Buttons");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _utils = require("../../../../../utils");
var _Messages = require("../Messages");
var _NotFoundSource = require("../NotFoundSource");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var OrdersListingUI = function OrdersListingUI(props) {
  var _orderList$orders;
  var orderList = props.orderList,
    selectedOrderCard = props.selectedOrderCard,
    handleOrderCardClick = props.handleOrderCardClick,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation,
    pagination = props.pagination,
    loadMoreOrders = props.loadMoreOrders,
    small = props.small,
    setOrderListStatus = props.setOrderListStatus;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var handleOrderClick = function handleOrderClick(e, order) {
    var isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector');
    if (isInvalid) return;
    handleOrderCardClick(order);
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  (0, _react.useEffect)(function () {
    if (orderList.loading || !selectedOrderCard) return;
    var updatedOrder = orderList === null || orderList === void 0 ? void 0 : orderList.orders.find(function (order) {
      return order.id === (selectedOrderCard === null || selectedOrderCard === void 0 ? void 0 : selectedOrderCard.id);
    });
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder);
    }
  }, [orderList === null || orderList === void 0 ? void 0 : orderList.orders]);
  (0, _react.useEffect)(function () {
    if (orderList.loading || selectedOrderCard) return;
    if ((orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) > 0) {
      handleOrderCardClick(orderList.orders[0]);
    }
  }, [orderList, selectedOrderCard]);
  (0, _react.useEffect)(function () {
    setOrderListStatus(orderList);
  }, [orderList]);
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersListContainer, {
    className: "testmark"
  }, orderList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderHeader, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    }), /*#__PURE__*/_react.default.createElement(_styles.ViewDetails, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.map(function (order) {
    var _getOrderStatus, _order$business, _theme$images, _theme$images$dummies, _order$business2, _order$business3, _order$business3$city, _order$driver, _order$driver2;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderCard, {
      key: order.id,
      active: (selectedOrderCard === null || selectedOrderCard === void 0 ? void 0 : selectedOrderCard.id) === order.id,
      onClick: function onClick(e) {
        return handleOrderClick(e, order);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('INVOICE_ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, (_getOrderStatus = (0, _utils.getOrderStatus)(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement(_styles.ViewDetails, {
      className: "view-details",
      onClick: function onClick() {
        return handleOpenOrderDetail(order);
      }
    }, t('VIEW_DETAILS', 'View details')))), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.UnreadMessageCounter, null, order === null || order === void 0 ? void 0 : order.unread_count), /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : (_order$business3$city = _order$business3.city) === null || _order$business3$city === void 0 ? void 0 : _order$business3$city.name))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && order.driver && order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order !== null && order !== void 0 && order.driver ? /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
      small: small
    }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
      small: small
    }, order === null || order === void 0 ? void 0 : order.driver.name, " ", order === null || order === void 0 ? void 0 : order.driver.lastname), /*#__PURE__*/_react.default.createElement(_styles.DriverText, {
      small: small
    }, t('DRIVER', 'Driver')))) : /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
      small: small
    }, t('NO_DRIVER', 'No Driver'))))));
  }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.LoadMoreButtonWrap, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "load-orders",
    bgtransparent: true,
    color: "primary",
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders')))), !(orderList !== null && orderList !== void 0 && orderList.loading) && (orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotFoundSourceWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NO_RESULTS_FOUND', 'Sorry, no results found'),
    btnTitle: t('GO_HOME', 'Go to home'),
    onClickButton: function onClickButton() {
      return handleGoToPage({
        page: 'home'
      });
    }
  })));
};
var IdOrderList = function IdOrderList(props) {
  var orderListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersListingUI,
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderListProps);
};
exports.IdOrderList = IdOrderList;
var NewestOrderList = function NewestOrderList(props) {
  var orderListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersListingUI,
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    useDefualtSessionManager: true,
    profileMessages: true,
    orderBy: 'last_direct_message_at',
    orderDirection: 'asc'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderListProps);
};
exports.NewestOrderList = NewestOrderList;
var OrderDetailsUI = function OrderDetailsUI(props) {
  var messages = props.messages,
    setMessages = props.setMessages,
    readMessages = props.readMessages;
  var _useState = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openMessages = _useState2[0],
    setOpenMessages = _useState2[1];
  var order = props.order.order;
  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();
  };
  var handleChangeOpenMessages = function handleChangeOpenMessages(data) {
    handleOpenMessages(data);
  };
  (0, _react.useEffect)(function () {
    handleOpenMessages({
      driver: false,
      business: true
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages,
    onMessages: setOpenMessages,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    },
    profileMessages: true,
    handleChangeOpenMessages: handleChangeOpenMessages
  });
};
var MessageControler = function MessageControler(props) {
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
exports.MessageControler = MessageControler;
var MessagesListing = function MessagesListing(props) {
  var _theme$images2, _theme$images2$genera;
  var onRedirectPage = props.onRedirectPage;
  var _useState3 = (0, _react.useState)('last_direct_message_at'),
    _useState4 = _slicedToArray(_useState3, 2),
    orderByOption = _useState4[0],
    setOrderByOption = _useState4[1];
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOrder = _useState6[0],
    setSelectedOrder = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState7 = (0, _react.useState)({
      error: null,
      loading: true,
      orders: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    orderListStatus = _useState8[0],
    setOrderListStatus = _useState8[1];
  var imageFails = (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.emptyPastOrders;
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    onRedirectPage({
      page: 'order_detail',
      params: {
        orderId: order === null || order === void 0 ? void 0 : order.uuid
      }
    });
  };
  var handleOrderCardClick = function handleOrderCardClick(order) {
    setSelectedOrder(_objectSpread({}, order));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderListItems, null, /*#__PURE__*/_react.default.createElement(_styles.ListHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('ORDER', 'Order')), /*#__PURE__*/_react.default.createElement(_styles.OrdersOrderByOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerTabsContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: orderByOption === 'last_direct_message_at' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setOrderByOption('last_direct_message_at');
    }
  }, t('NEWEST', 'Newest')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: orderByOption === 'id' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setOrderByOption('id');
    }
  }, t('ORDER_NUMBER', 'Order number'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderListContainer, null, orderByOption === 'id' && /*#__PURE__*/_react.default.createElement(IdOrderList, _extends({}, props, {
    handleOrderCardClick: handleOrderCardClick,
    selectedOrderCard: selectedOrder,
    handleOpenOrderDetail: handleOpenOrderDetail,
    setOrderListStatus: setOrderListStatus
  })), orderByOption === 'last_direct_message_at' && /*#__PURE__*/_react.default.createElement(NewestOrderList, _extends({}, props, {
    handleOrderCardClick: handleOrderCardClick,
    selectedOrderCard: selectedOrder,
    handleOpenOrderDetail: handleOpenOrderDetail,
    setOrderListStatus: setOrderListStatus
  })))), /*#__PURE__*/_react.default.createElement(_styles.MessageContainer, null, selectedOrder && /*#__PURE__*/_react.default.createElement(MessageControler, {
    order: selectedOrder,
    orderListStatus: orderListStatus
  }), !selectedOrder && !(orderListStatus !== null && orderListStatus !== void 0 && orderListStatus.loading) && (orderListStatus === null || orderListStatus === void 0 ? void 0 : orderListStatus.orders.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotFoundSourceWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    image: imageFails
  }))));
};
exports.MessagesListing = MessagesListing;