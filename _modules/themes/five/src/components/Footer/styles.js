"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconList = exports.SocialGroup = exports.LanguageWrapper = exports.FooterWrapper = exports.FooterBottom = exports.Description = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
exports.Container = Container;
var FooterWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid #d9d9d9;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n"])));
exports.FooterWrapper = FooterWrapper;
var Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n\n  > h4 {\n    font-weight: 600;\n    font-size: 16px;\n    margin: 20px 0px 15px 0px;\n  }\n\n  > div {\n    margin: 10px 0;\n    > a {\n      display: inline-block;\n      text-decoration: none;\n      font-size: 14px;\n      text-decoration: none;\n      color: #344050;\n      transition: all 0.2s linear;\n\n      &:hover {\n        color: ", ";\n        text-decoration: underline;\n      }\n    }\n  }\n\n\n\n  @media (min-width: 768px) {\n    width: 50%;\n    text-align: left;\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    width: 25%;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});
exports.Content = Content;
var FooterBottom = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
exports.FooterBottom = FooterBottom;
var Description = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 10px 0;\n  font-size: 14px;\n  color: #344050;\n"])));
exports.Description = Description;
var SocialIconList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (min-width: 1400px) {\n    width: 25%;\n    justify-content: space-between;\n  }\n"])));
exports.SocialIconList = SocialIconList;
var LanguageWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  ", "\n\n  svg {\n    font-size: 20px;\n  }\n  #select-input {\n    background-color: transparent !important;\n    border: none;\n    color: #344050 !important;\n\n    > div:first-child {\n      font-size: 14px;\n      text-decoration: underline;\n      padding-right: 0px !important;\n      padding-left: 12px !important;\n      ", "\n      svg {\n        display: none;\n      }\n    }\n    #list {\n      bottom: 100%;\n      border-radius: 8px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n    margin-right: 0px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        padding-right: 12px !important;\n        padding-left: 0px !important;\n      "])));
});
exports.LanguageWrapper = LanguageWrapper;
var SocialGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  a {\n    color:  #344050;\n    display: flex;\n    align-items: center;\n    margin: 10px 0px 10px 15px;\n    ", "\n    > svg {\n      font-size: 20px;\n    }\n    transition: all 0.3s ease;\n\n    &:hover {\n      transform: scale(1.04);\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin: 10px 15px 10px 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.SocialGroup = SocialGroup;