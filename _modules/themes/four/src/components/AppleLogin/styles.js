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
var AppleButton = exports.AppleButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #EFEFEF;\n  border-color: #EFEFEF;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  svg {\n    font-size: 28px;\n    color: #555555;\n  }\n\n  div {\n    margin: 0 auto;\n    font-size: 16px;\n  }\n"])));