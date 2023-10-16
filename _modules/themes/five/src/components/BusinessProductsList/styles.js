"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrapAllCategories = exports.SubcategorySearchContainer = exports.SubCategoriesInnerContainer = exports.SubCategoriesContainer = exports.RibbonBox = exports.ProductsListing = exports.ProductsContainer = exports.PreviouslyOrderedWrapper = exports.PreviouslyOrderedContainer = exports.HeaderWrapper = exports.ErrorMessage = exports.DescriptionModalContainer = exports.DescriptionContainer = exports.ContainerButton = exports.CategoryDescription = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsContainer = exports.ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var ProductsListing = exports.ProductsListing = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: ", ";\n"])), function (_ref) {
  var isSubcategorySearch = _ref.isSubcategorySearch;
  return isSubcategorySearch ? '0px' : '45px';
});
var WrapAllCategories = exports.WrapAllCategories = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  .category-title {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding-top: 5px;\n    padding-bottom: 12px;\n    margin-left: 10px;\n    ", "\n\n    img {\n      border-radius: 7.6px;\n      min-width: 41px;\n      min-height: 41px;\n      height: 41px;\n      width: 41px;\n      margin-right: 10px;\n      ", "\n    }\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n\n  h3 {\n    font-weight: 600;\n    font-size: 24px;\n    color: ", ";\n    margin: 0px 0px 0px 10px;\n    ", "\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.darkTextColor;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin: 0px 10px 0px 0px;\n    "])));
});
var CategoryDescription = exports.CategoryDescription = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-left: 15px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: flex-end;\n    p {\n      margin: 0;\n      color: #909BA9;\n      white-space: pre;\n      max-width: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    span {\n      color: ", ";\n      margin-left: 10px;\n      cursor: pointer;\n      white-space: nowrap;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n"])), function (_ref2) {
  var maxWidth = _ref2.maxWidth;
  return maxWidth ? "".concat(maxWidth - 200, "px") : 'initial';
}, function (props) {
  return props.theme.colors.primary;
});
var WrapperNotFound = exports.WrapperNotFound = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 500px;\n  > div{\n    height: 100%;\n  }\n"])));
var HeaderWrapper = exports.HeaderWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([""])));
var DescriptionModalContainer = exports.DescriptionModalContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n  img{\n    border-radius: 7.6px;\n    width: 200px;\n    height: 200px;\n    min-width: 200px;\n    min-height: 200px;\n    margin-bottom: 20px;\n  }\n"])));
var DescriptionContainer = exports.DescriptionContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  div{\n    height: 300px;\n    ::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n    }\n  }\n  p{\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n  }\n"])));
var RibbonBox = exports.RibbonBox = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 2px 8px;\n  box-sizing: border-box;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  background-color: ", ";\n  max-width: 200px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  margin-left: 5px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 5px;\n  "])));
}, function (_ref3) {
  var bgColor = _ref3.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref4) {
  var isRoundRect = _ref4.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref5) {
  var isCapsule = _ref5.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
});
var SubCategoriesContainer = exports.SubCategoriesContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  margin-top: 10px;\n  width: 100%;\n  ::-webkit-scrollbar {\n      opacity: 0;\n  }\n  @media (min-width: 993px) {\n    width: calc(100% - 30px);\n  }\n"])));
var SubCategoriesInnerContainer = exports.SubCategoriesInnerContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var ContainerButton = exports.ContainerButton = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  button {\n    white-space: nowrap;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    margin-right: 10px;\n    border-radius: 50px;\n\n    svg {\n      margin-left: 5px;\n      font-size: 13px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
});
var SubcategorySearchContainer = exports.SubcategorySearchContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 30px;\n"])));
var PreviouslyOrderedContainer = exports.PreviouslyOrderedContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    display: flex;\n    overflow: scroll hidden;\n    ::-webkit-scrollbar {\n      width: 0px;\n      height: 0px;\n    }\n"])));
var PreviouslyOrderedWrapper = exports.PreviouslyOrderedWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n\n  .product-card {\n    width: 270px;\n    max-width: 270px;\n  }\n\n"])));