"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeItem = exports.WrapOrderyType = exports.Slogan = exports.Title = exports.ContentWrapper = exports.HeroContainer = exports.HeroContainerStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 43.562132vh;\n\n  ", "\n\n  @media (min-width: 768px) {\n    height: 55vw;\n    max-height: 55vw;\n    overflow: hidden;\n  }\n\n  @media (min-width: 1200px) {\n    height: 65.562132vh;\n  }\n"])), function (_ref) {
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

var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    padding: 0px 20px 0px;\n\n    ", "\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 425px) {\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      max-width: 94%;\n      margin: auto;\n      padding: 0;\n    }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0px 20px 0px;\n    "])));
});

exports.ContentWrapper = ContentWrapper;

var Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 48px;\n  ", "\n\n  @media (min-width: 768px) {\n    font-size: 48px;\n    margin-bottom: 1vw;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 5vw;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 66px;\n  }\n\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Title = Title;

var Slogan = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 22px;\n  line-height: 34px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-bottom: 15px;\n  ", "\n\n  @media (min-width: 768px) {\n    font-size: 23px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 2vw;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});

exports.Slogan = Slogan;

var WrapOrderyType = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px inset ", ";\n  border-radius: 4.6px;\n  padding: 1px;\n  box-sizing: border-box;\n  width: fit-content;\n  background-color: #fff;\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.WrapOrderyType = WrapOrderyType;

var OrderTypeItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 40px;\n  padding: 6px 12px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n\n  &:before {\n    background-color: initial;\n    background-image: linear-gradient(#fff 0,rgba(255,255,255,0) 100%);\n    border-radius: 2px;\n    content: \"\";\n    height: 47%;\n    left: 1%;\n    opacity: .5;\n    position: absolute;\n    top: 1%;\n    transition: all .3;\n    width: 98%;\n  }\n\n  &:after {\n\n  }\n  \n  &:first-child {\n    border-radius: 4px 0px 0px 4px;\n  }\n  &:nth-child(2){\n    background-color: ", ";\n    color: ", ";\n    border-radius: 0px 4px 4px 0px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    width: 120px;\n    height: 45px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 12vw;\n    height: 4vw;\n  }\n\n  @media (min-width: 1450px) {\n    width: 140px;\n    height: 45px;\n  }\n  \n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.OrderTypeItem = OrderTypeItem;