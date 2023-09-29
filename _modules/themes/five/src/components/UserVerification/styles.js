"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperText = exports.WarningText = exports.OtpWrapper = exports.InputWrapper = exports.InputBeforeIcon = exports.FormInput = exports.CountdownTimer = exports.Container = exports.ButtonsWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OtpWrapper = exports.OtpWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    .otp-input{\n      width: 30px;\n      height: 30px;\n      padding: 12px 20px;\n      border: 2px solid #CCC;\n      border-radius: 16px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold;\n      &:focus{\n        border-color: ", " !important;\n      }\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var WrapperText = exports.WrapperText = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  text-align: center;\n  span {\n    &:first-child {\n      font-size: 20px;\n      font-weight: bold;\n    }\n    margin-bottom: 10px;\n  }\n"])));
var WarningText = exports.WarningText = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-align: center;\n"])), function (props) {
  return props.theme.colors.warning500;
});
var CountdownTimer = exports.CountdownTimer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 10px auto 0;\n  border-radius: 7.6px;\n  width: 30%;\n  background-color: ", "80;\n  span {\n    &:first-child {\n      font-size: 30px;\n      font-weight: bold;\n      color: ", "\n    }\n    &:last-child {\n      font-size: 24px;\n      color: #FFF;\n      cursor: pointer;\n      :hover {\n        color: ", " !important;\n      }\n      :active {\n        color: #FFF !important;\n      }\n    }\n  }\n"])), function (props) {
  return props.error ? '#ED4337' : props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function () {
  return (0, _polished.darken)(0.07, '#FFF');
});
var Container = exports.Container = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  input:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return props.phone ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 100%;\n\n    .phone_number {\n      display: flex;\n      justify-content: center;\n      margin: 20px 0;\n    }\n    .PhoneInput {\n      border-bottom: 1px solid #E9ECEF;\n      input {\n        border: none;\n        border-radius: 0px;\n        padding: 5px;\n      }\n    }\n    .PhoneInputInput {\n      text-align: center;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    position: relative;\n    input {\n      box-sizing: border-box;\n      width: 100%;\n      padding-right: 40px !important;\n      padding-left: 40px !important;\n      margin: 10px 0;\n    }\n  "])));
});
var InputBeforeIcon = exports.InputBeforeIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 14px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  ", "\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    right: 14px;\n    left: initial;\n  "])));
});
var ButtonsWrapper = exports.ButtonsWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  div button {\n    width: 100%;\n  }\n"])));