"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeWrapper = exports.DeliveryTimeContainer = exports.AddressContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DeliveryTimeContainer = exports.DeliveryTimeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 10px;\n\n  > button {\n    font-weight: 600;\n  }\n"])));
var TimeWrapper = exports.TimeWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 10px 0;\n\n  span:first-child {\n    color: ", ";\n  }\n\n  span:not(:first-child) {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});
var AddressContainer = exports.AddressContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h1 {\n    color: ", ";\n    font-size: 18px;\n    font-weight: 600;\n    margin: 10px 0;\n  }\n\n  p {\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});