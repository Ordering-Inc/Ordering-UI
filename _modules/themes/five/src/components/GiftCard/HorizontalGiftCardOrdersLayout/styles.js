"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsListContainer = exports.ProductsList = exports.PaginationWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ProductsListContainer = exports.ProductsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  display: flex;\n  overflow: scroll hidden;\n"])));
var ProductsList = exports.ProductsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n\n  .product-card {\n    width: 270px;\n    max-width: 270px;\n    margin: 10px;\n    border: 1px solid #E9ECEF;\n  }\n\n  @media(min-width: 480px){\n    .product-card {\n      width: 400px;\n      max-width: 400px;\n    }\n  }\n"])));
var PaginationWrapper = exports.PaginationWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n"])));