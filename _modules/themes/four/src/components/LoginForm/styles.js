"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.SocialButtons = exports.Slogan = exports.SkeletonSocialWrapper = exports.RedirectLink = exports.ReCaptchaWrapper = exports.OtpWrapper = exports.OrContainer = exports.LoginWithButton = exports.LoginContainer = exports.Line = exports.HeroImage = exports.HeroContainerStyled = exports.HeroContainer = exports.FormSide = exports.FormInput = exports.FormContainer = exports.CountdownTimer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _Buttons = require("../../styles/Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeroContainer = exports.HeroContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 20px;\n\n  @media (min-width: 821px) {\n    padding-top: 0px;\n  }\n"])));
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  top: -20px;\n\n\n  ", "\n\n  @media (min-width: 821px) {\n    top: 0px;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-attachment: fixed;\n  "])));
});
var HeroImage = exports.HeroImage = function HeroImage(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
  }
  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var FormContainer = exports.FormContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 80px 0;\n  z-index: 1;\n  background-color: #FFFFFF;\n  box-shadow: 0px 3px 20px #00000098;\n  border-radius: 8px;\n  padding: 30px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    padding: 30px 60px;\n    min-width: 550px;\n  }\n  \n  @media (min-width: 992px) {\n    min-width: 650px;\n  }\n  \n  @media (max-width: 760px) {\n    width: 91%;\n  }\n"])));
var LoginContainer = exports.LoginContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    font-size: 22px;\n    text-align: center;\n    color: ", ";\n    margin: 0px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 992px) {\n    h1 {\n      font-size: 27px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.blackColor;
});
var Side = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = exports.FormSide = (0, _styledComponents.default)(Side)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '0.9em' : '1em';
});
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  input.PhoneInputInput {\n    border-radius: 8px;\n    padding: 8px 15px;\n  }\n\n  input:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n"])), function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '90%' : '100%';
});
var RedirectLink = exports.RedirectLink = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 5px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 14px;\n\n  span {\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    &:link,\n    &:visited {\n      color: ", " !important;\n      text-decoration: none !important;\n    }\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref6) {
  var register = _ref6.register;
  return register && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref7) {
    var isPopup = _ref7.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(100% - 20px)';
  });
});
var SocialButtons = exports.SocialButtons = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n   width: ", ";\n   margin-top: 10px;\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n  }\n"])), function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup ? '90%' : '100%';
});
var SkeletonSocialWrapper = exports.SkeletonSocialWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    margin-bottom: 10px\n  }\n"])), function (_ref9) {
  var isPopup = _ref9.isPopup;
  return isPopup ? '90%' : '100%';
});
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 26px;\n  transform: translate(-150%, 10%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n \n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    transform: translate(150%, 10%);\n  "])));
});
var WrapperPassword = exports.WrapperPassword = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));
var OtpWrapper = exports.OtpWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    \n    .otp-input{\n      width: 30px;\n      height: 30px;\n      padding: 12px 20px;\n      border: 2px solid #CCC;\n      border-radius: 16px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var CountdownTimer = exports.CountdownTimer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n  \n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #DBDCDB;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: ", " !important;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#DBDCDB');
}, function () {
  return (0, _polished.darken)(0.09, '#DBDCDB');
});
var LoginWithButton = exports.LoginWithButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #EFEFEF;\n  border-color: #EFEFEF;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* margin-bottom: 10px; */\n  padding: 5px 30px;\n  svg {\n    font-size: 28px;\n    color: #000;\n  }\n\n  div {\n    margin: 0 auto;\n    color: #000;\n    line-height: 30px;\n    font-size: 16px;\n  }\n\n  &:hover {\n    svg,\n    div {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Slogan = exports.Slogan = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-top: 0px;\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});
var OrContainer = exports.OrContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 20px 0;\n\n  span {\n    padding: 0 10px;\n    color: ", ";\n    font-weight: 500;\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
});
var Line = exports.Line = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  flex: 1;\n"])), function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.grayColor;
});
var ReCaptchaWrapper = exports.ReCaptchaWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));