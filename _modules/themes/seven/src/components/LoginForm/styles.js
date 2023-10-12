"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.SocialButtons = exports.SkeletonSocialWrapper = exports.RedirectLink = exports.ReCaptchaWrapper = exports.OtpWrapper = exports.LoginWith = exports.LoginContainer = exports.FormTitle = exports.FormSubTitle = exports.FormSide = exports.FormInput = exports.FormInline = exports.FormBottom = exports.CreateAccount = exports.CountdownTimer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LoginContainer = exports.LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  box-sizing: border-box;\n  padding: 20px;\n  min-height: ", ";\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 850px) {\n    min-height: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    min-height: ", ";\n  }\n\n  >* {\n    box-sizing: border-box;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'auto';
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '500px' : 'calc(94vh - 70px)';
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '500px' : 'calc(80vh - 90px)';
});
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = exports.FormSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: flex-start;\n  margin: auto;\n\n  @media (min-width: 768px) {\n    ", "\n\n    width: ", ";\n  }\n\n  @media (min-width: 992px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin: 0px;\n    "])));
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '100%' : '70%';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '100%' : '45%';
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup ? '0.9em' : '1em';
});
var LoginWith = exports.LoginWith = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  width: 100%;\n  text-transform: lowercase !important;\n\n  .consume-side-padding {\n    padding-left: 0px;\n    ", "\n  }\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n      padding-right: 0px;\n    "])));
}, function (_ref9) {
  var isPopup = _ref9.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref10) {
  var isPopup = _ref10.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "])));
});
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  input {\n    height: 38px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    position: relative;\n  }\n\n  input:not(:last-child) {\n    margin: 10px 0px;\n    @media (min-width: 768px) {\n      margin: 0px 0px 25px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n"])));
var RedirectLink = exports.RedirectLink = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  width: 100%;\n"])));
var SocialButtons = exports.SocialButtons = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n   width: 100%;\n\n  button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n    border-radius: 0px;\n    background-color: transparent;\n    border: 1px solid;\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n      margin: 0 10px;\n    }\n  }\n\n  button:first-child{\n    border-color: #365988;\n    color: #365988;\n    font-weight: 700;\n  }\n\n  button:nth-child(2){\n    border-color: #000000;\n    color: #000000;\n    font-weight: 700;\n  }\n\n  button:nth-child(2){\n    border-color: #666666;\n    color: #666666;\n    font-weight: 700;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n"])));
var SkeletonSocialWrapper = exports.SkeletonSocialWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  span{\n    border-radius: 0px;\n    margin-bottom: 10px\n  }\n\n  @media (min-width: 768px) {\n    margin-top: 40px;\n  }\n"])));
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  font-weight: 300;\n  color: #333;\n  font-size: 26px;\n  max-height: 100%;\n  \n  span{\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    top: 4px;\n  } \n"])));
var WrapperPassword = exports.WrapperPassword = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  input{\n    box-sizing: border-box;\n    padding-right: 40px;\n  }\n"])));
var OtpWrapper = exports.OtpWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    \n    .otp-input{\n      width: 30px;\n      height: 30px;\n      padding: 12px 20px;\n      border: 2px solid #CCC;\n      border-radius: 16px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var CountdownTimer = exports.CountdownTimer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n  \n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #DBDCDB;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: ", " !important;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#DBDCDB');
}, function () {
  return (0, _polished.darken)(0.09, '#DBDCDB');
});
var ReCaptchaWrapper = exports.ReCaptchaWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
var FormTitle = exports.FormTitle = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 28px;\n  text-transform: uppercase;\n  color: ", ";\n  margin-top: 10px;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 34px;\n    margin-top: 30px;\n    width: 100%;\n  }\n\n  @media (min-width: 1440px) {\n    width: 75%;\n    margin-right: auto;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-right: unset;\n        margin-left: auto;\n    "])));
});
var FormInline = exports.FormInline = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  width: 100%;\n\n  button {\n    width: 100%;\n    padding: 5px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .forgot {\n    span {\n      color: ", ";\n      width: 100%;\n    }\n\n    a {\n      position: absolute;\n      z-index: 10;\n      opacity: 0;\n      text-decoration: none;\n      width: 100%;\n    }\n  }\n\n  .phone_number {\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    width: 48.6795%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var FormBottom = exports.FormBottom = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 0;\n  border: 1px solid ", ";\n  border-left: none;\n  border-right: none;\n  align-items: center;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var CreateAccount = exports.CreateAccount = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  a {\n    position: absolute;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n  }\n  button {\n    font-size: 16px;\n    line-height: 26px;\n    color: #666666;\n    padding: 11px 14px;\n    border-radius: 0;\n    background-color: transparent;\n  }\n"])));
var FormSubTitle = exports.FormSubTitle = _styledComponents.default.p(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-top: 7px;\n  line-height: 20px;\n"])));