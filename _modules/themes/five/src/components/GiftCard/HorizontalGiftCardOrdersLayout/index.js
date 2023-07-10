"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    setIsEmpty = props.setIsEmpty;
  (0, _react.useEffect)(function () {
    var _giftCards$list;
    if (giftCards.loading) return;
    if (((_giftCards$list = giftCards.list) === null || _giftCards$list === void 0 ? void 0 : _giftCards$list.length) === 0) setIsEmpty(true);
  }, [giftCards]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, giftCards.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 24
  }) : ((_giftCards$list2 = giftCards.list) === null || _giftCards$list2 === void 0 ? void 0 : _giftCards$list2.length) > 0 && /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement(_styles.ProductsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, giftCards.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
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
var HorizontalGiftCardOrdersLayout = function HorizontalGiftCardOrdersLayout(props) {
  var giftCardsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HorizontalGiftCardOrdersLayoutUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.GiftCardOrdersList, giftCardsProps);
};
exports.HorizontalGiftCardOrdersLayout = HorizontalGiftCardOrdersLayout;