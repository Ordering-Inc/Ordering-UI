"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TagsContainer = exports.SortItem = exports.SortContainer = exports.SingleBusinessSearch = exports.SearchBarContainer = exports.ProgressContentWrapper = exports.ProgressBar = exports.ProductsList = exports.PriceFilterWrapper = exports.PriceFilterListWrapper = exports.PreviouslyOrderedContainer = exports.NotFoundWrapper = exports.NoResult = exports.Metadata = exports.MaxItemContainer = exports.MaxItem = exports.MaxFilterContainer = exports.FiltersResultContainer = exports.FiltersContainer = exports.Filters = exports.BusinessesTitle = exports.BusinessProductsListWrapper = exports.BusinessProductsListContainer = exports.BusinessName = exports.BusinessLogo = exports.BusinessListingSearchContainer = exports.BusinessListWrapper = exports.BusinessList = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessControllerSkeleton = exports.BrandListWrapper = exports.BrandItem = exports.BrandContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessListingSearchContainer = exports.BusinessListingSearchContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  box-sizing: border-box;\n\n  h3{\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 10px;\n    margin-top: 20px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n  cursor: pointer;\n\n  h3 {\n    margin: 0 10px 0 0;\n  }\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n"])));
var FiltersContainer = exports.FiltersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  @media (min-width: 993px){\n    flex-direction: row;\n    display: flex;\n    width: 100%;\n  }\n"])));
var Filters = exports.Filters = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 993px){\n    padding: 0;\n    width: 25%;\n    max-width: 25%;\n    margin-right: 70px;\n  }\n"])));
var FiltersResultContainer = exports.FiltersResultContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  @media (min-width: 993px){\n    width: 75%;\n    max-width: 75%;\n  }\n"])));
var SortContainer = exports.SortContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\n"])));
var MaxFilterContainer = exports.MaxFilterContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));
var TagsContainer = exports.TagsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n\n"])));
var ProgressContentWrapper = exports.ProgressContentWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 12px;\n  background: #F8F9FA;\n"])));
var ProgressBar = exports.ProgressBar = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  height: 4px;\n  border-radius: 50px;\n  background: #344050;\n"])));
var MaxItemContainer = exports.MaxItemContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  align-items: center;\n  ", "\n  @media (min-width: 480px){\n    flex-direction: row;\n  }\n  #searchlist {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n"])), function (_ref) {
  var noResults = _ref.noResults;
  return noResults && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
});
var MaxItem = exports.MaxItem = _styledComponents.default.p(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-top: 0;\n  font-size: 14px;\n  font-weight: ", ";\n"])), function (_ref2) {
  var active = _ref2.active;
  return active ? '600' : '400';
});
var SortItem = exports.SortItem = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: ", ";\n"])), function (_ref3) {
  var active = _ref3.active;
  return active ? '600' : '400';
});
var ProductsList = exports.ProductsList = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  button {\n    height: 25px;\n    font-size: 10px;\n    white-space: nowrap;\n    line-height: 0;\n    max-width: 80px;\n  }\n  @media (min-width: 380px){\n    button{\n      max-width: initial;\n    }\n  }\n  @media (min-width: 480px){\n    button {\n      line-height: 30px;\n      height: 44px;\n      overflow: initial;\n      font-size: 16px;\n    }\n  }\n"])));
var Metadata = exports.Metadata = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: flex;\n  font-weight: 300;\n  font-size: 10px;\n  color: #909BA9;\n  flex-wrap: wrap;\n  ", "\n  p {\n    color: #909BA9;\n    svg {\n      font-size: 7px;\n      min-width: 6px;\n      margin: 0 3px;\n    }\n\n    span {\n      margin-right: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 12px;\n  margin-left: 10px;\n  div {\n    display: flex;\n    p {\n      margin-right: 5px;\n      ", "\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n  @media (min-width: 480px) {\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});
var SingleBusinessSearch = exports.SingleBusinessSearch = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n"])));
var BusinessProductsListContainer = exports.BusinessProductsListContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n\n  .product-card {\n    width: 270px;\n    max-width: 270px;\n  }\n\n  @media(min-width: 480px){\n    .product-card {\n      width: 400px;\n      max-width: 400px;\n    }\n  }\n"])));
var BusinessListWrapper = exports.BusinessListWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  overflow: scroll hidden;\n  width: 100%;\n"])));
var BusinessProductsListWrapper = exports.BusinessProductsListWrapper = (0, _styledComponents.default)(BusinessListWrapper)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([""])));
var BusinessControllerSkeleton = exports.BusinessControllerSkeleton = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  > div {\n    flex: 1;\n  }\n  @media (min-width: 681px){\n    flex-direction: row;\n  }\n"])));
var NotFoundWrapper = exports.NotFoundWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  padding-top: 50px;\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 48px;\n  height: 48px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 48px;\n  border-radius: 7.6px;\n\n  ", "\n\n  @media (min-width: 681px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n  }\n\n"])), function (_ref5) {
  var isSkeleton = _ref5.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    span {\n      min-width: 45px;\n      min-height: 45px;\n      height: 45px;\n      width: 45px;\n      min-height: 45px;\n    }\n      @media (min-width: 681px){\n        span {\n          min-width: 75px;\n          min-height: 75px;\n          height: 75px;\n          width: 75px;\n          min-height: 75px;\n      }\n    }\n  "])));
});
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessName = exports.BusinessName = _styledComponents.default.h6(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n  @media (min-width: 681px){\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h1(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});
var BrandContainer = exports.BrandContainer = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  > h3 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n"])));
var BrandListWrapper = exports.BrandListWrapper = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  max-height: 300px;\n  overflow: auto;\n"])));
var BrandItem = exports.BrandItem = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  margin-bottom: 8px;\n\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    transition: all 0.3s linear;\n  }\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n  &:hover {\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.success500;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});
var NoResult = exports.NoResult = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));
var PriceFilterWrapper = exports.PriceFilterWrapper = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([""])));
var PriceFilterListWrapper = exports.PriceFilterListWrapper = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: calc(100% + 10px);\n  margin-left: -5px;\n  ", "\n\n  > button {\n    border-radius: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    line-height: 24px;\n    margin: 5px;\n\n    svg {\n      margin-left: 5px;\n      font-size: 12px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: -5px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
});
var PreviouslyOrderedContainer = exports.PreviouslyOrderedContainer = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n\n"])));
var SearchBarContainer = exports.SearchBarContainer = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 26px;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});