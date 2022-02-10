"use strict";

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CartStoresListingUI = function CartStoresListingUI(props) {
  var _Object$values$find$b, _Object$values$find, _storesState$result;

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
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !(storesState !== null && storesState !== void 0 && storesState.loading) && !(storesState !== null && storesState !== void 0 && storesState.error) && (storesState === null || storesState === void 0 ? void 0 : storesState.result) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
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
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type,
      disabledStoreBtn: ((_changeStoreState$res = changeStoreState === null || changeStoreState === void 0 ? void 0 : (_changeStoreState$res2 = changeStoreState.result) === null || _changeStoreState$res2 === void 0 ? void 0 : _changeStoreState$res2.business_id) !== null && _changeStoreState$res !== void 0 ? _changeStoreState$res : businessId) === store.id,
      handleCartStoreClick: handleCartStoreChange
    });
  }))), (storesState === null || storesState === void 0 ? void 0 : storesState.loading) && /*#__PURE__*/_react.default.createElement(_styles.ItemListing, null, _toConsumableArray(Array(4).keys()).map(function (i) {
    var _orderState$options2;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type
    });
  })), !(storesState !== null && storesState !== void 0 && storesState.loading) && ((storesState === null || storesState === void 0 ? void 0 : storesState.error) || !(storesState !== null && storesState !== void 0 && (_storesState$result = storesState.result) !== null && _storesState$result !== void 0 && _storesState$result.length)) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: storesState !== null && storesState !== void 0 && storesState.error ? t('ERROR_NOT_FOUND_CART_STORES', 'Sorry, an error has occurred') : t('NOT_FOUND_CART_STORES', 'No businesses to show at this time.')
  }));
};

var CartStoresListing = function CartStoresListing(props) {
  var storeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CartStoresListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CartStoresListing, storeProps);
};

exports.CartStoresListing = CartStoresListing;