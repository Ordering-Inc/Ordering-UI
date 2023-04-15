"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormController = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 25px 20px;\n  h2 {\n    font-size: 20px;\n    font-weight: 600;\n    margin-top: 0;\n    margin-bottom: 32px;\n  }\n  > button {\n    height: 44px;\n    margin-top: 30px;\n  }\n"])));
exports.Container = Container;
var FormController = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n"])));
exports.FormController = FormController;