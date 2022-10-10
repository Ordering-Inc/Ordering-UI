"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.SearchContainer = exports.PreviousOrders = exports.OrderProgressWrapper = exports.ItemInline = exports.HightestRatedWrapper = exports.FeatureItems = exports.ErrorMessage = exports.Divider = exports.CityItem = exports.BusinessesTitle = exports.BusinessSearch = exports.BusinessLogosContainer = exports.BusinessLogo = exports.BusinessList = exports.BusinessHeroImgStyled = exports.BusinessHeroImg = exports.BusinessFeatures = exports.BusinessContainer = exports.BusinessCityList = exports.BusinessBanner = exports.AddressMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
exports.BusinessContainer = BusinessContainer;
var BusinessBanner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n  position: relative;\n  @media (max-width: 481px) {\n    margin-bottom: 0px;\n  }\n"])));
exports.BusinessBanner = BusinessBanner;
var BusinessFeatures = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10%;\n  width: 100%;\n  padding: 0 15px;\n  box-sizing: border-box;\n"])));
exports.BusinessFeatures = BusinessFeatures;
var AddressMenu = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  color: #344050;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 13px 19px;\n  margin-bottom: 10px;\n  svg {\n    margin-right: 5px;\n    color: #B1BCCC;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0;\n    "])));
});
exports.AddressMenu = AddressMenu;
var FeatureItems = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));
exports.FeatureItems = FeatureItems;
var ItemInline = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  > span #select-input {\n    background-color: #F8F9FA !important;\n    border: none;\n    border-radius: 7.6px;\n    svg {\n      font-size: 14px;\n    }\n    #list {\n      background-color: #fff;\n      border: none;\n      border-radius: 7.6px;\n\n      left: 0px;\n      right: initial;\n\n      ", "\n    }\n\n    > div:first-child {\n      font-size: 11px;\n    }\n  }\n\n  .moment-popover {\n    > div:first-child {\n      font-size: 11px;\n      padding: 4px 7px;\n      svg {\n        font-size: 14px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        left: initial;\n        right: 0px;\n      "])));
});
exports.ItemInline = ItemInline;
var BusinessSearch = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: flex;\n    background-color: #f8f9fa;\n    align-items: center;\n    padding: 7px;\n    border-radius: 7px;\n    font-size: 11px;\n    svg {\n      font-size: 15px;\n    }\n"])));
exports.BusinessSearch = BusinessSearch;
var BusinessList = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
exports.BusinessList = BusinessList;
var WrapperSearch = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n  display: flex;\n  justify-content: flex-end;\n\n  svg{\n    align-self: center;\n    cursor: pointer;\n    font-size: 26px;\n    color: ", ";\n    margin-left: 10px;\n  }\n  button {\n    width: 250px;\n    margin-left: 10px;\n  }\n  ", "\n"])), function (props) {
  var _props$theme2, _props$theme2$colors;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primary;
}, function (_ref) {
  var isCustomLayout = _ref.isCustomLayout,
    isCustomerMode = _ref.isCustomerMode;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n    ", "\n    svg {\n      align-self: auto;\n    }\n    \n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), isCustomerMode ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin: 0 auto;\n    "]))));
});
exports.WrapperSearch = WrapperSearch;
var ErrorMessage = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
exports.ErrorMessage = ErrorMessage;
var PreviousOrders = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
exports.PreviousOrders = PreviousOrders;
var BusinessesTitle = _styledComponents.default.h1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    font-size: 18px;\n    margin: 0px 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 24px;\n    color: ", ";\n    margin: 42px 20px 5px 20px;\n  "])), function (props) {
    var _props$theme3;
    return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
  });
});
exports.BusinessesTitle = BusinessesTitle;
var BusinessHeroImgStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  width: 100%;\n  height: calc(65vh - 98px);\n\n  ", "\n  @media (min-width: 450px) {\n    height: 370px;\n  }\n\n  @media (min-width: 821px) {\n    height: ", ";\n  }\n"])), function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref4) {
  var height = _ref4.height;
  return height || '650px';
});
exports.BusinessHeroImgStyled = BusinessHeroImgStyled;
var BusinessHeroImg = function BusinessHeroImg(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(BusinessHeroImgStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessHeroImg = BusinessHeroImg;
var HightestRatedWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 50px 0 30px 0;\n"])));
exports.HightestRatedWrapper = HightestRatedWrapper;
var Divider = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n"])));
exports.Divider = Divider;
var OrderProgressWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  padding: 45px 20px;\n"])));
exports.OrderProgressWrapper = OrderProgressWrapper;
var SearchContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.SearchContainer = SearchContainer;
var BusinessCityList = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  \n"])));
exports.BusinessCityList = BusinessCityList;
var CityItem = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px 0px;\n  border-top: 1px solid #E9ECEF;\n  cursor: pointer;\n  span {\n    margin-right: 15px;\n  }\n  .city-checked{\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.CityItem = CityItem;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  min-width: 75px;\n  min-height: 75px;\n  height: 75px;\n  width: 75px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n  margin-right: 15px;\n  cursor: pointer;\n"])));
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessLogosContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow: auto;\n  padding-bottom: 10px;\n  span {\n    margin-right: 15px;\n  }\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n"])));
exports.BusinessLogosContainer = BusinessLogosContainer;