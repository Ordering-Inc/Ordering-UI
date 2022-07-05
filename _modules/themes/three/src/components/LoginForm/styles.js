"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.Title = exports.SocialButtons = exports.SkeletonSocialWrapper = exports.RedirectLink = exports.OtpWrapper = exports.LoginWith = exports.LoginContainer = exports.FormSide = exports.FormInput = exports.CountdownTimer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 65px)';
});

exports.LoginContainer = LoginContainer;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  margin-bottom: 0;\n  margin-top: 10px;\n  font-weight: 400;\n  width: ", ";\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n"])), function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.Title = Title;

var Side = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

var FormSide = (0, _styledComponents.default)(Side)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  input.PhoneInputInput {\n    border-radius: unset;\n    margin: 10px 0;\n  }\n\n  ", "\n\n  @media (min-width: 992px) {\n    width: 45%;\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: auto;\n  "])));
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;

var LoginWith = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: ", ";\n  font-size: 14px;\n  > div {\n    > div {\n      padding: 10px 0;\n      ", "\n    }\n  }\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '90%' : '80%';
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "])));
});

exports.LoginWith = LoginWith;

var FormInput = _styledComponents.default.form(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  input:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n"])), function (_ref9) {
  var isPopup = _ref9.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    &:hover,\n    &:visited {\n      color: ", ";\n    }\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref10) {
  var register = _ref10.register;
  return register && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref11) {
    var isPopup = _ref11.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref12) {
  var isPopup = _ref12.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref13) {
  var isPopup = _ref13.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});

exports.RedirectLink = RedirectLink;

var SocialButtons = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n   width: ", ";\n   margin-top: 10px;\n\n  button {\n    border-radius: unset;\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n"])), function (_ref14) {
  var isPopup = _ref14.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SocialButtons = SocialButtons;

var SkeletonSocialWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    margin-bottom: 10px\n  }\n"])), function (_ref15) {
  var isPopup = _ref15.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SkeletonSocialWrapper = SkeletonSocialWrapper;

var TogglePassword = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 26px;\n  transform: translate(-150%, 10%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n \n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    transform: translate(150%, 10%);\n  "])));
});

exports.TogglePassword = TogglePassword;

var WrapperPassword = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));

exports.WrapperPassword = WrapperPassword;

var OtpWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    \n    .otp-input{\n      width: 30px;\n      height: 30px;\n      padding: 12px 20px;\n      border: 2px solid #CCC;\n      border-radius: 16px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.OtpWrapper = OtpWrapper;

var CountdownTimer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n  \n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #DBDCDB;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: ", " !important;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#DBDCDB');
}, function () {
  return (0, _polished.darken)(0.09, '#DBDCDB');
});

exports.CountdownTimer = CountdownTimer;