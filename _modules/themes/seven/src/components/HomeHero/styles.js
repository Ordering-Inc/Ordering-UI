"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOrderyType = exports.Title = exports.Slogan = exports.OrderTypeItem = exports.HeroContainerStyled = exports.HeroContainer = exports.FoodLocation = exports.ContentWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 85px);\n\n  ", "\n\n  @media (min-width: 768px) {\n    height: 45vh;\n    overflow: hidden;\n  }\n\n  @media (min-width: 1024px) {\n    height: 70vh;\n  }\n\n  @media (min-width: 1200px) {\n    height: calc(100vh - 70px);\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.HeroContainerStyled = HeroContainerStyled;

var HeroContainer = function HeroContainer(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.HeroContainer = HeroContainer;

var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    text-shadow: 0px 0px 5px #fff;\n    padding: 0px 20px 50px;\n    box-sizing: border-box;\n    ", "\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 425px) {\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      max-width: 94%;\n      margin: auto;\n      padding: 0;\n    }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0px 20px 50px;\n    "])));
});

exports.ContentWrapper = ContentWrapper;

var Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  letter-spacing: 0px;\n  color: ", ";\n  opacity: 1;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 48px;\n  ", "\n\n  @media (min-width: 768px) {\n    font-size: 48px;\n    margin-bottom: 1vw;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 5vw;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 66px;\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Title = Title;

var Slogan = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 22px;\n  line-height: 34px;\n  letter-spacing: 0px;\n  color: ", ";\n  text-shadow: 0px 0px 3px #dfdfdfa8;\n  opacity: 1;\n  margin-bottom: 15px;\n  ", "\n\n  @media (min-width: 768px) {\n    font-size: 23px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 2vw;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Slogan = Slogan;

var WrapOrderyType = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 2px solid #fff;\n  border-radius: 7.6px;\n  box-sizing: border-box;\n  width: fit-content;\n  background-color: #fff;\n  overflow: hidden;\n  position: relative;\n\n"])));

exports.WrapOrderyType = WrapOrderyType;

var OrderTypeItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 150px;\n  height: 70px;\n  padding: 6px 12px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  \n  &:first-child {\n    svg {\n      height: 33px;\n      width: 33px;\n      fill: #fff;\n    }\n  }\n  &:nth-child(2){\n    background-color: #fff;\n    border: 1.2px solid #878787;\n    border-radius: 0 7px 7px 0;\n    color: #000;\n    svg {\n      height: 33px;\n      width: 25px;\n      fill: #ef3e42;\n    }\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    width: 173px;\n    height: 65px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n    width: 200px;\n    height: 70px;\n  }  \n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.OrderTypeItem = OrderTypeItem;

var FoodLocation = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 1px -2px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);\n  svg {\n    width: 35px;\n    height: fit-content;\n    fill: gray;\n  }\n"])));

exports.FoodLocation = FoodLocation;