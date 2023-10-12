"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleHeroSide = exports.ResetPasswordContainer = exports.RedirectLink = exports.HeroSide = exports.FormSide = exports.FormInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ResetPasswordContainer = exports.ResetPasswordContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    height: 100%;\n    min-height: calc(100vh - 65px)\n  }\n"])));
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var HeroSide = exports.HeroSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: calc(40vh - 65px);\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  background-color:  ", ";\n  padding-bottom: 5px;\n\n  @media (min-width: 992px) {\n    width: 55%;\n    height: calc(100vh - 65px);\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
});
var TitleHeroSide = exports.TitleHeroSide = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  h1 {\n    font-size: 22px;\n  }\n\n  p {\n    font-size: 13px;\n  }\n\n  h1,\n  p {\n    margin: 0px;\n    color: #FFF;\n  }\n\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 50px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n  }\n"])));
var FormSide = exports.FormSide = (0, _styledComponents.default)(Side)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n\n  @media (min-width: 992px) {\n    margin: auto;\n    width: 45%;\n    font-size: 1em;\n  }\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n\n  * {\n    padding: 8px 20px;\n    margin: 10px;\n  }\n\n  input:not(:last-child) {\n    margin-top: 10px;\n    margin-bottom: 0px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n"])));
var RedirectLink = exports.RedirectLink = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 18px;\n    flex-direction: row;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var register = _ref.register;
  return register && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: calc(80% - 20px)\n    }\n  "])));
});