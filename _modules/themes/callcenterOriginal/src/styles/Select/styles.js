"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  border-radius: 7.6px;\n  border-style: solid;\n  border-color: #1C202E;\n  border: 1px solid #CCC;\n  padding: 7px 0;\n"])));
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 1001;\n"])));