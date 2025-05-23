"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoscrollContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AutoscrollContainer = exports.AutoscrollContainer = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  width: ", ";\n  \n  svg {\n    background: #D9D9D9;\n    display: inline-block;\n    border-radius: 50%;\n    width: 16px;\n    min-width: 16px;\n    height: 16px;\n    align-self: center;\n    top: ", ";\n    position: sticky;\n    color: #000000;\n    border: 1px solid #D9D9D9;\n    opacity: 0.8;\n  }\n\n  .right-autoscroll{\n    ", "\n  }\n  .left-autoscroll{\n    ", "    \n  }\n  svg:active{\n    border: 0\n  }\n  svg.hidden{\n    opacity: 0;\n  }\n\n  @media (min-width: 480px){\n    .right-autoscroll{\n    ", "\n   }\n    .left-autoscroll{\n      ", "\n    }\n  }\n\n  @media (min-width: 768px){\n    width: ", ";\n    display: inherit;\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    .right-autoscroll{\n      ", "\n    }\n      .left-autoscroll{\n        ", "\n    }\n  }\n"])), function (props) {
  return props.modal ? 'flex' : 'inherit';
}, function (props) {
  return props.modal ? '300vw' : 'initial';
}, function (props) {
  return props.modal ? '35%' : '0';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      left: 91%;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      right: 1%;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 91%;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 1%;\n    "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: 94%;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        right: 94%;\n      "])));
}, function (props) {
  return props.modal && '100%';
}, function (props) {
  return props.modal && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      .left-autoscroll{\n        opacity: 0;\n      }\n      .right-autoscroll{\n        opacity: 0;\n      }\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        left: 97%;\n      "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["\n          right: 97%;\n        "])));
});