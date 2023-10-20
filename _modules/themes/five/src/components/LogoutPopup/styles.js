"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationText = exports.TogglePassword = exports.Title = exports.SubTitle = exports.LoginContainer = exports.InputWrapper = exports.InputBeforeIcon = exports.FormSide = exports.FormInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LoginContainer = exports.LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = exports.FormSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 992px) {\n    width: 100%;\n    font-size: 12px;\n  }\n\n  @media (min-width: 1200px){\n    font-size: 0.9em;\n  }\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  input:not(:last-child) {\n    margin: 5px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n\n  .phone_number {\n    margin: 10px 0;\n  }\n"])));
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 24px;\n  transform: translate(-150%, 24%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    transform: translate(150%, 24%);\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
var InputBeforeIcon = exports.InputBeforeIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 14px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    right: 14px;\n    left: initial;\n  "])));
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 5px;\n\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n    margin: 10px 0;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var SubTitle = exports.SubTitle = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: ", ";\n  text-align: center;\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var ValidationText = exports.ValidationText = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.danger500;
});