"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningMessage = exports.StripeLinkContainer = exports.InputPhoneNumberWrapper = exports.InputBeforeIconWrapper = exports.CodeSentContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StripeLinkContainer = exports.StripeLinkContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n\n  .message {\n    font-size: 14px;\n  }\n\n  .user-info {\n    display: flex;\n    flex-direction: column;\n\n    .inputs-wrapper {\n      display: flex;\n      > div {\n        width: 50%\n      }\n      input {\n        width: 100%;\n        padding: 7px 15px 7px 34px;\n      }\n      .first-input {\n        margin-right: 25px;\n      }\n    }\n  }\n  .buttons-wrapper {\n    display: flex;\n    padding-top: 20px;\n    gap: 10px;\n\n    div {\n      flex: 1;\n\n      p {\n        text-align: center;\n      }\n    }\n\n    button {\n      width: 100%;\n      min-height: 45px;\n    }\n  }\n\n  .loading {\n    text-align: center;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  .url-link {\n    text-align: center;\n  }\n"])));
var WarningMessage = exports.WarningMessage = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #D81212;\n  font-size: 24px;\n  padding-left: 10px;\n  font-weight: bold;\n  opacity: 0.8;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
});
var InputPhoneNumberWrapper = exports.InputPhoneNumberWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 10px;\n  p {\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    width: 100%;\n    text-align: left;\n    margin: 0 0 7px 0;\n  }\n\n  .input-icon {\n    top: 8px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var InputBeforeIconWrapper = exports.InputBeforeIconWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 6px 6px 6px 10px;\n\n  ", "\n\n  svg {\n    color: #B1BCCC;\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    right: 100px;\n    left: initial;\n  "])));
});
var CodeSentContainer = exports.CodeSentContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n\n  h3 {\n    font-size: 20px;\n  }\n\n  .countdown {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n\n    div {\n      width: 30%;\n      background-color: ", ";\n      padding: 10px 10px;\n      p {\n        text-align: center;\n        font-size: 32px;\n        color: ", ";\n        margin: 0;\n      }\n    }\n  }\n\n  button {\n    width: 100%;\n    min-height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
}, function (props) {
  return props.theme.colors.success500;
});