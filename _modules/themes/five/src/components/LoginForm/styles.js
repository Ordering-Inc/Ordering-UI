"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationText = exports.TogglePassword = exports.Title = exports.SocialButtons = exports.SkeletonSocialWrapper = exports.ResendCode = exports.RedirectLink = exports.ReCaptchaWrapper = exports.OtpWrapper = exports.LogotypeContainer = exports.LoginWith = exports.LoginDivider = exports.LoginContainer = exports.InputWrapper = exports.InputBeforeIcon = exports.HeroSide = exports.FormSide = exports.FormInput = exports.DividerLine = exports.CountdownTimer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  flex-direction: column;\n\n  ", "\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return !isPopup && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-height: calc(100vh - 65px);\n  "])));
});
exports.LoginContainer = LoginContainer;
var Side = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = (0, _styledComponents.default)(Side)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 992px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode ? '55%' : '100%';
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;
var Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Title = Title;
var LoginWith = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 14px;\n  margin-bottom: 10px;\n  overflow-x: auto;\n\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '100%' : '80%';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "])));
});
exports.LoginWith = LoginWith;
var FormInput = _styledComponents.default.form(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  input:not(:last-child) {\n    margin: 5px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n\n  .phone_number {\n    margin: 10px 0;\n  }\n"])), function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup ? '100%' : '80%';
});
exports.FormInput = FormInput;
var RedirectLink = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n    color: black;\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &.new-account {\n    a {\n      color: ", " !important;\n      text-decoration: none;\n      &:link, &:visited {\n        color: ", " !important;\n      }\n      &:hover {\n        text-decoration: underline !important;\n      }\n    }\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref9) {
  var register = _ref9.register;
  return register && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: calc(95% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref10) {
    var isPopup = _ref10.isPopup;
    return isPopup ? 'calc(100% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref11) {
  var isPopup = _ref11.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref12) {
  var isPopup = _ref12.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});
exports.RedirectLink = RedirectLink;
var SocialButtons = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n   width: ", ";\n   margin-top: 10px;\n\n  button {\n    width: 100%;\n    padding: 6px 40px;\n    color: #000000;\n\n    img {\n      width: 16px;\n    }\n\n    div {\n      font-size: 16px;\n    }\n  }\n"])), function (_ref13) {
  var isPopup = _ref13.isPopup;
  return isPopup ? '100%' : '80%';
});
exports.SocialButtons = SocialButtons;
var SkeletonSocialWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    border-radius: 30px;\n    margin-bottom: 10px\n  }\n"])), function (_ref14) {
  var isPopup = _ref14.isPopup;
  return isPopup ? '100%' : '80%';
});
exports.SkeletonSocialWrapper = SkeletonSocialWrapper;
var TogglePassword = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 24px;\n  transform: translate(-150%, 24%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    transform: translate(150%, 24%);\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
exports.TogglePassword = TogglePassword;
var InputWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 5px;\n  \n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n    margin: 10px 0;\n  }\n"])));
exports.InputWrapper = InputWrapper;
var OtpWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n\n    .otp-input{\n      width: 25px !important;\n      height: 35px;\n      border: 1px solid #CCC;\n      border-radius: 8px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold;\n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n  @media (min-width: 768px) {\n    .otp-container {\n      margin: 20px;\n      div {\n        padding: 10px;\n      }\n\n      .otp-input {\n        width: 80px !important;\n        height: 100px;\n      }\n    }\n  }\n  @media (min-width: 1024px) {\n    .otp-container {\n      .otp-input {\n        width: 60px !important;\n        height: 80px;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
exports.OtpWrapper = OtpWrapper;
var CountdownTimer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n  \n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #DBDCDB;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: ", " !important;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#DBDCDB');
}, function () {
  return (0, _polished.darken)(0.09, '#DBDCDB');
});
exports.CountdownTimer = CountdownTimer;
var ReCaptchaWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
exports.ReCaptchaWrapper = ReCaptchaWrapper;
var InputBeforeIcon = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 14px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    right: 14px;\n    left: initial;\n  "])));
});
exports.InputBeforeIcon = InputBeforeIcon;
var LoginDivider = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: ", ";\n  margin: 30px 0;\n\n  p {\n    margin: 0;\n    width: 70px;\n    font-size: 14px;\n    color: #748194;\n    text-align: center;\n  }\n"])), function (_ref15) {
  var isPopup = _ref15.isPopup;
  return isPopup ? '100%' : '80%';
});
exports.LoginDivider = LoginDivider;
var DividerLine = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  height: 1px;\n  background: #E9ECEF;\n  flex-grow: 1;\n"])));
exports.DividerLine = DividerLine;
var ValidationText = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.danger500;
});
exports.ValidationText = ValidationText;
var LogotypeContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n"])));
exports.LogotypeContainer = LogotypeContainer;
var HeroSide = (0, _styledComponents.default)(Side)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: none;\n\n  img{\n    width: 95%;\n    height: 80%;\n  }\n  @media (min-width: 992px) {\n    width: 45%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ", ";\n\n    img{\n      max-width: 100%;\n      height: auto;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});
exports.HeroSide = HeroSide;
var ResendCode = _styledComponents.default.span(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 24px;\n  align-self: center;\n  margin-bottom: 10px;\n  cursor: ", ";\n"])), function (props) {
  return props.disabled ? props.theme.colors.disabled : props.theme.colors.primary;
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});
exports.ResendCode = ResendCode;