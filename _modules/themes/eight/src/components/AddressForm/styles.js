"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperMap = exports.ShowMap = exports.FormControl = exports.FormActions = exports.AddressWrap = exports.AddressTagSection = exports.AddressFormContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressFormContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  h1 {\n    color: ", ";\n    font-size: 24px;\n    text-align: center;\n    width: 100%;\n    margin: 0px;\n  }\n\n  h5 {\n    color: ", ";\n    font-size: 16px;\n    text-align: center;\n    width: 100%;\n    font-weight: 400;\n    margin: 10px 0 30px 0;\n  }\n\n  @media (min-width: 768px) {\n    ", "\n    h1 {\n      font-size: 32px;\n    }\n\n    h5 {\n      font-size: 20px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    h1 {\n      font-size: 40px;\n    }\n\n    h5 {\n      font-size: 24px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    h1 {\n      font-size: 48px;\n    }\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 90%;\n    margin: 20px auto;\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 100%;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      width: 60%;\n      margin: 50px auto;\n    "])));
});
exports.AddressFormContainer = AddressFormContainer;
var FormActions = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    min-width: 150px;\n  }\n"])));
exports.FormActions = FormActions;
var FormControl = _styledComponents.default.form(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 0px;\n\n  > * {\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 481px) {\n    padding: 10px;\n  }\n"])));
exports.FormControl = FormControl;
var AddressWrap = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  > div {\n    width: 100%;\n  }\n\n  > button {\n    bottom: 10px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      right: 10px;\n    "])));
});
exports.AddressWrap = AddressWrap;
var AddressTagSection = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    -webkit-tap-highlight-color: transparent;\n\n    img {\n      width: 22px;\n      height: 22px;\n    }\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 22px;\n    }\n  }\n\n  button.active {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.AddressTagSection = AddressTagSection;
var WrapperMap = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 250px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 7.6px;\n  }\n"])));
exports.WrapperMap = WrapperMap;
var ShowMap = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  text-align: center;\n  color: #000;\n  width: 100%;\n  font-weight: 600;\n  cursor: pointer;\n"])));
exports.ShowMap = ShowMap;
var WrapperSkeleton = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  span {\n    width: 100%;\n  }\n"])));
exports.WrapperSkeleton = WrapperSkeleton;