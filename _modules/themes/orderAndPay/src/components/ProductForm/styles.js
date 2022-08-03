"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.Properties = exports.ProductTabContainer = exports.ProductShareWrapper = exports.ProductName = exports.ProductMeta = exports.ProductInfo = exports.ProductImage = exports.ProductFormTitle = exports.ProductEdition = exports.ProductDescription = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.PriceContent = exports.ModalIcon = exports.EstimatedPersons = exports.Divider = void 0;

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 100vh;\n  position: relative;\n  padding: 30px 20px 40px;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n\n  @media (min-width: 1201px) {\n    flex-wrap: nowrap;\n    overflow: auto;\n    max-height: 70vh;\n  }\n"])));

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% + 40px);\n  margin-top: 20px;\n  margin-left: -20px;\n  position: relative;\n  height: 320px;\n"])));

exports.WrapperImage = WrapperImage;

var ProductImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  img {\n    height: 100%;\n    box-sizing: border-box;\n    object-fit: cover;\n    width: 100%;\n  }\n"])));

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  padding: 0 20px;\n  box-sizing: border-box;\n  h1 {\n    font-weight: 600;\n    font-size: 16px;\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n\n  .price-wrapper {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 18px;\n      color: ", ";\n      margin-right: 5px;\n      ", "\n    }\n\n    .price-discount {\n      font-size: 14px;\n      color: #909BA9;\n    }\n  }\n  p {\n    font-size: 16px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 5px;\n      "])));
});

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n  padding: 0 20px;\n  margin-top: 20px;\n"])));

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 16px;\n  padding: 15px 0px;\n  margin: 0px;\n  font-weight: 600;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.darkTextColor;
});

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 130px;\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n  }\n"])));

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", ";\n  width: 100%;\n  box-sizing: border-box;\n  border-top: 1px solid #E9ECEF;\n  position: fixed;\n  bottom: -5px;\n  right: 0;\n  background-color: #FFF;\n\n  div.price {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  div.incdec-control {\n    width: 20%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    svg {\n      width: 16px;\n      height: 16px;\n      cursor: pointer;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n    color: #B1BCCC;\n  }\n\n  button.add {\n    width: 45%;\n    margin-top: 0;\n    padding: 5px 10px;\n    position: relative;\n    font-size: 14px;\n    &.soldout {\n      width: 70%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 769px){\n    position: relative;\n  }\n  @media (min-width: 1200px){\n    bottom: -21px;\n  }\n"])), function (_ref2) {
  var isIOS = _ref2.isIOS;
  return isIOS ? '10px 40px 20px' : '10px 40px';
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.darkTextColor;
});

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref3) {
  var width = _ref3.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));

exports.WrapperSubOption = WrapperSubOption;

var SkuContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.SkuContent = SkuContent;

var WrapperIngredients = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var isProductSoldout = _ref4.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var ProductTabContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: -20px;\n  border-bottom: 1px solid #E9ECEF;\n  ", " \n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.white;
  }) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background: #fff;\n  "])));
});

exports.ProductTabContainer = ProductTabContainer;

var Divider = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n"])));

exports.Divider = Divider;

var ProductShareWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 20px;\n  ", "\n\n  @media (max-width: 768px) {\n    > div {\n      right: 16px;\n      top: 33px;\n      left: auto;\n    }\n  }\n\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    padding-left: 20px;\n    padding-right: 0;\n  "])));
});

exports.ProductShareWrapper = ProductShareWrapper;

var ModalIcon = _styledComponents.default.span(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 25px;\n  top: 15px;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  width: 85%;\n  ", "\n  svg{\n    background: rgba(255,255,255,0.5);\n    border-radius: 50%;\n  }\n\n  h1{\n    font-size: 14px;\n    margin-left: 20px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  @media(min-width: 576px){\n    h1{\n      font-size: 16px;\n    }\n  }\n\n  @media(min-width: 769px){\n    position: absolute;\n    top: 0px;\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var ProductName = _styledComponents.default.h1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  line-height: 36px;\n  color: #344050;\n  margin-bottom: 10px;\n"])));

exports.ProductName = ProductName;

var Properties = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.Properties = Properties;

var ProductDescription = _styledComponents.default.p(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));

exports.ProductDescription = ProductDescription;

var PriceContent = _styledComponents.default.p(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 27px;\n  color: #344050;\n  margin: 0;\n"])));

exports.PriceContent = PriceContent;

var ProductMeta = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    font-size: 16px;\n    line-height: 24px;\n    color: #909BA9;\n  }\n"])));

exports.ProductMeta = ProductMeta;

var EstimatedPersons = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n\n"])));

exports.EstimatedPersons = EstimatedPersons;