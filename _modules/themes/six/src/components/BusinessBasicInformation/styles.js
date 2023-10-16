"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfomation = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessContent = exports.BusinessContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;  \n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 20px;\n  ", "\n  ", "\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n  @media (min-width: 381px) {\n    padding: 10px 35px;\n  }\n  @media (min-width: 1024px) {\n    padding: 0;\n  }\n"])), function (props) {
  return props.isClosed && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #B8B8B8;\n  "])));
}, function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: transparent ;\n    span {\n      margin: 2px 0;\n    }\n  "])));
});
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  div {\n    font-size: 14px;\n    display: flex;\n    justify-content: space-between;\n    h2 {\n      margin-top: 0;\n      margin-bottom: 5px;\n    }\n    p {\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      /* white-space: nowrap; */\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 1; /* number of lines to show */\n      -webkit-box-orient: vertical;\n      svg {\n        margin-right: 4px;\n        ", "\n        &.start {\n          color: #FFC917;\n        }\n      }\n      &.bold {\n        font-weight: 600;\n      }\n      &.type {\n        margin-bottom: 5px;\n        ", "        \n      }\n    }\n    @media (min-width: 481px) {\n      font-size: 16px;\n    }\n  }\n  .meta {\n    width: 300px;\n    @media (min-width: 381px) {\n      width: 350px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.colors.fontSecundary ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n                color: ", ";\n            "])), function (props) {
    var _props$theme3;
    return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.fontSecundary;
  }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n                color: #b5b4b4;;\n            "])));
});
var BusinessInfomation = exports.BusinessInfomation = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 2;\n\n  svg {\n    font-size: 20px;\n  }\n\n  &:hover svg{\n    font-size: 21px;\n  }\n"])));