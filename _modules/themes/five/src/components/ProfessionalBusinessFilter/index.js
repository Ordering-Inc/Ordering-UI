"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalBusinessFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _Inputs = require("../../styles/Inputs");
var _Select = require("../../styles/Select");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _SearchBar = require("../SearchBar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalBusinessFilter = function ProfessionalBusinessFilter(props) {
  var _theme$defaultLanguag;
  var sortByValue = props.sortByValue,
    sortByOptions = props.sortByOptions,
    handleChangeSortBy = props.handleChangeSortBy,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    business = props.business,
    handleChangePriceFilterValues = props.handleChangePriceFilterValues,
    priceFilterValues = props.priceFilterValues;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SEARCH_PRODUCTS) || 'Search Products'),
    lazyLoad: business === null || business === void 0 ? void 0 : business.lazy_load_products_recommended
  })), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.FilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.FilterItem, null, /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER_STEP_2_TIME_OPTION_MIN', 'Min'), "."), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    value: (priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return handleChangePriceFilterValues('min', e.target.value);
    },
    placeholder: t('PREORDER_STEP_2_TIME_OPTION_MIN', 'Min')
  })), /*#__PURE__*/_react.default.createElement(_styles.FilterItem, null, /*#__PURE__*/_react.default.createElement("span", null, t('MAX', 'Max'), "."), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    value: (priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return handleChangePriceFilterValues('max', e.target.value);
    },
    placeholder: t('MAX', 'Max')
  }))), width > 576 && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    notReload: true,
    options: sortByOptions,
    defaultValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    }
  })));
};
exports.ProfessionalBusinessFilter = ProfessionalBusinessFilter;