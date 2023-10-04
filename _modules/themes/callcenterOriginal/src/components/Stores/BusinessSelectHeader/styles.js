"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.SelectHeaderContent = exports.PopMenuContatiner = exports.OptionItem = exports.BusinessSearch = exports.BusinessList = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PopMenuContatiner = exports.PopMenuContatiner = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  left:0px;\n  background: ", ";\n  width: 280px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n  border-radius: 7.6px;\n  padding: 8px;\n  z-index: 999;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var SelectHeaderContent = exports.SelectHeaderContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  > button {\n    margin-top: 10px;\n    width: 100%;\n  }\n"])));
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 5px;\n  padding: 5px;\n\n  > div {\n   width: 100%;\n\n   > input {\n    background: ", ";\n   }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var OptionItem = exports.OptionItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 7.6px;\n  &:hover {\n    background-color: ", ";\n  }\n  img {\n    min-height: 38px;\n    min-width: 38px;\n    height: 38px;\n    width: 38px;\n    border-radius: 8px;\n    object-fit: cover;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    margin-right: 8px;\n    ", "\n  }\n  > div {\n    display: flex;\n    flex-direction: column;\n    max-width: 210px;\n    b {\n      font-size: 14px;\n      line-height: 20px;\n      font-weight: 400;\n      color: ", ";\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n    p {\n      margin: 0;\n      font-size: 12px;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      color: ", ";\n    }\n  }\n  span {\n    display: flex;\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 8px;\n    "])));
}, function (props) {
  return props.theme.colors.textBlack;
}, function (props) {
  return props.theme.colors.textGray;
});
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n"])));
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  >div>div{\n    margin: 0;\n    button {\n      font-size: 12px;\n    }\n  }\n"])));