"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperInput = exports.InsertLinkContainer = exports.CheckboxWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var InsertLinkContainer = exports.InsertLinkContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 25px;\n  }\n\n  > button {\n    height: 42px;\n  }\n"])));
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  label {\n    font-size: 14px;\n  }\n"])));
var CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n\n  > span {\n    margin: 0 10px;\n    font-size: 14px;\n  }  \n"])));