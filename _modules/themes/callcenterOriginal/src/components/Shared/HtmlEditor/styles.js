"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperEditor = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperEditor = exports.WrapperEditor = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .note-editor {\n    border-radius: 8px;\n    border: 1px solid ", ";\n\n    .note-toolbar {\n      border-bottom: 1px solid ", ";\n    }\n\n    .note-btn {\n      &:hover,\n      &:focus {\n        background-color: ", ";\n        box-shadow: none;\n      }\n    }\n\n    .note-dropdown-menu {\n      a {\n        color: #000;\n      }\n\n      h1 {\n        font-size: 36px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryDarkContrast;
});