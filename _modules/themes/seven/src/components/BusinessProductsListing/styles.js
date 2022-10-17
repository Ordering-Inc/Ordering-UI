"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrappLayout = exports.WrapContent = exports.UnderAgeButtons = exports.UnderAge = exports.SkeletonItem = exports.ProductsNotFound = exports.ProductsContainer = exports.ProductLoading = exports.CartegoryTitle = exports.BusinessProductsCategorieWrapper = exports.BreackFastCheckModalContent = exports.AgreeButtonWrapper = exports.AgeConfirmContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.ProductsContainer = ProductsContainer;

var WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0 15px;\n  background: ", ";\n\n  @media (min-width: 768px) {\n    padding: 0px;\n    width: 75%;\n    overflow-x: hidden;\n    padding: 0 20px 30px;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 1200px) {\n    width: 80%;\n    margin: 0 auto;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.WrapContent = WrapContent;

var WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});

exports.WrapperSearch = WrapperSearch;

var ProductsNotFound = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));

exports.ProductsNotFound = ProductsNotFound;

var ProductLoading = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));

exports.ProductLoading = ProductLoading;

var SkeletonItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));

exports.SkeletonItem = SkeletonItem;

var WrappLayout = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    display: flex;\n    width: 100vw;\n    min-height: 60vh;\n  }\n\n  ", "\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    .bp-list,\n    .cart {\n      width: 100%;\n    }\n\n    @media (min-width: 870px) {\n      flex-direction: row;\n      .bp-list {\n        width: 55%;\n      }\n      .cart {\n        width: calc(45% - 20px);\n        margin-left: 20px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .bp-list {\n        width: 60%;\n      }\n      .cart {\n        width: calc(40% - 20px);\n      }\n    }  \n\n    @media (min-width: 1200px) {\n      .bp-list {\n        width: 70%;\n      }\n      .cart {\n        width: calc(30% - 20px);\n      }\n    }  \n  "])));
});

exports.WrappLayout = WrappLayout;

var BusinessProductsCategorieWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    width: 25%;\n  }\n  @media (min-width: 1200px) {\n    width: 20%;\n  }\n"])));

exports.BusinessProductsCategorieWrapper = BusinessProductsCategorieWrapper;

var CartegoryTitle = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: ", ";\n  font-size: 20px;\n  line-height: 30px;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px 15px;\n  @media (min-width: 768px) {\n    margin-right: 14px;\n    background-color: ", ";\n    padding-left: 10%;\n    ", "\n  }\n  @media (min-width: 1024px) {\n    padding-left: 15%;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryDark;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      padding-right: 10%;\n      padding-left: unset;\n    "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      padding-right: 15%;\n      padding-left: unset;\n    "])));
});

exports.CartegoryTitle = CartegoryTitle;

var AgeConfirmContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  ", "\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  box-shadow: border-box;\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 1024px) {\n    height: 40vw;\n  }\n"])), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background-image: url(", "); \n  "])), function (props) {
    return props.bgimage;
  });
});

exports.AgeConfirmContainer = AgeConfirmContainer;

var UnderAge = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  h2 {\n    text-align: center;\n    color: #000;\n  }\n"])));

exports.UnderAge = UnderAge;

var UnderAgeButtons = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    width: 100px;\n    margin: 0 7px;\n    font-size: 16px;\n    font-weight: bold;\n  }\n"])));

exports.UnderAgeButtons = UnderAgeButtons;

var BreackFastCheckModalContent = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));

exports.BreackFastCheckModalContent = BreackFastCheckModalContent;

var AgreeButtonWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  button {\n    text-transform: uppercase;\n    padding: 3px;\n    font-size: 14px;\n    width: 100px;\n  }\n"])));

exports.AgreeButtonWrapper = AgreeButtonWrapper;