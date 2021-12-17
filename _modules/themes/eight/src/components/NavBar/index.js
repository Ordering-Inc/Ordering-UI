"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _BsChevronLeft = _interopRequireDefault(require("@meronex/icons/bs/BsChevronLeft"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _SearchBar = require("../SearchBar");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavBar = function NavBar(props) {
  var _theme$defaultLanguag;

  var title = props.title,
      handleGoBack = props.handleGoBack,
      searchValue = props.searchValue,
      handleChangeSearch = props.handleChangeSearch,
      lazyLoad = props.lazyLoad,
      isSearchShow = props.isSearchShow,
      placeholder = props.placeholder;
  var history = (0, _reactRouterDom.useHistory)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.NavBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BackButton, {
    onClick: function onClick() {
      return handleGoBack ? handleGoBack() : history.goBack();
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChevronLeft.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('SHOPPING_SECOND_WHERE_BACK_BUTTON', ((_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SHOPPING_SECOND_WHERE_BACK_BUTTON) || 'Back'))), /*#__PURE__*/_react.default.createElement(_styles.NavBarTitle, {
    isSearchShow: isSearchShow
  }, title), isSearchShow && /*#__PURE__*/_react.default.createElement(_styles.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: placeholder || '',
    lazyLoad: lazyLoad
  })));
};

exports.NavBar = NavBar;