"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperInput = exports.InsertLinkContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var InsertLinkContainer = exports.InsertLinkContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 25px;\n  }\n\n  > button {\n    height: 42px;\n  }\n"])));
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n\n  label {\n    font-size: 14px;\n  }\n"])));