"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleOrderCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _ReviewOrder = require("../ReviewOrder");
var _ReviewProduct = require("../ReviewProduct");
var _ReviewDriver = require("../ReviewDriver");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _Buttons = require("../../styles/Buttons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _OrderEta = require("../OrderDetails/OrderEta");
var _styles = require("./styles");
var _styles2 = require("../OrdersOption/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _theme$orders, _theme$orders2, _theme$orders3, _theme$orders4, _theme$orders5, _theme$orders6, _theme$orders7, _theme$orders8, _configs$change_order, _props$beforeElements, _props$beforeComponen, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _theme$images2, _order$business7, _theme$images3, _order$business8, _theme$images4, _order$business9, _order$business0, _order$summary$total, _order$summary, _order$business1, _order$business10, _order$business11, _order$business12, _getOrderStatus, _order$business13, _order$summary$total2, _order$summary2, _order$business14, _props$afterComponent, _props$afterElements;
  var order = props.order,
    isBusinessesPage = props.isBusinessesPage,
    handleReorder = props.handleReorder,
    customArray = props.customArray,
    onRedirectPage = props.onRedirectPage,
    pastOrders = props.pastOrders,
    isCustomerMode = props.isCustomerMode,
    handleFavoriteOrder = props.handleFavoriteOrder,
    isSkeleton = props.isSkeleton,
    isFavorite = props.isFavorite,
    handleRemoveCart = props.handleRemoveCart,
    cartState = props.cartState,
    reorderLoading = props.reorderLoading;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    carts = _useOrder2[0].carts;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReviewOpen = _useState2[0],
    setIsReviewOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reviewStatus = _useState4[0],
    setReviewStatus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOrderReviewed = _useState8[0],
    setIsOrderReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isProductReviewed = _useState0[0],
    setIsProductReviewed = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isDriverReviewed = _useState10[0],
    setIsDriverReviewed = _useState10[1];
  var isGiftCardOrder = !(order !== null && order !== void 0 && order.business_id);
  var handleClickCard = function handleClickCard(e, order) {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return;
    if (customArray) {
      onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: order.uuid
        }
      });
    } else {
      order !== null && order !== void 0 && order.cart_group_id ? onRedirectPage({
        page: 'multi_orders',
        params: {
          orderId: order.cart_group_id
        }
      }) : onRedirectPage({
        page: 'order_detail',
        params: {
          orderId: order.uuid
        }
      });
    }
  };
  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else handleCloseReivew();
  };
  var closeReviewProduct = function closeReviewProduct() {
    if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };
  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false
    });else if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsReviewOpen(false);
      return;
    }
    setIsReviewOpen(true);
  };
  var handleCloseReivew = function handleCloseReivew() {
    setReviewStatus({
      order: false,
      product: false,
      driver: false
    });
    setIsReviewOpen(false);
  };
  var handleClickReview = function handleClickReview(order) {
    handleOpenReview && handleOpenReview();
  };
  var handleChangeFavorite = function handleChangeFavorite(order) {
    handleFavoriteOrder && handleFavoriteOrder(!(order !== null && order !== void 0 && order.favorite));
  };
  var handleClickReorder = function handleClickReorder(order) {
    var _carts;
    if (carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)] && ((_carts = carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)]) === null || _carts === void 0 || (_carts = _carts.products) === null || _carts === void 0 ? void 0 : _carts.length) > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: function handleOnAccept() {
          handleRemoveCart();
          setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
            open: false
          }));
        }
      });
    } else {
      handleReorder(order.id);
    }
  };
  var handleOriginalReorder = function handleOriginalReorder() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false
    }));
    handleReorder(order.id);
  };
  var hideBusinessLogo = theme === null || theme === void 0 || (_theme$orders = theme.orders) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.components) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.business_logo) === null || _theme$orders === void 0 ? void 0 : _theme$orders.hidden;
  var hideDate = theme === null || theme === void 0 || (_theme$orders2 = theme.orders) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.components) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.date) === null || _theme$orders2 === void 0 ? void 0 : _theme$orders2.hidden;
  var hideBusinessName = theme === null || theme === void 0 || (_theme$orders3 = theme.orders) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.components) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.business_name) === null || _theme$orders3 === void 0 ? void 0 : _theme$orders3.hidden;
  var hideOrderNumber = theme === null || theme === void 0 || (_theme$orders4 = theme.orders) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.components) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.order_number) === null || _theme$orders4 === void 0 ? void 0 : _theme$orders4.hidden;
  var hideReviewOrderButton = theme === null || theme === void 0 || (_theme$orders5 = theme.orders) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.components) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.review_order_button) === null || _theme$orders5 === void 0 ? void 0 : _theme$orders5.hidden;
  var hideReorderButton = theme === null || theme === void 0 || (_theme$orders6 = theme.orders) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.components) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.reorder_button) === null || _theme$orders6 === void 0 ? void 0 : _theme$orders6.hidden;
  var hideFavorite = theme === null || theme === void 0 || (_theme$orders7 = theme.orders) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.components) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.favorite) === null || _theme$orders7 === void 0 ? void 0 : _theme$orders7.hidden;
  var hideOrderStatus = theme === null || theme === void 0 || (_theme$orders8 = theme.orders) === null || _theme$orders8 === void 0 || (_theme$orders8 = _theme$orders8.components) === null || _theme$orders8 === void 0 || (_theme$orders8 = _theme$orders8.order_status) === null || _theme$orders8 === void 0 ? void 0 : _theme$orders8.hidden;
  var changeIdToExternalId = (configs === null || configs === void 0 || (_configs$change_order = configs.change_order_id) === null || _configs$change_order === void 0 ? void 0 : _configs$change_order.value) === '1';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "order-card",
    w: screen.width - (screen.width < 411 ? -60 : 60),
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickCard(e, order);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    isCustomerMode: isCustomerMode
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.length) > 1 ? /*#__PURE__*/_react.default.createElement(_styles.MultiLogosContainer, null, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.map(function (business, i) {
    var _theme$images;
    return i < 2 && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
      key: business === null || business === void 0 ? void 0 : business.id,
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_400,c_limit'),
      isMulti: true
    });
  }), (order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.length) > 1 && (order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.length) - 2 > 0 && /*#__PURE__*/_react.default.createElement("p", null, "+ ", (order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.length) - 2)) : /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
    bgimage: optimizeImage((order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_400,c_limit')
  })), isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (((_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.dummies) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.businessLogo),
    alt: "business-logo",
    width: "75px",
    height: "75px"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
    activeOrders: true,
    isMultiCart: (order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.length) > 1
  }, !hideBusinessName && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (_order$business0 = order.business) === null || _order$business0 === void 0 ? void 0 : _order$business0.name), /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total)))) : /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (order === null || order === void 0 || (_order$business1 = order.business) === null || _order$business1 === void 0 ? void 0 : _order$business1.length) > 1 ? "".concat(t('GROUP_ORDER', 'Group Order'), " ").concat(t('No', 'No'), ". ").concat(order === null || order === void 0 ? void 0 : order.cart_group_id) : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.name)), isSkeleton ? /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, ((order === null || order === void 0 ? void 0 : order.id) || changeIdToExternalId && (order === null || order === void 0 ? void 0 : order.external_id)) && !hideOrderNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, (order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.length) > 1 ? "".concat(order === null || order === void 0 || (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.length, " ").concat(t('ORDERS', 'orders')) : changeIdToExternalId && (order === null || order === void 0 ? void 0 : order.external_id) || "".concat(t('ORDER_NUM', 'Order No.'), " ").concat(order.id))), !hideDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", null, pastOrders ? order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
    outputFormat: 'MM/DD/YY hh:mm A'
  }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }) : /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: order
  })))), !hideOrderStatus && /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : (_getOrderStatus = (0, _utils.getOrderStatus)(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage
  }, !pastOrders && /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 || (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.length) > 1 ? order === null || order === void 0 ? void 0 : order.total : (_order$summary$total2 = order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.total) !== null && _order$summary$total2 !== void 0 ? _order$summary$total2 : order === null || order === void 0 ? void 0 : order.total))), pastOrders && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, {
    isCustomerMode: isCustomerMode
  }, !isOrderReviewed && !isFavorite && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && !hideReviewOrderButton && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return handleClickReview(order);
    }
  }, t('REVIEW', 'Review')), order.cart && typeof (order === null || order === void 0 ? void 0 : order.id) === 'number' && !hideReorderButton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleClickReorder(order);
    },
    disabled: reorderLoading || (cartState === null || cartState === void 0 ? void 0 : cartState.loading)
  }, reorderLoading || cartState !== null && cartState !== void 0 && cartState.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))), !(order !== null && order !== void 0 && (_order$business14 = order.business) !== null && _order$business14 !== void 0 && _order$business14.length) && !hideFavorite && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20,
    height: 20
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))))), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDER', 'Order'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return handleOriginalReorder();
    },
    onCancel: function onCancel() {
      return handleOriginalReorder();
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
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
var SingleOrderCard = exports.SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleOrderCard, singleOrderCardProps);
};