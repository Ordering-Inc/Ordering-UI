"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.TermsConditionWrapper = exports.SkeletonWrapper = exports.SignupDescriptionTitle = exports.SignupDescriptionContent = exports.SignupDescriptionContainer = exports.SignupBusinessContainer = exports.SignUpTitle = exports.ReCaptchaWrapper = exports.PhoneNumberWrapper = exports.FormSide = exports.FormInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SignupBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n  padding: 25px 30px 30px;\n\n  > div {\n    width: 100%;\n    max-width: 580px;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 993px) {\n    flex-direction: row;\n    padding: 120px 130px;\n    > div {\n      width: calc(50% - 12px);\n    }\n  }\n"])), function (_ref) {
  var bgImage = _ref.bgImage;
  return bgImage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])), bgImage);
});
exports.SignupBusinessContainer = SignupBusinessContainer;
var SignupDescriptionContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-right: 0;\n  margin-top: 45px;\n\n  @media (min-width: 993px) {\n    margin-right: 24px;\n    margin-top: 0;\n  }\n"])));
exports.SignupDescriptionContainer = SignupDescriptionContainer;
var SignupDescriptionTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 60px;\n  color: ", ";\n\n  @media (min-width: 430px) {\n    font-size: 37px;\n  }\n\n  @media (min-width: 1275px) {\n    font-size: 48px;\n  }\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
});
exports.SignupDescriptionTitle = SignupDescriptionTitle;
var SignupDescriptionContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 36px;\n  color: ", ";\n\n  @media (min-width: 430px) {\n    font-size: 20px;\n  }\n\n  @media (min-width: 993px) {\n    margin-top: 15px;\n  }\n\n  @media (min-width: 1275px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
});
exports.SignupDescriptionContent = SignupDescriptionContent;
var FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  div.phone_number {\n    margin: 10px 0px;\n    width: 100%;\n  }\n\n  input.form:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n  > input {\n    font-size: 20px;\n    box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);\n  }\n  > .formStyle {\n    & > .phone_number {\n      border-radius: 7.6px;\n      font-size: 20px;\n      box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);\n    }\n    & > input {\n      border-radius: 7.6px;\n      font-size: 20px;\n      box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);\n    }\n  }\n  > .formButton {\n    width: 128px;\n    padding: 15px 0;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 30px;\n  }\n"])));
exports.FormInput = FormInput;
var PhoneNumberWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  .PhoneInput {\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    background: white;\n\n    .PhoneInputCountry {\n      padding-left: 20px;\n      ", "\n    }\n\n    input {\n      border: none;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        padding-left: 0;\n        padding-right: 20px;\n      "])));
});
exports.PhoneNumberWrapper = PhoneNumberWrapper;
var ReCaptchaWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
exports.ReCaptchaWrapper = ReCaptchaWrapper;
var WrapperPassword = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));
exports.WrapperPassword = WrapperPassword;
var TogglePassword = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 26px;\n  transform: translate(-150%, 10%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    transform: translate(150%, 10%);\n  "])));
});
exports.TogglePassword = TogglePassword;
var TermsConditionWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n\n  > label {\n    font-size: 14px;\n    ", "\n\n    > span:first-child {\n      font-weight: 500;\n      ", "\n    }\n\n    > a {\n      color: ", " !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    > label {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-left: 7px;\n      "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-right: 7px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.TermsConditionWrapper = TermsConditionWrapper;
var SkeletonWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  span{\n    margin: 10px 0;\n    border-radius: 7.6px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var FormSide = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 31px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  padding: 25px 30px 25px;\n  > h1 {\n    width: 100%;\n    margin-bottom: 25px;\n    margin-top: 15;\n    font-weight: 500;\n    font-size: 24px;\n  }\n\n  @media (min-width: 769px) {\n    padding: 42px 58px 65px;\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    width: 45%;\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;
var SignUpTitle = _styledComponents.default.h1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 10px !important;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 65px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.black;
});
exports.SignUpTitle = SignUpTitle;