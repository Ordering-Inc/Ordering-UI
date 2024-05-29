"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundContent = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var NotFoundContent = exports.NotFoundContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    color: ", ";\n    margin: 0px;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n  }\n\n  p {\n    color: ", ";\n    text-align: center;\n  }\n\n  button {\n    font-weight: 600;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin-top: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});