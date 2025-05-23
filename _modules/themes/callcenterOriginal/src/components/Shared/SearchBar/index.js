"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var SearchBar = exports.SearchBar = function SearchBar(props) {
  var _el$current;
  var onSearch = props.onSearch,
    search = props.search,
    placeholder = props.placeholder,
    lazyLoad = props.lazyLoad,
    customClass = props.customClass;
  var timeout = null;
  var previousSearch;
  var el = (0, _react.useRef)();
  var onChangeSearch = function onChangeSearch(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 750);
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
    el.current.value = '';
  };
  (0, _react.useEffect)(function () {
    el.current.onkeyup = onChangeSearch;
  }, []);
  (0, _react.useEffect)(function () {
    if (!search) {
      el.current.value = '';
    }
  }, [search]);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, {
    className: customClass || ''
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    ref: el,
    name: "search",
    placeholder: placeholder,
    autoComplete: "off"
  }), (_el$current = el.current) !== null && _el$current !== void 0 && _el$current.value ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XCircle, {
    className: "close",
    onClick: handleClear
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Search, null));
};