"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _orderingComponents = require("ordering-components");
var _templateObject, _templateObject2;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ToastBar = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  visibility: hidden;\n  background-color: ", ";\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  bottom: 80px;\n  z-index: 99999;\n  font-size: 14px;\n  min-width: 200px;\n  max-width: 200px;\n\n  /* Animations to fade the snackbar in and out */\n  @-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n  }\n\n  @keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n  }\n\n  @-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n  }\n\n  @keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n  }\n\n  @media(min-width: 380px){\n    font-size: 16px;\n    min-width: 250px;\n    max-width: initial;\n  }\n\n  @media(min-width: 1000px){\n    bottom: 30px;\n  }\n"])), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
});
var ToastContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));
var Toast = exports.Toast = function Toast() {
  var _theme$colors$primary;
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    toastConfig = _useToast2[0],
    hideToast = _useToast2[1].hideToast;
  var toastRef = (0, _react.useRef)();
  var theme = (0, _styledComponents.useTheme)();
  (0, _react.useEffect)(function () {
    if (!toastConfig && !toastRef.current) {
      return;
    }
    var toast = document.getElementById('toast-bar');
    toast.style.visibility = 'visible';
    toast.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
    setTimeout(function () {
      toast.style.visibility = 'hidden';
      hideToast && hideToast();
    }, duration);
  }, [toastConfig]);
  if (!toastConfig) {
    return null;
  }
  var type = toastConfig.type,
    message = toastConfig.message,
    duration = toastConfig.duration;
  var backgroundColor = '#6ba4ff';
  switch (type) {
    case _orderingComponents.ToastType.Info:
      backgroundColor = (_theme$colors$primary = theme.colors.primary) !== null && _theme$colors$primary !== void 0 ? _theme$colors$primary : backgroundColor;
      break;
    case _orderingComponents.ToastType.Error:
      backgroundColor = '#D83520';
      break;
    case _orderingComponents.ToastType.Success:
      backgroundColor = '#73bd24';
      break;
  }
  return /*#__PURE__*/_react.default.createElement(ToastContainer, null, /*#__PURE__*/_react.default.createElement(ToastBar, {
    backgroundColor: backgroundColor,
    id: "toast-bar",
    ref: toastRef
  }, message));
};