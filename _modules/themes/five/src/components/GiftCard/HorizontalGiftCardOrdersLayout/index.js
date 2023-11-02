"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalGiftCardOrdersLayout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AutoScroll = require("../../AutoScroll");
var _SingleGiftCard = require("../SingleGiftCard");
var _Pagination = require("../../Pagination");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var HorizontalGiftCardOrdersLayoutUI = function HorizontalGiftCardOrdersLayoutUI(props) {
  var _giftCards$list2, _giftCards$list3;
  var giftCards = props.giftCards,
    paginationProps = props.paginationProps,
    goToPage = props.goToPage,
    title = props.title,
    setIsEmpty = props.setIsEmpty,
    scrollId = props.scrollId;
  (0, _react.useEffect)(function () {
    var _giftCards$list;
    if (giftCards.loading) return;
    if (((_giftCards$list = giftCards.list) === null || _giftCards$list === void 0 ? void 0 : _giftCards$list.length) === 0) setIsEmpty(true);
  }, [giftCards]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, giftCards.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 24
  }) : ((_giftCards$list2 = giftCards.list) === null || _giftCards$list2 === void 0 ? void 0 : _giftCards$list2.length) > 0 && /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement(_styles.ProductsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: scrollId
  }, giftCards.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleGiftCard.SingleGiftCard, {
      isSkeleton: true,
      key: i
    });
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, giftCards.list.map(function (card) {
    return /*#__PURE__*/_react.default.createElement(_SingleGiftCard.SingleGiftCard, {
      key: card.id,
      card: card
    });
  }))))), ((_giftCards$list3 = giftCards.list) === null || _giftCards$list3 === void 0 ? void 0 : _giftCards$list3.length) > 0 && Math.ceil(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) > 1 && /*#__PURE__*/_react.default.createElement(_styles.PaginationWrapper, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: Math.ceil(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages),
    handleChangePage: goToPage
  })));
};
var HorizontalGiftCardOrdersLayout = exports.HorizontalGiftCardOrdersLayout = function HorizontalGiftCardOrdersLayout(props) {
  var giftCardsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HorizontalGiftCardOrdersLayoutUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.GiftCardOrdersList, giftCardsProps);
};