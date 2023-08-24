"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UreadMessageAlert = exports.StripeLink = exports.PrinterSelectContainer = exports.PrinterSelect = exports.OrderDetailsHeaderContainer = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderDetailsHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n    h1 {\n      width: 100%;\n      font-size: 20px;\n      margin: 0px;\n      font-weight: 700;\n    }\n    h2 {\n      width: 100%;\n      font-size: 18px;\n      margin: 0px;\n      font-weight: 700;\n    }\n    > div {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      margin-bottom: 20px;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0px;\n    padding: 5px 0;\n  }\n\n  @media (min-width: 768px) {\n    > div {\n      flex-direction: row;\n      align-items: center;\n    }\n    > div {\n      > div {\n        margin-bottom: 0px;\n      }\n    }\n  }\n"])));
exports.OrderDetailsHeaderContainer = OrderDetailsHeaderContainer;
var ButtonGroup = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > button {\n    position: relative;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n      "])));
});
exports.ButtonGroup = ButtonGroup;
var UreadMessageAlert = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -9px;\n\n  ", "\n  svg {\n    font-size: 40px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: -13px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    right: -13px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.UreadMessageAlert = UreadMessageAlert;
var StripeLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.StripeLink = StripeLink;
var PrinterSelectContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-right: 8px;\n"])));
exports.PrinterSelectContainer = PrinterSelectContainer;
var PrinterSelect = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  border: 1px solid ", ";\n\n  button {\n    padding: 10px 20px;\n    color: ", ";\n    &:hover {\n      background-color: #f5f5f5;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.textGray;
}, function (props) {
  return props.theme.colors.textGray;
});
exports.PrinterSelect = PrinterSelect;