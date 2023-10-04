"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapInput = exports.UseAccount = exports.Title = exports.Slogan = exports.SectionHeader = exports.PoweredByOrdering = exports.LogoWrapper = exports.HeroContent = exports.HeroContainerStyled = exports.HeroContainer = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  height: 374px;\n  position:relative;\n  ", "\n\n\n  ", "\n\n  @media (min-width: 375px) {\n    height: 374px;\n  }\n\n  @media (min-width: 567px) {\n    height: calc(100vh - 65px);\n    ", "\n    margin-bottom: 0;\n  }\n"])), function (_ref) {
  var mb = _ref.mb;
  return mb && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: ", ";\n  "])), mb);
}, function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref3) {
  var isFullScreen = _ref3.isFullScreen;
  return !isFullScreen && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      height: calc(60vh - 65px);\n    "])));
});
var HeroContainer = exports.HeroContainer = function HeroContainer(props) {
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
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    padding: 0px 10vw 0px;\n    background-color: #0000004D;\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 576px) {\n      justify-content: center;\n      padding: 0px 40px 0px;\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      ", "\n    }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding: 0px 40px 0px;\n      "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 36px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-shadow: 0px 3px 6px #2c2e33;\n  opacity: 1;\n\n  ", "\n\n  @media (min-width: 381px) {\n    font-size: 35px;\n  }\n\n\n  @media (min-width: 576px) {\n    font-size: 40px;\n    line-height: initial;\n  }\n\n  @media (min-width: 850px) {\n    font-size: 72px;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var Slogan = exports.Slogan = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: .96rem;\n  line-height: 24px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n  text-shadow: 0px 3px 6px #2c2e33;\n  margin-bottom: 30px;\n\n  ", "\n\n  @media (min-width: 480px) {\n    font-size: 24px;\n    line-height: initial;\n    margin-bottom: 37px;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var WrapInput = exports.WrapInput = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  background: #FFFFFF;\n  padding: 8px 16px;\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 22px;\n\n  ", "\n\n  p{\n    color: ", ";\n    position: relative;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n    line-height: 18px;\n    @media (min-width: 576px) {\n      font-size: 1rem;\n      line-height: initial;\n    }\n  }\n\n  svg {\n    color: ", ";\n    font-size: 22px;\n    ", "\n\n    @media (min-width: 576px) {\n      ", "\n    }\n  }\n"])), function (_ref4) {
  var withIcon = _ref4.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: calc(100% - 20px);\n    box-sizing: border-box;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n\n    @media (min-width: 576px) {\n      padding: 10px 25px;\n      margin-bottom: 27px;\n    }\n\n    @media (min-width: 1024px) {\n      width: calc(50% - 20px);\n    }\n  "])), function (props) {
    var _props$theme4;
    return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 12px;\n    "])));
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});
var UseAccount = exports.UseAccount = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  min-height: 30vh;\n  padding: 10vw;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  > button {\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n\n  > *:last-child {\n    margin-top: 14px;\n    background-color: #E9F2FE;\n    color: ", ";\n  }\n\n  @media (min-width: 576px) {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var SectionHeader = exports.SectionHeader = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  color: #344050;\n  margin: 0;\n  margin-bottom: 27px;\n  width: 100%;\n"])));
var LogoWrapper = exports.LogoWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 150px;\n  margin: 53px auto;\n  display: flex;\n  justify-content: center;\n  img {\n    width: 100%;\n    object-fit: fill;\n  }\n"])));
var HeroContent = exports.HeroContent = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  button{\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 16px;\n    margin-bottom: 45px;\n    white-space: nowrap;\n\n    @media (min-width: 576px) {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      font-size: 18px;\n      width: 180px;\n      line-height: initial;\n    }\n  }\n"])));
var PoweredByOrdering = exports.PoweredByOrdering = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 10px;\n  a{\n    font-weight: 600;\n    margin-left: 5px;\n  }\n"])));