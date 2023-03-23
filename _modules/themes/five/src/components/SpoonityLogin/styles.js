"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpoonityContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SpoonityContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  button{\n    line-height: 0;\n    padding: 0;\n    height: 42px;\n    width: 100%;\n  }\n"])));
exports.SpoonityContainer = SpoonityContainer;