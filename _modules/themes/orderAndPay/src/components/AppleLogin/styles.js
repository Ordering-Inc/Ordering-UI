"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppleButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Buttons = require("../../styles/Buttons");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AppleButton = exports.AppleButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #000000;\n  background: transparent;\n  border-radius: 7.6px;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  justify-content: space-around;\n\n  &: active {\n    background: ", ";\n  }\n\n  svg {\n    font-size: 16px;\n    color: #1977F2;\n  }\n\n  div {\n    width: 80%;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    @media (min-width: 576px) {\n      width: 50%;\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});