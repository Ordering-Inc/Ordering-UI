"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperPageState = exports.PageButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n"])));
var PageButton = exports.PageButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  outline: none;\n  border: 1px solid #00000029;\n  border-radius: 100%;\n  background: transparent;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin: 0 5px;\n\n  &:active {\n    background: #1c202e;\n    color: #fff;\n  }\n  &:disabled {\n    cursor: no-drop;\n    pointer-events: none;\n  }\n"])));
var WrapperPageState = exports.WrapperPageState = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  min-width: 140px;\n"])));