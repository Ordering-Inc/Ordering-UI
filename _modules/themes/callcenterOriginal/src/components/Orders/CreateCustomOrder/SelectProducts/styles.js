"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.SelectOption = exports.SearchProductsWrapper = exports.ProductQuantityActionsContainer = exports.ProductEditDeleteActions = exports.OptionsToSelectContainer = exports.Container = exports.CartProductsWrapper = exports.CartProductsConatiner = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 50px;\n"])));
exports.Container = Container;
var SearchProductsWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 11px;\n\n  > input {\n    width: 100%;\n    height: 44px;\n    ", "\n  }\n\n  span.loading {\n    position: absolute;\n    top: 10px;\n    ", "\n\n    @keyframes spinner-content {\n      0% { transform: rotate(0) }\n      100% { transform: rotate(360deg) }\n    }\n\n    svg {\n      animation: spinner-content 1.85s linear infinite;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding-right: 40px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      right: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.SearchProductsWrapper = SearchProductsWrapper;
var OptionsToSelectContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  z-index: 100;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  max-height: 300px;\n  overflow-x: hidden;\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 9px 0;\n\n  > p {\n    font-size: 12px;\n    margin: 0 16px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
});
exports.OptionsToSelectContainer = OptionsToSelectContainer;
var SelectOption = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  padding: 9px 16px;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ", ";\n  }\n  span {\n    font-size: 14px;\n    &.name {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 180px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.SelectOption = SelectOption;
var WrapperImage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 38px;\n  max-height: 38px;\n  height: 38px;\n  width: 38px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  ", "\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
exports.WrapperImage = WrapperImage;
var CartProductsConatiner = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"])));
exports.CartProductsConatiner = CartProductsConatiner;
var CartProductsWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 5px;\n\n  > div {\n    &:first-child {\n      cursor: initial;\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
});
exports.CartProductsWrapper = CartProductsWrapper;
var ProductQuantityActionsContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n    padding: 5px;\n    width: 45px;\n    text-align: center;\n    border: none;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 16px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: 16px;\n  "])));
});
exports.ProductQuantityActionsContainer = ProductQuantityActionsContainer;
var ProductEditDeleteActions = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  button {\n    > svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n"])));
exports.ProductEditDeleteActions = ProductEditDeleteActions;