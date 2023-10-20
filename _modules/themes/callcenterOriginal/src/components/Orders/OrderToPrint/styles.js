"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PrintContainer = exports.PrintContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n  padding: 80px 50px;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  @media print {\n    display: block;\n\n    @page { size: portrait; }\n  }\n"])));