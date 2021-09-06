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

var AppleButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #000000;\n  background: transparent;\n  border-radius: 7.6px;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  justify-content: space-around;\n\n  &:active {\n    background: ", ";\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n\n  div {\n    width: 80%;\n    text-align: left;\n\n    @media (min-width: 576px) {\n      width: 50%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});
exports.AppleButton = AppleButton;