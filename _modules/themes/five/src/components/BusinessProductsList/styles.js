"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrapAllCategories = exports.SubCategoriesContainer = exports.RibbonBox = exports.ProductsListing = exports.ProductsContainer = exports.HeaderWrapper = exports.ErrorMessage = exports.DescriptionModalContainer = exports.DescriptionContainer = exports.ContainerButton = exports.CategoryDescription = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.ProductsContainer = ProductsContainer;

var ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var ProductsListing = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 45px;\n"])));

exports.ProductsListing = ProductsListing;

var WrapAllCategories = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  .category-title {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding-top: 5px;\n    padding-bottom: 12px;\n    margin-left: 10px;\n    ", "\n\n    img {\n      border-radius: 7.6px;\n      min-width: 41px;\n      min-height: 41px;\n      height: 41px;\n      width: 41px;\n      margin-right: 10px;\n      ", "\n    }\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n\n  h3 {\n    font-weight: 600;\n    font-size: 24px;\n    color: ", ";\n    margin: 0px 0px 0px 10px;\n    ", "\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n"])), function (props) {
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

exports.WrapAllCategories = WrapAllCategories;

var CategoryDescription = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-left: 15px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: flex-end;\n    p {\n      margin: 0;\n      color: #909BA9;\n      white-space: pre;\n      max-width: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    span {\n      color: ", ";\n      text-decoration: underline;\n      margin-left: 10px;\n      cursor: pointer;\n      white-space: nowrap;\n    }\n"])), function (_ref) {
  var maxWidth = _ref.maxWidth;
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

var RibbonBox = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 2px 8px;\n  box-sizing: border-box;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  background-color: ", ";\n  max-width: 200px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  margin-left: 5px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 5px;\n  "])));
}, function (_ref2) {
  var bgColor = _ref2.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref3) {
  var isRoundRect = _ref3.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref4) {
  var isCapsule = _ref4.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
});

exports.RibbonBox = RibbonBox;

var SubCategoriesContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.SubCategoriesContainer = SubCategoriesContainer;

var ContainerButton = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  button {\n    overflow: hidden;\n    margin-right: 10px;\n    margin-top: 10px;\n    border-radius: 50px;\n    color: ", ";\n  }\n"])), function (_ref5) {
  var isSelected = _ref5.isSelected;
  return isSelected ? '#fff' : '#414954';
});

exports.ContainerButton = ContainerButton;