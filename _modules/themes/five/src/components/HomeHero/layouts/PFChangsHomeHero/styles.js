"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.WrapInput = exports.ViewLocationsContainer = exports.SearchLocationsContainer = exports.HeroContainerStyled = exports.HeroContainer = exports.Diviver = exports.DeliveryPickupContainer = exports.ContentWrapper = exports.AddressInputContainer = exports.ActiveMapContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(100vh - 97px);\n  ", "\n  .firstHeading {\n    font-family: ", ";\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref2) {
  var _theme$fonts, _theme$fonts$special;

  var theme = _ref2.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
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

var WrapInput = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  padding: 10px 5px;\n  background: #FFFFFF;\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  align-items: center;\n  margin-bottom: 27px;\n  margin-right: 10px;\n  display: flex;\n  overflow: hidden;\n  white-space: nowrap;\n\n  ", "\n  \n  p {\n    color: #000 !important;\n    position: relative;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: flex-end;\n  }\n\n  svg {\n    color: ", ";\n    width: 22px;\n    height: 22px;\n    min-width: 22px;\n\n    ", "\n\n  }\n"])), function (_ref3) {
  var withIcon = _ref3.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    flex: 1;\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});

exports.WrapInput = WrapInput;

var ContentWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  @media (min-width: 768px){\n    flex-direction: row;\n    min-height: 100vh;\n  }\n"])));

exports.ContentWrapper = ContentWrapper;

var SearchLocationsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 40px 20px 20px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 97px);\n  box-sizing: border-box;\n  h1 {\n    color: #fff;\n    font-family: ", ";\n  }\n  div {\n    margin: 20px 0 0;\n    p{\n      color: ", ";\n    }\n  }\n  @media (min-width: 768px){\n    width: 50%;\n  }\n\n  @media (min-width: 1024px){\n    width: 500px;\n  }\n"])), function (_ref4) {
  var _theme$fonts2, _theme$fonts2$special;

  var theme = _ref4.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts2 = theme.fonts) === null || _theme$fonts2 === void 0 ? void 0 : (_theme$fonts2$special = _theme$fonts2.special) === null || _theme$fonts2$special === void 0 ? void 0 : _theme$fonts2$special.name;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.titleHomeColor;
});

exports.SearchLocationsContainer = SearchLocationsContainer;

var DeliveryPickupContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row-reverse;\n  position: relative;\n  border-radius: 0px;\n  border: 1px solid ", ";\n  height: 52px;\n  background-color: transparent;\n\n  button {\n    outline: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    z-index: 1;\n  }\n\n  &::after {\n    ", "\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.gold;
}, function (_ref7) {
  var orderTypeSelected = _ref7.orderTypeSelected;
  return orderTypeSelected === 1 ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      content: \"\";\n      background:  ", ";\n      position: absolute;\n      transition: all 0.2s linear 0s;\n      left: 6px;\n      bottom: 5px;\n      height: calc(100% - 10px);\n      width: calc(50% - 6px);\n    "])), function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.gold;
  }) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      content: \"\";\n      background: ", ";\n      position: absolute;\n      transition: all 0.2s linear 0s;\n      bottom: 5px;\n      height: calc(100% - 10px);\n      width: calc(50% - 6px);\n      left: 50%;\n      \n    "])), function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.gold;
  });
});

exports.DeliveryPickupContainer = DeliveryPickupContainer;

var AddressInputContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  position: relative;\n  button {\n    height: 46px;\n    margin-left: 10px;\n  }\n  .geolocation-button {\n    position: absolute;\n    top: 30px;\n    right: 10px;\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n  }\n"])));

exports.AddressInputContainer = AddressInputContainer;

var ViewLocationsContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  width: 100%;\n  button { \n    width: 100%;\n  }\n"])));

exports.ViewLocationsContainer = ViewLocationsContainer;

var Diviver = _styledComponents.default.hr(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background-color: rgb(230, 230, 230);\n  display: block;\n  height: 1px;\n  margin: 24px 0px;\n"])));

exports.Diviver = Diviver;

var WrapperMap = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  flex: 1;\n  height: calc(100vh - 97px);\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n  .btn-choose-store {\n    line-height: 30px;\n    padding: 0 10px;\n    font-size: 14px;\n    cursor: pointer;\n    outline: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 80px;\n    height: 38px;\n    font-size: 14px;\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n  }\n  .btn-address-map {\n    cursor: pointer;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
});

exports.WrapperMap = WrapperMap;

var ActiveMapContainer = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  button {\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 45px;\n    font-size: 16px;\n    font-weight: bold;\n  }\n  svg {\n    margin-right: 20px;\n    width: 30px;\n    height: 30px;\n  }\n  p{\n    margin-top: 21px;\n  }\n\n  @media (min-width: 1024px){\n    button{ \n      width: 40%;\n      font-size: 18px;\n    }\n  }\n"])));

exports.ActiveMapContainer = ActiveMapContainer;