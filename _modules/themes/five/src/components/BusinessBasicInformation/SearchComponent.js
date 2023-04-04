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
  var _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _theme$business_view$5, _theme$business_view$6;
  var setOpenSearchProducts = props.setOpenSearchProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    sortByValue = props.sortByValue,
    sortByOptions = props.sortByOptions,
    isResponsive = props.isResponsive;
  var theme = (0, _styledComponents.useTheme)();
  var hideSort = theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$ = _theme$business_view.components) === null || _theme$business_view$ === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view$.header) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.components) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.business) === null || _theme$business_view$4 === void 0 ? void 0 : (_theme$business_view$5 = _theme$business_view$4.components) === null || _theme$business_view$5 === void 0 ? void 0 : (_theme$business_view$6 = _theme$business_view$5.sort) === null || _theme$business_view$6 === void 0 ? void 0 : _theme$business_view$6.hidden;
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