"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconList = exports.SocialGroup = exports.PoweredByOrdering = exports.LanguageWrapper = exports.FooterWrapper = exports.FooterBottom = exports.Description = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var FooterWrapper = exports.FooterWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid #d9d9d9;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n  > h4 {\n    font-weight: 600;\n    font-size: 16px;\n    margin: 20px 0px 15px 0px;\n  }\n  > div {\n    margin: 10px 0;\n    > a {\n      display: inline-block;\n      text-decoration: none;\n      font-size: 14px;\n      text-decoration: none;\n      color: #344050;\n      transition: all 0.2s linear;\n      &:hover {\n        color: ", ";\n        text-decoration: underline;\n      }\n    }\n  }\n  @media (min-width: 768px) {\n    width: 50%;\n    text-align: left;\n    ", "\n  }\n  @media (min-width: 992px) {\n    width: 25%;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});
var FooterBottom = exports.FooterBottom = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var Description = exports.Description = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 10px 0;\n  font-size: 14px;\n  color: #344050;\n"])));
var SocialIconList = exports.SocialIconList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  @media (min-width: 1400px) {\n    width: 25%;\n    justify-content: space-between;\n  }\n"])));
var LanguageWrapper = exports.LanguageWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  ", "\n  svg {\n    font-size: 20px;\n  }\n  #select-input {\n    background-color: transparent !important;\n    border: none;\n    color: #344050 !important;\n    > div:first-child {\n      font-size: 14px;\n      text-decoration: underline;\n      padding-right: 0px !important;\n      padding-left: 12px !important;\n      ", "\n      svg {\n        display: none;\n      }\n    }\n    #list {\n      bottom: 100%;\n      border-radius: 8px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n    margin-right: 0px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        padding-right: 12px !important;\n        padding-left: 0px !important;\n      "])));
});
var SocialGroup = exports.SocialGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    color:  #344050;\n    display: flex;\n    align-items: center;\n    margin: 10px 0px 10px 15px;\n    ", "\n    > svg {\n      font-size: 20px;\n    }\n    transition: all 0.3s ease;\n    &:hover {\n      transform: scale(1.04);\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin: 10px 15px 10px 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
var PoweredByOrdering = exports.PoweredByOrdering = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  white-space: pre;\n  margin-bottom: 10px;\n  a{\n    font-weight: 600;\n  }\n"])));