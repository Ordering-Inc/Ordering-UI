"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtpWrapper = exports.DownTimer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0px auto;\n  max-width: 350px;\n\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 18px;\n  }\n\n  > button {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 0px;\n    transition: all 0.3s linear;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  @media (min-width: 576px) {\n    max-width: 500px;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});
exports.Container = Container;
var DownTimer = _styledComponents.default.h4(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 36px;\n"])));
exports.DownTimer = DownTimer;
var OtpWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-top: 18px;\n\n  .otp-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 20px 0px;\n    \n    .otp-input {\n      width: 50px !important;\n      height: 55px;\n      border: 1px solid #DEE2E6;\n      border-radius: 7.6px;\n      background-color: #FFF;\n      outline: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #B1BCCC;\n      }\n      &:-ms-input-placeholder {\n        color: #B1BCCC;\n      }\n    }\n  }\n\n  @media (min-width: 576px) {\n    .otp-container {\n      .otp-input {\n        width: 100px !important;\n        height: 105px;\n        font-size: 36px;\n      }\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#DEE2E6');
});
exports.OtpWrapper = OtpWrapper;