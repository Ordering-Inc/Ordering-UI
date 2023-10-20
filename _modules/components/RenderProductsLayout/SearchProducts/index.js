"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchProducts = void 0;
var _react = _interopRequireDefault(require("react"));
var _Select = require("../../../styles/Select");
var _SearchBar = require("../../SearchBar");
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SearchProducts = exports.SearchProducts = function SearchProducts(props) {
  var _theme$business_view, _theme$defaultLanguag, _businessState$busine;
  var handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    businessState = props.businessState,
    sortByOptions = props.sortByOptions,
    sortByValue = props.sortByValue,
    handleChangeSortBy = props.handleChangeSortBy;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var showSort = !(theme !== null && theme !== void 0 && (_theme$business_view = theme.business_view) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.header) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.business) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.sort) !== null && _theme$business_view !== void 0 && _theme$business_view.hidden);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SEARCH_PRODUCTS) || 'Search Products'),
    lazyLoad: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended
  }), showSort && /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    notReload: true,
    options: sortByOptions,
    defaultValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    }
  }));
};