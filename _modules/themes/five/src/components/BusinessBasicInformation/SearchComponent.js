"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _Select = require("../../styles/Select");
var _styledComponents = require("styled-components");
var _CgSearch = _interopRequireDefault(require("@meronex/icons/cg/CgSearch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SearchComponent = function SearchComponent(props) {
  var _theme$business_view;
  var setOpenSearchProducts = props.setOpenSearchProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    sortByValue = props.sortByValue,
    sortByOptions = props.sortByOptions,
    isResponsive = props.isResponsive;
  var theme = (0, _styledComponents.useTheme)();
  var hideSort = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.header) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.business) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.sort) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden;
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    id: "search-component",
    isResponsive: isResponsive
  }, /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SearchIconWrapper, {
    onClick: function onClick() {
      return setOpenSearchProducts(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_CgSearch.default, null)), !hideSort && /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    notReload: true,
    options: sortByOptions,
    defaultValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    }
  })));
};
exports.SearchComponent = SearchComponent;