"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppleLogin = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _FaApple = _interopRequireDefault(require("@meronex/icons/fa/FaApple"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AppleLoginUI = function AppleLoginUI(props) {
  var initLoginApple = props.initLoginApple,
    handleAppleLoginClick = props.handleAppleLoginClick;
  var location = (0, _reactRouterDom.useLocation)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  (0, _react.useEffect)(function () {
    var result = location.hash;
    if (result) {
      var _divisions$, _divisions$2, _divisions$3;
      var divisions = result === null || result === void 0 ? void 0 : result.split('&', 4);
      var state = divisions === null || divisions === void 0 || (_divisions$ = divisions[0]) === null || _divisions$ === void 0 || (_divisions$ = _divisions$.split('state=', 2)) === null || _divisions$ === void 0 ? void 0 : _divisions$[1];
      var code = divisions === null || divisions === void 0 || (_divisions$2 = divisions[1]) === null || _divisions$2 === void 0 || (_divisions$2 = _divisions$2.split('code=', 2)) === null || _divisions$2 === void 0 ? void 0 : _divisions$2[1];
      var idToken = divisions === null || divisions === void 0 || (_divisions$3 = divisions[2]) === null || _divisions$3 === void 0 || (_divisions$3 = _divisions$3.split('id_token=', 2)) === null || _divisions$3 === void 0 ? void 0 : _divisions$3[1];
      if (code) {
        handleAppleLoginClick({
          state: state,
          code: code,
          idToken: idToken
        });
      }
    }
  }, [Object.keys(configs).length]);
  return /*#__PURE__*/_react.default.createElement(_styles.AppleButton, {
    initialIcon: true,
    color: "secondary",
    onClick: function onClick() {
      return initLoginApple();
    }
  }, /*#__PURE__*/_react.default.createElement(_FaApple.default, null), /*#__PURE__*/_react.default.createElement("div", null, t('CONTINUE_WITH_APPLE', 'Continue with Apple')));
};
var AppleLogin = exports.AppleLogin = function AppleLogin(props) {
  var propss = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AppleLoginUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AppleLogin, propss);
};