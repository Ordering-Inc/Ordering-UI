"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxInformationContainer = exports.ProductContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TaxInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2{\n    font-size: 22px;\n    margin: 10px;\n    text-align: center;\n  }\n"])));
exports.TaxInformationContainer = TaxInformationContainer;
var ProductContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  > div{\n    border: 1px solid #E9ECEF;\n    cursor: initial;\n    @media (min-width: 681px){\n      width: calc(50% - 45px);\n    }\n\n  }\n"])));
exports.ProductContainer = ProductContainer;