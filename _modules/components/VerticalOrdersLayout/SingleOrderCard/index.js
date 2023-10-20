"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleOrderCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styles = require("../../OrdersOption/styles");
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../../styles/Buttons");
var _styledComponents = require("styled-components");
var _styles2 = require("../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _theme$orders, _theme$orders2, _theme$orders3, _theme$orders4, _theme$orders5, _theme$orders6, _theme$orders7, _order$business, _theme$images, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _theme$images3, _order$business8, _order$business9, _order$business10, _order$business11, _order$business12, _getOrderStatus;
  var order = props.order,
    getOrderStatus = props.getOrderStatus,
    handleReorder = props.handleReorder,
    reorderLoading = props.reorderLoading,
    orderID = props.orderID,
    handleFavoriteOrder = props.handleFavoriteOrder,
    setOrderSelected = props.setOrderSelected,
    onRedirectPage = props.onRedirectPage,
    customArray = props.customArray;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var isGiftCardOrder = !(order !== null && order !== void 0 && order.business_id);
  var handleChangeFavorite = function handleChangeFavorite(order) {
    handleFavoriteOrder && handleFavoriteOrder(!(order !== null && order !== void 0 && order.favorite));
  };
  var handleClickCard = function handleClickCard(e, order) {
    var _order$cart_group_id;
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return;
    var params = _defineProperty({}, customArray ? 'cartUuid' : 'orderId', customArray ? order.uuid : (_order$cart_group_id = order === null || order === void 0 ? void 0 : order.cart_group_id) !== null && _order$cart_group_id !== void 0 ? _order$cart_group_id : order.uuid);
    var page = customArray ? 'checkout' : order !== null && order !== void 0 && order.cart_group_id ? 'multi_orders' : 'order_detail';
    onRedirectPage({
      page: page,
      params: params
    });
  };
  var hideBusinessLogo = theme === null || theme === void 0 || (_theme$orders = theme.orders) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.components) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.business_logo) === null || _theme$orders === void 0 ? void 0 : _theme$orders.hidden;
  var hideDate = theme === null || theme === void 0 || (_theme$orders2 = theme.orders) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.components) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.date) === null || _theme$orders2 === void 0 ? void 0 : _theme$orders2.hidden;
  var hideBusinessName = theme === null || theme === void 0 || (_theme$orders3 = theme.orders) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.components) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.business_name) === null || _theme$orders3 === void 0 ? void 0 : _theme$orders3.hidden;
  var hideOrderNumber = theme === null || theme === void 0 || (_theme$orders4 = theme.orders) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.components) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.order_number) === null || _theme$orders4 === void 0 ? void 0 : _theme$orders4.hidden;
  var hideReviewOrderButton = theme === null || theme === void 0 || (_theme$orders5 = theme.orders) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.components) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.review_order_button) === null || _theme$orders5 === void 0 ? void 0 : _theme$orders5.hidden;
  var hideReorderButton = theme === null || theme === void 0 || (_theme$orders6 = theme.orders) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.components) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.reorder_button) === null || _theme$orders6 === void 0 ? void 0 : _theme$orders6.hidden;
  var hideOrderStatus = theme === null || theme === void 0 || (_theme$orders7 = theme.orders) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.components) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.order_status) === null || _theme$orders7 === void 0 ? void 0 : _theme$orders7.hidden;
  return /*#__PURE__*/_react.default.createElement(_styles2.SingleCard, {
    key: order.id,
    id: "order-card",
    onClick: function onClick(e) {
      return handleClickCard(e, order);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.OrderPastContent, null, !hideBusinessLogo && (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.length) > 1 ? /*#__PURE__*/_react.default.createElement(_styles2.MultiLogosContainer, null, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.map(function (business, i) {
    var _theme$images2;
    return i < 2 && /*#__PURE__*/_react.default.createElement(_styles2.PastLogo, {
      key: business === null || business === void 0 ? void 0 : business.id,
      isMulti: true
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
      alt: "business-logo",
      width: "55px",
      height: "64px",
      loading: "lazy"
    }));
  }), (order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.length) > 1 && (order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.length) - 2 > 0 && /*#__PURE__*/_react.default.createElement("p", null, "+ ", (order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.length) - 2)) : /*#__PURE__*/_react.default.createElement(_styles2.PastLogo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo),
    alt: "business-logo",
    width: "55px",
    height: "64px",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessTitle, null, !hideBusinessName && /*#__PURE__*/_react.default.createElement("h2", null, (order === null || order === void 0 || (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.length) > 1 ? "".concat(t('GROUP_ORDER', 'Group Order'), " ").concat(t('No', 'No'), ". ").concat(order === null || order === void 0 ? void 0 : order.cart_group_id) : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.name), !(order !== null && order !== void 0 && (_order$business10 = order.business) !== null && _order$business10 !== void 0 && _order$business10.length) && /*#__PURE__*/_react.default.createElement(_styles2.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))), /*#__PURE__*/_react.default.createElement(_styles2.OrderInfo, null, !hideOrderNumber && (order === null || order === void 0 ? void 0 : order.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, (order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.length) > 1 ? "".concat(order === null || order === void 0 || (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.length, " ").concat(t('ORDERS', 'orders')) : "".concat(t('ORDER_NUM', 'Order No.'), " ").concat(order.id)), /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    className: "dot"
  })), !hideDate && /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), !hideOrderStatus && /*#__PURE__*/_react.default.createElement("p", {
    className: "status"
  }, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value))), !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles2.Reorder, null, !hideReviewOrderButton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    disabled: !!(order !== null && order !== void 0 && order.review),
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return setOrderSelected(order);
    }
  }, !!(order !== null && order !== void 0 && order.review) ? t('REVIEWED', 'Reviewed') : t('REVIEW', 'Review')), !hideReorderButton && typeof (order === null || order === void 0 ? void 0 : order.id) === 'number' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleReorder(order.id);
    }
  }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
};
var SingleOrderCard = exports.SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleOrderCard, singleOrderCardProps);
};