"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTips = exports.WrapperInput = exports.TipCard = exports.FormDriverTip = exports.DriverTipMessage = exports.DriverTipContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriverTipContainer = exports.DriverTipContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  width: 100%;\n"])));
var TipCard = exports.TipCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  width: 62px;\n  height: 62px;\n  min-width: 62px;\n  cursor: pointer;\n  text-transform: capitalize;\n  font-size: 14px;\n  color: #B1BCCC;\n  transition: all 0.3s;\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});
var FormDriverTip = exports.FormDriverTip = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n\n  input {\n    width: 65%;\n    padding: 4px 15px;\n    box-sizing: border-box;\n    flex: 1;\n    margin-right: 10px;\n  }\n\n  @media (min-width: 768px) {\n    input {\n      width: 80%;\n    }\n  }\n"])));
var DriverTipMessage = exports.DriverTipMessage = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 600;\n"])), function (props) {
  return props.theme.colors.primary;
});
var WrapperTips = exports.WrapperTips = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n  > div {\n    margin: 5px;\n  }\n"])));