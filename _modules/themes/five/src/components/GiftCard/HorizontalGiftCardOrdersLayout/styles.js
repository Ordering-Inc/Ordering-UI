"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsListContainer = exports.ProductsList = exports.PaginationWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  display: flex;\n  overflow: scroll hidden;\n"])));
exports.ProductsListContainer = ProductsListContainer;
var ProductsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n\n  .product-card {\n    width: 270px;\n    max-width: 270px;\n    margin: 10px;\n    border: 1px solid #E9ECEF;\n  }\n\n  @media(min-width: 480px){\n    .product-card {\n      width: 400px;\n      max-width: 400px;\n    }\n  }\n"])));
exports.ProductsList = ProductsList;
var PaginationWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n"])));
exports.PaginationWrapper = PaginationWrapper;