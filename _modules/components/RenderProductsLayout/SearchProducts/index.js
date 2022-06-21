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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchProducts = function SearchProducts(props) {
  var _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3, _theme$layouts$busine4, _theme$layouts$busine5, _theme$defaultLanguag, _businessState$busine;

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

  var showSort = !(theme !== null && theme !== void 0 && (_theme$layouts = theme.layouts) !== null && _theme$layouts !== void 0 && (_theme$layouts$busine = _theme$layouts.business_view) !== null && _theme$layouts$busine !== void 0 && (_theme$layouts$busine2 = _theme$layouts$busine.components) !== null && _theme$layouts$busine2 !== void 0 && (_theme$layouts$busine3 = _theme$layouts$busine2.basic_information) !== null && _theme$layouts$busine3 !== void 0 && (_theme$layouts$busine4 = _theme$layouts$busine3.components) !== null && _theme$layouts$busine4 !== void 0 && (_theme$layouts$busine5 = _theme$layouts$busine4.sort) !== null && _theme$layouts$busine5 !== void 0 && _theme$layouts$busine5.hidden);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SEARCH_PRODUCTS) || 'Search Products'),
    lazyLoad: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended
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

exports.SearchProducts = SearchProducts;