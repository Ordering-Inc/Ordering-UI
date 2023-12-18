"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartStoresListing = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _BusinessController = require("../BusinessController");
var _SearchBar = require("../SearchBar");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartStoresListingUI = function CartStoresListingUI(props) {
  var _Object$values$find$b, _Object$values$find, _storesState$result, _storesState$result2;
  var searchValue = props.searchValue,
    businessIdSelect = props.businessIdSelect,
    storesState = props.storesState,
    changeStoreState = props.changeStoreState,
    handleChangeSearch = props.handleChangeSearch,
    handleCartStoreChange = props.handleCartStoreChange;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var businessId = (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.cartuuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {};
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !(storesState !== null && storesState !== void 0 && storesState.loading) && !(storesState !== null && storesState !== void 0 && storesState.error) && (storesState === null || storesState === void 0 ? void 0 : storesState.result) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!(storesState !== null && storesState !== void 0 && storesState.error || !(storesState !== null && storesState !== void 0 && (_storesState$result = storesState.result) !== null && _storesState$result !== void 0 && _storesState$result.length)) || searchValue) && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses')
  })), /*#__PURE__*/_react.default.createElement(_styles.ItemListing, null, storesState === null || storesState === void 0 ? void 0 : storesState.result.map(function (store) {
    var _orderState$options, _changeStoreState$res, _changeStoreState$res2;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: store.id,
      isCartStore: true,
      className: "card",
      business: store,
      isSkeleton: changeStoreState.loading && businessIdSelect === store.id,
      orderType: orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type,
      disabledStoreBtn: ((_changeStoreState$res = changeStoreState === null || changeStoreState === void 0 || (_changeStoreState$res2 = changeStoreState.result) === null || _changeStoreState$res2 === void 0 ? void 0 : _changeStoreState$res2.business_id) !== null && _changeStoreState$res !== void 0 ? _changeStoreState$res : businessId) === store.id,
      handleCartStoreClick: handleCartStoreChange
    });
  }))), ((storesState === null || storesState === void 0 ? void 0 : storesState.loading) || !(storesState !== null && storesState !== void 0 && storesState.error) && !(storesState !== null && storesState !== void 0 && storesState.result)) && /*#__PURE__*/_react.default.createElement(_styles.ItemListing, null, _toConsumableArray(Array(4).keys()).map(function (i) {
    var _orderState$options2;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type
    });
  })), !(storesState !== null && storesState !== void 0 && storesState.loading) && ((storesState === null || storesState === void 0 ? void 0 : storesState.error) || (storesState === null || storesState === void 0 || (_storesState$result2 = storesState.result) === null || _storesState$result2 === void 0 ? void 0 : _storesState$result2.length) === 0) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: storesState !== null && storesState !== void 0 && storesState.error ? t('ERROR_NOT_FOUND_CART_STORES', 'Sorry, an error has occurred') : t('NOT_FOUND_CART_STORES', 'No businesses to show at this time.')
  }));
};
var CartStoresListing = exports.CartStoresListing = function CartStoresListing(props) {
  var storeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CartStoresListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CartStoresListing, storeProps);
};