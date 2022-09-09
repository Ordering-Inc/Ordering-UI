"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrapAllCategories = exports.SubcategorySearchContainer = exports.ProductsListing = exports.ProductsContainer = exports.HeaderWrapper = exports.ErrorMessage = exports.DescriptionModalContainer = exports.DescriptionContainer = exports.CategoryDescription = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.ProductsContainer = ProductsContainer;

var ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var ProductsListing = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: ", ";\n"])), function (_ref) {
  var isSubcategorySearch = _ref.isSubcategorySearch;
  return isSubcategorySearch ? '0px' : '45px';
});

exports.ProductsListing = ProductsListing;

var WrapAllCategories = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  .category-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding-top: 5px;\n    padding-bottom: 12px;\n    margin-left: 10px;\n    color: #fff;\n    font-size: 26px;\n    ", "\n\n    img {\n      border-radius: 7.6px;\n      min-width: 41px;\n      min-height: 41px;\n      height: 41px;\n      width: 41px;\n      margin-right: 10px;\n      ", "\n    }\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n\n  h3 {\n    font-weight: bold;\n    font-size: 24px;\n    color: #fff;\n    margin: 0px 0px 0px 10px;\n    font-size: 32px;\n    font-family: 'TrajanPro-Bold', Arial, Helvetica;\n    text-transform: uppercase;\n    ", "\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin: 0px 10px 0px 0px;\n    "])));
});

exports.WrapAllCategories = WrapAllCategories;

var CategoryDescription = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-left: 15px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    p {\n      margin: 0;\n      color: #fff;\n      white-space: pre;\n      max-width: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    span {\n      color: ", ";\n      text-decoration: underline;\n      margin-left: 10px;\n      cursor: pointer;\n      white-space: nowrap;\n    }\n"])), function (_ref2) {
  var maxWidth = _ref2.maxWidth;
  return maxWidth ? "".concat(maxWidth - 200, "px") : 'initial';
}, function (props) {
  return props.theme.colors.primary;
});

exports.CategoryDescription = CategoryDescription;

var WrapperNotFound = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 500px;\n  > div{\n    height: 100%;\n  }\n"])));

exports.WrapperNotFound = WrapperNotFound;

var HeaderWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([""])));

exports.HeaderWrapper = HeaderWrapper;

var DescriptionModalContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n  img{\n    border-radius: 7.6px;\n    width: 200px;\n    height: 200px;\n    min-width: 200px;\n    min-height: 200px;\n    margin-bottom: 20px;\n  }\n"])));

exports.DescriptionModalContainer = DescriptionModalContainer;

var DescriptionContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  div{\n    height: 300px;\n    ::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n    }\n  }\n  p{\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n  }\n"])));

exports.DescriptionContainer = DescriptionContainer;

var SubcategorySearchContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 30px;\n"])));

exports.SubcategorySearchContainer = SubcategorySearchContainer;