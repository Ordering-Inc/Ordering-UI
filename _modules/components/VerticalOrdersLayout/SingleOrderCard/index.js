"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _order$business, _theme$images, _theme$images$dummies, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _theme$images3, _theme$images3$dummie, _order$business8, _order$business9, _order$business10, _order$business11, _order$business12, _getOrderStatus;
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
  return /*#__PURE__*/_react.default.createElement(_styles2.SingleCard, {
    key: order.id,
    id: "order-card",
    onClick: function onClick(e) {
      return handleClickCard(e, order);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.OrderPastContent, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.length) > 1 ? /*#__PURE__*/_react.default.createElement(_styles2.MultiLogosContainer, null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.map(function (business, i) {
    var _theme$images2, _theme$images2$dummie;
    return i < 2 && /*#__PURE__*/_react.default.createElement(_styles2.PastLogo, {
      key: business === null || business === void 0 ? void 0 : business.id,
      isMulti: true
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo),
      alt: "business-logo",
      width: "55px",
      height: "64px",
      loading: "lazy"
    }));
  }), (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.length) > 1 && (order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.length) - 2 > 0 && /*#__PURE__*/_react.default.createElement("p", null, "+ ", (order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.length) - 2)) : /*#__PURE__*/_react.default.createElement(_styles2.PastLogo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo),
    alt: "business-logo",
    width: "55px",
    height: "64px",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, (order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.length) > 1 ? "".concat(t('GROUP_ORDER', 'Group Order'), " ").concat(t('No', 'No'), ". ").concat(order === null || order === void 0 ? void 0 : order.cart_group_id) : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.name), !(order !== null && order !== void 0 && (_order$business10 = order.business) !== null && _order$business10 !== void 0 && _order$business10.length) && /*#__PURE__*/_react.default.createElement(_styles2.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))), /*#__PURE__*/_react.default.createElement(_styles2.OrderInfo, null, (order === null || order === void 0 ? void 0 : order.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, (order === null || order === void 0 ? void 0 : (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.length) > 1 ? "".concat(order === null || order === void 0 ? void 0 : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.length, " ").concat(t('ORDERS', 'orders')) : "".concat(t('ORDER_NUM', 'Order No.'), " ").concat(order.id)), /*#__PURE__*/_react.default.createElement(_BsDot.default, {
    className: "dot"
  })), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "status"
  }, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value))), /*#__PURE__*/_react.default.createElement(_styles2.Reorder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    disabled: !!(order !== null && order !== void 0 && order.review),
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return setOrderSelected(order);
    }
  }, !!(order !== null && order !== void 0 && order.review) ? t('REVIEWED', 'Reviewed') : t('REVIEW', 'Review')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleReorder(order.id);
    }
  }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
};
var SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleOrderCard, singleOrderCardProps);
};
exports.SingleOrderCard = SingleOrderCard;