"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInfo = exports.ContentInfo = exports.BusinessTotal = exports.BusinessInfo = exports.BusinessActions = exports.AccordionText = exports.AccordionSection = exports.AccordionContent = exports.Accordion = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionSection = exports.AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  opacity: 1;\n\n  ", "\n\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: sticky;\n    top: 20px;\n  "])));
});
var Accordion = exports.Accordion = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: ", ";\n  transition: background-color 0.6s ease;\n  position: relative;\n  padding: 10px 0px;\n  box-sizing: border-box;\n\n  ", "\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n"])), function (_ref2) {
  var isClosed = _ref2.isClosed;
  return isClosed ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n  "])));
});
var ContentInfo = exports.ContentInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  width: 65%;\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    .go-store {\n      user-select: none;\n      text-decoration: underline;\n      color: ", ";\n      margin-right: 5px;\n      ", "\n    }\n\n    .clear-cart {\n      user-select: none;\n      text-decoration: underline;\n      color: #d81212;\n    }\n  }\n\n  .change-store {\n    cursor: pointer;\n    text-decoration: underline;\n    color: ", ";\n    font-size: 12px;\n    width: max-content;\n  }\n\n  ", "\n\n  h2, span {\n    margin: 0px;\n  }\n\n  h2 {\n    color: ", ";\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  @media (min-width: 576px) {\n    h2 {\n      font-size: 18px;\n    }\n    span {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n  "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
var AccordionContent = exports.AccordionContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: min-height 0.6s ease;\n"])));
var AccordionText = exports.AccordionText = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: auto;\n\n  h2 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 576px) {\n    width: 75%;\n  }\n\n"])));
var BusinessTotal = exports.BusinessTotal = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: none;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    font-size: 13px;\n    margin: 0px 5px;\n    font-weight: 300;\n\n    &:nth-child(1) {\n      font-weight: 500;\n    }\n  }\n\n  &.closed {\n    flex: 1;\n    p {\n      text-align: center;\n      margin: 0px 20px;\n      font-size: 13px;\n    }\n  }\n\n  @media (min-width: 481px) {\n    display: flex;\n  }\n"])), function (_ref3) {
  var isCartOnProductsList = _ref3.isCartOnProductsList;
  return isCartOnProductsList ? '30%' : '25%';
});
var BusinessActions = exports.BusinessActions = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-width: 30%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  span {\n    height: 22px;\n    svg {\n      font-size: 22px;\n    }\n\n    &:not(:last-child) {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  @media (min-width: 768px) {\n    span {\n      height: 27px;\n      svg {\n        font-size: 27px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});
var TimeInfo = exports.TimeInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 13px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});