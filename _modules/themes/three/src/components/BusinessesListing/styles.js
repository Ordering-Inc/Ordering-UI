"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrapImage = exports.WrapBusinessTypeFilter = exports.WrapBusinessSort = exports.PreviousOrders = exports.ImageContainerStyled = exports.ErrorMessage = exports.BusinessesTitle = exports.BusinessSortItem = exports.BusinessSortHeader = exports.BusinessSortContent = exports.BusinessSortContainer = exports.BusinessListContainer = exports.BusinessList = exports.BusinessContainer = exports.AdviceRightContent = exports.AdviceLeftContent = exports.AdviceInnerContainer = exports.AdviceDescriptionContainer = exports.AdviceContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AdviceContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 30px 0;\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGreen;
});

exports.AdviceContainer = AdviceContainer;

var AdviceInnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0px auto;\n  display: flex;\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"])));

exports.AdviceInnerContainer = AdviceInnerContainer;

var AdviceLeftContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h1 {\n    color: ", ";\n    margin: 0px;\n  }\n  p {\n    color: ", ";;\n  }\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.AdviceLeftContent = AdviceLeftContent;

var AdviceRightContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"])));

exports.AdviceRightContent = AdviceRightContent;

var ImageContainerStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 200px;\n  ", "\n  @media (max-width: 992px) {\n    width: 50%;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.ImageContainerStyled = ImageContainerStyled;

var WrapImage = function WrapImage(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(ImageContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.WrapImage = WrapImage;

var AdviceDescriptionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 40%;\n  background-color: ", ";\n  padding: 10px;\n\n  p {\n    font-weight: 600;\n    color: ", ";\n  }\n\n  @media (max-width: 992px) {\n    width: 50%;\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.yellow;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.black;
});

exports.AdviceDescriptionContainer = AdviceDescriptionContainer;

var BusinessContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 91%;\n  margin: 0 auto;\n"])));

exports.BusinessContainer = BusinessContainer;

var WrapperSearch = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n\n  ", "\n"])), function (_ref2) {
  var isCustomLayout = _ref2.isCustomLayout;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n\n    svg {\n      font-size: 26px;\n      color: ", ";\n      margin-left: 10px;\n      cursor: pointer;\n    }\n    \n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), function (props) {
    var _props$theme, _props$theme$colors4;

    return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors4 = _props$theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.primary;
  });
});

exports.WrapperSearch = WrapperSearch;

var ErrorMessage = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var PreviousOrders = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));

exports.PreviousOrders = PreviousOrders;

var BusinessesTitle = _styledComponents.default.h1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px 20px;\n"])));

exports.BusinessesTitle = BusinessesTitle;

var WrapBusinessTypeFilter = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  border-bottom: 1px solid #CCC;\n"])));

exports.WrapBusinessTypeFilter = WrapBusinessTypeFilter;

var BusinessListContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));

exports.BusinessListContainer = BusinessListContainer;

var BusinessList = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"])));

exports.BusinessList = BusinessList;

var WrapBusinessSort = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  @media (min-width: 992px) {\n    margin: 0 20px;\n  }\n"])));

exports.WrapBusinessSort = WrapBusinessSort;

var BusinessSortContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 20px;\n"])));

exports.BusinessSortContainer = BusinessSortContainer;

var BusinessSortHeader = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: background-color 0.6s ease;\n  position: relative;\n  padding: 10px 0;\n\n  span {\n    font-size: 20px;\n  }\n\n  svg {\n    font-size: 24px;\n  }\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n"])));

exports.BusinessSortHeader = BusinessSortHeader;

var BusinessSortContent = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n"])));

exports.BusinessSortContent = BusinessSortContent;

var BusinessSortItem = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  svg {\n    font-size: 24px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});

exports.BusinessSortItem = BusinessSortItem;