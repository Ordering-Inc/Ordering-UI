"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.ProductTagsListContainer = exports.ProductTagWrapper = exports.ProductTabContainer = exports.ProductOptionInfo = exports.ProductInnerContainer = exports.ProductInfo = exports.ProductImage = exports.ProductFormTitle = exports.ProductEdition = exports.ProductContainer = exports.ProductComment = exports.ProductCartTotalPrice = exports.ProductActions = exports.ProductActionHeaderContainer = exports.IncDecActions = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 30px 0px;\n  ", "\n\n  @media (min-width: 681px) {\n    padding: 50px 0px;\n  }\n"])), function (_ref) {
  var isExistBottom = _ref.isExistBottom;
  return !isExistBottom && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: 130px;\n  "])));
});
exports.ProductContainer = ProductContainer;
var WrapperImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
exports.WrapperImage = WrapperImage;
var ProductImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 300px;\n  height: 300px;\n\n  > div {\n    position: absolute;\n    margin: 10px;\n    z-index: 1;\n  }\n\n  img {\n    object-fit: contain;\n    height: 100%;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n\n  @media (min-width: 1201px) {\n    img {\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n"])));
exports.ProductImage = ProductImage;
var ProductInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  position: relative;\n  margin-top: 10px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n\n  h4 {\n    font-size: 16px;\n    margin: 0 0 20px 0;\n    font-weight: 400;\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    margin-top: 0px;\n    line-height: 1.5em;\n    width: 100%;\n    text-align: left;\n    color: ", ";\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n\n    h4 {\n      font-size: 18px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 10px 0px;\n  }\n\n  @media (min-width: 1201px) {\n    top: 0;\n    margin-top: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});
exports.ProductInfo = ProductInfo;
var ProductFormTitle = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n  margin-top: 20px;\n\n  @media (min-width: 681px) {\n    margin-top: 50px;\n  }\n"])));
exports.ProductFormTitle = ProductFormTitle;
var ProductEdition = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n"])));
exports.ProductEdition = ProductEdition;
var ProductOptionInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  background-color: ", ";\n  padding: 20px 0 40px 0;\n"])), function (props) {
  return props.theme.colors.third;
});
exports.ProductOptionInfo = ProductOptionInfo;
var ProductInnerContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  max-width: 700px;\n  margin: 0 auto;\n"])));
exports.ProductInnerContainer = ProductInnerContainer;
var ProductCartTotalPrice = (0, _styledComponents.default)(ProductInnerContainer)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n  margin: 0px;\n  ", "\n  color: ", ";\n  font-weight: 500;\n  font-size: 16px;\n\n  ", "\n\n  span:first-child {\n    margin: 0 5px;\n  }\n\n  @media (min-width: 681px) {\n    ", "\n  }\n"])), function (_ref2) {
  var isMobile = _ref2.isMobile;
  return !isMobile && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 40px 0 20px 0;\n    margin: 0 auto;\n  "])));
}, function (props) {
  return props.theme.colors.grayDark;
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return !isMobile && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
}, function (_ref4) {
  var isMobile = _ref4.isMobile;
  return isMobile ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      display: none;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      display: flex;\n    "])));
});
exports.ProductCartTotalPrice = ProductCartTotalPrice;
var SectionTitle = _styledComponents.default.h3(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 18px;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  margin: 0px;\n  font-weight: 500;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.grayDark;
});
exports.SectionTitle = SectionTitle;
var ProductComment = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n"])));
exports.ProductComment = ProductComment;
var ProductActions = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n\n  position: fixed;\n  z-index: 1000;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n  > div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n  }\n\n  button.add {\n    width: 90%;\n    margin: 10px auto;\n    position: relative;\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 769px) {\n    button.add {\n      margin: 0px;\n      width: fit-content;\n    }\n    justify-content: space-between;\n    flex-direction: row;\n\n    > div {\n      flex-direction: row;\n      justify-content: flex-end;\n    }\n  }\n\n  @media (min-width: 769px) {\n    position: relative;\n    bottom: initial;\n    right: initial;\n\n    button.add {\n      margin: 0px;\n    }\n  }\n\n  @media (min-width: 1201px) {\n    position: sticky;\n    top: 100%;\n    padding: 10px 0px;\n  }\n"])));
exports.ProductActions = ProductActions;
var SkeletonBlock = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref5) {
  var width = _ref5.width;
  return width && "".concat(width, "%");
});
exports.SkeletonBlock = SkeletonBlock;
var WrapperSubOption = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));
exports.WrapperSubOption = WrapperSubOption;
var SkuContent = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 0px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n"])));
exports.SkuContent = SkuContent;
var WrapperIngredients = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref6) {
  var isProductSoldout = _ref6.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});
exports.WrapperIngredients = WrapperIngredients;
var IncDecActions = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n  border-radius: 30px;\n  button {\n    cursor: pointer;\n    outline: none;\n    height: 42px;\n    border: none;\n    font-size: 24px;\n    background: #FFF;\n    transition: all .3s ease-in-out;\n    padding: 0 20px;\n\n    &:active {\n      background: ", ";\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  button.decrease {\n    color: ", ";\n    ", "    \n  }\n  \n  button.increase {\n    color: ", ";\n    ", "\n  }\n\n  span {\n    min-width: 50px;\n    height: 42px;\n    color: ", ";\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  @media (min-width: 769px) {\n    ", "\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#FFF');
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      border-radius: 0 30px 30px 0;\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  }) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      border-radius: 30px 0 0 30px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  });
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      border-radius: 30px 0 0 30px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  }) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      border-radius: 0 30px 30px 0;\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  });
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
exports.IncDecActions = IncDecActions;
var ProductActionHeaderContainer = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  margin: 10px 0;\n\n  @media (min-width: 681px) {\n    margin: 0px;\n    width: initial;\n  }\n"])));
exports.ProductActionHeaderContainer = ProductActionHeaderContainer;
var ProductTabContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0px;\n  background: white;\n  z-index: 900;\n  padding-top: 15px;\n  border-bottom: 1px solid #E9ECEF;\n\n  > div {\n    max-width: 700px;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 769px) {\n    top: 0;\n  }\n"])));
exports.ProductTabContainer = ProductTabContainer;
var ProductTagsListContainer = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
exports.ProductTagsListContainer = ProductTagsListContainer;
var ProductTagWrapper = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      margin: 0 20px 0 10px;\n    "])));
});
exports.ProductTagWrapper = ProductTagWrapper;