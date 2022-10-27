"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Buttons = require("../../../../../styles/Buttons");
var _polished = require("polished");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FacebookButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #3B5998;\n  color: #FFF;\n  border-color: #EFEFEF;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  &:active {\n    background: ", ";\n  }\n  svg {\n    font-size: 28px;\n    color: #FFF;\n  }\n\n  div {\n    margin: 0 auto;\n    color: #FFF;\n  }\n"])), (0, _polished.darken)(0.07, '#3B5998'));
exports.FacebookButton = FacebookButton;