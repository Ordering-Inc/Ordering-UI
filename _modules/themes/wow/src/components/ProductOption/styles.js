"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapHeader = exports.Title = exports.Flag = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.error {\n    background-color: orange;\n  }\n"])));
var WrapHeader = exports.WrapHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #FFF;\n"])));
var Title = exports.Title = _styledComponents.default.h3(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 70%;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
var Flag = exports.Flag = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 13px;\n  margin: 0px;\n  text-transform: capitalize;\n  color: #A52121;\n  font-weight: 500;\n\n  @media (min-width: 381px) {\n    font-size: 14px;\n  }\n"])));