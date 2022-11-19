"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInformationContainer = exports.Title = exports.SkeletonForm = exports.PromotionsWrapper = exports.PhoneContainer = exports.LanguageSelectorWrapper = exports.InputPhoneNumberWrapper = exports.InputGroup = exports.Info = exports.FormInput = exports.FormContainer = exports.Divider = exports.CountryFlag = exports.ActionsForm = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormInput = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  color: ", ";\n  div.phone_number {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  button {\n    width: 100%;\n    padding: 7px 0;\n  }\n  ", "\n"])), function (_ref) {
  var _theme$colors;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
}, function (_ref2) {
  var isCheckout = _ref2.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: none;\n  "])));
});
exports.FormInput = FormInput;
var ActionsForm = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n\n  button {\n    margin-top: 10px;\n    padding: 7px 0px;\n    width: 125px;\n    box-sizing: border-box;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n\n    &:nth-child(2) {\n      margin-left: 10px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    button {\n      &:nth-child(1) {\n        margin-right: 0px;\n      }\n      &:last-child {\n        margin-right: 5px;\n      }\n    }\n  "])));
});
exports.ActionsForm = ActionsForm;
var SkeletonForm = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 100%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      width: calc(50% - 10px);\n      margin: 5px;\n    }\n  }\n"])));
exports.SkeletonForm = SkeletonForm;
var InputGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 50%;\n  padding: 0 10px;\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    color: ", ";\n    width: 100%;\n    text-align: left;\n    margin: 0 0 7px 0;\n  }\n  input {\n    padding: 10px;\n  }\n"])), function (_ref3) {
  var _theme$colors2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#fff';
});
exports.InputGroup = InputGroup;
var Divider = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n  margin-bottom: 20px;\n"])));
exports.Divider = Divider;
var InputPhoneNumberWrapper = (0, _styledComponents.default)(InputGroup)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  .PhoneInput {\n    border-bottom: 1px solid #E9ECEF;\n    input {\n      border: none;\n      border-radius: 0px;\n      padding: 5px;\n    }\n  }\n"])));
exports.InputPhoneNumberWrapper = InputPhoneNumberWrapper;
var LanguageSelectorWrapper = (0, _styledComponents.default)(InputGroup)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  width: 150px;\n  padding: 0;\n  * {\n    color: #000 !important;\n  }\n  > div {\n    width: 100%;\n    border-radius: 0;\n    text-align: left;\n    background: #F8F9FA !important;\n    border-color: #F8F9FA;\n    height: 44px;\n\n    > div:first-child {\n      height: 44px;\n    }\n\n    #list {\n      width: 100%;\n      border-radius: 0;\n      background: #F8F9FA !important;\n      border-color: #F8F9FA;\n      box-shadow: 0px 10px 12px 1px #e6e6e6;\n    }\n  }\n"])));
exports.LanguageSelectorWrapper = LanguageSelectorWrapper;
var PromotionsWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 10px 0;\n  width: 100%;\n  > label {\n    font-size: 16px;\n    ", "\n\n    > span:first-child {\n      font-weight: 500;\n      ", "\n    }\n\n    > a {\n      color: ", " !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    > label {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 7px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 7px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 7px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.PromotionsWrapper = PromotionsWrapper;
var Title = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  border-bottom: 1px solid #fff;\n  display: flex;\n  justify-content: flex-start;\n  color: ", ";\n  padding: 15px;\n  h2{\n    font-size: 16px;\n  }\n"])), function (_ref4) {
  var _theme$colors3;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
});
exports.Title = Title;
var UserInformationContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-sizing: border-box;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  p{\n    margin: 2px 0;\n  }\n  span {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: underline;\n    text-align: right;\n    display: flex;\n  }\n  ", "\n"])), function (_ref5) {
  var _theme$colors4;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiary) || '#fff';
}, function (_ref6) {
  var _theme$colors5;
  var theme = _ref6.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.gold;
}, function (_ref7) {
  var isCheckout = _ref7.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    padding: 0;\n  "])));
});
exports.UserInformationContainer = UserInformationContainer;
var PhoneContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n"])));
exports.PhoneContainer = PhoneContainer;
var CountryFlag = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n  .PhoneInputCountryIcon {\n    width: 25px;\n  }\n  .PhoneInputInput {\n    display: none;\n  }\n  .PhoneInputCountrySelect {\n    display: none;\n  }\n"])));
exports.CountryFlag = CountryFlag;
var Info = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.Info = Info;
var FormContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  form {\n    box-sizing: border;\n  }\n  input.form {\n    padding: 5px;\n    font-size: 14px;\n    width: 100%;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n    &:disabled {\n      background-color: rgba(239, 239, 239, 0.3);\n      cursor: not-allowed;\n    }\n  }\n  ", "\n  @media (min-width: 768px){\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"])), function (_ref8) {
  var isCheckout = _ref8.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    input {\n      color: #000 !important;\n    }\n  "])));
});
exports.FormContainer = FormContainer;