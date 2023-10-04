"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperMap = exports.WrapInput = exports.WrapAddressInput = exports.Title = exports.TagButton = exports.InputText = exports.FormControl = exports.FormActions = exports.CloseButtonWrapper = exports.AddressWrap = exports.AddressTagSection = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 42px;\n  }\n"])));
var FormControl = exports.FormControl = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    height: 43px;\n    width: 100%;\n    &::placeholder{\n      color: #B1BCCC;\n    }\n  }\n\n  textarea {\n    width: 100%;\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid #DEE2E6;\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 7px 15px;\n    outline: none;\n    color: ", ";\n    ::placeholder {\n      color: #B1BCCC;\n    }\n\n    &:-ms-input-placeholder {\n      color: #B1BCCC;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #B1BCCC;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  @media (min-width: 481px) {\n    padding: 10px 0;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var AddressWrap = exports.AddressWrap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n"])));
var WrapAddressInput = exports.WrapAddressInput = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: #9A9A9A;\n    top: 11px;\n    left: 10px;\n    font-size: 20px;\n    ", "\n  }\n\n  input {\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 15px 7px 30px !important;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 7px 30px 7px 15px !important;\n    "])));
});
var AddressTagSection = exports.AddressTagSection = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n"])));
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n"])));
var WrapperSkeleton = exports.WrapperSkeleton = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  span {\n    width: 100%;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  text-align: initial;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var CloseButtonWrapper = exports.CloseButtonWrapper = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: fixed;\n  cursor: pointer;\n  top: 20px;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    right: 20px;\n  "])));
});
var WrapInput = exports.WrapInput = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  &.address_notes {\n    width: 100%;\n  }\n\n  &.internal_number,\n  &.zipcode {\n    width: 100%;\n  }\n  @media (min-width: 621px) {\n    &.internal_number,\n    &.zipcode  {\n      width: 48%;\n    }\n  }\n"])));
var InputText = exports.InputText = _styledComponents.default.label(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  margin: 30px 0 7px 0;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var TagButton = exports.TagButton = _styledComponents.default.button(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  border-radius: 8px;\n  outline: none;\n  background: transparent;\n  border: none;\n  font-size: 14px;\n  padding: 10px 15px;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.secundaryDarkContrast;
  }, function (props) {
    return props.theme.colors.secundaryDark;
  });
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});