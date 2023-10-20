"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperInput = exports.PaymentCashContainer = exports.FormCash = exports.ErrorText = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PaymentCashContainer = exports.PaymentCashContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n"])));
var FormCash = exports.FormCash = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  label {\n    font-size: 13px;\n    color: ", ";\n  }\n  @media (min-width: 411px) {\n    label {\n      font-size: 14px;\n      width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  input {\n    margin-top: 10px;\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 7px;\n  }\n"])));
var ErrorText = exports.ErrorText = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 10px 0px 0px;\n  color: #D81212;\n  font-size: 14px;\n  font-weight: bold;\n  @media (min-width: 381px) {\n    font-size: 20px;\n  }\n"])));