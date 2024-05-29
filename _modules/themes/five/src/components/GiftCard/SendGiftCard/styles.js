"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormController = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 25px 20px;\n  h2 {\n    font-size: 20px;\n    font-weight: 600;\n    margin-top: 0;\n    margin-bottom: 32px;\n  }\n  > button {\n    height: 44px;\n    margin-top: 30px;\n  }\n"])));
var FormController = exports.FormController = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n"])));