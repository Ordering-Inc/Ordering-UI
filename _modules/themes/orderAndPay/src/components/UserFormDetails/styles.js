"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonForm = exports.LanguageSelectorWrapper = exports.InputPhoneNumberWrapper = exports.InputGroup = exports.FormInput = exports.Divider = exports.ActionsForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormInput = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  div.phone_number {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  input.form {\n    font-size: 14px;\n    width: 100%;\n    height: 44px;\n    margin-bottom: 20px;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    border: 1px solid #DEE2E6;\n    &:disabled {\n      background-color: rgba(239, 239, 239, 0.3);\n      cursor: not-allowed;\n    }\n  }\n  button {\n    width: 100%;\n    padding: 7px 0;\n  }\n  @media (min-width: 769px) {\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    ", "\n  }\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      div.phone_number  {\n        width: 49%;\n      }\n    "])));
});

exports.FormInput = FormInput;

var ActionsForm = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  button {\n    flex: 1;\n    margin-top: 10px;\n    padding: 7px 0px;\n    width: 49%;\n    box-sizing: border-box;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n\n    &:nth-child(2) {\n      margin-left: 10px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    button {\n      &:nth-child(1) {\n        margin-right: 0px;\n      }\n      &:last-child {\n        margin-right: 5px;\n      }\n    }\n  "])));
});

exports.ActionsForm = ActionsForm;

var SkeletonForm = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 100%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      width: calc(50% - 10px);\n      margin: 5px;\n    }\n  }\n"])));

exports.SkeletonForm = SkeletonForm;

var InputGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  p {\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    width: 100%;\n    text-align: left;\n    margin: 0 0 7px 0;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.InputGroup = InputGroup;

var Divider = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n  margin-bottom: 20px;\n"])));

exports.Divider = Divider;
var InputPhoneNumberWrapper = (0, _styledComponents.default)(InputGroup)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  .PhoneInput {\n    border-bottom: 1px solid #E9ECEF;\n    input {\n      border-radius: 7.8px;\n      font-size: 14px;\n      width: 100%;\n      height: 44px;\n      box-sizing: border-box;\n      border-radius: 7.6px;\n      border: 1px solid #DEE2E6;\n    }\n  }\n"])));
exports.InputPhoneNumberWrapper = InputPhoneNumberWrapper;
var LanguageSelectorWrapper = (0, _styledComponents.default)(InputGroup)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  > div {\n    width: 100%;\n    border-radius: 7.6px;\n    text-align: left;\n    background: #F8F9FA !important;\n    border-color: #F8F9FA;\n\n    #list {\n      width: 100%;\n      border-radius: 7.6px;\n      background: #F8F9FA !important;\n      border-color: #F8F9FA;\n    }\n  }\n"])));
exports.LanguageSelectorWrapper = LanguageSelectorWrapper;