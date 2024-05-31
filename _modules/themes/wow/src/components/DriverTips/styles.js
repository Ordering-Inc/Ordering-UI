"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCard = exports.DriverTipContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriverTipContainer = exports.DriverTipContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n"])));
var TipCard = exports.TipCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  padding: 10px;\n  border: 2px solid ", ";\n  cursor: pointer;\n  text-transform: capitalize;\n  height: 30px;\n  width: 30px;\n  font-size: 14px;\n  margin-bottom: 10px;\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    border-radius: 16px;\n    padding: 0px 30px;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
});