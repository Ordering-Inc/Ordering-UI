"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBlock = exports.Dot = exports.DescriptionBlock = exports.DateBlock = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  position: relative;\n  padding-left: 10px;\n"])));
var DateBlock = exports.DateBlock = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  span {\n    font-size: 14px;\n  }\n\n  span:first-child {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});
var MessageBlock = exports.MessageBlock = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 14px;\n"])));
var Dot = exports.Dot = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", "px;\n  left: -4px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (props) {
  return props.isTop ? 0 : 10;
}, function (props) {
  return props.theme.colors.darkGray;
});
var DescriptionBlock = exports.DescriptionBlock = (0, _styledComponents.default)(MessageBlock)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  span {\n    color: ", ";\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});