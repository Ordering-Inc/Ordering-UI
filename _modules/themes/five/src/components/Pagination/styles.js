"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationContainer = exports.PaginationButtonContainer = exports.PageSizeTitle = exports.PageSizeContainer = exports.PageButton = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PaginationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n"])));
exports.PaginationContainer = PaginationContainer;
var PaginationButtonContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
exports.PaginationButtonContainer = PaginationButtonContainer;
var PageButton = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-size: 14px;\n  color: ", ";\n  outline: none;\n  border: none;\n  border-radius: 27px;\n  min-width: 27px;\n  min-height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 7px;\n\n  ", "\n\n  &:hover {\n    background-color: #1507260a;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &:active {\n    background-color: #1507261a;\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 3px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 3px;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return (0, _polished.darken)(0.04, props.theme.colors.primary);
  }, function (props) {
    return (0, _polished.darken)(0.1, props.theme.colors.primary);
  });
}, function (_ref2) {
  var noEffect = _ref2.noEffect;
  return noEffect && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    cursor: initial;\n    &:hover {\n      background-color: transparent;\n    }\n    &:active {\n      background-color: transparent;\n    }\n  "])));
});
exports.PageButton = PageButton;
var PageSizeContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n\n  .select {\n    border-color: ", ";\n    padding: 5px 0;\n\n    > div:first-child {\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.PageSizeContainer = PageSizeContainer;
var PageSizeTitle = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 0px;\n  color: ", ";\n  font-size: 12px;\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
exports.PageSizeTitle = PageSizeTitle;
var Option = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.Option = Option;