"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsocketStatusDot = exports.StatusItemWrapper = exports.StatusContainer = exports.InfoWrapper = exports.InfoContent = exports.DetailContainer = exports.DateWrapper = exports.Contatiner = exports.ButtonsContainer = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Contatiner = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  > button {\n    height: 41px;\n  }\n  justify-content: flex-end;\n  margin-right: 10px;\n  margin-bottom: 10px;\n"])));
exports.Contatiner = Contatiner;
var StatusContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  > span:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 6px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 6px;\n    "])));
});
exports.StatusContainer = StatusContainer;
var WebsocketStatusDot = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n\n  ", "\n  ", "\n  ", "\n"])), function (_ref) {
  var status = _ref.status;
  return status === 0 && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-color: #FF9922;\n  "])));
}, function (_ref2) {
  var status = _ref2.status;
  return status === 1 && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-color: #00D27A;\n  "])));
}, function (_ref3) {
  var status = _ref3.status;
  return status === 2 && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: #E63757;\n  "])));
});
exports.WebsocketStatusDot = WebsocketStatusDot;
var DateWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  text-align: center;\n"])));
exports.DateWrapper = DateWrapper;
var InfoWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 4px;\n  "])));
});
exports.InfoWrapper = InfoWrapper;
var InfoContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  /* display: none; */\n  color: ", ";\n  left: -100px;\n    ", "\n\n  a {\n    color: ", ";\n    transition: all 0.3s linear;\n    cursor: pointer;\n    margin-left: 5px;\n    ", "\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 12px 15px;\n    left: -200px;\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-width: 535px;\n    left: -330px;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 || (_props$theme3 = _props$theme3.colors) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      right: -100px;\n      left: initial;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 5px;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      right: -200px;\n      left: initial;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      right: -330px;\n      left: initial;\n    "])));
});
exports.InfoContent = InfoContent;
var DetailContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  h2 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 30px;\n  }\n\n  > p {\n    font-size: 14px;\n  }\n"])));
exports.DetailContainer = DetailContainer;
var StatusItemWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    align-items: center;\n\n    > span:first-child {\n      margin: 0 16px;\n    }\n  }\n  p {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "])));
});
exports.StatusItemWrapper = StatusItemWrapper;
var ButtonsContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n\n  > button {\n    border-radius: 8px;\n    height: 40px;\n    &:last-child {\n      margin: 0 10px;\n    }\n  }\n"])));
exports.ButtonsContainer = ButtonsContainer;
var ButtonWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  button{\n    height: 41px;\n      width: 175px;\n      width: 175px;\n    width: 175px;\n  }\n\n"])));
exports.ButtonWrapper = ButtonWrapper;