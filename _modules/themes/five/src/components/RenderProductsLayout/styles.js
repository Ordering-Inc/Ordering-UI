"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAbsolute = exports.WrapperSearch = exports.WrappLayout = exports.WrapContent = exports.Title = exports.ProfessionalFilterWrapper = exports.PageBannerWrapper = exports.NearBusiness = exports.MobileCartViewWrapper = exports.EmptyCart = exports.EmptyBtnWrapper = exports.BusinessContent = exports.BusinessCategoryProductWrapper = exports.BusinessCategoriesContainer = exports.BusinessCartContent = exports.BusinessCartContainer = exports.BackButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Title = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-top: 0;\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Title = Title;
var WrappLayout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.WrappLayout = WrappLayout;
var WrapContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  ", "\n\n  @media (min-width: 576px) {\n    padding: 0px;\n  }\n\n  &#businessProductList {\n    > div {\n      margin-top: 30px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref) {
  var isGroceries = _ref.isGroceries;
  return !isGroceries && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-top: 70px;\n  "])));
});
exports.WrapContent = WrapContent;
var BusinessContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 993px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.isCustomLayout ? 0 : 30;
});
exports.BusinessContent = BusinessContent;
var BusinessCategoryProductWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .category-lists::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .category-lists {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  @media (min-width: 1000px) {\n    width: 70%;\n  }\n"])));
exports.BusinessCategoryProductWrapper = BusinessCategoryProductWrapper;
var BusinessCategoriesContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-right: 10px;\n  width: 100%;\n  ", "\n  @media (min-width: 993px) {\n    width: calc(31% - 25px);\n  }\n"])), function (props) {
  return !props.offSticky && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    top: 65px;\n    position: sticky;\n  "])));
});
exports.BusinessCategoriesContainer = BusinessCategoriesContainer;
var BusinessCartContainer = (0, _styledComponents.default)(BusinessCategoriesContainer)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: none;\n  margin-top: 70px;\n  min-width: 325px;\n  height: fit-content;\n  @media (min-width: 769px) {\n    ", "\n  }\n  @media (min-width: 1000px) and (min-height: 600px) {\n    display: block;\n  }\n"])), function (_ref2) {
  var isProfessional = _ref2.isProfessional;
  return isProfessional && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-top: 0px;\n    "])));
});
exports.BusinessCartContainer = BusinessCartContainer;
var BusinessCartContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 30px;\n  position: relative;\n  margin-bottom: 30px;\n  max-height: ", ";\n  overflow: auto;\n\n  .product.accordion {\n    margin: 0;\n  }\n\n  /* .accordion.active {\n    padding-bottom: 10px;\n  } */\n\n  ", "\n\n  @media (min-width: 1200px) {\n    position: sticky;\n    top: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 35px 30px;\n  }\n"])), function (_ref3) {
  var maxHeight = _ref3.maxHeight;
  return "".concat(maxHeight, "px");
}, function (_ref4) {
  var isModal = _ref4.isModal;
  return !isModal && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border: 1px solid #E9ECEF;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    border-radius: 7.6px;\n  "])));
});
exports.BusinessCartContent = BusinessCartContent;
var EmptyCart = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #B1BCCC;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));
exports.EmptyCart = EmptyCart;
var EmptyBtnWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border: 1px solid #F8F9FA;\n    border-radius: 7.6px;\n    height: 44px;\n    font-size: 14px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.EmptyBtnWrapper = EmptyBtnWrapper;
var MobileCartViewWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  padding: 10px 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  z-index: 1000;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  button {\n    height: 44px;\n    border-radius: 7.6px;\n  }\n"])));
exports.MobileCartViewWrapper = MobileCartViewWrapper;
var WrapperSearch = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n    input {\n      width: 100%;\n\n      @media (min-width: 500px) {\n        width: 250px;\n      }\n    }\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});
exports.WrapperSearch = WrapperSearch;
var ProfessionalFilterWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding-bottom: 35px;\n  ", "\n"])), function (_ref5) {
  var isTop = _ref5.isTop;
  return isTop && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-top: 30px;\n  "])));
});
exports.ProfessionalFilterWrapper = ProfessionalFilterWrapper;
var WrapperSearchAbsolute = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 5px;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 40px;\n  height: 52px;\n  background-color: ", ";\n  box-sizing: border-box;\n  padding-bottom: 5px;\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.WrapperSearchAbsolute = WrapperSearchAbsolute;
var NearBusiness = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.NearBusiness = NearBusiness;
var PageBannerWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  > div {\n    border-radius: 8px;\n  }\n"])));
exports.PageBannerWrapper = PageBannerWrapper;
var BackButton = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    svg {\n      margin-right: 10px;\n    }\n  }\n"])));
exports.BackButton = BackButton;