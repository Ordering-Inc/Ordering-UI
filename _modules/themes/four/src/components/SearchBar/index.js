"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _IosSearch = _interopRequireDefault(require("@meronex/icons/ios/IosSearch"));
var _Inputs = require("../../styles/Inputs");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SearchBar = exports.SearchBar = function SearchBar(props) {
  var _el$current, _el$current2;
  var onSearch = props.onSearch,
    search = props.search,
    placeholder = props.placeholder,
    lazyLoad = props.lazyLoad,
    isCustomLayout = props.isCustomLayout;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var timeout = null;
  var previousSearch;
  var el = (0, _react.useRef)();
  var onChangeSearch = function onChangeSearch(e) {
    if (e.keyCode === 13) return;
    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          onSearch(e.target.value);
        }, 750);
      }
    }
    previousSearch = e.target.value;
  };
  var handleClear = function handleClear() {
    onSearch('');
  };
  (0, _react.useEffect)(function () {
    el.current.onkeyup = onChangeSearch;
  }, []);
  (0, _react.useEffect)(function () {
    if (!search) {
      el.current.value = '';
    }
  }, [search]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessSearch, {
    className: !isCustomLayout && 'search-bar',
    isCustomLayout: isCustomLayout,
    hasValue: (_el$current = el.current) === null || _el$current === void 0 ? void 0 : _el$current.value
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    ref: el,
    name: "search",
    "aria-label": "search",
    placeholder: placeholder,
    autoComplete: "off",
    maxLength: "500"
  }), /*#__PURE__*/_react.default.createElement(_styles.DeleteContent, null, (_el$current2 = el.current) !== null && _el$current2 !== void 0 && _el$current2.value ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleClear
  }, t('CLEAR', 'Clear')) : /*#__PURE__*/_react.default.createElement(_IosSearch.default, null))));
};