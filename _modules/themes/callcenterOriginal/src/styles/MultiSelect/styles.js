"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CheckBox = exports.CheckBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  svg {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});