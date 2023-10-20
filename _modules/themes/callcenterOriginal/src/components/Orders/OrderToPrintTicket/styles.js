"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Products = exports.ProductComments = exports.ProdcutCommentsContainer = exports.PrintTextContainer = exports.PrintProductsContainer = exports.PrintProducts = exports.PrintContainer = exports.InsideInfo2 = exports.InsideInfo = exports.InfoContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PrintContainer = exports.PrintContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n  font-family: arial !important;\n  color: #000 !important;\n  padding: 80px 50px;\n  max-width: 420px;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  @media print {\n    display: block;\n\n    @page { size: portrait; }\n  }\n"])));
var PrintTextContainer = exports.PrintTextContainer = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 16px\n"])));
var PrintProductsContainer = exports.PrintProductsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction:column;\n"])));
var PrintProducts = exports.PrintProducts = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flexDirection:row;\n  flex-wrap:wrap;\n"])));
var Products = exports.Products = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display:flex;\n  width:100%;\n"])));
var ProdcutCommentsContainer = exports.ProdcutCommentsContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  width:100%;\n"])));
var ProductComments = exports.ProductComments = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-left: 10px;\n"])));
var InfoContainer = exports.InfoContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var InsideInfo = exports.InsideInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display:flex;\n  justify-content: flex-start;\n  font-size: 16px;\n  width: 70%\n  font-weight: bold\n"])));
var InsideInfo2 = exports.InsideInfo2 = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display:flex;\n  justify-content: flex-end;\n  font-size: 16px;\n  width: 30%\n"])));