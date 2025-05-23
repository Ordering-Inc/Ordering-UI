"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _BsChevronLeft = _interopRequireDefault(require("@meronex/icons/bs/BsChevronLeft"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _SearchBar = require("../SearchBar");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _RiCloseCircleLine = _interopRequireDefault(require("@meronex/icons/ri/RiCloseCircleLine"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var NavBar = exports.NavBar = function NavBar(props) {
  var _theme$defaultLanguag, _theme$images;
  var title = props.title,
    isHideBackButton = props.isHideBackButton,
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
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearchClick = _useState2[0],
    setIsSerchClick = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.NavBarContainer, null, !isHideBackButton && /*#__PURE__*/_react.default.createElement(_styles.BackButton, {
    onClick: function onClick() {
      return handleGoBack ? handleGoBack() : history.goBack();
    }
  }, /*#__PURE__*/_react.default.createElement(_BsChevronLeft.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('SHOPPING_SECOND_WHERE_BACK_BUTTON', ((_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SHOPPING_SECOND_WHERE_BACK_BUTTON) || 'Back'))), /*#__PURE__*/_react.default.createElement(_styles.NavBarTitle, {
    isSearchShow: isSearchShow
  }, title), isSearchShow && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (windowSize.width >= 768 || windowSize.width < 768 && isSearchClick) && /*#__PURE__*/_react.default.createElement(_styles.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: placeholder || '',
    lazyLoad: lazyLoad
  })), windowSize.width < 768 && /*#__PURE__*/_react.default.createElement(_styles.SearchBarIconWrapper, null, isSearchClick ? /*#__PURE__*/_react.default.createElement(_RiCloseCircleLine.default, {
    onClick: function onClick() {
      handleChangeSearch('');
      setIsSerchClick(false);
    }
  }) : /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.searchIcon,
    onClick: function onClick() {
      return setIsSerchClick(true);
    }
  }))));
};