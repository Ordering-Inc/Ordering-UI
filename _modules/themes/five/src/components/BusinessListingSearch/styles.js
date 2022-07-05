"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsContainer = exports.SortItem = exports.SortContainer = exports.SingleBusinessSearch = exports.ProgressContentWrapper = exports.ProgressBar = exports.ProductsList = exports.PriceFilterWrapper = exports.PriceFilterListWrapper = exports.NotFoundWrapper = exports.NoResult = exports.Metadata = exports.MaxItemContainer = exports.MaxItem = exports.MaxFilterContainer = exports.FiltersResultContainer = exports.FiltersContainer = exports.Filters = exports.BusinessesTitle = exports.BusinessProductsListWrapper = exports.BusinessProductsListContainer = exports.BusinessName = exports.BusinessLogo = exports.BusinessListingSearchContainer = exports.BusinessListWrapper = exports.BusinessList = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessControllerSkeleton = exports.BrandListWrapper = exports.BrandItem = exports.BrandContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessListingSearchContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  box-sizing: border-box;\n\n  h3{\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 10px;\n    margin-top: 20px;\n  }\n"])));

exports.BusinessListingSearchContainer = BusinessListingSearchContainer;

var FiltersContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  \n  flex-direction: column;\n  @media (min-width: 993px){\n    flex-direction: row;\n    display: flex;\n    width: 100%;\n  }\n"])));

exports.FiltersContainer = FiltersContainer;

var Filters = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  @media (min-width: 993px){\n    width: 25%;\n    max-width: 25%;\n    margin-right: 20px;\n  }\n"])));

exports.Filters = Filters;

var FiltersResultContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  @media (min-width: 993px){\n    width: 75%;\n    max-width: 75%;\n  }\n"])));

exports.FiltersResultContainer = FiltersResultContainer;

var SortContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\n"])));

exports.SortContainer = SortContainer;

var MaxFilterContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\n"])));

exports.MaxFilterContainer = MaxFilterContainer;

var TagsContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));

exports.TagsContainer = TagsContainer;

var ProgressContentWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 12px;\n  background: #F8F9FA;\n"])));

exports.ProgressContentWrapper = ProgressContentWrapper;

var ProgressBar = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 4px;\n  border-radius: 50px;\n  background: #344050;\n"])));

exports.ProgressBar = ProgressBar;

var MaxItemContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.MaxItemContainer = MaxItemContainer;

var BusinessList = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  align-items: center;\n  ", "\n  @media (min-width: 480px){\n    flex-direction: row;\n  }\n  #searchlist {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n"])), function (_ref) {
  var noResults = _ref.noResults;
  return noResults && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
});

exports.BusinessList = BusinessList;

var MaxItem = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-top: 0;\n  font-size: 14px;\n  font-weight: ", ";\n"])), function (_ref2) {
  var active = _ref2.active;
  return active ? '600' : '400';
});

exports.MaxItem = MaxItem;

var SortItem = _styledComponents.default.p(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: ", ";\n"])), function (_ref3) {
  var active = _ref3.active;
  return active ? '600' : '400';
});

exports.SortItem = SortItem;

var ProductsList = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));

exports.ProductsList = ProductsList;

var BusinessInfo = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  button {\n    height: 25px;\n    font-size: 10px;\n    white-space: nowrap;\n    line-height: 0;\n    max-width: 80px;\n  }\n  @media (min-width: 380px){\n    button{\n      max-width: initial;\n    }\n  }\n  @media (min-width: 480px){\n    button {\n      line-height: 30px;\n      height: 44px;\n      overflow: initial;\n      font-size: 16px;\n    }\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var Metadata = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: flex;\n  font-weight: 300;\n  font-size: 10px;\n  color: #909BA9;\n  flex-wrap: wrap;\n  ", "\n  p {\n    color: #909BA9;\n    svg {\n      font-size: 7px;\n      min-width: 6px;\n      margin: 0 3px;\n    }\n\n    span {\n      margin-right: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n  "])));
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.Metadata = Metadata;

var BusinessInfoItem = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 12px;\n  margin-left: 10px;\n  div {\n    display: flex;\n    p {\n      margin-right: 5px;\n      ", "\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n  @media (min-width: 480px) {\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});

exports.BusinessInfoItem = BusinessInfoItem;

var SingleBusinessSearch = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n"])));

exports.SingleBusinessSearch = SingleBusinessSearch;

var BusinessProductsListContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n\n  .product-card {\n    width: 270px;\n    max-width: 270px;\n  }\n\n  @media(min-width: 480px){\n    .product-card {\n      width: 400px;\n      max-width: 400px;\n    }\n  }\n"])));

exports.BusinessProductsListContainer = BusinessProductsListContainer;

var BusinessListWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  overflow: scroll hidden;\n  width: 100%;\n"])));

exports.BusinessListWrapper = BusinessListWrapper;
var BusinessProductsListWrapper = (0, _styledComponents.default)(BusinessListWrapper)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([""])));
exports.BusinessProductsListWrapper = BusinessProductsListWrapper;

var BusinessControllerSkeleton = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  > div {\n    flex: 1;\n  }\n  @media (min-width: 681px){\n    flex-direction: row;\n  }\n"])));

exports.BusinessControllerSkeleton = BusinessControllerSkeleton;

var NotFoundWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  padding-top: 50px;\n"])));

exports.NotFoundWrapper = NotFoundWrapper;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 48px;\n  height: 48px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 48px;\n  border-radius: 7.6px;\n\n  ", "\n\n  @media (min-width: 681px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n  }\n\n"])), function (_ref5) {
  var isSkeleton = _ref5.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    span {\n      min-width: 45px;\n      min-height: 45px;\n      height: 45px;\n      width: 45px;\n      min-height: 45px;\n    }\n      @media (min-width: 681px){\n        span {\n          min-width: 75px;\n          min-height: 75px;\n          height: 75px;\n          width: 75px;\n          min-height: 75px;\n      }\n    }\n  "])));
});

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

var BusinessName = _styledComponents.default.h6(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n  @media (min-width: 681px){\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.BusinessName = BusinessName;

var BusinessesTitle = _styledComponents.default.h1(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});

exports.BusinessesTitle = BusinessesTitle;

var BrandContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  > h3 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n"])));

exports.BrandContainer = BrandContainer;

var BrandListWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  max-height: 300px;\n  overflow: auto;\n"])));

exports.BrandListWrapper = BrandListWrapper;

var BrandItem = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  margin-bottom: 8px;\n\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    transition: all 0.3s linear;\n  }\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n  &:hover {\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.success500;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.BrandItem = BrandItem;

var NoResult = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));

exports.NoResult = NoResult;

var PriceFilterWrapper = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([""])));

exports.PriceFilterWrapper = PriceFilterWrapper;

var PriceFilterListWrapper = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: calc(100% + 10px);\n  margin-left: -5px;\n  ", "\n\n  > button {\n    border-radius: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    line-height: 24px;\n    margin: 5px;\n\n    svg {\n      margin-left: 5px;\n      font-size: 12px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: -5px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
});

exports.PriceFilterListWrapper = PriceFilterListWrapper;