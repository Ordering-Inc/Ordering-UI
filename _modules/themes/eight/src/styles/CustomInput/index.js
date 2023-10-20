"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CustomInputContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  > span {\n    font-size: 12px;\n    color: ", ";\n    position: absolute;\n    top: 10px;\n    ", "\n  }\n\n  > input,\n  > textarea {\n    width: 100%;\n    border: 2px solid ", ";\n    padding: 32px 20px 10px 20px;\n    box-sizing: border-box;\n    font-size: 14px;\n    border-radius: 7.6px;\n    outline: none;\n    color: ", ";\n\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  > textarea {\n    resize: none;\n  }\n\n  @media (min-width: 768px) {\n    span {\n      top: 15px;\n      font-size: 14px;\n    }\n    > input,\n    > textarea {\n      padding: 40px 20px 10px 20px;\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayMedium;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-right: 22px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 22px;\n    "])));
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.secundary;
});
var CustomInput = exports.CustomInput = function CustomInput(props) {
  var placeholder = props.placeholder;
  return /*#__PURE__*/_react.default.createElement(CustomInputContainer, null, /*#__PURE__*/_react.default.createElement("span", null, placeholder), props.children);
};