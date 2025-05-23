"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationContainer = exports.PaginationButtonContainer = exports.PageSizeTitle = exports.PageSizeContainer = exports.PageButton = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var PaginationContainer = exports.PaginationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"])));
var PaginationButtonContainer = exports.PaginationButtonContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
var PageButton = exports.PageButton = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-size: 14px;\n  color: ", ";\n  outline: none;\n  border: none;\n  border-radius: 27px;\n  min-width: 27px;\n  min-height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 7px;\n\n  ", "\n\n  &:hover {\n    background-color: #1507260a;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &:active {\n    background-color: #1507261a;\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 3px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 3px;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var noEffect = _ref2.noEffect;
  return noEffect && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    cursor: initial;\n    &:hover {\n      background-color: transparent;\n    }\n    &:active {\n      background-color: transparent;\n    }\n  "])));
});
var PageSizeContainer = exports.PageSizeContainer = _styledComponents.default.div(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n\n  .select {\n    border-color: ", ";\n    padding: 5px 0;\n\n    > div:first-child {\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var PageSizeTitle = exports.PageSizeTitle = _styledComponents.default.p(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["\n  margin: 0px;\n  color: ", ";\n  font-size: 12px;\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
var Option = exports.Option = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});