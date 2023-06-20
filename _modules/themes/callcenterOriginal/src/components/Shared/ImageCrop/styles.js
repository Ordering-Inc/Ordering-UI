"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeWrapper = exports.ImageCropWrapper = exports.ImageCropActionWrapper = exports.Container = exports.ButtonWrapper = exports.ActionContentWrapper = exports.ActionAspectRatioBox = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var ImageCropWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 400px;\n  margin-bottom: 8px;\n  position: relative;\n\n  > div {\n    border-radius: 8px;\n    overflow: hidden;\n  }\n\n  img {\n    display: block;\n    /* This rule is very important, please don't ignore this */\n    max-width: 100%;\n  }\n"])));
exports.ImageCropWrapper = ImageCropWrapper;
var ImageCropActionWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n  flex-direction: column;\n  \n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])));
exports.ImageCropActionWrapper = ImageCropActionWrapper;
var RangeWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  span {\n    font-size: 14px;\n    white-space: nowrap;\n    &.title {\n      margin-right: 5px;\n      ", "\n    }\n    &.percent {\n      margin-left: 5px;\n      ", "\n    }\n  }\n\n  input[type='range'] {\n    height: 8px;\n    border: 0px;\n    outline: none !important;\n    flex: 1;\n    border-radius: 10px;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    z-index: 10;\n    position: relative;\n  }\n\n  input[type='range'],\n  input[type='range']::-webkit-slider-runnable-track,\n  input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n\n  input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    height: 20px;\n    width: 20px;\n    background: #FFFFFF;\n    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    border: 5px solid ", ";\n  }\n\n  @media (min-width: 576px) {\n    width: auto;\n    flex: 1;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 5px;\n      "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.RangeWrapper = RangeWrapper;
var ActionContentWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > button {\n    margin-left: 15px;\n    font-size: 14px;\n    ", "\n\n    svg {\n      width: 16px;\n      height: 16px;\n      margin-left: 5px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
exports.ActionContentWrapper = ActionContentWrapper;
var ButtonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n  }\n"])));
exports.ButtonWrapper = ButtonWrapper;
var ActionAspectRatioBox = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  label {\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 0;\n    margin-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
});
exports.ActionAspectRatioBox = ActionAspectRatioBox;