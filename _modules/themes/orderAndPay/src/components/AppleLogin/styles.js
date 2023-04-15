"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppleButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Buttons = require("../../styles/Buttons");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AppleButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #000000;\n  background: transparent;\n  border-radius: 7.6px;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  justify-content: space-around;\n\n  &: active {\n    background: ", ";\n  }\n\n  svg {\n    font-size: 16px;\n    color: #1977F2;\n  }\n\n  div {\n    width: 80%;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    @media (min-width: 576px) {\n      width: 50%;\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});
exports.AppleButton = AppleButton;