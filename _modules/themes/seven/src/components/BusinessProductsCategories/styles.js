"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesContainer = exports.AccordionPanel = exports.Accordion = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CategoriesContainer = exports.CategoriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 5px;\n  background: ", ";\n  z-index: 1000;\n  ", "\n  div.special{\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    padding: 0px 15px;\n  }\n\n  /* width */\n  &::-webkit-scrollbar {\n    width: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref) {
  var isVerticalList = _ref.isVerticalList;
  return isVerticalList && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0px;\n    @media (min-width: 768px) {\n      position: sticky;\n      top: 0;\n      height: 100vh;\n      overflow-y: scroll;\n    }\n  "])));
}, function (props) {
  return !props.featured && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: none;\n    "])));
});
var Accordion = exports.Accordion = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n  border: 1px solid ", ";\n  border-top: none;\n  border-bottom: 1px solid ", ";\n  box-sizing: border-box;\n  padding: 0 15px;\n  text-transform: uppercase;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  svg {\n    display: inline-flex;\n    position: absolute;\n    top: 0px;\n    right: -12px;\n    ", "\n  }\n  &:hover {\n    color: ", ";\n    background-color: #fafafa;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: unset;\n      left: -12px;\n      transform: rotate(180deg);\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
var AccordionPanel = exports.AccordionPanel = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #F6EFEA;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border: 1px solid ", ";\n  border-top: none;\n  font-size: 15px;\n  ul {\n    width: 100%;\n    padding-left: 0;\n    list-style: none;\n    margin: 0;\n    li {\n      box-sizing: border-box;\n      padding: 10px 15px;\n      padding-left: 30px;\n      width: 100%;\n      white-space: nowrap;\n      &.active {\n        color: ", ";\n      }\n      &:hover {\n        color: ", ";\n        font-weight: 500;\n      }\n      &:first-child {\n        padding-top: 12px;\n      }\n      &:last-child {\n        padding-bottom: 12px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});