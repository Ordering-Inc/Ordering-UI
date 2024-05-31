"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexTabs = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FlexTabs = exports.FlexTabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  div{\n    justify-content: space-evenly\n  }\n  \n  a{\n    text-decoration: none;\n    color: inherit;\n  }\n\n  svg{\n    position: relative;\n    top: 2px;\n  }\n\n  @media (min-width: 480px){\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 768px){\n    width: 50%;\n  }\n"])));