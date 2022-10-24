"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperButtons = exports.ValidationText = exports.Title = exports.TermsConditionWrapper = exports.Subtitle = exports.SkeletonWrapper = exports.SkeletonSocialWrapper = exports.SignUpContainer = exports.SendCodeContainer = exports.ReCaptchaWrapper = exports.PromotionsWrapper = exports.OtpContainer = exports.InputWrapper = exports.InputContainer = exports.InputBeforeIcon = exports.FormSide = exports.FormInput = exports.DateContainer = exports.CheckboxArea = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SignUpContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 65px)';
});
exports.SignUpContainer = SignUpContainer;
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;
var FormInput = _styledComponents.default.form(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  input {\n    &::placeholder, .PhoneInputInput::placeholder {\n      color: ", " !important;\n    }\n\n    &:-ms-input-placeholder, .PhoneInputInput:-ms-input-placeholder {\n      color: ", " !important;\n    }\n\n    &::-ms-input-placeholder, .PhoneInputInput::-ms-input-placeholder {\n      color: ", " !important;\n    }\n  }\n\n  div.phone_number {\n    margin: 10px 0px;\n    width: 100%;\n  }\n\n  input.form:not(:last-child) {\n    margin: 5px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    background: ", ";\n    color: #000;\n    border-color: ", ";\n  }\n  \n  .PhoneInputCountry {\n    border-color: ", ";\n  }\n\n  .PhoneInputInput {\n    border-color: ", " !important;\n  }\n"])), function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '100%' : '80%';
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.lightGray;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.lightGray;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme === null || theme === void 0 ? void 0 : theme.colors.gold;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme === null || theme === void 0 ? void 0 : theme.colors.gold;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme === null || theme === void 0 ? void 0 : theme.colors.gold;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme === null || theme === void 0 ? void 0 : theme.colors.gold;
});
exports.FormInput = FormInput;
var Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: ", ";\n  font-family: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref9) {
  var _theme$fonts, _theme$fonts$special;
  var theme = _ref9.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
});
exports.Title = Title;
var SkeletonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  span{\n    margin: 10px 0;\n    border-radius: 30px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var SkeletonSocialWrapper = (0, _styledComponents.default)(SkeletonWrapper)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    margin-top: 0;\n  }\n"])), function (_ref10) {
  var isPopup = _ref10.isPopup;
  return isPopup ? '100%' : '80%';
});
exports.SkeletonSocialWrapper = SkeletonSocialWrapper;
var ReCaptchaWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
exports.ReCaptchaWrapper = ReCaptchaWrapper;
var InputContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 5px 0px;\n\n  \n  @media (min-width: 800px) {\n    ", "\n  }\n"])), function (_ref11) {
  var isHalf = _ref11.isHalf;
  return isHalf && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: 48%;\n    "])));
});
exports.InputContainer = InputContainer;
var InputWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  \n  input{\n    box-sizing: border-box;\n    width: 100%;\n\n    ", "\n    margin: 10px 0;\n    border: 1px solid ", ";\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 40px !important;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      padding-left: 40px !important;\n    "])));
}, function (_ref12) {
  var _theme$colors;
  var theme = _ref12.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold;
}, function (_ref13) {
  var _theme$colors2;
  var theme = _ref13.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold;
});
exports.InputWrapper = InputWrapper;
var InputBeforeIcon = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    right: 15px;\n    left: initial;\n  "])));
});
exports.InputBeforeIcon = InputBeforeIcon;
var TermsConditionWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n\n  > label {\n    font-size: 14px;\n    ", "\n\n    > span:first-child {\n      font-weight: 500;\n      ", "\n    }\n\n    > a {\n      color: ", " !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    > label {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 7px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 7px;\n      "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-right: 7px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.TermsConditionWrapper = TermsConditionWrapper;
var PromotionsWrapper = (0, _styledComponents.default)(TermsConditionWrapper)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([""])));
exports.PromotionsWrapper = PromotionsWrapper;
var CheckboxArea = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([""])));
exports.CheckboxArea = CheckboxArea;
var ValidationText = _styledComponents.default.span(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.danger500;
});
exports.ValidationText = ValidationText;
var DateContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  input{\n    width: 100%;\n    box-sizing: border-box;\n  }\n"])));
exports.DateContainer = DateContainer;
var WrapperButtons = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    flex: 1;\n    margin: 10px;\n    width: 250px\n  }\n  svg{\n    margin-right: 20px;\n    position: relative;\n    top: 3px;\n  }\n"])));
exports.WrapperButtons = WrapperButtons;
var OtpContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n"])));
exports.OtpContainer = OtpContainer;
var SendCodeContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n"])));
exports.SendCodeContainer = SendCodeContainer;
var Subtitle = _styledComponents.default.h2(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 30px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Subtitle = Subtitle;